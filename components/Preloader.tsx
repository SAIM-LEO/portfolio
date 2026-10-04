'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Terminal } from 'lucide-react';

const BOOT_LINES = [
  'INITIALIZING SYSTEM TELEMETRY...',
  'LOADING SECURITY MODULES [WEBSECUREX]...',
  'MOUNTING CREDENTIALS & MARKETPLACES...',
  'PORTFOLIO READY // ACCESS GRANTED',
];

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  useEffect(() => {
    // Check if user already visited in this session
    const hasVisited = sessionStorage.getItem('saim_portfolio_preloader_seen');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (hasVisited || prefersReducedMotion) {
      setLoading(false);
      return;
    }

    // Progress counter (completes in ~1.4s)
    const startTime = Date.now();
    const duration = 1400;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);

      const lineIdx = Math.min(
        BOOT_LINES.length - 1,
        Math.floor((pct / 100) * BOOT_LINES.length)
      );
      setCurrentLineIndex(lineIdx);

      if (pct >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setLoading(false);
          sessionStorage.setItem('saim_portfolio_preloader_seen', 'true');
        }, 250);
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{
            y: '-100%',
            transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050814] text-white px-4 selection:bg-transparent cursor-wait overflow-hidden"
          aria-live="polite"
          aria-label="Loading portfolio"
        >
          {/* Cyber grid backdrop */}
          <div className="absolute inset-0 cyber-grid-pattern opacity-40 pointer-events-none" />

          {/* Glowing gradient aura */}
          <div className="absolute w-96 h-96 rounded-full bg-gradient-to-tr from-[#00ff88]/20 via-[#00e5ff]/20 to-transparent blur-3xl pointer-events-none animate-pulse-slow" />

          <div className="relative z-10 flex flex-col items-center max-w-sm w-full text-center">
            {/* SN Initials Emblem */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="relative w-20 h-20 rounded-2xl bg-slate-900/90 border border-[#00ff88]/40 shadow-[0_0_30px_rgba(0,255,136,0.3)] flex items-center justify-center mb-6"
            >
              {/* Outer pulsing ring */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#00ff88] to-[#00e5ff] opacity-40 blur animate-pulse" />
              <div className="relative flex items-center justify-center">
                <span className="font-heading font-black text-2xl tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] via-white to-[#00e5ff]">
                  SN
                </span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-[#00ff88] radar-dot" />
            </motion.div>

            {/* Terminal Boot Line */}
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-3 h-6">
              <Terminal className="w-3.5 h-3.5 text-[#00ff88] flex-shrink-0 animate-pulse" />
              <span className="text-[#00ff88] font-bold">&gt;</span>
              <span className="text-slate-300 tracking-wider">
                {BOOT_LINES[currentLineIndex]}
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-slate-800/80 rounded-full h-1.5 overflow-hidden border border-slate-700/60 mb-2">
              <motion.div
                className="h-full bg-gradient-to-r from-[#00ff88] via-[#00e5ff] to-[#00ff88] shadow-[0_0_10px_rgba(0,255,136,0.5)]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>

            {/* Percentage Indicator */}
            <div className="flex justify-between w-full text-[11px] font-mono text-slate-500">
              <span className="text-[#00ff88]">SYS:BOOT</span>
              <span className="text-slate-400">{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
