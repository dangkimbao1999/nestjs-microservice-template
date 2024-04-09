import { Controller, ValidationPipe } from '@nestjs/common';

import { AppService } from './app.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import {
  SendEthDto,
  TransactionEventDto,
} from '@social-fi-workspace/shared/dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @EventPattern('transaction_event')
  @MessagePattern('transaction_event')
  async handleTransactionEvent(
    @Payload(ValidationPipe) data: TransactionEventDto,
  ) {
    console.log('Received transaction event:', data);
    // Process the transaction event
    // For example, you might call a service method to handle the transaction
    return await this.appService.performTransaction(data);
  }

  @MessagePattern('send_eth')
  async handleTransferEthEvent(@Payload(ValidationPipe) data: SendEthDto) {
    return await this.appService.transferEth(data.to, data.value);
  }
}
