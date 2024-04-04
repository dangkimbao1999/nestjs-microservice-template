import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '@social-fi-workspace/shared/dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('sign-up')
  createUser(@Body(ValidationPipe) createUser: CreateUserDto) {
    return this.authService.createUser(createUser);
  }

  @Get('user/:id')
  getUser(@Param('id') id: string) {
    return this.authService.getUser(id);
  }
}
