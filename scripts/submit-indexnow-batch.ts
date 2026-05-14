#!/usr/bin/env npx tsx
/**
 * One-off batch submission for newly added pages:
 *  - 6 content engine variant landing pages
 *  - All new compare pages not yet present in the canonical IndexNow list
 *
 * Reads INDEXNOW_API_KEY from env (.env.local is loaded via `tsx --env-file`).
 */

const BASE_URL = "https://prestyj.com";

const contentEngineVariants = [
  "/done-for-you-social-media",
  "/1000-posts-per-month",
  "/ai-content-department",
  "/social-media-on-autopilot",
  "/ai-social-media-management",
  "/managed-social-media-service",
];

const newCompareRoutes = [
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
  "/compare/prestyj-vs-junior-social-hire",
  "/compare/prestyj-vs-later",
  "/compare/prestyj-vs-opus-clip",
  "/compare/prestyj-vs-social-media-agency",
  "/compare/prestyj-vs-sprout-social",
  "/compare/prestyj-vs-synthesia",
  "/compare/resimpli-vs-prestyj",
  "/compare/structurely-vs-prestyj",
];

const urlList = [...contentEngineVariants, ...newCompareRoutes].map(
  (path) => `${BASE_URL}${path}`,
);

async function main() {
  const key = process.env.INDEXNOW_API_KEY;
  if (!key) {
    console.error("Error: INDEXNOW_API_KEY not set");
    process.exit(1);
  }

  console.log(`Submitting ${urlList.length} URLs to IndexNow:`);
  urlList.forEach((u, i) => console.log(`  ${i + 1}. ${u}`));

  const payload = {
    host: "prestyj.com",
    key,
    keyLocation: `${BASE_URL}/${key}.txt`,
    urlList,
  };

  const response = await fetch("https://yandex.com/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(payload),
  });

  const text = await response.text();
  console.log(`\nStatus: ${response.status} ${response.statusText}`);
  console.log(`Body: ${text || "(empty)"}`);

  if (response.ok || response.status === 202) {
    console.log(`\n✓ Successfully submitted ${urlList.length} URLs to IndexNow`);
  } else {
    console.error(`\n✗ Submission failed`);
    process.exit(1);
  }
}

main().catch((err) => {
  console.error("Error:", err);
  process.exit(1);
});
