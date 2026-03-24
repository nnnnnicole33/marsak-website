@AGENTS.md

# Marsak Website

## Project Overview
Corporate website for **Marsak**, a digital marketing & advertising agency. Single-page application built with:
- **Next.js 16** (App Router)
- **Tailwind CSS 4** (PostCSS, inline theme)
- **Framer Motion** (scroll animations)
- **TypeScript**
- **Lucide React** (icons)

**Repository:** https://github.com/nnnnnicole33/marsak-website

## Quick Start

Prerequisites: Node.js 18+, Git

```bash
git clone https://github.com/nnnnnicole33/marsak-website.git
cd marsak-website
npm install
npm run dev
```
Open http://localhost:3000 to view the site.

## Project Structure

```
app/
  layout.tsx        → Root layout, fonts, SEO metadata
  page.tsx          → Homepage (assembles all components)
  globals.css       → Tailwind theme & brand colors
components/         → 14 page sections
  Navbar.tsx        → Sticky navigation bar
  Hero.tsx          → Hero section with CTA
  ClientLogos.tsx   → Client logo marquee
  Services.tsx      → 6 service cards
  Stats.tsx         → Key statistics
  HowItWorks.tsx    → 4-step process
  WhyUs.tsx         → Differentiators
  CaseStudies.tsx   → 3 case study cards
  Team.tsx          → Team members
  Testimonials.tsx  → Client testimonials
  FAQ.tsx           → Expandable FAQ
  CTABanner.tsx     → Call-to-action banner
  Contact.tsx       → Contact form
  Footer.tsx        → Footer with social links
lib/
  data.ts           → ALL text content lives here
public/             → Static assets (SVG icons)
```

## Key Files for Editing

| What to change | Where to edit |
|---|---|
| All text content (headings, descriptions, services, team, FAQ, etc.) | `lib/data.ts` |
| Brand colors (primary: `#E8192C`) | `app/globals.css` — CSS variables under `@theme` |
| Page title & SEO metadata | `app/layout.tsx` |
| Component layout & styling | `components/*.tsx` — uses Tailwind utility classes |
| Footer links & social media | `components/Footer.tsx` |

## Current Status

**Done:**
- Complete single-page website with all 14 sections
- Responsive design (mobile, tablet, desktop)
- Scroll animations via Framer Motion
- Contact form with submission feedback

**Placeholder content — needs real data:**
- All text in `lib/data.ts` is sample content
- No real images yet (team photos, case study images, client logos)
- Contact form is frontend-only (no backend)

## What's Next

1. Replace placeholder text in `lib/data.ts` with real Marsak content
2. Add real images to `public/` and reference them in components
3. Update brand colors in `app/globals.css` if needed
4. Deploy to Vercel (see below)
5. Optionally connect a custom domain

## Deployment

**Recommended: Vercel (free tier)**

1. Go to [vercel.com](https://vercel.com) and sign up with your GitHub account
2. Click "Add New Project" → import `marsak-website` repo
3. Click Deploy — site goes live in ~2 minutes
4. You'll get a URL like `marsak-website.vercel.app`

After setup, every push to `main` triggers automatic redeployment.

**Other commands:**
```bash
npm run build    # Production build
npm run start    # Run production build locally
npm run lint     # Run ESLint
```

## Tips for Working with Claude Code

- To update text content: "Change the hero title to ..." → Claude edits `lib/data.ts`
- To change colors: "Make the primary color blue" → Claude edits `app/globals.css`
- To modify layout: "Add a new section for partners" → Claude creates a new component + updates `app/page.tsx`
- To deploy: "Help me deploy to Vercel" → Claude walks you through it
