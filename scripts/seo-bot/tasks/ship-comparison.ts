import { readFile, writeFile } from "fs/promises";
import * as path from "path";
import { z } from "zod";
import type { ShippedItem, TaskExecutionResult } from "../types";
import {
  appendShippedItem,
  callProviderWithValidation,
  composeUserPrompt,
  ensureSlugUnique,
  formatTsValue,
  ShipTaskInput,
  slugToCamelCase,
  stripPrestyjVsPrefix,
  validateTitleDescription,
} from "./_shared";

/**
 * Icons supported by the content-factory createComparePage() helper.
 * Source: src/lib/content-factory/constants/icons.ts.
 */
const IconNameSchema = z.enum([
  "AlertCircle",
  "AlertTriangle",
  "BarChart3",
  "Brain",
  "Building2",
  "Calendar",
  "CalendarCheck",
  "CheckCircle",
  "ClipboardList",
  "Clock",
  "CloudRain",
  "Database",
  "DollarSign",
  "FileText",
  "Filter",
  "Globe",
  "Handshake",
  "Heart",
  "HeartHandshake",
  "Home",
  "MessageCircle",
  "MessageSquare",
  "Percent",
  "Phone",
  "Puzzle",
  "RefreshCw",
  "Shield",
  "Sparkles",
  "Target",
  "TrendingDown",
  "TrendingUp",
  "Users",
  "Wrench",
  "Zap",
]);

const PricingFeatureSchema = z.object({
  text: z.string().min(1),
  included: z.boolean(),
  note: z.string().optional(),
});

const PricingCardInputSchema = z.object({
  price: z.string().min(1),
  priceSubtext: z.string().optional(),
  features: z.array(PricingFeatureSchema).min(3),
  highlight: z.boolean().optional(),
});

const FeatureComparisonSchema = z.object({
  feature: z.string().min(1),
  prestyj: z.union([z.boolean(), z.string().min(1)]),
  competitor: z.union([z.boolean(), z.string().min(1)]),
  note: z.string().optional(),
});

const KeyStatSchema = z.object({
  value: z.string().min(1),
  label: z.string().min(1),
});

const SwitchReasonInputSchema = z.object({
  icon: IconNameSchema,
  title: z.string().min(1),
  description: z.string().min(1),
});

const RelatedResourceSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  href: z.string().min(1),
  linkText: z.string().min(1),
});

const CtaInputSchema = z.object({
  title: z.string().min(1),
  titleAccent: z.string().optional(),
  description: z.string().min(1),
  buttonText: z.string().min(1),
  buttonHref: z.string().min(1),
  disclaimer: z.string().optional(),
});

/**
 * Shape that maps cleanly into createComparePage() from content-factory.
 */
const CompareInputSchema = z.object({
  slug: z.string().min(1),
  competitorName: z.string().min(1),
  hero: z.object({
    badge: z.string().min(1),
    title: z.string().min(1),
    titleAccent: z.string().min(1),
    subtitle: z.string().min(1),
    description: z.string().optional(),
    keyStats: z.array(KeyStatSchema).optional(),
  }),
  pricing: z.object({
    prestyj: PricingCardInputSchema,
    competitor: PricingCardInputSchema,
  }),
  features: z.array(FeatureComparisonSchema).min(5),
  whySwitch: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    reasons: z.array(SwitchReasonInputSchema).min(3),
  }),
  relatedResources: z.array(RelatedResourceSchema).optional(),
  cta: CtaInputSchema,
});

const CompareMetadataInputSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  keywords: z.array(z.string().min(1)).min(3),
});

const ComparisonOutputSchema = z.object({
  compareData: CompareInputSchema,
  metadata: CompareMetadataInputSchema,
});

type CompareShape = z.infer<typeof ComparisonOutputSchema>;

interface ComparisonPayload {
  slug?: unknown;
  competitor?: unknown;
  competitorUrl?: unknown;
}

