'use client';

import SectionHeading from '@/components/SectionHeading';
import BrowserMockup from '@/components/BrowserMockup';
import { portfolioData } from '@/data/portfolio';
import {
  Shield,
  ExternalLink,
  Github,
  Zap,
  Terminal,
  FileText,
  Clock,
  Laptop,
  Radio,
  CheckCircle,
  Cpu,
} from 'lucide-react';

export default function FeaturedProjectSection() {
  const project = portfolioData.featuredProject;

  return (
    <section id="featured-project" className="py-24 relative scroll-mt-20">
      {/* Background radial accent behind centerpiece */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-6xl h-96 bg-[#00ff88]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="// 03. CENTERPIECE FEATURED PROJECT"
          title="WebSecureX — Security Assessment Suite"
          subtitle="Final Year Project: An enterprise-grade automated DAST & Attack Surface Reconnaissance platform engineered to detect, analyze, and mitigate web vulnerabilities."
        />

        {/* Top Highlight Card with Live Action Buttons */}
        <div className="mb-10 p-6 sm:p-8 rounded-2xl glass-panel border border-[#00ff88]/30 bg-gradient-to-r from-[#050814]/90 via-[#0a1226]/80 to-[#050814]/90">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#00ff88]/20 text-[#00ff88] border border-[#00ff88]/40 shadow-[0_0_12px_rgba(0,255,136,0.3)]">
                  {project.badge}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  DAST Platform &amp; Attack Surface Intelligence
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
                Web Application Security Assessment Tool
              </h3>
              <p className="text-sm sm:text-base text-slate-300 max-w-3xl mt-2 font-sans">
                {project.description}
              </p>
            </div>

            {/* Live Demo and Code Buttons */}
            <div className="flex flex-wrap items-center gap-3 flex-shrink-0">
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl font-heading font-bold text-sm tracking-wide bg-[#00ff88] text-slate-950 hover:bg-[#00e5ff] hover:shadow-[0_0_25px_rgba(0,255,136,0.5)] transition-all duration-300 flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl font-heading font-semibold text-sm tracking-wide border border-slate-700 bg-slate-900/80 text-white hover:border-[#00ff88]/50 hover:text-[#00ff88] transition-all duration-300 flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            </div>
          </div>

          {/* Technology Stack Pill Bar */}
          <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-slate-400 mr-2 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-[#00ff88]" />
              Core Architecture:
            </span>
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-800/80 border border-slate-700/80 text-[#00ff88]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Centerpiece Browser Window Showcase */}
        <div className="mb-16">
          <BrowserMockup screenshots={project.screenshots} liveUrl={project.liveDemoUrl} />
        </div>

        {/* Deep Dive Grid: 6 Core Security Engines */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-6 h-6 text-[#00ff88]" />
            <h4 className="text-xl sm:text-2xl font-heading font-bold text-white">
              6 Core Vulnerability &amp; Recon Engines
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {project.engines.map((eng) => (
              <div
                key={eng.name}
                className="p-5 rounded-xl glass-panel transition-all hover:border-[#00ff88]/40 hover:shadow-[0_8px_25px_rgba(0,255,136,0.1)] group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h5 className="font-heading font-bold text-white group-hover:text-[#00ff88] transition-colors text-base">
                      {eng.name}
                    </h5>
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#00ff88]/10 text-[#00ff88] border border-[#00ff88]/30">
                      {eng.tag}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed font-sans">
                    {eng.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Modules: Recon + Scan Depths + Operational Features */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {/* Attack Surface Recon Module */}
          <div className="p-6 rounded-2xl glass-panel border-t-2 border-t-[#00ff88] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-4 text-[#00ff88]">
                <Radio className="w-5 h-5" />
                <h5 className="font-heading font-bold text-lg text-white">
                  Attack Surface Recon
                </h5>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                {project.reconFeatures.map((recon, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#00ff88] flex-shrink-0 mt-0.5" />
                    <span>{recon}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-400">
              Module: Certificate Transparency + DNS + Port Fingerprinting
            </div>
          </div>

          {/* Three Scan Depth Levels */}
          <div className="p-6 rounded-2xl glass-panel border-t-2 border-t-[#00e5ff] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-4 text-[#00e5ff]">
                <Zap className="w-5 h-5" />
                <h5 className="font-heading font-bold text-lg text-white">
                  Three Scan Depth Levels
                </h5>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                {project.scanDepths.map((depth, idx) => {
                  const [level, desc] = depth.split(':');
                  return (
                    <li key={idx} className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                      <strong className="text-[#00e5ff] font-mono block text-xs mb-0.5">
                        {level}:
                      </strong>
                      <span className="text-slate-300">{desc}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-400">
              Granular depth profiles for swift checks or deep audits
            </div>
          </div>

          {/* Key System Features */}
          <div className="p-6 rounded-2xl glass-panel border-t-2 border-t-emerald-400 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-4 text-emerald-400">
                <FileText className="w-5 h-5" />
                <h5 className="font-heading font-bold text-lg text-white">
                  Reporting &amp; Dispatch
                </h5>
              </div>
              <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                {project.features.map((feat) => (
                  <div key={feat.title} className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                    <strong className="text-emerald-400 font-heading block text-xs mb-0.5">
                      {feat.title}
                    </strong>
                    <span className="text-slate-300">{feat.desc}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-400">
              Humanized + technical scoring with cron automation
            </div>
          </div>
        </div>

        {/* Bottom Banner with Fast Links */}
        <div className="p-6 rounded-2xl glass-panel border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-[#00ff88]">
              <Laptop className="w-5 h-5" />
            </div>
            <div>
              <div className="font-heading font-bold text-white text-base">
                Explore WebSecureX Live or Review Source
              </div>
              <div className="text-xs text-slate-400">
                Deployed live on Vercel with complete GitHub repository documentation.
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl font-heading font-bold text-xs tracking-wide bg-[#00ff88] text-slate-950 hover:bg-[#00e5ff] transition-all flex items-center gap-1.5"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Launch Live Tool</span>
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl font-heading font-semibold text-xs tracking-wide border border-slate-700 bg-slate-900 text-slate-200 hover:text-white hover:border-[#00ff88]/50 transition-all flex items-center gap-1.5"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub Repo</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
