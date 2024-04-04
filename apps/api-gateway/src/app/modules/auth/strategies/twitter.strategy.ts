// twitter.strategy.ts
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-twitter';
import { UserService } from '../../user/user.service'; // Assume this service handles user data interactions

@Injectable()
export class TwitterStrategy extends PassportStrategy(Strategy, 'twitter') {
  constructor(private readonly usersService: UserService) {
    super({
      consumerKey: process.env.TWITTER_API_KEY,
      consumerSecret: process.env.TWITTER_API_SECRET_KEY,
      callbackURL: 'http://localhost:3000/auth/twitter/callback',
      includeEmail: true,
    });
  }

  async validate(
    token: string,
    tokenSecret: string,
    profile: any
  ): Promise<any> {
    if (!profile) {
      // Handle case where no user exists or prompt user to create an account
      throw new Error('User not found');
    }
    const user = await this.usersService.linkTwitterAccount(profile.id);
    return user;
  }
}
