'use client';

import { useState } from 'react';
import SectionHeading from '@/components/SectionHeading';
import ContactForm from '@/components/ContactForm';
import SpotlightCard from '@/components/SpotlightCard';
import MagneticButton from '@/components/MagneticButton';
import { portfolioData } from '@/data/portfolio';
import { Mail, Phone, MessageSquare, Github, MapPin, Copy, Check, ArrowUpRight } from 'lucide-react';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-20 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="// 06. INITIALIZE COMM"
          title="Get In Touch With Saim"
          subtitle="Open for discussions regarding full-stack software development, web application security evaluations, or Amazon marketplace operational leadership."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Side: Contact Information Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Direct Email Card */}
            <SpotlightCard
              spotlightColor="rgba(0, 255, 136, 0.12)"
              className="p-5 flex items-center justify-between gap-4 hover:border-[#00ff88]/40"
            >
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-11 h-11 rounded-xl bg-[#00ff88]/10 border border-[#00ff88]/30 flex items-center justify-center text-[#00ff88] flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-xs font-mono text-slate-400">DIRECT EMAIL</div>
                  <a
                    href={`mailto:${portfolioData.personal.email}`}
                    className="text-sm font-semibold text-white hover:text-[#00ff88] truncate block transition-colors font-sans"
                  >
                    {portfolioData.personal.email}
                  </a>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(portfolioData.personal.email, 'email')}
                className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
                title="Copy Email"
                aria-label="Copy email address"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-[#00ff88]" /> : <Copy className="w-4 h-4" />}
              </button>
            </SpotlightCard>

            {/* Direct Phone / Mobile Card */}
            <SpotlightCard
              spotlightColor="rgba(0, 229, 255, 0.12)"
              className="p-5 flex items-center justify-between gap-4 hover:border-[#00e5ff]/40"
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-[#00e5ff]/10 border border-[#00e5ff]/30 flex items-center justify-center text-[#00e5ff] flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">PHONE / MOBILE</div>
                  <a
                    href={`tel:${portfolioData.personal.phone.replace(/\s+/g, '')}`}
                    className="text-sm font-semibold text-white hover:text-[#00e5ff] transition-colors font-sans"
                  >
                    {portfolioData.personal.phone}
                  </a>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(portfolioData.personal.phone, 'phone')}
                className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
                title="Copy Phone"
                aria-label="Copy phone number"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-[#00e5ff]" /> : <Copy className="w-4 h-4" />}
              </button>
            </SpotlightCard>

            {/* Pulsing WhatsApp Direct Action Card */}
            <MagneticButton className="w-full">
              <a
                href={portfolioData.personal.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full p-5 rounded-2xl glass-panel border border-emerald-500/40 bg-gradient-to-r from-emerald-950/30 to-[#050814] hover:border-emerald-400 hover:shadow-[0_0_25px_rgba(16,185,129,0.3)] transition-all flex items-center justify-between group relative overflow-hidden"
              >
                <div className="flex items-center gap-3">
                  <div className="relative w-11 h-11 rounded-xl bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 radar-dot" />
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-emerald-400 font-bold">
                        FASTEST RESPONSE
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    </div>
                    <div className="text-sm font-heading font-bold text-white group-hover:text-emerald-300 transition-colors">
                      Start WhatsApp Chat
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-xs font-mono text-emerald-400 group-hover:translate-x-1 transition-transform">
                  <span>Chat Now</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </a>
            </MagneticButton>

            {/* GitHub Profile Card */}
            <SpotlightCard
              spotlightColor="rgba(255, 255, 255, 0.08)"
              className="p-5 flex items-center justify-between gap-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-300 flex-shrink-0">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">GITHUB REPOSITORIES</div>
                  <a
                    href={portfolioData.personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-white hover:text-[#00ff88] transition-colors font-mono"
                  >
                    SAIM-LEO
                  </a>
                </div>
              </div>

              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
                aria-label="Open GitHub profile"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </SpotlightCard>

            {/* Location Banner */}
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 flex items-center gap-3 text-xs font-mono text-slate-400">
              <MapPin className="w-4 h-4 text-[#00ff88]" />
              <span>Location: {portfolioData.personal.location} (UTC+5 / PKT)</span>
            </div>
          </div>

          {/* Right Side: High-End Contact Form with Animated Gradient Border */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
