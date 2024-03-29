-- CreateTable
CREATE TABLE "User" (
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

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_signature_key" ON "User"("signature");

-- CreateIndex
CREATE UNIQUE INDEX "User_shortLink_key" ON "User"("shortLink");
