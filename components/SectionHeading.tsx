interface SectionHeadingProps {
  badge: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-12 md:mb-16 ${
        align === 'center' ? 'text-center max-w-3xl mx-auto' : 'text-left max-w-3xl'
      }`}
    >
      <div
        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-wider mb-4 border border-[#00ff88]/30 bg-[#00ff88]/5 text-[#00ff88] ${
          align === 'center' ? 'mx-auto' : ''
        }`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88] animate-pulse" />
        {badge}
      </div>

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-white dark:text-white light:text-slate-900 mb-4">
        {title}
      </h2>

      {subtitle && (
        <p className="text-base md:text-lg text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed font-sans">
          {subtitle}
        </p>
      )}
    </div>
  );
}
