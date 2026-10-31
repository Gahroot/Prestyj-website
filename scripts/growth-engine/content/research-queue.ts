import { createHash } from "node:crypto";
import { z } from "zod";
import type { Opportunity } from "../shared/contracts";
import type { ContentConfig } from "./config";
import { LANE_PROFILES, LANES, laneOfOpportunity, laneServices, type Lane } from "./lanes";
import { extractJson, type MeteredLlm } from "./llm";
import { buyerPrompts, ledgerSlugs, readRegistry } from "./site";
import { mergeOpportunities, normalizeQuery } from "./store";

const idFor = (prefix: string, query: string): string =>
  `${prefix}-${createHash("sha256").update(normalizeQuery(query)).digest("hex").slice(0, 10)}`;

/** Deterministic seeds from the buyer-prompt set (no LLM). */
export function seedFromPrompts(root: string, config: ContentConfig, now: Date): Opportunity[] {
  return buyerPrompts(root).map((prompt) => ({
    id: `prompt-${prompt.id}`,
    kind: "new-topic",
    path: null,
    queries: [prompt.text],
    evidence: `Institutional buyer prompt ${prompt.id} (data/seo/institutional-buyer-prompts.json); demand assumed, not measured.`,
    score: config.research.promptSeedScore,
    createdAt: now.toISOString(),
    status: "open",
  }));
}

/**
 * Research runs weekly per lane, and also whenever a lane has no open topic left to write
 * (so the engine never idles). Without `lane`, true if any lane is due.
 */
export function researchDue(
  existing: Opportunity[],
  config: ContentConfig,
  now: Date,
  lane?: Lane,
): boolean {
  if (!lane) return LANES.some((each) => researchDue(existing, config, now, each));
  const mine = existing.filter((item) => laneOfOpportunity(item) === lane);
  if (!mine.some((item) => item.status === "open" && item.kind === "new-topic")) return true;
  const cutoff = now.getTime() - config.research.everyDays * 86_400_000;
  return !mine.some(
    (item) => item.id.startsWith("research-") && Date.parse(item.createdAt) > cutoff,
  );
}

/** Lanes whose research is due, real estate first. */
export function dueLanes(existing: Opportunity[], config: ContentConfig, now: Date): Lane[] {
  return LANES.filter((lane) => researchDue(existing, config, now, lane));
}

const researchItemSchema = z.object({
  query: z.string().trim().min(8),
  audience: z.string().catch("unknown"),
  service: z.string().catch(""),
  evidence: z.string().catch(""),
  score: z.coerce
    .number()
    .catch(0)
    .transform((value) => Math.max(0, Math.min(100, value))),
});
const researchListSchema = z.preprocess(
  (value) =>
    value && typeof value === "object" && !Array.isArray(value)
      ? (Object.values(value).find(Array.isArray) ?? value)
      : value,
  z.array(z.unknown()),
);

/** Keeps every well-formed item; drops malformed ones instead of failing the whole list. */
export function parseResearchItems(text: string): z.infer<typeof researchItemSchema>[] {
  return researchListSchema.parse(extractJson(text)).flatMap((item) => {
    const parsed = researchItemSchema.safeParse(item);
    return parsed.success ? [parsed.data] : [];
  });
}

const researchSystem = (lane: Lane): string =>
  `You research search and AI-assistant demand for Prestyj. ${LANE_PROFILES[lane].researchFocus}`;

export async function researchTopics(
  root: string,
  llm: MeteredLlm,
  config: ContentConfig,
  now: Date,
  lane: Lane = "real-estate",
): Promise<{ items: Opportunity[]; costUsd: number }> {
  const profile = LANE_PROFILES[lane];
  const services = laneServices(lane).map((service) => service.slug);
  const serviceField = services.length ? `, "service": one of ${JSON.stringify(services)}` : "";
  const examples = profile.exampleQuestions.length
    ? `\nExamples of the intent wanted (find real variants, do not copy): ${profile.exampleQuestions.join(" / ")}`
    : "";
  const covered = [
    ...readRegistry(root).map((entry) => entry.title),
    ...ledgerSlugs(root).map((item) => item.topic),
  ];
  const prompt = `Use web search to find buyer questions and competitor content gaps for these audiences: ${profile.audiences.replace(/\|/g, ", ")}.${examples}
Already covered by Prestyj (do not repeat these angles):
${covered.map((title) => `- ${title}`).join("\n")}

Return ONLY a JSON array of up to ${config.research.maxItemsPerRun} objects:
[{"query": "the exact question a buyer would type or ask", "audience": "${profile.audiences}", "evidence": "what you found: who ranks, what is missing, with URLs", "score": 0-60 expected qualified-demo value${serviceField}}]`;
  const result = await llm.complete({
    purpose: "research",
    model: config.models.research,
    system: researchSystem(lane),
    prompt: `${prompt}\n\nAfter searching, your final message must be the JSON array alone in a \`\`\`json fence, with no prose after it.`,
    maxTokens: 16000,
    webSearchMaxUses: config.webSearch.maxUsesResearch,
  });
  let costUsd = result.costUsd;
  let parsed: z.infer<typeof researchItemSchema>[];
  try {
    parsed = parseResearchItems(result.text);
  } catch (firstError) {
    // One repair attempt, no tools: re-emit the findings as JSON only.
    const repair = await llm.complete({
      purpose: "research",
      model: config.models.research,
      system:
        "You convert research notes into strict JSON. Return only JSON, no prose, no code fence.",
      prompt: `Convert these research findings into ONLY a JSON array of up to ${config.research.maxItemsPerRun} objects of the form {"query": string, "audience": "${profile.audiences}", "evidence": string, "score": number 0-60${serviceField ? ', "service": string' : ""}}. Return only JSON.\n\nFINDINGS:\n${result.text.slice(-30_000) || "(empty)"}`,
      maxTokens: 6000,
    });
    costUsd += repair.costUsd;
    try {
      parsed = parseResearchItems(repair.text);
    } catch {
      throw new Error(
        `research output not JSON after repair: ${firstError instanceof Error ? firstError.message : String(firstError)}`,
      );
    }
  }
  const prefix = lane === "real-estate" ? "research" : `research-${lane}`;
  const items: Opportunity[] = parsed.slice(0, config.research.maxItemsPerRun).map((item) => ({
    id: idFor(prefix, item.query),
    kind: "new-topic",
    path: null,
    queries: [item.query],
    evidence:
      `LLM web research (${lane === "real-estate" ? item.audience : `${lane}, ${item.audience}${services.includes(item.service) ? `, service=${item.service}` : ""}`}): ${item.evidence}`.slice(
        0,
        1000,
      ),
    score: Math.min(60, item.score),
    createdAt: now.toISOString(),
    status: "open",
  }));
  return { items, costUsd };
}

export { mergeOpportunities };
