'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectScreenshot } from '@/data/portfolio';
import { Lock, Shield, ChevronLeft, ChevronRight, ExternalLink, Play, Pause } from 'lucide-react';

interface BrowserMockupProps {
  screenshots: ProjectScreenshot[];
  liveUrl: string;
}

export default function BrowserMockup({ screenshots, liveUrl }: BrowserMockupProps) {
  const [activeTab, setActiveTab] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play carousel every 5 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % screenshots.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, screenshots.length]);

  const nextTab = () => {
    setActiveTab((prev) => (prev + 1) % screenshots.length);
  };

  const prevTab = () => {
    setActiveTab((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  const current = screenshots[activeTab];

  return (
    <div
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
      className="w-full rounded-2xl overflow-hidden glass-panel-glow border border-slate-700/80 shadow-[0_20px_50px_rgba(0,0,0,0.6)] bg-[#070b19] transition-all"
    >
      {/* Top Window Bar */}
      <div className="px-4 py-3 bg-[#0a0f24] border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
        {/* Window controls */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-[0_0_8px_rgba(255,95,86,0.6)]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-[0_0_8px_rgba(255,189,46,0.6)]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f] shadow-[0_0_8px_rgba(39,201,63,0.6)]" />
          <span className="hidden sm:inline-block ml-2 text-xs font-mono text-slate-400">
            WebSecureX v2.4 Console
          </span>
        </div>

        {/* Browser URL Bar */}
        <div className="flex-1 max-w-lg mx-auto flex items-center justify-between gap-2 px-3 py-1 rounded-lg bg-[#050814] border border-slate-700/60 text-xs font-mono text-slate-300">
          <div className="flex items-center gap-2 overflow-hidden truncate">
            <Lock className="w-3.5 h-3.5 text-[#00ff88] flex-shrink-0" />
            <span className="text-[#00ff88] font-semibold">https://</span>
            <span className="text-slate-200 truncate">websecurex-phi.vercel.app/index.html</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-500">
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-[#00ff88] transition-colors"
              title="Open Live in New Tab"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Carousel controls & indicator */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="p-1 rounded bg-slate-800 text-slate-400 hover:text-white transition-colors"
            title={isAutoPlaying ? 'Pause Carousel' : 'Play Carousel'}
            aria-label={isAutoPlaying ? 'Pause Carousel' : 'Play Carousel'}
          >
            {isAutoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={prevTab}
            className="p-1 rounded bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
            aria-label="Previous screenshot"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-xs font-mono text-slate-400 px-1">
            {activeTab + 1}/{screenshots.length}
          </span>
          <button
            onClick={nextTab}
            className="p-1 rounded bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
            aria-label="Next screenshot"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Screen Tabs Bar */}
      <div className="flex overflow-x-auto border-b border-slate-800 bg-[#070b1a] px-3 gap-2 pt-2 scrollbar-none">
        {screenshots.map((item, idx) => {
          const isActive = idx === activeTab;
          return (
            <button
              key={item.title}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-mono tracking-wide rounded-t-lg transition-all border-t border-x ${
                isActive
                  ? 'bg-[#0f172a] text-[#00ff88] border-slate-700 border-b-transparent shadow-[0_-4px_10px_rgba(0,255,136,0.15)]'
                  : 'text-slate-400 border-transparent hover:text-slate-200 hover:bg-slate-900/50'
              }`}
            >
              <Shield className={`w-3.5 h-3.5 ${isActive ? 'text-[#00ff88]' : 'text-slate-500'}`} />
              <span>{item.title}</span>
            </button>
          );
        })}
      </div>

      {/* Screen Content Viewport with Cross-Fade Animation */}
      <div className="relative aspect-[16/9] w-full bg-[#03060f] overflow-hidden group">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.image}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.01 }}
            transition={{ duration: 0.4 }}
            className="relative w-full h-full"
          >
            <Image
              src={current.image}
              alt={current.title}
              fill
              priority={activeTab === 0}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              className="object-contain object-top transition-transform duration-700 group-hover:scale-[1.015]"
            />
          </motion.div>
        </AnimatePresence>

        {/* Scanline aesthetic overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(0,255,136,0.03)] to-transparent pointer-events-none opacity-40" />

        {/* Floating Switch Controls on Hover */}
        <button
          onClick={prevTab}
          className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/85 border border-slate-700/80 text-white hover:border-[#00ff88] hover:text-[#00ff88] opacity-0 group-hover:opacity-100 transition-all backdrop-blur-md shadow-xl"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextTab}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/85 border border-slate-700/80 text-white hover:border-[#00ff88] hover:text-[#00ff88] opacity-0 group-hover:opacity-100 transition-all backdrop-blur-md shadow-xl"
          aria-label="Next image"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Bottom Caption Bar */}
      <div className="p-4 bg-[#0a0f24] border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#00ff88]/10 text-[#00ff88] border border-[#00ff88]/30 font-semibold">
            {current.title}
          </span>
          <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 font-sans">
            {current.caption}
          </p>
        </div>
        <div className="flex items-center gap-3 self-end sm:self-auto flex-shrink-0">
          <span className="font-mono text-slate-500 text-[11px]">
            Screenshot {activeTab + 1} of {screenshots.length}
          </span>
        </div>
      </div>
    </div>
  );
}
