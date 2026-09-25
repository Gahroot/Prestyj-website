import { promises as fs } from "node:fs";
import path from "node:path";
import { z } from "zod";
import type {
  AppConfig,
  BacklogItem,
  DedupContext,
  LLMProvider,
  ResearchBrief,
  TaskExecutionResult,
} from "../types";
import { contentLedgerSchema } from "../../seo/institutional-ledger";
import { institutionalPublicPaths } from "../../../src/lib/institutional/site-map";
import {
  DRAFT_DIRECTORY,
  draftSlugSchema,
  generatedDraftSchema,
  storeDraft,
  checkDraftCapacity,
  ensureDraftDirectory,
  rejectExistingArticle,
} from "./draft-store";

export interface WriteBlogPostInput {
  config: AppConfig;
  provider: LLMProvider;
  model: string;
  systemPrompt: string;
  taskPrompt: string;
  payload?: BacklogItem["payload"];
  dedupContext: DedupContext;
  researchBrief?: ResearchBrief;
  cwd?: string;
  now?: Date;
  dryRun?: boolean;
}
const payloadSchema = z
  .object({
    workingTitle: z.string().min(10).max(160),
    targetKeyword: z.string().min(3).max(160),
    slug: draftSlugSchema,
  })
  .strict();

export async function writeBlogPost(input: WriteBlogPostInput): Promise<TaskExecutionResult> {
  const started = Date.now();
  let costUSD = 0;
  let apiCalls = 0;
  try {
    const payload = payloadSchema.parse(input.payload);
    const root = input.cwd ?? process.cwd();
    const ledger = contentLedgerSchema.parse(
      JSON.parse(
        await fs.readFile(path.join(root, "data/seo/institutional-content-backlog.json"), "utf8"),
      ),
    );
    if (
      ledger.items.some((item) => item.slug === payload.slug) ||
      input.dedupContext.shippedSlugs.has(payload.slug) ||
      institutionalPublicPaths.includes(`/blog/${payload.slug}`)
    ) {
      throw new Error("Slug already prepared or published; generation refused");
    }
    try {
      await fs.lstat(path.join(root, DRAFT_DIRECTORY, `${payload.slug}.md`));
      throw new Error("Draft already exists; generation refused");
    } catch (error) {
      if (!(error instanceof Error && "code" in error && error.code === "ENOENT")) throw error;
    }
    await rejectExistingArticle(root, payload.slug);
    if (input.dryRun)
      return { task: "blogPost", success: true, costUSD: 0, latencyMs: Date.now() - started };
    await ensureDraftDirectory(root);
    await checkDraftCapacity({
      root,
      now: input.now ?? new Date(),
      dailyCap: input.config.circuitBreaker.maxBlogsPerDay,
      weeklyCap: input.config.circuitBreaker.maxBlogsPerWeek ?? 2,
    });
    const request = {
      model: input.model,
      system: `${input.systemPrompt}\n\n${input.taskPrompt}`,
      user: JSON.stringify({
        assignment: payload,
        publicPaths: institutionalPublicPaths,
        status: "draft-only",
        evidence: "No authenticated analytics or customer evidence supplied",
      }),
      maxTokens: 8192,
      temperature: 0.5,
      responseFormat: "json" as const,
    };
    if (
      input.provider.estimateCostUSD(request, request.maxTokens) >
      input.config.circuitBreaker.maxCostPerDayUSD
    )
      throw new Error("Draft estimate exceeds configured cost cap");
    apiCalls = 1;
    const response = await input.provider.generate(request);
    costUSD = response.costUSD;
    if (Buffer.byteLength(response.content, "utf8") > 120_000)
      throw new Error("Model output exceeds draft limit");
    const draft = generatedDraftSchema.parse(JSON.parse(response.content));
    if (draft.slug !== payload.slug) throw new Error("Model changed the assigned slug");
    const record = await storeDraft({
      root,
      draft,
      now: input.now ?? new Date(),
      dailyCap: input.config.circuitBreaker.maxBlogsPerDay,
      weeklyCap: input.config.circuitBreaker.maxBlogsPerWeek ?? 2,
    });
    return {
      task: "blogPost",
      success: true,
      draft: record,
      costUSD,
      apiCalls,
      latencyMs: Date.now() - started,
    };
  } catch (error) {
    return {
      task: "blogPost",
      success: false,
      error: error instanceof Error ? error.message : "Draft validation failed",
      costUSD,
      apiCalls,
      latencyMs: Date.now() - started,
    };
  }
}
