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
  ShipTaskInput,
  slugToCamelCase,
  validateTitleDescription,
} from "./_shared";

/**
 * Zod schema mirroring BestForPageContent in src/lib/best-for/types.ts.
 *
 * Why redefined (not imported): the site's type file exports TypeScript
 * interfaces only, not Zod schemas. Keeping the schema local to the task
 * module is the safer option — the Constraints rule forbids editing
 * src/lib/best-for/types.ts. If the site type drifts we'll catch it at
 * typecheck time because we assert the emitted module compiles against the
 * imported BestForPageContent type.
 */
const WhyBestForReasonSchema = z.object({
  icon: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
});

const PainPointSchema = z.object({
  problem: z.string().min(1),
  solution: z.string().min(1),
});

const ComparisonRowSchema = z.object({
  feature: z.string().min(1),
  prestyj: z.string().min(1),
  others: z.string().min(1),
  note: z.string().optional(),
});

const FAQItemSchema = z.object({
  question: z.string().min(1),
  answer: z.string().min(1),
});

const BestForPageContentSchema = z.object({
  slug: z.string().min(1),
  niche: z.object({
    name: z.string().min(1),
    shortName: z.string().optional(),
    description: z.string().min(1),
  }),
  meta: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    keywords: z.array(z.string().min(1)).min(3),
  }),
  hero: z.object({
    badge: z.string().min(1),
    headline: z.string().min(1),
    headlineAccent: z.string().min(1),
    subheadline: z.string().min(1),
  }),
  whyBestFor: z.array(WhyBestForReasonSchema).min(3),
  painPoints: z.array(PainPointSchema).min(4),
  comparison: z.object({
    headers: z.array(z.string().min(1)).min(2),
    rows: z.array(ComparisonRowSchema).min(3),
  }),
  faq: z.array(FAQItemSchema).min(4),
  cta: z.object({
    headline: z.string().min(1),
    subheadline: z.string().min(1),
    buttonText: z.string().min(1),
    buttonHref: z.string().min(1),
    footnote: z.string().optional(),
  }),
});

type BestForShape = z.infer<typeof BestForPageContentSchema>;

interface GeoPayload {
  slug?: unknown;
  city?: unknown;
  state?: unknown;
  mlsName?: unknown;
  kind?: unknown;
}

export async function shipGeoPage(
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

  const geoPayload: GeoPayload = payload;
  const slug = String(geoPayload.slug ?? "").trim();
  if (!slug) {
    return {
      task: "geoPage",
      success: false,
      error: "payload.slug is required",
      costUSD: 0,
      latencyMs: 0,
    };
  }

  const dupErr = ensureSlugUnique(slug, dedupContext);
  if (dupErr) {
    return {
      task: "geoPage",
      success: false,
      error: dupErr,
      costUSD: 0,
      latencyMs: 0,
    };
  }

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
    schema: BestForPageContentSchema,
    responseFormat: "json",
  });

  if (!result.ok) {
    return {
      task: "geoPage",
      success: false,
      error: result.error,
      costUSD: result.totalCostUSD,
      latencyMs: result.totalLatencyMs,
    };
  }

  const content: BestForShape = result.data;
  if (content.slug !== slug) {
    // Normalize — the caller's slug is the source of truth.
    content.slug = slug;
  }

  // Quality gates.
  const tdErr = validateTitleDescription(
    content.meta.title,
    content.meta.description
  );
  if (tdErr) {
    return {
      task: "geoPage",
      success: false,
      error: tdErr,
      costUSD: result.totalCostUSD,
      latencyMs: result.totalLatencyMs,
    };
  }
  if (content.whyBestFor.length < 3) {
    return {
      task: "geoPage",
      success: false,
      error: `whyBestFor needs >= 3 entries, got ${content.whyBestFor.length}`,
      costUSD: result.totalCostUSD,
      latencyMs: result.totalLatencyMs,
    };
  }
  if (content.painPoints.length < 4) {
    return {
      task: "geoPage",
      success: false,
      error: `painPoints needs >= 4 entries, got ${content.painPoints.length}`,
      costUSD: result.totalCostUSD,
      latencyMs: result.totalLatencyMs,
    };
  }
  if (content.faq.length < 4) {
    return {
      task: "geoPage",
      success: false,
      error: `faq needs >= 4 entries, got ${content.faq.length}`,
      costUSD: result.totalCostUSD,
      latencyMs: result.totalLatencyMs,
    };
  }

  const identifier = slugToCamelCase(slug);
  const fileBody = renderBestForModule(identifier, content);

  const filePath = path.join(
    process.cwd(),
    config.baseDirs.bestFor,
    `${slug}.ts`
  );
  await writeFile(filePath, fileBody, "utf8");

  const indexFile = path.join(
    process.cwd(),
    config.baseDirs.bestFor,
    "index.ts"
  );
  await appendImportAndRegister({
    indexFile,
    importLine: `import { ${identifier} } from "./${slug}";`,
    registerLine: `  "${slug}": ${identifier},`,
    importMarker: "// SEO-BOT-APPEND-IMPORTS",
    registerMarker: "// SEO-BOT-APPEND-REGISTER",
  });

  const shipped: ShippedItem = {
    slug,
    type: "geo-page",
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
    task: "geoPage",
    success: true,
    shipped,
    costUSD: result.totalCostUSD,
    latencyMs: result.totalLatencyMs,
  };
}

function renderBestForModule(
  identifier: string,
  content: BestForShape
): string {
  const body = formatTsValue(content, 2);
  return (
    `import type { BestForPageContent } from "./types";\n\n` +
    `export const ${identifier}: BestForPageContent = ${body};\n`
  );
}
