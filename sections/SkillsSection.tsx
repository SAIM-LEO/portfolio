'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';
import SkillGroup from '@/components/SkillGroup';
import Marquee from '@/components/Marquee';
import SpotlightCard from '@/components/SpotlightCard';
import { portfolioData } from '@/data/portfolio';
import { Languages, CheckCircle2, Terminal } from 'lucide-react';

const HIGHLIGHT_TECHS = [
  'React JS',
  'Python (FastAPI)',
  'Amazon Seller Central',
  'WebSecureX DAST',
  'MongoDB',
  'SQL / MySQL',
  'Kali Linux',
  'JWT Authentication',
  'SQLMap & XSStrike',
  'Server-Sent Events (SSE)',
  'Node.js & Express',
  'C++ (OOP & DSA)',
  'REST APIs',
];

export default function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="skills" className="py-20 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="// 04. TECHNICAL EXPERTISE"
          title="Skills &amp; Technology Matrix"
          subtitle="A comprehensive overview of programming languages, frameworks, database architectures, security tooling, and operational e-commerce capabilities."
        />

        {/* Infinite Tech Marquee Loop */}
        <div className="mb-12">
          <Marquee speed="normal" className="py-2">
            {HIGHLIGHT_TECHS.map((tech) => (
              <div
                key={tech}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-700/80 text-xs font-mono text-slate-300 hover:border-[#00ff88]/50 hover:text-[#00ff88] transition-colors shadow-sm"
              >
                <Terminal className="w-3.5 h-3.5 text-[#00ff88]" />
                <span>{tech}</span>
              </div>
            ))}
          </Marquee>
        </div>

        {/* 5 Grouped Categories Grid with Staggered Entrance */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10"
        >
          {portfolioData.skills.map((skillGroup) => (
            <motion.div key={skillGroup.category} variants={itemVariants}>
              <SkillGroup
                category={skillGroup.category}
                iconName={skillGroup.icon}
                items={skillGroup.items}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Languages Proficiency Ribbon */}
        <SpotlightCard
          spotlightColor="rgba(0, 229, 255, 0.1)"
          className="p-6 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
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
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/80 border border-slate-700/80 text-xs font-mono hover:border-[#00ff88]/40 transition-colors"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00ff88]" />
                <span className="text-white font-semibold">{lang.name}</span>
                <span className="text-slate-400">({lang.level})</span>
              </div>
            ))}
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
}
