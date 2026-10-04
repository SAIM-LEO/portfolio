'use client';

export default function CyberGridBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Top Ambient Glow - Cyber Green */}
      <div
        className="absolute -top-[15%] left-[10%] w-[550px] h-[550px] rounded-full blur-[140px] opacity-20 dark:opacity-20 light:opacity-10 bg-gradient-to-br from-[#00ff88] via-[#00e5ff] to-transparent"
      />

      {/* Middle Right Glow - Cyan */}
      <div
        className="absolute top-[35%] -right-[10%] w-[600px] h-[600px] rounded-full blur-[160px] opacity-15 dark:opacity-15 light:opacity-10 bg-gradient-to-bl from-[#00e5ff] via-[#3b82f6] to-transparent"
      />

      {/* Bottom Center Ambient - Deep Emerald & Navy */}
      <div
        className="absolute -bottom-[10%] left-[20%] w-[650px] h-[650px] rounded-full blur-[180px] opacity-15 dark:opacity-15 light:opacity-0 bg-gradient-to-t from-[#00ff88]/30 via-indigo-950 to-transparent"
      />

      {/* Tech Grid Pattern */}
      <div className="absolute inset-0 cyber-grid-pattern opacity-40 dark:opacity-30 light:opacity-20" />

      {/* Subtle Noise / Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_0%,rgba(0,255,136,0.04),rgba(5,8,20,0.8))]" />
    </div>
  );
}
