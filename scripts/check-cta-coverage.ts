/**
 * Institutional CTA coverage check.
 *
 * Fetches every institutional public path (static, capability, audience, connector,
 * and every registered article) from a running site and verifies the page's <main>
 * links to /book-demo. Registered articles must also render the registry-driven
 * article-end CTA, plus the article-inline CTA when the MDX has two or more H2s.
 *
 *   npx tsx scripts/check-cta-coverage.ts [baseUrl]   (default http://localhost:3000)
 *
 * Exits non-zero on any missing CTA or non-200 response.
 */

import { inlineCtaAnchorHeading } from "../src/lib/institutional/article-content";
import { readArticleSource } from "../src/lib/institutional/article-source";
import {
  institutionalBlogSlugs,
  institutionalPublicPaths,
} from "../src/lib/institutional/site-map";

/** Pages where a booking CTA in <main> would be out of place (legal, the booking page itself). */
const EXEMPT_PATHS: ReadonlySet<string> = new Set([
  "/book-demo",
  "/privacy",
  "/terms",
  "/accessibility",
]);

const BOOK_DEMO_LINK = /href="(?:https?:\/\/[^"/]+)?\/book-demo(?:[?#"][^"]*)?"/;

function mainHtml(html: string): string {
  const start = html.search(/<main[\s>]/);
  const end = html.lastIndexOf("</main>");
  return start >= 0 && end > start ? html.slice(start, end) : "";
}

async function checkPath(baseUrl: string, path: string): Promise<string[]> {
  const response = await fetch(`${baseUrl}${path}`, {
    redirect: "manual",
    signal: AbortSignal.timeout(120_000),
  });
  if (response.status !== 200) return [`${path}: HTTP ${response.status}`];
  const main = mainHtml(await response.text());
  if (!main) return [`${path}: no <main> element`];
  const problems: string[] = [];
  if (!EXEMPT_PATHS.has(path) && !BOOK_DEMO_LINK.test(main)) {
    problems.push(`${path}: no /book-demo link inside <main>`);
  }
  const slug = path.startsWith("/blog/") ? path.slice("/blog/".length) : null;
  if (slug && institutionalBlogSlugs.includes(slug)) {
    if (!main.includes(`data-pj-cta="article-end:${slug}"`)) {
      problems.push(`${path}: missing article-end CTA`);
    }
    if (
      inlineCtaAnchorHeading(readArticleSource(slug)) !== null &&
      !main.includes(`data-pj-cta="article-inline:${slug}"`)
    ) {
      problems.push(`${path}: missing article-inline CTA`);
    }
    if (!main.includes("/book-demo?workflow=")) {
      problems.push(`${path}: article CTA does not deep-link a workflow demo`);
    }
  }
  return problems;
}

async function main(): Promise<void> {
  const baseUrl = (process.argv[2] ?? "http://localhost:3000").replace(/\/$/, "");
  const paths = [...new Set(institutionalPublicPaths)].sort();
  const problems: string[] = [];
  for (const path of paths) {
    try {
      problems.push(...(await checkPath(baseUrl, path)));
    } catch (error) {
      problems.push(`${path}: ${error instanceof Error ? error.message : String(error)}`);
    }
  }
  console.log(`Checked ${paths.length} institutional paths against ${baseUrl}.`);
  if (problems.length > 0) {
    console.error(`\nFAIL: ${problems.length} CTA coverage problem(s):`);
    for (const problem of problems) console.error(`  - ${problem}`);
    process.exit(1);
  }
  console.log("PASS: every institutional page links to /book-demo; every article has its CTAs.");
}

void main();
