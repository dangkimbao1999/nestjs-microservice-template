import { Module } from '@nestjs/common';
import { TwitterAPIService } from './twitter-api.service';
import { TwitterApiController } from './twitter-api.controller';
import { PrismaService } from '@social-fi-workspace/shared/services';

@Module({
  controllers: [TwitterApiController],
  providers: [TwitterAPIService, PrismaService],
})
export class TwitterApiModule {}
