-- CreateTable
CREATE TABLE "Caption" (
    "id" TEXT NOT NULL,
    "startTime" DOUBLE PRECISION NOT NULL,
    "videoId" TEXT NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "Caption_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Caption" ADD CONSTRAINT "Caption_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES "Video"("id") ON DELETE CASCADE ON UPDATE CASCADE;
