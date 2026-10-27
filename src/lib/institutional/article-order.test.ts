import { describe, expect, it } from "vitest";
import { sortNewestFirst } from "./article-order";
import type { ResearchArticle } from "./research";

const make = (slug: string): ResearchArticle => ({
  slug,
  capabilities: [],
  topics: [],
  category: "c",
  title: slug,
  description: slug,
});

describe("sortNewestFirst", () => {
  const dates: Record<string, string> = {
    a: "2026-08-27",
    b: "2026-10-27",
    c: "2026-08-27",
    d: "2026-09-27",
  };
  it("puts the most recently published article first, ties by later registry entry", () => {
    const sorted = sortNewestFirst(["a", "b", "c", "d"].map(make), (slug) => dates[slug] ?? "");
    expect(sorted.map((x) => x.slug)).toEqual(["b", "d", "c", "a"]);
  });
  it("does not mutate the input", () => {
    const input = ["a", "b"].map(make);
    sortNewestFirst(input, (slug) => dates[slug] ?? "");
    expect(input.map((x) => x.slug)).toEqual(["a", "b"]);
  });
});
