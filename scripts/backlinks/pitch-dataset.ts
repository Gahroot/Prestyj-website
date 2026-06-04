#!/usr/bin/env npx tsx
/**
 * Pitch the Prestyj /stat/* dataset to REAL third parties — journalists,
 * researchers/academics, and reputable, independently-operated dataset
 * directories. The point of the dataset asset is to be CITED by other people;
 * this script generates the outreach drafts that make that happen.
 *
 * It deliberately does NOT touch the halt gate: these are earned/editorial
 * channels, the opposite of self-owned GitHub mirrors. The canonical home stays
 * https://prestyj.com/data and the per-statistic permalinks at /stat/<id> — we
 * pitch those, we don't copy them onto more properties we own.
 *
 * Output: docs/backlinks/pitch-drafts/<bucket>/<slug>.md, one file per target,
 * with YAML front-matter (bucket, target, channel, status) so the existing
 * send/track tooling can pick them up.
 *
 * Each draft pulls 3–5 live headline statistics straight from the dataset
 * source-of-truth, so the numbers never drift from src/lib/statistics-data.ts.
 *
 * Usage:
 *   npx tsx scripts/backlinks/pitch-dataset.ts [--limit N] [--bucket B] [--list]
 *
 * Buckets: journalist | researcher | dataset-directory
 */

import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { getAllFlatStatistics, type FlatStatistic } from "../../src/lib/statistics/index";

const SITE_URL = "https://prestyj.com";
const DATA_URL = `${SITE_URL}/data`;
const STATS_URL = `${SITE_URL}/statistics`;
const FOUNDER = "Nolan Grout";
const FOUNDER_EMAIL = "nolan@prestyj.com";
const COMPANY_LINKEDIN = "https://www.linkedin.com/company/prestyj/";

type PitchBucket = "journalist" | "researcher" | "dataset-directory";
type Channel = "email" | "directory-form" | "data-repository";

interface PitchTarget {
  bucket: PitchBucket;
  slug: string;
  name: string;
  url: string;
  /** What angle / slice of the dataset is most relevant to this target. */
  angle: string;
  channel: Channel;
  /** Optional public submission/contact email for journalist/researcher targets. */
  contact?: string;
  /** For dataset-directory targets: does the platform mint a DOI? */
  doi?: boolean;
  /** For dataset-directory targets: where the prepared bundle lives. */
  bundle?: string;
}

// ─── Targets ─────────────────────────────────────────────────────────────────
// Real, independent third parties. Journalists + researchers EARN editorial
// citations; dataset directories independently host the dataset and (academic
// ones) mint a DOI. None of these are self-owned.

