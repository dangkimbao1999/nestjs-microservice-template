import { User } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime/library';

export class UserInfo implements User {
  claimStreak: number;
  isNewMemberClaimed: boolean;
  id: string;
  avatar: string;
  username: string;
  signature: string;
  signedMessage: string;
  publicKey: string;
  signDate: Date;
  acceptedTerms: boolean;
  createdAt: Date;
  updatedAt: Date;
  shortLink: string;
  coverImage: string;
  accountStatus: boolean;
  point: Decimal;
  twitterId: string;
  teleId: string;
  referrerId: string;
}
