import { Injectable } from '@nestjs/common';
import { TwitterApi } from 'twitter-api-v2';
import TwitterApiv2ReadOnly from 'twitter-api-v2/dist/esm/v2/client.v2.read';
import { Cron, CronExpression } from '@nestjs/schedule';
@Injectable()
export class TwitterAPIService {
  private twitterClient: TwitterApiv2ReadOnly;

  constructor() {
    const bearer = process.env.TWITTER_BEARER_TOKEN;

    console.log(bearer);

    this.twitterClient = new TwitterApi(bearer).readOnly.v2;
  }

  @Cron(CronExpression.EVERY_30_SECONDS)
  async getTwitterLike() {
    console.log('hello');
    // await this.twitterClient.tweetLikedBy()
    const usersPaginated = await this.twitterClient.tweetLikedBy(
      '1774702734047883410',
      { asPaginator: true },
    );
    for await (const user of usersPaginated) {
      console.log(user.id);
    }
  }
}
