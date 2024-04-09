import { Module } from '@nestjs/common';
import { CheckinService } from './checkin.service';
import { CheckinController } from './checkin.controller';
import {
  PrismaService,
  ReferralService,
} from '@social-fi-workspace/shared/services';
import { TransacionSubmitModule } from '../transacion-submit/transacion-submit.module';

@Module({
  controllers: [CheckinController],
  providers: [CheckinService, PrismaService, ReferralService],
  imports: [TransacionSubmitModule],
})
export class CheckinModule {}
