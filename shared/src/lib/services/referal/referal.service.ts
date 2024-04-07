import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ReferralService {
  //   private readonly logger = new Logger( UserService.name);
  constructor(private readonly prisma: PrismaService) {}

  async create(userId: string, point: number) {
    const referee = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (referee.referrerId) {
      await this.prisma.user.update({
        where: {
          id: referee.referrerId,
        },
        data: {
          point: {
            increment: point * 0.05,
          },
        },
      });
    }
  }
}
