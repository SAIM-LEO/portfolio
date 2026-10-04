import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          dark: '#05070e',
          navy: '#0a0f1d',
          surface: '#0f172a',
          card: 'rgba(15, 23, 42, 0.75)',
          border: 'rgba(30, 41, 59, 0.8)',
          'border-neon': 'rgba(0, 255, 136, 0.3)',
          green: '#00ff88',
          'green-glow': 'rgba(0, 255, 136, 0.15)',
          cyan: '#00e5ff',
          'cyan-glow': 'rgba(0, 229, 255, 0.15)',
          muted: '#94a3b8',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-space-grotesk)', 'sans-serif'],
        mono: ['var(--font-space-mono)', 'monospace'],
      },
      backgroundImage: {
        'cyber-gradient': 'linear-gradient(135deg, rgba(0, 255, 136, 0.1) 0%, rgba(0, 229, 255, 0.05) 50%, transparent 100%)',
        'radial-glow': 'radial-gradient(circle at 50% 50%, rgba(0, 255, 136, 0.08) 0%, transparent 70%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
        'shimmer': 'shimmer 4s ease-in-out infinite',
        'blob': 'blob 12s infinite ease-in-out',
        'spin-slow': 'spin 16s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        shimmer: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -40px) scale(1.12)' },
          '66%': { transform: 'translate(-25px, 20px) scale(0.92)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
