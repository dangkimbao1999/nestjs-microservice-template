import { Controller, ValidationPipe } from '@nestjs/common';

import { AppService } from './app.service';
import { EventPattern, Payload } from '@nestjs/microservices';
import { MakePaymentDto } from '@social-fi-workspace/shared/dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('process-payment')
  handleProcessPayment(@Payload(ValidationPipe) data: MakePaymentDto) {
    this.appService.processPayment(data);
  }
}