import { Body, Controller } from '@nestjs/common';
import { TwitterAPIService } from './twitter-api.service';
import { Get } from '@nestjs/common';

@Controller('twitter')
export class TwitterApiController {
  constructor(private readonly twitterApiService: TwitterAPIService) {}

  @Get('tweet')
  async postTweet(): Promise<any> {
    return this.twitterApiService.postTweet();
  }
}
