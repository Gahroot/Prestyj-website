import { readFile, writeFile } from "fs/promises";
import * as path from "path";
import { z } from "zod";
import type {
  AppConfig,
  BacklogItem,
  DedupContext,
  LLMProvider,
  LLMRequest,
  LLMResponse,
  ResearchBrief,
  ShippedItem,
  ShippedManifest,
} from "../types";
import { ShippedManifestSchema } from "../types";

/**
 * Common input shape for every content ship task.
 */
export interface ShipTaskInput {
  config: AppConfig;
  provider: LLMProvider;
  model: string;
  systemPrompt: string;
  taskPrompt: string;
  payload: BacklogItem["payload"];
  dedupContext: DedupContext;
  researchBrief?: ResearchBrief;
}

/**
 * Convert a dash-cased slug to camelCase for identifiers.
 * e.g. video-ads-for-realtors-austin -> videoAdsForRealtorsAustin
 */
export function slugToCamelCase(slug: string): string {
  // Normalize out any path prefix like "solutions/foo" -> "foo"
  const bare = slug.includes("/") ? slug.split("/").pop() || slug : slug;
  return bare
    .split("-")
    .map((part, i) =>
      i === 0 ? part : part.charAt(0).toUpperCase() + part.slice(1)
    )
    .join("");
}

/**
 * Remove prestyj-vs- prefix from comparison slugs so the file lands at
 * src/lib/compare/data/<competitor>.ts per the existing arcads.ts pattern.
 */
export function stripPrestyjVsPrefix(slug: string): string {
  return slug.replace(/^prestyj-vs-/, "");
}

/**
 * Normalize a niche-page slug that may arrive as "solutions/foo" from
 * the backlog. Solution pages live keyed by bare slug in the index.
 */
export function normalizeSolutionSlug(slug: string): string {
  return slug.includes("/") ? slug.split("/").pop() || slug : slug;
}

/**
 * Pretty-print a JSON value as a TypeScript-literal `const` object.
 * Uses 2-space indentation and double-quoted keys. Handles arrays, strings
 * (with escape of backticks and backslashes), numbers, booleans, null, and
 * nested objects.
 */
