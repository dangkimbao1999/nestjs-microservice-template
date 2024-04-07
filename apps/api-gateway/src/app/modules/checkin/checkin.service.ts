import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from '@social-fi-workspace/shared/services';
import { addDays, endOfWeek, isSameDay, startOfWeek, subDays } from 'date-fns';

@Injectable()
export class CheckinService {
  constructor(private readonly prisma: PrismaService) {}
  async checkin(user: User) {
    await this.prisma.checkinHistory.create({
      data: {
        userId: user.id,
      },
    });
  }

  // Calculate the continuous streak
  async calculateContinuousStreak(userId: string): Promise<number> {
    const checkIns = await this.prisma.checkinHistory.findMany({
      where: { userId },
      orderBy: { loginAt: 'desc' },
    });

    let streak = 0;
    let checkDate = new Date();
    for (const checkIn of checkIns) {
      if (this.isSameDay(checkIn.loginAt, checkDate)) {
        streak++;
        checkDate = subDays(checkDate, 1); // Move back one day for the next iteration
      } else {
        break; // Streak is broken
      }
    }
    return streak;
  }

  // Calculate the weekly streak
  async calculateWeeklyStreak(userId: string): Promise<number> {
    const now = new Date();
    const startOfWeekDate = startOfWeek(now, { weekStartsOn: 1 }); // Configure start of week based on your locale
    const endOfWeekDate = endOfWeek(now, { weekStartsOn: 1 });

    const weeklyCheckIns = await this.prisma.checkinHistory.findMany({
      where: {
        userId,
        loginAt: {
          gte: startOfWeekDate,
          lte: endOfWeekDate,
        },
      },
      orderBy: { loginAt: 'asc' },
    });

    if (!weeklyCheckIns.length) return 0;

    let streak = 1; // At least one check-in exists in the current week
    let lastCheckInDate = weeklyCheckIns[0].loginAt;

    for (let i = 1; i < weeklyCheckIns.length; i++) {
      const currentDate = weeklyCheckIns[i].loginAt;
      if (isSameDay(addDays(lastCheckInDate, 1), currentDate)) {
        streak++;
        lastCheckInDate = currentDate;
      } else if (!isSameDay(lastCheckInDate, currentDate)) {
        // If it's not a consecutive day and not the same day (multiple check-ins), reset the streak
        streak = 1;
        lastCheckInDate = currentDate;
      }
    }

    return streak;
  }

  // Check for rewards
  async checkForRewards(
    userId: string,
    streakType: 'continuous' | 'weekly',
  ): Promise<{ success: boolean; streak: number; reward?: string }> {
    const streak =
      streakType === 'continuous'
        ? await this.calculateContinuousStreak(userId)
        : await this.calculateWeeklyStreak(userId);

    if ([3, 5, 7].includes(streak)) {
      // Assume a function to issue the reward or log it
      // For example: this.issueReward(userId, `Reward for ${streak}-day streak`);
      return {
        success: true,
        streak,
        reward: `Reward for ${streak}-day streak`,
      };
    }
    return { success: false, streak };
  }

  // Placeholder for an actual reward issuance function
  private async issueReward(userId: number, reward: string): Promise<void> {
    // Implement reward issuance logic here
    console.log(`Issued ${reward} to user ${userId}`);
  }

  // Determine if two dates are the same day
  private isSameDay(date1: Date, date2: Date): boolean {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  }
}
