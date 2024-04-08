import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { AuthModule } from '../auth/auth.module';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { PrismaService } from '@social-fi-workspace/shared/services';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { BigIntInterceptor } from './commons/interceptors/bigint.interceptor';
import { GraphqlService } from './modules/graphql/graphql.service';
import { CheckinModule } from './modules/checkin/checkin.module';
import { TransacionSubmitModule } from './modules/transacion-submit/transacion-submit.module';

@Module({
  imports: [AuthModule, UserModule, CheckinModule],
  controllers: [AppController],
  providers: [
    AppService,
    PrismaService,
    {
      provide: APP_INTERCEPTOR,
      useClass: BigIntInterceptor,
    },
    GraphqlService,
  ],
})
export class AppModule {}
