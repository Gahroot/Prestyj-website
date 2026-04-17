import { promises as fs } from "fs";
import path from "path";
import { z } from "zod";
import type {
  AppConfig,
  BacklogItem,
  DedupContext,
  LLMProvider,
  ShippedItem,
  ShippedManifest,
  TaskExecutionResult,
} from "../types";
import { ShippedManifestSchema } from "../types";

export interface OptimizationTaskInput {
  config: AppConfig;
  provider: LLMProvider;
  model: string;
  systemPrompt: string;
  taskPrompt: string;
  payload?: BacklogItem["payload"];
  dedupContext: DedupContext;
}

interface PageCandidate {
  // filesystem location (absolute)
  filePath: string;
  // the slug (for URL + shipped.json)
  slug: string;
  // which kind of data file
  kind: "best-for" | "compare";
  // current values we'll ship to the LLM and validate against
  currentTitle: string;
  currentDescription: string;
}

const TITLE_MAX = 70;
const DESCRIPTION_MAX = 160;
const DEFAULT_PICK_COUNT = 10;
const RECENT_WINDOW_DAYS = 30;

const LLMResponseSchema = z.object({
  newTitle: z.string().min(1),
  newDescription: z.string().min(1),
  reasoning: z.string().optional().default(""),
});

const TitleRewriteJsonSchema = {
  type: "object",
  properties: {
    newTitle: {
      type: "string",
      description: `New meta title, ${TITLE_MAX} chars or fewer.`,
    },
    newDescription: {
      type: "string",
      description: `New meta description, ${DESCRIPTION_MAX} chars or fewer.`,
    },
    reasoning: {
      type: "string",
      description: "Brief explanation of the rewrite choice.",
    },
  },
  required: ["newTitle", "newDescription"],
  additionalProperties: false,
} as const;

/**
 * Deterministic seeded PRNG (mulberry32) for reproducible picks when a seed
 * is supplied via payload. Non-cryptographic — just enough to make runs repeatable.
 */
