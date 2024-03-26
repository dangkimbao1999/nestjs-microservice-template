import { Controller, ValidationPipe } from '@nestjs/common';

import { AppService } from './app.service';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { CreateUserDto } from '@social-fi-workspace/shared/dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

 @EventPattern('create-user')
 handleUserCreate(@Payload(ValidationPipe) data: CreateUserDto) {
  console.log('ủa alo')
  this.appService.createUser(data)
 }

 @MessagePattern('get-user')
 getUser(@Payload('userId') userId: number) {
  console.log('alo, here')
  return this.appService.getUser(userId)
 }
}
