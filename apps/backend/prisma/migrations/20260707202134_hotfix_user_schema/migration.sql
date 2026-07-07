/*
  Warnings:

  - You are about to drop the column `github` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `linkedin` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `portfolio` on the `User` table. All the data in the column will be lost.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CustomLink" DROP CONSTRAINT "CustomLink_userId_fkey";

-- AlterTable
ALTER TABLE "CustomLink" ADD COLUMN     "platform" TEXT,
ADD COLUMN     "type" TEXT NOT NULL DEFAULT 'custom';

-- AlterTable
ALTER TABLE "User" DROP COLUMN "github",
DROP COLUMN "linkedin",
DROP COLUMN "portfolio",
ADD COLUMN     "password" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "CustomLink" ADD CONSTRAINT "CustomLink_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
