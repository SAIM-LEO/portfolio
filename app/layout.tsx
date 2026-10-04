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
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Saim Nadeem - Web Developer & Application Security Specialist',
      },
      {
        url: '/profile.webp',
        width: 666,
        height: 800,
        alt: 'Saim Nadeem, Web Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saim Nadeem (Leo) | Web Developer & Application Security Specialist',
    description:
      'Web Developer with an Application Security Focus | NAVTTC Certified Amazon VA | Amazon Seller Central Professional.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: '/icon.png',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://saim-nadeem.vercel.app/#person',
      name: 'Muhammad Saim Nadeem',
      alternateName: 'Saim Nadeem (Leo)',
      jobTitle: 'Web Developer & Application Security Specialist',
      description:
        'BS Information Technology graduate specializing in full-stack web development, application security assessment, and 4+ years of Amazon Seller Central operations.',
      url: 'https://saim-nadeem.vercel.app',
      image: 'https://saim-nadeem.vercel.app/profile.webp',
      sameAs: ['https://github.com/SAIM-LEO'],
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'Govt. Islamia College Civil Lines, Lahore (University of the Punjab)',
      },
      hasCredential: [
        {
          '@type': 'EducationalOccupationalCredential',
          '@id': 'https://saim-nadeem.vercel.app/#navttc-cert',
          name: 'Amazon Virtual Assistant (Certificate of Successful Completion)',
          credentialCategory: 'Certificate of Successful Completion',
          educationalLevel: 'Grade A+',
          dateCreated: '2025-07-24',
          validFrom: '2025-07-24',
          recognizedBy: {
            '@type': 'GovernmentOrganization',
            name: 'NAVTTC (National Vocational & Technical Training Commission), Government of Pakistan',
          },
          about: {
            '@type': 'Course',
            name: 'Amazon Virtual Assistant',
            description: "Prime Minister's Youth Skills Development Program",
            provider: {
              '@type': 'EducationalOrganization',
              name: "College of International Skills Development (CISD), Lahore, a PM's Special Initiative for Information Technology",
            },
            startDate: '2025-03-05',
            endDate: '2025-06-04',
          },
        },
        {
          '@type': 'EducationalOccupationalCredential',
          '@id': 'https://saim-nadeem.vercel.app/#intertech-diploma',
          name: 'Web & Application Development Diploma',
          credentialCategory: 'Professional Diploma',
          recognizedBy: {
            '@type': 'Organization',
            name: 'INTERTECH',
          },
        },
      ],
    },
    {
      '@type': 'EducationalOccupationalCredential',
      '@id': 'https://saim-nadeem.vercel.app/#navttc-cert',
      name: 'Amazon Virtual Assistant (Certificate of Successful Completion)',
      credentialCategory: 'Certificate of Successful Completion',
      educationalLevel: 'Grade A+',
      dateCreated: '2025-07-24',
      validFrom: '2025-07-24',
      recognizedBy: {
        '@type': 'GovernmentOrganization',
        name: 'NAVTTC (National Vocational & Technical Training Commission), Government of Pakistan',
      },
      about: {
        '@type': 'Course',
        name: 'Amazon Virtual Assistant',
        description: "Prime Minister's Youth Skills Development Program",
        provider: {
          '@type': 'EducationalOrganization',
          name: "College of International Skills Development (CISD), Lahore, a PM's Special Initiative for Information Technology",
        },
        startDate: '2025-03-05',
        endDate: '2025-06-04',
      },
    },
  ],
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
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
