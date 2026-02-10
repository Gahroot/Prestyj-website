#!/usr/bin/env npx tsx
/**
 * Submit all site URLs to IndexNow
 *
 * Usage:
 *   INDEXNOW_API_KEY=your-key npx tsx scripts/submit-indexnow.ts
 *
 * Or with the npm script:
 *   INDEXNOW_API_KEY=your-key npm run indexnow
 *
 * Options:
 *   --dry-run  List URLs without submitting
 *   --url URL  Submit a single URL only
 */

const INDEXNOW_ENDPOINT = "https://api.indexnow.org/IndexNow";
const BASE_URL = "https://www.prestyj.com";

interface IndexNowSubmission {
  host: string;
  key: string;
  keyLocation: string;
  urlList: string[];
}

// Static routes
const staticRoutes = [
  "",
  "/book-demo",
  "/blog",
  "/results",
  "/alternatives",
  "/best-for",
  "/privacy",
  "/terms",
];

// Blog posts (hardcoded list - update as needed or import from source)
const blogSlugs = [
  "speed-to-lead-statistics",
  "best-ai-tools-real-estate",
  "enterprise-lead-infrastructure",
  "isa-cost-2026",
  "isa-vs-ai",
  "why-leads-go-cold",
  "lead-reactivation-guide",
  "build-vs-buy-ai-sales-agents-real-estate",
  "fair-housing-ai-bias-enterprise-brokerages",
  "designing-lead-response-operations-50-offices",
  "unit-economics-ai-lead-response",
  "speed-to-lead",
  "ai-sales-agents-explained",
  "ai-receptionist-roi-by-industry",
  "hipaa-compliant-ai-receptionist",
  "ai-receptionist-vs-human-cost-2026",
  // New 2026 blog posts
  "small-business-ai-receptionist-2026",
  "ai-cold-outreach-vs-human-2026",
  "bilingual-ai-receptionist-2026",
  "ai-voice-agent-integration-guide-2026",
];

// Alternative pages
const alternativeSlugs = [
  "ylopo",
  "human-isa",
  "structurely",
  "cinc",
  "follow-up-boss",
  "real-geeks",
  "conversica",
  "internal-isa",
  "drift",
  "bland-ai",
  "vapi",
];

// Solution pages
const solutionSlugs = ["speed-to-lead", "lead-reactivation"];

// Best-for pages (excluding noindex pages)
const bestForSlugs = [
  "real-estate-teams",
  "isa-replacement",
  "real-estate-franchises",
  "regional-brokerage-networks",
  "pe-backed-platforms",
  "commercial-real-estate",
  "ai-voice-receptionist",
  "ai-voice-receptionist-dental",
  "ai-voice-receptionist-legal",
  "ai-voice-receptionist-medical",
  "ai-voice-receptionist-insurance",
];

// Compare pages
const compareRoutes = [
  "/compare/prestyj-vs-isa",
  "/compare/prestyj-vs-ylopo",
  "/compare/prestyj-vs-conversica",
  "/compare/prestyj-vs-structurely",
  "/compare/prestyj-vs-drift",
  "/compare/prestyj-vs-internal-isa-team",
  "/compare/prestyj-vs-offshore-isa",
];

function getAllUrls(): string[] {
  const urls: string[] = [];

  urls.push(...staticRoutes.map((route) => `${BASE_URL}${route}`));
  urls.push(...blogSlugs.map((slug) => `${BASE_URL}/blog/${slug}`));
  urls.push(
    ...alternativeSlugs.map((slug) => `${BASE_URL}/alternatives/${slug}`)
  );
  urls.push(...solutionSlugs.map((slug) => `${BASE_URL}/solutions/${slug}`));
  urls.push(...bestForSlugs.map((slug) => `${BASE_URL}/best-for/${slug}`));
  urls.push(...compareRoutes.map((route) => `${BASE_URL}${route}`));

  return urls;
}

async function submitUrls(urls: string[], key: string): Promise<void> {
  const payload: IndexNowSubmission = {
    host: "www.prestyj.com",
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
    console.log(
      `  Status: ${response.status} ${response.statusText}`
    );
    console.log(`\nSearch engines notified: Bing, Yandex, Naver, Seznam, Yep`);
    console.log(
      `Note: Google does not support IndexNow. Use Search Console for Google.`
    );
  } else {
    const errorMessages: Record<number, string> = {
      400: "Invalid request format",
      403: "Key not valid or not matching key location",
      422: "URLs don't belong to the host or key not found at keyLocation",
      429: "Too many requests (rate limited)",
    };

    console.error(`✗ Failed to submit URLs`);
    console.error(
      `  Error: ${errorMessages[response.status] || `HTTP ${response.status}`}`
    );
    process.exit(1);
  }
}

async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes("--dry-run");
  const singleUrlIndex = args.indexOf("--url");
  const singleUrl =
    singleUrlIndex !== -1 ? args[singleUrlIndex + 1] : undefined;

  const key = process.env.INDEXNOW_API_KEY;

  if (!key && !dryRun) {
    console.error("Error: INDEXNOW_API_KEY environment variable not set");
    console.error("\nUsage:");
    console.error(
      "  INDEXNOW_API_KEY=your-key npx tsx scripts/submit-indexnow.ts"
    );
    console.error(
      "  INDEXNOW_API_KEY=your-key npx tsx scripts/submit-indexnow.ts --url https://www.prestyj.com/blog/example"
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
