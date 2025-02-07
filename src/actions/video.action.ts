'use server';

import { handleAsync } from '@/lib/handleAsync';
import prisma from '@/lib/prisma';

// Create a new video
export async function createVideo({
  data,
}: {
  data: {
    videoId: string;
    title: string;
    description: string;
    thumbnailUrl: string;
  };
}) {
  const [video, error] = await handleAsync(async () => {
    console.log('data ::', data);

    const newVideo = await prisma.video.create({
      data: {
        videoId: data.videoId,
        title: data.title,
        description: data.description,
        thumbnailUrl: data.thumbnailUrl,
        duration: 0, // Add a default value for duration or get it from data
        // Add other required fields if needed
      },
    });

    return newVideo;
  });

  if (error) {
    console.error('Error creating video:', error);
    throw error; // Important to throw error for proper error handling
  }

  return video;
}

// Get a video by its ID
export async function getVideoById(videoId: string) {
  const [video, error] = await handleAsync(async () => {
    const video = await prisma.video.findUnique({
      where: {
        videoId,
      },
      // include: {
      //   playlists: true,
      //   quizzes: true,
      //   bookmarks: true,
      //   notes: true, // Include notes related to the video
      // },
    });

    if (!video) {
      console.error('Video not found from getVideoById');
      return null;
    }
    return video;
  });

  console.log('video by id ::', video);
  return video;
}

// Update an existing video
export async function updateVideo(videoId: string, formData: FormData) {
  const [updatedVideo, error] = await handleAsync(async () => {
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const duration = parseInt(formData.get('duration') as string, 10);
    const thumbnailUrl = formData.get('thumbnailUrl') as string;

    const updated = await prisma.video.update({
      where: {
        videoId,
      },
      data: {
        title,
        description,
        duration,
        thumbnailUrl,
      },
    });

    return updated;
  });

  if (error) {
    console.error('Error updating video:', error.message);
    return null;
  }

  return updatedVideo;
}

// Delete a video
export async function deleteVideo(videoId: string) {
  const [deletedVideo, error] = await handleAsync(async () => {
    const video = await prisma.video.findUnique({
      where: {
        videoId,
      },
    });

    if (!video) throw new Error('Video not found');

    const deleted = await prisma.video.delete({
      where: {
        videoId,
      },
    });

    return deleted;
  });

  if (error) {
    console.error('Error deleting video:', error.message);
    return null;
  }

  return deletedVideo;
}

// Get quizzes related to a specific video
export async function getQuizzesForVideo(videoId: string) {
  const [quizzes, error] = await handleAsync(async () => {
    const quizzesForVideo = await prisma.quiz.findMany({
      where: {
        videoId,
      },
      include: {
        questions: true,
      },
    });

    if (!quizzesForVideo.length)
      throw new Error('No quizzes found for this video');
    return quizzesForVideo;
  });

  if (error) {
    console.error('Error fetching quizzes ::', error.message);
    return [];
  }

  return quizzes;
}

// Create a note for a specific video by a user
export async function createNoteForVideo(formData: FormData) {
  const [note, error] = await handleAsync(async () => {
    const userId = formData.get('userId') as string;
    const videoId = formData.get('videoId') as string;
    const content = formData.get('content') as string;

    const newNote = await prisma.note.create({
      data: {
        userId,
        videoId,
        content,
      },
    });

    return newNote;
  });

  if (error) {
    console.error('Error creating note for video:', error.message);
    return null;
  }

  return note;
}

// Get all notes for a specific video
export async function getNotesForVideo(videoId: string) {
  const [notes, error] = await handleAsync(async () => {
    const videoNotes = await prisma.note.findMany({
      where: {
        videoId,
      },
    });

    if (!videoNotes.length) throw new Error('No notes found for this video');
    return videoNotes;
  });

  if (error) {
    console.error('Error fetching notes for video:', error.message);
    return [];
  }

  return notes;
}

// Get all notes created by a specific user
export async function getNotesByUser(userId: string) {
  const [notes, error] = await handleAsync(async () => {
    const userNotes = await prisma.note.findMany({
      where: {
        userId,
      },
    });

    if (!userNotes.length) throw new Error('No notes found for this user');
    return userNotes;
  });

  if (error) {
    console.error('Error fetching notes by user:', error.message);
    return [];
  }

  return notes;
}
