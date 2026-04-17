import { writeFile } from "fs/promises";
import * as path from "path";
import { z } from "zod";
import type { ShippedItem, TaskExecutionResult } from "../types";
import {
  appendImportAndRegister,
  appendShippedItem,
  callProviderWithValidation,
  composeUserPrompt,
  ensureSlugUnique,
  formatTsValue,
  normalizeSolutionSlug,
  ShipTaskInput,
  slugToCamelCase,
  validateTitleDescription,
} from "./_shared";

/**
 * Zod schema mirroring SolutionPageContent in src/lib/solutions/types.ts.
 * IconName enum kept in sync with solutions/types.ts at author-time; if the
 * site adds new icon names, the bot-generated content is still typechecked
 * against the live TS type on emit.
 */
const IconNameSchema = z.enum([
  "Clock",
  "PhoneMissed",
  "DollarSign",
  "TrendingDown",
  "Zap",
  "Bot",
  "Calendar",
  "MessageSquare",
  "BarChart3",
  "Shield",
  "RefreshCw",
  "Users",
  "Target",
  "Mail",
  "Phone",
  "Sparkles",
  "TrendingUp",
  "AlertCircle",
  "Database",
  "UserX",
  "History",
  "Heart",
  "CheckCircle",
]);

const ColorSchema = z.enum(["primary", "success", "warning", "destructive"]);

const SolutionStatSchema = z.object({
  value: z.string().min(1),
  label: z.string().min(1),
  color: ColorSchema,
});

const SolutionHeroSchema = z.object({
  badge: z.string().min(1),
  headline: z.string().min(1),
  headlineAccent: z.string().min(1),
  subheadline: z.string().min(1),
  stats: z.array(SolutionStatSchema).min(2),
});

const SolutionPainPointSchema = z.object({
  icon: IconNameSchema,
  title: z.string().min(1),
  description: z.string().min(1),
  color: ColorSchema,
});

const SolutionPainPointsSchema = z.object({
  headline: z.string().min(1),
  subheadline: z.string().min(1),
  points: z.array(SolutionPainPointSchema).min(3),
});

const SolutionBenefitSchema = z.object({
  icon: IconNameSchema,
  title: z.string().min(1),
  description: z.string().min(1),
});

const SolutionBenefitsSchema = z.object({
  headline: z.string().min(1),
  subheadline: z.string().min(1),
  benefits: z.array(SolutionBenefitSchema).min(4),
});

const SolutionFAQSchema = z.object({
  question: z.string().min(1),
  answer: z.string().min(1),
});

const SolutionObjectionSchema = z.object({
  objection: z.string().min(1),
  response: z.string().min(1),
});

const SolutionObjectionsSchema = z.object({
  headline: z.string().min(1),
  subheadline: z.string().min(1),
  objections: z.array(SolutionObjectionSchema).min(3),
});

const SolutionCTASchema = z.object({
  headline: z.string().min(1),
  subheadline: z.string().min(1),
  buttonText: z.string().min(1),
  buttonHref: z.string().min(1),
  footnote: z.string().optional(),
});

const SolutionPageContentSchema = z.object({
  slug: z.string().min(1),
  meta: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    keywords: z.array(z.string().min(1)).optional(),
  }),
  hero: SolutionHeroSchema,
  painPoints: SolutionPainPointsSchema,
  benefits: SolutionBenefitsSchema,
  faqs: z.array(SolutionFAQSchema).min(4).optional(),
  objections: SolutionObjectionsSchema.optional(),
  cta: SolutionCTASchema,
});

type SolutionShape = z.infer<typeof SolutionPageContentSchema>;

interface NichePayload {
  slug?: unknown;
  platform?: unknown;
  industry?: unknown;
}

export async function shipNichePage(
  input: ShipTaskInput
): Promise<TaskExecutionResult> {
  const {
    config,
    provider,
    model,
    systemPrompt,
    taskPrompt,
    payload,
    dedupContext,
    researchBrief,
  } = input;

  const nichePayload: NichePayload = payload;
  const rawSlug = String(nichePayload.slug ?? "").trim();
  if (!rawSlug) {
    return {
      task: "nichePage",
      success: false,
      error: "payload.slug is required",
      costUSD: 0,
      latencyMs: 0,
    };
  }
  const slug = normalizeSolutionSlug(rawSlug);

  const dupErr = ensureSlugUnique(slug, dedupContext);
  if (dupErr) {
    return {
      task: "nichePage",
      success: false,
      error: dupErr,
      costUSD: 0,
      latencyMs: 0,
    };
  }

  const userPrompt = composeUserPrompt(
    taskPrompt,
    { ...payload, slug },
    dedupContext,
    researchBrief
  );

  const result = await callProviderWithValidation({
    provider,
    model,
    systemPrompt,
    userPrompt,
    schema: SolutionPageContentSchema,
    responseFormat: "json",
  });

  if (!result.ok) {
    return {
      task: "nichePage",
      success: false,
      error: result.error,
      costUSD: result.totalCostUSD,
      latencyMs: result.totalLatencyMs,
    };
  }

  const content: SolutionShape = result.data;
  content.slug = slug;

  const tdErr = validateTitleDescription(
    content.meta.title,
    content.meta.description
  );
  if (tdErr) {
    return {
      task: "nichePage",
      success: false,
      error: tdErr,
      costUSD: result.totalCostUSD,
      latencyMs: result.totalLatencyMs,
    };
  }

  if (content.painPoints.points.length < 3) {
    return {
      task: "nichePage",
      success: false,
      error: `painPoints.points needs >= 3 entries`,
      costUSD: result.totalCostUSD,
      latencyMs: result.totalLatencyMs,
    };
  }
  if (content.benefits.benefits.length < 4) {
    return {
      task: "nichePage",
      success: false,
      error: `benefits.benefits needs >= 4 entries`,
      costUSD: result.totalCostUSD,
      latencyMs: result.totalLatencyMs,
    };
  }

  const identifier = slugToCamelCase(slug);
  const fileBody = renderSolutionModule(identifier, content);

  const solutionsDir = path.join(process.cwd(), "src/lib/solutions");
  const filePath = path.join(solutionsDir, `${slug}.ts`);
  await writeFile(filePath, fileBody, "utf8");

  const indexFile = path.join(solutionsDir, "index.ts");
  await appendImportAndRegister({
    indexFile,
    importLine: `import { ${identifier} } from "./${slug}";`,
    registerLine: `  "${slug}": ${identifier},`,
    importMarker: "// SEO-BOT-APPEND-IMPORTS",
    registerMarker: "// SEO-BOT-APPEND-REGISTER",
  });

  const shipped: ShippedItem = {
    slug,
    type: "niche-page",
    title: content.meta.title,
    description: content.meta.description,
    filePath,
    shippedAt: new Date().toISOString(),
    provider: provider.name,
    model,
    costUSD: result.totalCostUSD,
  };
  await appendShippedItem(config, shipped);

  return {
    task: "nichePage",
    success: true,
    shipped,
    costUSD: result.totalCostUSD,
    latencyMs: result.totalLatencyMs,
  };
}

function renderSolutionModule(
  identifier: string,
  content: SolutionShape
): string {
  const body = formatTsValue(content, 2);
  return (
    `import type { SolutionPageContent } from "./types";\n\n` +
    `export const ${identifier}: SolutionPageContent = ${body};\n`
  );
}
