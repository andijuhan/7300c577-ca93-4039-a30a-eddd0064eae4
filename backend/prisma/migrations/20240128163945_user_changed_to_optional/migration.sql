-- DropForeignKey
ALTER TABLE "Shorten" DROP CONSTRAINT "Shorten_userId_fkey";

-- AlterTable
ALTER TABLE "Shorten" ALTER COLUMN "userId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Shorten" ADD CONSTRAINT "Shorten_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
