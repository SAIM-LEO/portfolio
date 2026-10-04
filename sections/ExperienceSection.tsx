'use client';

import SectionHeading from '@/components/SectionHeading';
import ExperienceCard from '@/components/ExperienceCard';
import { portfolioData } from '@/data/portfolio';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="// 02. PROFESSIONAL EXPERIENCE"
          title="Amazon Marketplace Operations &amp; Storefronts"
          subtitle="Four years of hands-on visual and listing assistance across multiple international Amazon Seller Central accounts, alongside building a proprietary UK store."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {portfolioData.experience.map((exp) => (
            <ExperienceCard
              key={exp.title}
              title={exp.title}
              company={exp.company}
              duration={exp.duration}
              badge={exp.badge}
              roleType={exp.roleType}
              description={exp.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
