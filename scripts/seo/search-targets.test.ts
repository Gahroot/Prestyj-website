import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { audiences } from "../../src/lib/institutional/audiences";
import { capabilities } from "../../src/lib/institutional/capabilities";
import { researchArticles, getRelatedArticles } from "../../src/lib/institutional/research";
import { institutionalIndexablePaths } from "../../src/lib/institutional/site-map";
import { getArticleDates } from "../../src/lib/institutional/article-metadata";
import { parseArticle } from "./check-institutional-content";

const searchGuides = ["custom-ai-agents-real-estate", "ai-operating-systems-real-estate"];

describe("institutional search targets", () => {
  it("gives each service and audience a distinct niche-specific search title", () => {
    const titles = [...capabilities, ...audiences].map((item) => item.searchTitle);
    expect(new Set(titles).size).toBe(titles.length);
    for (const title of titles) {
      expect(title).toMatch(/AI/);
      expect(title).toMatch(/Real Estate|CRE/);
      // The root layout appends the brand once; children must not append it again.
      expect(title).not.toContain("Prestyj");
    }
  });

  it.each(searchGuides)("registers %s consistently without orphaning it", (slug) => {
    const article = researchArticles.find((item) => item.slug === slug);
    const { metadata, body } = parseArticle(readFileSync(`content/blog/${slug}.mdx`, "utf8"));
    expect(article).toBeDefined();
    expect(metadata.title).toBe(article?.title);
    expect(metadata.description).toBe(article?.description);
    expect(getArticleDates(metadata)).toEqual({ published: "2026-09-27", modified: "2026-09-27" });
    expect(institutionalIndexablePaths).toContain(`/blog/${slug}`);
    expect(body).toContain("## Sources and limitations");
    expect(body).toMatch(/fictional/);
    expect(body).toContain("https://www.anthropic.com/engineering/building-effective-agents");
    for (const match of body.matchAll(/\]\((\/[^\s)]+)\)/g)) {
      expect(institutionalIndexablePaths).toContain(match[1]);
    }
    expect(readFileSync("src/app/platform/page.tsx", "utf8")).toContain(`/blog/${slug}`);
    expect(getRelatedArticles(slug).some((item) => searchGuides.includes(item.slug))).toBe(true);
  });
});