export function formatTsValue(value: unknown, indent: number = 2): string {
  const pad = (n: number) => " ".repeat(n);

  const inner = (val: unknown, depth: number): string => {
    if (val === null) return "null";
    if (val === undefined) return "undefined";
    if (typeof val === "boolean" || typeof val === "number") return String(val);
    if (typeof val === "string") {
      // Use double-quoted strings, escape backslashes and double quotes.
      const escaped = val
        .replace(/\\/g, "\\\\")
        .replace(/"/g, '\\"')
        .replace(/\n/g, "\\n")
        .replace(/\r/g, "\\r");
      return `"${escaped}"`;
    }
    if (Array.isArray(val)) {
      if (val.length === 0) return "[]";
      const body = val
        .map((item) => `${pad(depth + indent)}${inner(item, depth + indent)}`)
        .join(",\n");
      return `[\n${body},\n${pad(depth)}]`;
    }
    if (typeof val === "object") {
      const entries = Object.entries(val as Record<string, unknown>).filter(
        ([, v]) => v !== undefined
      );
      if (entries.length === 0) return "{}";
      const body = entries
        .map(([k, v]) => {
          const keyOut = /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(k) ? k : `"${k}"`;
          return `${pad(depth + indent)}${keyOut}: ${inner(v, depth + indent)}`;
        })
        .join(",\n");
      return `{\n${body},\n${pad(depth)}}`;
    }
    // Fallback: serialize unknown primitives safely.
    return JSON.stringify(val);
  };

  return inner(value, 0);
}

/**
 * Extract the first JSON value from a string. Some LLMs add stray prose
 * around their JSON even when asked not to. Be tolerant: strip code fences
 * first, then hunt for the first balanced `{...}` block.
 */
export function extractJson(raw: string): unknown {
  const trimmed = raw.trim();
  const fenceStripped = trimmed
    .replace(/^```(?:json)?\s*/i, "")
    .replace(/```\s*$/, "")
    .trim();

  // Try direct parse first.
  try {
    return JSON.parse(fenceStripped);
  } catch {
    // Fall through to brace-matching scan.
  }

  // Find first balanced object.
  let depth = 0;
  let start = -1;
  let inString = false;
  let escape = false;
  for (let i = 0; i < fenceStripped.length; i++) {
    const ch = fenceStripped[i];
    if (escape) {
      escape = false;
      continue;
    }
    if (ch === "\\") {
      escape = true;
      continue;
    }
    if (ch === '"') {
      inString = !inString;
      continue;
    }
    if (inString) continue;
    if (ch === "{") {
      if (depth === 0) start = i;
      depth++;
    } else if (ch === "}") {
      depth--;
      if (depth === 0 && start !== -1) {
        const candidate = fenceStripped.slice(start, i + 1);
        return JSON.parse(candidate);
      }
    }
  }
  throw new Error("No JSON object found in LLM output");
}

/**
 * Call the provider with retry-once-on-validation-failure semantics.
 *
 * If the first JSON response doesn't pass the zod schema, we retry with a
 * follow-up prompt that includes the parse error. If the second attempt
 * also fails, we return the accumulated error and total cost.
 */
export async function callProviderWithValidation<T>(args: {
  provider: LLMProvider;
  model: string;
  systemPrompt: string;
  userPrompt: string;
  schema: z.ZodType<T>;
  responseFormat: "json" | "text";
}): Promise<
  | {
      ok: true;
      data: T;
      raw: string;
      totalCostUSD: number;
      totalLatencyMs: number;
      lastResponse: LLMResponse;
    }
  | { ok: false; error: string; totalCostUSD: number; totalLatencyMs: number }
> {
  const { provider, model, systemPrompt, schema, responseFormat } = args;
  let totalCostUSD = 0;
  let totalLatencyMs = 0;
  let attemptError = "";
  let lastRawContent = "";
  let userPrompt = args.userPrompt;

  for (let attempt = 0; attempt < 2; attempt++) {
    const req: LLMRequest = {
      system: systemPrompt,
      user: userPrompt,
      model,
      maxTokens: 8192,
      temperature: 0.7,
      responseFormat,
    };

    let response: LLMResponse;
    try {
      response = await provider.generate(req);
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      return {
        ok: false,
        error: `Provider call failed: ${msg}`,
        totalCostUSD,
        totalLatencyMs,
      };
    }

    totalCostUSD += response.costUSD;
    totalLatencyMs += response.latencyMs;
    lastRawContent = response.content;

    if (responseFormat === "text") {
      // For text (blog MDX) the schema wraps the raw string — validate below.
      const parseResult = schema.safeParse(response.content);
      if (parseResult.success) {
        return {
          ok: true,
          data: parseResult.data,
          raw: response.content,
          totalCostUSD,
          totalLatencyMs,
          lastResponse: response,
        };
      }
      attemptError = formatZodError(parseResult.error);
    } else {
      let parsed: unknown;
      try {
        parsed = extractJson(response.content);
      } catch (err) {
        attemptError = err instanceof Error ? err.message : String(err);
        userPrompt =
          args.userPrompt +
          `\n\nYour previous reply was not valid JSON. Error: ${attemptError}. Return only the JSON object that conforms to the schema — no prose, no code fences.`;
        continue;
      }

      const result = schema.safeParse(parsed);
      if (result.success) {
        return {
          ok: true,
          data: result.data,
          raw: response.content,
          totalCostUSD,
          totalLatencyMs,
          lastResponse: response,
        };
      }
      attemptError = formatZodError(result.error);
    }

    // Build a retry prompt on the second pass.
    if (attempt === 0) {
      userPrompt =
        args.userPrompt +
        `\n\nYour previous reply failed validation with the following error(s):\n${attemptError}\n\nFix these issues and return only the corrected ${
          responseFormat === "json" ? "JSON object" : "output"
        }.`;
    }
  }

  return {
    ok: false,
    error: `Validation failed after 2 attempts. Last error: ${attemptError}. Last output preview: ${lastRawContent
      .slice(0, 400)
      .replace(/\s+/g, " ")}`,
    totalCostUSD,
    totalLatencyMs,
  };
}

function formatZodError(err: z.ZodError): string {
  return err.issues
    .slice(0, 10)
    .map((i) => `- ${i.path.join(".") || "(root)"}: ${i.message}`)
    .join("\n");
}

/**
 * Build dedup/research context text to append to the user prompt.
 */
export function buildContextSuffix(
  dedupContext: DedupContext,
  researchBrief?: ResearchBrief
): string {
  const parts: string[] = [];

  const recent = dedupContext.recentlyShippedSummaries.slice(0, 20);
  if (recent.length > 0) {
    parts.push(
      "## Recently shipped (DO NOT duplicate angles, hooks, or titles):\n" +
        recent
          .map(
            (r) =>
              `- [${r.slug}] ${r.title}${
                r.description ? ` — ${r.description}` : ""
              }`
          )
          .join("\n")
    );
  }

  if (researchBrief) {
    const angleLines = researchBrief.trendingAngles
      .slice(0, 8)
      .map((a) => `- ${a}`)
      .join("\n");
    const compLines = researchBrief.competitorMoves
      .slice(0, 5)
      .map((c) => `- ${c.competitor}: ${c.observation}`)
      .join("\n");
    const gscLines = researchBrief.gscOpportunities
      .slice(0, 5)
      .map((g) => `- "${g.query}" — ${g.reason}`)
      .join("\n");

    parts.push(
      `## Today's research brief (${researchBrief.date}) — weave angles into the output:`
    );
    if (angleLines) parts.push(`### Trending angles:\n${angleLines}`);
    if (compLines) parts.push(`### Competitor moves:\n${compLines}`);
    if (gscLines) parts.push(`### GSC opportunities:\n${gscLines}`);
  }

  return parts.length === 0 ? "" : `\n\n${parts.join("\n\n")}`;
}

/**
 * Update the shipped.json manifest by reading, appending a new item,
 * updating lastUpdated, and writing back.
 */
export async function appendShippedItem(
  config: AppConfig,
  item: ShippedItem
): Promise<void> {
  const shippedPath = path.join(process.cwd(), config.state.shippedFile);
  let manifest: ShippedManifest;
  try {
    const raw = await readFile(shippedPath, "utf8");
    const parsed: unknown = JSON.parse(raw);
    manifest = ShippedManifestSchema.parse(parsed);
  } catch {
    manifest = { items: [], lastUpdated: new Date().toISOString() };
  }
  manifest.items.push(item);
  manifest.lastUpdated = new Date().toISOString();
  await writeFile(
    shippedPath,
    JSON.stringify(manifest, null, 2) + "\n",
    "utf8"
  );
}

/**
 * Append a single line to an index file between a marker and the next
 * line, OR append at end if no marker. Inserts the marker if not found,
 * BEFORE the first export statement after imports.
 */
export async function appendImportAndRegister(options: {
  indexFile: string;
  importLine: string;
  registerLine: string;
  importMarker: string;
  registerMarker: string;
}): Promise<void> {
  const { indexFile, importLine, registerLine, importMarker, registerMarker } =
    options;
  let content = await readFile(indexFile, "utf8");

  // Ensure import marker exists.
  if (!content.includes(importMarker)) {
    // Insert marker right after the last import/top-level `from "./..."` line.
    const lines = content.split("\n");
    let lastImportIdx = -1;
    for (let i = 0; i < lines.length; i++) {
      if (/^import\s/.test(lines[i])) lastImportIdx = i;
    }
    if (lastImportIdx === -1) {
      content = `${importMarker}\n${content}`;
    } else {
      lines.splice(lastImportIdx + 1, 0, "", importMarker);
      content = lines.join("\n");
    }
  }

  // Ensure register marker exists.
  if (!content.includes(registerMarker)) {
    // Insert marker at end of the main registration object: look for the last
    // `};` closing the export const map. Fallback: append at end of file.
    const mapCloseIdx = content.lastIndexOf("};");
    if (mapCloseIdx !== -1) {
      content =
        content.slice(0, mapCloseIdx) +
        `  ${registerMarker}\n` +
        content.slice(mapCloseIdx);
    } else {
      content = `${content}\n${registerMarker}\n`;
    }
  }

  // Guard: don't double-append if the import line already exists.
  if (!content.includes(importLine)) {
    content = content.replace(importMarker, `${importMarker}\n${importLine}`);
  }
  if (!content.includes(registerLine.trim())) {
    content = content.replace(
      registerMarker,
      `${registerMarker}\n${registerLine}`
    );
  }

  await writeFile(indexFile, content, "utf8");
}

/**
 * Quality gate helpers — return error string if invalid, null if ok.
 */
export function validateTitleDescription(
  title: string,
  description: string
): string | null {
  if (title.length > 70) {
    return `Title too long (${title.length} > 70 chars): "${title}"`;
  }
  if (description.length > 160) {
    return `Description too long (${description.length} > 160 chars)`;
  }
  return null;
}

export function ensureSlugUnique(
  slug: string,
  dedupContext: DedupContext
): string | null {
  if (dedupContext.shippedSlugs.has(slug)) {
    return `duplicate slug: ${slug} is already shipped`;
  }
  return null;
}

/**
 * Build the inbound user prompt with payload, dedup context and research.
 */
export function composeUserPrompt(
  taskPrompt: string,
  payload: BacklogItem["payload"],
  dedupContext: DedupContext,
  researchBrief?: ResearchBrief
): string {
  const payloadBlock = `## Payload:\n\`\`\`json\n${JSON.stringify(
    payload,
    null,
    2
  )}\n\`\`\``;
  const context = buildContextSuffix(dedupContext, researchBrief);
  return `${taskPrompt}\n\n${payloadBlock}${context}`;
}
