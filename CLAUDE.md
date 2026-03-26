# Prestyj

AI-powered lead conversion platform for home services & real estate. Next.js marketing site with blog, comparison pages, calculators, and lead magnets.

## Project Structure

```
src/
├── app/                        # Next.js App Router pages
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Home/landing page
│   ├── sitemap.ts              # XML sitemap generation
│   ├── api/                    # API routes (indexnow, lead-magnet, meta-capi)
│   ├── blog/                   # Blog listing and [slug] routes
│   ├── book-demo/              # Demo booking page
│   ├── platform/               # Platform/product page
│   ├── pricing/                # Pricing page
│   ├── results/                # Case results/portfolio
│   ├── samples/                # Video samples portfolio
│   ├── compare/                # Competitor comparison pages (15+ variants)
│   ├── alternatives/[slug]/    # Alternative solution pages
│   ├── best-for/[slug]/        # Industry-specific pages
│   ├── solutions/[slug]/       # Solution category pages
│   ├── free-ads/               # Free ads landing pages (contractors, hvac, etc.)
│   ├── lead-magnet/            # Lead magnet pages
│   ├── bulk-video-ad-pricing/  # Bulk pricing page
│   ├── *-calculator*/          # ROI/commission calculators
│   ├── privacy/ & terms/       # Legal pages
│   └── [favicon/OG images]
├── components/
│   ├── ui/                     # Base UI components (shadcn/ui + Radix)
│   ├── sections/               # Landing page sections (hero, pricing, faq, etc.)
│   │   ├── landing/            # Core landing sections
│   │   ├── pricing/            # Pricing-specific sections
│   │   ├── compare/            # Comparison page sections
│   │   ├── calculator/         # Calculator sections
│   │   ├── alternatives/       # Alternative product sections
│   │   └── best-for/           # Best-for sections
│   ├── layout/                 # Navbar, footer
│   ├── booking/                # Cal.com embed components
│   ├── free-ads/               # Free ads page components
│   ├── lead-magnet/            # Lead magnet form components
│   ├── effects/                # Visual effects (spotlight, etc.)
│   └── seo/                    # Structured data, metadata components
└── lib/                        # Utilities and data
    ├── utils.ts, api.ts        # General utilities
    ├── nav-data.ts             # Navigation structure
    ├── faq-data.ts             # FAQ content
    ├── pricing-data.ts         # Pricing tiers and features
    ├── meta-pixel.ts           # Meta Pixel tracking
    ├── compare/                # Comparison data and types (15+ datasets)
    ├── calculator/             # Calculator logic
    ├── alternatives/           # Alternatives page data
    ├── best-for/               # Industry page data
    ├── solutions/              # Solution category data
    ├── validations/            # Zod form validation schemas
    ├── content-factory/        # Programmatic content generation
    │   ├── constants/          # Reusable CTA, hero, feature constants
    │   └── factories/          # Alternative, best-for, compare generators
    └── media/                  # Z-Image API integration (kie.ai)

content/
├── blog/                       # MDX blog posts (Fumadocs)
└── lead-magnets/               # Lead magnet content

scripts/                        # Generation scripts (IndexNow, image batch)
public/images/                  # Assets: badges, brand, blog, hero, industry, etc.
```

## Tech Stack

- **Framework**: Next.js 16 with App Router, React 19
- **Styling**: Tailwind CSS v4
- **UI**: shadcn/ui components with Radix UI primitives
- **Content**: Fumadocs MDX for blog
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod
- **SEO**: react-safe-json-ld, IndexNow
- **Tracking**: Meta Pixel / Conversions API

## Organization Rules

**Keep code organized and modularized:**
- Pages → `src/app/` (one folder per route)
- UI primitives → `src/components/ui/` (one component per file)
- Page sections → `src/components/sections/`
- Layout components → `src/components/layout/`
- Utilities → `src/lib/`
- Blog content → `content/blog/` (MDX files)
- API routes → `src/app/api/` (one folder per endpoint)
- Data files → `src/lib/<domain>/` (compare, calculator, etc.)

**Modularity principles:**
- Single responsibility per file
- Clear, descriptive file names
- Group related functionality together

## Code Quality - Zero Tolerance

After editing ANY file, run:

```bash
npm run typecheck
npm run lint
npm run build
```

Fix ALL errors/warnings before continuing.

For development:
```bash
npm run dev
```

If changes require server restart (not hot-reloadable):
1. Restart server: `npm run dev`
2. Read server output/logs
3. Fix ALL warnings/errors before continuing
