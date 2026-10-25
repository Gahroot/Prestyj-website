import { createHash } from "node:crypto";
import { z } from "zod";
import type { Opportunity } from "../shared/contracts";
import type { ContentConfig } from "./config";
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

/** Research runs weekly, and also whenever no open topic is left to write (so the engine never idles). */
export function researchDue(existing: Opportunity[], config: ContentConfig, now: Date): boolean {
  if (!existing.some((item) => item.status === "open" && item.kind === "new-topic")) return true;
  const cutoff = now.getTime() - config.research.everyDays * 86_400_000;
  return !existing.some(
    (item) => item.id.startsWith("research-") && Date.parse(item.createdAt) > cutoff,
  );
}

const researchItemSchema = z.object({
  query: z.string().trim().min(8),
  audience: z.string().catch("unknown"),
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

const RESEARCH_SYSTEM = `You research search and AI-assistant demand for Prestyj, which builds and operates AI agents for institutional real estate: real estate investment funds from $500M AUM, commercial brokerages, and CRE owner-operators. Prestyj delivers reviewed deal, fund, investor, portfolio, origination and listing-media work product from the systems a firm already runs, with sources attached and review gates.
Find high-intent questions decision-makers (CFOs, COOs, heads of IR, asset management, brokerage leaders) ask search engines and AI assistants, where existing content is thin or generic. Ignore residential realtor, home-services and generic AI-consulting topics.`;

export async function researchTopics(
  root: string,
  llm: MeteredLlm,
  config: ContentConfig,
  now: Date,
): Promise<{ items: Opportunity[]; costUsd: number }> {
  const covered = [
    ...readRegistry(root).map((entry) => entry.title),
    ...ledgerSlugs(root).map((item) => item.topic),
  ];
  const prompt = `Use web search to find buyer questions and competitor content gaps for the three audiences.
Already covered by Prestyj (do not repeat these angles):
${covered.map((title) => `- ${title}`).join("\n")}

Return ONLY a JSON array of up to ${config.research.maxItemsPerRun} objects:
[{"query": "the exact question a buyer would type or ask", "audience": "fund|brokerage|owner-operator", "evidence": "what you found: who ranks, what is missing, with URLs", "score": 0-60 expected qualified-demo value}]`;
  const result = await llm.complete({
    purpose: "research",
    model: config.models.research,
    system: RESEARCH_SYSTEM,
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
      prompt: `Convert these research findings into ONLY a JSON array of up to ${config.research.maxItemsPerRun} objects of the form {"query": string, "audience": "fund|brokerage|owner-operator", "evidence": string, "score": number 0-60}. Return only JSON.\n\nFINDINGS:\n${result.text.slice(-30_000) || "(empty)"}`,
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
  const items: Opportunity[] = parsed.slice(0, config.research.maxItemsPerRun).map((item) => ({
    id: idFor("research", item.query),
    kind: "new-topic",
    path: null,
    queries: [item.query],
    evidence: `LLM web research (${item.audience}): ${item.evidence}`.slice(0, 1000),
    score: Math.min(60, item.score),
    createdAt: now.toISOString(),
    status: "open",
  }));
  return { items, costUsd };
}

export { mergeOpportunities };
