export interface ProjectScreenshot {
  image: string;
  title: string;
  caption: string;
}

export interface SecurityEngine {
  name: string;
  description: string;
  tag: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  credentialType: string;
  awardedTo?: string;
  grade?: string;
  issuer: string;
  program?: string;
  institution: string;
  duration?: string;
  issueDate?: string;
  accreditations?: string[];
  note?: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    nickname: string;
    headline: string;
    about: string;
    location: string;
    email: string;
    phone: string;
    whatsappNumber: string;
    whatsappUrl: string;
    github: string;
    profilePhoto: string;
    profilePhotoWebp?: string;
    profilePhotoJpg?: string;
    profilePhotoBlur?: string;
    cvUrl: string;
  };
  roles: string[];
  stats: Array<{
    value: string;
    label: string;
    description: string;
  }>;
  experience: Array<{
    title: string;
    company: string;
    duration: string;
    badge?: string;
    roleType: string;
    description: string[];
    trainingLink?: {
      text: string;
      href: string;
    };
  }>;
  featuredProject: {
    title: string;
    badge: string;
    subtitle: string;
    description: string;
    stack: string[];
    liveDemoUrl: string;
    githubUrl: string;
    engines: SecurityEngine[];
    reconFeatures: string[];
    scanDepths: string[];
    features: Array<{
      title: string;
      desc: string;
    }>;
    screenshots: ProjectScreenshot[];
  };
  skills: {
    category: string;
    icon: string;
    items: string[];
  }[];
  education: Array<{
    degree: string;
    institution: string;
    period: string;
    status?: string;
  }>;
  training: Array<{
    title: string;
    institution: string;
    note?: string;
  }>;
  certifications: CertificateItem[];
  languages: Array<{
    name: string;
    level: string;
  }>;
}