const TARGETS: PitchTarget[] = [
  // ── Journalists / trade press ────────────────────────────────────────────
  {
    bucket: "journalist",
    slug: "housingwire-tech",
    name: "HousingWire (Tech beat)",
    url: "https://www.housingwire.com",
    contact: "editor@housingwire.com",
    angle:
      "Real-estate-specific slice: ISA/lead response speed, AI sales-agent adoption, and what 5-minute response actually does to qualification rates.",
    channel: "email",
  },
  {
    bucket: "journalist",
    slug: "inman-tips",
    name: "Inman",
    url: "https://www.inman.com",
    contact: "tips@inman.com",
    angle:
      "Speed-to-lead data for brokerages — the 5-minute/30-minute curve and how few teams actually respond in the window.",
    channel: "email",
  },
  {
    bucket: "journalist",
    slug: "achrnews-hvac",
    name: "ACHR News (HVAC trade)",
    url: "https://www.achrnews.com",
    contact: "",
    angle:
      "HVAC-specific cost-per-lead + missed-call economics and AI receptionist ROI for contractors.",
    channel: "email",
  },
  {
    bucket: "journalist",
    slug: "search-engine-land",
    name: "Search Engine Land",
    url: "https://searchengineland.com",
    contact: "",
    angle:
      "Cost-per-tested-ad-angle benchmark and the creative-volume thesis, backed by the open dataset's video-advertising rows.",
    channel: "email",
  },
  {
    bucket: "journalist",
    slug: "marketing-brew",
    name: "Marketing Brew",
    url: "https://www.marketingbrew.com",
    contact: "",
    angle:
      "A quick, cite-worthy stat source for daily marketing coverage — every row dated and attributed to its primary publisher.",
    channel: "email",
  },
  {
    bucket: "journalist",
    slug: "adexchanger",
    name: "AdExchanger",
    url: "https://www.adexchanger.com",
    contact: "",
    angle:
      "Digital-video-spend-vs-TV shift plus the creative-volume angle for programmatic/paid-social coverage.",
    channel: "email",
  },

  // ── Researchers / academic data communities ──────────────────────────────
  {
    bucket: "researcher",
    slug: "sales-ops-researchers",
    name: "Sales operations & RevOps academics",
    url: "https://scholar.google.com",
    angle:
      "Speed-to-lead and lead-conversion benchmarks as a citable, DOI-backed dataset for sales-process and RevOps research. Point them at the Zenodo/Figshare DOI once minted.",
    channel: "email",
  },
  {
    bucket: "researcher",
    slug: "marketing-academics",
    name: "Marketing / advertising effectiveness researchers",
    url: "https://scholar.google.com",
    angle:
      "Video-advertising performance and CPL-by-industry rows for ad-effectiveness and media-mix studies. Each row carries its primary publisher and year.",
    channel: "email",
  },
  {
    bucket: "researcher",
    slug: "data-journalism-collectives",
    name: "Data journalism collectives (NICAR / Hacks/Hackers)",
    url: "https://www.ire.org/training/conferences/nicar/",
    angle:
      "A clean, sourced CSV/JSON dataset with stable permalinks — ready for data-driven stories on lead response and AI adoption in SMB sales.",
    channel: "email",
  },

  // ── Reputable third-party dataset directories ─────────────────────────────
  {
    bucket: "dataset-directory",
    slug: "zenodo",
    name: "Zenodo (CERN)",
    url: "https://zenodo.org/uploads/new",
    angle: "Open research-data repository that mints a permanent DOI on upload.",
    channel: "data-repository",
    doi: true,
    bundle: "docs/oss-dataset/distributions/zenodo",
  },
  {
    bucket: "dataset-directory",
    slug: "figshare",
    name: "Figshare (Digital Science)",
    url: "https://figshare.com/account/projects",
    angle: "Research-data repository; permanent DOI on publish.",
    channel: "data-repository",
    doi: true,
    bundle: "docs/oss-dataset/distributions/figshare",
  },
  {
    bucket: "dataset-directory",
    slug: "dataverse",
    name: "Harvard Dataverse",
    url: "https://dataverse.harvard.edu",
    angle:
      "Recognized academic research-data repository; permanent DOI; strong for scholarly citation.",
    channel: "data-repository",
    doi: true,
    bundle: "docs/oss-dataset/distributions/dataverse",
  },
  {
    bucket: "dataset-directory",
    slug: "mendeley",
    name: "Mendeley Data (Elsevier)",
    url: "https://data.mendeley.com",
    angle:
      "DataCite-indexed research-data repository; DOI on publish; appears in Google Dataset Search.",
    channel: "data-repository",
    doi: true,
    bundle: "docs/oss-dataset/distributions/mendeley",
  },
  {
    bucket: "dataset-directory",
    slug: "huggingface",
    name: "Hugging Face Datasets",
    url: "https://huggingface.co/new-dataset",
    angle: "ML-community dataset discovery; CSV absorbed into the dataset viewer.",
    channel: "data-repository",
    doi: false,
    bundle: "docs/oss-dataset/distributions/huggingface",
  },
  {
    bucket: "dataset-directory",
    slug: "kaggle",
    name: "Kaggle Datasets",
    url: "https://www.kaggle.com/datasets",
    angle: "Data-science community discovery; metadata pre-configured in the bundle.",
    channel: "data-repository",
    doi: false,
    bundle: "docs/oss-dataset/distributions/kaggle",
  },
  {
    bucket: "dataset-directory",
    slug: "dataworld",
    name: "data.world",
    url: "https://data.world/new",
    angle: "Open-data community; public dataset with linked sources.",
    channel: "data-repository",
    doi: false,
    bundle: "docs/oss-dataset/distributions/dataworld",
  },
  {
    bucket: "dataset-directory",
    slug: "openml",
    name: "OpenML",
    url: "https://www.openml.org/new-data",
    angle: "ML benchmark catalog; CSV cleanly absorbed.",
    channel: "data-repository",
    doi: false,
    bundle: "docs/oss-dataset/distributions/openml",
  },
];

