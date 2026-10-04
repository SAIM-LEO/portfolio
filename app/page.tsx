'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CyberGridBackground from '@/components/CyberGridBackground';
import HeroSection from '@/sections/HeroSection';
import AboutSection from '@/sections/AboutSection';
import ExperienceSection from '@/sections/ExperienceSection';
import FeaturedProjectSection from '@/sections/FeaturedProjectSection';
import SkillsSection from '@/sections/SkillsSection';
import EducationSection from '@/sections/EducationSection';
import ContactSection from '@/sections/ContactSection';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#050814] text-slate-100 selection:bg-[#00ff88]/30 selection:text-[#00ff88]">
      {/* Background Ambient Cyber Grid & Glow Orbs */}
      <CyberGridBackground />

      {/* Sticky Glass Navbar */}
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

      {/* Footer */}
      <Footer />
    </div>
  );
}
