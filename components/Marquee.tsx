'use client';

interface MarqueeProps {
  children: React.ReactNode;
  speed?: 'slow' | 'normal' | 'fast';
  reverse?: boolean;
  pauseOnHover?: boolean;
  className?: string;
}

export default function Marquee({
  children,
  speed = 'normal',
  reverse = false,
  pauseOnHover = true,
  className = '',
}: MarqueeProps) {
  const durationClass =
    speed === 'fast'
      ? 'duration-[20s]'
      : speed === 'slow'
      ? 'duration-[45s]'
      : 'duration-[30s]';

  const animationClass = reverse ? 'animate-marquee-reverse' : 'animate-marquee';

  return (
    <div
      className={`group relative flex overflow-hidden select-none [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)] ${className}`}
    >
      <div
        className={`flex shrink-0 items-center justify-around gap-4 min-w-full ${animationClass} ${durationClass} ${
          pauseOnHover ? 'group-hover:[animation-play-state:paused]' : ''
        }`}
      >
        {children}
      </div>
      <div
        aria-hidden="true"
        className={`flex shrink-0 items-center justify-around gap-4 min-w-full ${animationClass} ${durationClass} ${
          pauseOnHover ? 'group-hover:[animation-play-state:paused]' : ''
        }`}
      >
        {children}
      </div>
    </div>
  );
}
