import { getCaptions } from '@dofy/youtube-caption-fox';
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export const GET = async (req: NextRequest) => {
  const searchParams = req.nextUrl.searchParams;
  const videoId = searchParams.get('videoId');
  const lang = searchParams.get('lang') || 'en';

  // Validate required parameters
  if (!videoId) {
    return NextResponse.json(
      { error: 'Missing videoId parameter' },
      { status: 400 },
    );
  }

  try {
    // Fetch captions from YouTube
    const { captions } = await getCaptions(videoId);
    console.log('captions:', captions);

    if (captions.length > 0) {
      const video = await prisma.video.findUnique({
        where: { videoId: videoId },
      });
      console.log('video from fetchCaptions:', video);
      if (!video) {
        return NextResponse.json(
          { error: 'Video not found from getCaption' },
          { status: 404 },
        );
      }

      // Upsert captions in a transaction
      const saveCaption = await prisma.$transaction(
        captions.map((caption) =>
          prisma.caption.upsert({
            where: {
              videoId_startTime: {
                videoId: videoId,
                startTime: caption.start,
              },
            },
            update: {
              content: caption.text,
            },
            create: {
              videoId: videoId,
              startTime: caption.start,
              content: caption.text,
            },
          }),
        ),
      );

      console.log('Upserted captions:', saveCaption.length);
      return NextResponse.json({
        message: 'Captions processed',
        count: saveCaption.length,
      });
    }

    return NextResponse.json({ message: 'No captions available' });
  } catch (error) {
    console.error('Caption processing error:', error);
    return NextResponse.json(
      { error: 'Caption processing failed', details: String(error) },
      { status: 500 },
    );
  }
};
