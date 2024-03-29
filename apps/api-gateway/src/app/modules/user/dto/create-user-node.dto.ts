import { IsOptional, IsString } from 'class-validator'
export class CreateUserNodeDto {
  @IsString()
  address: string

  @IsString()
  base: number

  @IsOptional()
  loserAddress?: string[]
}
