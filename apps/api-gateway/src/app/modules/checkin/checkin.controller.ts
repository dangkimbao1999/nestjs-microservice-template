import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CheckinService } from './checkin.service';
import { AuthenticationGuard } from '../auth/guards/auth.guard';
import { CurrentUser } from '../../commons/decorators/CurrentUser.decorator';
import { User } from '@prisma/client';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';

@Controller('checkin')
export class CheckinController {
  constructor(private readonly checkinService: CheckinService) {}

  @Post()
  @ApiBearerAuth()
  @UseGuards(AuthenticationGuard)
  create(@CurrentUser() user: User) {
    return this.checkinService.checkin(user);
  }

  @Get('continuous-reward')
  @ApiOperation({ summary: 'Connect wallet' })
  @ApiBearerAuth()
  @UseGuards(AuthenticationGuard)
  async getContinuousReward(@CurrentUser() user: User) {
    const result = await this.checkinService.checkForRewards(
      user.id,
      'continuous',
    );
    if (result.success) {
      return {
        message: `Congratulations! You've earned a reward for a ${result.streak}-day streak!`,
        reward: result.reward,
      };
    }
    return {
      message: `Keep going! You're on a ${result.streak}-day streak. Check in tomorrow to get closer to your next reward!`,
    };
  }

  // Endpoint to check for weekly check-in rewards
  @Get('weekly-reward')
  @ApiOperation({ summary: 'Connect wallet' })
  @ApiBearerAuth()
  @UseGuards(AuthenticationGuard)
  async getWeeklyReward(@CurrentUser() user: User) {
    const result = await this.checkinService.checkForRewards(user.id, 'weekly');
    if (result.success) {
      return {
        message: `Great job! You've earned a reward for a ${result.streak}-day streak this week!`,
        reward: result.reward,
      };
    }
    return {
      message: `Almost there! You have a ${result.streak}-day streak this week. Keep it up to earn your reward!`,
    };
  }
}
