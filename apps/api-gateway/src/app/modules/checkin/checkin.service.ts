import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import {
  PrismaService,
  ReferralService,
} from '@social-fi-workspace/shared/services';
import {
  differenceInCalendarDays,
  endOfWeek,
  isSameDay,
  parseISO,
  startOfWeek,
  startOfDay,
  endOfDay,
} from 'date-fns';
import { TransacionSubmitService } from '../transacion-submit/transacion-submit.service';
import { abi as FoodMinter } from '../../commons/abis/FoodMinter.json';

@Injectable()
export class CheckinService {
  constructor(
    private readonly prisma: PrismaService,
    readonly txSubmit: TransacionSubmitService,
    readonly referrerService: ReferralService,
  ) {}

  async markCompleted(userId: string, taskId: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    if (!user) return;
    const task = await this.prisma.platformCriteria.findUnique({
      where: { id: taskId },
      include: {
        criteria: true,
      },
    });
    if (user) {
      const calculatedPoint =
        (process.env.BASE_POINT as unknown as number) * task.criteria.rate;
      await this.prisma.userActivityLogs.create({
        data: {
          userId: user.id,
          taskId,
          pointClaimed: calculatedPoint,
        },
      });
      await this.prisma.user.update({
        where: {
          twitterId: user.twitterId,
        },
        data: {
          point: {
            increment: calculatedPoint,
          },
        },
      });
      console.log(user, calculatedPoint);
      await this.referrerService.create(user.id, calculatedPoint);
    }
  }

  async checkin(user: User) {
    try {
      const isCheckinToday = await this.prisma.checkinHistory.findFirst({
        where: {
          userId: user.id,
          loginAt: {
            gte: startOfDay(new Date()),
            lte: endOfDay(new Date()),
          },
        },
      });
      if (!isCheckinToday) {
        await this.prisma.checkinHistory.create({
          data: {
            userId: user.id,
          },
        });
      } else {
        return;
      }
      const dailyStreak = await this.checkForRewards(user.id, 'continuous');
      if (!user.isNewMemberClaimed && dailyStreak.streak > user.claimStreak) {
        if (dailyStreak.streak === 3) {
          await this.txSubmit.publishEthTransferEvent({
            value: '0.1',
            to: user.id,
          });
        } else if (dailyStreak.streak === 5) {
          await this.txSubmit.publishEthTransferEvent({
            value: '0.15',
            to: user.id,
          });
        } else if (dailyStreak.streak === 7) {
          await this.txSubmit.publishEthTransferEvent({
            value: '0.25',
            to: user.id,
          });
          // MARK CLAIMED ONETIME
          await this.prisma.user.update({
            where: {
              id: user.id,
            },
            data: {
              isNewMemberClaimed: true,
            },
          });
        }
      } else {
        await this.prisma.user.update({
          where: { id: user.id },
          data: { claimStreak: { increment: 1 } },
        });
      }
    } catch (err) {
      console.error('err1: ', err);
    }

    try {
      const weeklyStreak = await this.checkForRewards(user.id, 'weekly');
      console.log(weeklyStreak);
      if (weeklyStreak.streak === 3) {
        await this.txSubmit.publishMintNftEvent({
          contractAddress: '0xAFF6FF8b55a6EE368acc4d80A70feB31c517609b',
          abi: FoodMinter,
          methodName: 'mint',
          methodParams: [user.id],
          transactionOptions: { gasLimit: 100000 },
        });
      } else if (weeklyStreak.streak === 5) {
        await this.txSubmit.publishMintNftEvent({
          contractAddress: '0xAFF6FF8b55a6EE368acc4d80A70feB31c517609b',
          abi: FoodMinter,
          methodName: 'mint',
          methodParams: [user.id],
          transactionOptions: { gasLimit: 100000 },
        });
      } else if (weeklyStreak.streak === 7) {
        await this.txSubmit.publishMintNftEvent({
          contractAddress: '0xAFF6FF8b55a6EE368acc4d80A70feB31c517609b',
          abi: FoodMinter,
          methodName: 'mint',
          methodParams: [user.id],
          transactionOptions: { gasLimit: 100000 },
        });
      } else {
        const checkpointStreak = this.findClosest(
          [1, 3, 5, 7],
          weeklyStreak.streak,
        );
        const task = await this.prisma.platformCriteria.findFirst({
          where: {
            platformId: 'base',
            criteria: {
              description: `Checkin-${checkpointStreak}`,
            },
          },
        });
        console.log(task);
        //BOOST BASE POINT
        await this.markCompleted(user.id, task.id);
      }
    } catch (err) {
      console.error('err2: ', err);
    }
  }

  private findClosest(arr, num) {
    let closest = null;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > num) break;
      closest = arr[i];
    }
    return closest;
  }

  // Calculate the continuous streak
  async calculateContinuousStreak(userId: string): Promise<number> {
    const checkIns = await this.prisma.checkinHistory.findMany({
      where: { userId },
      orderBy: { loginAt: 'desc' },
      take: 7,
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
      take: 7,
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
