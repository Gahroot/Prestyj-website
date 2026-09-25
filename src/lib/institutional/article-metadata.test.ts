import { readFileSync } from "node:fs";
import { load, JSON_SCHEMA } from "js-yaml";
import { describe, expect, it } from "vitest";
import { getArticleDates, formatArticleDate, rssArticleDate } from "./article-metadata";
import { researchArticles } from "./research";

describe("evidenced article dates", () => {
  it.each(["2026-02-29", "2026-04-31", "today", "2026-13-01", "2026-1-01", "2026-09-24T00:00:00Z"])(
    "rejects %s",
    (date) => {
      expect(() => getArticleDates({ date })).toThrow();
    },
  );
  it("rejects missing publication or backdated updates", () => {
    expect(() => getArticleDates({})).toThrow();
    expect(() => getArticleDates({ date: "2026-09-24", updated: "2026-09-23" })).toThrow();
  });
  it("uses publication if no revision was observed, never a clock", () => {
    expect(getArticleDates({ date: "2024-02-29" })).toEqual({
      published: "2024-02-29",
      modified: "2024-02-29",
    });
    expect(getArticleDates({ date: "2026-08-27", updated: "2026-09-24" })).toEqual({
      published: "2026-08-27",
      modified: "2026-09-24",
    });
    expect(formatArticleDate("2026-09-24")).toBe("September 24, 2026");
    expect(rssArticleDate("2026-09-24")).toBe("Thu, 24 Sep 2026 00:00:00 GMT");
  });
  it("validates every registered article's actual source frontmatter", () => {
    for (const article of researchArticles) {
      const source = readFileSync(`content/blog/${article.slug}.mdx`, "utf8");
      expect(() =>
        getArticleDates(load(source.split("---")[1] ?? "", { schema: JSON_SCHEMA })),
      ).not.toThrow();
    }
  });
});
