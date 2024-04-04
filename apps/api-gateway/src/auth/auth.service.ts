import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { CreateUserDto } from '@social-fi-workspace/shared/dto';
import { User } from '@social-fi-workspace/shared/entities';
@Injectable()
export class AuthService implements OnModuleInit {
  constructor(@Inject('AUTH_MS') private readonly authClient: ClientKafka) {}
  onModuleInit() {
    this.authClient.subscribeToResponseOf('get-user');
    this.authClient.connect();
  }

  createUser(CreateUserDto: CreateUserDto) {
    console.log('creating user');
    this.authClient.emit('create-user', JSON.stringify(CreateUserDto));
  }

  getUser(id: string) {
    try {
      this.authClient.subscribeToResponseOf('get-user');
      return new Promise((resolve, reject) => {
        this.authClient
          .send('get-user', JSON.stringify({ userId: parseInt(id) }))
          .subscribe({
            next: (user) => resolve(user),
            error: (err) => reject(err),
          });
      });
    } catch (err) {
      console.error(err);
    }
  }
}
