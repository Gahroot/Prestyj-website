import { promises as fs } from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it, vi } from "vitest";
import {
  DRAFT_DIRECTORY,
  generatedDraftSchema,
  storeDraft,
  type GeneratedDraft,
} from "./draft-store";
import { writeBlogPost } from "./write-blog-post";
import { loadConfig } from "../load-config";
import { runDaily } from "../orchestration/daily-run";
import type { LLMProvider } from "../types";

const roots: string[] = [];
afterEach(async () => {
  for (const root of roots.splice(0)) await fs.rm(root, { recursive: true, force: true });
});
async function fixture(): Promise<string> {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), "institutional-drafts-"));
  roots.push(root);
  await fs.mkdir(path.join(root, "data/seo"), { recursive: true });
  await fs.copyFile(
    "data/seo/institutional-content-backlog.json",
    path.join(root, "data/seo/institutional-content-backlog.json"),
  );
  await fs.mkdir(path.join(root, "scripts/seo-bot/state"), { recursive: true });
  await fs.cp("scripts/seo-bot/prompts", path.join(root, "scripts/seo-bot/prompts"), {
    recursive: true,
  });
  await fs.writeFile(
    path.join(root, "scripts/seo-bot/state/backlog.yml"),
    "blogPosts:\n  - type: blog-post\n    payload:\n      workingTitle: A distinct institutional workflow\n      targetKeyword: institutional review\n      slug: distinct-institutional-workflow\n",
  );
  await fs.writeFile(
    path.join(root, "scripts/seo-bot/state/shipped.json"),
    '{"historical":"preserve"}',
  );
  await fs.mkdir(path.join(root, "content/blog"), { recursive: true });
  await fs.writeFile(path.join(root, "content/blog/user-work.mdx"), "Unfinished human work");
  return root;
}
function draft(slug = "distinct-institutional-workflow"): GeneratedDraft {
  return {
    slug,
    frontmatter: {
      title: "A distinct institutional workflow",
      description: "A source-attached operating example for institutional review.",
    },
    body:
      "## Sources and limitations\n\n" +
      "Synthetic example requires review of source evidence. ".repeat(90),
    internalLinks: ["/research"],
    faqs: [],
  };
}
function provider(content = JSON.stringify(draft())): LLMProvider {
  return {
    name: "anthropic",
    isConfigured: () => true,
    estimateCostUSD: () => 0,
    generate: vi.fn(async () => ({
      content,
      usage: { inputTokens: 0, outputTokens: 0, cachedInputTokens: 0 },
      model: "fixture",
      provider: "anthropic" as const,
      costUSD: 0,
      latencyMs: 1,
    })),
  };
}
const config = loadConfig();
const now = new Date("2026-09-24T12:00:00Z");

