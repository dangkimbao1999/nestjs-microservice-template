import { Injectable } from '@nestjs/common';
import { TwitterApi, TwitterApiReadOnly } from 'twitter-api-v2';
import TwitterApiv2ReadOnly from 'twitter-api-v2/dist/esm/v2/client.v2.read';
import needle from 'needle'
@Injectable()
export class TwitterAPIService {
  private twitterClient: TwitterApiv2ReadOnly;

  constructor() {
    const apiKey = process.env.TWITTER_API_KEY
    const apiSecret = process.env.TWITTER_API_SECRET
    const accessToken = process.env.TWITTER_ACCESS_TOKEN
    const accessSecret = process.env.TWITTER_ACCESS_SECRET
    const bearer = process.env.TWITTER_BEARER_TOKEN

    console.log(bearer)

    this.twitterClient = new TwitterApi(bearer).readOnly.v2;
  }

  async postTweet(): Promise<any> {
    // const tweets = await this.twitterClient.me();
    // console.log(tweets)
    const endpointURL = "https://api.twitter.com/2/users/by?usernames="
    const params = {
      usernames: "TwitterDev,TwitterAPI", // Edit usernames to look up
      "user.fields": "created_at,description", // Edit optional query parameters here
      "expansions": "pinned_tweet_id"
    }
    const res = await needle('get', endpointURL, params, {
      headers: {
          "User-Agent": "v2UserLookupJS",
          "authorization": `Bearer ${process.env.TWITTER_BEARER_TOKEN}`
      }
  })

  if (res.body) {
      return res.body;
  } else {
      throw new Error('Unsuccessful request')
  }
    // for await (const tweet of tweets) {
    //     console.log(tweet)
    // }
  }

  // Add more methods as needed
}
