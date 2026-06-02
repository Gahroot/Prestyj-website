#!/usr/bin/env npx tsx
/**
 * Generate redistribution-ready bundles of the Prestyj statistics dataset
 * for each open-data destination. The user uploads them when ready (each
 * platform requires OAuth-bound signup the agent can't automate).
 *
 * Output: docs/oss-dataset/distributions/<destination>/ with the right
 * metadata file shape per platform + a copy of statistics.csv/json.
 *
 * Destinations:
 *   - huggingface      (Hugging Face Datasets)
 *   - kaggle           (Kaggle Datasets)
 *   - dataworld        (data.world)
 *   - zenodo           (Zenodo — gives a DOI on upload)
 *   - figshare         (Figshare — academic mirror)
 *   - openml           (OpenML)
 *   - github-generic   (drop-in clone target)
 *
 * Idempotent — safe to re-run; overwrites bundle files.
 *
 * Usage: npx tsx scripts/backlinks/generate-redistribution-bundles.ts
 */

import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { getAllFlatStatistics, getStatisticsByCategory } from "../../src/lib/statistics/index";

const DATASET_TITLE = "Prestyj Lead Response, Video Advertising & AI Sales Statistics Dataset";
const CANONICAL_URL = "https://prestyj.com/data";
const SITE_URL = "https://prestyj.com";
const GITHUB_MIRROR = "https://github.com/Gahroot/prestyj-statistics-dataset";
const VERSION = new Date().toISOString().slice(0, 10);
const TODAY_ISO = new Date().toISOString();
const SHORT_DESC =
  "Curated dataset of 58+ cite-worthy statistics on speed-to-lead, video advertising, AI adoption in sales, lead conversion, and cost-per-lead by industry. Sourced 2024–2026, each row carries its primary publisher.";
const LONG_DESC = `A curated CC BY 4.0 dataset of cite-worthy statistics covering speed-to-lead, \
video advertising performance, AI adoption in sales, lead conversion rates, and \
cost-per-lead benchmarks by industry. Each row carries its primary publisher \
(Harvard Business Review, InsideSales, Wyzowl, HubSpot, WordStream, McKinsey, \
Gartner, Salesforce, etc.) and year of publication, plus a stable permalink at \
${SITE_URL}/stat/<id>. \n\nCanonical source: ${CANONICAL_URL} \nGitHub mirror: ${GITHUB_MIRROR}`;
const KEYWORDS = [
  "lead response time",
  "speed to lead",
  "video advertising",
  "AI in sales",
  "cost per lead",
  "marketing benchmarks",
  "sales operations",
  "home services marketing",
  "real estate lead response",
];

// ─── CSV / JSON content (matches /data/statistics.* shape) ───────────────────

const CSV_HEADERS = [
  "id",
  "category",
  "value",
  "description",
  "source_name",
  "source_year",
  "source_url",
  "context",
  "permalink",
  "embed_url",
  "license",
  "attribution",
] as const;

function csvEscape(value: string | undefined | null): string {
  if (value == null) return "";
  return /[",\r\n]/.test(value) ? `"${value.replace(/"/g, '""')}"` : value;
}

function buildCsv(): string {
  const rows = getAllFlatStatistics().map((s) =>
    [
      s.id,
      s.categoryTitle,
      s.value,
      s.description,
      s.source.name,
      s.source.year,
      s.source.url ?? "",
      s.context ?? "",
      s.permalink,
      s.embedUrl,
      "CC BY 4.0",
      `Prestyj — ${SITE_URL}`,
    ]
      .map(csvEscape)
      .join(","),
  );
  return [CSV_HEADERS.join(","), ...rows].join("\n") + "\n";
}

function buildJson(): string {
  const flat = getAllFlatStatistics();
  const grouped = getStatisticsByCategory();
  const payload = {
    name: "Prestyj Lead Response, Video Advertising & AI Sales Statistics",
    description: SHORT_DESC,
    url: CANONICAL_URL,
    license: "CC BY 4.0",
    license_url: "https://creativecommons.org/licenses/by/4.0/",
    attribution: `Prestyj — ${SITE_URL}`,
    citation: `Prestyj (2026). ${DATASET_TITLE}. ${CANONICAL_URL}`,
    version: VERSION,
    last_modified: TODAY_ISO,
    total: flat.length,
    categories: grouped.map(({ category, statistics }) => ({
      id: category.id,
      title: category.title,
      slug: category.slug,
      description: category.description,
      permalink: `${SITE_URL}/statistics#${category.slug}`,
      statistics,
    })),
  };
  return JSON.stringify(payload, null, 2);
}

