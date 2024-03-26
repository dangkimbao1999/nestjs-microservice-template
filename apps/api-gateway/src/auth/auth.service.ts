import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { CreateUserDto } from '@social-fi-workspace/shared/dto'
import { User } from '@social-fi-workspace/shared/entities'
@Injectable()
export class AuthService implements OnModuleInit {
  constructor(
    @Inject('AUTH_MS')  private readonly authClient: ClientKafka
  ) {}
  onModuleInit() {
    this.authClient.subscribeToResponseOf('get-user')
    this.authClient.connect()
  }

  createUser(CreateUserDto: CreateUserDto) {
    console.log('creating user')
    this.authClient.emit('create-user', JSON.stringify(CreateUserDto))
  }

  async getUser(id: string) {
    // return new Promise((resolve, reject) => {
    //   this.authClient.send('get-user', { userId: parseInt(id) })
    //     .subscribe({
    //       next: (user) => resolve(user),
    //       error: (err) => reject(err),
    //     });
    // });
    return await this.authClient.send('get-user', {userId: parseInt(id)})
  }
}
