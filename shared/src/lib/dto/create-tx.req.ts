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

  readonly abi: any[];

  @IsString()
  readonly methodName: string;

  readonly methodParams: any[];

  @ValidateNested()
  readonly transactionOptions: TransactionOptionsDto;
}
