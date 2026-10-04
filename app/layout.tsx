import type { Metadata } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-space-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://saim-nadeem.vercel.app'),
  title: 'Saim Nadeem (Leo) | Web Developer & Application Security Specialist',
  description:
    'Portfolio of Saim Nadeem (Leo) — BS Information Technology graduate with an Application Security focus, creator of WebSecureX security assessment platform, and 4+ years of Amazon Seller Central professional experience.',
  keywords: [
    'Saim Nadeem',
    'Leo',
    'Web Developer',
    'Application Security',
    'WebSecureX',
    'Cybersecurity',
    'Amazon Seller Central',
    'React',
    'FastAPI',
    'Python',
    'Lahore Pakistan',
    'Full Stack Engineer',
  ],
  authors: [{ name: 'Saim Nadeem' }],
  creator: 'Saim Nadeem',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://saim-nadeem.vercel.app',
    title: 'Saim Nadeem (Leo) | Web Developer & Application Security Specialist',
    description:
      'Explore WebSecureX DAST security suite, full-stack web applications, and 4+ years of Amazon Seller Central marketplace operations.',
    siteName: 'Saim Nadeem Portfolio',
    images: [
      {
        url: '/profile.jpg',
        width: 800,
        height: 1067,
        alt: 'Saim Nadeem (Leo)',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saim Nadeem (Leo) | Web Developer & Application Security',
    description:
      'Web Developer with an Application Security Focus | Amazon Seller Central Professional.',
    images: ['/profile.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const storedTheme = localStorage.getItem('theme');
                if (storedTheme === 'light') {
                  document.documentElement.classList.remove('dark');
                  document.documentElement.classList.add('light');
                } else {
                  document.documentElement.classList.add('dark');
                  document.documentElement.classList.remove('light');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans min-h-screen bg-[#050814] text-slate-100 dark:bg-[#050814] dark:text-slate-100 antialiased selection:bg-[#00ff88]/30 selection:text-[#00ff88]`}
      >
        {children}
      </body>
    </html>
  );
}
