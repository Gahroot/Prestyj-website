#!/usr/bin/env npx tsx
/**
 * Generate submission-ready bundles of the Prestyj statistics dataset for
 * REAL, independently-operated third-party dataset directories. The operator
 * uploads them when ready (each platform requires an OAuth/email-bound signup
 * the agent can't automate).
 *
 * This is the opposite of a self-owned GitHub mirror: each destination below is
 * a reputable repository that independently HOSTS, CURATES, and (for the
 * academic ones) MINTS A DOI for the dataset. The canonical home stays
 * https://prestyj.com/data — every directory copy points back to it. That earns
 * an independent referring domain (and a citable DOI) instead of adding more
 * self-made crawl footprint.
 *
 * Output: docs/oss-dataset/distributions/<destination>/ with the right metadata
 * file shape per platform + a copy of statistics.csv/json.
 *
 * Destinations (all third-party, none self-owned):
 *   - zenodo           (CERN — mints a permanent DOI on upload)
 *   - figshare         (Digital Science — mints a permanent DOI)
 *   - dataverse        (Harvard Dataverse — mints a permanent DOI)
 *   - mendeley         (Elsevier Mendeley Data — mints a permanent DOI)
 *   - huggingface      (Hugging Face Datasets — ML community discovery)
 *   - kaggle           (Kaggle Datasets — data-science discovery)
 *   - dataworld        (data.world — open-data community)
 *   - openml           (OpenML — ML benchmark catalog)
 *
 * Idempotent — safe to re-run; overwrites bundle files. Reads the current
 * dataset from src/lib/statistics-data.ts so bundles always reflect the
 * source-of-truth.
 *
 * Usage: npx tsx scripts/backlinks/generate-dataset-directory-bundles.ts
 */

import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { getAllFlatStatistics, getStatisticsByCategory } from "../../src/lib/statistics/index";

const DATASET_TITLE = "Prestyj Lead Response, Video Advertising & AI Sales Statistics Dataset";
const CANONICAL_URL = "https://prestyj.com/data";
const SITE_URL = "https://prestyj.com";
const PERMALINK_BASE = `${SITE_URL}/stat/`;
const VERSION = new Date().toISOString().slice(0, 10);
const TODAY_ISO = new Date().toISOString();
const SHORT_DESC =
  "Curated dataset of 58+ cite-worthy statistics on speed-to-lead, video advertising, AI adoption in sales, lead conversion, and cost-per-lead by industry. Sourced 2024–2026, each row carries its primary publisher.";
const LONG_DESC = `A curated CC BY 4.0 dataset of cite-worthy statistics covering speed-to-lead, \
video advertising performance, AI adoption in sales, lead conversion rates, and \
cost-per-lead benchmarks by industry. Each row carries its primary publisher \
(Harvard Business Review, InsideSales, Wyzowl, HubSpot, WordStream, McKinsey, \
Gartner, Salesforce, etc.) and year of publication, plus a stable permalink at \
${PERMALINK_BASE}<id>. \n\nCanonical source: ${CANONICAL_URL}`;
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
    ],
    publication_date: VERSION,
    version: VERSION,
    language: "eng",
  };
  const readme = `# ${DATASET_TITLE}

Canonical source: <${CANONICAL_URL}>

${LONG_DESC}

> Zenodo (operated by CERN) mints a permanent DOI on upload — preserve it as a
> permanent academic citation primitive that resolves back to the canonical
> dataset. Record the DOI in data/backlinks/inventory.json under
> bucket="dataset-directory".
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
    references: [CANONICAL_URL],
    defined_type: "dataset",
  };
  const readme = `# ${DATASET_TITLE}

Canonical source: <${CANONICAL_URL}>

${LONG_DESC}

