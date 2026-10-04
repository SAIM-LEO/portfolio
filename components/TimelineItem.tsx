'use client';

import { GraduationCap, Award, Calendar } from 'lucide-react';

interface TimelineItemProps {
  title: string;
  institution: string;
  period?: string;
  status?: string;
  isLast?: boolean;
  type?: 'education' | 'training';
}

export default function TimelineItem({
  title,
  institution,
  period,
  status,
  isLast = false,
  type = 'education',
}: TimelineItemProps) {
  return (
    <div className="relative flex gap-4 sm:gap-6 group">
      {/* Vertical timeline track line */}
      {!isLast && (
        <div className="absolute top-10 left-5 sm:left-6 -bottom-6 w-0.5 bg-gradient-to-b from-[#00ff88]/40 via-slate-700 to-transparent group-hover:from-[#00ff88] transition-colors" />
      )}

      {/* Node Icon */}
      <div className="relative z-10 w-10 sm:w-12 h-10 sm:h-12 rounded-xl flex-shrink-0 flex items-center justify-center bg-slate-900 border border-slate-700 group-hover:border-[#00ff88] group-hover:shadow-[0_0_15px_rgba(0,255,136,0.3)] transition-all">
        {type === 'education' ? (
          <GraduationCap className="w-5 sm:w-6 h-5 sm:h-6 text-[#00ff88]" />
        ) : (
          <Award className="w-5 sm:w-6 h-5 sm:h-6 text-[#00e5ff]" />
        )}
      </div>

      {/* Card Content */}
      <div className="flex-1 pb-8">
        <div className="p-5 sm:p-6 rounded-2xl glass-panel transition-all duration-300 hover:border-slate-600 hover:shadow-lg">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <h3 className="text-lg sm:text-xl font-heading font-bold text-white dark:text-white light:text-slate-900 group-hover:text-[#00ff88] transition-colors">
              {title}
            </h3>
            {period && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono border border-slate-700 bg-slate-800/80 text-slate-300">
                <Calendar className="w-3.5 h-3.5 text-[#00ff88]" />
                {period}
              </span>
            )}
          </div>

          <p className="text-sm font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 mb-2">
            {institution}
          </p>

          {status && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-mono font-semibold bg-[#00ff88]/10 text-[#00ff88] border border-[#00ff88]/30">
              Status: {status}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
