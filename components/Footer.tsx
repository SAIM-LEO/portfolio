'use client';

import Link from 'next/link';
import { portfolioData } from '@/data/portfolio';
import { ShieldCheck, Github, Mail, ArrowUp, MapPin } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-slate-800/80 bg-[#050814] pt-12 pb-8 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#00ff88]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          {/* Brand & Bio */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-lg bg-[#00ff88]/10 border border-[#00ff88]/30 flex items-center justify-center text-[#00ff88]">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span className="font-heading font-bold text-lg text-white">
                {portfolioData.personal.name}
              </span>
              <span className="font-mono text-xs text-[#00ff88]">
                ({portfolioData.personal.nickname})
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md">
              {portfolioData.personal.headline}
            </p>
            <div className="flex items-center justify-center md:justify-start gap-1.5 mt-2 text-xs font-mono text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-[#00ff88]" />
              <span>{portfolioData.personal.location}</span>
            </div>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-slate-800 bg-slate-900/60 text-slate-300 hover:text-[#00ff88] hover:border-[#00ff88]/50 transition-all"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="p-2.5 rounded-xl border border-slate-800 bg-slate-900/60 text-slate-300 hover:text-[#00e5ff] hover:border-[#00e5ff]/50 transition-all"
              aria-label="Email Saim"
            >
              <Mail className="w-5 h-5" />
            </a>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-3 py-2 rounded-xl border border-slate-800 bg-slate-900/60 text-xs font-mono text-slate-400 hover:text-[#00ff88] hover:border-[#00ff88]/50 transition-all ml-2"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="hidden sm:inline">Top</span>
            </button>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00ff88] radar-dot" />
            <span className="text-[#00ff88]">SECURED &amp; OPTIMIZED ARCHITECTURE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
