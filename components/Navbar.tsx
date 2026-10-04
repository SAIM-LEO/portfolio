'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShieldCheck, Download, ExternalLink } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import MagneticButton from './MagneticButton';
import { portfolioData } from '@/data/portfolio';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'WebSecureX', href: '#featured-project' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Scrolled styling
      setScrolled(currentScrollY > 20);

      // Headroom show/hide behavior
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down -> hide navbar
        setVisible(false);
      } else {
        // Scrolling up -> show navbar
        setVisible(true);
      }
      setLastScrollY(currentScrollY);

      // Active section tracking
      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = currentScrollY + 220;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform ${
        visible ? 'translate-y-0' : '-translate-y-full'
      } ${
        scrolled
          ? 'bg-[#050814]/80 dark:bg-[#050814]/85 light:bg-white/85 backdrop-blur-xl border-b border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 shadow-xl shadow-black/25'
          : 'bg-transparent border-b border-transparent py-2'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Brand Logo */}
          <Link
            href="#"
            className="group flex items-center gap-3 text-left focus:outline-none"
            aria-label="Saim Nadeem Homepage"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00ff88]/20 to-[#00e5ff]/20 border border-[#00ff88]/40 flex items-center justify-center text-[#00ff88] group-hover:border-[#00ff88] group-hover:shadow-[0_0_15px_rgba(0,255,136,0.4)] transition-all duration-300">
              <ShieldCheck className="w-5 h-5 text-[#00ff88] transition-transform group-hover:scale-110" />
            </div>
            <div>
              <div className="font-heading font-bold text-lg tracking-wider text-white dark:text-white light:text-slate-900 group-hover:text-[#00ff88] transition-colors flex items-center gap-1.5">
                <span>SAIM</span>
                <span className="text-[#00ff88] font-mono text-sm">//</span>
                <span className="text-slate-400 group-hover:text-slate-200 font-mono text-sm font-normal">
                  LEO
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88] radar-dot" />
                <span className="tracking-widest uppercase text-[#00ff88]">SYS: ACTIVE</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links with animated active pill indicator */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 text-xs lg:text-sm font-medium transition-colors duration-200 rounded-lg ${
                    isActive
                      ? 'text-[#00ff88] font-semibold'
                      : 'text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white dark:hover:text-white light:hover:text-black'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-[#00ff88]/10 border border-[#00ff88]/30 rounded-lg shadow-[0_0_12px_rgba(0,255,136,0.2)] -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions: Theme Toggle + Magnetic CV CTA + Mobile Trigger */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            <MagneticButton className="hidden sm:inline-block">
              <a
                href={portfolioData.personal.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs lg:text-sm font-medium font-heading tracking-wide transition-all duration-300 border border-[#00ff88]/40 bg-[#00ff88]/10 text-[#00ff88] hover:bg-[#00ff88] hover:text-black hover:shadow-[0_0_20px_rgba(0,255,136,0.5)] group/btn"
              >
                <Download className="w-4 h-4 transition-transform group-hover/btn:-translate-y-0.5" />
                <span>Resume</span>
              </a>
            </MagneticButton>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg md:hidden border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800/60 focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-[#00ff88]" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-panel border-b border-slate-800 bg-[#050814]/95 px-5 pt-3 pb-6 space-y-2 overflow-hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-[#00ff88] hover:bg-slate-800/60 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2">
              <a
                href={portfolioData.personal.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg text-sm font-medium border border-[#00ff88]/40 bg-[#00ff88]/10 text-[#00ff88] hover:bg-[#00ff88] hover:text-black transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Download CV (PDF)</span>
              </a>
              <a
                href={portfolioData.personal.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg text-sm font-medium bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-600/30 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>WhatsApp Chat</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
