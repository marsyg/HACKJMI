'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ScrollText, Plus, Edit2, LogOut, Music, Library } from 'lucide-react';
import Home from '../playlists/page';
const DashboardLayout = () => {
  const [activeSection, setActiveSection] = useState('notes');

  // Sample data
  const notes = [
    {
      id: 1,
      title: 'Meeting Notes',
      date: 'Jan 29, 2025',
      timestamp: '10:30 AM',
    },
    {
      id: 2,
      title: 'Project Ideas',
      date: 'Jan 29, 2025',
      timestamp: '2:15 PM',
    },
  ];

  const playlists = [
    { id: 1, name: 'Favorites', count: 12 },
    { id: 2, name: 'Recently Added', count: 8 },
  ];

  const systemPlaylists = [
    {
      id: 1,
      name: 'Most Played',
      songs: [
        {
          id: 1,
          title: 'Song One',
          artist: 'Artist A',
          duration: '3:45',
          plays: 150,
        },
        {
          id: 2,
          title: 'Song Two',
          artist: 'Artist B',
          duration: '4:20',
          plays: 130,
        },
        {
          id: 3,
          title: 'Song Three',
          artist: 'Artist C',
          duration: '3:30',
          plays: 120,
        },
      ],
    },
    {
      id: 2,
      name: 'Recently Played',
      songs: [
        {
          id: 4,
          title: 'Song Four',
          artist: 'Artist D',
          duration: '3:15',
          plays: 50,
        },
        {
          id: 5,
          title: 'Song Five',
          artist: 'Artist E',
          duration: '4:10',
          plays: 45,
        },
        {
          id: 6,
          title: 'Song Six',
          artist: 'Artist F',
          duration: '3:55',
          plays: 40,
        },
      ],
    },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'systemPlaylists':
        return <Home></Home>;

      case 'notes':
        return (
          <Card className="bg-black border border-gray-800">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-2xl flex items-center gap-2 text-white">
                  <ScrollText className="w-6 h-6 text-blue-500" />
                  Your Notes
                </CardTitle>
                <Button
                  variant="outline"
                  className="border-gray-800 hover:bg-gray-900"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Note
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                {notes.map((note) => (
                  <Card
                    key={note.id}
                    className="relative bg-black border border-gray-800"
                  >
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-lg font-semibold mb-1 text-white">
                            {note.title}
                          </h3>
                          <div className="flex items-center gap-2 text-sm text-gray-400">
                            <span>{note.date}</span>
                            <span>•</span>
                            <span>{note.timestamp}</span>
                          </div>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-gray-800 hover:bg-gray-900"
                        >
                          <Edit2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-black text-white">
      {/* Sidebar */}
      <div className="w-64 border-r border-gray-800">
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4 text-white">Library</h2>

          {/* Navigation Sections */}
          <div className="space-y-6">
            {/* Notes Section */}
            <div>
              <h3 className="text-sm font-semibold text-gray-400 mb-2">
                NOTES
              </h3>
              <div className="space-y-1">
                <Button
                  variant="outline"
                  className={`w-full justify-start border-gray-800 hover:bg-gray-900 ${
                    activeSection === 'notes' ? 'bg-gray-900' : ''
                  }`}
                  onClick={() => setActiveSection('notes')}
                >
                  <ScrollText className="w-4 h-4 mr-2" />
                  All Notes
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start border-gray-800 hover:bg-gray-900"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Create Note
                </Button>
              </div>
            </div>

            {/* My Playlists */}
            <div>
              <h3 className="text-sm font-semibold text-gray-400 mb-2">
                MY PLAYLISTS
              </h3>
              <div className="space-y-1">
                {playlists.map((playlist) => (
                  <Button
                    key={playlist.id}
                    variant="outline"
                    className={`w-full justify-start border-gray-800 hover:bg-gray-900 ${
                      activeSection === 'myPlaylists' ? 'bg-gray-900' : ''
                    }`}
                    onClick={() => setActiveSection('myPlaylists')}
                  >
                    <Music className="w-4 h-4 mr-2" />
                    {playlist.name}
                  </Button>
                ))}
              </div>
            </div>

            {/* System Playlists */}
            <div>
              <h3 className="text-sm font-semibold text-gray-400 mb-2">
                SYSTEM PLAYLISTS
              </h3>
              <div className="space-y-1">
                {systemPlaylists.map((playlist) => (
                  <Button
                    key={playlist.id}
                    variant="outline"
                    className={`w-full justify-start border-gray-800 hover:bg-gray-900 ${
                      activeSection === 'systemPlaylists' ? 'bg-gray-900' : ''
                    }`}
                    onClick={() => setActiveSection('systemPlaylists')}
                  >
                    <Library className="w-4 h-4 mr-2" />
                    {playlist.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto bg-black">
        <div className="max-w-7xl mx-auto p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-white">
              {activeSection === 'systemPlaylists'
                ? 'System Playlists'
                : 'Notes Library'}
            </h1>
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                className="border-red-800 text-red-500 hover:bg-red-950 hover:text-red-400"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>

          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