export const portfolioData: PortfolioData = {
  personal: {
    name: 'Saim Nadeem',
    nickname: 'Leo',
    headline: 'Web Developer with an Application Security Focus | Amazon Seller Central Professional',
    about:
      'BS Information Technology graduate who builds full-stack web applications and security tooling, with 4 years of hands-on Amazon Seller Central experience across multiple seller accounts. I built WebSecureX, my Final Year Project, a web application security assessment platform. I enjoy secure-by-design development and turning complex technical output into clear, usable results.',
    location: 'Lahore, Pakistan',
    email: 'saimnadeem07860@gmail.com',
    phone: '0326 0098906',
    whatsappNumber: '+92 326 0098906',
    whatsappUrl: 'https://wa.me/923260098906',
    github: 'https://github.com/SAIM-LEO',
    profilePhoto: '/profile.webp',
    profilePhotoWebp: '/profile.webp',
    profilePhotoJpg: '/profile.jpg',
    profilePhotoBlur:
      'data:image/webp;base64,UklGRk4AAABXRUJQVlA4IEIAAADQAQCdASoKAAwABUB8JYwAAl1//OH2AADOLmc3SyHYyL+pxXIDFpfCc4kFcV0JrgCVvBil70W9U44wOeJo8qnCAAA=',
    cvUrl: '/Saim_Nadeem_CV.pdf',
  },
  roles: [
    'Web Developer',
    'Application Security Focus',
    'Amazon Seller Central Professional',
  ],
  stats: [
    {
      value: '4+',
      label: 'Years Amazon Experience',
      description: 'Hands-on operations across multiple seller accounts',
    },
    {
      value: '2',
      label: 'Live Marketplaces UK & US',
      description: 'Currently managing active international storefronts',
    },
    {
      value: '1',
      label: 'Security Platform Built',
      description: 'WebSecureX: 6-engine automated vulnerability suite',
    },
  ],
  experience: [
    {
      title: 'Professional Visual Assistant',
      company: 'Amazon Seller Central',
      duration: '4 Years',
      roleType: 'Account & Listing Operations',
      description: [
        'Worked across multiple Seller Central accounts over 4 years providing visual and listing assistance.',
        'Currently managing 2 Seller Central accounts: one UK marketplace and one US marketplace.',
        'Maintained high standards for visual listing assets, account health, compliance, and multi-marketplace workflows.',
      ],
      trainingLink: {
        text: 'Formally trained through the NAVTTC Amazon Virtual Assistant program (Grade A+).',
        href: '#certificate-navttc',
      },
    },
    {
      title: 'Founder',
      company: 'Proprietary Amazon UK Store',
      duration: 'Recent — Present',
      badge: 'New',
      roleType: 'E-Commerce Storefront',
      description: [
        'Recently started and currently being built from the ground up for the UK marketplace.',
        'Overseeing end-to-end launch operations, catalog curation, and listing architecture.',
      ],
    },
  ],
  featuredProject: {
    title: 'WebSecureX',
    badge: 'Final Year Project Showcase',
    subtitle: 'Web Application Security Assessment Tool & DAST Reconnaissance Suite',
    description:
      'Enterprise-grade automated DAST and Attack Surface Reconnaissance platform engineered to detect, analyze, and mitigate critical web vulnerabilities. Features a cyberpunk Hacker Mode interface, distributed scan orchestrator, and real-time security telemetry.',
    stack: ['React JS', 'Python FastAPI', 'MongoDB', 'SSE Streaming', 'Cyberpunk UI'],
    liveDemoUrl: 'https://websecurex-phi.vercel.app/index.html',
    githubUrl: 'https://github.com/SAIM-LEO/WebSecurex',
    engines: [
      {
        name: 'SQLMap Engine',
        description: 'Automated detection of deep SQL injection vulnerabilities and database attack vectors.',
        tag: 'SQLi',
      },
      {
        name: 'XSStrike Engine',
        description: 'Advanced context-aware Cross-Site Scripting (XSS) payload generation and validation.',
        tag: 'XSS',
      },
      {
        name: 'Custom NoSQL Engine',
        description: 'Bespoke security engine tailored to uncover MongoDB and document-store injection flaws.',
        tag: 'NoSQLi',
      },
      {
        name: 'Python-Native SSL Auditor',
        description: 'In-depth SSL/TLS handshake analysis, cipher suite inspection, and certificate validation.',
        tag: 'SSL/TLS',
      },
      {
        name: 'AbuseIPDB Threat Intelligence',
        description: 'Real-time IP reputation checks, blacklisting history, and known attack telemetry queries.',
        tag: 'Threat Intel',
      },
      {
        name: 'Data Breach Checker',
        description: 'Exposed credentials and domain breach exposure verification against global leak catalogs.',
        tag: 'Breach Recon',
      },
    ],
    reconFeatures: [
      'Subdomain discovery via Certificate Transparency logs',
      'High-speed DNS resolution and record mapping',
      'Live HTTP/HTTPS service probing and redirect tracking',
      'Exposed development and admin port fingerprinting',
    ],
    scanDepths: [
      'Quick Scan: Swift high-level vulnerability probe and header audit',
      'Normal Scan: Standard multi-engine penetration test covering OWASP core vectors',
      'Deep Scan: Exhaustive recursive attack surface reconnaissance and parameter fuzzing',
    ],
    features: [
      {
        title: 'Dual-Layer Reporting',
        desc: 'Delivers both an executive humanized summary for stakeholders and a granular raw technical breakdown with per-tool scoring metrics.',
      },
      {
        title: 'Audit Scheduler & Auto PDF',
        desc: 'Built-in automated cron scheduler executing unattended recurring scans with automatic PDF executive report dispatch directly to client email.',
      },
      {
        title: 'One-Click Local Windows Launcher',
        desc: 'Streamlined desktop launcher script initializing MongoDB, FastAPI orchestration daemon, and React UI in a single click.',
      },
      {
        title: 'Real-Time SSE Log Streaming',
        desc: 'Live terminal output streamed over Server-Sent Events (SSE) so security analysts monitor scanner subprocesses without polling.',
      },
    ],
    screenshots: [
      {
        image: '/projects/websecurex-scanner.png',
        title: 'Scanner Dashboard',
        caption: 'Metric telemetry counters, quick preset targets, 3 audit depth levels, and specialized engine toggles in Cyberpunk mode.',
      },
      {
        image: '/projects/websecurex-recon.png',
        title: 'Attack Surface Recon',
        caption: 'Subdomain discovery via Certificate Transparency, live DNS resolution, service probing, and exposed port identification.',
      },
      {
        image: '/projects/websecurex-scheduler.png',
        title: 'Audit Scheduler',
        caption: 'Recurring unattended scan scheduling with automated executive PDF report compilation and instant email dispatch.',
      },
    ],
  },
  skills: [
    {
      category: 'Web & Backend',
      icon: 'Globe',
      items: [
        'React JS',
        'Node.js',
        'Express',
        'Python (FastAPI)',
        'HTML5',
        'CSS3',
        'JavaScript (ES6+)',
        'REST APIs',
        'Server-Sent Events (SSE)',
      ],
    },
    {
      category: 'Programming & Logic',
      icon: 'Code2',
      items: ['C++', 'Python', 'Object-Oriented Programming (OOP)', 'Data Structures & Algorithms (DSA)'],
    },
    {
      category: 'Databases & Storage',
      icon: 'Database',
      items: ['MongoDB (Mongoose)', 'SQL / MySQL', 'Data Modeling', 'Schema & Query Optimization'],
    },
    {
      category: 'Security & Tooling',
      icon: 'ShieldCheck',
      items: [
        'Vulnerability Testing (SQLi, XSS, NoSQLi, SSL/TLS)',
        'JWT Authentication',
        'Kali Linux',
        'Git / GitHub',
        'VS Code',
      ],
    },
    {
      category: 'E-commerce & Amazon',
      icon: 'ShoppingBag',
      items: [
        'Amazon Seller Central (4 Years)',
        'Visual & Listing Assistance',
        'Multi-Account Management',
        'UK Marketplace Operations',
        'US Marketplace Operations',
      ],
    },
  ],
  education: [
    {
      degree: 'Bachelor of Science in Information Technology (BS IT)',
      institution: 'Govt. Islamia College Civil Lines, Lahore (University of the Punjab)',
      period: '2022 — 2026',
      status: 'Graduated',
    },
    {
      degree: 'F.Sc. Pre-Engineering',
      institution: 'Govt. Islamia College Civil Lines, Lahore',
      period: '2020 — 2022',
    },
    {
      degree: 'Secondary School Certificate (Matriculation – Science)',
      institution: 'Moon Public School, Lahore',
      period: '2018 — 2020',
    },
  ],
  training: [
    {
      title: 'Web & Application Development Diploma',
      institution: 'INTERTECH',
      note: 'Comprehensive full-stack development and web architectures training.',
    },
  ],
  certifications: [
    {
      id: 'certificate-navttc',
      title: 'Amazon Virtual Assistant (Certificate of Successful Completion)',
      credentialType: 'Government Certification',
      awardedTo: 'Muhammad Saim Nadeem',
      grade: 'Grade A+',
      issuer: 'NAVTTC (National Vocational & Technical Training Commission), Government of Pakistan',
      program: "Prime Minister's Youth Skills Development Program",
      institution:
        "College of International Skills Development (CISD), Lahore, a PM's Special Initiative for Information Technology",
      duration: '05 Mar 2025 to 04 Jun 2025',
      issueDate: '24 Jul 2025',
      accreditations: ['UNEVOC Network', 'APACC', 'ISO'],
    },
    {
      id: 'diploma-intertech',
      title: 'Web & Application Development Diploma',
      credentialType: 'Professional Diploma',
      issuer: 'INTERTECH',
      institution: 'INTERTECH',
      note: 'Comprehensive full-stack development and web architectures training.',
    },
  ],
  languages: [
    { name: 'English', level: 'Professional Working Proficiency' },
    { name: 'Urdu', level: 'Native / Bilingual' },
    { name: 'Punjabi', level: 'Fluent' },
  ],
};
