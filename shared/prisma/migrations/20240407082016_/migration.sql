-- DropIndex
DROP INDEX "login_histories_userId_idx";

-- CreateIndex
CREATE INDEX "login_histories_userId_loginAt_idx" ON "login_histories"("userId", "loginAt" DESC);
