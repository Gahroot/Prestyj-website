#!/usr/bin/env npx tsx
/**
 * Normalize a backlink CSV export (Bing Webmaster Tools / GSC / Ahrefs WMT)
 * into the canonical snapshot format consumed by the verifier.
 *
 * Usage:
 *   tsx scripts/backlinks/snapshot.ts <csv-path>
 *   tsx scripts/backlinks/snapshot.ts data/backlinks/bing-export-2026-05-22.csv
 *
 * Output:
 *   data/backlinks/snapshot-YYYY-MM-DD.csv with columns:
 *     domain, last_seen, referring_urls, dr_estimate, dofollow_pct, source
 *   data/backlinks/snapshot-latest.csv copy of the same.
 */

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";

interface SnapshotRow {
  domain: string;
  last_seen: string;
  referring_urls: number;
  dr_estimate: string;
  dofollow_pct: string;
  source: string;
}

const SNAPSHOT_HEADER = [
  "domain",
  "last_seen",
  "referring_urls",
  "dr_estimate",
  "dofollow_pct",
  "source",
] as const;

function stripBom(text: string): string {
  return text.charCodeAt(0) === 0xfeff ? text.slice(1) : text;
}

function parseCsv(text: string): string[][] {
  // Minimal RFC 4180 parser — handles quoted fields with embedded commas + escaped quotes.
  const rows: string[][] = [];
  let field = "";
  let row: string[] = [];
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (inQuotes) {
      if (ch === '"' && text[i + 1] === '"') {
        field += '"';
        i++;
      } else if (ch === '"') {
        inQuotes = false;
      } else {
        field += ch;
      }
    } else {
      if (ch === '"') inQuotes = true;
      else if (ch === ",") {
        row.push(field);
        field = "";
      } else if (ch === "\r") {
        // skip
      } else if (ch === "\n") {
        row.push(field);
        rows.push(row);
        field = "";
        row = [];
      } else {
        field += ch;
      }
    }
  }
  if (field !== "" || row.length > 0) {
    row.push(field);
    rows.push(row);
  }
  return rows.filter((r) => r.some((c) => c.trim() !== ""));
}

function normalizeDomain(raw: string): string {
  // Strip protocol, www, trailing slashes, port, path.
  let s = raw.trim().toLowerCase();
  s = s.replace(/^https?:\/\//, "");
  s = s.replace(/^www\./, "");
  s = s.split("/")[0] ?? s;
  s = s.split(":")[0] ?? s;
  return s;
}

function detectSource(headers: string[]): string {
  const joined = headers.join("|").toLowerCase();
  if (joined.includes("backlinks count")) return "bing-webmaster-tools";
  if (joined.includes("linking sites")) return "google-search-console";
  if (joined.includes("referring domain") && joined.includes("dr")) return "ahrefs";
  if (joined.includes("referring") && joined.includes("page")) return "ahrefs-or-moz";
  return "unknown";
}

function ingest(csvPath: string): SnapshotRow[] {
  const raw = stripBom(readFileSync(csvPath, "utf8"));
  const rows = parseCsv(raw);
  if (rows.length === 0) return [];
  const headers = rows[0]?.map((h) => h.trim()) ?? [];
  const source = detectSource(headers);

  // Column index discovery — be flexible
  const domainIdx = headers.findIndex((h) => /domain|site/i.test(h));
  const backlinksIdx = headers.findIndex((h) => /backlinks|referring (urls?|pages?)/i.test(h));
  const drIdx = headers.findIndex((h) => /^(dr|domain rating|da|domain authority)$/i.test(h));
  const dofollowIdx = headers.findIndex((h) => /dofollow/i.test(h));
  const lastSeenIdx = headers.findIndex((h) => /last seen|first seen|date/i.test(h));

  if (domainIdx === -1) {
    throw new Error(
      `Could not find a domain column. Headers were: ${headers.join(", ")}`,
    );
  }

  const today = new Date().toISOString().slice(0, 10);
  const dedupe = new Map<string, SnapshotRow>();

  for (let i = 1; i < rows.length; i++) {
    const cells = rows[i];
    if (!cells) continue;
    const rawDomain = cells[domainIdx];
    if (!rawDomain) continue;
    const domain = normalizeDomain(rawDomain);
    if (!domain) continue;

    const existing = dedupe.get(domain);
    const backlinks = Number(backlinksIdx >= 0 ? cells[backlinksIdx] : 1) || 1;
    const dr = drIdx >= 0 ? cells[drIdx] : "";
    const dofollow = dofollowIdx >= 0 ? cells[dofollowIdx] : "";
    const lastSeen = lastSeenIdx >= 0 && cells[lastSeenIdx] ? cells[lastSeenIdx] : today;

    const merged: SnapshotRow = {
      domain,
      last_seen: lastSeen ?? today,
      referring_urls: (existing?.referring_urls ?? 0) + backlinks,
      dr_estimate: dr ?? existing?.dr_estimate ?? "",
      dofollow_pct: dofollow ?? existing?.dofollow_pct ?? "",
      source,
    };
    dedupe.set(domain, merged);
  }

  return Array.from(dedupe.values()).sort((a, b) => a.domain.localeCompare(b.domain));
}

function csvEscape(value: string): string {
  if (/[",\r\n]/.test(value)) return `"${value.replace(/"/g, '""')}"`;
  return value;
}

function writeSnapshot(rows: SnapshotRow[]): { dated: string; latest: string } {
  const today = new Date().toISOString().slice(0, 10);
  const dir = join(process.cwd(), "data", "backlinks");
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });

  const lines = [
    SNAPSHOT_HEADER.join(","),
    ...rows.map((r) =>
      [
        r.domain,
        r.last_seen,
        String(r.referring_urls),
        r.dr_estimate,
        r.dofollow_pct,
        r.source,
      ]
        .map(csvEscape)
        .join(","),
    ),
  ];
  const body = lines.join("\n") + "\n";

  const datedPath = join(dir, `snapshot-${today}.csv`);
  const latestPath = join(dir, "snapshot-latest.csv");
  writeFileSync(datedPath, body);
  writeFileSync(latestPath, body);

  return { dated: datedPath, latest: latestPath };
}

function main(): void {
  const argPath = process.argv[2];
  if (!argPath) {
    console.error("Usage: tsx scripts/backlinks/snapshot.ts <csv-path>");
    process.exit(1);
  }
  const input = resolve(argPath);
  if (!existsSync(input)) {
    console.error(`File not found: ${input}`);
    process.exit(1);
  }
  console.log(`Ingesting ${input}`);
  const rows = ingest(input);
  console.log(`Parsed ${rows.length} unique referring domain(s).`);
  const { dated, latest } = writeSnapshot(rows);
  console.log(`Wrote ${dated}`);
  console.log(`Wrote ${latest}`);
  // Brief preview
  for (const r of rows.slice(0, 10)) {
    console.log(`  ${r.domain}  refs=${r.referring_urls}  dr=${r.dr_estimate || "?"}`);
  }
  if (rows.length > 10) console.log(`  … +${rows.length - 10} more`);
}

main();
// silence dirname unused-import warning when sandbox tooling is strict
void dirname;
