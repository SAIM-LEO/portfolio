# Saim Nadeem (Leo) — Modern Cyber Portfolio

A high-performance personal portfolio website for **Saim Nadeem (Leo)** — Web Developer with an Application Security Focus and Amazon Seller Central Professional.

Built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**, optimized for 100/100 Lighthouse scores, responsive across all mobile & desktop viewports, and ready for instant deployment to **Vercel**.

---

## ⚡ Tech Stack & Architecture

- **Framework**: Next.js 13.5+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom cyberpunk palette (`#00ff88` neon green, `#00e5ff` cyan, `#050814` deep obsidian navy)
- **Typography**: Space Grotesk (Headings) + Inter (Body) + JetBrains Mono (Accents) via `next/font/google`
- **Icons**: Lucide React
- **Theme**: Dark Mode by default with instant Light/Dark toggle & local storage persistence
- **Single Source of Truth**: All text, links, stats, projects, and skills are centralized in `/data/portfolio.ts`

---

## 📁 Project Structure

```
Portfolio/
├── app/
│   ├── globals.css           # Cyber tokens, glassmorphism utilities & theme variables
│   ├── layout.tsx            # Metadata, Open Graph, fonts, zero-flash theme script
│   ├── page.tsx              # Assembled single-page portfolio
│   ├── robots.ts             # SEO robots rules
│   └── sitemap.ts            # Dynamic XML sitemap generator
├── components/
│   ├── BrowserMockup.tsx     # Window mockup with tabbed viewer for WebSecureX screenshots
│   ├── ContactForm.tsx       # Formspree form with instant mailto fallback
│   ├── CyberGridBackground.tsx # Ambient radial glow & cyber grid overlay
│   ├── ExperienceCard.tsx    # Amazon operational roles & storefront cards
│   ├── Footer.tsx            # Footer with branding, social channels & back-to-top
│   ├── Navbar.tsx            # Sticky glassmorphic navbar with active indicator
│   ├── SectionHeading.tsx    # Reusable section heading with cyber badge
│   ├── SkillGroup.tsx        # Interactive grouped skill chips
│   ├── StatCard.tsx          # Key metrics cards (4+ Yrs Amazon, 2 Marketplaces, 1 Platform)
│   ├── ThemeToggle.tsx       # Smooth Sun/Moon mode toggle
│   └── TimelineItem.tsx      # Academic and diploma credential timeline cards
├── sections/
│   ├── HeroSection.tsx       # Dynamic typing role switcher, portrait & CTAs
│   ├── AboutSection.tsx      # Bio, core pillars, stats & language proficiencies
│   ├── ExperienceSection.tsx # Amazon Seller Central & UK Storefront
│   ├── FeaturedProjectSection.tsx # WebSecureX centerpiece (engines, recon, screenshots)
│   ├── SkillsSection.tsx     # 5 categorized technical skill domains
│   ├── EducationSection.tsx  # BS IT & INTERTECH diploma
│   └── ContactSection.tsx    # Direct contact options + inquiry form
├── data/
│   └── portfolio.ts          # Central data source for the entire site
├── public/
│   ├── profile.jpg           # Saim Nadeem profile photo
│   ├── Saim_Nadeem_CV.pdf    # Downloadable resume
│   └── projects/
│       ├── websecurex-scanner.png   # WebSecureX Scanner Dashboard screenshot
│       ├── websecurex-recon.png     # WebSecureX Attack Surface Recon screenshot
│       └── websecurex-scheduler.png # WebSecureX Audit Scheduler screenshot
├── tailwind.config.ts        # Custom colors, keyframes, fonts
├── tsconfig.json             # TypeScript configuration
├── next.config.js            # Next.js configuration
└── package.json              # Dependencies and scripts
```

---

## 🚀 Getting Started Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

### 3. Build for Production
```bash
npm run build
npm run start
```

---

## 🛠️ How to Customize

### 1. Update Content (Text, Links, Skills)
Open [`data/portfolio.ts`](file:///e:/Portfolio/data/portfolio.ts) and modify:
- Contact information (`email`, `phone`, `whatsappUrl`, `github`)
- Bio and about text
- Experience roles and bullet points
- Featured project details and live URLs
- Technical skills and categories

### 2. Replace Assets
All assets live in the `/public` folder:
- **Profile Photo**: Replace `public/profile.jpg` with your photo.
- **Resume / CV**: Replace `public/Saim_Nadeem_CV.pdf` with your updated PDF.
- **WebSecureX Screenshots**: Replace or add screenshots in `public/projects/`.

### 3. Contact Form Endpoint
In [`components/ContactForm.tsx`](file:///e:/Portfolio/components/ContactForm.tsx), you can replace the Formspree endpoint ID (`https://formspree.io/f/mqkenwkk`) with your personal Formspree form ID to receive emails straight to your inbox.

---

## 🌐 Deploy to Vercel

1. Push your code to your GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit of modern cyber portfolio"
   git branch -M main
   git remote add origin https://github.com/SAIM-LEO/your-portfolio-repo.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Framework Preset will be automatically detected as **Next.js**.
5. Click **"Deploy"**. Your site will be live on an SSL-secured custom URL in under 2 minutes!
