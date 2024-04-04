import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TwitterApiModule } from '../twitter-api/twitter-api.module';
import { ScheduleModule as CronModule } from '@nestjs/schedule';

@Module({
  imports: [TwitterApiModule, CronModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
