/*
  Warnings:

  - Added the required column `pointClaimed` to the `UserActivityLogs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserActivityLogs" ADD COLUMN     "pointClaimed" INTEGER NOT NULL;
