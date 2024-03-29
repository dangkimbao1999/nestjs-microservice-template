import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TwitterApiModule } from '../twitter-api/twitter-api.module';

@Module({
  imports: [TwitterApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
