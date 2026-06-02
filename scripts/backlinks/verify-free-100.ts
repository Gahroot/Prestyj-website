#!/usr/bin/env npx tsx
/**
 * Free backlink verifier for the 100-backlink goal.
 *
 * Exits 0 only when at least 100 unique third-party, free live placements
 * are reachable and contain an allowed Prestyj backlink.
 */

import { readFileSync } from "node:fs";
import { join } from "node:path";

interface InventoryItem {
  id: string;
  bucket: string;
  target_url: string;
  status: "drafted" | "sent" | "live" | "rejected";
  live_url?: string;
  notes?: string;
}

interface Inventory {
  items: InventoryItem[];
}

interface VerificationResult {
  id: string;
  bucket: string;
  liveUrl: string;
  key: string;
  status: "pass" | "fail";
  reason: string;
  httpStatus?: number;
}

const TARGET = 100;
const TIMEOUT_MS = 12_000;
const ALLOWED_HOST = "prestyj.com";
const ALLOWED_PRESTYJ_PATHS = ["/", "/data"];
const EXCLUDED_BUCKETS = new Set(["embed"]);
const FREE_MARKERS = [
  "free",
  "key-free",
  "existing-key",
  "oss",
  "open-data",
  "wikidata",
  "github",
  "directory",
  "citation",
  "source evidence",
];

function loadInventory(): Inventory {
  const path = join(process.cwd(), "data", "backlinks", "inventory.json");
  return JSON.parse(readFileSync(path, "utf8")) as Inventory;
}

function parseUrl(value: string): URL | null {
  try {
    return new URL(value);
  } catch {
    return null;
  }
}

function canonicalHost(url: URL): string {
  return url.hostname.toLowerCase().replace(/^www\./, "");
}

function isInternalPrestyjUrl(value: string): boolean {
  const url = parseUrl(value);
  return url ? canonicalHost(url) === ALLOWED_HOST : false;
}

function isExcluded(item: InventoryItem): boolean {
  const liveUrl = item.live_url ?? "";
  const targetUrl = item.target_url ?? "";
  const id = item.id.toLowerCase();
  const notes = (item.notes ?? "").toLowerCase();

  return (
    item.status !== "live" ||
    !liveUrl ||
    isInternalPrestyjUrl(liveUrl) ||
    isInternalPrestyjUrl(targetUrl) ||
    EXCLUDED_BUCKETS.has(item.bucket) ||
    id.includes("indexnow") ||
    notes.includes("indexnow") ||
    liveUrl.startsWith("file:") ||
    liveUrl.startsWith("./") ||
    liveUrl.startsWith("/")
  );
}

function isFreePlacement(item: InventoryItem): boolean {
  const haystack = `${item.id} ${item.bucket} ${item.target_url} ${item.live_url ?? ""} ${item.notes ?? ""}`.toLowerCase();
  return FREE_MARKERS.some((marker) => haystack.includes(marker));
}

function canonicalLiveUrlKey(liveUrl: string): string {
  const url = parseUrl(liveUrl);
  if (!url) return liveUrl;

  url.hash = "";
  url.search = "";
  url.hostname = canonicalHost(url);
  url.pathname = url.pathname.replace(/\/+$/, "") || "/";
  return url.toString();
}

function uniquenessKey(liveUrl: string): string {
  const url = parseUrl(liveUrl);
  if (!url) return liveUrl;

  const host = canonicalHost(url);
  if (host === "github.com") {
    const [, owner, repo] = url.pathname.split("/");
    return owner && repo ? `${host}/${owner}/${repo}` : canonicalLiveUrlKey(liveUrl);
  }

  return canonicalLiveUrlKey(liveUrl);
}

