/**
 * find-near-duplicate-pages.ts
 *
 * Detects near-duplicate, template-swapped pages across the programmatic-SEO
 * surfaces (compare / alternatives / best-for / solutions / locations) and
 * flags entries that add little unique content.
 *
 * WHY THIS MATTERS (Google's "weakest-link" mechanism):
 * Google evaluates quality at the SITE level, not just per-page. A large pool
 * of thin, near-identical template pages drags down the perceived quality of
 * the WHOLE domain — even pages that are genuinely good. Pruning or merging the
 * weakest near-duplicates raises average page quality and recovers crawl budget
 * and topical authority.
 *
 * HOW IT WORKS:
 *   1. Loads every data-driven page from src/lib/{compare,alternatives,best-for,
 *      solutions,locations} (these drive the slug routes in src/app).
 *   2. Extracts the human-readable copy (all string literals) from each file.
 *   3. "Masks" the page's own entity tokens (slug words, competitor / niche /
 *      city names) so that two pages which differ ONLY by an entity swap
 *      collapse to the same masked text.
 *   4. Computes:
 *        - uniqueRatio: share of word-shingles unique to that page across the
 *          whole corpus (low = the copy is shared boilerplate).
 *        - near-duplicate clusters via masked-shingle Jaccard similarity.
 *        - exact masked-meta duplicates (title + description).
 *        - template-leak defects (un-rendered ${...}, "as unknown as", etc.).
 *   5. Emits a PRUNE / MERGE / REVIEW recommendation per page and writes a
 *      Markdown + JSON report to scripts/output/.
 *
 * Read-only. No site changes. Run:
 *   npx tsx scripts/seo/find-near-duplicate-pages.ts
 *   npx tsx scripts/seo/find-near-duplicate-pages.ts --json   (machine output only)
 */

