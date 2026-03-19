# Flycensed Landing Page - Deployment Guide

## Pre-Deployment Checklist

### Content Review
- [ ] Hero section text is correct
- [ ] All statistics are accurate and current
- [ ] Feature descriptions match product capabilities
- [ ] Pricing is set correctly
- [ ] FAQ answers are comprehensive
- [ ] Company information is accurate
- [ ] Social links are configured (if applicable)
- [ ] Email for support is correct (support@flycensed.com)

### SEO & Analytics
- [ ] Page title is set: "Flycensed | FAA Part 107 Drone Pilot Exam Prep"
- [ ] Meta description is compelling
- [ ] OG tags for social sharing are configured
- [ ] Keywords are relevant to drone pilot exams
- [ ] robots.txt allows search engine crawling
- [ ] No 404 links in navigation or footer

### Technical
- [ ] All dependencies installed (`npm install`)
- [ ] No TypeScript errors (`npx tsc --noEmit`)
- [ ] ESLint passes (`npm run lint`)
- [ ] Build succeeds locally (`npm run build`)
- [ ] Dev server runs without errors (`npm run dev`)
- [ ] Responsive design tested on mobile/tablet/desktop
- [ ] All interactive elements work (buttons, accordion, forms)
- [ ] No console errors in browser DevTools

### Performance
- [ ] Page load is smooth
- [ ] Animations run at 60fps
- [ ] No layout shift when animations play
- [ ] Mobile performance is good (test on 4G)
- [ ] Lighthouse score checked

### Security
- [ ] No sensitive data in code
- [ ] No hardcoded API keys
- [ ] .env.example doesn't contain real secrets
- [ ] CORS headers configured (if needed)

---

## Deployment Steps

### Option 1: Deploy to Vercel (Recommended)

**Prerequisites:**
- GitHub account
- Vercel account
- Git installed

**Steps:**

1. **Initialize Git Repository**
   ```bash
   cd /sessions/adoring-trusting-feynman/mnt/Documents/flycensed-website
   git init
   git add .
   git commit -m "Initial commit: Flycensed landing page"
   git branch -M main
   ```

2. **Create GitHub Repository**
   - Go to https://github.com/new
   - Name: `flycensed-website`
   - Description: "FAA Part 107 drone pilot exam prep landing page"
   - Privacy: Public (or Private if preferred)
   - Create repository

3. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/flycensed-website.git
   git push -u origin main
   ```

4. **Deploy to Vercel**
   - Go to https://vercel.com/new
   - Click "Import Git Repository"
   - Select `flycensed-website`
   - Click "Import"
   - Vercel auto-detects Next.js configuration
   - Click "Deploy"

5. **Wait for Deployment**
   - Vercel builds and deploys automatically
   - You'll get a live URL within 1-2 minutes
   - Share the URL: `https://flycensed.vercel.app`

6. **Custom Domain (Optional)**
   - In Vercel Dashboard → Project Settings → Domains
   - Add your custom domain (e.g., `flycensed.com`)
   - Update DNS records as instructed
   - SSL certificate auto-provisioned

### Option 2: Deploy to Netlify

**Steps:**

1. Push to GitHub (same as above)

2. Go to https://netlify.com
   - Click "Add new site"
   - Select "Import an existing project"
   - Choose GitHub
   - Select `flycensed-website` repository

3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Environment variables: (none needed for basic deployment)

4. Click "Deploy site"

### Option 3: Deploy to Self-Hosted Server

**Requirements:**
- Node.js 18+ installed
- PM2 or similar process manager

**Steps:**

