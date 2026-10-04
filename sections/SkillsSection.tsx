'use client';

import SectionHeading from '@/components/SectionHeading';
import SkillGroup from '@/components/SkillGroup';
import { portfolioData } from '@/data/portfolio';
import { Languages, CheckCircle2 } from 'lucide-react';

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="// 04. TECHNICAL EXPERTISE"
          title="Skills &amp; Technology Matrix"
          subtitle="A comprehensive overview of programming languages, frameworks, database architectures, security tooling, and operational e-commerce capabilities."
        />

        {/* 5 Grouped Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {portfolioData.skills.map((skillGroup) => (
            <SkillGroup
              key={skillGroup.category}
              category={skillGroup.category}
              iconName={skillGroup.icon}
              items={skillGroup.items}
            />
          ))}
        </div>

        {/* Languages Proficiency Ribbon */}
        <div className="p-6 rounded-2xl glass-panel border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center text-[#00ff88]">
              <Languages className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-white text-base">
                Spoken &amp; Professional Languages
              </h4>
              <p className="text-xs text-slate-400">
                Effective bilingual communication for international and cross-border teams.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {portfolioData.languages.map((lang) => (
              <div
                key={lang.name}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/80 border border-slate-700/80 text-xs font-mono"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00ff88]" />
                <span className="text-white font-semibold">{lang.name}</span>
                <span className="text-slate-400">({lang.level})</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
