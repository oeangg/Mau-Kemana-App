-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" TEXT;

-- CreateTable
CREATE TABLE "Destinasi" (
    "id" SERIAL NOT NULL,
    "pic" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "informasi" TEXT NOT NULL,
    "activity" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "restaurant" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Destinasi_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Destinasi" ADD CONSTRAINT "Destinasi_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
