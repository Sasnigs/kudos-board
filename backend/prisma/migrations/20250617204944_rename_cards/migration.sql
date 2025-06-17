/*
  Warnings:

  - You are about to drop the `Card` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Card" DROP CONSTRAINT "Card_boardId_fkey";

-- DropTable
DROP TABLE "Card";

-- CreateTable
CREATE TABLE "Cards" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "gif" TEXT NOT NULL,
    "upvotes" INTEGER NOT NULL DEFAULT 0,
    "boardId" TEXT NOT NULL,

    CONSTRAINT "Cards_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Cards" ADD CONSTRAINT "Cards_boardId_fkey" FOREIGN KEY ("boardId") REFERENCES "Boards"("id") ON DELETE CASCADE ON UPDATE CASCADE;
