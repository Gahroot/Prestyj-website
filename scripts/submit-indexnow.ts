#!/usr/bin/env npx tsx
/** Submit only canonical institutional URLs, after verifying their live indexability. */
import { config as loadEnv } from "dotenv";
import { getIndexNowUrls, isIndexNowUrl, submitIndexNowUrls } from "./seo/indexnow-urls";

loadEnv({ path: ".env.local", quiet: true });
loadEnv({ quiet: true });

async function main(signal: AbortSignal): Promise<void> {
  const args = process.argv.slice(2);
  const dryRun = args.includes("--dry-run");
  const urlIndex = args.indexOf("--url");
  const singleUrl = urlIndex === -1 ? undefined : args[urlIndex + 1];
  if (urlIndex !== -1 && (!singleUrl || !isIndexNowUrl(singleUrl))) {
    console.error("--url requires a canonical institutional URL from the sitemap allowlist.");
    process.exitCode = 1;
    return;
  }
  const urls = singleUrl ? [singleUrl] : getIndexNowUrls();
  console.log(`Total URLs: ${urls.length}`);
  if (dryRun) {
    urls.forEach((url) => console.log(url));
    console.log("[dry-run] No network requests, submission or snapshot changes.");
    return;
  }
  const key = process.env.INDEXNOW_API_KEY;
  if (!key || !(await submitIndexNowUrls(urls, key, signal))) {
    console.error("IndexNow submission failed; check credentials and live indexability.");
    process.exitCode = 1;
    return;
  }
  console.log(
    `IndexNow accepted ${urls.length} URL(s). This does not guarantee indexing or ranking. Google does not use IndexNow.`,
  );
}

main(AbortSignal.timeout(120_000)).catch(() => {
  // Network exceptions can include the ownership URL. Keep credentials out of logs.
  console.error("IndexNow request failed or timed out; no automatic retry was attempted.");
  process.exitCode = 1;
});
