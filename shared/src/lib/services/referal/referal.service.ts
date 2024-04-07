import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  //   private readonly logger = new Logger( UserService.name);
  constructor(private readonly prisma: PrismaService) {}

  async create(user: User, point: number) {
    const referee = await this.prisma.user.findUnique({
      where: {
        id: user.id,
      },
    });

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