1. **Clone Repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/flycensed-website.git
   cd flycensed-website
   ```

2. **Install & Build**
   ```bash
   npm install
   npm run build
   ```

3. **Start with PM2**
   ```bash
   npm install -g pm2
   pm2 start npm --name "flycensed" -- start
   pm2 save
   pm2 startup
   ```

4. **Configure Nginx Reverse Proxy**
   ```nginx
   server {
       listen 80;
       server_name flycensed.com www.flycensed.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

5. **Enable HTTPS with Let's Encrypt**
   ```bash
   sudo certbot certonly --nginx -d flycensed.com
   ```

---

## Post-Deployment Tasks

### Verification
- [ ] Visit live URL and verify all sections load
- [ ] Test navigation and smooth scrolling
- [ ] Verify animations play smoothly
- [ ] Test forms and CTAs (email signup, app links)
- [ ] Check mobile responsiveness
- [ ] Verify images/icons load correctly
- [ ] Test in different browsers

### Analytics & Monitoring
- [ ] Set up Google Analytics (optional)
- [ ] Configure Vercel Analytics (auto-included)
- [ ] Set up error tracking (Sentry, etc.)
- [ ] Monitor performance metrics

### SEO
- [ ] Submit sitemap to Google Search Console
- [ ] Verify domain ownership in GSC
- [ ] Check indexing status
- [ ] Monitor search performance

### Content
- [ ] Verify all copy is correct
- [ ] Check email signup works
- [ ] Verify all external links work
- [ ] Test app store button links

### Monitoring & Maintenance
- [ ] Set up uptime monitoring
- [ ] Configure alerts for errors
- [ ] Schedule security updates
- [ ] Plan content update strategy

---

## Environment Variables

For basic deployment, no environment variables are needed. If you add backend features later:

**Development (.env.local):**
```
NEXT_PUBLIC_API_URL=http://localhost:8000
```

**Production (.env.production):**
```
NEXT_PUBLIC_API_URL=https://api.flycensed.com
```

In Vercel Dashboard:
1. Go to Project Settings → Environment Variables
2. Add variables for each environment
3. Redeploy to apply changes

---

## Custom Domain Setup

### For Vercel:

1. Go to Project Settings → Domains
2. Enter your domain: `flycensed.com`
3. Copy DNS records
4. In your domain registrar (GoDaddy, Namecheap, Route 53, etc.):
   - Add CNAME record: `flycensed.com` → `cname.vercel-dns.com`
   - Or add the provided DNS records
5. Wait for DNS propagation (5-30 minutes)
6. Vercel automatically provisions SSL certificate

### For Netlify:

1. Go to Domain Settings
2. Add your domain
3. Update nameservers to Netlify's:
   - `dns1.p02.nsone.net`
   - `dns2.p02.nsone.net`
   - `dns3.p02.nsone.net`
   - `dns4.p02.nsone.net`
4. SSL auto-provisioned via Let's Encrypt

---

## Updating & Maintenance

### Pushing Updates

```bash
# Make changes locally
cd flycensed-website

# Test changes
npm run dev

# Build to verify
npm run build

# Commit and push
git add .
git commit -m "Update: [describe changes]"
git push origin main

# Vercel auto-deploys on push
```

### Updating Dependencies

```bash
# Check for updates
npm outdated

# Update all packages
npm update

# Update major versions
npm install next@latest framer-motion@latest

# Test after updates
npm run build
npm run dev
```

### Rollback (if needed)

In Vercel Dashboard:
1. Go to Deployments
2. Find previous successful deployment
3. Click the "..." menu
4. Select "Promote to Production"

---

## Performance Optimization

### Already Optimized:
- CSS animations (GPU-accelerated)
- No unnecessary JavaScript
- Code splitting with Next.js
- Responsive images ready
- Smooth scroll behavior

### Optional Improvements:
- Add image compression tool
- Implement edge middleware
- Add API rate limiting
- Set up CDN caching headers
- Minify custom CSS further

### Monitor Performance:
- Vercel Analytics (included)
- Google PageSpeed Insights
- Lighthouse scores
- Core Web Vitals

---

## Troubleshooting

### Build Fails
```bash
# Clean build cache
rm -rf .next node_modules
npm install
npm run build
```

### Animations Stuttering
- Check browser DevTools Performance tab
- Reduce animation complexity
- Check for JavaScript blocking render
- Use `will-change` CSS carefully

### Mobile Looks Wrong
- Check viewport meta tag in `layout.tsx`
- Test with Chrome DevTools mobile emulation
- Verify Tailwind responsive classes (sm:, md:, lg:)

### Domain Not Resolving
- Wait for DNS propagation (can take 24 hours)
- Verify DNS records in registrar
- Check Vercel domain configuration
- Use https://dnschecker.org to verify

---

## Contact & Support

- **Support Email**: support@flycensed.com
- **GitHub Issues**: Create issue for bugs
- **Vercel Support**: https://vercel.com/support
- **Next.js Docs**: https://nextjs.org/docs

---

## Success Checklist

After deployment, confirm:
- [ ] Site is live and accessible
- [ ] All pages load without errors
- [ ] Animations run smoothly
- [ ] Mobile responsive looks good
- [ ] Forms and links work
- [ ] SEO metadata is correct
- [ ] Analytics are tracking
- [ ] Monitoring is configured
- [ ] Backups are scheduled
- [ ] Team has access to Vercel dashboard

**Congratulations! Your Flycensed landing page is live!** 🚀