function hasAllowedPrestyjLink(text: string): boolean {
  const hrefMatches = [...text.matchAll(/href=["']([^"']+)["']/gi)].map((m) => m[1] ?? "");
  const candidates = hrefMatches.length > 0 ? hrefMatches : [text];

  return candidates.some((candidate) => {
    if (/https?:\/\/prestyj\.com(?:\/data)?(?:[/?#"'\s<>]|$)/i.test(candidate)) return true;
    const url = parseUrl(candidate);
    if (!url || canonicalHost(url) !== ALLOWED_HOST) return false;
    return ALLOWED_PRESTYJ_PATHS.includes(url.pathname.replace(/\/$/, "") || "/");
  });
}

async function fetchWithTimeout(url: string): Promise<{ status: number; text: string }> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        "user-agent": "PrestyjBacklinkVerifier/1.0 (+https://prestyj.com)",
        accept: "text/html,text/plain,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      },
      redirect: "follow",
    });
    const text = await response.text();
    return { status: response.status, text };
  } finally {
    clearTimeout(timeout);
  }
}

async function verifyItem(item: InventoryItem): Promise<VerificationResult> {
  const liveUrl = item.live_url ?? "";
  const key = uniquenessKey(liveUrl);

  try {
    const response = await fetchWithTimeout(liveUrl);
    if (response.status < 200 || response.status >= 400) {
      return { id: item.id, bucket: item.bucket, liveUrl, key, status: "fail", reason: `HTTP ${response.status}`, httpStatus: response.status };
    }
    if (!hasAllowedPrestyjLink(response.text)) {
      return { id: item.id, bucket: item.bucket, liveUrl, key, status: "fail", reason: "No allowed Prestyj link found", httpStatus: response.status };
    }
    return { id: item.id, bucket: item.bucket, liveUrl, key, status: "pass", reason: "Verified", httpStatus: response.status };
  } catch (error) {
    return { id: item.id, bucket: item.bucket, liveUrl, key, status: "fail", reason: error instanceof Error ? error.message : "Fetch failed" };
  }
}

function printTable(results: VerificationResult[]): void {
  console.log("\nFree 100 backlink verifier");
  console.log("─".repeat(120));
  console.log(`${"OK".padEnd(4)} ${"HTTP".padEnd(5)} ${"KEY".padEnd(32)} ${"ID".padEnd(42)} REASON`);
  console.log("─".repeat(120));
  for (const result of results) {
    console.log(
      `${(result.status === "pass" ? "✓" : "✗").padEnd(4)} ${String(result.httpStatus ?? "-").padEnd(5)} ${result.key.slice(0, 32).padEnd(32)} ${result.id.slice(0, 42).padEnd(42)} ${result.reason}`,
    );
  }
  console.log("─".repeat(120));
}

async function main(): Promise<void> {
  const inventory = loadInventory();
  const candidates = inventory.items.filter((item) => !isExcluded(item) && isFreePlacement(item));
  const uniqueCandidates = [...new Map(candidates.map((item) => [canonicalLiveUrlKey(item.live_url ?? ""), item])).values()];
  const results = await Promise.all(uniqueCandidates.map(verifyItem));
  const passed = results.filter((result) => result.status === "pass");

  printTable(results);

  const summary = {
    target: TARGET,
    inventory_items: inventory.items.length,
    eligible_live_free_third_party_items: candidates.length,
    unique_live_url_keys_checked: uniqueCandidates.length,
    unique_placement_basis: "canonical live URL (GitHub repositories remain repository-level)",
    verified_backlinks: passed.length,
    failed_checks: results.length - passed.length,
    allowed_prestyj_links: ["https://prestyj.com", "https://prestyj.com/data", "prestyj.com canonical paths"],
    pass: passed.length >= TARGET,
  };

  console.log(JSON.stringify(summary, null, 2));

  if (summary.pass && summary.verified_backlinks >= TARGET) {
    console.log(`✅ Verified ${passed.length} free third-party backlinks.`);
    process.exit(0);
  }

  console.log(`❌ ${Math.max(0, TARGET - passed.length)} verified backlink(s) short of ${TARGET}.`);
  process.exit(1);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
