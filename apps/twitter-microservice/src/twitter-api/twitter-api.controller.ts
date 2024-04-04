import { Controller } from '@nestjs/common';
import { TwitterAPIService } from './twitter-api.service';

@Controller('twitter')
export class TwitterApiController {
  constructor(private readonly twitterApiService: TwitterAPIService) {}
}
