import { Module } from '@nestjs/common';
import { TwitterAPIService } from './twitter-api.service';
import { TwitterApiController } from './twitter-api.controller';
import { PrismaService, ReferralService } from '@social-fi-workspace/shared/services';

@Module({
  controllers: [TwitterApiController],
  providers: [TwitterAPIService, PrismaService, ReferralService],
})
export class TwitterApiModule {}
