/**
 * Verifies the site's CTA strategy:
 *   - Cold-traffic pages must use /batch-video-ads as primary CTA
 *   - High-intent pages may use /book-demo
 *   - Run via `npx tsx scripts/check-cta-coverage.ts`
 *   - Exits non-zero if any cold-traffic page references /book-demo as its only CTA.
 *
 * Seed lists come from the site-wide CTA sweep in
 * `.ezcoder/plans/tof-batch-video-ads-shift.md` (step 14).
 */

import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";

const REPO_ROOT = process.cwd();
const SRC_ROOT = join(REPO_ROOT, "src");

/**
 * Cold-traffic surfaces: hero / blog CTA / generic landing-page CTA / lead
 * magnets. These must point at /batch-video-ads. If any of them references
 * /book-demo with NO /batch-video-ads link present, the script fails.
 *
 * Paths are POSIX-style relative to repo root.
 */
const COLD_TRAFFIC_PAGES: readonly string[] = [
  "src/components/sections/cta.tsx",
  "src/components/sections/hero.tsx",
  "src/components/sections/landing/hero.tsx",
  "src/components/sections/speed-to-lead.tsx",
  "src/components/sections/home-hero.tsx",
  "src/components/sections/batch-video-ads-cta.tsx",
  "src/components/blog/post-cta.tsx",
  "src/components/lead-magnet/banner.tsx",
  "src/app/ad-fatigue-solution/page.tsx",
  "src/app/ai-ads-vs-human-ads/page.tsx",
  "src/app/ai-calculator-results/page.tsx",
  "src/app/how-many-ad-creatives-to-test/client.tsx",
  "src/app/how-often-refresh-ad-creative/client.tsx",
  "src/app/why-facebook-ads-stop-working/page.tsx",
  "src/app/statistics/page.tsx",
  "src/app/faq/page.tsx",
  "src/app/lead-magnet/page.tsx",
  "src/app/lead-magnet/brokerage-playbook/page.tsx",
  "src/app/lead-magnet/qualvol-playbook/page.tsx",
  "src/app/lead-magnet/reactivate-leads/page.tsx",
  "src/app/lead-magnet/roofing-playbook/page.tsx",
  "src/app/locations/page.tsx",
  "src/app/real-estate-roi-calculator/page.tsx",
  "src/app/best-for/page.tsx",
  "src/app/alternatives/page.tsx",
];

/**
 * High-intent surfaces: pricing tier upsells, /platform, /compare/*,
 * /alternatives/*, /results, /contact, and post-conversion thank-you pages.
 * These are allowed to keep /book-demo as the primary CTA.
 */
const HIGH_INTENT_PAGES: readonly string[] = [
  "src/app/contact/page.tsx",
  "src/app/platform/page.tsx",
  "src/app/pricing/page.tsx",
  "src/app/results/page.tsx",
  "src/app/demo/client.tsx",
  "src/app/book-demo/page.tsx",
  "src/app/book-demo/layout.tsx",
  "src/app/team-commission-calculator/thank-you/page.tsx",
  "src/app/onboarding/page.tsx",
  "src/app/start/[plan]/page.tsx",
  "src/components/sections/pricing.tsx",
  "src/components/sections/pricing/pricing-tiers.tsx",
  "src/components/sections/content-engine/pricing.tsx",
];

const BOOK_DEMO_PATTERN = /href=["']\/book-demo(?:["'#?]|\/)/g;
const BATCH_PATTERN = /href=["']\/batch-video-ads(?:["'#?]|\/)/g;

type FileCounts = {
  readonly file: string;
  readonly bookDemo: number;
  readonly batchVideoAds: number;
};

function walkSrc(dir: string): string[] {
  const out: string[] = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      if (entry === "node_modules" || entry.startsWith(".")) continue;
      out.push(...walkSrc(full));
      continue;
    }
    if (!stat.isFile()) continue;
    if (!/\.(ts|tsx)$/.test(entry)) continue;
    out.push(full);
  }
  return out;
}

function countMatches(content: string, pattern: RegExp): number {
  pattern.lastIndex = 0;
  let count = 0;
  while (pattern.exec(content) !== null) count++;
  return count;
}

