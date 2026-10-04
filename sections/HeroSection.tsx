'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { portfolioData } from '@/data/portfolio';
import {
  Download,
  Shield,
  ArrowRight,
  Github,
  Mail,
  MessageSquare,
  Terminal,
  ChevronDown,
  Sparkles,
} from 'lucide-react';

export default function HeroSection() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = portfolioData.roles;

  // Typing effect for the animated role switcher
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(currentRole.slice(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex, roles]);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wide border border-[#00ff88]/30 bg-[#00ff88]/10 text-[#00ff88] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#00ff88] radar-dot" />
              <span>SECURE-BY-DESIGN DEVELOPER</span>
              <span className="text-slate-500">|</span>
              <span className="text-slate-300">LAHORE, PK</span>
            </div>

            {/* Main Greeting & Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight text-white dark:text-white light:text-slate-950 mb-4 leading-[1.1]">
              Hi, I&apos;m{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] via-[#00e5ff] to-emerald-400">
                {portfolioData.personal.name}
              </span>
              <span className="block text-xl sm:text-2xl font-mono font-normal text-slate-400 mt-2">
                online as <span className="text-[#00e5ff] font-semibold">@{portfolioData.personal.nickname}</span>
              </span>
            </h1>

            {/* Dynamic Role Switcher */}
            <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-700/80 text-sm sm:text-lg font-mono text-slate-200">
                <Terminal className="w-4 h-4 text-[#00ff88]" />
                <span className="text-slate-400">&gt;</span>
                <span className="text-[#00ff88] font-bold">{displayedText}</span>
                <span className="w-2 h-5 bg-[#00ff88] animate-pulse" />
              </div>
            </div>

            {/* Headline Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 dark:text-slate-300 light:text-slate-700 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed font-sans">
              BS Information Technology graduate specializing in full-stack web applications and security assessment tooling, paired with 4 years of Amazon Seller Central multi-marketplace operations.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
              <a
                href={portfolioData.personal.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl font-heading font-bold text-sm tracking-wide bg-[#00ff88] text-slate-950 hover:bg-[#00e5ff] hover:shadow-[0_0_25px_rgba(0,255,136,0.45)] transition-all duration-300 flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </a>

              <Link
                href="#featured-project"
                className="px-6 py-3.5 rounded-xl font-heading font-semibold text-sm tracking-wide glass-panel border-slate-700 text-white hover:border-[#00ff88]/60 hover:text-[#00ff88] transition-all duration-300 flex items-center gap-2"
              >
                <Shield className="w-4 h-4 text-[#00ff88]" />
                <span>View WebSecureX</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="#contact"
                className="px-6 py-3.5 rounded-xl font-heading font-semibold text-sm tracking-wide border border-slate-800 bg-slate-900/60 text-slate-300 hover:text-white hover:border-slate-600 transition-all duration-300 flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Contact Me</span>
              </Link>
            </div>

            {/* Social Channels */}
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider mr-2">
                Connect:
              </span>
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-slate-800 bg-slate-900/60 text-slate-300 hover:text-[#00ff88] hover:border-[#00ff88]/50 hover:shadow-[0_0_15px_rgba(0,255,136,0.25)] transition-all"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="p-2.5 rounded-xl border border-slate-800 bg-slate-900/60 text-slate-300 hover:text-[#00e5ff] hover:border-[#00e5ff]/50 hover:shadow-[0_0_15px_rgba(0,229,255,0.25)] transition-all"
                aria-label="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>

              <a
                href={portfolioData.personal.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-slate-800 bg-slate-900/60 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.25)] transition-all"
                aria-label="WhatsApp Message"
              >
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column: Profile Portrait & Cyber Badge */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-72 sm:w-80 md:w-96 aspect-[3/4] group">
              {/* Outer decorative glowing ring */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-[#00ff88] via-[#00e5ff] to-emerald-500 opacity-60 blur-lg group-hover:opacity-100 transition duration-1000 group-hover:duration-300 animate-pulse-slow" />

              {/* Inner card with photograph */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden glass-panel border border-[#00ff88]/30 shadow-2xl bg-[#090f24]">
                <Image
                  src={portfolioData.personal.profilePhoto}
                  alt={portfolioData.personal.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
                  className="object-cover object-top filter grayscale-[15%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />

                {/* Subtle cyber scan gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050814] via-transparent to-transparent opacity-80 pointer-events-none" />

                {/* Floating Bottom Card Pill */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl glass-panel border-slate-700/80 bg-[#0a0f24]/90 backdrop-blur-md">
                  <div className="flex items-center justify-between text-xs">
                    <div>
                      <div className="font-heading font-bold text-white flex items-center gap-1.5">
                        <span>{portfolioData.personal.name}</span>
                        <Sparkles className="w-3.5 h-3.5 text-[#00ff88]" />
                      </div>
                      <div className="text-[11px] font-mono text-[#00ff88]">
                        Full-Stack &amp; Security Tooling
                      </div>
                    </div>
                    <div className="px-2 py-1 rounded bg-[#00ff88]/10 text-[#00ff88] font-mono text-[10px] border border-[#00ff88]/30">
                      LEO
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="mt-16 flex justify-center">
          <Link
            href="#about"
            className="flex flex-col items-center gap-1 text-slate-500 hover:text-[#00ff88] transition-colors"
            aria-label="Scroll to About section"
          >
            <span className="text-[10px] font-mono tracking-widest uppercase">Explore</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-[#00ff88]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
