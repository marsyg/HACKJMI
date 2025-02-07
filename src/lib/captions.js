// import { YouTubeTranscriptApi } from 'youtube-transcript-api';
// import { SRTFormatter } from 'youtube-transcript-api/formatters';

// export async function getVideoCaption(videoId) {
//   try {
//     const transcript = await YouTubeTranscriptApi.getTranscript(videoId);
//     const formatter = new SRTFormatter();
//     return formatter.format_transcript(transcript);
//   } catch (error) {
//     console.error('Error fetching captions:', error);
//     return null;
//   }
// }
import axios from 'axios';
export const fetchCaptions = async (videoId) => {
  console.log('fetching captions for video:', videoId);
  try {
    const response = await axios.get(`/api/getCaption?videoId=${videoId}`, {
      params: { videoId },
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: false, // Allows CORS with credentials (if needed)
    });
    console.log('response:', response);
    return response.data;
  } catch (error) {
    console.error(
      'Error fetching captions:',
      error.response?.data?.error || error.message,
    );
  }
};
