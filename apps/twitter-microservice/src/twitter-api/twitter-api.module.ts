import { Module } from '@nestjs/common';
import { TwitterAPIService } from './twitter-api.service';
import { TwitterApiController } from './twitter-api.controller';

@Module({
  controllers: [TwitterApiController],
  providers: [TwitterAPIService],
})
export class TwitterApiModule {}
