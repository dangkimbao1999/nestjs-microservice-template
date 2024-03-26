import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { MakePaymentDto } from '@social-fi-workspace/shared/dto'
import { User } from '@social-fi-workspace/shared/entities'
@Injectable()
export class AppService implements OnModuleInit {
  constructor(@Inject('AUTH_MS') private readonly authClient: ClientKafka) {}
  onModuleInit() {
    this.authClient.subscribeToResponseOf('get-user')
  }

  processPayment(makePaymentDto: MakePaymentDto) {
    const { userId, amount } = makePaymentDto;
    console.log('process payment')
    this.authClient.send('get-user', JSON.stringify({ userId })).subscribe((user: User) => {
      console.log(`process payment for user: ${user.name} - amount: ${amount}`)
    })
  }
}
