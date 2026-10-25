import { readFileSync, existsSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { researchArticles, getRelatedArticles, getCapabilityArticles } from "./research";
import {
  institutionalBlogSlugs,
  isInstitutionalBlogSlug,
  institutionalIndexablePaths,
  institutionalPublicPaths,
} from "./site-map";
import { capabilities } from "./capabilities";
import { contentLedgerSchema } from "../../../scripts/seo/institutional-ledger";

describe("authoritative published research registry", () => {
  it("keeps the public demo outside indexable membership", () => {
    expect(institutionalPublicPaths).toContain("/demo");
    expect(institutionalIndexablePaths).not.toContain("/demo");
    expect(institutionalIndexablePaths.length).toBe(institutionalPublicPaths.length - 1);
  });
  it("has exact unique membership and existing files", () => {
    expect(institutionalBlogSlugs).toEqual(researchArticles.map((article) => article.slug));
    expect(new Set(institutionalBlogSlugs).size).toBe(institutionalBlogSlugs.length);
    for (const slug of institutionalBlogSlugs)
      expect(existsSync(`content/blog/${slug}.mdx`)).toBe(true);
  });
  it("excludes all unreleased ledger entries and legacy slugs", () => {
    const ledger = contentLedgerSchema.parse(
      JSON.parse(readFileSync("data/seo/institutional-content-backlog.json", "utf8")),
    );
    for (const item of ledger.items.filter((item) =>
      item.artifactPath.startsWith("content/drafts/"),
    ))
      expect(isInstitutionalBlogSlug(item.slug)).toBe(false);
    expect(isInstitutionalBlogSlug("facebook-ad-creative-fatigue-realtors-2026")).toBe(false);
  });
  it("provides deterministic topic-related reading instead of first-in-list links", () => {
    const related = getRelatedArticles("ai-assisted-quarter-end-close");
    // The registry grows automatically, so assert the ranking rule rather than one fixed slug.
    const current = researchArticles.find((a) => a.slug === "ai-assisted-quarter-end-close")!;
    const overlap = (a: (typeof researchArticles)[number]): number =>
      (a.category === current.category ? 10 : 0) +
      a.capabilities.filter((c) => current.capabilities.includes(c)).length * 2 +
      a.topics.filter((t) => current.topics.includes(t)).length;
    const best = Math.max(...researchArticles.filter((a) => a.slug !== current.slug).map(overlap));
    expect(related).toHaveLength(3);
    expect(related[0]?.category).toBe("Fund operations");
    expect(overlap(related[0]!)).toBe(best);
    const scores = related.map(overlap);
    expect(scores).toEqual([...scores].sort((a, b) => b - a));
    expect(related.map((a) => a.slug)).not.toEqual(
      researchArticles
        .filter((a) => a.slug !== current.slug)
        .slice(0, 3)
        .map((a) => a.slug),
    );
    expect(related).toEqual(getRelatedArticles("ai-assisted-quarter-end-close"));
    expect(related.every((article) => article.slug !== "ai-assisted-quarter-end-close")).toBe(true);
    expect(getRelatedArticles("unpublished")).toEqual([]);
  });
  it("references defined capabilities and only published reading", () => {
    const known = new Set(capabilities.map((capability) => capability.slug));
    for (const article of researchArticles)
      for (const capability of article.capabilities) expect(known.has(capability)).toBe(true);
    for (const capability of capabilities) {
      const articles = getCapabilityArticles(capability.slug);
      expect(articles.length).toBeGreaterThan(0);
      expect(articles.every((article) => isInstitutionalBlogSlug(article.slug))).toBe(true);
    }
  });
});
