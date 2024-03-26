import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  controllers: [PaymentController],
  providers: [PaymentService],
  imports: [
    ClientsModule.register([
      {
        name: "PAYMENT_MS",
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'payment',
            brokers: ['localhost:9092']
          },
          consumer: {
            groupId: 'payment-consumer'
          }
        }
      }
    ])
  ]
})
export class PaymentModule {}
