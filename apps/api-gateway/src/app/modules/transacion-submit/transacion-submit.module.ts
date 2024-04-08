import { Module } from '@nestjs/common';
import { TransacionSubmitService } from './transacion-submit.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { PrismaService } from '@social-fi-workspace/shared/services';

@Module({
  providers: [TransacionSubmitService, PrismaService],
  imports: [
    ClientsModule.register([
      {
        name: 'TX_MS',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'tx',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'tx-submission',
          },
        },
      },
    ]),
  ],
  exports: [TransacionSubmitService],
})
export class TransacionSubmitModule {}