// ─── Bundle writers ──────────────────────────────────────────────────────────

function writeBundle(dest: string, files: Record<string, string>): void {
  const root = resolve(process.cwd(), "docs", "oss-dataset", "distributions", dest);
  if (!existsSync(root)) mkdirSync(root, { recursive: true });
  for (const [relPath, contents] of Object.entries(files)) {
    const full = join(root, relPath);
    const parent = full.split("/").slice(0, -1).join("/");
    if (parent && !existsSync(parent)) mkdirSync(parent, { recursive: true });
    writeFileSync(full, contents);
  }
}

function writeHuggingFace(csv: string, json: string): void {
  const readme = `---
language:
  - en
license: cc-by-4.0
pretty_name: Prestyj Lead Response & AI Sales Statistics
size_categories:
  - n<1K
task_categories:
  - tabular-classification
  - other
tags:
  - marketing
  - sales
  - lead-generation
  - speed-to-lead
  - video-advertising
  - ai-adoption
  - cost-per-lead
  - benchmarks
  - statistics
configs:
  - config_name: default
    data_files:
      - split: train
        path: statistics.csv
---

# ${DATASET_TITLE}

> Canonical source: <${CANONICAL_URL}> · GitHub mirror: <${GITHUB_MIRROR}>

${LONG_DESC}

## Schema

See \`statistics.csv\` — columns: ${CSV_HEADERS.join(", ")}.

## License

[Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/).
Attribution to Prestyj (<${SITE_URL}>) is required.

## Citation

\`\`\`bibtex
@misc{prestyj-statistics-${VERSION.slice(0, 4)},
  title  = "${DATASET_TITLE}",
  author = "{Prestyj}",
  year   = "${VERSION.slice(0, 4)}",
  url    = "${CANONICAL_URL}",
  note   = "CC BY 4.0"
}
\`\`\`
`;

  const datasetInfos = JSON.stringify(
    {
      description: SHORT_DESC,
      license: "cc-by-4.0",
      homepage: CANONICAL_URL,
      version: VERSION,
      features: {
        id: "string",
        category: "string",
        value: "string",
        description: "string",
        source_name: "string",
        source_year: "string",
        source_url: "string",
        context: "string",
        permalink: "string",
        embed_url: "string",
        license: "string",
        attribution: "string",
      },
    },
    null,
    2,
  );

  writeBundle("huggingface", {
    "README.md": readme,
    "statistics.csv": csv,
    "statistics.json": json,
    "dataset_infos.json": datasetInfos,
  });
}

function writeKaggle(csv: string, json: string): void {
  const metadata = {
    title: DATASET_TITLE,
    id: "gahroot/prestyj-lead-response-ai-sales-statistics",
    subtitle: "58 cite-worthy stats on speed-to-lead, video ads, AI in sales, and CPL by industry",
    description: LONG_DESC,
    isPrivate: false,
    licenses: [{ name: "CC-BY-SA-4.0" }],
    keywords: KEYWORDS,
    collaborators: [],
    data: [],
  };
  const readme = `# ${DATASET_TITLE}

Canonical home: <${CANONICAL_URL}>
GitHub mirror: <${GITHUB_MIRROR}>

${LONG_DESC}

## License

CC BY 4.0 (Kaggle's UI may display as CC BY-SA — original is CC BY 4.0, see canonical landing page).
Attribution to Prestyj (<${SITE_URL}>) required when using this data.
`;
  writeBundle("kaggle", {
    "dataset-metadata.json": JSON.stringify(metadata, null, 2),
    "README.md": readme,
    "data/statistics.csv": csv,
    "data/statistics.json": json,
  });
}

