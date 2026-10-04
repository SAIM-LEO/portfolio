'use client';

import { Globe, Code2, Database, ShieldCheck, ShoppingBag } from 'lucide-react';

interface SkillGroupProps {
  category: string;
  iconName: string;
  items: string[];
}

export default function SkillGroup({ category, iconName, items }: SkillGroupProps) {
  const renderIcon = () => {
    switch (iconName) {
      case 'Globe':
        return <Globe className="w-5 h-5 text-[#00ff88]" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-[#00e5ff]" />;
      case 'Database':
        return <Database className="w-5 h-5 text-emerald-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#00ff88]" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-5 h-5 text-amber-400" />;
      default:
        return <Code2 className="w-5 h-5 text-[#00ff88]" />;
    }
  };

  return (
    <div className="p-6 rounded-2xl glass-panel transition-all duration-300 hover:border-[#00ff88]/40 hover:shadow-[0_10px_30px_rgba(0,255,136,0.08)] flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center">
            {renderIcon()}
          </div>
          <h3 className="text-lg font-heading font-bold text-white dark:text-white light:text-slate-900">
            {category}
          </h3>
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          {items.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium tracking-wide bg-slate-800/60 dark:bg-slate-800/60 light:bg-slate-100 border border-slate-700/80 dark:border-slate-700/80 light:border-slate-200 text-slate-200 dark:text-slate-200 light:text-slate-800 hover:border-[#00ff88]/60 hover:text-[#00ff88] hover:bg-[#00ff88]/5 transition-all duration-200 cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
