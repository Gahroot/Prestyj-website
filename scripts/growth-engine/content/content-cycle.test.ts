import { existsSync, mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import type { ContentLogEntry, Opportunity } from "../shared/contracts";
import { loadContentConfig } from "./config";
import { createFakeLlm, fakeArticleBody, fakeFetcher, passingRepoGates } from "./fake";
import { AVOID_TERMS, findTerms, laneTerms, runContentGates } from "./gates";
import { laneOfOpportunity, orderByLaneRotation, proofBoundaryViolations } from "./lanes";
import { runContentCycle } from "./index";
import { findOverlap } from "./dedupe";
import { LlmAuthError, extractJson } from "./llm";
import { draftMetaSchema } from "./write";
import { allowedInternalPaths, readRegistry } from "./site";
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
    const cap = loadContentConfig().caps.maxNewPerWeek;
    // Fill the rolling week to the configured cap (one publish per hour before NOW),
    // plus one older publish that must not count.
    const recent = Array.from({ length: cap }, (_, i) => ({
      ...entry("2026-10-24"),
      at: new Date(NOW.getTime() - (i + 1) * 3_600_000).toISOString(),
    }));
    write("data/growth/content-log.json", JSON.stringify([...recent, entry("2026-10-10")]));
    expect(
      capUsage(JSON.parse(read("data/growth/content-log.json")) as ContentLogEntry[], NOW)
        .newThisWeek,
    ).toBe(cap);
    const llm = createFakeLlm();
    const result = await runContentCycle({ root, dryRun: false, now: NOW }, deps(llm));
    expect(result.publishedPaths).toEqual([]);
    expect(llm.calls.filter((c) => c.purpose === "write")).toHaveLength(0);
    expect(result.log[0]?.reasons[0]).toContain(`cap reached: ${cap}/${cap}`);
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

  it("no Codex session and no API key returns an empty result and raises a critical exception", async () => {
    const saved = process.env.ANTHROPIC_API_KEY;
    const savedSession = [process.env.CODEX_SESSION_JSON, process.env.CODEX_SESSION_FILE];
    delete process.env.ANTHROPIC_API_KEY;
    delete process.env.CODEX_SESSION_JSON;
    process.env.CODEX_SESSION_FILE = path.join(root, "no-such-session.json");
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
      if (savedSession[0] !== undefined) process.env.CODEX_SESSION_JSON = savedSession[0];
      if (savedSession[1] !== undefined) process.env.CODEX_SESSION_FILE = savedSession[1];
      else delete process.env.CODEX_SESSION_FILE;
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

describe("content lanes", () => {
  const opp = (id: string, query: string, score = 90): Opportunity => ({
    id,
    kind: "new-topic",
    path: null,
    queries: [query],
    evidence: "e",
    score,
    createdAt: NOW.toISOString(),
    status: "open",
  });
  const publishLog = (slug: string): ContentLogEntry => ({
    at: "2026-10-24T12:00:00Z",
    action: "publish",
    slug,
    path: `/blog/${slug}`,
    title: slug,
    opportunityId: null,
    reasons: [],
    sourcesChecked: 2,
    costUsd: 0,
  });
  const MCP_QUERY = "How should we evaluate a custom MCP server vendor for our ERP?";

  it("derives the lane from the opportunity id", () => {
    expect(laneOfOpportunity({ id: "research-connectors-abc" })).toBe("connectors");
    expect(laneOfOpportunity({ id: "research-custom-builds-abc" })).toBe("custom-builds");
    expect(laneOfOpportunity({ id: "research-0123456789" })).toBe("real-estate");
    expect(laneOfOpportunity({ id: "prompt-BP-01" })).toBe("real-estate");
  });

  it("rotates lanes so real estate keeps at least half the weekly slots", () => {
    const re = opp("research-aaa", "re", 10);
    const conn = opp("research-connectors-bbb", "conn", 90);
    const build = opp("research-custom-builds-ccc", "build", 80);
    // Fresh week: real estate goes first; one service slot exists for a cap of 2.
    expect(orderByLaneRotation([conn, build, re], [], 2).map((o) => o.id)).toEqual([
      "research-aaa",
      "research-connectors-bbb",
    ]);
    // After a real estate publish, a service lane gets the next slot.
    expect(orderByLaneRotation([re, conn], ["real-estate"], 2)[0]?.id).toBe(
      "research-connectors-bbb",
    );
    // The service lane that published least recently goes first next time.
    expect(
      orderByLaneRotation([conn, build], ["connectors", "real-estate"], 4).map((o) => o.id),
    ).toEqual(["research-custom-builds-ccc"]);
    // A service publish this week uses the only service slot: real estate only.
    expect(orderByLaneRotation([conn, build, re], ["connectors"], 2).map((o) => o.id)).toEqual([
      "research-aaa",
    ]);
  });

  it("publishes a connectors article tagged with its lane, service page link and service CTA", async () => {
    write(
      "data/growth/opportunities.json",
      JSON.stringify([
        opp("research-connectors-seed", MCP_QUERY),
        opp("research-connectors-seed2", "Should we connect our CRM to Claude or ChatGPT first?"),
      ]),
    );
    write("data/growth/content-log.json", JSON.stringify([publishLog("existing-article")]));
    const llm = createFakeLlm({
      slug: "evaluate-custom-mcp-server-vendor",
      title: "How to Evaluate a Custom MCP Server Vendor",
      metaOverride: { service: "custom-mcp-servers" },
    });
    const result = await runContentCycle({ root, dryRun: false, now: NOW }, deps(llm));
    expect(result.publishedPaths).toEqual(["/blog/evaluate-custom-mcp-server-vendor"]);
    const registry = read("src/lib/institutional/research.ts");
    expect(registry).toContain('lane: "connectors"');
    expect(registry).toContain('service: "custom-mcp-servers"');
    expect(registry).toContain('category: "AI connectors"');
    expect(
      readRegistry(root).find((e) => e.slug === "evaluate-custom-mcp-server-vendor")?.lane,
    ).toBe("connectors");
    const mdx = read("content/blog/evaluate-custom-mcp-server-vendor.mdx");
    expect(mdx).toContain("](/book-demo?service=custom-mcp-servers)");
    expect(mdx).toContain("](/custom-mcp-servers)");
    expect(mdx).not.toContain("](/book-demo)");
    // The writer got the lane brief with first-party proof only.
    const writeCall = llm.calls.find((c) => c.purpose === "write");
    expect(writeCall?.system).toContain("LANE: connectors");
    expect(writeCall?.system).toContain("Client names are withheld");
    // Only one service slot per week: the second connectors topic waits.
    expect(opportunities().find((o) => o.id === "research-connectors-seed2")?.status).toBe("open");
  });

  it("does not let a service lane take more than its weekly share", async () => {
    write(
      "src/lib/institutional/research.ts",
      RESEARCH.replace(
        "\n] as const;",
        `\n  {\n    slug: "connector-article",\n    lane: "connectors",\n    service: "custom-mcp-servers",\n    capabilities: [],\n    topics: ["integration"],\n    category: "AI connectors",\n    title: "A connector article",\n    description: "Existing.",\n  },\n] as const;`,
      ),
    );
    write(
      "data/growth/opportunities.json",
      JSON.stringify([
        opp("research-connectors-seed", MCP_QUERY, 99),
        opp("research-seed", "How should an asset manager monitor loan covenants with AI?", 10),
      ]),
    );
    write("data/growth/content-log.json", JSON.stringify([publishLog("connector-article")]));
    const result = await runContentCycle({ root, dryRun: false, now: NOW }, deps());
    expect(result.publishedPaths).toEqual(["/blog/covenant-watchlist-agent-review"]);
    expect(read("src/lib/institutional/research.ts")).toMatch(
      /slug: "covenant-watchlist-agent-review",\n {4}capabilities/,
    );
    expect(opportunities().find((o) => o.id === "research-connectors-seed")?.status).toBe("open");
  });

  it("fails service-lane drafts that present Prestyj clients, metrics, prices or timelines", () => {
    const gates = runContentGates(
      {
        root,
        slug: "x-mcp",
        title: "Evaluating an MCP server build",
        description: "d".repeat(80),
        body: fakeArticleBody({
          extra:
            "\nOur clients saw a 40% drop in ticket time after we shipped in 3 weeks. See [Custom MCP server](/custom-mcp-servers).\n",
        }).replace("](/book-demo)", "](/book-demo?service=custom-mcp-servers)"),
        mode: "new",
        allowed: allowedInternalPaths(root),
        lane: "connectors",
        service: "custom-mcp-servers",
      },
      loadContentConfig(),
    );
    const sections = gates.find((g) => g.name === "required-sections");
    expect(sections?.passed).toBe(false);
    expect(sections?.details.join(" ")).toContain(
      "unsupported Prestyj client/metric/price/timeline",
    );
    expect(proofBoundaryViolations("An illustrative build might take 3 weeks for us.")).toEqual([]);
  });

  it("allows service-lane vocabulary that real estate articles avoid", () => {
    expect(laneTerms("custom-builds").avoid).not.toContain("custom ai");
    expect(laneTerms("real-estate").avoid).toContain("custom ai");
    expect(laneTerms("connectors").avoid).toContain("realtor");
  });
});

describe("registryDescription handling", () => {
  it("shortens an overlong registryDescription instead of failing the item", async () => {
    const llm = createFakeLlm({
      metaOverride: { registryDescription: `${"word ".repeat(80)}end` },
    });
    const result = await runContentCycle({ root, dryRun: false, now: NOW }, deps(llm));
    expect(result.publishedPaths).toEqual(["/blog/covenant-watchlist-agent-review"]);
    const registry = read("src/lib/institutional/research.ts");
    const description = /covenant-watchlist-agent-review[\s\S]*?description:\s*"([^"]*)"/.exec(
      registry,
    )?.[1];
    expect(description?.length).toBeLessThanOrEqual(200);
  });

  it("asks the writer once to repair invalid META and keeps the body", async () => {
    const llm = createFakeLlm({
      metaOverride: { registryDescription: null, title: "short" },
      metaOverrideOnce: true,
    });
    const result = await runContentCycle({ root, dryRun: false, now: NOW }, deps(llm));
    expect(result.publishedPaths).toEqual(["/blog/covenant-watchlist-agent-review"]);
    const repairs = llm.calls.filter(
      (c) => c.purpose === "write" && c.system.startsWith("You fix article metadata"),
    );
    expect(repairs).toHaveLength(1);
    expect(repairs[0]?.prompt).toContain("registryDescription");
  });

  it("still fails the item when the repair is invalid too", async () => {
    const llm = createFakeLlm({ metaOverride: { title: "short" } });
    const result = await runContentCycle({ root, dryRun: true, now: NOW }, deps(llm));
    expect(result.publishedPaths).toEqual([]);
    expect(result.log.some((e) => e.action === "reject")).toBe(true);
  });
});
