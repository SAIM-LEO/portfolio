'use client';

import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isLight = document.documentElement.classList.contains('light');
    setTheme(isLight ? 'light' : 'dark');
  }, []);

  const toggleTheme = () => {
    if (theme === 'dark') {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
      setTheme('light');
    } else {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    }
  };

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-lg border border-slate-700 bg-slate-900/50 flex items-center justify-center text-slate-400">
        <Moon className="w-4 h-4" />
      </div>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      className="relative p-2 rounded-lg border border-slate-700/80 bg-slate-900/60 dark:bg-slate-900/80 light:bg-slate-100 hover:border-[#00ff88]/50 text-slate-300 dark:text-slate-300 light:text-slate-800 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,136,0.2)] focus:outline-none focus:ring-2 focus:ring-[#00ff88]/50"
    >
      {theme === 'dark' ? (
        <Sun className="w-4 h-4 text-[#00ff88] transition-transform duration-300 hover:rotate-90" />
      ) : (
        <Moon className="w-4 h-4 text-sky-600 transition-transform duration-300 hover:-rotate-12" />
      )}
    </button>
  );
}
