import { readFileSync } from "node:fs";
import path from "node:path";
import { RESEARCH_FILE } from "./site";

/** Words that say nothing about which article a question belongs to. */
const STOP = new Set(
  (
    "a an the and or of to in on for with without by from at as is are be can could should would " +
    "how what why when which who whose do does it its this that their your our you we us use using " +
    "ai agent agents workflow workflows real estate fund funds investment institutional firm firms " +
    "team teams evaluate evaluating need needs best way ways guide make inside right only not done"
  ).split(" "),
);

const stem = (word: string): string =>
  word.length > 4 && word.endsWith("s") && !word.endsWith("ss") ? word.slice(0, -1) : word;

export function contentTokens(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .split(/[\s-]+/)
    .map(stem)
    .filter((word) => word.length > 1 && !STOP.has(word));
}

const bigrams = (words: string[]): Set<string> => {
  const out = new Set<string>();
  for (let i = 0; i + 1 < words.length; i++) out.add(`${words[i]} ${words[i + 1]}`);
  return out;
};

export type ArticleFingerprint = { slug: string; title: string; text: string };

/** Slug + title + description of every registered article, read from the file under `root`. */
export function readArticleFingerprints(root: string): ArticleFingerprint[] {
  const source = readFileSync(path.join(root, RESEARCH_FILE), "utf8");
  const out: ArticleFingerprint[] = [];
  for (const block of source.split(/\n {2}\{\n/).slice(1)) {
    const slug = /slug: "([^"]+)"/.exec(block)?.[1];
    if (!slug) continue;
    const field = (name: string): string =>
      new RegExp(`${name}:\\s*"((?:[^"\\\\]|\\\\.)*)"`).exec(block)?.[1] ?? "";
    out.push({ slug, title: field("title"), text: `${field("title")} ${field("description")}` });
  }
  return out;
}

export type Overlap = { slug: string; title: string; reason: string };

/**
 * A candidate question duplicates a live article when a distinctive phrase (content bigram)
 * of the question appears in the article's slug or title, or when most of the question's
 * distinctive words already appear in the article's slug, title and description.
 */
export function findOverlap(
  query: string,
  articles: ArticleFingerprint[],
  minContainment = 0.6,
): Overlap | null {
  const words = contentTokens(query);
  if (!words.length) return null;
  const queryBigrams = bigrams(words);
  for (const article of [...articles].sort((a, b) => a.slug.localeCompare(b.slug))) {
    const head = contentTokens(`${article.slug} ${article.title}`);
    const shared = [...bigrams(head)].filter((pair) => queryBigrams.has(pair)).sort();
    if (shared.length)
      return { slug: article.slug, title: article.title, reason: `shares "${shared[0]}"` };
    const known = new Set([...head, ...contentTokens(article.text)]);
    const unique = [...new Set(words)];
    const hits = unique.filter((word) => known.has(word));
    if (unique.length >= 2 && hits.length / unique.length >= minContainment)
      return {
        slug: article.slug,
        title: article.title,
        reason: `${hits.length}/${unique.length} distinctive words covered (${hits.join(", ")})`,
      };
  }
  return null;
}
