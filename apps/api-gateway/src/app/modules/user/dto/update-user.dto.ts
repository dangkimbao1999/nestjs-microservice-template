import { IsString, MaxLength, MinLength } from 'class-validator';
import { Exclude } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty({
    example: 'https://example.com/avatar/113456',
    description: 'The avartar url when uploaded',
  })
  @IsString({ message: 'avatar must be a string ' })
  avatar: string;

  @ApiProperty({
    example: 'username_a',
    description: 'The new username of user when update username',
  })
  @IsString({ message: 'username must be a string ' })
  @MinLength(5)
  @MaxLength(255)
  username: string;

  @ApiProperty({
    example: 'https://example.com/avatar/113456',
    description: 'The new cover image of user when update cover image',
  })
  @IsString({ message: 'cover image must be a string ' })
  coverImage: string;

  twitterId: string;
}