> Figshare (Digital Science) mints a permanent DOI on publish. Record the DOI
> in data/backlinks/inventory.json under bucket="dataset-directory".
`;
  writeBundle("figshare", {
    "metadata.json": JSON.stringify(meta, null, 2),
    "README.md": readme,
    "statistics.csv": csv,
    "statistics.json": json,
  });
}

function writeDataverse(csv: string, json: string): void {
  // Harvard Dataverse native JSON metadata block (citation metadata fields).
  const meta = {
    datasetVersion: {
      license: { name: "CC BY 4.0", uri: "https://creativecommons.org/licenses/by/4.0/" },
      metadataBlocks: {
        citation: {
          displayName: "Citation Metadata",
          fields: [
            { typeName: "title", multiple: false, typeClass: "primitive", value: DATASET_TITLE },
            {
              typeName: "author",
              multiple: true,
              typeClass: "compound",
              value: [
                {
                  authorName: {
                    typeName: "authorName",
                    multiple: false,
                    typeClass: "primitive",
                    value: "Prestyj",
                  },
                  authorAffiliation: {
                    typeName: "authorAffiliation",
                    multiple: false,
                    typeClass: "primitive",
                    value: "Prestyj",
                  },
                },
              ],
            },
            {
              typeName: "dsDescription",
              multiple: true,
              typeClass: "compound",
              value: [
                {
                  dsDescriptionValue: {
                    typeName: "dsDescriptionValue",
                    multiple: false,
                    typeClass: "primitive",
                    value: LONG_DESC,
                  },
                },
              ],
            },
            {
              typeName: "keyword",
              multiple: true,
              typeClass: "compound",
              value: KEYWORDS.map((k) => ({
                keywordValue: {
                  typeName: "keywordValue",
                  multiple: false,
                  typeClass: "primitive",
                  value: k,
                },
              })),
            },
            {
              typeName: "subject",
              multiple: true,
              typeClass: "controlledVocabulary",
              value: ["Business and Management"],
            },
          ],
        },
      },
    },
  };
  const readme = `# ${DATASET_TITLE}

Canonical source: <${CANONICAL_URL}>

${LONG_DESC}

> Harvard Dataverse mints a permanent DOI on publish and is a recognized
> research-data repository (great for citation by academics). Upload via the UI
> at <https://dataverse.harvard.edu> (create a dataset, paste from
> dataset.json, attach the CSV + JSON), or via the native API with this JSON.
> Record the DOI in data/backlinks/inventory.json under bucket="dataset-directory".
`;
  writeBundle("dataverse", {
    "dataset.json": JSON.stringify(meta, null, 2),
    "README.md": readme,
    "statistics.csv": csv,
    "statistics.json": json,
  });
}

function writeMendeley(csv: string, json: string): void {
  const meta = {
    name: DATASET_TITLE,
    description: LONG_DESC,
    licenses: [{ id: "CC-BY-4.0", full_name: "Creative Commons Attribution 4.0" }],
    categories: ["Marketing", "Sales", "Business"],
    related_links: [{ rel: "describes", href: CANONICAL_URL }],
    contributors: [{ first_name: "Prestyj", last_name: "" }],
  };
  const readme = `# ${DATASET_TITLE}

Canonical source: <${CANONICAL_URL}>

${LONG_DESC}

