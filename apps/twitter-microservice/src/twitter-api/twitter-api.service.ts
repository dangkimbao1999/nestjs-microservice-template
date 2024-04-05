import { Injectable } from '@nestjs/common';
import { TwitterApi } from 'twitter-api-v2';
import TwitterApiv2ReadOnly from 'twitter-api-v2/dist/esm/v2/client.v2.read';
import { Cron, CronExpression } from '@nestjs/schedule';
import { PrismaService } from '@social-fi-workspace/shared/services';
import { LikeParam, ReplyParam } from '../constants/Query.type';
@Injectable()
export class TwitterAPIService {
  private twitterClient: TwitterApiv2ReadOnly;

  constructor(private readonly prisma: PrismaService) {
    const bearer = process.env.TWITTER_BEARER_TOKEN;
    this.twitterClient = new TwitterApi(bearer).readOnly.v2;
  }

  async markCompleted(twitterId: string, taskId: string, tweetId?: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        twitterId,
      },
    });
    if (!user) return;
    const task = await this.prisma.platformCriteria.findUnique({
      where: { id: taskId },
      include: {
        criteria: true,
      },
    });
    const activityLog = await this.prisma.userActivityLogs.findUnique({
      where: {
        userId_taskId: {
          userId: user.id,
          taskId,
        },
      },
    });
    if (!activityLog && user) {
      await this.prisma.userActivityLogs.create({
        data: {
          userId: user.id,
          taskId,
          pointClaimed: task.criteria.point,
        },
      });
      await this.prisma.user.update({
        where: {
          twitterId: user.twitterId,
        },
        data: {
          point: {
            increment: task.criteria.point,
          },
        },
      });
    }
    await this.prisma.platformCriteria.update({
      where: {
        id: taskId,
      },
      data: {
        lastIdSynced: tweetId ? tweetId : twitterId,
      },
    });
  }

  @Cron(CronExpression.EVERY_10_SECONDS)
  async getTwitterLike() {
    const queries = await this.prisma.platformCriteria.findMany({
      where: {
        platformId: 'TW',
        criteria: {
          description: 'Like',
        },
      },
      include: {
        criteria: true,
      },
    });

    for (let i = 0; i < queries.length; i++) {
      if (queries[i]?.query && typeof queries[i]?.query === 'object') {
        const params = queries[i].query as unknown as LikeParam;
        const usersPaginated = await this.twitterClient.tweetLikedBy(
          params.id,
          { asPaginator: true, 'user.fields': 'username,created_at' },
        );
        let firstUser = null;
        for await (const user of usersPaginated) {
          if (user.id === queries[i].lastIdSynced) return;
          if (!firstUser) {
            firstUser = user;
            await this.prisma.platformCriteria.update({
              where: {
                id: queries[i].id,
              },
              data: {
                lastIdSynced: user.id,
              },
            });
          }
          await this.markCompleted(user.id, queries[i].id);
        }
      }
    }
  }

  // @Cron(CronExpression.EVERY_10_SECONDS)
  async getReply() {
    const queries = await this.prisma.platformCriteria.findMany({
      where: {
        platformId: 'TW',
        criteria: {
          description: 'Reply',
        },
      },
      include: {
        criteria: true,
      },
    });
    for (let i = 0; i < queries.length; i++) {
      if (queries[i]?.query && typeof queries[i]?.query === 'object') {
        const params = queries[i].query as unknown as ReplyParam;
        console.log(queries[i].lastIdSynced);
        const usersPaginated = await this.twitterClient.search(
          `in_reply_to_tweet_id:${params.id}`,
          {
            expansions: 'author_id',
            ...(queries[i].lastIdSynced && {
              since_id: queries[i].lastIdSynced,
            }),
          },
        );
        let firstTweet = null;
        for await (const tweet of usersPaginated) {
          console.log('tweet: ', tweet);
          if (tweet.id === queries[i].lastIdSynced) return;
          if (!firstTweet) {
            firstTweet = tweet;
            await this.prisma.platformCriteria.update({
              where: {
                id: queries[i].id,
              },
              data: {
                lastIdSynced: tweet.id,
              },
            });
          }
          await this.markCompleted(tweet.author_id, queries[i].id, tweet.id);
        }
      }
    }
  }
}