function writeDataWorld(csv: string, json: string): void {
  const yaml = `title: ${DATASET_TITLE}
description: |
  ${SHORT_DESC}
license: CC BY 4.0
visibility: open
tags:
${KEYWORDS.map((k) => `  - "${k}"`).join("\n")}
files:
  - statistics.csv
  - statistics.json
sources:
  - title: Prestyj /data canonical landing
    url: ${CANONICAL_URL}
  - title: GitHub mirror
    url: ${GITHUB_MIRROR}
`;
  const readme = `# ${DATASET_TITLE}

Canonical: <${CANONICAL_URL}> · Mirror: <${GITHUB_MIRROR}>

${LONG_DESC}
`;
  writeBundle("dataworld", {
    "dataset.yml": yaml,
    "README.md": readme,
    "statistics.csv": csv,
    "statistics.json": json,
  });
}

function writeZenodo(csv: string, json: string): void {
  const meta = {
    creators: [{ name: "Prestyj", affiliation: "Prestyj" }],
    title: DATASET_TITLE,
    description: LONG_DESC,
    keywords: KEYWORDS,
    license: "cc-by-4.0",
    upload_type: "dataset",
    access_right: "open",
    related_identifiers: [
      {
        relation: "isDescribedBy",
        identifier: CANONICAL_URL,
        scheme: "url",
        resource_type: "dataset",
      },
      {
        relation: "isCompiledBy",
        identifier: GITHUB_MIRROR,
        scheme: "url",
      },
    ],
    publication_date: VERSION,
    version: VERSION,
    language: "eng",
  };
  const readme = `# ${DATASET_TITLE}

Canonical: <${CANONICAL_URL}> · Mirror: <${GITHUB_MIRROR}>

${LONG_DESC}

> Zenodo will assign a DOI on upload — preserve it as a permanent academic citation primitive.
`;
  writeBundle("zenodo", {
    "zenodo.json": JSON.stringify(meta, null, 2),
    "README.md": readme,
    "statistics.csv": csv,
    "statistics.json": json,
  });
}

function writeFigshare(csv: string, json: string): void {
  const meta = {
    title: DATASET_TITLE,
    description: LONG_DESC,
    tags: KEYWORDS,
    categories: ["Marketing", "Sales", "Business and Management"],
    license: "CC BY 4.0",
    references: [CANONICAL_URL, GITHUB_MIRROR],
    defined_type: "dataset",
  };
  const readme = `# ${DATASET_TITLE}

Canonical: <${CANONICAL_URL}> · Mirror: <${GITHUB_MIRROR}>

${LONG_DESC}
`;
  writeBundle("figshare", {
    "metadata.json": JSON.stringify(meta, null, 2),
    "README.md": readme,
    "statistics.csv": csv,
    "statistics.json": json,
  });
}

function writeOpenML(csv: string, json: string): void {
  const yaml = `name: prestyj-lead-response-ai-sales-statistics
description: |
  ${SHORT_DESC}
license: CC BY 4.0
attribution: Prestyj (${SITE_URL})
collection_date: ${VERSION}
language: English
source: ${CANONICAL_URL}
citation: Prestyj (2026). ${DATASET_TITLE}. ${CANONICAL_URL}
default_target_attribute: value
tags:
${KEYWORDS.map((k) => `  - "${k}"`).join("\n")}
`;
  const readme = `# ${DATASET_TITLE}

Canonical: <${CANONICAL_URL}> · Mirror: <${GITHUB_MIRROR}>

${LONG_DESC}
`;
  writeBundle("openml", {
    "metadata.yaml": yaml,
    "README.md": readme,
    "statistics.csv": csv,
    "statistics.json": json,
  });
}

function writeGithubGeneric(csv: string, json: string): void {
  const readme = `# ${DATASET_TITLE}

This is a self-contained mirror of <${CANONICAL_URL}>.

${LONG_DESC}

## Files

- \`statistics.csv\` — primary dataset, ${csv.split("\n").length - 2} rows + header
- \`statistics.json\` — same data, JSON shape
- \`LICENSE\` — CC BY 4.0

## License

Creative Commons Attribution 4.0 International (CC BY 4.0).
Attribution: Prestyj (<${SITE_URL}>).
`;
  const license = `Creative Commons Attribution 4.0 International (CC BY 4.0)
Full text: https://creativecommons.org/licenses/by/4.0/legalcode

Required attribution: Prestyj — ${SITE_URL}
`;
  writeBundle("github-generic", {
    "README.md": readme,
    LICENSE: license,
    "statistics.csv": csv,
    "statistics.json": json,
  });
}

// ─── Submission checklist ───────────────────────────────────────────────────

