'use client';

import { motion } from 'framer-motion';
import { Award, Calendar, Clock, Building2, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import TiltCard from './TiltCard';
import type { CertificateItem } from '@/data/portfolio';

interface CertificateCardProps {
  cert: CertificateItem;
  priority?: boolean;
}

export default function CertificateCard({ cert, priority = false }: CertificateCardProps) {
  const isNavttc = cert.id === 'certificate-navttc' || cert.grade;

  return (
    <motion.article
      id={cert.id}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="scroll-mt-28"
      aria-label={`${cert.title} - ${cert.issuer}`}
    >
      <TiltCard
        maxTilt={5}
        spotlightColor={isNavttc ? 'rgba(0, 255, 136, 0.15)' : 'rgba(0, 229, 255, 0.15)'}
      >
        <div
          className={`relative group p-6 sm:p-7 rounded-2xl glass-panel transition-all duration-300 border ${
            isNavttc
              ? 'border-l-4 border-l-[#00ff88] border-slate-800/80 hover:border-[#00ff88]/50 hover:shadow-[0_16px_45px_rgba(0,255,136,0.16)] target:border-[#00ff88] target:shadow-[0_0_35px_rgba(0,255,136,0.35)]'
              : 'border-l-4 border-l-[#00e5ff] border-slate-800/80 hover:border-[#00e5ff]/50 hover:shadow-[0_16px_45px_rgba(0,229,255,0.16)]'
          }`}
        >
          {/* Ambient Corner Glow Accent */}
          <div
            className={`absolute top-0 right-0 w-36 h-36 rounded-bl-full pointer-events-none transition-colors ${
              isNavttc
                ? 'bg-[#00ff88]/5 group-hover:bg-[#00ff88]/10'
                : 'bg-[#00e5ff]/5 group-hover:bg-[#00e5ff]/10'
            }`}
          />

          {/* Header: Icon + Category Badge + Grade Badge */}
          <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
            <div className="flex items-center gap-3">
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all ${
                  isNavttc
                    ? 'bg-gradient-to-br from-[#00ff88]/20 to-[#00ff88]/5 border border-[#00ff88]/40 text-[#00ff88] group-hover:border-[#00ff88] group-hover:shadow-[0_0_15px_rgba(0,255,136,0.25)]'
                    : 'bg-gradient-to-br from-[#00e5ff]/20 to-[#00e5ff]/5 border border-[#00e5ff]/40 text-[#00e5ff] group-hover:border-[#00e5ff]'
                }`}
              >
                <Award className="w-5 h-5" />
              </div>
              <div>
                <span
                  className={`inline-block px-2.5 py-0.5 rounded text-[11px] font-mono tracking-wider uppercase font-semibold border ${
                    isNavttc
                      ? 'bg-[#00ff88]/10 text-[#00ff88] border-[#00ff88]/30'
                      : 'bg-[#00e5ff]/10 text-[#00e5ff] border-[#00e5ff]/30'
                  }`}
                >
                  {cert.credentialType}
                </span>
                {cert.awardedTo && (
                  <p className="text-[11px] font-mono text-slate-400 mt-0.5">
                    Awarded to: <span className="text-slate-200 font-semibold">{cert.awardedTo}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Grade Badge */}
            {cert.grade && (
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#00ff88]/15 text-[#00ff88] border border-[#00ff88]/50 shadow-[0_0_12px_rgba(0,255,136,0.25)] animate-pulse-slow">
                <Sparkles className="w-3.5 h-3.5 text-[#00ff88]" />
                <span>{cert.grade}</span>
              </div>
            )}
          </div>

          {/* Certificate Title */}
          <h4 className="text-lg sm:text-xl font-heading font-bold text-white mb-2 leading-snug group-hover:text-[#00ff88] transition-colors">
            {cert.title}
          </h4>

          {/* Program Name if available */}
          {cert.program && (
            <div className="flex items-center gap-1.5 text-xs font-mono text-[#00e5ff] mb-3">
              <ShieldCheck className="w-3.5 h-3.5 flex-shrink-0" />
              <span>{cert.program}</span>
            </div>
          )}

          {/* Issuer & Training Institute */}
          <div className="space-y-2.5 py-3 my-2 border-y border-slate-800/80 text-xs sm:text-sm">
            <div className="flex items-start gap-2.5 text-slate-300">
              <Building2 className="w-4 h-4 text-[#00ff88] flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-slate-400 block text-[11px] font-mono uppercase tracking-wider">
                  Issuing Body
                </span>
                <span className="font-semibold text-slate-100">{cert.issuer}</span>
              </div>
            </div>

            {cert.institution && cert.institution !== cert.issuer && (
              <div className="flex items-start gap-2.5 text-slate-300">
                <Building2 className="w-4 h-4 text-[#00e5ff] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block text-[11px] font-mono uppercase tracking-wider">
                    Training Institute
                  </span>
                  <span className="text-slate-200">{cert.institution}</span>
                </div>
              </div>
            )}
          </div>

          {/* Dates: Duration & Issue Date */}
          {(cert.duration || cert.issueDate) && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono py-2 text-slate-300">
              {cert.duration && (
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#00e5ff] flex-shrink-0" />
                  <span className="text-slate-400">Duration:</span>
                  <span className="text-slate-200">{cert.duration}</span>
                </div>
              )}
              {cert.issueDate && (
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#00ff88] flex-shrink-0" />
                  <span className="text-slate-400">Issued:</span>
                  <span className="text-slate-200">{cert.issueDate}</span>
                </div>
              )}
            </div>
          )}

          {/* Note for items like INTERTECH diploma */}
          {cert.note && (
            <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed mt-2">
              {cert.note}
            </p>
          )}

          {/* Accreditation Marks Chips */}
          {cert.accreditations && cert.accreditations.length > 0 && (
            <div className="mt-4 pt-3 border-t border-slate-800/80">
              <div className="flex items-center gap-2 mb-2 text-[11px] font-mono uppercase tracking-wider text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00ff88]" />
                <span>Accreditation Marks on Certificate:</span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {cert.accreditations.map((mark) => (
                  <span
                    key={mark}
                    className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-slate-900/80 text-slate-200 border border-slate-700/80 shadow-sm hover:border-[#00ff88]/40 transition-colors"
                  >
                    {mark}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </TiltCard>
    </motion.article>
  );
}
