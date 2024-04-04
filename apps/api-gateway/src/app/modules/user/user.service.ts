import { Injectable } from '@nestjs/common';
import { PrismaService } from '@social-fi-workspace/shared/services';
import { User } from '@prisma/client';
import { UpdateUserDto } from './dto/update-user.dto';
import OtherError from '../../commons/errors/OtherError.error';
import { EErrorCode } from '../../commons/enums/Error.enum';

@Injectable()
export class UserService {
  //   private readonly logger = new Logger( UserService.name);
  constructor(private readonly prisma: PrismaService) {}

  async create(userData: any) {
    try {
      const user = await this.prisma.user.create({
        data: userData,
      });
      return user;
    } catch (error) {
      return null;
    }
  }

  async findByPublicKey(publicKey: string): Promise<any> {
    const account = await this.prisma.user.findFirst({
      where: { publicKey },
    });
    if (!account) {
      return null;
    }
    return account;
  }

  async findById(address: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: {
        id: address.toLocaleLowerCase(),
      },
    });
  }

  async updateUserById(user: User, bodyUpdate: UpdateUserDto): Promise<User> {
    if (
      (user.username && bodyUpdate.username) ||
      (user.twitterId && bodyUpdate.twitterId)
    ) {
      throw new OtherError({
        errorInfo: {
          code: EErrorCode.PARAMETERS_ERROR,
          message: 'Username is already available',
        },
      });
    }
    if (user.twitterId && bodyUpdate.twitterId) {
      throw new OtherError({
        errorInfo: {
          code: EErrorCode.PARAMETERS_ERROR,
          message: 'Twitter id is already available',
        },
      });
    }
    const result = await this.prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        ...(bodyUpdate.avatar && { avatar: bodyUpdate.avatar }),
        ...(bodyUpdate.username && { username: bodyUpdate.username }),
        ...(bodyUpdate.coverImage && { avatar: bodyUpdate.coverImage }),
        ...(bodyUpdate.twitterId && { twitterId: bodyUpdate.twitterId }),
      },
    });
    return result;
  }

  async linkTwitterAccount(walletAddress: string, twitterId: string) {
    await this.prisma.user.update({
      where: {
        id: walletAddress,
      },
      data: {
        twitterId,
      },
    });
  }
}