import { readdirSync, readFileSync, statSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const REPO_ROOT = process.cwd();
const LIB_ROOT = join(REPO_ROOT, "src", "lib");
const OUT_DIR = join(REPO_ROOT, "scripts", "output");

// ----------------------------------------------------------------------------
// Tunables
// ----------------------------------------------------------------------------
const SHINGLE_K = 5; // word-shingle length for similarity
// Jaccard >= this (on entity-masked shingles) => near-duplicate cluster edge.
// Calibrated from the corpus: matrix-template families share 0.45-0.67 of
// their masked shingles, while unrelated families share ~0. At 0.45 every
// observed edge stayed within a single slug-family (zero cross-family merges).
const SIM_THRESHOLD = 0.45;
const UNIQUE_PRUNE = 0.1; // uniqueRatio below this => effectively boilerplate
const UNIQUE_MERGE = 0.28; // below this AND clustered => merge candidate
const HARD_DUP = 0.06; // uniqueRatio below this => prune regardless of cluster

// Words too generic to count as a distinguishing entity when masking.
const SLUG_STOPWORDS = new Set([
  "prestyj",
  "vs",
  "for",
  "the",
  "and",
  "of",
  "a",
  "an",
  "to",
  "with",
  "video",
  "ads",
  "ad",
  "ai",
  "alternative",
  "alternatives",
  "best",
  "real",
  "estate",
]);

type Collection = "compare" | "alternatives" | "best-for" | "solutions" | "locations";

interface CollectionSource {
  collection: Collection;
  /** directory containing the data files */
  dir: string;
  /** files to ignore (registries, types, helpers) */
  ignore: Set<string>;
  /** how to build the public URL path from a slug */
  urlPath: (slug: string) => string;
}

const SOURCES: CollectionSource[] = [
  {
    collection: "compare",
    dir: join(LIB_ROOT, "compare", "data"),
    ignore: new Set(["types.ts"]),
    urlPath: (s) => `/compare/${s}`,
  },
  {
    collection: "alternatives",
    dir: join(LIB_ROOT, "alternatives"),
    ignore: new Set(["index.ts", "types.ts"]),
    urlPath: (s) => `/alternatives/${s}`,
  },
  {
    collection: "best-for",
    dir: join(LIB_ROOT, "best-for"),
    ignore: new Set(["index.ts", "types.ts", "_geo-helpers.ts"]),
    urlPath: (s) => `/best-for/${s}`,
  },
  {
    collection: "solutions",
    dir: join(LIB_ROOT, "solutions"),
    ignore: new Set(["index.ts", "types.ts", "icon-map.tsx"]),
    urlPath: (s) => `/solutions/${s}`,
  },
  {
    collection: "locations",
    dir: join(LIB_ROOT, "locations", "cities"),
    ignore: new Set([]),
    urlPath: (s) => `/locations/${s}`,
  },
];

interface PageRecord {
  collection: Collection;
  file: string; // repo-relative path
  slug: string;
  url: string;
  generatedBy: string | null; // matrix script name if auto-generated
  competitorOrNiche: string | null;
  rawTextLen: number;
  metaKey: string; // masked + normalized title|description
  shingles: Set<string>; // masked content shingles
  uniqueShingles: number;
  uniqueRatio: number;
  templateLeaks: string[];
  cluster: number; // cluster id (-1 if singleton)
  flag: "PRUNE" | "MERGE" | "REVIEW" | "OK";
  reasons: string[];
}

// ----------------------------------------------------------------------------
// Extraction helpers
// ----------------------------------------------------------------------------

/** Pull every single/double/backtick string literal out of a TS source file. */
function extractStringLiterals(source: string): string[] {
  const out: string[] = [];
  let i = 0;
  const n = source.length;
  let inLine = false;
  let inBlock = false;

  while (i < n) {
    const c = source[i];
    const next = source[i + 1];

    if (inLine) {
      if (c === "\n") inLine = false;
      i++;
      continue;
    }
    if (inBlock) {
      if (c === "*" && next === "/") {
        inBlock = false;
        i += 2;
        continue;
      }
      i++;
      continue;
    }
    if (c === "/" && next === "/") {
      inLine = true;
      i += 2;
      continue;
    }
    if (c === "/" && next === "*") {
      inBlock = true;
      i += 2;
      continue;
    }

    if (c === '"' || c === "'" || c === "`") {
      const quote = c;
      i++;
      let buf = "";
      while (i < n) {
        const ch = source[i];
        if (ch === "\\") {
          buf += source[i + 1] ?? "";
          i += 2;
          continue;
        }
        if (ch === quote) {
          i++;
          break;
        }
        buf += ch;
        i++;
      }
      out.push(buf);
      continue;
    }
    i++;
  }
  return out;
}

/** First `slug: "..."` value in the file. */
function extractField(source: string, field: string): string | null {
  const re = new RegExp(`${field}\\s*:\\s*["'\`]([^"'\`]+)["'\`]`);
  const m = source.match(re);
  return m ? (m[1] ?? null) : null;
}

/**
 * Read `title`/`description` from inside the `meta:` object specifically.
 * A bare `extractField(source, "description")` would otherwise grab an earlier
 * `niche.description` / `competitor.description`, so we anchor on `meta:` first.
 */
function extractMetaField(source: string, field: string): string | null {
  const metaIdx = source.search(/\bmeta\s*:\s*\{/);
  const scope = metaIdx >= 0 ? source.slice(metaIdx) : source;
  const re = new RegExp(`${field}\\s*:\\s*["'\`]([^"'\`]+)["'\`]`);
  const m = scope.match(re);
  return m ? (m[1] ?? null) : null;
}

function extractGeneratedBy(source: string): string | null {
  const m = source.match(/AUTO-GENERATED by\s+(\S+)/i);
  return m ? (m[1] ?? null) : null;
}

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/\$\{[^}]*\}/g, " ") // drop template interpolation
    .replace(/[^a-z0-9]+/g, " ")
    .split(" ")
    .filter((t) => t.length > 1);
}

/** Tokens derived from the page's own entity, used to mask entity swaps. */
function entityMaskTokens(slug: string, entity: string | null): Set<string> {
  const mask = new Set<string>();
  for (const part of slug.split("-")) {
    const t = part.toLowerCase();
    if (t && !SLUG_STOPWORDS.has(t)) mask.add(t);
  }
  if (entity) {
    for (const t of tokenize(entity)) {
      if (!SLUG_STOPWORDS.has(t)) mask.add(t);
    }
  }
  return mask;
}

function buildShingles(tokens: string[], k: number): Set<string> {
  const shingles = new Set<string>();
  if (tokens.length < k) {
    if (tokens.length) shingles.add(tokens.join(" "));
    return shingles;
  }
  for (let i = 0; i + k <= tokens.length; i++) {
    shingles.add(tokens.slice(i, i + k).join(" "));
  }
  return shingles;
}

