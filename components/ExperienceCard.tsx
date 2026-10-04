import Link from 'next/link';
import { Briefcase, Sparkles, CheckCircle2, Award, ArrowUpRight } from 'lucide-react';

interface ExperienceCardProps {
  title: string;
  company: string;
  duration: string;
  badge?: string;
  roleType: string;
  description: string[];
  trainingLink?: {
    text: string;
    href: string;
  };
}

export default function ExperienceCard({
  title,
  company,
  duration,
  badge,
  roleType,
  description,
  trainingLink,
}: ExperienceCardProps) {
  return (
    <div className="relative group p-6 sm:p-8 rounded-2xl glass-panel transition-all duration-300 hover:border-[#00e5ff]/50 hover:shadow-[0_12px_40px_rgba(0,229,255,0.12)] hover:-translate-y-1">
      {/* Corner Glow Accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#00e5ff]/5 rounded-bl-full pointer-events-none group-hover:bg-[#00e5ff]/10 transition-colors" />

      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00ff88]/10 to-[#00e5ff]/20 border border-[#00e5ff]/30 flex items-center justify-center text-[#00e5ff] group-hover:border-[#00e5ff] transition-all">
            <Briefcase className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-white dark:text-white light:text-slate-900 group-hover:text-[#00e5ff] transition-colors">
                {title}
              </h3>
              {badge && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-[#00ff88]/20 text-[#00ff88] border border-[#00ff88]/50 shadow-[0_0_10px_rgba(0,255,136,0.3)] animate-pulse">
                  <Sparkles className="w-3 h-3" />
                  {badge}
                </span>
              )}
            </div>
            <p className="text-sm font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700">
              {company} <span className="text-slate-500 font-normal">| {roleType}</span>
            </p>
          </div>
        </div>

        <span className="px-3 py-1 rounded-full text-xs font-mono border border-slate-700 bg-slate-800/60 text-slate-300">
          {duration}
        </span>
      </div>

      <ul className="space-y-3 mt-5">
        {description.map((bullet, i) => (
          <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed font-sans">
            <CheckCircle2 className="w-4 h-4 text-[#00ff88] flex-shrink-0 mt-1" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      {trainingLink && (
        <div className="mt-5 pt-4 border-t border-slate-800/80">
          <Link
            href={trainingLink.href}
            className="group/link inline-flex items-center gap-2 text-xs sm:text-sm font-sans font-medium text-[#00ff88] hover:text-[#00e5ff] transition-colors"
          >
            <Award className="w-4 h-4 text-[#00ff88] flex-shrink-0 group-hover/link:scale-110 transition-transform" />
            <span className="underline decoration-[#00ff88]/40 group-hover/link:decoration-[#00e5ff]">
              {trainingLink.text}
            </span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#00ff88] flex-shrink-0 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      )}
    </div>
  );
}
