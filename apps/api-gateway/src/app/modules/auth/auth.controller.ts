import { Controller, Post, Body } from '@nestjs/common'
import { AuthService } from './auth.service'
import { LoginDto } from './dto/login.dto'
import { ApiOperation, ApiResponse } from '@nestjs/swagger'
import { LoginResponse } from './dto/login-response.dto'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('connect')
  @ApiOperation({ summary: 'Connect wallet' })
  // TODO: separate into dto
  @ApiResponse({
    status: 201,
    type: LoginResponse,
    description: 'The user has been successfully login.',
  })
  async login(
    @Body() body: LoginDto,
  ): Promise<LoginResponse | { message: string }> {
    const user = await this.authService.validateUser(body)
    if (user) {
      return await this.authService.login(user)
    } else {
      return { message: 'Authentication failed' }
    }
  }
  @Post('refresh')
  async refresh(@Body('refresh_token') token: string) {
    return this.authService.refreshTokens(token)
  }
}
