'use client';

import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';
import ExperienceCard from '@/components/ExperienceCard';
import TiltCard from '@/components/TiltCard';
import { portfolioData } from '@/data/portfolio';

export default function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 75%', 'end 60%'],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section id="experience" className="py-20 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="// 02. PROFESSIONAL EXPERIENCE"
          title="Amazon Marketplace Operations &amp; Storefronts"
          subtitle="Four years of hands-on visual and listing assistance across multiple international Amazon Seller Central accounts, alongside building a proprietary UK store."
        />

        <div ref={containerRef} className="relative max-w-5xl mx-auto mt-12">
          {/* Vertical Timeline Track - Centered on desktop, left on mobile */}
          <div className="absolute top-4 bottom-4 left-4 md:left-1/2 -translate-x-1/2 w-[2px] bg-slate-800/80 -z-0">
            {/* Animated drawing line filled by scroll */}
            <motion.div
              className="w-full bg-gradient-to-b from-[#00ff88] via-[#00e5ff] to-[#00ff88] origin-top shadow-[0_0_12px_rgba(0,255,136,0.6)]"
              style={{ scaleY, height: '100%' }}
            />
          </div>

          <div className="space-y-12">
            {portfolioData.experience.map((exp, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={exp.title}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:justify-start' : 'md:justify-end'
                  }`}
                >
                  {/* Timeline Glowing Node */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-8 w-5 h-5 rounded-full bg-[#050814] border-2 border-[#00ff88] z-20 flex items-center justify-center shadow-[0_0_12px_rgba(0,255,136,0.4)]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00ff88] animate-ping" />
                  </div>

                  {/* Card sliding in alternately from left/right */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: isEven ? -60 : 60,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="w-full md:w-[calc(50%-2rem)] pl-10 md:pl-0"
                  >
                    <TiltCard maxTilt={6} spotlightColor="rgba(0, 229, 255, 0.12)">
                      <ExperienceCard
                        title={exp.title}
                        company={exp.company}
                        duration={exp.duration}
                        badge={exp.badge}
                        roleType={exp.roleType}
                        description={exp.description}
                        trainingLink={exp.trainingLink}
                      />
                    </TiltCard>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
