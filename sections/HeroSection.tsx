'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import MagneticButton from '@/components/MagneticButton';
import TiltCard from '@/components/TiltCard';
import SplitText from '@/components/SplitText';
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

const InteractiveParticles = dynamic(
  () => import('@/components/InteractiveParticles'),
  { ssr: false }
);

export default function HeroSection() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = portfolioData.roles;

  // Typing effect for the animated role switcher
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 35 : 75;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 2000);
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
    <section className="relative min-h-[94vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Interactive Canvas Particle Constellation */}
      <InteractiveParticles />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wide border border-[#00ff88]/30 bg-[#00ff88]/10 text-[#00ff88] mb-6 shadow-[0_0_15px_rgba(0,255,136,0.15)]"
            >
              <span className="w-2 h-2 rounded-full bg-[#00ff88] radar-dot" />
              <span>SECURE-BY-DESIGN DEVELOPER</span>
              <span className="text-slate-500">|</span>
              <span className="text-slate-300">LAHORE, PK</span>
              <span className="text-slate-500">|</span>
              <span className="text-[#00e5ff] font-semibold">NAVTTC CERTIFIED</span>
            </motion.div>

            {/* Main Greeting & Name with Staggered SplitText Reveal */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight text-white dark:text-white light:text-slate-950 mb-4 leading-[1.1]">
              <span className="block text-slate-300 text-2xl sm:text-3xl font-normal mb-1 font-heading">
                Hi, I&apos;m
              </span>
              <span className="text-shimmer inline-block">
                {portfolioData.personal.name}
              </span>
              <span className="block text-xl sm:text-2xl font-mono font-normal text-slate-400 mt-2">
                online as{' '}
                <span className="text-[#00e5ff] font-semibold">
                  @{portfolioData.personal.nickname}
                </span>
              </span>
            </h1>

            {/* Dynamic Role Switcher Terminal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-10 sm:h-12 flex items-center justify-center lg:justify-start mb-6"
            >
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-900/90 border border-slate-700/80 text-sm sm:text-lg font-mono text-slate-200 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                <Terminal className="w-4 h-4 text-[#00ff88] animate-pulse" />
                <span className="text-slate-500">&gt;</span>
                <span className="text-[#00ff88] font-bold tracking-tight">
                  {displayedText}
                </span>
                <span className="w-2 h-5 bg-[#00ff88] animate-pulse" />
              </div>
            </motion.div>

            {/* Headline Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base sm:text-lg text-slate-300 dark:text-slate-300 light:text-slate-700 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed font-sans"
            >
              BS Information Technology graduate specializing in full-stack web applications and security assessment tooling, paired with 4 years of Amazon Seller Central multi-marketplace operations.
            </motion.p>

            {/* Action CTAs with Magnetic Buttons & Glow Sweep */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10"
            >
              <MagneticButton>
                <a
                  href={portfolioData.personal.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden px-6 py-3.5 rounded-xl font-heading font-bold text-sm tracking-wide bg-[#00ff88] text-slate-950 hover:bg-[#00e5ff] hover:shadow-[0_0_30px_rgba(0,255,136,0.6)] transition-all duration-300 flex items-center gap-2"
                >
                  <span className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                  <Download className="w-4 h-4" />
                  <span>Download CV</span>
                </a>
              </MagneticButton>

              <MagneticButton>
                <Link
                  href="#featured-project"
                  className="group relative overflow-hidden px-6 py-3.5 rounded-xl font-heading font-semibold text-sm tracking-wide glass-panel border-slate-700 text-white hover:border-[#00ff88]/60 hover:text-[#00ff88] hover:shadow-[0_0_20px_rgba(0,255,136,0.2)] transition-all duration-300 flex items-center gap-2"
                >
                  <Shield className="w-4 h-4 text-[#00ff88]" />
                  <span>View WebSecureX</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </MagneticButton>

              <MagneticButton>
                <Link
                  href="#contact"
                  className="group relative overflow-hidden px-6 py-3.5 rounded-xl font-heading font-semibold text-sm tracking-wide border border-slate-800 bg-slate-900/70 text-slate-300 hover:text-white hover:border-slate-600 transition-all duration-300 flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Contact Me</span>
                </Link>
              </MagneticButton>
            </motion.div>

            {/* Social Channels */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center justify-center lg:justify-start gap-3"
            >
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider mr-2">
                Connect:
              </span>
              <MagneticButton strength={0.4}>
                <a
                  href={portfolioData.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-slate-800 bg-slate-900/60 text-slate-300 hover:text-[#00ff88] hover:border-[#00ff88]/50 hover:shadow-[0_0_15px_rgba(0,255,136,0.3)] transition-all flex items-center justify-center"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
              </MagneticButton>

              <MagneticButton strength={0.4}>
                <a
                  href={`mailto:${portfolioData.personal.email}`}
                  className="p-2.5 rounded-xl border border-slate-800 bg-slate-900/60 text-slate-300 hover:text-[#00e5ff] hover:border-[#00e5ff]/50 hover:shadow-[0_0_15px_rgba(0,229,255,0.3)] transition-all flex items-center justify-center"
                  aria-label="Send Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </MagneticButton>

              <MagneticButton strength={0.4}>
                <a
                  href={portfolioData.personal.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-slate-800 bg-slate-900/60 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all flex items-center justify-center"
                  aria-label="WhatsApp Message"
                >
                  <MessageSquare className="w-5 h-5" />
                </a>
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right Column: Profile Portrait & Cyber 3D Card with Floating Motion */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="animate-float-slow">
              <TiltCard maxTilt={10} spotlightColor="rgba(0, 255, 136, 0.18)">
                <div className="relative w-72 sm:w-80 md:w-96 aspect-[3/4] group">
                  {/* Rotating decorative glowing gradient ring */}
                  <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#00ff88] via-[#00e5ff] to-emerald-500 opacity-60 blur-xl group-hover:opacity-100 transition duration-700 animate-spin-slow" />

                  {/* Inner card with photograph */}
                  <div className="relative w-full h-full rounded-2xl overflow-hidden glass-panel border border-[#00ff88]/30 shadow-2xl bg-[#090f24]">
                    <Image
                      src={portfolioData.personal.profilePhoto}
                      alt="Saim Nadeem, Web Developer"
                      fill
                      priority
                      placeholder="blur"
                      blurDataURL={portfolioData.personal.profilePhotoBlur}
                      sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
                      className="object-cover object-[center_20%] filter grayscale-[10%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                    />

                    {/* Subtle cyber scan gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050814] via-transparent to-transparent opacity-80 pointer-events-none" />

                    {/* Floating Bottom Card Pill */}
                    <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl glass-panel border-slate-700/80 bg-[#0a0f24]/90 backdrop-blur-md shadow-lg">
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
                        <div className="flex items-center gap-1.5">
                          <span className="px-2 py-0.5 rounded bg-[#00e5ff]/15 text-[#00e5ff] font-mono text-[10px] border border-[#00e5ff]/30 font-semibold">
                            NAVTTC
                          </span>
                          <div className="px-2 py-0.5 rounded bg-[#00ff88]/10 text-[#00ff88] font-mono text-[10px] border border-[#00ff88]/30 font-bold">
                            LEO
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </div>
          </motion.div>
        </div>

        {/* Animated Scroll Down Indicator */}
        <div className="mt-16 flex justify-center">
          <Link
            href="#about"
            className="group flex flex-col items-center gap-1.5 text-slate-500 hover:text-[#00ff88] transition-colors"
            aria-label="Scroll to About section"
          >
            <span className="text-[10px] font-mono tracking-widest uppercase group-hover:text-[#00ff88] transition-colors">
              Explore
            </span>
            <div className="w-5 h-8 rounded-full border border-slate-700 group-hover:border-[#00ff88]/60 flex items-start justify-center p-1 transition-colors">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1.5 h-1.5 rounded-full bg-[#00ff88] shadow-[0_0_8px_#00ff88]"
              />
            </div>
            <ChevronDown className="w-4 h-4 animate-bounce text-[#00ff88]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
