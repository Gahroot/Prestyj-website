import { z } from "zod";

export type ProviderName = "anthropic" | "gemini" | "openai-compat";

export interface LLMRequest {
  system: string;
  user: string;
  model: string;
  maxTokens: number;
  temperature?: number;
  cacheSystem?: boolean;
  responseFormat?: "text" | "json";
  jsonSchema?: Record<string, unknown>;
}

export interface LLMUsage {
  inputTokens: number;
  outputTokens: number;
  cachedInputTokens: number;
}

export interface LLMResponse {
  content: string;
  usage: LLMUsage;
  model: string;
  provider: ProviderName;
  costUSD: number;
  latencyMs: number;
  raw?: unknown;
}

export interface LLMProvider {
  readonly name: ProviderName;
  generate(req: LLMRequest): Promise<LLMResponse>;
  estimateCostUSD(req: LLMRequest, outputTokens: number): number;
  isConfigured(): boolean;
}

export interface ProviderEndpointConfig {
  apiKeyEnv: string;
  baseURL?: string;
  defaultModel?: string;
}

export interface TaskRouting {
  provider: string;
  model: string;
  fallback?: { provider: string; model: string };
  abTest?: Array<{ provider: string; model: string; label: string }>;
}

export type TaskName =
  | "geoPage"
  | "nichePage"
  | "comparison"
  | "blogPost"
  | "titleRewrite"
  | "socialCopy"
  | "competitorAudit"
  | "dailyResearch";

export interface DailyRotation {
  monday: string[];
  tuesday: string[];
  wednesday: string[];
  thursday: string[];
  friday: string[];
  saturday: string[];
  sunday: string[];
}

export interface CircuitBreaker {
  maxPagesPerDay: number;
  maxBlogsPerDay: number;
  maxCostPerDayUSD: number;
  maxApiErrorsBeforeHalt: number;
}

export interface AppConfig {
  baseUrl: string;
  providers: Record<string, ProviderEndpointConfig & { type: ProviderName }>;
  tasks: Record<TaskName, TaskRouting>;
  rotation: DailyRotation;
  circuitBreaker: CircuitBreaker;
  output: {
    reportDir: string;
    socialDir: string;
    abTestDir: string;
  };
  state: {
    backlogFile: string;
    shippedFile: string;
    metricsFile: string;
  };
  baseDirs: {
    bestFor: string;
    compare: string;
    blog: string;
  };
}

export const ShippedItemSchema = z.object({
  slug: z.string(),
  type: z.enum([
    "geo-page",
    "niche-page",
    "comparison",
    "blog-post",
    "title-rewrite",
  ]),
  title: z.string(),
  description: z.string(),
  filePath: z.string(),
  shippedAt: z.string(),
  provider: z.string(),
  model: z.string(),
  costUSD: z.number(),
});
export type ShippedItem = z.infer<typeof ShippedItemSchema>;

export const ShippedManifestSchema = z.object({
  items: z.array(ShippedItemSchema),
  lastUpdated: z.string(),
});
export type ShippedManifest = z.infer<typeof ShippedManifestSchema>;

export const BacklogItemSchema = z.object({
  type: z.enum([
    "geo-page",
    "niche-page",
    "comparison",
    "blog-post",
    "competitor",
  ]),
  payload: z.record(z.string(), z.unknown()),
  priority: z.number().default(5),
  notes: z.string().optional(),
});
export type BacklogItem = z.infer<typeof BacklogItemSchema>;

export const BacklogSchema = z.object({
  geoPages: z.array(BacklogItemSchema).default([]),
  nichePages: z.array(BacklogItemSchema).default([]),
  comparisons: z.array(BacklogItemSchema).default([]),
  blogPosts: z.array(BacklogItemSchema).default([]),
  competitors: z.array(BacklogItemSchema).default([]),
});
export type Backlog = z.infer<typeof BacklogSchema>;

export const DailyMetricsSchema = z.object({
  date: z.string(),
  pagesShipped: z.number(),
  blogsShipped: z.number(),
  titlesRewritten: z.number(),
  costUSD: z.number(),
  apiCalls: z.number(),
  errors: z.array(z.string()).default([]),
  taskBreakdown: z.record(
    z.string(),
    z.object({
      count: z.number(),
      costUSD: z.number(),
      latencyMs: z.number(),
    })
  ),
});
export type DailyMetrics = z.infer<typeof DailyMetricsSchema>;

export interface ResearchBrief {
  date: string;
  trendingAngles: string[];
  competitorMoves: Array<{ competitor: string; observation: string }>;
  gscOpportunities: Array<{ query: string; reason: string }>;
  rawNotes: string;
}

export interface DedupContext {
  shippedSlugs: Set<string>;
  shippedTitles: string[];
  recentlyShippedSummaries: Array<{
    slug: string;
    title: string;
    description: string;
    shippedAt: string;
  }>;
}

export interface TaskExecutionResult {
  task: TaskName;
  success: boolean;
  shipped?: ShippedItem;
  error?: string;
  costUSD: number;
  latencyMs: number;
}
