/*
  Warnings:

  - A unique constraint covering the columns `[videoId,startTime]` on the table `Caption` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Caption_videoId_startTime_key" ON "Caption"("videoId", "startTime");
