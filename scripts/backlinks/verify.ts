#!/usr/bin/env npx tsx
/**
 * Backlink Goal verifier. Reads:
 *   - data/backlinks/snapshot-latest.csv (referring-domain snapshot from Bing/GSC/Ahrefs)
 *   - data/backlinks/inventory.json      (links the automation has produced)
 *
 * Exits 0 only when EVERY success criterion is met:
 *   ≥1000 unique referring domains
 *   ≥50% with DR≥30 (best-effort with available data)
 *   ≥20 awesome-list, ≥3 wiki, ≥30 press, ≥50 directory,
 *   ≥100 embed, ≥8 third-party dataset-directory placements
 *
 * Otherwise exits 1 and prints a precise gap report.
 */

import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

interface SnapshotRow {
  domain: string;
  referring_urls: number;
  dr_estimate: string;
  source: string;
}

interface InventoryItem {
  id: string;
  bucket:
    | "awesome-list"
    | "wikipedia"
    | "press"
    | "journalist"
    | "researcher"
    | "embed"
    | "directory"
    | "dataset-directory"
    // self-owned GitHub/Pages/npm mirrors — counted as footprint, never a win
    | "self-owned-mirror"
    | "github-gist"
    | "github-release-open-data"
    | "github-release-package"
    | "npm-package"
    | "resource-page"
    | "other";
  target_url: string;
  status: "drafted" | "sent" | "live" | "rejected";
  live_url?: string;
}

interface Inventory {
  items: InventoryItem[];
}

const TARGETS = {
  total: 1000,
  dr30_pct: 50,
  awesomeList: 20,
  wikipedia: 3,
  press: 30,
  directory: 50,
  embed: 100,
  // Third-party dataset directories are EARNED placements (Zenodo, Figshare,
  // Harvard Dataverse, Mendeley, Hugging Face, Kaggle, data.world, OpenML) —
  // not self-owned mirrors. The prepared bundle covers 8 destinations.
  datasetDirectory: 8,
} as const;

function loadSnapshot(): SnapshotRow[] {
  const path = join(process.cwd(), "data", "backlinks", "snapshot-latest.csv");
  if (!existsSync(path)) return [];
  const text = readFileSync(path, "utf8");
  const lines = text.split(/\r?\n/).filter((l) => l.length > 0);
  if (lines.length <= 1) return [];
  const header = (lines[0] ?? "").split(",");
  const idx = (name: string) => header.findIndex((h) => h === name);
  const dI = idx("domain");
  const rI = idx("referring_urls");
  const drI = idx("dr_estimate");
  const sI = idx("source");
  const out: SnapshotRow[] = [];
  for (let i = 1; i < lines.length; i++) {
    const cells = (lines[i] ?? "").split(",");
    const domain = cells[dI];
    if (!domain) continue;
    out.push({
      domain,
      referring_urls: Number(cells[rI] ?? 0) || 0,
      dr_estimate: cells[drI] ?? "",
      source: cells[sI] ?? "",
    });
  }
  return out;
}

function loadInventory(): Inventory {
  const path = join(process.cwd(), "data", "backlinks", "inventory.json");
  if (!existsSync(path)) return { items: [] };
  try {
    return JSON.parse(readFileSync(path, "utf8")) as Inventory;
  } catch {
    return { items: [] };
  }
}

function countLive(inv: Inventory, bucket: InventoryItem["bucket"]): number {
  return inv.items.filter((i) => i.bucket === bucket && i.status === "live").length;
}

function estimateDr30Pct(rows: SnapshotRow[]): {
  withDrData: number;
  dr30: number;
  pctOfKnown: number;
} {
  const known = rows.filter((r) => r.dr_estimate !== "");
  const dr30 = known.filter((r) => Number(r.dr_estimate) >= 30).length;
  return {
    withDrData: known.length,
    dr30,
    pctOfKnown: known.length === 0 ? 0 : Math.round((dr30 / known.length) * 100),
  };
}

function main(): void {
  const rows = loadSnapshot();
  const inv = loadInventory();
  const dr = estimateDr30Pct(rows);

  const counts = {
    awesomeList: countLive(inv, "awesome-list"),
    wikipedia: countLive(inv, "wikipedia"),
    press: countLive(inv, "press"),
    directory: countLive(inv, "directory"),
    embed: countLive(inv, "embed"),
    // Only REAL third-party repositories count here. Self-owned GitHub mirrors
    // were reclassified to bucket "self-owned-mirror" and are deliberately
    // excluded — they are footprint, not a win.
    datasetDirectory: countLive(inv, "dataset-directory"),
  };

  const checks: Array<{ label: string; have: number; want: number; ok: boolean }> = [
    {
      label: "Unique referring domains",
      have: rows.length,
      want: TARGETS.total,
      ok: rows.length >= TARGETS.total,
    },
    {
      label: `DR≥30 share (of ${dr.withDrData} with DR data)`,
      have: dr.pctOfKnown,
      want: TARGETS.dr30_pct,
      ok: dr.withDrData > 0 ? dr.pctOfKnown >= TARGETS.dr30_pct : false,
    },
    {
      label: "Awesome-list merges (live)",
      have: counts.awesomeList,
      want: TARGETS.awesomeList,
      ok: counts.awesomeList >= TARGETS.awesomeList,
    },
    {
      label: "Wiki citations (live)",
      have: counts.wikipedia,
      want: TARGETS.wikipedia,
      ok: counts.wikipedia >= TARGETS.wikipedia,
    },
    {
      label: "Press / journalist (live)",
      have: counts.press,
      want: TARGETS.press,
      ok: counts.press >= TARGETS.press,
    },
    {
      label: "Directories (live)",
      have: counts.directory,
      want: TARGETS.directory,
      ok: counts.directory >= TARGETS.directory,
    },
    {
      label: "Embed installations (live)",
      have: counts.embed,
      want: TARGETS.embed,
      ok: counts.embed >= TARGETS.embed,
    },
    {
      label: "Third-party dataset directories (live)",
      have: counts.datasetDirectory,
      want: TARGETS.datasetDirectory,
      ok: counts.datasetDirectory >= TARGETS.datasetDirectory,
    },
  ];

  console.log(`\n${"━".repeat(64)}`);
  console.log("Prestyj backlink verifier");
  console.log("━".repeat(64));
  for (const c of checks) {
    const tick = c.ok ? "✓" : "✗";
    const pad = c.label.padEnd(40, " ");
    console.log(`  ${tick}  ${pad}${String(c.have).padStart(5)} / ${c.want}`);
  }
  console.log("━".repeat(64));

  const allOk = checks.every((c) => c.ok);
  if (allOk) {
    console.log("✅ All success criteria met.");
    process.exit(0);
  }

  const gap = TARGETS.total - rows.length;
  console.log(`❌ ${gap > 0 ? gap : 0} referring domain(s) short of the 1000-domain target.`);
  console.log(
    `   Next: re-export from Bing Webmaster Tools → data/backlinks/bing-export-YYYY-MM-DD.csv`,
  );
  console.log(
    `         then  npm run backlinks:snapshot data/backlinks/bing-export-YYYY-MM-DD.csv`,
  );
  process.exit(1);
}

main();
