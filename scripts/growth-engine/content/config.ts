import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import yaml from "js-yaml";
import { z } from "zod";

const priceSchema = z.object({
  inputPerM: z.number().nonnegative(),
  outputPerM: z.number().nonnegative(),
});

const modelsSchema = z.object({
  writer: z.string(),
  factChecker: z.string(),
  research: z.string(),
});
const reasoningSchema = z.enum(["low", "medium", "high"]);

export const contentConfigSchema = z.object({
  provider: z.enum(["codex", "anthropic"]).default("anthropic"),
  models: modelsSchema,
  codex: z
    .object({
      reasoning: z
        .object({
          research: reasoningSchema,
          write: reasoningSchema,
          factcheck: reasoningSchema,
        })
        .partial(),
    })
    .default({ reasoning: {} }),
  fallback: z.object({ provider: z.literal("anthropic"), models: modelsSchema }).optional(),
  pricing: z
    .object({ fallback: priceSchema, webSearchPerUse: z.number().nonnegative() })
    .catchall(z.union([priceSchema, z.number()])),
  webSearch: z.object({ toolType: z.string(), maxUsesResearch: z.number().int().positive() }),
  caps: z.object({
    maxNewPerWeek: z.number().int().nonnegative(),
    maxRefreshPerWeek: z.number().int().nonnegative(),
    maxNewPerRun: z.number().int().nonnegative(),
    maxRefreshPerRun: z.number().int().nonnegative(),
    maxCostPerRunUsd: z.number().nonnegative(),
  }),
  research: z.object({
    everyDays: z.number().int().positive(),
    maxItemsPerRun: z.number().int().positive(),
    promptSeedScore: z.number(),
  }),
  gates: z.object({
    minWordsNew: z.number().int().positive(),
    minWordsRefresh: z.number().int().positive(),
    refreshMinWordRatio: z.number().positive(),
    maxSlopHits: z.number().int().nonnegative(),
    maxBodySimilarity: z.number().positive(),
    maxTitleOverlap: z.number().positive(),
    maxFailedClaimRatio: z.number().nonnegative(),
    minReachableSources: z.number().int().nonnegative(),
    minUseTerms: z.number().int().nonnegative(),
    maxCopiedWords: z.number().int().positive().default(20),
  }),
  author: z.string().min(1),
});
export type ContentConfig = z.infer<typeof contentConfigSchema>;
export type Price = z.infer<typeof priceSchema>;

export const CONFIG_FILE = path.join(path.dirname(fileURLToPath(import.meta.url)), "config.yml");

export function loadContentConfig(file = CONFIG_FILE): ContentConfig {
  return contentConfigSchema.parse(yaml.load(readFileSync(file, "utf8")));
}

export function priceFor(config: ContentConfig, model: string): Price {
  const entry = config.pricing[model];
  return typeof entry === "object" ? entry : config.pricing.fallback;
}
