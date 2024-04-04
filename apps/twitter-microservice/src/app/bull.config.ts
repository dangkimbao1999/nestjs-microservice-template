import { BullModule } from '@nestjs/bull';
import { Global, Module } from '@nestjs/common';
import { QUEUE_TWITTER } from '../constants/Job.constant';

@Global()
@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: process.env.REDISDB_HOST,
        port: parseInt(process.env.REDISDB_PORT),
        password: process.env.REDIS_PASSWORD,
      },
    }),
    BullModule.registerQueue({ name: QUEUE_TWITTER }),
  ],
  exports: [BullModule],
})
export class BullConfigModule {}
