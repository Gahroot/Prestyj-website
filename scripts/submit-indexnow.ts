#!/usr/bin/env npx tsx
/**
 * Submit all site URLs to IndexNow
 *
 * Dynamically discovers all URLs from content sources and slug registries.
 *
 * Usage:
 *   npm run indexnow              # Submit all URLs
 *   npm run indexnow:dry          # Dry run - list URLs
 *   npm run indexnow -- --url URL # Submit a single URL
 */

import { readdirSync } from "fs";
import { join } from "path";
import { getAllAlternativeSlugs } from "../src/lib/alternatives";
import { getAllSolutionSlugs } from "../src/lib/solutions";
import { getAllBestForSlugs } from "../src/lib/best-for";
import { getAllStatIds } from "../src/lib/statistics";
import { getAllEmbeddableCalculatorSlugs } from "../src/lib/calculator/embeddable";

const INDEXNOW_ENDPOINT = "https://yandex.com/indexnow";
const BASE_URL = "https://prestyj.com";

interface IndexNowSubmission {
  host: string;
  key: string;
  keyLocation: string;
  urlList: string[];
}

function getBlogSlugs(): string[] {
  const blogDir = join(process.cwd(), "content", "blog");
  return readdirSync(blogDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

function getAllUrls(): string[] {
  const urls: string[] = [];

  // Static routes
  urls.push(
    BASE_URL,
    `${BASE_URL}/book-demo`,
    `${BASE_URL}/blog`,
    `${BASE_URL}/results`,
    `${BASE_URL}/alternatives`,
    `${BASE_URL}/best-for`,
    `${BASE_URL}/privacy`,
    `${BASE_URL}/terms`,
    `${BASE_URL}/lead-magnet`,
    `${BASE_URL}/ai-call-handling-calculator`,
    `${BASE_URL}/team-commission-calculator`,
    `${BASE_URL}/platform`,
    `${BASE_URL}/faq`,
    `${BASE_URL}/pricing`,
    `${BASE_URL}/samples`,
    `${BASE_URL}/free-ads`,
    `${BASE_URL}/free-ads/contractors`,
    `${BASE_URL}/free-ads/hvac`,
    `${BASE_URL}/free-ads/plumbers`,
    `${BASE_URL}/free-ads/roofers`,
    `${BASE_URL}/bulk-video-ad-pricing`,
    `${BASE_URL}/batch-video-ads`,
    `${BASE_URL}/get-ads`,
    `${BASE_URL}/get-ads/contractors`,
    `${BASE_URL}/get-ads/hvac`,
    `${BASE_URL}/get-ads/plumbers`,
    `${BASE_URL}/get-ads/roofers`,
    `${BASE_URL}/real-estate-roi-calculator`,
    `${BASE_URL}/lead-magnet/brokerage-playbook`,
    `${BASE_URL}/lead-magnet/reactivate-leads`,
    `${BASE_URL}/demo`,
    `${BASE_URL}/ad-fatigue-solution`,
    `${BASE_URL}/how-many-ad-creatives-to-test`,
    `${BASE_URL}/how-often-refresh-ad-creative`,
    `${BASE_URL}/why-facebook-ads-stop-working`,
    `${BASE_URL}/ai-ads-vs-human-ads`,
    // Content engine variants
    `${BASE_URL}/done-for-you-social-media`,
    `${BASE_URL}/1000-posts-per-month`,
    `${BASE_URL}/ai-content-department`,
    `${BASE_URL}/social-media-on-autopilot`,
    `${BASE_URL}/ai-social-media-management`,
    `${BASE_URL}/managed-social-media-service`,
    // Open dataset + statistics permalinks + embed surfaces (added 2026-05)
    `${BASE_URL}/data`,
    `${BASE_URL}/data/statistics.csv`,
    `${BASE_URL}/data/statistics.json`,
    `${BASE_URL}/api/statistics`,
    `${BASE_URL}/feed/stats.xml`,
    `${BASE_URL}/llms.txt`,
    `${BASE_URL}/statistics`,
  );

  // Per-stat permalink pages — every stat gets its own citable URL
  for (const id of getAllStatIds()) {
    urls.push(`${BASE_URL}/stat/${id}`);
    urls.push(`${BASE_URL}/embed/stat/${id}`);
  }

  // Calculator embed iframes
  for (const slug of getAllEmbeddableCalculatorSlugs()) {
    urls.push(`${BASE_URL}/embed/calculator/${slug}`);
  }

  // Blog posts - scan content/blog directory
  for (const slug of getBlogSlugs()) {
    urls.push(`${BASE_URL}/blog/${slug}`);
  }

  // Alternative pages
  for (const slug of getAllAlternativeSlugs()) {
    urls.push(`${BASE_URL}/alternatives/${slug}`);
  }

  // Solution pages
  for (const slug of getAllSolutionSlugs()) {
    urls.push(`${BASE_URL}/solutions/${slug}`);
  }

  // Best-for pages (excluding noindex pages)
  const noindexSlugs = ["solo-agents", "new-agents"];
  for (const slug of getAllBestForSlugs()) {
    if (!noindexSlugs.includes(slug)) {
      urls.push(`${BASE_URL}/best-for/${slug}`);
    }
  }

  // Compare pages
  const compareRoutes = [
    "/compare/prestyj-vs-conversica",
    "/compare/prestyj-vs-structurely",
    "/compare/prestyj-vs-drift",
    "/compare/prestyj-vs-internal-isa-team",
    "/compare/prestyj-vs-offshore-isa",
    "/compare/prestyj-vs-answering-service",
    "/compare/prestyj-vs-isa",
    "/compare/prestyj-vs-ylopo",
    "/compare/ai-consultant-vs-diy-ai",
    // AI consulting comparison pages
    "/compare/ai-consultant-vs-ai-agency",
    "/compare/fractional-ai-consultant-vs-full-time-employee",
    "/compare/ai-implementation-partner-vs-consultant",
    "/compare/ai-consultant-vs-freelancer",
    "/compare/ai-consultant-vs-big4-consulting",
    "/compare/ai-consultant-roi-calculator",
    // AI vs Traditional comparison
    "/compare/ai-lead-generation-vs-traditional",
    // Batch video ads competitors
    "/compare/prestyj-vs-arcads",
    "/compare/prestyj-vs-creatify",
    "/compare/prestyj-vs-heygen",
    "/compare/prestyj-vs-billo",
    "/compare/prestyj-vs-fiverr-video-ads",
    "/compare/prestyj-vs-ai-avatar-ads",
    "/compare/prestyj-vs-ugc-creators",
    "/compare/prestyj-vs-production-agencies",
    "/compare/prestyj-vs-pencil",
    // Social media / content competitors
    "/compare/alanna-ai-vs-prestyj",
    "/compare/follow-up-boss-vs-prestyj",
    "/compare/lofty-vs-prestyj",
    "/compare/prestyj-vs-adcreative-ai",
    "/compare/prestyj-vs-buffer",
    "/compare/prestyj-vs-canva",
    "/compare/prestyj-vs-capcut",
    "/compare/prestyj-vs-fiverr-social-media",
    "/compare/prestyj-vs-hootsuite",
    "/compare/prestyj-vs-invideo",
    "/compare/prestyj-vs-later",
    "/compare/prestyj-vs-opus-clip",
    "/compare/prestyj-vs-social-media-agency",
    "/compare/prestyj-vs-sprout-social",
    "/compare/prestyj-vs-synthesia",
    "/compare/resimpli-vs-prestyj",
    "/compare/structurely-vs-prestyj",
    // Programmatic batch-video-ad matrix
    "/compare/prestyj-vs-agency-video-for-mortgage-brokers",
    "/compare/prestyj-vs-agency-video-for-service-business-owners",
    "/compare/prestyj-vs-ai-avatar-tool-video-for-agency-owners",
    "/compare/prestyj-vs-ai-avatar-tool-video-for-real-estate-teams",
    "/compare/prestyj-vs-fiverr-video-for-media-buyers",
    "/compare/prestyj-vs-fiverr-video-for-plumbing-contractors",
    "/compare/prestyj-vs-in-house-video-for-cmos",
    "/compare/prestyj-vs-in-house-video-for-roofing-contractors",
    "/compare/prestyj-vs-ugc-creator-video-for-coaches",
    "/compare/prestyj-vs-ugc-creator-video-for-hvac-companies",
    // Programmatic social-vertical matrix
    "/compare/prestyj-vs-fiverr-for-creators",
    "/compare/prestyj-vs-fiverr-for-ecommerce-brands",
    "/compare/prestyj-vs-in-house-hire-for-cmos",
    "/compare/prestyj-vs-in-house-hire-for-coaches",
    "/compare/prestyj-vs-in-house-hire-for-saas-founders",
    "/compare/prestyj-vs-smma-for-consultants",
    "/compare/prestyj-vs-smma-for-media-buyers",
    "/compare/prestyj-vs-smma-for-service-business-owners",
    "/compare/prestyj-vs-va-plus-templates-for-agency-owners",
    "/compare/prestyj-vs-va-plus-templates-for-personal-brands",
  ];
  urls.push(...compareRoutes.map((route) => `${BASE_URL}${route}`));

  return urls;
}

async function submitUrls(urls: string[], key: string): Promise<void> {
  const payload: IndexNowSubmission = {
    host: "prestyj.com",
    key,
    keyLocation: `${BASE_URL}/${key}.txt`,
    urlList: urls,
  };

  console.log(`\nSubmitting ${urls.length} URLs to IndexNow...`);
  console.log(`Key location: ${payload.keyLocation}\n`);

  const response = await fetch(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(payload),
  });

  if (response.ok || response.status === 202) {
    console.log(`✓ Successfully submitted ${urls.length} URLs to IndexNow`);
    console.log(`  Status: ${response.status} ${response.statusText}`);
    console.log(`\nSearch engines notified: Bing, Yandex, Naver, Seznam, Yep`);
    console.log(`Note: Google does not support IndexNow. Use Search Console for Google.`);
  } else {
    const errorMessages: Record<number, string> = {
      400: "Invalid request format",
      403: "Key not valid or not matching key location",
      422: "URLs don't belong to the host or key not found at keyLocation",
      429: "Too many requests (rate limited)",
    };

    console.error(`✗ Failed to submit URLs`);
    console.error(`  Error: ${errorMessages[response.status] || `HTTP ${response.status}`}`);
    process.exit(1);
  }
}

async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes("--dry-run");
  const singleUrlIndex = args.indexOf("--url");
  const singleUrl = singleUrlIndex !== -1 ? args[singleUrlIndex + 1] : undefined;

  const key = process.env.INDEXNOW_API_KEY;

  if (!key && !dryRun) {
    console.error("Error: INDEXNOW_API_KEY environment variable not set");
    console.error("\nUsage:");
    console.error("  INDEXNOW_API_KEY=your-key npx tsx scripts/submit-indexnow.ts");
    console.error(
      "  INDEXNOW_API_KEY=your-key npx tsx scripts/submit-indexnow.ts --url https://prestyj.com/blog/example",
    );
    console.error("  npx tsx scripts/submit-indexnow.ts --dry-run");
    process.exit(1);
  }

  // Single URL submission
  if (singleUrl) {
    if (dryRun) {
      console.log("Dry run - would submit:");
      console.log(`  ${singleUrl}`);
      return;
    }
    await submitUrls([singleUrl], key!);
    return;
  }

  // All URLs
  const urls = getAllUrls();

  console.log("IndexNow URL Submission");
  console.log("=======================\n");
  console.log(`Total URLs: ${urls.length}\n`);

  if (dryRun) {
    console.log("Dry run - URLs that would be submitted:\n");
    urls.forEach((url, i) => console.log(`  ${i + 1}. ${url}`));
    console.log("\nRun without --dry-run to submit.");
    return;
  }

  await submitUrls(urls, key!);
}

main().catch((error) => {
  console.error("Error:", error);
  process.exit(1);
});
