'use client';

import SectionHeading from '@/components/SectionHeading';
import ContactForm from '@/components/ContactForm';
import { portfolioData } from '@/data/portfolio';
import { Mail, Phone, MessageSquare, Github, MapPin, Copy, Check } from 'lucide-react';
import { useState } from 'react';

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
            <div className="p-5 rounded-2xl glass-panel transition-all hover:border-[#00ff88]/40 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-11 h-11 rounded-xl bg-[#00ff88]/10 border border-[#00ff88]/30 flex items-center justify-center text-[#00ff88] flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-xs font-mono text-slate-400">DIRECT EMAIL</div>
                  <a
                    href={`mailto:${portfolioData.personal.email}`}
                    className="text-sm font-semibold text-white hover:text-[#00ff88] truncate block transition-colors"
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
            </div>

            {/* Direct Phone / WhatsApp Card */}
            <div className="p-5 rounded-2xl glass-panel transition-all hover:border-[#00e5ff]/40 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-[#00e5ff]/10 border border-[#00e5ff]/30 flex items-center justify-center text-[#00e5ff] flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">PHONE / MOBILE</div>
                  <a
                    href={`tel:${portfolioData.personal.phone.replace(/\s+/g, '')}`}
                    className="text-sm font-semibold text-white hover:text-[#00e5ff] transition-colors"
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
            </div>

            {/* WhatsApp Direct Action Button */}
            <a
              href={portfolioData.personal.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl glass-panel border border-emerald-500/30 bg-emerald-950/20 hover:bg-emerald-900/30 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-emerald-400">INSTANT MESSAGING</div>
                  <div className="text-sm font-heading font-bold text-white group-hover:text-emerald-300">
                    Chat on WhatsApp
                  </div>
                </div>
              </div>
              <span className="text-xs font-mono text-emerald-400 group-hover:translate-x-1 transition-transform">
                wa.me &rarr;
              </span>
            </a>

            {/* GitHub Card */}
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl glass-panel transition-all hover:border-slate-600 flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-white group-hover:border-[#00ff88] transition-colors">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">GITHUB PROFILE</div>
                  <div className="text-sm font-heading font-bold text-white group-hover:text-[#00ff88] transition-colors">
                    github.com/SAIM-LEO
                  </div>
                </div>
              </div>
              <span className="text-xs font-mono text-slate-500 group-hover:text-slate-300">
                View &rarr;
              </span>
            </a>

            {/* Location Pill */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center gap-3 text-xs text-slate-300 font-mono">
              <MapPin className="w-4 h-4 text-[#00ff88] flex-shrink-0" />
              <span>Based in {portfolioData.personal.location} (PKT / UTC+5) — Available Globally</span>
            </div>
          </div>

          {/* Right Side: Working Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
