/*
  Warnings:

  - A unique constraint covering the columns `[twitterId]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "users_twitterId_key" ON "users"("twitterId");
