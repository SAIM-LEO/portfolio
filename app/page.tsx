'use client';

import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CyberGridBackground from '@/components/CyberGridBackground';
import ScrollProgress from '@/components/ScrollProgress';
import Preloader from '@/components/Preloader';
import HeroSection from '@/sections/HeroSection';
import AboutSection from '@/sections/AboutSection';
import ExperienceSection from '@/sections/ExperienceSection';
import FeaturedProjectSection from '@/sections/FeaturedProjectSection';
import SkillsSection from '@/sections/SkillsSection';
import EducationSection from '@/sections/EducationSection';
import ContactSection from '@/sections/ContactSection';

// Dynamically load client-only interactive effects with zero SSR overhead
const CustomCursor = dynamic(() => import('@/components/CustomCursor'), { ssr: false });
const SmoothScroll = dynamic(() => import('@/components/SmoothScroll'), { ssr: false });

export default function Home() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-[#050814] text-slate-100 selection:bg-[#00ff88]/30 selection:text-[#00ff88]">
        {/* Animated Cyber Boot Preloader (<2s, skips on repeat visits) */}
        <Preloader />

        {/* Custom Precision Dot + Spring Trailing Ring (Desktop only) */}
        <CustomCursor />

        {/* Fixed Top Scroll Progress Bar */}
        <ScrollProgress />

        {/* Background Ambient Floating Glow Orbs & Noise Texture */}
        <CyberGridBackground />

        {/* Headroom Glass Blur Navbar with Animated Active Indicator */}
        <Navbar />

        {/* Main Single-Page Sections */}
        <main className="relative z-10">
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <FeaturedProjectSection />
          <SkillsSection />
          <EducationSection />
          <ContactSection />
        </main>

        {/* Footer with Magnetic Buttons */}
        <Footer />
      </div>
    </SmoothScroll>
  );
}
