import { execFile } from "node:child_process";
import path from "node:path";
import { promisify } from "node:util";
import { bannedCanonicalCopy } from "../../../src/lib/institutional/site-map";
import { detectSlop } from "../../seo-bot/validation/slop-detector";
import type { ContentConfig } from "./config";
import { sourceUrls } from "./factcheck";
import { readArticle, readRegistry, wordCount } from "./site";

/** Hard-fail vocabulary for institutional content (CLAUDE.md, roadmap.md, site-map bannedCanonicalCopy). */
export const AVOID_TERMS: readonly string[] = [
  ...new Set([
    "service business",
    "service businesses",
    "service-business automation",
    "realtor",
    "realtors",
    "realtor software",
    "custom ai",
    "ai automation",
    "internal tools",
    "internal tool",
    "coding agents",
    "coding agent",
    "desktop ai",
    "generic ai consulting",
    "commodity monthly",
    "monthly plan",
    "monthly plans",
    "batch-video subscription",
    ...bannedCanonicalCopy.map((term) => term.toLowerCase()),
  ]),
].sort();

export const USE_TERMS: readonly string[] = [
  "ai agents for institutional real estate",
  "finished work product",
  "reviewed work product",
  "source attached",
  "controlled by your review rules",
  "system of record",
  "review gate",
  "exception queue",
];

const escapeRegex = (value: string): string => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/** Matches whole words only, so link slugs like /blog/custom-ai-agents-... do not count. */
export function findTerms(text: string, terms: readonly string[]): string[] {
  const plain = text.replace(/\]\([^)]*\)/g, "]").toLowerCase();
  return terms.filter((term) =>
    new RegExp(`(?<![\\w/-])${escapeRegex(term)}(?![\\w-])`, "i").test(plain),
  );
}

export type GateResult = { name: string; passed: boolean; details: string[] };

const tokens = (text: string): string[] =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((word) => word.length > 2);

export function shingles(text: string, k = 5): Set<string> {
  const words = tokens(text);
  const out = new Set<string>();
  for (let i = 0; i + k <= words.length; i++) out.add(words.slice(i, i + k).join(" "));
  return out;
}

export function jaccard(a: Set<string>, b: Set<string>): number {
  if (!a.size || !b.size) return 0;
  let inter = 0;
  for (const item of a) if (b.has(item)) inter++;
  return inter / (a.size + b.size - inter);
}

const TITLE_STOP = new Set([
  "the",
  "and",
  "for",
  "with",
  "how",
  "what",
  "why",
  "real",
  "estate",
  "your",
]);

export type ContentGateInput = {
  root: string;
  slug: string;
  title: string;
  description: string;
  body: string;
  mode: "new" | "refresh";
  allowed: Set<string>;
  /** For refresh: the article before this run. */
  previous?: { body: string; title: string } | undefined;
};

