-- DropIndex
DROP INDEX "UserActivityLogs_userId_taskId_key";

-- CreateIndex
CREATE INDEX "UserActivityLogs_userId_taskId_idx" ON "UserActivityLogs"("userId", "taskId");