> Mendeley Data (Elsevier) mints a permanent DOI on publish and is indexed by
> DataCite + Google Dataset Search. Upload via <https://data.mendeley.com>.
> Record the DOI in data/backlinks/inventory.json under bucket="dataset-directory".
`;
  writeBundle("mendeley", {
    "metadata.json": JSON.stringify(meta, null, 2),
    "README.md": readme,
    "statistics.csv": csv,
    "statistics.json": json,
  });
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

> Canonical source: <${CANONICAL_URL}>

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

Canonical source: <${CANONICAL_URL}>

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
`;
  const readme = `# ${DATASET_TITLE}

Canonical source: <${CANONICAL_URL}>

${LONG_DESC}
`;
  writeBundle("dataworld", {
    "dataset.yml": yaml,
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

Canonical source: <${CANONICAL_URL}>

${LONG_DESC}
`;
  writeBundle("openml", {
    "metadata.yaml": yaml,
    "README.md": readme,
    "statistics.csv": csv,
    "statistics.json": json,
  });
}

// ─── Submission checklist ───────────────────────────────────────────────────

function writeSubmissionChecklist(rowCount: number): void {
  const md = `# Third-Party Dataset Directory: Submission Checklist

> **Policy:** these are REAL, independently-operated dataset repositories — not
> self-owned GitHub mirrors. Each one independently hosts and curates the
> dataset, and the academic ones mint a permanent DOI that resolves back to the
> canonical home (<${CANONICAL_URL}>). Submitting here earns an independent
> referring domain + a citable DOI, which is exactly what the link policy wants.
> Self-owned GitHub/Pages/npm mirrors stay halted (see scripts/backlinks/halt.ts).

The agent generated platform-specific bundles below from the current
${rowCount}-row dataset. Each row is **one** submission. Prioritize the
DOI-minting academic repositories first — a DOI is the strongest citation
primitive and is picked up by Google Dataset Search + DataCite.

| # | Destination | DOI? | Files to upload | Where to submit | Notes |
| - | --- | --- | --- | --- | --- |
| 1 | **Zenodo** (CERN) | ✅ | \`docs/oss-dataset/distributions/zenodo/\` — paste from \`zenodo.json\` | https://zenodo.org/uploads/new | Free, ORCID/email account. Best academic-citation primitive. |
| 2 | **Figshare** (Digital Science) | ✅ | \`docs/oss-dataset/distributions/figshare/\` — paste from \`metadata.json\` | https://figshare.com/account/projects | Free account; permanent DOI like Zenodo. |
| 3 | **Harvard Dataverse** | ✅ | \`docs/oss-dataset/distributions/dataverse/\` — paste from \`dataset.json\` or use native API | https://dataverse.harvard.edu | Recognized research-data repository; great for academic citation. |
| 4 | **Mendeley Data** (Elsevier) | ✅ | \`docs/oss-dataset/distributions/mendeley/\` — paste from \`metadata.json\` | https://data.mendeley.com | DataCite-indexed; appears in Google Dataset Search. |
| 5 | **Hugging Face Datasets** | — | \`docs/oss-dataset/distributions/huggingface/\` — push as a new dataset repo | https://huggingface.co/new-dataset | ML community discovery. \`huggingface-cli login\` then \`huggingface-cli upload <repo> .\`. |
| 6 | **Kaggle Datasets** | — | \`docs/oss-dataset/distributions/kaggle/\` — \`kaggle datasets create -p docs/oss-dataset/distributions/kaggle\` | https://www.kaggle.com/datasets | Data-science discovery. Needs Kaggle account + API token. \`dataset-metadata.json\` is pre-configured. |
| 7 | **data.world** | — | \`docs/oss-dataset/distributions/dataworld/\` — upload via UI | https://data.world/new | Open-data community. Make dataset PUBLIC, paste from \`dataset.yml\`. |
| 8 | **OpenML** | — | \`docs/oss-dataset/distributions/openml/\` — upload via UI or \`openml-python\` | https://www.openml.org/new-data | ML benchmark catalog; CSV gets cleanly absorbed. |

## Once published

For each successful submission, append a row to \`data/backlinks/inventory.json\`
(bucket **\`dataset-directory\`**, not the old \`redistribution\`):

\`\`\`json
{
  "id": "zenodo-<doi>",
  "bucket": "dataset-directory",
  "target_url": "https://zenodo.org/records/<id>",
  "status": "live",
  "live_url": "https://doi.org/<doi>",
  "first_seen": "<YYYY-MM-DD>",
  "notes": "Third-party repository copy of /data. DOI resolves to canonical landing. Not a self-owned mirror."
}
\`\`\`

Then re-run \`npm run backlinks:verify\` to update the gap report and
\`npm run dataset:pitch\` to refresh the researcher/journalist outreach drafts.

## Bundle integrity

Regenerate any time with:

\`\`\`bash
npm run dataset:bundles
# or: npx tsx scripts/backlinks/generate-dataset-directory-bundles.ts
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
  const rowCount = csv.split("\n").length - 2;

  console.log(`Generating third-party dataset-directory bundles (${rowCount} statistics)…`);
  // DOI-minting academic repositories first.
  writeZenodo(csv, json);
  writeFigshare(csv, json);
  writeDataverse(csv, json);
  writeMendeley(csv, json);
  // Discovery platforms.
  writeHuggingFace(csv, json);
  writeKaggle(csv, json);
  writeDataWorld(csv, json);
  writeOpenML(csv, json);
  writeSubmissionChecklist(rowCount);

  console.log(
    "✓ Wrote bundles to docs/oss-dataset/distributions/{zenodo,figshare,dataverse,mendeley,huggingface,kaggle,dataworld,openml}/",
  );
  console.log("✓ Submission checklist at docs/oss-dataset/distributions/SUBMISSION-CHECKLIST.md");
  console.log(
    "  These are independent third-party repositories — not self-owned mirrors. No halt gate applies.",
  );
}

main();
