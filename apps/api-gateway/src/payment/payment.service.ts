import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { MakePaymentDto } from '@social-fi-workspace/shared/dto';

@Injectable()
export class PaymentService {
    constructor(
        @Inject('PAYMENT_MS') private readonly paymentClient: ClientKafka
      ) {}
    
      makePayment(makePaymentDto: MakePaymentDto) {
        this.paymentClient.emit('process-payment', JSON.stringify(makePaymentDto));
      }
}
