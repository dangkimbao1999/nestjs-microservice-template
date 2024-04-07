import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from '@social-fi-workspace/shared/services';
import {
  addDays,
  differenceInCalendarDays,
  endOfWeek,
  isSameDay,
  parseISO,
  startOfWeek,
} from 'date-fns';

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
    if (checkIns.length === 0) return 0;

    let streak = 1; // Start count with the most recent login
    for (let i = 0; i < checkIns.length - 1; i++) {
      const currentLogin = parseISO(checkIns[i].loginAt.toISOString());
      const nextLogin = parseISO(checkIns[i + 1].loginAt.toISOString());

      // Calculate the difference in days between consecutive logins
      const dayDiff = differenceInCalendarDays(currentLogin, nextLogin);

      if (dayDiff === 1) {
        streak++;
      } else {
        // If the difference is more than 1, streak is broken
        break;
      }
    }

    return streak;
  }

  // Calculate the weekly streak
  async calculateWeeklyStreak(userId: string): Promise<number> {
    const now = new Date();
    const weekStart = startOfWeek(now, { weekStartsOn: 1 }); // Configures week to start on Monday
    const weekEnd = endOfWeek(now, { weekStartsOn: 1 });

    const checkInsThisWeek = await this.prisma.checkinHistory.findMany({
      where: {
        userId,
        loginAt: {
          gte: weekStart,
          lte: weekEnd,
        },
      },
      orderBy: {
        loginAt: 'asc',
      },
    });

    if (checkInsThisWeek.length === 0) return 0;

    let streak = 1; // Assumes at least one check-in counts as the start of a streak
    let lastCheckInDate = parseISO(checkInsThisWeek[0].loginAt.toISOString());

    // Track unique days to handle multiple check-ins per day
    const uniqueDays = [lastCheckInDate];

    for (let i = 1; i < checkInsThisWeek.length; i++) {
      const currentCheckInDate = parseISO(
        checkInsThisWeek[i].loginAt.toISOString(),
      );

      // Check if the current check-in is on a new day
      if (!uniqueDays.some((ud) => isSameDay(ud, currentCheckInDate))) {
        uniqueDays.push(currentCheckInDate);

        // Calculate the difference in calendar days to the last unique day
        const dayDiff = differenceInCalendarDays(
          currentCheckInDate,
          lastCheckInDate,
        );
        if (dayDiff === 1) {
          streak++; // Increment streak if days are consecutive
        } else if (dayDiff > 1) {
          streak = 1; // Reset streak if there's a gap of more than one day
        }
        lastCheckInDate = currentCheckInDate; // Update the last check-in date
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
  // private isSameDay(date1: Date, date2: Date): boolean {
  //   return (
  //     date1.getDate() === date2.getDate() &&
  //     date1.getMonth() === date2.getMonth() &&
  //     date1.getFullYear() === date2.getFullYear()
  //   );
  // }
}