function toPosix(p: string): string {
  return p.split(sep).join("/");
}

function buildCounts(): FileCounts[] {
  const files = walkSrc(SRC_ROOT);
  const counts: FileCounts[] = [];
  for (const file of files) {
    const rel = toPosix(relative(REPO_ROOT, file));
    const content = readFileSync(file, "utf8");
    const bookDemo = countMatches(content, BOOK_DEMO_PATTERN);
    const batch = countMatches(content, BATCH_PATTERN);
    if (bookDemo === 0 && batch === 0) continue;
    counts.push({ file: rel, bookDemo, batchVideoAds: batch });
  }
  counts.sort((a, b) => a.file.localeCompare(b.file));
  return counts;
}

function printTable(rows: readonly FileCounts[]): void {
  const fileHeader = "File";
  const bookHeader = "/book-demo";
  const batchHeader = "/batch-video-ads";

  const fileWidth = Math.max(fileHeader.length, ...rows.map((r) => r.file.length));
  const bookWidth = Math.max(bookHeader.length, ...rows.map((r) => String(r.bookDemo).length));
  const batchWidth = Math.max(
    batchHeader.length,
    ...rows.map((r) => String(r.batchVideoAds).length),
  );

  const sep =
    "+" +
    "-".repeat(fileWidth + 2) +
    "+" +
    "-".repeat(bookWidth + 2) +
    "+" +
    "-".repeat(batchWidth + 2) +
    "+";

  const header =
    "| " +
    fileHeader.padEnd(fileWidth) +
    " | " +
    bookHeader.padEnd(bookWidth) +
    " | " +
    batchHeader.padEnd(batchWidth) +
    " |";

  console.log(sep);
  console.log(header);
  console.log(sep);
  for (const row of rows) {
    console.log(
      "| " +
        row.file.padEnd(fileWidth) +
        " | " +
        String(row.bookDemo).padStart(bookWidth) +
        " | " +
        String(row.batchVideoAds).padStart(batchWidth) +
        " |",
    );
  }
  console.log(sep);
}

function main(): void {
  const counts = buildCounts();
  const byFile = new Map<string, FileCounts>();
  for (const row of counts) byFile.set(row.file, row);

  printTable(counts);

  const violations: string[] = [];
  const missingBatch: string[] = [];

  for (const page of COLD_TRAFFIC_PAGES) {
    const row = byFile.get(page);
    if (!row) {
      // No CTAs of either kind in the file — flag so the list stays honest.
      missingBatch.push(
        `${page} (file has no /book-demo or /batch-video-ads links — remove from COLD_TRAFFIC_PAGES if intentional)`,
      );
      continue;
    }
    if (row.bookDemo > 0 && row.batchVideoAds === 0) {
      violations.push(`${page}: /book-demo=${row.bookDemo}, /batch-video-ads=${row.batchVideoAds}`);
    }
  }

  // Sanity: warn about pages in HIGH_INTENT_PAGES that ALSO appear in COLD_TRAFFIC_PAGES.
  const overlap = COLD_TRAFFIC_PAGES.filter((p) => HIGH_INTENT_PAGES.includes(p));

  console.log("");
  console.log(
    `Cold-traffic pages checked: ${COLD_TRAFFIC_PAGES.length}  |  High-intent pages: ${HIGH_INTENT_PAGES.length}`,
  );

  if (overlap.length > 0) {
    console.error("Overlap between COLD_TRAFFIC_PAGES and HIGH_INTENT_PAGES:");
    for (const p of overlap) console.error(`  - ${p}`);
  }

  if (missingBatch.length > 0) {
    console.warn("\nWarnings (cold-traffic list out of sync):");
    for (const m of missingBatch) console.warn(`  - ${m}`);
  }

  if (violations.length > 0) {
    console.error("\nFAIL: cold-traffic pages with /book-demo but no /batch-video-ads CTA:");
    for (const v of violations) console.error(`  - ${v}`);
    process.exit(1);
  }

  console.log("\nPASS: every cold-traffic page links to /batch-video-ads.");
  process.exit(0);
}

main();
