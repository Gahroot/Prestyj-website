---
name: media
description: Audit media gaps across the site and generate brand-aligned imagery via Z-Image API
---

# Media Generation System

Audit all visual assets, identify gaps, and generate brand-aligned imagery using the PRESTYJ brand guidelines and Z-Image API.

**Core Principle**: Audit first. Score gaps. Get approval. Generate only what's approved.

---

## Pre-Flight Checks

Before starting, verify:

1. Read the brand guidelines module at `src/lib/media/brand-guidelines.ts` to understand the visual identity
2. Read the media types at `src/lib/media/types.ts` for category definitions
3. Read the prompt builder at `src/lib/media/prompt-builder.ts` for prompt composition
4. Read the Z-Image client at `src/lib/media/z-image.ts` for API integration
5. Read the category config at `src/lib/media/media-categories.ts` for output directories
6. Verify `ZIMAGE_API_KEY` is set in `.env.local`

If the API key is missing, inform the user and stop.

---

## Phase 1: Media Audit (3 Parallel Agents)

Launch 3 parallel agents to audit the current state of media assets.

### Agent 1: Asset Inventory

Scan the `public/` directory for all image assets (png, jpg, jpeg, webp, svg, gif, ico, avif).

For each image found:
- File path and size
- Whether it's referenced by any component or page (search for the filename in `src/`)
- Category it belongs to (match against `public/images/` subdirectories)

Also check:
- Are there any orphaned images (files not referenced anywhere)?
- What image directories exist vs. what categories define?

**Output format:**
```
EXISTING IMAGES
Path                                    | Size    | Referenced | Category
public/images/hero/example.png         | 245KB   | Yes        | hero
public/og-image.jpg                    | 120KB   | Yes        | social-media
...

ORPHANED IMAGES (not referenced in code)
[list or "None found"]

MISSING DIRECTORIES (defined in categories but don't exist yet)
[list]
```

### Agent 2: Component Placeholder Scan

Scan all components in `src/components/` and pages in `src/app/` for:
- `<Image` or `next/image` usage (what images are actually rendered?)
- Avatar components using fallback initials instead of images
- Placeholder `div` elements that could hold images (look for empty boxes, background placeholders)
- Any `TODO`, `placeholder`, or commented-out image references
- Icon-only sections that would benefit from photography

**Key sections to check:**
- `src/components/sections/testimonials.tsx` — avatar fallbacks
- `src/components/sections/how-it-works.tsx` — placeholder boxes
- `src/components/sections/hero.tsx` or equivalent — hero imagery
- `src/components/sections/solution.tsx` — feature illustrations
- `src/components/sections/speed-to-lead.tsx` — visual aids
- `src/components/sections/pain-points.tsx` — visual aids
- `src/components/sections/pricing.tsx` — trust badges
- `src/components/layout/` — navbar logo, footer

**Output format:**
```
PLACEHOLDER GAPS
Component                              | Type              | Description
sections/testimonials.tsx              | avatar-fallback   | 3 testimonials using initials (SM, MC, JA)
sections/how-it-works.tsx              | empty-placeholder | 4 steps with icon-only placeholder boxes
...

EXISTING IMAGE USAGE
Component                              | Image Source      | Notes
layout/navbar.tsx                      | /logo.svg         | Site logo
...
```

### Agent 3: Blog Thumbnail Coverage

Scan all blog posts in `content/blog/*.mdx` for:
- Posts with `image` in frontmatter (has a thumbnail)
- Posts missing `image` in frontmatter (needs a thumbnail)
- Whether referenced thumbnail files actually exist in `public/`

**Output format:**
```
BLOG THUMBNAIL COVERAGE
Post                                    | Has Image Field | File Exists | Image Path
content/blog/example.mdx              | Yes             | Yes         | /images/blog/example.png
content/blog/other.mdx                | No              | N/A         | [NEEDS THUMBNAIL]
...

COVERAGE: X/Y posts have thumbnails (Z%)
```

---

## Phase 2: Gap Analysis & Scoring

After all 3 audit agents complete, consolidate findings and score each gap.

### Scoring Rubric (0-100)

```
Visual Impact    (0-30): How much does this gap hurt the visual experience?
Conversion Impact(0-25): Does fixing this increase trust/conversions?
Brand Impact     (0-20): Does this strengthen brand identity/recognition?
SEO Impact       (0-15): Does this improve search visibility (alt text, OG images)?
Effort           (0-10): How easy is this to generate and integrate? (easier = higher score)
```

### Tiering

- **Tier 1 — Critical (80+)**: Must-have for credibility. Testimonial portraits, how-it-works placeholders, missing blog thumbnails.
- **Tier 2 — High (60-79)**: Significant visual improvement. Hero images, speed-to-lead visual, solution illustrations.
- **Tier 3 — Enhancement (40-59)**: Nice-to-have polish. Industry shots, social cards, brand mark variations.

### For each gap, prepare:

