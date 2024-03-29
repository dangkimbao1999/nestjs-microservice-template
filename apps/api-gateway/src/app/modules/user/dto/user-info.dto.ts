import { ApiProperty } from '@nestjs/swagger'
import { User } from '@prisma/client'

export class UserInfo implements User {
  @ApiProperty({
    example: 'https://example.com/avatar/113456',
    description: 'The address wallet',
  })
  id: string

  @ApiProperty({
    example: 'https://example.com/avatar/113456',
    description: 'The user avatar',
  })
  avatar: string

  @ApiProperty({
    example: 'JohnDoe123',
    description: 'The username of the user',
  })
  username: string

  @ApiProperty({
    example: 'Lorem Ipsum',
    description: 'The signature of the user',
  })
  signature: string

  @ApiProperty({
    example: 'Signed message',
    description: 'The signed message of the user',
  })
  signedMessage: string

  @ApiProperty({
    example: 'Public key',
    description: 'The public key of the user',
  })
  publicKey: string

  @ApiProperty({
    example: new Date(),
    description: 'The sign date of the user',
  })
  signDate: Date

  @ApiProperty({
    example: true,
    description: 'Whether the user has accepted terms or not',
  })
  acceptedTerms: boolean

  @ApiProperty({
    example: new Date(),
    description: 'The creation date of the user account',
  })
  createdAt: Date

  @ApiProperty({
    example: new Date(),
    description: 'The last update date of the user account',
  })
  updatedAt: Date

  @ApiProperty({
    example: 'https://example.com/shortlink',
    description: 'The short link of the user',
  })
  shortLink: string

  @ApiProperty({
    example: 'https://example.com/coverimage',
    description: 'The cover image of the user',
  })
  coverImage: string

  @ApiProperty({
    example: true,
    description: 'The status of the user account',
  })
  accountStatus: boolean

  @ApiProperty({
    example: 5,
    description: 'The rank of the user',
  })
  rank: number

  @ApiProperty({
    example: 1000,
    description: 'The experience points of the user',
  })
  exp: number

  @ApiProperty({
    example: new Date(),
    description: 'The last match time of the user',
  })
  lastMatchTime: Date

  @ApiProperty({
    example: 500,
    description: 'The combat power of the user',
  })
  combatPower: number

  @ApiProperty({
    example: new Date(),
    description: 'The shield expiration date of the user',
  })
  shieldExpired: Date
  shieldItem: number
}
