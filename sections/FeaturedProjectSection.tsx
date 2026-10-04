'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';
import BrowserMockup from '@/components/BrowserMockup';
import SecurityTerminalSim from '@/components/SecurityTerminalSim';
import TiltCard from '@/components/TiltCard';
import SpotlightCard from '@/components/SpotlightCard';
import MagneticButton from '@/components/MagneticButton';
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

  const badgeContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
    },
  };

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

        {/* Top Highlight Card with 3D Tilt + Cursor Spotlight */}
        <div className="mb-10">
          <TiltCard maxTilt={5} spotlightColor="rgba(0, 255, 136, 0.15)">
            <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-[#00ff88]/30 bg-gradient-to-r from-[#050814]/90 via-[#0a1226]/80 to-[#050814]/90 shadow-2xl">
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
                  <p className="text-sm sm:text-base text-slate-300 max-w-3xl mt-2 font-sans leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Live Demo and Code Buttons with Magnetic Effects */}
                <div className="flex flex-wrap items-center gap-3 flex-shrink-0">
                  <MagneticButton>
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-xl font-heading font-bold text-sm tracking-wide bg-[#00ff88] text-slate-950 hover:bg-[#00e5ff] hover:shadow-[0_0_25px_rgba(0,255,136,0.5)] transition-all duration-300 flex items-center gap-2 group/btn"
                    >
                      <ExternalLink className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5" />
                      <span>Live Demo</span>
                    </a>
                  </MagneticButton>

                  <MagneticButton>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 rounded-xl font-heading font-semibold text-sm tracking-wide border border-slate-700 bg-slate-900/80 text-white hover:border-[#00ff88]/50 hover:text-[#00ff88] transition-all duration-300 flex items-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      <span>Source Code</span>
                    </a>
                  </MagneticButton>
                </div>
              </div>

              {/* Technology Stack Pill Bar with Staggered Entrance */}
              <motion.div
                variants={badgeContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-6 pt-5 border-t border-slate-800/80 flex flex-wrap items-center gap-2"
              >
                <span className="text-xs font-mono text-slate-400 mr-2 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-[#00ff88]" />
                  Core Architecture:
                </span>
                {project.stack.map((tech) => (
                  <motion.span
                    key={tech}
                    variants={badgeVariants}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-800/80 border border-slate-700/80 text-[#00ff88] shadow-sm hover:border-[#00ff88]/50 transition-colors"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </TiltCard>
        </div>

        {/* Centerpiece Browser Window Showcase */}
        <div className="mb-10">
          <BrowserMockup screenshots={project.screenshots} liveUrl={project.liveDemoUrl} />
        </div>

        {/* Live Cyber Terminal Stream Simulation */}
        <div className="mb-16">
          <SecurityTerminalSim />
        </div>

        {/* Deep Dive Grid: 6 Core Security Engines with Spotlight */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-6 h-6 text-[#00ff88]" />
            <h4 className="text-xl sm:text-2xl font-heading font-bold text-white">
              6 Core Vulnerability &amp; Recon Engines
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {project.engines.map((eng) => (
              <SpotlightCard
                key={eng.name}
                spotlightColor="rgba(0, 255, 136, 0.12)"
                className="p-5 flex flex-col justify-between hover:border-[#00ff88]/40 hover:shadow-[0_8px_25px_rgba(0,255,136,0.1)] group transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h5 className="font-heading font-bold text-white group-hover:text-[#00ff88] transition-colors text-base">
                      {eng.name}
                    </h5>
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#00ff88]/10 text-[#00ff88] border border-[#00ff88]/30 font-semibold">
                      {eng.tag}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed font-sans">
                    {eng.description}
                  </p>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>

        {/* Technical Modules: Recon + Scan Depths + Operational Features */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {/* Attack Surface Recon Module */}
          <SpotlightCard
            spotlightColor="rgba(0, 255, 136, 0.1)"
            className="p-6 border-t-2 border-t-[#00ff88] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2.5 mb-4 text-[#00ff88]">
                <Radio className="w-5 h-5" />
                <h5 className="font-heading font-bold text-lg text-white">
                  Attack Surface Recon
                </h5>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                {project.reconFeatures.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#00ff88] flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] font-mono text-slate-400">
              Module: Certificate Transparency + DNS + Port Fingerprinting
            </div>
          </SpotlightCard>

          {/* Granular Scan Depths Module */}
          <SpotlightCard
            spotlightColor="rgba(0, 229, 255, 0.1)"
            className="p-6 border-t-2 border-t-[#00e5ff] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2.5 mb-4 text-[#00e5ff]">
                <Zap className="w-5 h-5" />
                <h5 className="font-heading font-bold text-lg text-white">
                  3 Scan Audit Depths
                </h5>
              </div>
              <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                {project.scanDepths.map((depth, i) => {
                  const [level, ...rest] = depth.split(':');
                  return (
                    <div key={i} className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                      <strong className="text-[#00e5ff] block font-mono text-xs mb-0.5">
                        {level}:
                      </strong>
                      <span className="text-slate-400 text-xs">{rest.join(':')}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] font-mono text-slate-400">
              Granular depth profiles for swift checks or deep audits
            </div>
          </SpotlightCard>

          {/* Operational Platform Features */}
          <SpotlightCard
            spotlightColor="rgba(56, 189, 248, 0.1)"
            className="p-6 border-t-2 border-t-blue-400 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2.5 mb-4 text-blue-400">
                <Laptop className="w-5 h-5" />
                <h5 className="font-heading font-bold text-lg text-white">
                  Automation &amp; Orchestration
                </h5>
              </div>
              <div className="space-y-3">
                {project.features.map((feat, i) => (
                  <div key={i} className="text-xs sm:text-sm">
                    <strong className="text-slate-200 block font-heading mb-0.5 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      {feat.title}
                    </strong>
                    <p className="text-slate-400 text-xs leading-relaxed font-sans">{feat.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] font-mono text-slate-400">
              Automated PDF executive reporting &amp; live log streaming
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
