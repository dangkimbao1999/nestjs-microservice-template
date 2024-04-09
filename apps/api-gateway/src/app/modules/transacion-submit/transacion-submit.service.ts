import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { TX_STATUS } from '@prisma/client';
import {
  SendEthDto,
  TransactionEventDto,
  TransactionResponseDto,
} from '@social-fi-workspace/shared/dto';
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
    await this.kafkaClient.subscribeToResponseOf('send_eth');
    await this.kafkaClient.subscribeToResponseOf('transaction_event');
    await this.kafkaClient.connect();
  }

  async publishPointConverterEvent(dto: TransactionEventDto): Promise<void> {
    // await this.kafkaClient.emit('transaction_event', JSON.stringify(dto));
    await this.kafkaClient
      .send('transaction_event', JSON.stringify(dto))
      .subscribe({
        next: async (value: TransactionResponseDto) => {
          console.log(`value: ${value}`);
          if (value.status) {
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
          await this.prisma.transactionLog.create({
            data: {
              txHash: value.txHash,
              userId: dto.methodParams[0],
              description: 'ConvertPoint',
              status:
                value.status == true ? TX_STATUS.SUCCESS : TX_STATUS.FAILED,
            },
          });
        },
        error: (error) =>
          console.error('Error publishing transaction event:', error),
      });
  }

  async publishMintNftEvent(dto: TransactionEventDto): Promise<void> {
    // await this.kafkaClient.emit('transaction_event', JSON.stringify(dto));
    await this.kafkaClient
      .send('transaction_event', JSON.stringify(dto))
      .subscribe({
        next: async (value: TransactionResponseDto) => {
          console.log(`value: ${value}`);
          await this.prisma.transactionLog.create({
            data: {
              txHash: value.txHash,
              userId: dto.methodParams[0],
              description: 'Mint food nft',
              status:
                value.status == true ? TX_STATUS.SUCCESS : TX_STATUS.FAILED,
            },
          });
        },
        error: (error) =>
          console.error('Error publishing transaction event:', error),
      });
  }
  async publishEthTransferEvent(dto: SendEthDto): Promise<void> {
    // await this.kafkaClient.emit('transaction_event', JSON.stringify(dto));
    await this.kafkaClient.send('send_eth', JSON.stringify(dto)).subscribe({
      next: async (value) => {
        console.log(`value: ${value}`);
        await this.prisma.transactionLog.create({
          data: {
            txHash: value.txHash,
            userId: dto.to,
            description: 'Send eth',
            status: value.status == true ? TX_STATUS.SUCCESS : TX_STATUS.FAILED,
          },
        });
      },
      error: (error) =>
        console.error('Error publishing transaction event:', error),
    });
  }
}
