'use client';

import SectionHeading from '@/components/SectionHeading';
import TimelineItem from '@/components/TimelineItem';
import { portfolioData } from '@/data/portfolio';
import { GraduationCap, Award } from 'lucide-react';

export default function EducationSection() {
  return (
    <section id="education" className="py-20 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="// 05. ACADEMIC & PROFESSIONAL TRAINING"
          title="Education &amp; Credentials"
          subtitle="Formal academic qualification in Information Technology along with verified industry-grade application development diplomas."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Education Timeline (Left 7 cols) */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-xl bg-[#00ff88]/10 border border-[#00ff88]/30 flex items-center justify-center text-[#00ff88]">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                Academic Journey
              </h3>
            </div>

            <div className="relative pl-2 sm:pl-4">
              {portfolioData.education.map((item, idx) => (
                <TimelineItem
                  key={item.degree}
                  title={item.degree}
                  institution={item.institution}
                  period={item.period}
                  status={item.status}
                  isLast={idx === portfolioData.education.length - 1}
                  type="education"
                />
              ))}
            </div>
          </div>

          {/* Professional Training & Certifications (Right 5 cols) */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-xl bg-[#00e5ff]/10 border border-[#00e5ff]/30 flex items-center justify-center text-[#00e5ff]">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                Diplomas &amp; Training
              </h3>
            </div>

            <div className="space-y-4">
              {portfolioData.training.map((item) => (
                <div
                  key={item.title}
                  className="p-6 rounded-2xl glass-panel border-l-4 border-l-[#00e5ff] transition-all hover:translate-x-1"
                >
                  <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-mono bg-[#00e5ff]/10 text-[#00e5ff] border border-[#00e5ff]/30 mb-2">
                    Professional Diploma
                  </span>
                  <h4 className="text-lg font-heading font-bold text-white mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm font-semibold text-slate-300 mb-2">
                    {item.institution}
                  </p>
                  {item.note && (
                    <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
                      {item.note}
                    </p>
                  )}
                </div>
              ))}

              {/* Verified Status Banner */}
              <div className="p-5 rounded-2xl bg-[#00ff88]/5 border border-[#00ff88]/20 flex items-start gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#00ff88] mt-1.5 flex-shrink-0" />
                <div className="text-xs text-slate-300 font-sans leading-relaxed">
                  <strong className="text-white block font-mono mb-0.5">Degree Completed:</strong>
                  Graduated with a Bachelor of Science in Information Technology from Govt. Islamia College Civil Lines, Lahore (University of the Punjab).
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
