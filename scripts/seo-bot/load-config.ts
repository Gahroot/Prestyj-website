import { readFileSync } from "node:fs";
import path from "node:path";
import yaml from "js-yaml";
import { z } from "zod";
import type { AppConfig, ProviderName, TaskName } from "./types";

const PROVIDER_TYPES: readonly ProviderName[] = [
  "anthropic",
  "gemini",
  "openai-compat",
];

const TASK_NAMES: readonly TaskName[] = [
  "geoPage",
  "nichePage",
  "comparison",
  "blogPost",
  "titleRewrite",
  "socialCopy",
  "competitorAudit",
  "dailyResearch",
];

const ProviderTypeSchema = z.enum([...PROVIDER_TYPES] as [
  ProviderName,
  ...ProviderName[],
]);

const ProviderConfigSchema = z.object({
  type: ProviderTypeSchema,
  apiKeyEnv: z.string().min(1),
  baseURL: z.string().optional(),
  defaultModel: z.string().optional(),
});

const TaskRoutingSchema = z.object({
  provider: z.string().min(1),
  model: z.string().min(1),
  fallback: z
    .object({
      provider: z.string().min(1),
      model: z.string().min(1),
    })
    .optional(),
  abTest: z
    .array(
      z.object({
        provider: z.string().min(1),
        model: z.string().min(1),
        label: z.string().min(1),
      })
    )
    .optional(),
});

const RotationSchema = z.object({
  monday: z.array(z.string()).default([]),
  tuesday: z.array(z.string()).default([]),
  wednesday: z.array(z.string()).default([]),
  thursday: z.array(z.string()).default([]),
  friday: z.array(z.string()).default([]),
  saturday: z.array(z.string()).default([]),
  sunday: z.array(z.string()).default([]),
});

const CircuitBreakerSchema = z.object({
  maxPagesPerDay: z.number().int().nonnegative(),
  maxBlogsPerDay: z.number().int().nonnegative(),
  maxCostPerDayUSD: z.number().nonnegative(),
  maxApiErrorsBeforeHalt: z.number().int().positive(),
});

const TasksSchema = z
  .record(z.string(), TaskRoutingSchema)
  .superRefine((obj, ctx) => {
    for (const taskName of TASK_NAMES) {
      if (!(taskName in obj)) {
        ctx.addIssue({
          code: "custom",
          path: [taskName],
          message: `Task "${taskName}" missing from tasks config.`,
        });
      }
    }
  });

const AppConfigSchema = z.object({
  baseUrl: z.string().url(),
  providers: z.record(z.string(), ProviderConfigSchema),
  tasks: TasksSchema,
  rotation: RotationSchema,
  circuitBreaker: CircuitBreakerSchema,
  output: z.object({
    reportDir: z.string().min(1),
    socialDir: z.string().min(1),
    abTestDir: z.string().min(1),
  }),
  state: z.object({
    backlogFile: z.string().min(1),
    shippedFile: z.string().min(1),
    metricsFile: z.string().min(1),
  }),
  baseDirs: z.object({
    bestFor: z.string().min(1),
    compare: z.string().min(1),
    blog: z.string().min(1),
  }),
});

const DEFAULT_CONFIG_PATH = "scripts/seo-bot/config.yml";

export function loadConfig(configPath?: string): AppConfig {
  const resolved = path.resolve(
    process.cwd(),
    configPath ?? DEFAULT_CONFIG_PATH
  );

  let raw: string;
  try {
    raw = readFileSync(resolved, "utf8");
  } catch (err) {
    const reason = err instanceof Error ? err.message : String(err);
    throw new Error(
      `[load-config] Unable to read config file at ${resolved}: ${reason}`
    );
  }

  let parsed: unknown;
  try {
    parsed = yaml.load(raw);
  } catch (err) {
    const reason = err instanceof Error ? err.message : String(err);
    throw new Error(
      `[load-config] YAML parse failed for ${resolved}: ${reason}`
    );
  }

  const result = AppConfigSchema.safeParse(parsed);
  if (!result.success) {
    const issues = result.error.issues
      .map((i) => `  - ${i.path.join(".") || "<root>"}: ${i.message}`)
      .join("\n");
    throw new Error(
      `[load-config] Invalid config at ${resolved}:\n${issues}`
    );
  }

  const providers = result.data.providers;
  for (const taskName of TASK_NAMES) {
    const routing = result.data.tasks[taskName];
    if (!routing) continue;
    if (!providers[routing.provider]) {
      throw new Error(
        `[load-config] Task "${taskName}" references unknown provider "${routing.provider}". Known providers: ${Object.keys(providers).join(", ")}`
      );
    }
    if (routing.fallback && !providers[routing.fallback.provider]) {
      throw new Error(
        `[load-config] Task "${taskName}" fallback references unknown provider "${routing.fallback.provider}".`
      );
    }
  }

  return result.data as AppConfig;
}
