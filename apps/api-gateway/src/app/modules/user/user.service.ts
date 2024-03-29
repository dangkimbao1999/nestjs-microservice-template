import { Injectable } from '@nestjs/common'
import { PrismaService } from '@social-fi-workspace/shared/services'
import { User } from '@prisma/client'
import { UpdateUserDto } from './dto/update-user.dto'

@Injectable()
export class UserService {
  //   private readonly logger = new Logger( UserService.name);
  constructor(private readonly prisma: PrismaService) {}

  async create(userData: any) {
    try {
      const user = await this.prisma.user.create({
        data: userData,
      })
      return user
    } catch (error) {
      return null
    }
  }

  async findByPublicKey(publicKey: string): Promise<any> {
    const account = await this.prisma.user.findFirst({
      where: { publicKey },
    })
    if (!account) {
      return null
    }
    return account
  }

  async findById(address: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: {
        id: address.toLocaleLowerCase(),
      },
    })
  }

  async updateUserById(id: string, bodyUpdate: UpdateUserDto): Promise<User> {
    const result = await this.prisma.user.update({
      where: {
        id,
      },
      data: {
        ...bodyUpdate,
      },
    })
    return result
  }
}