// ─── Headline stat selection ─────────────────────────────────────────────────
// Pull a few live, high-impact statistics from the dataset so every pitch
// quotes real, current numbers with their permalinks. Deterministic ordering.

function pickHeadlineStats(limit: number): FlatStatistic[] {
  const all = getAllFlatStatistics();
  // Prefer speed-to-lead + video + AI categories for headline punch, but stay
  // deterministic by sorting on id within the preferred set.
  const preferredCategories = new Set(["speed-to-lead", "video-advertising", "ai-in-sales"]);
  const preferred = all
    .filter((s) => preferredCategories.has(s.categorySlug))
    .sort((a, b) => a.id.localeCompare(b.id));
  const rest = all
    .filter((s) => !preferredCategories.has(s.categorySlug))
    .sort((a, b) => a.id.localeCompare(b.id));
  return [...preferred, ...rest].slice(0, limit);
}

function statBullets(stats: FlatStatistic[]): string {
  return stats
    .map(
      (s) => `- ${s.value} — ${s.description} (${s.source.name}, ${s.source.year}) ${s.permalink}`,
    )
    .join("\n");
}

// ─── Draft builders ──────────────────────────────────────────────────────────

interface DraftFields {
  subject?: string;
  body: string;
}

function journalistDraft(target: PitchTarget, headline: FlatStatistic[]): DraftFields {
  return {
    subject: "Original, sourced data on lead response & AI in sales (open CC BY 4.0 dataset)",
    body: `Hi ${target.name.split(" (")[0]} team,

I run Prestyj and we maintain an open, CC BY 4.0 statistics dataset that may fit your beat. A few of the live numbers:

${statBullets(headline)}

Every row is dated and carries its primary publisher (HBR, InsideSales, Wyzowl, HubSpot, WordStream, McKinsey, Gartner, Salesforce, …), so it's quotable without re-verification. Each statistic also has a permanent citation URL on ${SITE_URL}/stat/<id>.

For your coverage specifically: ${target.angle}

Full dataset (CSV + JSON, schema.org/Dataset): ${DATA_URL}
Browse on web: ${STATS_URL}

I can also connect you with operators running this in production (HVAC owners, brokerage VPs, agency owners) for a follow-up story.

Thanks,
${FOUNDER}
Prestyj — ${SITE_URL}
LinkedIn — ${COMPANY_LINKEDIN}`,
  };
}

function researcherDraft(target: PitchTarget, headline: FlatStatistic[]): DraftFields {
  return {
    subject: "Citable open dataset: lead response, video advertising & AI-in-sales benchmarks",
    body: `Hi,

I'm sharing an open, CC BY 4.0 dataset that may be useful for ${target.name.toLowerCase()}:

Prestyj Lead Response, Video Advertising & AI Sales Statistics — a curated set of cite-worthy benchmarks. Each row carries its primary publisher, year, source URL when public, and a stable permalink (${SITE_URL}/stat/<id>). Representative rows:

${statBullets(headline)}

Why it's citable for research: ${target.angle}

- Canonical landing (schema.org/Dataset): ${DATA_URL}
- CSV: ${DATA_URL}/statistics.csv
- JSON: ${DATA_URL}/statistics.json
- A permanent DOI is being registered via Zenodo/Figshare/Harvard Dataverse — I can send the DOI as soon as it resolves so it's directly citable.

Happy to answer methodology questions or add a primary source you think is missing.

Thanks,
${FOUNDER}
Prestyj — ${SITE_URL}
${FOUNDER_EMAIL}`,
  };
}

