-- DropForeignKey
ALTER TABLE "clicks" DROP CONSTRAINT "clicks_shortSlug_fkey";

-- AlterTable
ALTER TABLE "clicks" ALTER COLUMN "shortSlug" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "clicks" ADD CONSTRAINT "clicks_shortSlug_fkey" FOREIGN KEY ("shortSlug") REFERENCES "urls"("shortSlug") ON DELETE SET NULL ON UPDATE CASCADE;
