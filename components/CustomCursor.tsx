'use client';

import { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // Position springs for trailing ring
  const ringX = useSpring(-100, { stiffness: 450, damping: 28, mass: 0.1 });
  const ringY = useSpring(-100, { stiffness: 450, damping: 28, mass: 0.1 });

  // Direct position for inner precision dot
  const [dotPos, setDotPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!isFinePointer || prefersReducedMotion) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setDotPos({ x: e.clientX, y: e.clientY });
      ringX.set(e.clientX);
      ringY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Detect hover over interactive elements
    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest(
        'a, button, input, textarea, select, [role="button"], .interactive-hover'
      );
      setIsHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleElementHover, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleElementHover);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isVisible, ringX, ringY]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden transition-opacity duration-300">
      {/* Outer Spring Trailing Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border pointer-events-none"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovered ? 56 : isClicking ? 24 : 34,
          height: isHovered ? 56 : isClicking ? 24 : 34,
          borderColor: isHovered ? '#00e5ff' : '#00ff88',
          backgroundColor: isHovered ? 'rgba(0, 229, 255, 0.08)' : 'rgba(0, 255, 136, 0.03)',
          borderWidth: isHovered ? '1.5px' : '1px',
          boxShadow: isHovered
            ? '0 0 20px rgba(0, 229, 255, 0.35)'
            : '0 0 10px rgba(0, 255, 136, 0.2)',
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />

      {/* Inner Precision Dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#00ff88] shadow-[0_0_8px_#00ff88] pointer-events-none transition-transform duration-75"
        style={{
          transform: `translate3d(${dotPos.x}px, ${dotPos.y}px, 0) translate(-50%, -50%) scale(${
            isClicking ? 0.6 : isHovered ? 1.4 : 1
          })`,
        }}
      />
    </div>
  );
}
