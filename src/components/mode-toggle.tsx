'use client';

import { Button } from '@/components/ui/button';
import { MoonIcon, SunIcon, MonitorIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ModeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" disabled>
        <SunIcon className="h-[1.2rem] w-[1.2rem]" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => {
        if (theme === 'light') {
          setTheme('dark');
        } else if (theme === 'dark') {
          setTheme('system');
        } else {
          setTheme('light');
        }
      }}
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <SunIcon className="h-[1.2rem] w-[1.2rem] transition-all" />
      ) : theme === 'dark' ? (
        <MoonIcon className="h-[1.2rem] w-[1.2rem] transition-all" />
      ) : (
        <MonitorIcon className="h-[1.2rem] w-[1.2rem] transition-all" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
