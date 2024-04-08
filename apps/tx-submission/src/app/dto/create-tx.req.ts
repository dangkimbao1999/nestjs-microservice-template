// transaction-event.dto.ts
import { IsString, IsNumber, ValidateNested } from 'class-validator';

class TransactionOptionsDto {
  @IsNumber()
  readonly value?: number;

  @IsNumber()
  readonly gasLimit?: number;

  @IsNumber()
  readonly gasPrice?: number;
}

export class TransactionEventDto {
  @IsString()
  readonly contractAddress: string;

  @IsString({ each: true })
  readonly abi: any[]; // For simplicity; consider a more specific type based on your ABI structure

  @IsString()
  readonly methodName: string;

  @IsString({ each: true })
  readonly methodParams: any[]; // Similar to ABI, use specific typing as needed

  @ValidateNested()
  readonly transactionOptions: TransactionOptionsDto;
}

