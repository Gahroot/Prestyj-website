#!/usr/bin/env npx tsx
/**
 * IndexNow auto-publish — diff and submit only NEW URLs.
 *
 * Runs in CI on every push to `main` (see .github/workflows/indexnow.yml).
 *
 * Flow:
 *   1. Discover the current set of indexable URLs (mirrors src/app/sitemap.ts).
 *   2. Diff against the last-submitted snapshot at data/indexnow/submitted-urls.json.
 *   3. Submit only the diff to IndexNow (so we don't spam on every push).
 *   4. Write the new snapshot back so the next run sees these as known.
 *
 * Flags:
 *   --dry-run      Print the diff, don't submit, don't update the snapshot.
 *   --print-all    Print the full discovered URL set (for debugging).
 *   --seed         Write the snapshot from the current URL set WITHOUT submitting.
 *                  Use once to bootstrap so future runs only ping new URLs.
 *
 * Env:
 *   INDEXNOW_API_KEY    Required for live submission. Missing key → dry-run.
 */

import { readFileSync, readdirSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { load as parseYaml } from "js-yaml";
import { getAllAlternativeSlugs } from "../src/lib/alternatives";
import { getAllSolutionSlugs } from "../src/lib/solutions";
import { getAllBestForSlugs } from "../src/lib/best-for";
import { getAllLocationSlugs } from "../src/lib/locations";

const BASE_URL = "https://prestyj.com";
const INDEXNOW_ENDPOINT = "https://yandex.com/indexnow";
const SNAPSHOT_PATH = join(process.cwd(), "data", "indexnow", "submitted-urls.json");

// Mirrors the `noindex` filter in src/app/sitemap.ts for best-for pages.
const NOINDEX_BEST_FOR_SLUGS = new Set([
  "solo-agents",
  "new-agents",
  "hvac",
  "roofing",
  "plumbing",
  "solar",
  "contractors",
  "electricians",
  "landscaping-lawn-care",
  "painting-contractors",
  "window-and-door-manufacturers",
  "siding-contractors",
  "garage-door",
  "flooring-contractors",
  "pest-control",
  "movers",
  "dental",
  "law-firms",
  "plastic-surgery",
  "mental-health-clinics",
  "veterinary-clinics",
  "accounting-firms",
  "auto-dealerships",
  "auto-repair-shops",
  "senior-care",
  "retail-stores",
  "restaurants",
  "salons-and-spas",
  "gyms-and-fitness-centers",
  "servicetitan-users",
  "jobber-users",
  "ai-voice-receptionist-dental",
  "ai-voice-receptionist-legal",
  "ai-voice-receptionist-medical",
  "ai-voice-receptionist-insurance",
]);

// Static routes — mirrors src/app/sitemap.ts staticRoutes.
const STATIC_ROUTES: ReadonlyArray<string> = [
  "",
  "/batch-video-ads",
  "/ai-sales-agents",
  "/ai-voice-agents",
  "/ai-marketing-agents",
  "/done-for-you-ai-agents",
  "/ai-receptionist",
  "/youtube-media-testing-services",
  "/video-ad-testing-pricing",
  "/done-for-you-social-media",
  "/1000-posts-per-month",
  "/ai-content-department",
  "/social-media-on-autopilot",
  "/ai-social-media-management",
  "/book-demo",
  "/samples",
  "/bulk-video-ad-pricing",
  "/blog",
  "/results",
  "/alternatives",
  "/best-for",
  "/lead-magnet",
  "/ai-call-handling-calculator",
  "/team-commission-calculator",
  "/real-estate-roi-calculator",
  "/lead-magnet/brokerage-playbook",
  "/platform",
  "/statistics",
  "/ad-fatigue-solution",
  "/how-many-ad-creatives-to-test",
  "/how-often-refresh-ad-creative",
  "/why-facebook-ads-stop-working",
  "/ai-ads-vs-human-ads",
  "/privacy",
  "/terms",
];

// Compare routes — mirrors src/app/sitemap.ts compareRoutes.
const COMPARE_ROUTES: ReadonlyArray<string> = [
  "/compare/prestyj-vs-conversica",
  "/compare/prestyj-vs-structurely",
  "/compare/prestyj-vs-drift",
  "/compare/prestyj-vs-internal-isa-team",
  "/compare/prestyj-vs-offshore-isa",
  "/compare/prestyj-vs-answering-service",
  "/compare/prestyj-vs-arcads",
  "/compare/prestyj-vs-creatify",
  "/compare/prestyj-vs-heygen",
  "/compare/prestyj-vs-billo",
  "/compare/prestyj-vs-fiverr-video-ads",
  "/compare/prestyj-vs-fiverr-social-media",
  "/compare/prestyj-vs-ai-avatar-ads",
  "/compare/prestyj-vs-ugc-creators",
  "/compare/prestyj-vs-production-agencies",
  "/compare/prestyj-vs-pencil",
  "/compare/prestyj-vs-capcut",
  "/compare/prestyj-vs-canva",
  "/compare/prestyj-vs-later",
  "/compare/prestyj-vs-buffer",
  "/compare/prestyj-vs-hootsuite",
  "/compare/prestyj-vs-sprout-social",
  "/compare/prestyj-vs-social-media-agency",
  "/compare/prestyj-vs-junior-social-hire",
  "/compare/prestyj-vs-opus-clip",
  "/compare/prestyj-vs-invideo",
  "/compare/prestyj-vs-synthesia",
  "/compare/prestyj-vs-adcreative-ai",
  "/compare/structurely-vs-prestyj",
  "/compare/follow-up-boss-vs-prestyj",
  "/compare/lofty-vs-prestyj",
  "/compare/resimpli-vs-prestyj",
  "/compare/alanna-ai-vs-prestyj",
  "/compare/prestyj-vs-bland-ai",
  "/compare/prestyj-vs-vapi",
  "/compare/prestyj-vs-retell-ai",
  "/compare/prestyj-vs-synthflow",
  "/compare/prestyj-vs-air-ai",
  "/compare/prestyj-vs-goodcall",
  "/compare/prestyj-vs-smith-ai",
  "/compare/prestyj-vs-ruby-receptionists",
];

interface BlogFrontmatter {
  noindex?: boolean;
  draft?: boolean;
}

/**
 * Scan content/blog/*.mdx and return slugs that should be in the sitemap
 * (i.e. not flagged `noindex: true`). Mirrors blogSource.getPages() filtering
 * without depending on the fumadocs bundler glob.
 */
function getIndexableBlogSlugs(): string[] {
  const blogDir = join(process.cwd(), "content", "blog");
  const files = readdirSync(blogDir).filter((f) => f.endsWith(".mdx"));

  const slugs: string[] = [];
  for (const file of files) {
    const fullPath = join(blogDir, file);
    const raw = readFileSync(fullPath, "utf-8");
    const frontmatter = extractFrontmatter(raw);
    if (frontmatter?.noindex === true) continue;
    if (frontmatter?.draft === true) continue;
    slugs.push(file.replace(/\.mdx$/, ""));
  }
  return slugs;
}

function extractFrontmatter(source: string): BlogFrontmatter | null {
  if (!source.startsWith("---")) return null;
  const end = source.indexOf("\n---", 3);
  if (end === -1) return null;
  const yamlBlock = source.slice(3, end).trim();
  try {
    const parsed = parseYaml(yamlBlock) as BlogFrontmatter | null;
    return parsed ?? null;
  } catch {
    return null;
  }
}

function discoverAllUrls(): string[] {
  const paths: string[] = [];

  for (const route of STATIC_ROUTES) paths.push(route);

  for (const slug of getIndexableBlogSlugs()) paths.push(`/blog/${slug}`);

  for (const slug of getAllAlternativeSlugs()) paths.push(`/alternatives/${slug}`);
  for (const slug of getAllSolutionSlugs()) paths.push(`/solutions/${slug}`);

  for (const slug of getAllBestForSlugs()) {
    if (!NOINDEX_BEST_FOR_SLUGS.has(slug)) paths.push(`/best-for/${slug}`);
  }

  for (const route of COMPARE_ROUTES) paths.push(route);

  paths.push("/locations");
  for (const slug of getAllLocationSlugs()) paths.push(`/locations/${slug}`);

  // Deterministic order — important for stable snapshot diffs.
  const unique = Array.from(new Set(paths.map((p) => `${BASE_URL}${p}`))).sort();
  return unique;
}

function loadSnapshot(): Set<string> {
  if (!existsSync(SNAPSHOT_PATH)) return new Set();
  try {
    const raw = readFileSync(SNAPSHOT_PATH, "utf-8");
    const parsed: unknown = JSON.parse(raw);
    if (parsed && typeof parsed === "object" && "urls" in parsed) {
      const urls = (parsed as { urls: unknown }).urls;
      if (Array.isArray(urls))
        return new Set(urls.filter((u): u is string => typeof u === "string"));
    }
    return new Set();
  } catch (err) {
    console.warn(`[indexnow-diff] Could not read snapshot at ${SNAPSHOT_PATH}: ${String(err)}`);
    return new Set();
  }
}

function writeSnapshot(urls: string[]): void {
  mkdirSync(dirname(SNAPSHOT_PATH), { recursive: true });
  const payload = {
    updatedAt: new Date().toISOString(),
    count: urls.length,
    urls,
  };
  writeFileSync(SNAPSHOT_PATH, `${JSON.stringify(payload, null, 2)}\n`, "utf-8");
}

interface SubmitResult {
  ok: boolean;
  status: number;
  statusText: string;
}

async function submitToIndexNow(urls: string[], apiKey: string): Promise<SubmitResult> {
  const payload = {
    host: "prestyj.com",
    key: apiKey,
    keyLocation: `${BASE_URL}/${apiKey}.txt`,
    urlList: urls,
  };

  const startedAt = Date.now();
  const response = await fetch(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(payload),
  });
  const elapsedMs = Date.now() - startedAt;

  console.log(
    JSON.stringify({
      event: "indexnow_submit",
      endpoint: INDEXNOW_ENDPOINT,
      urlCount: urls.length,
      status: response.status,
      statusText: response.statusText,
      elapsedMs,
    }),
  );

  return {
    ok: response.ok || response.status === 202,
    status: response.status,
    statusText: response.statusText,
  };
}

