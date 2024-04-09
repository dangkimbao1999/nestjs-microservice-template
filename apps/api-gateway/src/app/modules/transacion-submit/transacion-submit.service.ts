import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { TransactionEventDto } from '@social-fi-workspace/shared/dto';
import { PrismaService } from '@social-fi-workspace/shared/services';
import { ethers } from 'ethers';

@Injectable()
export class TransacionSubmitService implements OnModuleInit {
  constructor(
    @Inject('TX_MS') public readonly kafkaClient: ClientKafka,
    readonly prisma: PrismaService,
  ) {}

  async onModuleInit() {
    // Subscribe to necessary topics or just ensure the client is connected
    await this.kafkaClient.subscribeToResponseOf('transaction_event');
    await this.kafkaClient.connect();
  }

  async publishPointConverterEvent(dto: TransactionEventDto): Promise<void> {
    // await this.kafkaClient.emit('transaction_event', JSON.stringify(dto));
    await this.kafkaClient
      .send('transaction_event', JSON.stringify(dto))
      .subscribe({
        next: async (value) => {
          console.log(`value: ${value}`);
          if (value) {
            await this.prisma.user.update({
              where: {
                id: dto.methodParams[0],
              },
              data: {
                point: {
                  decrement: ethers.formatEther(dto.methodParams[1]),
                },
              },
            });
          }
        },
        error: (error) =>
          console.error('Error publishing transaction event:', error),
      });
  }
}