function jaccard(a: Set<string>, b: Set<string>): number {
  if (a.size === 0 && b.size === 0) return 1;
  let inter = 0;
  const [small, large] = a.size <= b.size ? [a, b] : [b, a];
  for (const x of small) if (large.has(x)) inter++;
  const union = a.size + b.size - inter;
  return union === 0 ? 0 : inter / union;
}

// ----------------------------------------------------------------------------
// Load corpus
// ----------------------------------------------------------------------------

function loadPages(): PageRecord[] {
  const pages: PageRecord[] = [];

  for (const src of SOURCES) {
    let entries: string[];
    try {
      entries = readdirSync(src.dir);
    } catch {
      continue;
    }
    for (const name of entries) {
      if (!name.endsWith(".ts") && !name.endsWith(".tsx")) continue;
      if (src.ignore.has(name)) continue;
      const full = join(src.dir, name);
      if (!statSync(full).isFile()) continue;

      const source = readFileSync(full, "utf8");
      const slug = extractField(source, "slug") ?? name.replace(/\.tsx?$/, "");
      const entity =
        extractField(source, "competitorName") ??
        extractField(source, "name") ??
        extractField(source, "displayName") ??
        null;

      const literals = extractStringLiterals(source);

      // Template-leak defects: un-rendered interpolation / cast smells left in
      // shipped copy.
      const templateLeaks: string[] = [];
      for (const lit of literals) {
        if (/\$\{[^}]*\}/.test(lit)) templateLeaks.push(lit.trim().slice(0, 90));
      }
      if (/as unknown as/.test(source)) templateLeaks.push('cast: "... as unknown as boolean"');
      for (const lit of literals) {
        if (/\bundefined\b|\bNaN\b|\bnull\b/.test(lit)) {
          templateLeaks.push(`literal value: "${lit.trim().slice(0, 60)}"`);
        }
      }

      const mask = entityMaskTokens(slug, entity);
      const maskToken = (t: string): string => (mask.has(t) ? "·" : t);

      const allTokens = literals.flatMap(tokenize).map(maskToken);
      const shingles = buildShingles(allTokens, SHINGLE_K);

      const title = extractMetaField(source, "title") ?? "";
      const description = extractMetaField(source, "description") ?? "";
      const metaTokens = [...tokenize(title), "|", ...tokenize(description)].map(maskToken);
      const metaKey = metaTokens.join(" ").trim();

      pages.push({
        collection: src.collection,
        file: full.replace(`${REPO_ROOT}/`, ""),
        slug,
        url: src.urlPath(slug),
        generatedBy: extractGeneratedBy(source),
        competitorOrNiche: entity,
        rawTextLen: literals.join(" ").length,
        metaKey,
        shingles,
        uniqueShingles: 0,
        uniqueRatio: 0,
        templateLeaks: [...new Set(templateLeaks)],
        cluster: -1,
        flag: "OK",
        reasons: [],
      });
    }
  }
  return pages;
}

// ----------------------------------------------------------------------------
// Analysis
// ----------------------------------------------------------------------------

function computeUniqueness(pages: PageRecord[]): void {
  const freq = new Map<string, number>();
  for (const p of pages) {
    for (const sh of p.shingles) freq.set(sh, (freq.get(sh) ?? 0) + 1);
  }
  for (const p of pages) {
    let unique = 0;
    for (const sh of p.shingles) if (freq.get(sh) === 1) unique++;
    p.uniqueShingles = unique;
    p.uniqueRatio = p.shingles.size === 0 ? 0 : unique / p.shingles.size;
  }
}

