'use client';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollText, Plus, Trash2, Edit2, LogOut } from 'lucide-react';

const NotesSection = () => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: 'Introduction to React',
      content: 'React is a JavaScript library for building user interfaces...',
      timestamp: '10:30',
      date: '2024-01-29',
    },
    {
      id: 2,
      title: 'State Management',
      content:
        'Understanding state management is crucial for React applications...',
      timestamp: '15:45',
      date: '2024-01-29',
    },
  ]);

  return (
        <div className="max-w-7xl mx-auto min-h-screen p-8">
        <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Notes Library</h1>
            <div className="flex items-center gap-4">
            <Button
                variant="destructive"
                size="sm"
                className="flex items-center gap-2"
            >
                <LogOut className="w-4 h-4" />
                Sign Out
            </Button>
            </div>
        </div>

        <div className="grid gap-8">
            <Card>
            <CardHeader>
                <div className="flex justify-between items-center">
                <CardTitle className="text-2xl flex items-center gap-2">
                    <ScrollText className="w-6 h-6 text-blue-500" />
                    Your Notes
                </CardTitle>
                <Button className="flex items-center gap-2">
                    <Plus className="w-4 h-4" />
                    Add Note
                </Button>
                </div>
            </CardHeader>
            <CardContent>
                <div className="grid gap-6">
                {notes.map((note) => (
                    <Card key={note.id} className="relative">
                    <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                        <div>
                            <h3 className="text-lg font-semibold mb-1">
                            {note.title}
                            </h3>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span>{note.date}</span>
                            <span>•</span>
                            <span>{note.timestamp}</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <Button variant="ghost" size="sm">
                            <Edit2 className="w-4 h-4" />
                            </Button>
                            <Button
                          variant="ghost"
                          size="sm"
                          className="text-red-500 hover:text-red-600"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{note.content}</p>
                  </CardContent>
                </Card>
              ))}

              {notes.length === 0 && (
                <div className="text-center py-8 text-muted-foreground">
                  No notes yet. Click "Add Note" to create one.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NotesSection;