function writeSubmissionChecklist(): void {
  const md = `# Open-Data Redistribution: Submission Checklist

The agent generated platform-specific bundles. Each row below is **one** upload
that produces one permanent backlink (each backlinks \`${SITE_URL}\` from a
high-DR platform). Total potential: 7+ DR-90+ links across academic, ML, and
data-discovery destinations.

| # | Destination | Files to upload | URL to submit | Notes |
| - | --- | --- | --- | --- |
| 1 | **Hugging Face Datasets** | \`docs/oss-dataset/distributions/huggingface/\` — push as a new dataset repo at \`huggingface.co/datasets/<user>/prestyj-statistics\` | https://huggingface.co/new-dataset | Requires HF account + \`huggingface_hub\` CLI: \`huggingface-cli login\` then \`huggingface-cli upload <repo> .\`. DR≈90. |
| 2 | **Kaggle Datasets** | \`docs/oss-dataset/distributions/kaggle/\` — \`kaggle datasets create -p docs/oss-dataset/distributions/kaggle\` | https://www.kaggle.com/datasets | Needs Kaggle account + API token (download from kaggle.com/<user>/account → "Create New Token"). \`dataset-metadata.json\` is already configured. DR≈92. |
| 3 | **data.world** | \`docs/oss-dataset/distributions/dataworld/\` — upload via UI (no public CLI for free tier) | https://data.world/new | Needs free account. Make dataset PUBLIC, paste from \`dataset.yml\`, upload both CSV + JSON. DR≈84. |
| 4 | **Zenodo** | \`docs/oss-dataset/distributions/zenodo/\` — upload via UI; paste from \`zenodo.json\` | https://zenodo.org/uploads/new | Awards a permanent DOI — best academic-citation primitive. Free, requires ORCID or email account. DR≈92. |
| 5 | **Figshare** | \`docs/oss-dataset/distributions/figshare/\` — upload via UI; paste from \`metadata.json\` | https://figshare.com/account/projects | Free account; produces a permanent DOI like Zenodo. DR≈92. |
| 6 | **OpenML** | \`docs/oss-dataset/distributions/openml/\` — upload via UI or \`openml-python\` package | https://www.openml.org/new-data | Less polished UI; CSV gets cleanly absorbed. DR≈80. |
| 7 | **GitHub generic mirror** | \`docs/oss-dataset/distributions/github-generic/\` — \`git init && gh repo create\` for any other GitHub org | https://github.com/new | Already done at \`Gahroot/prestyj-statistics-dataset\` — but a duplicate at a more authoritative-sounding name (\`prestyj/statistics\` if you create the org) would help. DR≈95. |

## Once uploaded

For each successful upload, append a row to \`data/backlinks/inventory.json\`:

\`\`\`json
{
  "id": "zenodo-<doi>",
  "bucket": "redistribution",
  "target_url": "https://zenodo.org/record/<id>",
  "status": "live",
  "live_url": "https://zenodo.org/record/<id>",
  "first_seen": "<YYYY-MM-DD>"
}
\`\`\`

Then re-run \`npm run backlinks:verify\` to update the gap report.

## Bundle integrity

Regenerate any time with:

\`\`\`bash
npx tsx scripts/backlinks/generate-redistribution-bundles.ts
\`\`\`

Reads from \`src/lib/statistics-data.ts\` so the bundles always reflect the
current state of the source-of-truth dataset.
`;
  writeBundle("", {
    "SUBMISSION-CHECKLIST.md": md,
  });
}

// ─── Main ────────────────────────────────────────────────────────────────────

function main(): void {
  const csv = buildCsv();
  const json = buildJson();

  console.log(`Generating redistribution bundles (${csv.split("\n").length - 2} statistics)…`);
  writeHuggingFace(csv, json);
  writeKaggle(csv, json);
  writeDataWorld(csv, json);
  writeZenodo(csv, json);
  writeFigshare(csv, json);
  writeOpenML(csv, json);
  writeGithubGeneric(csv, json);
  writeSubmissionChecklist();

  console.log(`✓ Wrote bundles to docs/oss-dataset/distributions/{huggingface,kaggle,dataworld,zenodo,figshare,openml,github-generic}/`);
  console.log(`✓ Submission checklist at docs/oss-dataset/distributions/SUBMISSION-CHECKLIST.md`);
}

main();
