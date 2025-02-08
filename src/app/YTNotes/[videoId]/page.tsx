'use client';
import { fetchCaptions } from '@/lib/captions';
import { generateContent } from '@/lib/gemini';
import { notes_prompt } from '@/prompts/prompts';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, LogOut, BookOpen } from 'lucide-react';
import { ModeToggle } from '@/components/mode-toggle';
import { useSession, signIn, signOut } from 'next-auth/react';

type Note = {
  start_time: string;
  duration: string;
  detailed_explanation: string;
};

const NotesList: React.FC = () => {
  const { data: session } = useSession();
  const [captions, setCaptions] = useState(null);
  const [loading, setLoading] = useState(true);
  const [noteData, setNoteData] = useState<Note[]>([]);
  const params = useParams();
  const videoId = params.videoId;

  useEffect(() => {
    const loadData = async () => {
      try {
        const captionsData = await fetchCaptions(videoId);
        setCaptions(captionsData);

        const prompt = `${notes_prompt}: ${JSON.stringify(captionsData)}`;
        const response = await generateContent(prompt);

        const rawData = JSON.parse(response.response.text() || '[]');
        const transformedData = rawData.map((item: any) => ({
          start_time: item['Start Time']?.toString() || '',
          duration: item.Duration?.toString() || '',
          detailed_explanation: item['Detailed Explanation'] || '',
        }));

        setNoteData(transformedData);
      } catch (error) {
        console.error('Error loading notes:', error);
      } finally {
        setLoading(false);
      }
    };

    if (session) loadData();
  }, [videoId, session]);

  return (
    <div className="max-w-7xl mx-auto min-h-screen p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-green-500" />
          Video Notes
        </h1>
        <div className="flex items-center gap-4">
          <ModeToggle />
          {session && (
            <Button
              onClick={() => signOut()}
              variant="destructive"
              size="sm"
              className="flex items-center gap-2"
            >
              <LogOut className="w-4 h-4" />
              Sign Out
            </Button>
          )}
        </div>
      </div>

      {!session ? (
        <Card className="max-w-md mx-auto mt-20">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2">
              <BookOpen className="w-6 h-6 text-green-500" />
              Sign in to View Notes
            </CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center p-6">
            <Button
              onClick={() => signIn('google')}
              className="flex items-center gap-2"
            >
              Sign in with Google
            </Button>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-green-500" />
              Generated Notes
            </CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-center py-8 text-muted-foreground">
                <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4" />
                Generating notes from video content...
              </div>
            ) : noteData.length > 0 ? (
              <div className="grid grid-cols-1 gap-6">
                {noteData.map((note, index) => (
                  <Card key={index} className="p-4 bg-muted/50">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">
                        Start: {note.start_time}s
                      </span>
                      <span className="text-muted-foreground">
                        Duration: {note.duration}s
                      </span>
                    </div>
                    <p className="text-foreground">
                      {note.detailed_explanation}
                    </p>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                No notes generated for this video.
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default NotesList;
