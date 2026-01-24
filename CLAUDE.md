# Prestyj

A Next.js marketing/product landing page with a blog system, featuring hero sections, testimonials, pricing, and MDX-based content via Fumadocs.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page (landing page sections)
│   ├── blog/               # Blog listing and [slug] routes
│   └── book-demo/          # Demo booking page
├── components/
│   ├── ui/                 # Base UI components (shadcn/ui + Radix)
│   ├── sections/           # Landing page sections (hero, pricing, faq, etc.)
│   ├── layout/             # Navbar, footer
│   ├── booking/            # Calendar embed components
│   └── effects/            # Visual effects (spotlight, etc.)
└── lib/                    # Utilities and source config

content/
└── blog/                   # MDX blog posts

Root configs: next.config.ts, source.config.ts, components.json
```

## Tech Stack

- **Framework**: Next.js 16 with App Router, React 19
- **Styling**: Tailwind CSS v4
- **UI**: shadcn/ui components with Radix UI primitives
- **Content**: Fumadocs MDX for blog
- **Animation**: Framer Motion
- **Icons**: Lucide React

## Organization Rules

**Keep code organized and modularized:**
- Pages → `src/app/` (one folder per route)
- UI primitives → `src/components/ui/` (one component per file)
- Page sections → `src/components/sections/`
- Layout components → `src/components/layout/`
- Utilities → `src/lib/`
- Blog content → `content/blog/` (MDX files)

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
