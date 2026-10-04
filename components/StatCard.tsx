'use client';

import StatCounter from './StatCounter';
import SpotlightCard from './SpotlightCard';

interface StatCardProps {
  value: string;
  label: string;
  description: string;
}

export default function StatCard({ value, label, description }: StatCardProps) {
  return (
    <SpotlightCard
      spotlightColor="rgba(0, 255, 136, 0.15)"
      className="p-6 sm:p-7 group hover:border-[#00ff88]/50 hover:shadow-[0_12px_35px_rgba(0,255,136,0.15)] hover:-translate-y-1"
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#00ff88]/40 to-transparent group-hover:via-[#00ff88] transition-all duration-500" />

      <div className="text-4xl lg:text-5xl font-heading font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-[#00e5ff] mb-2 group-hover:scale-105 transition-transform duration-300 origin-left">
        <StatCounter value={value} />
      </div>

      <div className="text-base font-semibold text-white dark:text-white light:text-slate-900 mb-1 font-heading">
        {label}
      </div>

      <div className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed font-sans">
        {description}
      </div>
    </SpotlightCard>
  );
}
