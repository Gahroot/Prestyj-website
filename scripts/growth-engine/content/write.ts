import { dump } from "js-yaml";
import { z } from "zod";
import type { Opportunity } from "../shared/contracts";
import type { ContentConfig } from "./config";
import { extractJson, type MeteredLlm } from "./llm";
import { CAPABILITY_SLUGS, TOPIC_VALUES, type ParsedArticle, type RegistryEntry } from "./site";

/** Soft list fields: trim, drop empties, dedupe (case-insensitive), keep the first `max`. */
const softList = (max: number, keep: (value: string) => boolean = () => true) =>
  z.preprocess((value) => {
    const list = Array.isArray(value) ? value : typeof value === "string" ? value.split(",") : [];
    const seen = new Set<string>();
    return list
      .map((item) => String(item).trim())
      .filter((item) => {
        const key = item.toLowerCase();
        if (!item || seen.has(key) || !keep(item)) return false;
        seen.add(key);
        return true;
      })
      .slice(0, max);
  }, z.array(z.string()));

/** Soft length limit: cut at a word boundary instead of rejecting the draft. */
export function clipAtWord(value: unknown, max: number, end = "."): string {
  const text = String(value ?? "").trim();
  if (text.length <= max) return text;
  const cut = text.slice(0, max - end.length);
  const space = cut.lastIndexOf(" ");
  return `${(space > 0 ? cut.slice(0, space) : cut).replace(/[\s,;:–—-]+$/, "")}${end}`;
}

export const draftMetaSchema = z.object({
  slug: z
    .string()
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
    .max(80),
  title: z.string().min(10).max(90),
  // Soft: an overlong meta description is cut at a word boundary, not rejected.
  description: z.preprocess((value) => clipAtWord(value, 170), z.string().min(50).max(170)),
  // Soft fields are normalized; the minimums stay hard.
  keywords: softList(6, (item) => item.length >= 2).pipe(z.array(z.string()).min(2)),
  category: z.string().trim().min(3).max(40),
  capabilities: softList(6, (item) => CAPABILITY_SLUGS.includes(item)).pipe(
    z.array(z.string()).min(1),
  ),
  topics: softList(3, (item) => (TOPIC_VALUES as readonly string[]).includes(item)).pipe(
    z.array(z.string()).min(1),
  ),
  registryTitle: z.preprocess((value) => clipAtWord(value, 90, ""), z.string().min(10).max(90)),
  registryDescription: z.preprocess((value) => clipAtWord(value, 200), z.string().min(30).max(200)),
  changeSummary: z.string().catch(""),
});
export type DraftMeta = z.infer<typeof draftMetaSchema>;
export type Draft = { meta: DraftMeta; body: string; costUsd: number };

export const WRITER_SYSTEM = `You write for prestyj.com. Prestyj builds and operates AI agents for institutional real estate: real estate investment funds from $500M AUM, commercial brokerages and CRE owner-operators. Readers are senior decision-makers; write like an experienced fund operator, plainly and specifically.

Positioning vocabulary to use where natural: "AI agents for institutional real estate", "finished work product", "source attached", "controlled by your review rules", "system of record", "review gate", "exception queue".
Never write: service businesses, realtors, realtor software, custom AI, AI automation, internal tools, coding agents, desktop AI, generic AI consulting, monthly plans or prices, batch-video subscription. No marketing filler ("unlock", "game-changer", "seamless", "delve", "in conclusion", "ever-evolving", etc).

Hard rules:
- Never invent Prestyj customers, results, metrics, prices or timelines. Any Prestyj example must say it is illustrative and carry a stage label (fixture, reference, pilot or production); default to "Illustrative (fixture)".
- Every example or number in an example is explicitly labelled illustrative or synthetic.
- Use the web_search tool BEFORE writing to find 3-5 primary sources (regulators, standards bodies, industry associations, official docs) on publicly reachable HTML https pages (never PDFs or downloads; they cannot be checked) that state the facts you will use. Only list URLs you actually found and read via search; never guess a URL.
- Every factual, regulatory or statistical sentence must be directly stated by one of those sources and that source must be in ## Sources with a note of exactly what it supports. A separate fact-checker will reject any claim the fetched source page does not state.
- Write every sourced fact in your own words. Never copy a source's sentences; an originality check rejects any unquoted run of 20+ words that matches a source. At most one short direct quote (under 20 words, in quotation marks) per source.
- No unsourced frequency or prevalence claims: never write "most", "many firms", "common", "commonly", "typically", "usually", "often", "the second most common", percentages or counts unless the cited source states them. No claims about what vendors or competitors do or do not do.
- Describe Prestyj only in positioning terms: it builds and operates AI agents that deliver reviewed work product with the source attached, controlled by your review rules and review gates, while the system of record stays authoritative. Never describe Prestyj product features, connectors, demos, speed, results or capabilities beyond that.
- Prefer few, well-sourced facts. Carry the article with practical frameworks, decision rules, checklists and questions a reviewer should ask; these are advice, need no external facts, and should be phrased as recommendations ("check that...", "ask whether..."), not as claims about the industry.
- Internal links: only to paths from the allowed list given, as markdown links like [text](/path).

Article format (MDX body, no frontmatter, no H1 — the page renders the title as H1):
1. First paragraph: a direct answer to the main question that an AI assistant could quote verbatim. Exactly 2 or 3 short sentences, each under 30 words, under 70 words in total; never one long list sentence. Put lists in the sections below.
2. Question-shaped H2 sections (## How ...? / ## What ...?), at least four, with concrete checklists and decision rules.
3. One example section explicitly labelled "Illustrative example (synthetic)".
4. ## Frequently asked questions with at least three ### questions ending in "?".
5. ## Review and limitations: who reviews what, what the article does not cover.
6. ## Sources: bullet list of real https URLs, each with what it supports.
7. A closing paragraph pointing to the matching workflow demo at [/book-demo](/book-demo).`;

