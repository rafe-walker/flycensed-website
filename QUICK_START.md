# Flycensed Landing Page - Quick Start Guide

## Project Summary

A production-ready Next.js landing page for Flycensed, the FAA Part 107 drone pilot exam prep app. Features a dark theme with teal and cream accents, smooth scroll-triggered animations, and comprehensive sections.

## File Structure

```
flycensed-website/
├── app/
│   ├── layout.tsx              # Root layout with SEO metadata
│   └── page.tsx                # Main landing page (1300+ lines)
├── public/
│   └── robots.txt              # SEO robots configuration
├── globals.css                 # Global styles, scrollbar, utilities
├── tailwind.config.js          # Tailwind config with brand colors
├── next.config.js              # Next.js configuration
├── tsconfig.json               # TypeScript configuration
├── package.json                # Dependencies
├── postcss.config.js           # PostCSS configuration
├── vercel.json                 # Vercel deployment config
├── .eslintrc.json             # ESLint configuration
├── .gitignore                 # Git ignore patterns
├── .env.example               # Example environment variables
├── README.md                  # Full documentation
└── QUICK_START.md             # This file
```

## Setup Instructions

### 1. Install Dependencies

```bash
cd /sessions/adoring-trusting-feynman/mnt/Documents/flycensed-website
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

### 3. Build for Production

```bash
npm run build
npm start
```

## What's Included

### 11 Sections

1. **Navigation** - Fixed header with smooth scroll navigation
2. **Hero Section** - Animated gradient orb, brand logo, CTAs
3. **Problem Section** - "1 in 6 fail" stat with counter animations
4. **Solution Section** - 4 feature cards grid
5. **Feature Deep Dive** - 5 alternating features with screenshot placeholders
6. **By The Numbers** - 6-stat grid (485 flashcards, 201 questions, etc.)
7. **How It Works** - 3-step process with connecting visual lines
8. **Pricing Section** - Free & Pro tiers with feature lists
9. **Credibility Section** - Trust signals and company info
10. **FAQ Section** - 6 collapsible accordion items
11. **Final CTA** - Logo, tagline, email signup, store buttons
12. **Footer** - Links, legal, company info

### Design System

**Brand Colors:**
- Teal (`#2DD4BF`) - "FLY" text, primary buttons, accents
- Cream (`#F5F0E8`) - "CENSED" text
- Dark (`#0F172A`) - Main background
- Card (`#1E293B`) - Card backgrounds

**Animations:**
- Fade in on scroll (Framer Motion)
- Slide up entrance
- Stagger effects on grid items
- Hover state transitions
- Animated counter for stats
- Glow effects on buttons
- Smooth accordion expand/collapse

**Features:**
- Fully responsive (mobile, tablet, desktop)
- TypeScript for type safety
- Lucide React icons (Apple, Play, Rocket, etc.)
- Zero external images/CDN required
- Smooth scrolling
- Mobile menu with hamburger icon

## Customization

### Update Brand Text

Edit `app/page.tsx`:
- Search for "FLYCENSED", "FAA Part 107", etc.
- Update stats, feature descriptions, FAQ content

### Change Brand Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  brand: {
    teal: '#YOUR_COLOR',
    cream: '#YOUR_COLOR',
    dark: '#YOUR_COLOR',
    card: '#YOUR_COLOR',
  },
}
```

### Add Real Screenshots

Replace the placeholder divs in the "Feature Deep Dive" section with Next.js Image components:

```typescript
import Image from 'next/image'

<Image
  src="/feature-dashboard.png"
  alt="Dashboard"
  width={600}
  height={400}
/>
```

### Modify Pricing Tiers

Find the pricing section in `app/page.tsx` and update:
- Tier names and prices
- Feature lists
- CTA button text

## Deployment to Vercel

1. Push to GitHub:
```bash
git init
git add .
git commit -m "Initial commit: Flycensed landing page"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/flycensed-website
git push -u origin main
```

2. Deploy:
   - Go to https://vercel.com/new
   - Import the GitHub repository
   - Vercel auto-detects Next.js settings
   - Click Deploy

3. Optional: Connect custom domain in Vercel dashboard

## Performance Metrics

The site is optimized for:
- Fast initial page load (no unnecessary JavaScript)
- Smooth 60fps animations (GPU-accelerated CSS)
- Responsive images and lazy loading ready
- SEO-friendly with proper metadata
- Mobile-first design

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Development Commands

```bash
npm run dev      # Start dev server (http://localhost:3000)
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## Key Technologies

- **Next.js 15** - React framework with App Router
- **React 19** - Latest React with built-in hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first styling
- **Framer Motion** - Smooth scroll animations
- **Lucide React** - Beautiful SVG icons

## Content Sections Reference

### Hero
- Logo: "FLY" (teal) + "CENSED" (cream)
- Tagline: "Pass Your FAA Part 107 Exam With Confidence"
- Subtitle: "The most comprehensive drone pilot exam prep — built by pilots, for pilots"
- CTAs: App Store, Google Play buttons

### Statistics
- 1 in 6 people fail
- 84.2% pass rate
- 79.95% average score
- 10,700+ failures in 2024

### Features
- Structured Study Plans
- Interactive METAR Tools
- Scenario-Based Training
- Readiness Score

### By The Numbers
- 485 Flashcards
- 201 Questions
- 11 Decision Chains
- 20 Lessons
- 100 METAR Challenges
- 5 Study Modes

### FAQ Topics
- Exam question count
- Flight experience requirement
- Study duration
- Pass rate
- Content updates
- Offline access

## Support & Documentation

- **README.md** - Full documentation
- **next.config.js** - Next.js settings
- **tailwind.config.js** - Tailwind customization
- **globals.css** - Global styles

## Company Info

- **Name**: Stormhaven Enterprises LLC
- **Subsidiary**: Stronghold Precision Aerials
- **Email**: support@flycensed.com
- **Year**: 2026

---

**Ready to go live?** Your site is production-ready. Just push to GitHub and deploy to Vercel!