function datasetDirectoryDraft(target: PitchTarget, headline: FlatStatistic[]): DraftFields {
  const doiLine = target.doi
    ? `\n> This platform mints a permanent DOI on publish. Record the DOI in data/backlinks/inventory.json (bucket="dataset-directory") and send it to researcher/journalist contacts as the citable identifier.`
    : "";
  return {
    body: `## ${target.name} — dataset submission checklist

**Submit at:** ${target.url}
**Prepared bundle:** ${target.bundle}
**Role:** ${target.angle}
**DOI minted:** ${target.doi ? "yes" : "no"}

This is an independent third-party repository — it hosts and curates the copy
itself. The canonical home stays ${DATA_URL}; this submission points back to it
and earns an independent referring domain (no self-owned mirror created).

### Representative rows (for the platform's description field)

${statBullets(headline)}

### Steps
1. Sign in / create an account at ${new URL(target.url).origin}.
2. Start a new dataset upload.
3. Paste metadata from the bundle's metadata file (${target.bundle}).
4. Upload \`statistics.csv\` and \`statistics.json\`.
5. Set license: CC BY 4.0. Set the related/source URL to ${DATA_URL}.
6. Publish.${doiLine}

### After publish
Append a row to data/backlinks/inventory.json:

\`\`\`json
{
  "id": "${target.slug}-<id-or-doi>",
  "bucket": "dataset-directory",
  "target_url": "<the live dataset URL>",
  "status": "live",
  "live_url": "<DOI url or dataset URL>",
  "first_seen": "<YYYY-MM-DD>",
  "notes": "Third-party repository copy of /data; points back to canonical. Not a self-owned mirror."
}
\`\`\`

Then re-run \`npm run backlinks:verify\`.`,
  };
}

function buildDraft(target: PitchTarget, headline: FlatStatistic[]): DraftFields {
  switch (target.bucket) {
    case "journalist":
      return journalistDraft(target, headline);
    case "researcher":
      return researcherDraft(target, headline);
    case "dataset-directory":
      return datasetDirectoryDraft(target, headline);
  }
}

// ─── Output ─────────────────────────────────────────────────────────────────

function writeDraft(target: PitchTarget, draft: DraftFields): string {
  const dir = resolve(process.cwd(), "docs", "backlinks", "pitch-drafts", target.bucket);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  const file = join(dir, `${target.slug}.md`);
  const front = [
    "---",
    `id: ${target.slug}`,
    `bucket: ${target.bucket}`,
    `name: ${JSON.stringify(target.name)}`,
    `target_url: ${target.url}`,
    `channel: ${target.channel}`,
    target.contact ? `contact: ${target.contact}` : null,
    target.doi !== undefined ? `doi: ${target.doi}` : null,
    `status: drafted`,
    `generated_at: ${new Date().toISOString()}`,
    "---",
    "",
  ]
    .filter((l): l is string => l !== null)
    .join("\n");
  const subjectBlock = draft.subject ? `**Subject:** ${draft.subject}\n\n` : "";
  writeFileSync(file, front + subjectBlock + draft.body + "\n");
  return file;
}

// ─── CLI ─────────────────────────────────────────────────────────────────────

interface CliOpts {
  limit: number;
  bucket: PitchBucket | null;
  list: boolean;
}

function parseArgs(): CliOpts {
  const a = process.argv.slice(2);
  let limit = TARGETS.length;
  let bucket: PitchBucket | null = null;
  let list = false;
  for (let i = 0; i < a.length; i++) {
    const flag = a[i];
    if (flag === "--limit") limit = Number(a[++i]) || limit;
    else if (flag === "--bucket") {
      const b = a[++i];
      if (b === "journalist" || b === "researcher" || b === "dataset-directory") bucket = b;
    } else if (flag === "--list") list = true;
  }
  return { limit, bucket, list };
}

function main(): void {
  const opts = parseArgs();
  const headline = pickHeadlineStats(5);

  const candidates = (
    opts.bucket ? TARGETS.filter((t) => t.bucket === opts.bucket) : TARGETS
  ).slice(0, opts.limit);

  if (opts.list) {
    console.log("Third-party dataset pitch targets:");
    for (const t of candidates) {
      console.log(`  [${t.bucket}] ${t.slug} → ${t.name} (${t.channel})`);
    }
    console.log(`\n${candidates.length} target(s). Headline stats pulled live from the dataset.`);
    return;
  }

  console.log(
    `Drafting ${candidates.length} third-party pitch(es) (journalists, researchers, dataset directories)…`,
  );
  console.log(`Quoting ${headline.length} live headline statistics from the dataset.\n`);

  let count = 0;
  for (const target of candidates) {
    const draft = buildDraft(target, headline);
    writeDraft(target, draft);
    count++;
    console.log(`  ✓ ${target.bucket}/${target.slug}.md`);
  }

  const buckets = Array.from(new Set(candidates.map((t) => t.bucket))).join(",");
  console.log(`\nWrote ${count} pitch draft(s).`);
  console.log(`Output: docs/backlinks/pitch-drafts/{${buckets}}/`);
  console.log(
    "These are earned/editorial channels — the canonical dataset + permalinks stay on prestyj.com.",
  );
}

main();