describe("inert draft boundary", () => {
  it("reserves archived and unfinished article slugs too", async () => {
    const root = await fixture();
    await expect(
      storeDraft({ root, draft: draft("user-work"), now, dailyCap: 1, weeklyCap: 2 }),
    ).rejects.toThrow("already exists");
    expect(await fs.readFile(path.join(root, "content/blog/user-work.mdx"), "utf8")).toBe(
      "Unfinished human work",
    );
  });
  it.each(["../escape", "a/b", "UPPER", "x.mdx", "a%2fb"])("rejects unsafe slug %s", (slug) => {
    expect(generatedDraftSchema.safeParse(draft(slug)).success).toBe(false);
  });
  it("rejects publication dates and executable MDX constructs", () => {
    expect(
      generatedDraftSchema.safeParse({
        ...draft(),
        frontmatter: { ...draft().frontmatter, date: "2026-09-24" },
      }).success,
    ).toBe(false);
    expect(
      generatedDraftSchema.safeParse({ ...draft(), body: `${draft().body}\n<Component />` })
        .success,
    ).toBe(false);
  });
  it("writes an inert draft exclusively, never public content or shipped history", async () => {
    const root = await fixture();
    const record = await storeDraft({ root, draft: draft(), now, dailyCap: 1, weeklyCap: 2 });
    expect(record.status).toBe("awaiting-review");
    expect(record.filePath).toBe(`${DRAFT_DIRECTORY}/distinct-institutional-workflow.md`);
    const contents = await fs.readFile(path.join(root, record.filePath), "utf8");
    expect(contents).not.toMatch(/^date:|^updated:/m);
    await expect(
      storeDraft({
        root,
        draft: draft(),
        now: new Date("2026-09-25T12:00:00Z"),
        dailyCap: 1,
        weeklyCap: 2,
      }),
    ).rejects.toThrow();
    expect(await fs.readFile(path.join(root, record.filePath), "utf8")).toBe(contents);
    expect(await fs.readdir(path.join(root, "content/blog"))).toEqual(["user-work.mdx"]);
    expect(await fs.readFile(path.join(root, "scripts/seo-bot/state/shipped.json"), "utf8")).toBe(
      '{"historical":"preserve"}',
    );
  });
  it("rejects symlinked output and reserved ledger slugs", async () => {
    const root = await fixture();
    await fs.mkdir(path.join(root, "scripts/seo-bot/output"));
    await fs.symlink(path.join(root, "content/blog"), path.join(root, DRAFT_DIRECTORY));
    await expect(
      storeDraft({ root, draft: draft(), now, dailyCap: 1, weeklyCap: 2 }),
    ).rejects.toThrow("real directory");
    await expect(
      storeDraft({
        root,
        draft: draft("measure-institutional-ai-workflow-pilot"),
        now,
        dailyCap: 1,
        weeklyCap: 2,
      }),
    ).rejects.toThrow("already prepared");
  });
  it("enforces the two-draft rolling window", async () => {
    const root = await fixture();
    await storeDraft({ root, draft: draft("first-workflow"), now, dailyCap: 1, weeklyCap: 2 });
    await storeDraft({
      root,
      draft: draft("second-workflow"),
      now: new Date("2026-09-25T12:00:00Z"),
      dailyCap: 1,
      weeklyCap: 2,
    });
    await expect(
      storeDraft({
        root,
        draft: draft("third-workflow"),
        now: new Date("2026-09-26T12:00:00Z"),
        dailyCap: 1,
        weeklyCap: 2,
      }),
    ).rejects.toThrow("weekly cap");
  });
  it("runs the real review orchestration without public, remote or destructive actions", async () => {
    const root = await fixture();
    const llm = provider();
    const queue = await fs.readFile(path.join(root, "scripts/seo-bot/state/backlog.yml"), "utf8");
    const metrics = await runDaily(
      { config, date: now, taskOverride: ["blogPost"], noCommit: true },
      { root, provider: llm },
    );
    expect(metrics.blogsDrafted).toBe(1);
    expect(metrics.blogsShipped).toBe(0);
    expect(await fs.readFile(path.join(root, "scripts/seo-bot/state/backlog.yml"), "utf8")).toBe(
      queue,
    );
    expect(await fs.readFile(path.join(root, "content/blog/user-work.mdx"), "utf8")).toBe(
      "Unfinished human work",
    );
    expect(llm.generate).toHaveBeenCalledTimes(1);
    const activeCode = await fs.readFile("scripts/seo-bot/orchestration/daily-run.ts", "utf8");
    expect(activeCode).not.toMatch(
      /child_process|execFile|git checkout|runIndexNow|appendToShipped|unlink\(/,
    );
  });
  it("keeps dry-run offline and rejects publish and bulk tasks", async () => {
    const root = await fixture();
    const llm = provider();
    await runDaily(
      { config, date: now, taskOverride: ["blogPost"], dryRun: true },
      { root, provider: llm },
    );
    expect(llm.generate).not.toHaveBeenCalled();
    expect(
      (await runDaily({ config, date: now, noCommit: false }, { root, provider: llm })).errors,
    ).toHaveLength(1);
    expect(
      (await runDaily({ config, date: now, taskOverride: ["geoPage"] }, { root, provider: llm }))
        .errors,
    ).toHaveLength(1);
    await expect(fs.access(path.join(root, "scripts/seo-bot/output"))).rejects.toThrow();
  });
  it("retains user work and queue on malformed model output", async () => {
    const root = await fixture();
    const result = await writeBlogPost({
      config,
      provider: provider("not JSON"),
      model: "fixture",
      systemPrompt: "",
      taskPrompt: "",
      payload: {
        workingTitle: "A distinct institutional workflow",
        targetKeyword: "institutional review",
        slug: "distinct-institutional-workflow",
      },
      dedupContext: { shippedSlugs: new Set(), shippedTitles: [], recentlyShippedSummaries: [] },
      cwd: root,
      now,
    });
    expect(result.success).toBe(false);
    expect(result.shipped).toBeUndefined();
    expect(await fs.readFile(path.join(root, "content/blog/user-work.mdx"), "utf8")).toBe(
      "Unfinished human work",
    );
  });
});