export async function shipComparison(
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

  const compPayload: ComparisonPayload = payload;
  const fullSlug = String(compPayload.slug ?? "").trim();
  if (!fullSlug) {
    return {
      task: "comparison",
      success: false,
      error: "payload.slug is required",
      costUSD: 0,
      latencyMs: 0,
    };
  }

  const dupErr = ensureSlugUnique(fullSlug, dedupContext);
  if (dupErr) {
    return {
      task: "comparison",
      success: false,
      error: dupErr,
      costUSD: 0,
      latencyMs: 0,
    };
  }

  const bareSlug = stripPrestyjVsPrefix(fullSlug);
  const userPrompt = composeUserPrompt(
    taskPrompt,
    payload,
    dedupContext,
    researchBrief
  );

  const result = await callProviderWithValidation({
    provider,
    model,
    systemPrompt,
    userPrompt,
    schema: ComparisonOutputSchema,
    responseFormat: "json",
  });

  if (!result.ok) {
    return {
      task: "comparison",
      success: false,
      error: result.error,
      costUSD: result.totalCostUSD,
      latencyMs: result.totalLatencyMs,
    };
  }

  const content: CompareShape = result.data;
  // Normalize: authoritative slug is the one from payload.
  content.compareData.slug = fullSlug;

  const tdErr = validateTitleDescription(
    content.metadata.title,
    content.metadata.description
  );
  if (tdErr) {
    return {
      task: "comparison",
      success: false,
      error: tdErr,
      costUSD: result.totalCostUSD,
      latencyMs: result.totalLatencyMs,
    };
  }
  if (content.compareData.features.length < 5) {
    return {
      task: "comparison",
      success: false,
      error: `comparison.features needs >= 5 rows, got ${content.compareData.features.length}`,
      costUSD: result.totalCostUSD,
      latencyMs: result.totalLatencyMs,
    };
  }

  const dataIdentifier = `${slugToCamelCase(bareSlug)}CompareData`;
  const metaIdentifier = `${slugToCamelCase(bareSlug)}Metadata`;

  const fileBody = renderCompareModule(
    dataIdentifier,
    metaIdentifier,
    content,
    fullSlug
  );

  const filePath = path.join(
    process.cwd(),
    config.baseDirs.compare,
    `${bareSlug}.ts`
  );
  await writeFile(filePath, fileBody, "utf8");

  // Append /compare/<fullSlug> route to submit-indexnow.ts compareRoutes list.
  await appendCompareRoute(fullSlug);

  const shipped: ShippedItem = {
    slug: fullSlug,
    type: "comparison",
    title: content.metadata.title,
    description: content.metadata.description,
    filePath,
    shippedAt: new Date().toISOString(),
    provider: provider.name,
    model,
    costUSD: result.totalCostUSD,
  };
  await appendShippedItem(config, shipped);

  return {
    task: "comparison",
    success: true,
    shipped,
    costUSD: result.totalCostUSD,
    latencyMs: result.totalLatencyMs,
  };
}

function renderCompareModule(
  dataIdentifier: string,
  metaIdentifier: string,
  content: CompareShape,
  fullSlug: string
): string {
  const compareInputBody = formatTsValue(content.compareData, 2);
  const metadataLiteral = formatTsValue(
    {
      slug: fullSlug,
      competitorName: content.compareData.competitorName,
      title: content.metadata.title,
      description: content.metadata.description,
      keywords: content.metadata.keywords,
    },
    2
  );

  return (
    `import type { ComparePageData, CompareMetadata } from "../types";\n` +
    `import { createComparePage } from "@/lib/content-factory";\n\n` +
    `export const ${dataIdentifier}: ComparePageData = createComparePage(${compareInputBody});\n\n` +
    `export const ${metaIdentifier}: CompareMetadata = ${metadataLiteral};\n`
  );
}

/**
 * Insert `  "/compare/<slug>",` into the compareRoutes array in
 * scripts/submit-indexnow.ts. Idempotent — skips if already present.
 */
async function appendCompareRoute(fullSlug: string): Promise<void> {
  const filePath = path.join(
    process.cwd(),
    "scripts/submit-indexnow.ts"
  );
  const route = `/compare/${fullSlug}`;
  const raw = await readFile(filePath, "utf8");
  if (raw.includes(`"${route}"`)) return;

  // Find the compareRoutes array open, then its closing `];` at same depth.
  const openMatch = raw.match(/const\s+compareRoutes\s*=\s*\[/);
  if (!openMatch || openMatch.index === undefined) {
    // Fallback: do nothing if the shape isn't recognized; don't throw,
    // caller can pick it up later. But record in console for debugging.
    console.warn(
      `[ship-comparison] Could not find compareRoutes array in ${filePath}; skipped append.`
    );
    return;
  }
  const openEnd = openMatch.index + openMatch[0].length;
  // Find the matching closing `]` (simple scan — this array is string-only).
  let depth = 1;
  let closeIdx = -1;
  for (let i = openEnd; i < raw.length; i++) {
    const ch = raw[i];
    if (ch === "[") depth++;
    else if (ch === "]") {
      depth--;
      if (depth === 0) {
        closeIdx = i;
        break;
      }
    }
  }
  if (closeIdx === -1) {
    console.warn(
      `[ship-comparison] Unbalanced compareRoutes array; skipped append.`
    );
    return;
  }

  // Insert right before the closing `]`.
  const before = raw.slice(0, closeIdx);
  const after = raw.slice(closeIdx);
  // Ensure trailing comma on previous line, with newline.
  const needsComma = !/,\s*$/m.test(before.trimEnd());
  const insertion = `${needsComma ? "," : ""}\n    "${route}",\n  `;
  const updated = before.trimEnd() + insertion + after;
  await writeFile(filePath, updated, "utf8");
}
