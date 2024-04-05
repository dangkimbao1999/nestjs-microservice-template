import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from '../user/user.service';
import { ethers } from 'ethers';
import { LoginDto } from './dto/login.dto';
import { LOGIN_MESSAGE } from '../../constants/Message.constant';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import SecureCommon from '../../commons/Secure.common';
import { User } from '@prisma/client';
import { PrismaService } from '@social-fi-workspace/shared/services';
@Injectable()
export class AuthService {
  constructor(
    private readonly configService: ConfigService,
    private userService: UserService,
    private prismaService: PrismaService,
    private readonly prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async refreshTokens(refreshToken: string) {
    const userId = await SecureCommon.getSessionInfo(refreshToken);
    if (!userId) {
      throw new UnauthorizedException('Token not found');
    }
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    if (!user) {
      throw new ForbiddenException('Access Denied');
    }
    const tokens = await this.getTokens(user.id);
    await this.updateRefreshTokenCaching(user, tokens.refreshToken);
    await this.updateRefreshTokenCaching(user, refreshToken, true);
    return tokens;
  }

  async updateRefreshTokenCaching(user: User, token: string, isLogout = false) {
    if (!isLogout) {
      SecureCommon.storeSession(user, token);
      await this.prisma.loginHistory.create({
        data: {
          userId: user.id,
        },
      });
    } else {
      SecureCommon.deleteSessionInfo(token);
    }
  }

  async validateUser(loginDto: LoginDto) {
    const loginMessage = LOGIN_MESSAGE(loginDto.date);
    const isSignatureValid = await this.isSignatureValid(
      loginMessage,
      loginDto.signature,
      loginDto.publicKey,
    );

    if (!isSignatureValid) {
      throw new BadRequestException('Signature invalid');
    }

    const user = await this.userService.findById(loginDto.signer);
    if (user) {
      const updatedUser = await this.prisma.user.update({
        where: { id: loginDto.signer },
        data: {
          signature: loginDto.signature,
          signedMessage: loginMessage,
          signDate: new Date(loginDto.date),
        },
      });
      return updatedUser;
    }
    //shield 2 minutes . when created user for test .can expand the shield time
    if (!user) {
      // let shieldExpiredDate = new Date();
      // shieldExpiredDate.setDate(shieldExpiredDate.getMinutes() + 2);

      try {
        const newUser = await this.prismaService.user.create({
          data: {
            id: loginDto.signer,
            username: loginDto.signer,
            signature: loginDto.signature,
            signedMessage: loginMessage,
            publicKey: loginDto.publicKey,
            signDate: new Date(loginDto.date),
            shortLink: loginDto.signer,
            accountStatus: false,
          },
        });
        // create new node
        return newUser;
      } catch (err) {
        console.log(err);
        return null;
      }
    }
  }
  async getTokens(userId: string) {
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(
        {
          sub: userId,
        },
        {
          secret: this.configService.get<string>('JWT_SECRET'),
          expiresIn: '1d',
        },
      ),
      this.jwtService.signAsync(
        {
          sub: userId,
        },
        {
          secret: this.configService.get<string>('JWT_SECRET'),
          expiresIn: '1d',
        },
      ),
    ]);
    const refreshTokenExpire = Date.now() + 1 * 24 * 3600 * 1000;
    const accessTokenExpire = Date.now() + 1 * 24 * 3600 * 1000;
    return {
      accessToken,
      refreshToken,
      refreshTokenExpire,
      accessTokenExpire,
      userId,
    };
  }

  async isSignatureValid(message, signature, address) {
    try {
      const signerAddr = await ethers.verifyMessage(message, signature);
      if (signerAddr !== address) {
        return false;
      }

      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  async login(user: User) {
    // Set user information in the session
    const {
      accessToken,
      refreshToken,
      accessTokenExpire,
      refreshTokenExpire,
      userId,
    } = await this.getTokens(user.id);
    await this.updateRefreshTokenCaching(user, refreshToken, false);
    if (!accessToken) throw new InternalServerErrorException();
    return {
      refreshToken,
      refreshTokenExpire,
      accessToken,
      accessTokenExpire,
      userId,
    };
  }
}
