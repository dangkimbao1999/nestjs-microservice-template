-- CreateTable
CREATE TABLE "users" (
    "id" VARCHAR(255) NOT NULL,
    "avatar" TEXT,
    "username" TEXT,
    "signature" TEXT,
    "signedMessage" TEXT,
    "publicKey" TEXT,
    "signDate" TIMESTAMP(3),
    "acceptedTerms" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "shortLink" TEXT,
    "coverImage" TEXT,
    "accountStatus" BOOLEAN NOT NULL DEFAULT false,
    "point" INTEGER NOT NULL DEFAULT 0,
    "twitterId" TEXT,
    "teleId" TEXT,
    "referrerId" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Platform" (
    "id" TEXT NOT NULL DEFAULT 'uu',
    "name" TEXT NOT NULL,

    CONSTRAINT "Platform_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Criteria" (
    "id" SERIAL NOT NULL,
    "description" TEXT,
    "query" TEXT,
    "point" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Criteria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlatformCriteria" (
    "criteriaId" INTEGER NOT NULL,
    "platformId" TEXT NOT NULL,

    CONSTRAINT "PlatformCriteria_pkey" PRIMARY KEY ("criteriaId","platformId")
);

-- CreateTable
CREATE TABLE "UserActivityLogs" (
    "userId" TEXT NOT NULL,
    "criteriaId" INTEGER NOT NULL,
    "platformId" TEXT NOT NULL,
    "time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserActivityLogs_pkey" PRIMARY KEY ("userId","criteriaId","platformId")
);

-- CreateTable
CREATE TABLE "login_histories" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "loginAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "login_histories_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_signature_key" ON "users"("signature");

-- CreateIndex
CREATE UNIQUE INDEX "users_shortLink_key" ON "users"("shortLink");

-- CreateIndex
CREATE INDEX "UserActivityLogs_time_idx" ON "UserActivityLogs"("time" DESC);

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_referrerId_fkey" FOREIGN KEY ("referrerId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlatformCriteria" ADD CONSTRAINT "PlatformCriteria_criteriaId_fkey" FOREIGN KEY ("criteriaId") REFERENCES "Criteria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlatformCriteria" ADD CONSTRAINT "PlatformCriteria_platformId_fkey" FOREIGN KEY ("platformId") REFERENCES "Platform"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserActivityLogs" ADD CONSTRAINT "UserActivityLogs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserActivityLogs" ADD CONSTRAINT "UserActivityLogs_criteriaId_platformId_fkey" FOREIGN KEY ("criteriaId", "platformId") REFERENCES "PlatformCriteria"("criteriaId", "platformId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "login_histories" ADD CONSTRAINT "login_histories_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
