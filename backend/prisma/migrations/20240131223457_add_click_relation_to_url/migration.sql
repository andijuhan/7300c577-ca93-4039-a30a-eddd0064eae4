/*
  Warnings:

  - You are about to drop the column `clicks` on the `urls` table. All the data in the column will be lost.
  - You are about to drop the column `token` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "urls" DROP COLUMN "clicks";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "token";

-- CreateTable
CREATE TABLE "clicks" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "click" INTEGER NOT NULL DEFAULT 1,
    "shortSlug" TEXT NOT NULL,

    CONSTRAINT "clicks_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "clicks_shortSlug_key" ON "clicks"("shortSlug");

-- AddForeignKey
ALTER TABLE "clicks" ADD CONSTRAINT "clicks_shortSlug_fkey" FOREIGN KEY ("shortSlug") REFERENCES "urls"("shortSlug") ON DELETE RESTRICT ON UPDATE CASCADE;
