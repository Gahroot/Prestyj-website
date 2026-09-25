import { existsSync, lstatSync, readdirSync } from "node:fs";
import path from "node:path";
import { z } from "zod";
import { calendarDateSchema } from "./institutional-ledger";
import { readBoundedText } from "./check-institutional-content";
import { institutionalPublicPaths } from "../../src/lib/institutional/site-map";

export const MAX_CSV_BYTES = 2_000_000;
export const snapshotMetadataSchema = z
  .object({
    source: z.enum(["bing-ai-performance", "other"]).nullable(),
    exportDate: calendarDateSchema.nullable(),
    reportingStart: calendarDateSchema.nullable(),
    reportingEnd: calendarDateSchema.nullable(),
    filters: z.record(z.string(), z.string()).nullable(),
    coverage: z
      .object({
        queries: z.enum(["sampled", "complete", "unknown"]),
        pages: z.enum(["complete", "partial", "unknown"]),
        scope: z.string().min(1),
      })
      .strict()
      .nullable(),
  })
  .strict()
  .superRefine((value, ctx) => {
    if (Boolean(value.reportingStart) !== Boolean(value.reportingEnd))
      ctx.addIssue({
        code: "custom",
        message: "Both reporting window dates are required together",
      });
    if (value.reportingStart && value.reportingEnd && value.reportingEnd < value.reportingStart)
      ctx.addIssue({ code: "custom", message: "Reporting window is reversed" });
    if (value.exportDate && value.reportingEnd && value.exportDate < value.reportingEnd)
      ctx.addIssue({ code: "custom", message: "Export precedes reporting end" });
  });
export type SnapshotMetadata = z.infer<typeof snapshotMetadataSchema>;
export type CitationRow = { label: string; citations: number };
export type CitationSnapshot = {
  folder: string;
  metadata: SnapshotMetadata | null;
  queries: CitationRow[];
  pages: CitationRow[];
};

/** Strict two-column CSV parser: BOM, quoted commas/newlines, doubled quotes and CRLF. */
export function parseCitationCsv(input: string, view: "queries" | "pages"): CitationRow[] {
  if (Buffer.byteLength(input, "utf8") > MAX_CSV_BYTES) throw new Error("CSV exceeds size limit");
  const text = input.replace(/^\uFEFF/, "");
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let quoted = false;
  let closed = false;
  const finishField = (): void => {
    row.push(field);
    field = "";
    closed = false;
  };
  const finishRow = (): void => {
    finishField();
    rows.push(row);
    row = [];
    if (rows.length > 50_000) throw new Error("Too many CSV rows");
  };
  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    if (quoted) {
      if (char === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i += 1;
        } else {
          quoted = false;
          closed = true;
        }
      } else field += char;
      continue;
    }
    if (char === ",") finishField();
    else if (char === "\n" || char === "\r") {
      if (char === "\r" && text[i + 1] === "\n") i += 1;
      finishRow();
    } else if (char === '"' && field === "" && !closed) quoted = true;
    else {
      if (closed || char === '"') throw new Error("Malformed CSV quoting");
      field += char;
    }
  }
  if (quoted) throw new Error("Unterminated CSV quote");
  if (field !== "" || closed || row.length > 0) finishRow();
  const header = rows.shift();
  if (
    !header ||
    header.length !== 2 ||
    header[0] !== (view === "queries" ? "Grounding Query" : "Page") ||
    header[1] !== "Citations"
  )
    throw new Error(`Invalid ${view} CSV headers`);
  const seen = new Set<string>();
  return rows.map((cells, index) => {
    const label = cells[0]?.trim() ?? "";
    const count = cells[1]?.trim() ?? "";
    if (cells.length !== 2 || !label || !/^\d+$/.test(count))
      throw new Error(`Malformed ${view} row ${index + 2}`);
    const citations = Number(count);
    if (!Number.isSafeInteger(citations)) throw new Error(`Unsafe count at row ${index + 2}`);
    if (seen.has(label)) throw new Error(`Duplicate ${view} row ${index + 2}`);
    seen.add(label);
    if (view === "pages") normalizeCitationUrl(label); // Validate URL even if later classified external.
    return { label, citations };
  });
}

