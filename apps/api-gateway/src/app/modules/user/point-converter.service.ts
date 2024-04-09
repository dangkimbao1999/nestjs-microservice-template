import { User } from '@prisma/client';
import { TransacionSubmitService } from '../transacion-submit/transacion-submit.service';
import { abi as SocialPoint } from '../../commons/abis/SocialPoint.json';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '@social-fi-workspace/shared/services';

@Injectable()
export class PointConverterService {
  constructor(
    private readonly txSubmitService: TransacionSubmitService,
    readonly prisma: PrismaService,
  ) {}

  async convertToken(user: User) {
    const value = Number(user.point) * 0.5;
    const valueTo18Decimal = (value * 10 ** 18).toString();
    await this.txSubmitService.publishPointConverterEvent({
      contractAddress: process.env.CONTRACT_POINT as string,
      abi: SocialPoint,
      methodName: 'mint',
      methodParams: [user.id, valueTo18Decimal],
      transactionOptions: { gasLimit: 100000 },
    });
  }
}
