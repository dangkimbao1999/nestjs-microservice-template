import { Injectable } from '@nestjs/common';
import { TwitterApi } from 'twitter-api-v2';
import TwitterApiv2ReadOnly from 'twitter-api-v2/dist/esm/v2/client.v2.read';
import { Cron, CronExpression } from '@nestjs/schedule';
import { PrismaService } from '@social-fi-workspace/shared/services';
import { LikeParam } from '../constants/Query.type';
@Injectable()
export class TwitterAPIService {
  private twitterClient: TwitterApiv2ReadOnly;

  constructor(private readonly prisma: PrismaService) {
    const bearer = process.env.TWITTER_BEARER_TOKEN;
    this.twitterClient = new TwitterApi(bearer).readOnly.v2;
  }

  async markCompleted(twitterId: string, taskId: string) {
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
        lastIdSynced: twitterId,
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

    console.log(queries);
  }
}