```
#  | Score | Tier | Category             | Subject/Description                    | Aspect Ratio | Output Filename
1  | 95    | 1    | testimonial-portrait | Sarah Mitchell, Property Manager       | 1:1          | testimonial-portrait-sarah-mitchell.png
2  | 92    | 1    | testimonial-portrait | Marcus Chen, Sales Director            | 1:1          | testimonial-portrait-marcus-chen.png
...
```

Use `buildPrompt()` from `src/lib/media/prompt-builder.ts` to compose the actual prompt for each image. Use `generateFilename()` and `getOutputPath()` from `src/lib/media/media-categories.ts` for file naming.

---

## Phase 3: User Approval Gate

Present the full generation plan to the user using AskUserQuestion.

### Present:

1. **Summary stats**: Total gaps found, by tier, estimated cost ($0.004/image)
2. **Full table** of all proposed generations (sorted by score descending)
3. **Prompt preview** for each image (show the composed prompt)

### User options:

- **Approve all** — Generate everything
- **Approve Tier 1 only** — Generate only critical gaps
- **Approve Tier 1 + 2** — Generate critical and high-priority
- **Approve specific numbers** — User picks by # from the table
- **Show all prompts** — Display every prompt in full before deciding
- **Modify a prompt** — User edits a specific prompt before generation
- **Reject** — Cancel, no generation

**STOP HERE if the user rejects. Do not generate anything without explicit approval.**

---

## Phase 4: Image Generation

For each approved image:

1. **Create output directories** — `mkdir -p` for any missing `public/images/*` directories
2. **Generate images** — Use the Z-Image API via `src/lib/media/z-image.ts`:
   - Call `generateImage(prompt, aspectRatio)` to create the task
   - Call `waitForCompletion(taskId)` to poll for the result
   - Call `downloadImage(imageUrl, outputPath)` to save the file
   - Or use `generateAndDownload()` for the full pipeline
3. **Respect rate limits** — The token-bucket limiter handles this automatically
4. **Report progress** — After each batch, report:
   ```
   GENERATION PROGRESS
   ✓ testimonial-portrait-sarah-mitchell.png (245KB) — Success
   ✓ testimonial-portrait-marcus-chen.png (230KB) — Success
   ✗ hero-main-background.png — Failed: [error message]

   Progress: 5/12 complete (2 failed)
   ```
5. **Retry failures** — Offer to retry any failed generations

**Important**: Since this runs in a Claude Code session (not a Next.js runtime), import and call the Z-Image functions directly. The API key should be loaded from the environment.

---

## Phase 5: Integration Suggestions

After generation completes, suggest code changes to integrate the new images.

### Testimonial Portraits
- Add `image` field to testimonial data in `src/components/sections/testimonials.tsx`
- Use `AvatarImage` from shadcn/ui Avatar with `AvatarFallback` as backup
- Example: `<AvatarImage src="/images/testimonials/sarah-mitchell.png" alt="Sarah Mitchell" />`

### How-It-Works Illustrations
- Add `image` field to step data in `src/components/sections/how-it-works.tsx`
- Replace placeholder `div` with `next/image` component
- Keep icon as a small overlay or remove if image is sufficient

### Blog Thumbnails
- Add `image:` field to MDX frontmatter for posts missing it
- Ensure blog listing page renders the thumbnail

### Other Integrations
- Hero images: Add as background or `next/image` in hero sections
- OG images: Update `metadata` in layout.tsx or page-specific metadata
- Trust badges: Add to pricing or CTA sections

### User options for integration:
- **Apply all** — Make all suggested code changes
- **Apply specific** — User picks which integrations to apply
- **Skip integration** — Keep images in `public/` but don't modify components yet
- **Preview diffs** — Show exact code changes before applying

---

## Phase 6: Verification

Run the standard quality checks:

```bash
npm run typecheck
npm run lint
npm run build
```

Fix ALL errors before continuing.

### Verification checklist:
- [ ] All generated images exist at their expected paths
- [ ] All modified components compile without errors
- [ ] `next/image` components have proper `width`, `height`, and `alt` attributes
- [ ] No broken image references
- [ ] Build completes successfully
- [ ] Image file sizes are reasonable (< 500KB for photos, < 100KB for icons/badges)

---

## Phase 7: Commit

Stage and commit all changes:

1. `git add` all generated images in `public/images/`
2. `git add` any modified component files
3. Commit with a descriptive message:
   ```
   Media: Generate [N] brand-aligned images for [categories]

   - [summary of what was generated]
   - [summary of integrations applied]
   ```

---

## Important Reminders

1. **Audit first, always.** Never generate images without understanding what exists and what's missing.
2. **Brand guidelines matter.** Every prompt must align with the photography style, mood, and constraints in `brand-guidelines.ts`.
3. **User approval required.** Never generate images without explicit approval at the Phase 3 gate.
4. **Quality over quantity.** Better to generate fewer high-quality, well-integrated images than many unused ones.
5. **NOT AI-focused.** The brand is human-first, results-driven. No robots, no circuits, no sci-fi.
6. **Cost awareness.** Each image costs ~$0.004. Always show estimated cost before generation.
7. **Integration matters.** Generated images are only valuable if properly integrated into the site.
8. **Verify everything.** Always run typecheck + lint + build after any code changes.
