-- CreateEnum
CREATE TYPE "TX_STATUS" AS ENUM ('FAILED', 'SUCCESS');

-- CreateTable
CREATE TABLE "TransactionLog" (
    "txHash" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "status" "TX_STATUS" NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "TransactionLog_pkey" PRIMARY KEY ("txHash")
);