/** Union-find clustering on near-duplicate edges within a collection. */
function clusterNearDuplicates(pages: PageRecord[]): void {
  const parent = pages.map((_, i) => i);
  const find = (x: number): number => {
    while (parent[x] !== x) {
      parent[x] = parent[parent[x]!]!;
      x = parent[x]!;
    }
    return x;
  };
  const union = (a: number, b: number): void => {
    const ra = find(a);
    const rb = find(b);
    if (ra !== rb) parent[ra] = rb;
  };

  // Compare only within the same collection (cross-collection shapes differ).
  const byCollection = new Map<Collection, number[]>();
  pages.forEach((p, i) => {
    const arr = byCollection.get(p.collection) ?? [];
    arr.push(i);
    byCollection.set(p.collection, arr);
  });

  for (const indices of byCollection.values()) {
    for (let a = 0; a < indices.length; a++) {
      for (let b = a + 1; b < indices.length; b++) {
        const i = indices[a]!;
        const j = indices[b]!;
        const sim = jaccard(pages[i]!.shingles, pages[j]!.shingles);
        if (sim >= SIM_THRESHOLD) union(i, j);
      }
    }
  }

  // Assign cluster ids only to groups of size >= 2.
  const groups = new Map<number, number[]>();
  pages.forEach((_, i) => {
    const root = find(i);
    const arr = groups.get(root) ?? [];
    arr.push(i);
    groups.set(root, arr);
  });
  let clusterId = 0;
  for (const members of groups.values()) {
    if (members.length < 2) continue;
    for (const m of members) pages[m]!.cluster = clusterId;
    clusterId++;
  }
}

function flagPages(pages: PageRecord[]): void {
  // Exact masked-meta duplicates (title+description identical after masking).
  const metaGroups = new Map<string, PageRecord[]>();
  for (const p of pages) {
    if (!p.metaKey) continue;
    const arr = metaGroups.get(p.metaKey) ?? [];
    arr.push(p);
    metaGroups.set(p.metaKey, arr);
  }
  const exactMetaDup = new Set<PageRecord>();
  for (const arr of metaGroups.values()) {
    if (arr.length >= 2) for (const p of arr) exactMetaDup.add(p);
  }

  const clusterSize = new Map<number, number>();
  for (const p of pages) {
    if (p.cluster >= 0) clusterSize.set(p.cluster, (clusterSize.get(p.cluster) ?? 0) + 1);
  }

  for (const p of pages) {
    const reasons: string[] = [];
    const clustered = p.cluster >= 0 && (clusterSize.get(p.cluster) ?? 0) >= 2;

    if (p.generatedBy) reasons.push(`auto-generated by ${p.generatedBy}`);
    if (clustered)
      reasons.push(`near-duplicate cluster #${p.cluster} (${clusterSize.get(p.cluster)} pages)`);
    if (exactMetaDup.has(p)) reasons.push("identical meta title+description after entity-masking");
    reasons.push(`uniqueRatio=${(p.uniqueRatio * 100).toFixed(1)}%`);
    if (p.templateLeaks.length) reasons.push(`${p.templateLeaks.length} template-leak defect(s)`);

    let flag: PageRecord["flag"] = "OK";

    if (p.uniqueRatio < HARD_DUP) {
      flag = "PRUNE";
    } else if (clustered && p.uniqueRatio < UNIQUE_PRUNE) {
      flag = "PRUNE";
    } else if (clustered && p.uniqueRatio < UNIQUE_MERGE) {
      flag = "MERGE";
    } else if (exactMetaDup.has(p) && p.uniqueRatio < UNIQUE_MERGE) {
      flag = "MERGE";
    } else if (p.templateLeaks.length > 0) {
      flag = "REVIEW";
    } else if (clustered) {
      flag = "REVIEW";
    }

    p.flag = flag;
    p.reasons = reasons;
  }
}

/** For each cluster, pick the canonical "keep" page (most unique / longest). */
function pickCanonical(pages: PageRecord[]): Map<number, PageRecord> {
  const byCluster = new Map<number, PageRecord[]>();
  for (const p of pages) {
    if (p.cluster < 0) continue;
    const arr = byCluster.get(p.cluster) ?? [];
    arr.push(p);
    byCluster.set(p.cluster, arr);
  }
  const canonical = new Map<number, PageRecord>();
  for (const [id, arr] of byCluster) {
    const best = [...arr].sort((a, b) => {
      // Prefer hand-authored, then higher uniqueRatio, then longer copy.
      const genA = a.generatedBy ? 1 : 0;
      const genB = b.generatedBy ? 1 : 0;
      if (genA !== genB) return genA - genB;
      if (b.uniqueRatio !== a.uniqueRatio) return b.uniqueRatio - a.uniqueRatio;
      return b.rawTextLen - a.rawTextLen;
    })[0]!;
    canonical.set(id, best);
  }
  return canonical;
}

// ----------------------------------------------------------------------------
// Reporting
// ----------------------------------------------------------------------------

