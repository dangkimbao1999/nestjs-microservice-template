import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class LoginDto {
  @IsString({ message: 'public key must be a string ' })
  @MinLength(5)
  @MaxLength(100)
  publicKey: string;

  @IsString({ message: 'signature must be a string ' })
  @MinLength(5)
  @MaxLength(500)
  signature: string;

  @IsString({ message: 'signer must be a string ' })
  @MinLength(5)
  @MaxLength(100)
  signer: string;

  @IsNotEmpty({ message: 'date is not empty' })
  @MinLength(5)
  @MaxLength(100)
  date: string;
}