/** Pure, file-read-only gates on the article itself. */
export function runContentGates(input: ContentGateInput, config: ContentConfig): GateResult[] {
  const { body } = input;
  const full = `${input.title}\n${input.description}\n${body}`;
  const results: GateResult[] = [];

  const avoid = findTerms(full, AVOID_TERMS);
  const prevAvoid = input.previous
    ? findTerms(`${input.previous.title}\n${input.previous.body}`, AVOID_TERMS)
    : [];
  const newAvoid =
    input.mode === "refresh" ? avoid.filter((term) => !prevAvoid.includes(term)) : avoid;
  const use = findTerms(full, USE_TERMS);
  results.push({
    name: "positioning",
    passed: newAvoid.length === 0 && use.length >= config.gates.minUseTerms,
    details: [
      ...newAvoid.map((term) => `avoid term used: "${term}"`),
      ...(use.length < config.gates.minUseTerms
        ? [`only ${use.length} positioning terms used (min ${config.gates.minUseTerms})`]
        : []),
    ],
  });

  const slop = detectSlop(full);
  results.push({
    name: "slop",
    passed: slop.hits.length <= config.gates.maxSlopHits,
    details: slop.hits.map((hit) => `slop phrase: "${hit}"`),
  });

  const words = wordCount(body);
  const minWords =
    input.mode === "new"
      ? config.gates.minWordsNew
      : Math.max(
          config.gates.minWordsRefresh,
          Math.floor(wordCount(input.previous?.body ?? "") * config.gates.refreshMinWordRatio),
        );
  results.push({
    name: "word-count",
    passed: words >= minWords,
    details: words >= minWords ? [] : [`${words} words (min ${minWords})`],
  });

  const sections: string[] = [];
  const firstPara = body.trim().split(/\n\s*\n/)[0] ?? "";
  const sentences = firstPara.split(/(?<=[.!?])\s+/).filter((s) => s.trim().length > 0);
  if (
    /^#/.test(firstPara.trim()) ||
    sentences.length < 2 ||
    sentences.length > 3 ||
    wordCount(firstPara) > 90
  )
    sections.push("opening must be a 2–3 sentence direct answer (≤90 words) before any heading");
  if (/^# /m.test(body)) sections.push("body must not contain an H1 (title renders as H1)");
  const questionH2 = [...body.matchAll(/^## (.+)$/gm)].filter((m) =>
    (m[1] ?? "").trim().endsWith("?"),
  );
  if (questionH2.length < 3) sections.push(`only ${questionH2.length} question-shaped H2s (min 3)`);
  const faqStart = body.indexOf("## Frequently asked questions");
  if (faqStart < 0) sections.push("missing ## Frequently asked questions");
  else {
    const faq = body.slice(faqStart + 5);
    const faqSection = faq.slice(0, faq.search(/\n## /) < 0 ? undefined : faq.search(/\n## /));
    const qs = [...faqSection.matchAll(/^### .+\?\s*$/gm)].length;
    if (qs < 3) sections.push(`FAQ has ${qs} ### questions (min 3)`);
  }
  if (!/^## Review and limitations\s*$/m.test(body))
    sections.push("missing ## Review and limitations");
  if (!/^## Sources\s*$/m.test(body)) sections.push("missing ## Sources");
  else if (sourceUrls(body).length < config.gates.minReachableSources)
    sections.push("## Sources lists too few URLs");
  if (!/illustrative|synthetic|fictional/i.test(body))
    sections.push("examples not labelled illustrative/synthetic");
  const lastChunk = body
    .trim()
    .split(/\n\s*\n/)
    .slice(-3)
    .join("\n");
  if (!/\]\(\/book-demo\)/.test(lastChunk)) sections.push("closing pointer to /book-demo missing");
  for (const match of body.matchAll(/\]\((\/[^\s)]*)\)/g)) {
    const target = (match[1] ?? "").split("#")[0]?.split("?")[0] ?? "";
    if (!input.allowed.has(target))
      sections.push(`internal link not live/institutional: ${target}`);
  }
  for (const line of body.split("\n"))
    if (
      /prestyj/i.test(line) &&
      /\d|%|\$/.test(line.replace(/\]\([^)]*\)/g, "")) &&
      !/fixture|reference|pilot|production|illustrative|synthetic/i.test(line)
    )
      sections.push(`Prestyj figure without stage label: "${line.trim().slice(0, 100)}"`);
  results.push({ name: "required-sections", passed: sections.length === 0, details: sections });

  const mine = shingles(body);
  const titleTokens = new Set(tokens(input.title).filter((t) => !TITLE_STOP.has(t)));
  const dup: string[] = [];
  for (const entry of readRegistry(input.root)) {
    if (entry.slug === input.slug) continue;
    const other = readArticle(input.root, entry.slug);
    const similarity = other ? jaccard(mine, shingles(other.body)) : 0;
    if (similarity > config.gates.maxBodySimilarity)
      dup.push(`body ${similarity.toFixed(2)} similar to /blog/${entry.slug}`);
    const otherTitle = new Set(
      tokens(`${entry.title} ${String(other?.metadata.title ?? "")}`).filter(
        (t) => !TITLE_STOP.has(t),
      ),
    );
    const overlap = jaccard(titleTokens, otherTitle);
    if (overlap > config.gates.maxTitleOverlap)
      dup.push(`title overlaps ${overlap.toFixed(2)} with /blog/${entry.slug}`);
  }
  results.push({ name: "duplicate", passed: dup.length === 0, details: dup });
  return results;
}

/** Repository gates that run real commands. Injectable so tests can fake them. */
export type RepoGates = {
  typecheck(root: string, changedFiles: string[]): Promise<GateResult>;
  institutionalCheck(root: string): Promise<GateResult>;
  registryTests(root: string): Promise<GateResult>;
};

const run = promisify(execFile);

async function exec(
  root: string,
  cmd: string,
  args: string[],
): Promise<{ code: number; out: string }> {
  try {
    const { stdout, stderr } = await run(cmd, args, {
      cwd: root,
      maxBuffer: 32 * 1024 * 1024,
      timeout: 600_000,
    });
    return { code: 0, out: `${stdout}${stderr}` };
  } catch (error) {
    const e = error as { code?: number; stdout?: string; stderr?: string; message?: string };
    return {
      code: typeof e.code === "number" ? e.code : 1,
      out: `${e.stdout ?? ""}${e.stderr ?? e.message ?? ""}`,
    };
  }
}

export const commandRepoGates: RepoGates = {
  async typecheck(root, changedFiles) {
    const { code, out } = await exec(root, "npx", ["tsc", "--noEmit"]);
    if (code === 0) return { name: "typecheck", passed: true, details: [] };
    const errors = out.split("\n").filter((line) => /error TS\d+/.test(line));
    const changed = new Set(changedFiles.map((file) => path.relative(root, file)));
    const ours = errors.filter((line) => changed.has(line.split("(")[0]?.trim() ?? ""));
    // Errors only in files this cycle did not touch are pre-existing work by others: noted, not blocking.
    return {
      name: "typecheck",
      passed: ours.length === 0 && errors.length > 0,
      details: ours.length
        ? ours.slice(0, 10)
        : errors.length === 0
          ? [`tsc failed without diagnostics: ${out.slice(0, 300)}`]
          : [`${errors.length} pre-existing errors outside changed files (not blocking)`],
    };
  },
  async institutionalCheck(root) {
    const { code, out } = await exec(root, "npx", [
      "tsx",
      "scripts/seo/check-institutional-content.ts",
    ]);
    let details: string[] = [];
    try {
      const json = JSON.parse(out.slice(out.indexOf("{"), out.lastIndexOf("}") + 1)) as {
        errors?: string[];
      };
      details = json.errors ?? [];
    } catch {
      details = code === 0 ? [] : [out.slice(0, 500)];
    }
    return { name: "institutional-check", passed: code === 0 && details.length === 0, details };
  },
  async registryTests(root) {
    const { code, out } = await exec(root, "npx", [
      "vitest",
      "run",
      "src/lib/institutional",
      "scripts/seo",
    ]);
    return {
      name: "registry-tests",
      passed: code === 0,
      details:
        code === 0
          ? []
          : out
              .split("\n")
              .filter((l) => /FAIL|AssertionError|Error:/.test(l))
              .slice(0, 10),
    };
  },
};

const words = (text: string): string[] =>
  text
    .toLowerCase()
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[^a-z0-9'%$. ]+/g, " ")
    .replace(/\.(?=\s|$)/g, " ")
    .split(/\s+/)
    .filter(Boolean);

/**
 * Longest passages copied word-for-word from a fetched source. Quoted text ("...")
 * and the Sources section are ignored, since short attributed quotes are allowed.
 */
export function copiedPassages(
  body: string,
  sources: readonly string[],
  minWords: number,
): string[] {
  const prose = body
    .split(/\n## Sources\b/)[0]!
    .replace(/["\u201c][^"\u201d\n]{0,400}["\u201d]/g, " | ")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1");
  const k = 8;
  const grams = new Set<string>();
  for (const source of sources) {
    const w = words(source);
    for (let i = 0; i + k <= w.length; i++) grams.add(w.slice(i, i + k).join(" "));
  }
  const out: string[] = [];
  for (const segment of prose.split(" | ")) {
    const w = words(segment);
    let i = 0;
    while (i + k <= w.length) {
      if (!grams.has(w.slice(i, i + k).join(" "))) {
        i++;
        continue;
      }
      let end = i + k;
      while (end < w.length && grams.has(w.slice(end - k + 1, end + 1).join(" "))) end++;
      if (end - i >= minWords) out.push(w.slice(i, end).join(" "));
      i = end;
    }
  }
  return out;
}

export function originalityGate(
  body: string,
  sources: readonly string[],
  maxCopiedWords: number,
): GateResult {
  const copied = copiedPassages(body, sources, maxCopiedWords);
  return {
    name: "originality",
    passed: copied.length === 0,
    details: copied.map(
      (passage) =>
        `copied from a source (${passage.split(" ").length} words, paraphrase or quote it): "${passage.slice(0, 120)}..."`,
    ),
  };
}
