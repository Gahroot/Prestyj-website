import { existsSync, mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import type { ContentLogEntry, Opportunity } from "../shared/contracts";
import { loadContentConfig } from "./config";
import { createFakeLlm, fakeArticleBody, fakeFetcher, passingRepoGates } from "./fake";
import { AVOID_TERMS, findTerms, runContentGates } from "./gates";
import { runContentCycle } from "./index";
import { findOverlap } from "./dedupe";
import { LlmAuthError, extractJson } from "./llm";
import { draftMetaSchema } from "./write";
import { allowedInternalPaths } from "./site";
import { capUsage } from "./store";

const NOW = new Date("2026-10-25T12:00:00Z");
const RESEARCH = `import type { CapabilitySlug } from "@/lib/institutional/capabilities";

export const researchArticles: readonly ResearchArticle[] = [
  {
    slug: "existing-article",
    capabilities: ["fund-operations"],
    topics: ["source-lineage"],
    category: "Fund operations",
    title: "An existing quarter-end article",
    description: "Existing.",
  },
] as const;
`;

let root: string;
const raise = vi.fn(async (input: { severity: string; component: string; message: string }) => ({
  ...input,
  id: "x",
  raisedAt: NOW.toISOString(),
  resolvedAt: null,
}));

function write(rel: string, content: string): void {
  mkdirSync(path.dirname(path.join(root, rel)), { recursive: true });
  writeFileSync(path.join(root, rel), content);
}
const read = (rel: string): string => readFileSync(path.join(root, rel), "utf8");
const opportunities = (): Opportunity[] =>
  JSON.parse(read("data/growth/opportunities.json")) as Opportunity[];
const deps = (llm = createFakeLlm()) => ({
  llm,
  fetcher: fakeFetcher,
  repoGates: passingRepoGates,
  config: loadContentConfig(),
  raise: raise as never,
});

beforeEach(() => {
  root = mkdtempSync(path.join(tmpdir(), "content-cycle-"));
  raise.mockClear();
  write("src/lib/institutional/research.ts", RESEARCH);
  write(
    "content/blog/existing-article.mdx",
    `---\ntitle: "Existing"\ndescription: "Existing"\ndate: "2026-08-27"\nauthor: "Nolan Grout"\n---\n\nQuarter-end close body about bank matching and accruals.\n`,
  );
  write(
    "data/seo/institutional-buyer-prompts.json",
    JSON.stringify({ prompts: [{ id: "BP-01", text: "Prompt one?" }] }),
  );
  write("data/seo/institutional-content-backlog.json", JSON.stringify({ items: [] }));
  // Recent research exists so the research step is not due unless a test wants it.
  write(
    "data/growth/opportunities.json",
    JSON.stringify([
      {
        id: "research-seed",
        kind: "new-topic",
        path: null,
        queries: ["How should an asset manager monitor loan covenants with AI?"],
        evidence: "e",
        score: 90,
        createdAt: NOW.toISOString(),
        status: "open",
      },
    ]),
  );
});
afterEach(() => rmSync(root, { recursive: true, force: true }));

describe("content cycle", () => {
  it("publishes and registers a gate-passing article and marks the opportunity done", async () => {
    const result = await runContentCycle({ root, dryRun: false, now: NOW }, deps());
    expect(result.publishedPaths).toEqual(["/blog/covenant-watchlist-agent-review"]);
    expect(result.changedFiles).toEqual(
      expect.arrayContaining([
        "content/blog/covenant-watchlist-agent-review.mdx",
        "src/lib/institutional/research.ts",
        "data/growth/content-log.json",
      ]),
    );
    const mdx = read("content/blog/covenant-watchlist-agent-review.mdx");
    expect(mdx).toContain('date: "2026-10-25"');
    expect(mdx).toContain('author: "Nolan Grout"');
    expect(read("src/lib/institutional/research.ts")).toContain(
      'slug: "covenant-watchlist-agent-review"',
    );
    expect(opportunities().find((o) => o.id === "research-seed")?.status).toBe("done");
    expect(opportunities().some((o) => o.id === "prompt-BP-01")).toBe(true);
    const log = JSON.parse(read("data/growth/content-log.json")) as ContentLogEntry[];
    expect(log.find((e) => e.action === "publish")?.sourcesChecked).toBe(2);
  });

  it("rolls back every file of an item that fails a repository gate", async () => {
    const researchBefore = read("src/lib/institutional/research.ts");
    const result = await runContentCycle(
      { root, dryRun: false, now: NOW },
      {
        ...deps(),
        repoGates: {
          ...passingRepoGates,
          typecheck: async () => ({ name: "typecheck", passed: false, details: ["boom"] }),
        },
      },
    );
    expect(result.publishedPaths).toEqual([]);
    expect(existsSync(path.join(root, "content/blog/covenant-watchlist-agent-review.mdx"))).toBe(
      false,
    );
    expect(read("src/lib/institutional/research.ts")).toBe(researchBefore);
    expect(result.changedFiles.every((f) => f.startsWith("data/growth/"))).toBe(true);
    expect(result.log.find((e) => e.action === "reject")?.reasons).toContain("typecheck: boom");
    expect(opportunities().find((o) => o.id === "research-seed")?.status).toBe("rejected");
  });

  it("rejects when a core claim is unsupported", async () => {
    const llm = createFakeLlm({
      factcheck: {
        claims: [{ claim: "x", quote: "nope", core: true, supported: false, replacement: null }],
      },
    });
    const result = await runContentCycle({ root, dryRun: false, now: NOW }, deps(llm));
    expect(result.log[0]?.action).toBe("reject");
    expect(result.log[0]?.reasons.join()).toContain("core claim unsupported");
  });

  it("respects the rolling weekly new-article cap", async () => {
    const entry = (day: string): ContentLogEntry => ({
      at: `${day}T08:00:00Z`,
      action: "publish",
      slug: "a",
      path: "/blog/a",
      title: "a",
      opportunityId: null,
      reasons: [],
      sourcesChecked: 0,
      costUsd: 0,
    });
    write(
      "data/growth/content-log.json",
      JSON.stringify([entry("2026-10-20"), entry("2026-10-24"), entry("2026-10-10")]),
    );
    expect(
      capUsage(JSON.parse(read("data/growth/content-log.json")) as ContentLogEntry[], NOW)
        .newThisWeek,
    ).toBe(2);
    const llm = createFakeLlm();
    const result = await runContentCycle({ root, dryRun: false, now: NOW }, deps(llm));
    expect(result.publishedPaths).toEqual([]);
    expect(llm.calls.filter((c) => c.purpose === "write")).toHaveLength(0);
    expect(result.log[0]?.reasons[0]).toContain("cap reached: 2/2");
  });

  it("dry run writes nothing", async () => {
    const before = read("data/growth/opportunities.json");
    const result = await runContentCycle({ root, dryRun: true, now: NOW }, deps());
    expect(result.log.some((e) => e.action === "publish")).toBe(true);
    expect(result.changedFiles).toEqual([]);
    expect(existsSync(path.join(root, "content/blog/covenant-watchlist-agent-review.mdx"))).toBe(
      false,
    );
    expect(read("data/growth/opportunities.json")).toBe(before);
    expect(existsSync(path.join(root, "data/growth/content-log.json"))).toBe(false);
  });

  it("runs research when due and appends deduped new-topic items", async () => {
    write("data/growth/opportunities.json", "[]");
    const llm = createFakeLlm();
    await runContentCycle({ root, dryRun: false, now: NOW }, deps(llm));
    expect(llm.calls[0]?.purpose).toBe("research");
    expect(llm.calls[0]?.webSearchMaxUses).toBeGreaterThan(0);
    expect(opportunities().filter((o) => o.id.startsWith("research-"))).toHaveLength(1);
  });

  it("missing API key returns an empty result and raises a critical exception", async () => {
    const saved = process.env.ANTHROPIC_API_KEY;
    delete process.env.ANTHROPIC_API_KEY;
    try {
      const result = await runContentCycle(
        { root, dryRun: false, now: NOW },
        { config: loadContentConfig(), raise: raise as never },
      );
      expect(result).toEqual({ changedFiles: [], publishedPaths: [], refreshedPaths: [], log: [] });
      expect(raise).toHaveBeenCalledWith(
        expect.objectContaining({ severity: "critical", component: "content.llm" }),
        root,
      );
    } finally {
      if (saved !== undefined) process.env.ANTHROPIC_API_KEY = saved;
    }
  });

  it("auth failure from the API is critical and leaves the tree untouched", async () => {
    const result = await runContentCycle(
      { root, dryRun: false, now: NOW },
      deps(createFakeLlm({ failWith: new LlmAuthError("bad key") })),
    );
    expect(result.publishedPaths).toEqual([]);
    expect(raise).toHaveBeenCalledWith(expect.objectContaining({ severity: "critical" }), root);
  });
});

describe("content gates", () => {
  const base = () => ({
    root,
    slug: "new-one",
    title: "Covenant Watchlists With Reviewable Exception Packets",
    description: "d",
    body: fakeArticleBody(),
    mode: "new" as const,
    allowed: allowedInternalPaths(root),
  });
  it("passes a well-formed article", () => {
    const results = runContentGates(base(), loadContentConfig());
    expect(results.filter((r) => !r.passed)).toEqual([]);
  });
  it("fails avoid vocabulary, slop, bad links and unlabelled Prestyj figures", () => {
    const body = fakeArticleBody({
      extra:
        "\nOur custom AI is a game-changer that will revolutionize your firm. See [old](/compare/foo). Prestyj cut close time by 40%.\n",
    });
    const results = runContentGates({ ...base(), body }, loadContentConfig());
    const failed = Object.fromEntries(results.map((r) => [r.name, r]));
    expect(failed.positioning?.passed).toBe(false);
    expect(failed.slop?.passed).toBe(false);
    expect(failed["required-sections"]?.details.join()).toContain("/compare/foo");
    expect(failed["required-sections"]?.details.join()).toContain("stage label");
  });
  it("flags near-duplicates of a live article", () => {
    write(
      "content/blog/existing-article.mdx",
      `---\ntitle: "x"\ndate: "2026-08-27"\n---\n\n${fakeArticleBody()}`,
    );
    const results = runContentGates(base(), loadContentConfig());
    expect(results.find((r) => r.name === "duplicate")?.passed).toBe(false);
  });
  it("does not treat link slugs as avoid terms", () => {
    expect(findTerms("see [x](/blog/custom-ai-agents-real-estate)", AVOID_TERMS)).toEqual([]);
    expect(findTerms("Custom AI for funds", AVOID_TERMS)).toContain("custom ai");
  });
});

describe("live-run hardening", () => {
  it("extracts the JSON block after prose and citations", () => {
    const text =
      'I searched [1] and found:\n```json\n[{"query": "How do funds X?", "score": 5}]\n```\nSources [2].';
    expect(extractJson(text)).toEqual([{ query: "How do funds X?", score: 5 }]);
    expect(extractJson('Notes {"a": "}"} then [1] and {"claims": [{"x": 1}]} done')).toEqual({
      claims: [{ x: 1 }],
    });
    expect(() => extractJson('[{"query": "cut off')).toThrow();
  });

  it("trims soft draft fields instead of rejecting", () => {
    const meta = draftMetaSchema.parse({
      slug: "a-b",
      title: "A title long enough",
      description: "x".repeat(60),
      keywords: ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "A1"],
      category: "Fund operations",
      capabilities: ["fund-operations", "not-a-capability"],
      topics: ["review-controls", "exceptions", "handoff", "integration", "bogus"],
      registryTitle: "Registry title",
      registryDescription: "y".repeat(40),
    });
    expect(meta.keywords).toEqual(["a1", "b1", "c1", "d1", "e1", "f1"]);
    expect(meta.topics).toEqual(["review-controls", "exceptions", "handoff"]);
    expect(meta.capabilities).toEqual(["fund-operations"]);
    expect(() => draftMetaSchema.parse({ ...meta, title: "short" })).toThrow();
  });

  it("skips a new topic that duplicates a live article without writing", async () => {
    write(
      "data/growth/opportunities.json",
      JSON.stringify([
        {
          id: "research-dup",
          kind: "new-topic",
          path: null,
          queries: ["How should a fund evaluate AI for quarter-end close?"],
          evidence: "x",
          score: 99,
          createdAt: NOW.toISOString(),
          status: "open",
        },
      ]),
    );
    const longTitle = RESEARCH.replace(
      "An existing quarter-end article",
      "A quarter-end close guide",
    );
    write("src/lib/institutional/research.ts", longTitle);
    const llm = createFakeLlm();
    const result = await runContentCycle({ root, dryRun: true, now: NOW }, deps(llm));
    expect(result.log.some((e) => e.action === "skip" && e.opportunityId === "research-dup")).toBe(
      true,
    );
    expect(findOverlap("What drives the cost of a pilot?", [])).toBeNull();
  });

  it("dry run never writes exceptions", async () => {
    const result = await runContentCycle(
      { root, dryRun: true, now: NOW },
      {
        config: loadContentConfig(),
        raise: raise as never,
        llm: createFakeLlm({ failWith: new Error("boom") }),
        fetcher: fakeFetcher,
        repoGates: passingRepoGates,
      },
    );
    expect(result.changedFiles).toEqual([]);
    expect(raise).not.toHaveBeenCalled();
    expect(existsSync(path.join(root, "data/growth/exceptions.json"))).toBe(false);
  });
});