async function main(): Promise<void> {
  const args = process.argv.slice(2);
  const dryRun = args.includes("--dry-run");
  const printAll = args.includes("--print-all");
  const seed = args.includes("--seed");

  const current = discoverAllUrls();
  const previous = loadSnapshot();
  const newUrls = current.filter((u) => !previous.has(u));
  const removedUrls = [...previous].filter((u) => !current.includes(u));

  console.log("IndexNow Diff");
  console.log("=============");
  console.log(`Total indexable URLs: ${current.length}`);
  console.log(`Previously submitted: ${previous.size}`);
  console.log(`New URLs:             ${newUrls.length}`);
  console.log(`Removed URLs:         ${removedUrls.length}`);

  if (printAll) {
    console.log("\nAll discovered URLs:");
    current.forEach((u, i) => console.log(`  ${i + 1}. ${u}`));
  }

  if (newUrls.length > 0) {
    console.log("\nNew URLs to submit:");
    newUrls.forEach((u, i) => console.log(`  ${i + 1}. ${u}`));
  }

  if (removedUrls.length > 0) {
    console.log("\nURLs removed from snapshot (no longer indexable):");
    removedUrls.forEach((u, i) => console.log(`  ${i + 1}. ${u}`));
  }

  if (seed) {
    if (dryRun) {
      console.log("\n[seed --dry-run] Would write snapshot with all current URLs.");
      return;
    }
    writeSnapshot(current);
    console.log(
      `\n✓ Seeded snapshot with ${current.length} URL(s). Future runs will only ping new URLs.`,
    );
    return;
  }

  if (newUrls.length === 0) {
    console.log("\nNothing new to submit. Snapshot up-to-date.");
    // Still rewrite snapshot to drop removed URLs.
    if (!dryRun && removedUrls.length > 0) {
      writeSnapshot(current);
      console.log(`Snapshot updated (${current.length} URLs).`);
    }
    return;
  }

  if (dryRun) {
    console.log("\n[dry-run] Skipping submission and snapshot write.");
    return;
  }

  const apiKey = process.env.INDEXNOW_API_KEY;
  if (!apiKey) {
    console.warn(
      "\n[indexnow-diff] INDEXNOW_API_KEY not set — skipping submission. Snapshot will NOT be updated.",
    );
    process.exitCode = 0;
    return;
  }

  // IndexNow allows up to 10,000 URLs per request. Chunk defensively.
  const CHUNK_SIZE = 1000;
  let allOk = true;
  for (let i = 0; i < newUrls.length; i += CHUNK_SIZE) {
    const chunk = newUrls.slice(i, i + CHUNK_SIZE);
    const result = await submitToIndexNow(chunk, apiKey);
    if (!result.ok) {
      allOk = false;
      console.error(
        `\n✗ Chunk ${i / CHUNK_SIZE + 1} failed: HTTP ${result.status} ${result.statusText}`,
      );
    }
  }

  if (!allOk) {
    console.error("\nOne or more chunks failed. Snapshot NOT updated — will retry on next run.");
    process.exit(1);
  }

  writeSnapshot(current);
  console.log(
    `\n✓ Submitted ${newUrls.length} new URL(s) to IndexNow. Snapshot updated (${current.length} total).`,
  );
}

main().catch((err) => {
  console.error("Error:", err);
  process.exit(1);
});
