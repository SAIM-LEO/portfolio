'use client';

import SectionHeading from '@/components/SectionHeading';
import StatCard from '@/components/StatCard';
import { portfolioData } from '@/data/portfolio';
import { ShieldCheck, Code, Globe2, Layers, CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="// 01. PROFILE OVERVIEW"
          title="Bridging Engineering &amp; Application Security"
          subtitle="A dedicated technologist pairing robust web engineering with automated vulnerability discovery and four years of international Amazon operations."
        />

        {/* Bio Card + Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-stretch">
          {/* Main Bio Statement */}
          <div className="lg:col-span-7 p-8 rounded-2xl glass-panel relative flex flex-col justify-between">
            <div className="space-y-5 text-base sm:text-lg text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed font-sans">
              <p className="first-letter:text-4xl first-letter:font-bold first-letter:text-[#00ff88] first-letter:mr-2 first-letter:float-left">
                {portfolioData.personal.about}
              </p>

              <div className="pt-4 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-sans">
                <div className="flex items-center gap-2 text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#00ff88] flex-shrink-0" />
                  <span>Secure-by-design architecture</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#00ff88] flex-shrink-0" />
                  <span>Automated DAST orchestration</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#00e5ff] flex-shrink-0" />
                  <span>UK &amp; US Amazon marketplace handling</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#00e5ff] flex-shrink-0" />
                  <span>Executive + technical reporting</span>
                </div>
              </div>
            </div>

            {/* Languages Bar */}
            <div className="mt-8 pt-5 border-t border-slate-800 flex flex-wrap items-center gap-3">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <Globe2 className="w-3.5 h-3.5 text-[#00ff88]" />
                Languages:
              </span>
              {portfolioData.languages.map((lang) => (
                <span
                  key={lang.name}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-800/80 border border-slate-700/80 text-slate-300"
                >
                  <strong className="text-white font-semibold">{lang.name}:</strong>{' '}
                  <span className="text-slate-400">{lang.level}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Core Strengths Triple Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="p-5 rounded-xl glass-panel border-l-4 border-l-[#00ff88] transition-all hover:translate-x-1">
              <div className="flex items-center gap-3 mb-1.5">
                <ShieldCheck className="w-5 h-5 text-[#00ff88]" />
                <h4 className="font-heading font-bold text-white text-base">
                  Application Security Focus
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-400">
                Proficient in vulnerability discovery across SQLi, XSS, NoSQLi, and SSL/TLS cipher suites with automated scanner orchestration.
              </p>
            </div>

            <div className="p-5 rounded-xl glass-panel border-l-4 border-l-[#00e5ff] transition-all hover:translate-x-1">
              <div className="flex items-center gap-3 mb-1.5">
                <Code className="w-5 h-5 text-[#00e5ff]" />
                <h4 className="font-heading font-bold text-white text-base">
                  Full-Stack Development
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-400">
                Building responsive frontends in React JS alongside asynchronous backends in Python (FastAPI), Node.js, Express, and MongoDB.
              </p>
            </div>

            <div className="p-5 rounded-xl glass-panel border-l-4 border-l-amber-400 transition-all hover:translate-x-1">
              <div className="flex items-center gap-3 mb-1.5">
                <Layers className="w-5 h-5 text-amber-400" />
                <h4 className="font-heading font-bold text-white text-base">
                  Amazon Seller Central Operations
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-400">
                4 years of operational visual &amp; listing assistance across multiple seller accounts, currently handling 1 UK and 1 US marketplace.
              </p>
            </div>
          </div>
        </div>

        {/* 3 Key Stats Counter Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioData.stats.map((stat) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              label={stat.label}
              description={stat.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
