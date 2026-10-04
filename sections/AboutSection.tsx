'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';
import StatCard from '@/components/StatCard';
import SpotlightCard from '@/components/SpotlightCard';
import TiltCard from '@/components/TiltCard';
import { portfolioData } from '@/data/portfolio';
import { ShieldCheck, Code, Globe2, Layers, CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

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
          {/* Main Bio Statement with Tilt & Spotlight */}
          <div className="lg:col-span-7">
            <TiltCard maxTilt={5} spotlightColor="rgba(0, 255, 136, 0.1)">
              <div className="p-8 rounded-2xl glass-panel relative flex flex-col justify-between h-full border border-slate-800/80 hover:border-[#00ff88]/40 transition-colors">
                <div className="space-y-5 text-base sm:text-lg text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed font-sans">
                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="first-letter:text-4xl first-letter:font-bold first-letter:text-[#00ff88] first-letter:mr-2 first-letter:float-left"
                  >
                    {portfolioData.personal.about}
                  </motion.p>

                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="pt-4 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-sans"
                  >
                    <motion.div variants={itemVariants} className="flex items-center gap-2 text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-[#00ff88] flex-shrink-0" />
                      <span>Secure-by-design architecture</span>
                    </motion.div>
                    <motion.div variants={itemVariants} className="flex items-center gap-2 text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-[#00ff88] flex-shrink-0" />
                      <span>Automated DAST orchestration</span>
                    </motion.div>
                    <motion.div variants={itemVariants} className="flex items-center gap-2 text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-[#00e5ff] flex-shrink-0" />
                      <span>UK &amp; US Amazon marketplace handling</span>
                    </motion.div>
                    <motion.div variants={itemVariants} className="flex items-center gap-2 text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-[#00e5ff] flex-shrink-0" />
                      <span>Executive + technical reporting</span>
                    </motion.div>
                  </motion.div>
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
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-800/80 border border-slate-700/80 text-slate-300 hover:border-[#00ff88]/40 hover:text-white transition-colors"
                    >
                      <strong className="text-white font-semibold">{lang.name}:</strong>{' '}
                      <span className="text-slate-400">{lang.level}</span>
                    </span>
                  ))}
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Core Strengths Triple Cards with Spotlight */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <SpotlightCard
              spotlightColor="rgba(0, 255, 136, 0.12)"
              className="p-5 border-l-4 border-l-[#00ff88] transition-all hover:translate-x-1"
            >
              <div className="flex items-center gap-3 mb-1.5">
                <ShieldCheck className="w-5 h-5 text-[#00ff88]" />
                <h4 className="font-heading font-bold text-white text-base">
                  Application Security Focus
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-400">
                Proficient in vulnerability discovery across SQLi, XSS, NoSQLi, and SSL/TLS cipher suites with automated scanner orchestration.
              </p>
            </SpotlightCard>

            <SpotlightCard
              spotlightColor="rgba(0, 229, 255, 0.12)"
              className="p-5 border-l-4 border-l-[#00e5ff] transition-all hover:translate-x-1"
            >
              <div className="flex items-center gap-3 mb-1.5">
                <Code className="w-5 h-5 text-[#00e5ff]" />
                <h4 className="font-heading font-bold text-white text-base">
                  Full-Stack Development
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-400">
                Building responsive frontends in React JS alongside asynchronous backends in Python (FastAPI), Node.js, Express, and MongoDB.
              </p>
            </SpotlightCard>

            <SpotlightCard
              spotlightColor="rgba(251, 191, 36, 0.12)"
              className="p-5 border-l-4 border-l-amber-400 transition-all hover:translate-x-1"
            >
              <div className="flex items-center justify-between gap-2 mb-1.5 flex-wrap">
                <div className="flex items-center gap-3">
                  <Layers className="w-5 h-5 text-amber-400" />
                  <h4 className="font-heading font-bold text-white text-base">
                    Amazon Seller Central Operations
                  </h4>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-[#00ff88]/10 text-[#00ff88] border border-[#00ff88]/30">
                  NAVTTC Certified
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400">
                4 years of operational visual &amp; listing assistance across multiple seller accounts, currently handling 1 UK and 1 US marketplace.
              </p>
            </SpotlightCard>
          </div>
        </div>

        {/* 3 Key Stats Counter Grid */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {portfolioData.stats.map((stat) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              label={stat.label}
              description={stat.description}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
