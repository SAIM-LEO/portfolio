'use client';

import SectionHeading from '@/components/SectionHeading';
import TimelineItem from '@/components/TimelineItem';
import CertificateCard from '@/components/CertificateCard';
import { portfolioData } from '@/data/portfolio';
import { GraduationCap, Award } from 'lucide-react';

export default function EducationSection() {
  return (
    <section id="education" className="py-20 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="// 05. ACADEMIC & PROFESSIONAL CREDENTIALS"
          title="Education &amp; Credentials"
          subtitle="Formal academic qualification in Information Technology along with verified industry certifications and professional application development diplomas."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Education Timeline (Left 6 cols) */}
          <div className="lg:col-span-6">
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

          {/* Professional Training & Certifications (Right 6 cols) */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-xl bg-[#00e5ff]/10 border border-[#00e5ff]/30 flex items-center justify-center text-[#00e5ff]">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                Training &amp; Certifications
              </h3>
            </div>

            <div className="space-y-5">
              {portfolioData.certifications.map((cert) => (
                <CertificateCard key={cert.id} cert={cert} />
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
