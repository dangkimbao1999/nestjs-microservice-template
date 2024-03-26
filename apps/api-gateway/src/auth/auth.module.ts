import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    ClientsModule.register([
      {
        name: 'AUTH_MS',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'auth',
            brokers: ['localhost:9092']
          },
          consumer: {
            groupId: 'auth-consumer-2'
          }
        }
      }
    ])
  ]
})
export class AuthModule {}
