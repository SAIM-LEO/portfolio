'use client';

import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

interface StatCounterProps {
  value: string; // e.g. "4+", "2", "1"
  className?: string;
  duration?: number;
}

export default function StatCounter({
  value,
  className = '',
  duration = 1800,
}: StatCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const [currentValue, setCurrentValue] = useState(0);

  // Extract numeric part and suffix (e.g. "4+" -> number 4, suffix "+")
  const numericMatch = value.match(/\d+/);
  const targetNumber = numericMatch ? parseInt(numericMatch[0], 10) : 0;
  const suffix = value.replace(/\d+/, '');

  useEffect(() => {
    if (!isInView || targetNumber === 0) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Ease out expo curve
      const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const val = Math.round(easedProgress * targetNumber);

      setCurrentValue(val);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, targetNumber, duration]);

  return (
    <span ref={ref} className={className}>
      {isInView ? currentValue : 0}
      {suffix}
    </span>
  );
}
