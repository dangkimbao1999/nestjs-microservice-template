import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaService } from '@social-fi-workspace/shared/services';
import { TransacionSubmitModule } from '../transacion-submit/transacion-submit.module';
import { PointConverterService } from './point-converter.service';

@Module({
  controllers: [UserController],
  providers: [UserService, PrismaService, PointConverterService],
  imports: [TransacionSubmitModule],
})
export class UserModule {}