export function normalizeCitationUrl(value: string): string {
  const url = new URL(value);
  if (
    !["https:", "http:"].includes(url.protocol) ||
    url.username ||
    url.password ||
    url.port ||
    /[\s\\]/.test(value)
  )
    throw new Error("Invalid citation URL");
  if (["prestyj.com", "www.prestyj.com"].includes(url.hostname)) {
    url.hostname = "prestyj.com";
    url.protocol = "https:";
  }
  url.hash = "";
  url.search = "";
  if (url.pathname !== "/") url.pathname = url.pathname.replace(/\/+$/, "");
  return url.toString();
}
export function classifyCitationUrl(
  value: string,
): "institutional" | "legacy-or-unregistered" | "external" {
  const url = new URL(normalizeCitationUrl(value));
  if (url.hostname !== "prestyj.com") return "external";
  return institutionalPublicPaths.includes(url.pathname)
    ? "institutional"
    : "legacy-or-unregistered";
}
export function sumCitations(rows: readonly CitationRow[]): number {
  return rows.reduce((sum, row) => {
    const next = sum + row.citations;
    if (!Number.isSafeInteger(next)) throw new Error("Citation sum exceeds safe integer range");
    return next;
  }, 0);
}
export function escapeReportCell(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/[<>|`\[\]{}*_\\]/g, (char) => `&#${char.charCodeAt(0)};`)
    .replace(/[\r\n\u0000-\u001f]+/g, " ");
}
function stableObject(value: Record<string, string>): string {
  return JSON.stringify(Object.entries(value).sort(([a], [b]) => a.localeCompare(b)));
}
export function comparisonReason(
  previous: CitationSnapshot,
  current: CitationSnapshot,
): string | null {
  const a = previous.metadata;
  const b = current.metadata;
  if (
    !a ||
    !b ||
    !a.reportingStart ||
    !a.reportingEnd ||
    !b.reportingStart ||
    !b.reportingEnd ||
    !a.exportDate ||
    !b.exportDate
  )
    return "Reporting windows or export dates unknown";
  if (a.source !== "bing-ai-performance" || b.source !== "bing-ai-performance")
    return "Sources unknown or different";
  if (!a.filters || !b.filters || stableObject(a.filters) !== stableObject(b.filters))
    return "Filters unknown or different";
  if (
    !a.coverage ||
    !b.coverage ||
    a.coverage.queries === "unknown" ||
    a.coverage.pages === "unknown" ||
    JSON.stringify(a.coverage) !== JSON.stringify(b.coverage)
  )
    return "Coverage unknown or different";
  if (
    Date.parse(a.reportingEnd) - Date.parse(a.reportingStart) !==
    Date.parse(b.reportingEnd) - Date.parse(b.reportingStart)
  )
    return "Reporting windows have different lengths";
  if (a.reportingEnd >= b.reportingStart) return "Reporting windows overlap or are out of order";
  return null;
}
export function snapshotFreshness(
  snapshot: CitationSnapshot,
  asOf: string,
  maxAgeDays = 35,
): "unknown" | "stale" | "current" | "future" {
  calendarDateSchema.parse(asOf);
  const end = snapshot.metadata?.reportingEnd;
  if (!end) return "unknown";
  const age = (Date.parse(asOf) - Date.parse(end)) / 86_400_000;
  return age < 0 ? "future" : age > maxAgeDays ? "stale" : "current";
}
export function loadCitationSnapshots(root: string): CitationSnapshot[] {
  const directories = readdirSync(root)
    .filter((name) => calendarDateSchema.safeParse(name).success)
    .sort();
  if (directories.length > 1000) throw new Error("Too many snapshot directories");
  return directories.map((folder) => {
    const directory = path.join(root, folder);
    const stat = lstatSync(directory);
    if (!stat.isDirectory() || stat.isSymbolicLink())
      throw new Error(`Invalid snapshot directory ${folder}`);
    const files = readdirSync(directory).sort();
    const locate = (view: "queries" | "pages"): string => {
      const candidates = files.filter(
        (name) =>
          name === `${view}.csv` ||
          (name.startsWith(view === "queries" ? "AISearchQueriesReport" : "AIPageStatsReport") &&
            name.endsWith(".csv")),
      );
      if (candidates.length !== 1 || !candidates[0])
        throw new Error(`${folder}: expected exactly one ${view} CSV`);
      return path.join(directory, candidates[0]);
    };
    const metadataPath = path.join(directory, "snapshot.json");
    return {
      folder,
      metadata: existsSync(metadataPath)
        ? snapshotMetadataSchema.parse(JSON.parse(readBoundedText(metadataPath, 20_000)))
        : null,
      queries: parseCitationCsv(readBoundedText(locate("queries"), MAX_CSV_BYTES), "queries"),
      pages: parseCitationCsv(readBoundedText(locate("pages"), MAX_CSV_BYTES), "pages"),
    };
  });
}
export function renderCitationReport(snapshots: readonly CitationSnapshot[], asOf: string): string {
  calendarDateSchema.parse(asOf);
  const ordered = [...snapshots].sort((a, b) => a.folder.localeCompare(b.folder));
  const current = ordered.at(-1);
  if (!current) throw new Error("No citation snapshots available");
  const previous = ordered.at(-2);
  const reason = previous ? comparisonReason(previous, current) : "No prior snapshot";
  const lines = [
    "# Institutional citation evidence",
    "",
    `Analysis date: ${asOf}. Latest folder: ${current.folder} (folder name is not a reporting window).`,
    "",
    "Bing AI Performance-format exports, not Google Search Console. Historical provenance and reporting windows remain unverified where snapshot metadata is absent. This is not global AI visibility, traffic, ranking or conversion evidence.",
    "",
    "Query and page views overlap and MUST NOT be added. Query rows can represent a sample; exported row sums are not a dashboard-wide total. No daily rate is inferred from a folder date.",
    "",
    "Supersedes historical combined totals, per-day targets and unsupported week-over-week claims. Original CSVs are unchanged; prior derived reports are retained in archive/ for historical inspection, not decision-making.",
    "",
    "## Snapshots on file",
    "",
    "| Folder | Query-view row sum | Page-view row sum | Window | Freshness |",
    "| --- | ---: | ---: | --- | --- |",
  ];
  for (const snapshot of ordered)
    lines.push(
      `| ${snapshot.folder} | ${sumCitations(snapshot.queries)} | ${sumCitations(snapshot.pages)} | ${snapshot.metadata?.reportingStart ?? "unknown"} to ${snapshot.metadata?.reportingEnd ?? "unknown"} | ${snapshotFreshness(snapshot, asOf)} |`,
    );
  lines.push(
    "",
    "## Latest export scope",
    "",
    `Source: ${current.metadata?.source ?? "unknown; Bing-format headers only"}. Export date: ${current.metadata?.exportDate ?? "unknown"}. Filters: ${current.metadata?.filters ? escapeReportCell(stableObject(current.metadata.filters)) : "unknown"}. Coverage: ${current.metadata?.coverage ? escapeReportCell(JSON.stringify(current.metadata.coverage)) : "unknown"}.`,
    "",
    "## Comparison gate",
    "",
    reason
      ? `No trend calculated: ${reason}.`
      : "Comparable non-overlapping equal-length windows; differences below refer only to the exported views, not global citations.",
  );
  if (!reason && previous) {
    lines.push(
      `Query-view difference: ${sumCitations(current.queries) - sumCitations(previous.queries)}.`,
      `Page-view difference: ${sumCitations(current.pages) - sumCitations(previous.pages)}.`,
    );
  }
  lines.push(
    "",
    "## Current-registry page classification",
    "",
    "Classification uses today's public registry, not proof of historical page content. Host variants are normalized; raw source rows are retained.",
    "",
    "| Class | Page rows | Page-view row sum |",
    "| --- | ---: | ---: |",
  );
  for (const category of ["institutional", "legacy-or-unregistered", "external"] as const) {
    const rows = current.pages.filter((row) => classifyCitationUrl(row.label) === category);
    lines.push(`| ${category} | ${rows.length} | ${sumCitations(rows)} |`);
  }
  for (const view of ["queries", "pages"] as const) {
    lines.push(
      "",
      `## Top exported ${view}`,
      "",
      "| Label | Citations in this view |",
      "| --- | ---: |",
    );
    for (const row of [...current[view]]
      .sort((a, b) => b.citations - a.citations || a.label.localeCompare(b.label))
      .slice(0, 10))
      lines.push(
        `| ${escapeReportCell(view === "pages" ? normalizeCitationUrl(row.label) : row.label)} | ${row.citations} |`,
      );
  }
  lines.push(
    "",
    "## Next evidence required",
    "",
    "Obtain authenticated Bing exports with source, export date, reporting start/end, filters and coverage. Keep GSC query/page clicks, impressions, CTR and position in the separate institutional baseline at data/seo/institutional-baseline.json; do not relabel legacy observations. No growth, customer or distribution outcome is established by this report.",
    "",
  );
  return lines.join("\n");
}