function outputSpec(registry: RegistryEntry[]): string {
  const categories = [...new Set(registry.map((entry) => entry.category))].sort();
  return `Respond in exactly this format:
<<<META>>>
{"slug": "kebab-case", "title": "SEO title, under 70 chars", "description": "meta description 120-155 chars, hard max 160", "keywords": ["..."], "category": one of ${JSON.stringify(categories)}, "capabilities": subset of ${JSON.stringify(CAPABILITY_SLUGS)}, "topics": subset of ${JSON.stringify(TOPIC_VALUES)}, "registryTitle": "short editorial title", "registryDescription": "one sentence", "changeSummary": "what changed and why"}
<<<BODY>>>
...the MDX body...`;
}

export function parseDraft(text: string): Omit<Draft, "costUsd"> {
  const metaStart = text.indexOf("<<<META>>>");
  const bodyStart = text.indexOf("<<<BODY>>>");
  if (metaStart < 0 || bodyStart < metaStart)
    throw new Error("Writer output missing META/BODY markers");
  const meta = draftMetaSchema.parse(extractJson(text.slice(metaStart + 10, bodyStart)));
  const body = text
    .slice(bodyStart + 10)
    .replace(/^\s*```(?:mdx|markdown)?\n/, "")
    .replace(/\n```\s*$/, "")
    .trim();
  return { meta, body: `${body}\n` };
}

export async function writeNewArticle(
  opportunity: Opportunity,
  ctx: { llm: MeteredLlm; config: ContentConfig; registry: RegistryEntry[]; allowed: string[] },
): Promise<Draft> {
  const prompt = `Write a new article answering: "${opportunity.queries[0] ?? ""}"
Related queries: ${opportunity.queries.slice(1).join("; ") || "none"}
Why this topic: ${opportunity.evidence}

Existing Prestyj articles (do NOT duplicate their angle; link to the relevant ones):
${ctx.registry.map((entry) => `- /blog/${entry.slug}: ${entry.title}`).join("\n")}

Allowed internal link paths: ${ctx.allowed.join(", ")}
Target length: 1,400–2,000 words.

${outputSpec(ctx.registry)}`;
  const result = await ctx.llm.complete({
    purpose: "write",
    model: ctx.config.models.writer,
    system: WRITER_SYSTEM,
    prompt: `${prompt}\n\nFirst search for sources, then write. Your final message must contain only the <<<META>>> and <<<BODY>>> output.`,
    maxTokens: 16000,
    webSearchMaxUses: 4,
  });
  return { ...parseDraft(result.text), costUsd: result.costUsd };
}

const REFRESH_GOALS: Record<string, string> = {
  "refresh-ctr":
    "Search impressions are high but clicks are low. Rewrite the title, meta description and the opening direct-answer paragraph so they match the queries precisely. Keep the rest substantively intact, but fix format gaps.",
  "refresh-position":
    "The page ranks around positions 5-20. Deepen it: answer the queries more completely, update facts, add or extend the FAQ, and add internal links to related live articles.",
  "refresh-stale":
    "The page is stale. Update facts against current sources, deepen thin sections, add or extend the FAQ, and add internal links to related live articles.",
};

export async function writeRefresh(
  opportunity: Opportunity,
  slug: string,
  current: ParsedArticle,
  ctx: { llm: MeteredLlm; config: ContentConfig; registry: RegistryEntry[]; allowed: string[] },
): Promise<Draft> {
  const prompt = `Refresh the existing article "${slug}".
Goal: ${REFRESH_GOALS[opportunity.kind] ?? REFRESH_GOALS["refresh-stale"]}
Queries: ${opportunity.queries.join("; ")}
Evidence: ${opportunity.evidence}
Keep the slug "${slug}". Keep the article's existing correct substance; bring it fully into the required format.

Current frontmatter:
${dump(current.metadata)}
Current body:
${current.body}

Other live articles: ${ctx.registry
    .filter((entry) => entry.slug !== slug)
    .map((entry) => `/blog/${entry.slug} (${entry.title})`)
    .join("; ")}
Allowed internal link paths: ${ctx.allowed.join(", ")}

${outputSpec(ctx.registry)}`;
  const result = await ctx.llm.complete({
    purpose: "write",
    model: ctx.config.models.writer,
    system: WRITER_SYSTEM,
    prompt,
    maxTokens: 10000,
  });
  const draft = parseDraft(result.text);
  return { meta: { ...draft.meta, slug }, body: draft.body, costUsd: result.costUsd };
}

export function renderMdx(frontmatter: Record<string, unknown>, body: string): string {
  return `---\n${dump(frontmatter, { lineWidth: -1, quotingType: '"', forceQuotes: true })}---\n\n${body.trim()}\n`;
}
