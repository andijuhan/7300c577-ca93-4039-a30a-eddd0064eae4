/*
  Warnings:

  - A unique constraint covering the columns `[shortSlug]` on the table `Shorten` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Shorten_shortSlug_key" ON "Shorten"("shortSlug");
