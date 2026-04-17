import { promises as fs } from "node:fs";
import path from "node:path";
import type {
  AppConfig,
  DedupContext,
  LLMProvider,
  ResearchBrief,
} from "../types";
import { summarizeDedupContextForPrompt } from "./dedup-context";

export interface BuildDailyBriefArgs {
  config: AppConfig;
  provider: LLMProvider;
  model: string;
  systemPrompt: string;
  taskPrompt: string;
  dedupContext: DedupContext;
  date: Date;
}

let cachedBrief: { key: string; brief: ResearchBrief } | null = null;

function formatDate(date: Date): string {
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(date.getUTCDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function coerceStringArray(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  const out: string[] = [];
  for (const entry of value) {
    if (typeof entry === "string" && entry.trim().length > 0) {
      out.push(entry.trim());
    }
  }
  return out;
}

function coerceCompetitorMoves(
  value: unknown
): Array<{ competitor: string; observation: string }> {
  if (!Array.isArray(value)) return [];
  const out: Array<{ competitor: string; observation: string }> = [];
  for (const entry of value) {
    if (!entry || typeof entry !== "object") continue;
    const obj = entry as Record<string, unknown>;
    const competitor = typeof obj.competitor === "string" ? obj.competitor : "";
    const observation =
      typeof obj.observation === "string" ? obj.observation : "";
    if (competitor && observation) out.push({ competitor, observation });
  }
  return out;
}

function coerceGscOpportunities(
  value: unknown
): Array<{ query: string; reason: string }> {
  if (!Array.isArray(value)) return [];
  const out: Array<{ query: string; reason: string }> = [];
  for (const entry of value) {
    if (!entry || typeof entry !== "object") continue;
    const obj = entry as Record<string, unknown>;
    const query = typeof obj.query === "string" ? obj.query : "";
    const reason = typeof obj.reason === "string" ? obj.reason : "";
    if (query && reason) out.push({ query, reason });
  }
  return out;
}

function extractJsonBlock(raw: string): string {
  const trimmed = raw.trim();
  const fenceMatch = trimmed.match(/```(?:json)?\s*([\s\S]*?)```/i);
  if (fenceMatch && fenceMatch[1]) return fenceMatch[1].trim();
  const firstBrace = trimmed.indexOf("{");
  const lastBrace = trimmed.lastIndexOf("}");
  if (firstBrace >= 0 && lastBrace > firstBrace) {
    return trimmed.slice(firstBrace, lastBrace + 1);
  }
  return trimmed;
}

function parseResearchBrief(raw: string, dateIso: string): ResearchBrief {
  let parsed: unknown;
  try {
    parsed = JSON.parse(extractJsonBlock(raw));
  } catch {
    return {
      date: dateIso,
      trendingAngles: [],
      competitorMoves: [],
      gscOpportunities: [],
      rawNotes: raw,
    };
  }

  if (!parsed || typeof parsed !== "object") {
    return {
      date: dateIso,
      trendingAngles: [],
      competitorMoves: [],
      gscOpportunities: [],
      rawNotes: raw,
    };
  }

  const obj = parsed as Record<string, unknown>;
  const date =
    typeof obj.date === "string" && obj.date.length > 0 ? obj.date : dateIso;
  const rawNotes = typeof obj.rawNotes === "string" ? obj.rawNotes : raw;

  return {
    date,
    trendingAngles: coerceStringArray(obj.trendingAngles),
    competitorMoves: coerceCompetitorMoves(obj.competitorMoves),
    gscOpportunities: coerceGscOpportunities(obj.gscOpportunities),
    rawNotes,
  };
}

function renderBriefMarkdown(brief: ResearchBrief): string {
  const lines: string[] = [];
  lines.push(`# Daily Research Brief — ${brief.date}`);
  lines.push("");

  lines.push("## Trending Angles");
  if (brief.trendingAngles.length === 0) {
    lines.push("_None_");
  } else {
    for (const angle of brief.trendingAngles) {
      lines.push(`- ${angle}`);
    }
  }
  lines.push("");

  lines.push("## Competitor Moves");
  if (brief.competitorMoves.length === 0) {
    lines.push("_None_");
  } else {
    for (const move of brief.competitorMoves) {
      lines.push(`- **${move.competitor}** — ${move.observation}`);
    }
  }
  lines.push("");

  lines.push("## GSC Opportunities");
  if (brief.gscOpportunities.length === 0) {
    lines.push("_None_");
  } else {
    for (const opp of brief.gscOpportunities) {
      lines.push(`- \`${opp.query}\` — ${opp.reason}`);
    }
  }
  lines.push("");

  lines.push("## Raw Notes");
  lines.push("");
  lines.push(brief.rawNotes.trim().length > 0 ? brief.rawNotes : "_No raw notes._");
  lines.push("");

  return lines.join("\n");
}

async function saveBriefMarkdown(
  config: AppConfig,
  brief: ResearchBrief
): Promise<string> {
  const outDir = path.resolve(process.cwd(), config.output.reportDir);
  await fs.mkdir(outDir, { recursive: true });
  const fileName = `research-${brief.date}.md`;
  const filePath = path.join(outDir, fileName);
  await fs.writeFile(filePath, renderBriefMarkdown(brief), "utf8");
  return filePath;
}

export async function buildDailyBrief(
  args: BuildDailyBriefArgs
): Promise<ResearchBrief> {
  const { config, provider, model, systemPrompt, taskPrompt, dedupContext, date } =
    args;

  const dateIso = formatDate(date);
  const cacheKey = `${dateIso}::${provider.name}::${model}`;
  if (cachedBrief && cachedBrief.key === cacheKey) {
    return cachedBrief.brief;
  }

  const dedupSummary = summarizeDedupContextForPrompt(dedupContext, {
    recentLimit: 10,
  });

  const userPrompt = [
    `Today's date: ${dateIso}`,
    "",
    "## Dedup Summary",
    dedupSummary,
    "",
    "## Task",
    taskPrompt,
    "",
    "Respond with ONLY a JSON object matching this TypeScript interface:",
    "interface ResearchBrief {",
    "  date: string; // ISO YYYY-MM-DD",
    "  trendingAngles: string[];",
    "  competitorMoves: { competitor: string; observation: string }[];",
    "  gscOpportunities: { query: string; reason: string }[];",
    "  rawNotes: string;",
    "}",
  ].join("\n");

  const response = await provider.generate({
    system: systemPrompt,
    user: userPrompt,
    model,
    maxTokens: 4096,
    temperature: 0.5,
    cacheSystem: true,
    responseFormat: "json",
  });

  const brief = parseResearchBrief(response.content, dateIso);
  await saveBriefMarkdown(config, brief);

  cachedBrief = { key: cacheKey, brief };
  return brief;
}

export function clearDailyBriefCache(): void {
  cachedBrief = null;
}

export function getCachedDailyBrief(): ResearchBrief | null {
  return cachedBrief ? cachedBrief.brief : null;
}
