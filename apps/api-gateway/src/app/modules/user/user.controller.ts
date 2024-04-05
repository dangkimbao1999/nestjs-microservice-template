import { Controller, Get, Body, UseGuards, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { CurrentUser } from '../../commons/decorators/CurrentUser.decorator';
import { AuthenticationGuard } from '../auth/guards/auth.guard';
import { ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UserInfo } from './dto/user-info.dto';

@Controller('user')
export class UserController {
  //private readonly logger = new Logger( UserController.name);
  constructor(private readonly userService: UserService) {}

  @Get('me')
  @ApiOperation({ summary: 'Get infomation of this user' })
  @ApiResponse({
    status: 200,
    type: UserInfo,
    description: 'Get infomation of this user',
  })
  @ApiBearerAuth()
  @UseGuards(AuthenticationGuard)
  getMe(@CurrentUser() userRequest): UserInfo | null {
    const u = userRequest;
    return u;
  }

  @Put('update-me')
  @ApiOperation({ summary: 'update information of this user' })
  @ApiResponse({
    status: 200,
    type: UpdateUserDto,
    description: 'update information of this user',
  })
  @ApiBearerAuth()
  @UseGuards(AuthenticationGuard)
  async updateMe(
    @CurrentUser() userRequest,
    @Body() bodyUpdate: UpdateUserDto,
  ) {
    return this.userService.updateUserById(userRequest.id, bodyUpdate);
  }
}
