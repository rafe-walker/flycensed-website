# Flycensed - FAA Part 107 Drone Pilot Exam Prep

A sleek, modern landing page for Flycensed, the ultimate FAA Part 107 exam preparation app built by pilots, for pilots.

## Features

- Ultra-sleek dark theme with teal and cream accent colors
- Smooth scroll-triggered animations using Framer Motion
- Fully responsive design (mobile, tablet, desktop)
- 11 comprehensive sections covering product benefits, features, pricing, and FAQ
- Interactive elements and smooth micro-interactions
- SEO-optimized with proper metadata
- Production-ready code

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Lucide React** - Beautiful icons
- **React 19** - Latest React features

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd flycensed-website

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
flycensed-website/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   └── page.tsx            # Main landing page with all sections
├── globals.css             # Global styles and custom utilities
├── tailwind.config.js      # Tailwind configuration with brand colors
├── next.config.js          # Next.js configuration
├── package.json            # Dependencies
└── tsconfig.json           # TypeScript configuration
```

## Design System

### Brand Colors

- **Teal (Primary)**: `#2DD4BF` - Used for "FLY" text and CTAs
- **Cream (Secondary)**: `#F5F0E8` - Used for "CENSED" text
- **Dark Background**: `#0F172A` - Main background
- **Card Background**: `#1E293B` - Card and container backgrounds

### Typography

- **Font Family**: System fonts (Inter fallback)
- **Sizes**: Responsive scaling from mobile to desktop
- **Weights**: Regular (400), Semi-bold (600), Bold (700), Black (900)

### Spacing & Layout

- Max width: 1280px (7xl)
- Responsive padding and margins
- Mobile-first approach

## Sections

1. **Navigation** - Fixed header with smooth scrolling
2. **Hero Section** - Eye-catching intro with animated gradient orb
3. **Problem Section** - Statistics on exam failure rates
4. **Solution Section** - 4 core feature cards
5. **Feature Deep Dive** - 5 detailed feature showcases
6. **By The Numbers** - Key statistics grid
7. **How It Works** - 3-step process visualization
8. **Pricing** - Two-tier pricing plans
9. **Credibility** - Trust signals and credentials
10. **FAQ** - Collapsible accordion with 6 questions
11. **Final CTA** - Email signup and store links
12. **Footer** - Navigation and legal links

## Animations

All sections include scroll-triggered animations powered by Framer Motion:

- **Fade In** - Elements fade in when scrolled into view
- **Slide Up** - Elements slide up and fade in together
- **Stagger** - Multiple items animate in sequence
- **Hover Effects** - Interactive elements have smooth hover states
- **Glow Effects** - Ambient glow on buttons and accent elements

## Deployment

### Vercel (Recommended)

```bash
# Push to GitHub first
git push origin main

# Import in Vercel dashboard: https://vercel.com/new
# Select the GitHub repository
# Deploy with default settings
```

Environment variables (if needed):
- Copy `.env.example` to `.env.local`
- No variables required for basic deployment

## Performance Optimizations

- Code splitting with Next.js App Router
- Image optimization ready
- CSS minification and optimization
- Zero JavaScript required for initial render
- Smooth CSS animations (GPU-accelerated)
- Responsive images and modern image formats

## Customization

### Updating Brand Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  brand: {
    teal: '#2DD4BF',
    cream: '#F5F0E8',
    dark: '#0F172A',
    card: '#1E293B',
  },
}
```

### Modifying Content

All content is in `app/page.tsx`. Update:
- Hero text and taglines
- Feature descriptions
- Pricing tiers and pricing
- FAQ questions and answers
- Stats and metrics

### Adding Images

Replace placeholder divs with Next.js Image components:

```typescript
import Image from 'next/image'

<Image
  src="/path/to/image.png"
  alt="Description"
  width={500}
  height={500}
/>
```

## SEO

- Metadata configured in `app/layout.tsx`
- Open Graph tags for social sharing
- Twitter Card support
- Semantic HTML throughout
- Proper heading hierarchy

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

© 2026 Stormhaven Enterprises LLC. All rights reserved.

## Support

For questions or issues, contact: support@flycensed.com

---

Built with by drone pilots at Stronghold Precision Aerials