function createRng(seed: number | undefined): () => number {
  if (typeof seed !== "number") {
    return Math.random;
  }
  let t = seed >>> 0;
  return () => {
    t = (t + 0x6d2b79f5) >>> 0;
    let r = t;
    r = Math.imul(r ^ (r >>> 15), r | 1);
    r ^= r + Math.imul(r ^ (r >>> 7), r | 61);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffle<T>(arr: T[], rng: () => number): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Extract a quoted string value assigned to `field` inside `scope`. Handles both:
 *   field: "single line value",
 *   field:
 *     "multi-line wrapped value",
 * Returns the raw quoted segment (e.g. `"hello"`) and the surrounding match so we can rewrite in place.
 */
interface FieldMatch {
  // the plain string value
  value: string;
  // the quote character used in the source
  quote: '"' | "'";
  // full matched substring — what we will replace
  fullMatch: string;
  // replacement template: we keep the field name + formatting and swap the string literal
  // We produce the replacement by splicing newValue into a consistent `field: "newValue",` form.
  indent: string;
  fieldName: string;
}

function escapeForLiteral(str: string, quote: '"' | "'"): string {
  // escape backslashes, the quote char, and control chars. keep it minimal.
  return str
    .replace(/\\/g, "\\\\")
    .replace(new RegExp(quote, "g"), `\\${quote}`)
    .replace(/\r?\n/g, "\\n");
}

function findField(scope: string, fieldName: string): FieldMatch | null {
  // Match `indent fieldName:` then optional whitespace/newlines then a quoted string.
  const pattern = new RegExp(
    `(^|\\n)([ \\t]*)${fieldName}:\\s*(["'])((?:\\\\.|(?!\\3)[^\\\\])*)\\3`,
    "m"
  );
  const m = scope.match(pattern);
  if (!m) return null;
  const [full, , indent, quote, rawValue] = m;
  // Drop the leading `\n` if it was captured as part of the anchor.
  const fullMatch = full.startsWith("\n") ? full.slice(1) : full;
  // Unescape for display-level comparison.
  const value = rawValue
    .replace(/\\n/g, "\n")
    .replace(new RegExp(`\\\\${quote}`, "g"), quote)
    .replace(/\\\\/g, "\\");
  return {
    value,
    quote: quote as '"' | "'",
    fullMatch,
    indent,
    fieldName,
  };
}

function replaceField(
  source: string,
  scopeStart: number,
  scopeEnd: number,
  match: FieldMatch,
  newValue: string
): string {
  const scope = source.slice(scopeStart, scopeEnd);
  const replacement = `${match.indent}${match.fieldName}: ${match.quote}${escapeForLiteral(newValue, match.quote)}${match.quote}`;
  const updatedScope = scope.replace(match.fullMatch, replacement);
  if (updatedScope === scope) {
    throw new Error(
      `[rewrite-titles] Failed to splice new value for field "${match.fieldName}" — old string not found.`
    );
  }
  return source.slice(0, scopeStart) + updatedScope + source.slice(scopeEnd);
}

/**
 * Locate the `meta: { ... }` block inside a best-for file.
 */
function findBestForMetaScope(
  source: string
): { start: number; end: number } | null {
  const metaIdx = source.search(/^\s*meta:\s*\{/m);
  if (metaIdx === -1) return null;
  const braceIdx = source.indexOf("{", metaIdx);
  if (braceIdx === -1) return null;
  let depth = 0;
  for (let i = braceIdx; i < source.length; i++) {
    const ch = source[i];
    if (ch === "{") depth++;
    else if (ch === "}") {
      depth--;
      if (depth === 0) {
        return { start: braceIdx, end: i + 1 };
      }
    }
  }
  return null;
}

/**
 * Locate the `CompareMetadata = { ... }` block inside a compare data file.
 */
function findCompareMetadataScope(
  source: string
): { start: number; end: number } | null {
  const idx = source.search(/:\s*CompareMetadata\s*=\s*\{/);
  if (idx === -1) return null;
  const braceIdx = source.indexOf("{", idx);
  if (braceIdx === -1) return null;
  let depth = 0;
  for (let i = braceIdx; i < source.length; i++) {
    const ch = source[i];
    if (ch === "{") depth++;
    else if (ch === "}") {
      depth--;
      if (depth === 0) {
        return { start: braceIdx, end: i + 1 };
      }
    }
  }
  return null;
}

function extractScopeFields(
  source: string,
  kind: PageCandidate["kind"]
): { title: string; description: string; scopeStart: number; scopeEnd: number } | null {
  const scope =
    kind === "best-for"
      ? findBestForMetaScope(source)
      : findCompareMetadataScope(source);
  if (!scope) return null;

  const scopeText = source.slice(scope.start, scope.end);
  const titleMatch = findField(scopeText, "title");
  const descriptionMatch = findField(scopeText, "description");
  if (!titleMatch || !descriptionMatch) return null;
  return {
    title: titleMatch.value,
    description: descriptionMatch.value,
    scopeStart: scope.start,
    scopeEnd: scope.end,
  };
}

async function listCandidates(
  config: AppConfig
): Promise<PageCandidate[]> {
  const candidates: PageCandidate[] = [];

  // best-for
  const bestForDir = path.resolve(process.cwd(), config.baseDirs.bestFor);
  try {
    const bestForFiles = (await fs.readdir(bestForDir)).filter(
      (f) =>
        f.endsWith(".ts") &&
        !["index.ts", "types.ts", "_geo-helpers.ts"].includes(f)
    );
    for (const file of bestForFiles) {
      const filePath = path.join(bestForDir, file);
      let source: string;
      try {
        source = await fs.readFile(filePath, "utf-8");
      } catch {
        continue;
      }
      const fields = extractScopeFields(source, "best-for");
      if (!fields) continue;
      candidates.push({
        filePath,
        slug: file.replace(/\.ts$/, ""),
        kind: "best-for",
        currentTitle: fields.title,
        currentDescription: fields.description,
      });
    }
  } catch {
    // directory missing — skip silently
  }

  // compare
  const compareDir = path.resolve(process.cwd(), config.baseDirs.compare);
  try {
    const compareFiles = (await fs.readdir(compareDir)).filter((f) =>
      f.endsWith(".ts")
    );
    for (const file of compareFiles) {
      const filePath = path.join(compareDir, file);
      let source: string;
      try {
        source = await fs.readFile(filePath, "utf-8");
      } catch {
        continue;
      }
      const fields = extractScopeFields(source, "compare");
      if (!fields) continue;
      candidates.push({
        filePath,
        slug: file.replace(/\.ts$/, ""),
        kind: "compare",
        currentTitle: fields.title,
        currentDescription: fields.description,
      });
    }
  } catch {
    // directory missing — skip silently
  }

  return candidates;
}

async function loadShippedManifest(
  config: AppConfig
): Promise<ShippedManifest> {
  const filePath = path.resolve(process.cwd(), config.state.shippedFile);
  try {
    const raw = await fs.readFile(filePath, "utf-8");
    const parsed = JSON.parse(raw);
    return ShippedManifestSchema.parse(parsed);
  } catch {
    return { items: [], lastUpdated: new Date().toISOString() };
  }
}

async function appendShippedItem(
  config: AppConfig,
  item: ShippedItem
): Promise<void> {
  const filePath = path.resolve(process.cwd(), config.state.shippedFile);
  const manifest = await loadShippedManifest(config);
  manifest.items.push(item);
  manifest.lastUpdated = new Date().toISOString();
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, JSON.stringify(manifest, null, 2) + "\n", "utf-8");
}

function recentlyRewrittenSlugs(manifest: ShippedManifest): Set<string> {
  const cutoff = Date.now() - RECENT_WINDOW_DAYS * 24 * 60 * 60 * 1000;
  const slugs = new Set<string>();
  for (const item of manifest.items) {
    if (item.type !== "title-rewrite") continue;
    const shippedAtMs = Date.parse(item.shippedAt);
    if (!Number.isFinite(shippedAtMs)) continue;
    if (shippedAtMs >= cutoff) {
      slugs.add(item.slug);
    }
  }
  return slugs;
}

function parseJsonLoose(raw: string): unknown {
  // Models sometimes wrap JSON in code fences despite instructions.
  const trimmed = raw.trim();
  const fenceMatch = trimmed.match(/^```(?:json)?\s*\n([\s\S]*?)\n```$/);
  const body = fenceMatch ? fenceMatch[1] : trimmed;
  return JSON.parse(body);
}

function buildUserInput(candidate: PageCandidate): string {
  return [
    `Slug: ${candidate.slug}`,
    `Kind: ${candidate.kind}`,
    `Current title: ${candidate.currentTitle}`,
    `Current description: ${candidate.currentDescription}`,
    ``,
    `Rewrite the meta title (≤${TITLE_MAX} chars) and description (≤${DESCRIPTION_MAX} chars).`,
    `Return strict JSON: { "newTitle": string, "newDescription": string, "reasoning": string }.`,
    `Neither may be empty or identical to the current values.`,
  ].join("\n");
}

function validateRewrite(
  candidate: PageCandidate,
  parsed: z.infer<typeof LLMResponseSchema>
): string | null {
  const { newTitle, newDescription } = parsed;
  if (!newTitle.trim()) return "newTitle is empty";
  if (!newDescription.trim()) return "newDescription is empty";
  if (newTitle.length > TITLE_MAX)
    return `newTitle exceeds ${TITLE_MAX} chars (${newTitle.length})`;
  if (newDescription.length > DESCRIPTION_MAX)
    return `newDescription exceeds ${DESCRIPTION_MAX} chars (${newDescription.length})`;
  if (newTitle === candidate.currentTitle)
    return "newTitle is identical to current";
  if (newDescription === candidate.currentDescription)
    return "newDescription is identical to current";
  return null;
}

async function rewriteSingleCandidate(
  input: OptimizationTaskInput,
  candidate: PageCandidate
): Promise<TaskExecutionResult> {
  const startedAt = Date.now();
  try {
    const response = await input.provider.generate({
      system: input.systemPrompt,
      user: `${input.taskPrompt}\n\n${buildUserInput(candidate)}`,
      model: input.model,
      maxTokens: 512,
      temperature: 0.7,
      responseFormat: "json",
      jsonSchema: TitleRewriteJsonSchema as unknown as Record<string, unknown>,
    });

    let parsed: z.infer<typeof LLMResponseSchema>;
    try {
      const json = parseJsonLoose(response.content);
      parsed = LLMResponseSchema.parse(json);
    } catch (err) {
      return {
        task: "titleRewrite",
        success: false,
        error: `Failed to parse LLM JSON for ${candidate.slug}: ${err instanceof Error ? err.message : String(err)}`,
        costUSD: response.costUSD,
        latencyMs: Date.now() - startedAt,
      };
    }

    const validationError = validateRewrite(candidate, parsed);
    if (validationError) {
      return {
        task: "titleRewrite",
        success: false,
        error: `Validation failed for ${candidate.slug}: ${validationError}`,
        costUSD: response.costUSD,
        latencyMs: Date.now() - startedAt,
      };
    }

    const source = await fs.readFile(candidate.filePath, "utf-8");
    const scope =
      candidate.kind === "best-for"
        ? findBestForMetaScope(source)
        : findCompareMetadataScope(source);
    if (!scope) {
      return {
        task: "titleRewrite",
        success: false,
        error: `Could not relocate meta scope in ${candidate.filePath}`,
        costUSD: response.costUSD,
        latencyMs: Date.now() - startedAt,
      };
    }

    const scopeText = source.slice(scope.start, scope.end);
    const titleMatch = findField(scopeText, "title");
    const descriptionMatch = findField(scopeText, "description");
    if (!titleMatch || !descriptionMatch) {
      return {
        task: "titleRewrite",
        success: false,
        error: `Could not relocate title/description field in ${candidate.filePath}`,
        costUSD: response.costUSD,
        latencyMs: Date.now() - startedAt,
      };
    }

    let updated = replaceField(
      source,
      scope.start,
      scope.end,
      titleMatch,
      parsed.newTitle
    );
    // Recompute scope bounds since we mutated the file (length may have changed).
    const newScope =
      candidate.kind === "best-for"
        ? findBestForMetaScope(updated)
        : findCompareMetadataScope(updated);
    if (!newScope) {
      return {
        task: "titleRewrite",
        success: false,
        error: `Lost meta scope after title edit in ${candidate.filePath}`,
        costUSD: response.costUSD,
        latencyMs: Date.now() - startedAt,
      };
    }
    const newScopeText = updated.slice(newScope.start, newScope.end);
    const descMatch2 = findField(newScopeText, "description");
    if (!descMatch2) {
      return {
        task: "titleRewrite",
        success: false,
        error: `Could not relocate description after title edit in ${candidate.filePath}`,
        costUSD: response.costUSD,
        latencyMs: Date.now() - startedAt,
      };
    }
    updated = replaceField(
      updated,
      newScope.start,
      newScope.end,
      descMatch2,
      parsed.newDescription
    );

    await fs.writeFile(candidate.filePath, updated, "utf-8");

    const shipped: ShippedItem = {
      slug: candidate.slug,
      type: "title-rewrite",
      title: parsed.newTitle,
      description: parsed.newDescription,
      filePath: candidate.filePath,
      shippedAt: new Date().toISOString(),
      provider: input.provider.name,
      model: response.model || input.model,
      costUSD: response.costUSD,
    };
    await appendShippedItem(input.config, shipped);

    return {
      task: "titleRewrite",
      success: true,
      shipped,
      costUSD: response.costUSD,
      latencyMs: Date.now() - startedAt,
    };
  } catch (err) {
    return {
      task: "titleRewrite",
      success: false,
      error: `${candidate.slug}: ${err instanceof Error ? err.message : String(err)}`,
      costUSD: 0,
      latencyMs: Date.now() - startedAt,
    };
  }
}

export async function rewriteTitles(
  input: OptimizationTaskInput
): Promise<TaskExecutionResult[]> {
  const payload = input.payload ?? {};
  const seedVal = typeof payload.seed === "number" ? payload.seed : undefined;
  const pickCountVal =
    typeof payload.count === "number" && payload.count > 0
      ? Math.floor(payload.count)
      : DEFAULT_PICK_COUNT;
  const rng = createRng(seedVal);

  const manifest = await loadShippedManifest(input.config);
  const recent = recentlyRewrittenSlugs(manifest);

  const allCandidates = await listCandidates(input.config);
  const eligible = allCandidates.filter((c) => !recent.has(c.slug));

  if (eligible.length === 0) {
    return [
      {
        task: "titleRewrite",
        success: false,
        error:
          "No eligible pages to rewrite (all have been rewritten within the last 30 days or none were discovered).",
        costUSD: 0,
        latencyMs: 0,
      },
    ];
  }

  const picked = shuffle(eligible, rng).slice(0, pickCountVal);

  const results: TaskExecutionResult[] = [];
  for (const candidate of picked) {
    const result = await rewriteSingleCandidate(input, candidate);
    results.push(result);
  }

  return results;
}
