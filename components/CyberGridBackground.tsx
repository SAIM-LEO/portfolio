'use client';

export default function CyberGridBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Top Floating Glow Orb - Cyber Green */}
      <div className="absolute -top-[10%] left-[15%] w-[600px] h-[600px] rounded-full blur-[140px] opacity-25 dark:opacity-25 light:opacity-10 bg-gradient-to-br from-[#00ff88]/40 via-[#00e5ff]/30 to-transparent animate-blob" />

      {/* Middle Floating Glow Orb - Cyber Cyan */}
      <div className="absolute top-[40%] -right-[8%] w-[650px] h-[650px] rounded-full blur-[160px] opacity-20 dark:opacity-20 light:opacity-10 bg-gradient-to-bl from-[#00e5ff]/40 via-[#3b82f6]/20 to-transparent animate-blob [animation-delay:4s]" />

      {/* Bottom Floating Glow Orb - Deep Emerald & Teal */}
      <div className="absolute -bottom-[8%] left-[25%] w-[700px] h-[700px] rounded-full blur-[180px] opacity-20 dark:opacity-20 light:opacity-5 bg-gradient-to-t from-[#00ff88]/30 via-indigo-950/40 to-transparent animate-blob [animation-delay:8s]" />

      {/* Tech Grid Pattern */}
      <div className="absolute inset-0 cyber-grid-pattern opacity-35 dark:opacity-30 light:opacity-15" />

      {/* Subtle Noise Texture for Cinematic Depth */}
      <div className="absolute inset-0 cyber-noise opacity-40 dark:opacity-40 light:opacity-20" />

      {/* Radial Vignette Mask */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,transparent_0%,rgba(5,8,20,0.65)_85%)] dark:bg-[radial-gradient(circle_at_50%_0%,transparent_0%,rgba(5,8,20,0.8)_90%)]" />
    </div>
  );
}
