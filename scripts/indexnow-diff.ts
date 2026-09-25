#!/usr/bin/env npx tsx
/** Submit new canonical institutional URLs only. Existing URLs can be refreshed with indexnow -- --url. */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { config as loadEnv } from "dotenv";
import { z } from "zod";
import { getIndexNowUrls, submitIndexNowUrls, verifyIndexNowUrls } from "./seo/indexnow-urls";

loadEnv({ path: ".env.local", quiet: true });
loadEnv({ quiet: true });
const snapshotPath = join(process.cwd(), "data/indexnow/submitted-urls.json");
const snapshotSchema = z.object({ urls: z.array(z.string()) });

function loadSnapshot(): Set<string> {
  if (!existsSync(snapshotPath)) return new Set();
  // A corrupt snapshot must stop the run, not resubmit the entire site.
  return new Set(snapshotSchema.parse(JSON.parse(readFileSync(snapshotPath, "utf8"))).urls);
}

function writeSnapshot(urls: string[]): void {
  mkdirSync(dirname(snapshotPath), { recursive: true });
  writeFileSync(
    snapshotPath,
    `${JSON.stringify({ updatedAt: new Date().toISOString(), count: urls.length, urls }, null, 2)}\n`,
  );
}

async function main(signal: AbortSignal): Promise<void> {
  const args = process.argv.slice(2);
  const dryRun = args.includes("--dry-run");
  const seed = args.includes("--seed");
  const current = getIndexNowUrls();
  const previous = loadSnapshot();
  const newUrls = current.filter((url) => !previous.has(url));
  const removedCount = [...previous].filter((url) => !current.includes(url)).length;

  console.log(`Total indexable URLs: ${current.length}`);
  console.log(`Previously submitted: ${previous.size}`);
  console.log(`New URLs: ${newUrls.length}`);
  console.log(`Removed URLs: ${removedCount}`);
  (args.includes("--print-all") ? current : newUrls).forEach((url) => console.log(url));
  if (dryRun) {
    console.log("[dry-run] No network requests, submission or snapshot changes.");
    return;
  }
  if (seed) {
    if (!(await verifyIndexNowUrls(current, signal))) {
      console.error("Live verification failed; snapshot unchanged.");
      process.exitCode = 1;
      return;
    }
    writeSnapshot(current);
    console.log("Snapshot seeded after live verification. No URLs submitted.");
    return;
  }
  if (newUrls.length === 0) {
    console.log("No new URLs to submit. Snapshot unchanged.");
    return;
  }
  const key = process.env.INDEXNOW_API_KEY;
  if (!key || !(await submitIndexNowUrls(newUrls, key, signal))) {
    console.error("IndexNow submission failed; snapshot unchanged.");
    process.exitCode = 1;
    return;
  }
  writeSnapshot(current);
  console.log(
    `IndexNow accepted ${newUrls.length} new URL(s); snapshot updated. Indexing is not guaranteed.`,
  );
}

main(AbortSignal.timeout(120_000)).catch(() => {
  console.error("IndexNow failed: invalid snapshot, network error or timeout. Snapshot unchanged.");
  process.exitCode = 1;
});