function buildReport(pages: PageRecord[], canonical: Map<number, PageRecord>): string {
  const total = pages.length;
  const counts = { PRUNE: 0, MERGE: 0, REVIEW: 0, OK: 0 };
  for (const p of pages) counts[p.flag]++;

  const byCollection = new Map<Collection, PageRecord[]>();
  for (const p of pages) {
    const arr = byCollection.get(p.collection) ?? [];
    arr.push(p);
    byCollection.set(p.collection, arr);
  }

  const lines: string[] = [];
  lines.push("# Near-Duplicate Template Page Audit");
  lines.push("");
  lines.push(`_Generated ${new Date().toISOString()}_`);
  lines.push("");
  lines.push(
    "Programmatic pages that are near-identical template swaps dilute site-level " +
      "quality (Google's weakest-link mechanism). The pages below are ranked by how " +
      "little unique content they add. Prune or merge the lowest-value entries, " +
      "keeping one strong canonical per cluster.",
  );
  lines.push("");
  lines.push("## Summary");
  lines.push("");
  lines.push(`- Pages scanned: **${total}**`);
  lines.push(`- 🔴 PRUNE (thin duplicate, recommend remove + 301): **${counts.PRUNE}**`);
  lines.push(`- 🟠 MERGE (overlaps a sibling, fold into canonical): **${counts.MERGE}**`);
  lines.push(`- 🟡 REVIEW (templated / minor defects, needs eyes): **${counts.REVIEW}**`);
  lines.push(`- 🟢 OK (sufficiently unique): **${counts.OK}**`);
  lines.push("");

  // Per-collection breakdown.
  lines.push("## By collection");
  lines.push("");
  lines.push("| Collection | Pages | PRUNE | MERGE | REVIEW | OK |");
  lines.push("| --- | --: | --: | --: | --: | --: |");
  for (const [col, arr] of [...byCollection].sort((a, b) => a[0].localeCompare(b[0]))) {
    const c = { PRUNE: 0, MERGE: 0, REVIEW: 0, OK: 0 };
    for (const p of arr) c[p.flag]++;
    lines.push(`| ${col} | ${arr.length} | ${c.PRUNE} | ${c.MERGE} | ${c.REVIEW} | ${c.OK} |`);
  }
  lines.push("");

  // Clusters with canonical recommendation.
  const clusters = new Map<number, PageRecord[]>();
  for (const p of pages) {
    if (p.cluster < 0) continue;
    const arr = clusters.get(p.cluster) ?? [];
    arr.push(p);
    clusters.set(p.cluster, arr);
  }
  if (clusters.size) {
    lines.push("## Near-duplicate clusters");
    lines.push("");
    lines.push(
      "Each cluster is a set of pages that are >= " +
        `${Math.round(SIM_THRESHOLD * 100)}% identical after entity-masking. ` +
        "Keep the **canonical**; prune/merge the rest into it with 301 redirects.",
    );
    lines.push("");
    const sorted = [...clusters].sort((a, b) => b[1].length - a[1].length);
    for (const [id, arr] of sorted) {
      const keep = canonical.get(id)!;
      lines.push(`### Cluster #${id} — ${arr.length} pages (${arr[0]!.collection})`);
      lines.push("");
      lines.push(
        `- ✅ **Keep (canonical):** \`${keep.url}\` — uniqueRatio ${(keep.uniqueRatio * 100).toFixed(1)}%`,
      );
      const others = arr.filter((p) => p !== keep).sort((a, b) => a.uniqueRatio - b.uniqueRatio);
      for (const p of others) {
        const action = p.flag === "PRUNE" ? "prune → 301 to canonical" : "merge into canonical";
        lines.push(
          `- ${p.flag === "PRUNE" ? "🔴" : "🟠"} \`${p.url}\` — uniqueRatio ${(p.uniqueRatio * 100).toFixed(1)}% — ${action}`,
        );
      }
      lines.push("");
    }
  }

  // Full action table, worst first.
  lines.push("## All flagged pages (worst first)");
  lines.push("");
  lines.push("| Flag | URL | Unique % | Cluster | Generated | Notes |");
  lines.push("| --- | --- | --: | :--: | :--: | --- |");
  const order = { PRUNE: 0, MERGE: 1, REVIEW: 2, OK: 3 } as const;
  const flagged = pages
    .filter((p) => p.flag !== "OK")
    .sort((a, b) => {
      if (order[a.flag] !== order[b.flag]) return order[a.flag] - order[b.flag];
      return a.uniqueRatio - b.uniqueRatio;
    });
  for (const p of flagged) {
    const emoji = p.flag === "PRUNE" ? "🔴" : p.flag === "MERGE" ? "🟠" : "🟡";
    const notes: string[] = [];
    if (p.templateLeaks.length) notes.push(`${p.templateLeaks.length} template leak(s)`);
    if (p.reasons.some((r) => r.startsWith("identical meta"))) notes.push("dup meta");
    lines.push(
      `| ${emoji} ${p.flag} | \`${p.url}\` | ${(p.uniqueRatio * 100).toFixed(1)} | ${p.cluster >= 0 ? `#${p.cluster}` : "—"} | ${p.generatedBy ? "yes" : "no"} | ${notes.join("; ") || "—"} |`,
    );
  }
  lines.push("");

  // Template-leak detail (real on-page defects).
  const leaky = pages.filter((p) => p.templateLeaks.length);
  if (leaky.length) {
    lines.push("## Template-leak defects (un-rendered placeholders shipped to users)");
    lines.push("");
    for (const p of leaky.sort((a, b) => b.templateLeaks.length - a.templateLeaks.length)) {
      lines.push(`- \`${p.url}\` (${p.file})`);
      for (const t of p.templateLeaks.slice(0, 4)) lines.push(`  - ${t}`);
    }
    lines.push("");
  }

  return lines.join("\n");
}

