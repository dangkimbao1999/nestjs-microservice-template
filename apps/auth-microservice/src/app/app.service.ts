import { CreateUserDto } from '@social-fi-workspace/shared/dto';
import { User } from '@social-fi-workspace/shared/entities';
import { Injectable } from '@nestjs/common';
import { UsersRepository } from './user.repository';

@Injectable()
export class AppService {
  constructor(private readonly usersRepository: UsersRepository) {}

  createUser(data: CreateUserDto): void {
    this.usersRepository.save(data);
  }

  getUser(id: number): User {
    const result = this.usersRepository.findOne(id);
    console.log(result)
    return result
  }
}