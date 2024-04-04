/*
  Warnings:

  - You are about to drop the column `query` on the `Criteria` table. All the data in the column will be lost.
  - The primary key for the `PlatformCriteria` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `UserActivityLogs` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `criteriaId` on the `UserActivityLogs` table. All the data in the column will be lost.
  - You are about to drop the column `platformId` on the `UserActivityLogs` table. All the data in the column will be lost.
  - The required column `id` was added to the `PlatformCriteria` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `taskId` to the `UserActivityLogs` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "UserActivityLogs" DROP CONSTRAINT "UserActivityLogs_criteriaId_platformId_fkey";

-- AlterTable
ALTER TABLE "Criteria" DROP COLUMN "query";

-- AlterTable
ALTER TABLE "PlatformCriteria" DROP CONSTRAINT "PlatformCriteria_pkey",
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "query" JSONB,
ADD CONSTRAINT "PlatformCriteria_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "UserActivityLogs" DROP CONSTRAINT "UserActivityLogs_pkey",
DROP COLUMN "criteriaId",
DROP COLUMN "platformId",
ADD COLUMN     "taskId" TEXT NOT NULL,
ADD CONSTRAINT "UserActivityLogs_pkey" PRIMARY KEY ("userId", "taskId");

-- AddForeignKey
ALTER TABLE "UserActivityLogs" ADD CONSTRAINT "UserActivityLogs_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "PlatformCriteria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