// ----------------------------------------------------------------------------
// Main
// ----------------------------------------------------------------------------

function main(): void {
  const jsonOnly = process.argv.includes("--json");

  const pages = loadPages();
  if (pages.length === 0) {
    console.error("No pages found. Are you running from the repo root?");
    process.exit(1);
  }

  computeUniqueness(pages);
  clusterNearDuplicates(pages);
  flagPages(pages);
  const canonical = pickCanonical(pages);

  mkdirSync(OUT_DIR, { recursive: true });
  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  const mdPath = join(OUT_DIR, `near-duplicate-report-${stamp}.md`);
  const jsonPath = join(OUT_DIR, "near-duplicate-pages.json");

  const report = buildReport(pages, canonical);
  writeFileSync(mdPath, report, "utf8");

  const jsonPages = pages
    .map((p) => ({
      collection: p.collection,
      url: p.url,
      file: p.file,
      slug: p.slug,
      flag: p.flag,
      uniqueRatio: Number(p.uniqueRatio.toFixed(4)),
      cluster: p.cluster,
      canonical: p.cluster >= 0 ? canonical.get(p.cluster)!.url : null,
      generatedBy: p.generatedBy,
      templateLeaks: p.templateLeaks,
      reasons: p.reasons,
    }))
    .sort((a, b) => a.uniqueRatio - b.uniqueRatio);
  writeFileSync(
    jsonPath,
    JSON.stringify({ generatedAt: new Date().toISOString(), pages: jsonPages }, null, 2),
    "utf8",
  );

  if (jsonOnly) {
    process.stdout.write(JSON.stringify({ pages: jsonPages }, null, 2));
    return;
  }

  const counts = { PRUNE: 0, MERGE: 0, REVIEW: 0, OK: 0 };
  for (const p of pages) counts[p.flag]++;

  console.log("Near-duplicate template page audit");
  console.log("==================================");
  console.log(`Pages scanned : ${pages.length}`);
  console.log(`PRUNE         : ${counts.PRUNE}`);
  console.log(`MERGE         : ${counts.MERGE}`);
  console.log(`REVIEW        : ${counts.REVIEW}`);
  console.log(`OK            : ${counts.OK}`);
  console.log("");
  console.log(`Markdown report : ${mdPath.replace(`${REPO_ROOT}/`, "")}`);
  console.log(`JSON report     : ${jsonPath.replace(`${REPO_ROOT}/`, "")}`);
  console.log("");
  const topPrune = pages
    .filter((p) => p.flag === "PRUNE")
    .sort((a, b) => a.uniqueRatio - b.uniqueRatio)
    .slice(0, 15);
  if (topPrune.length) {
    console.log("Top prune candidates (lowest unique content):");
    for (const p of topPrune) {
      console.log(`  ${(p.uniqueRatio * 100).toFixed(1).padStart(5)}%  ${p.url}`);
    }
  }
}

main();
