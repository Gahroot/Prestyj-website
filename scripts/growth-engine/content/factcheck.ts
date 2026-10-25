import { positioning } from "../../../src/lib/positioning";
import { capabilities } from "../../../src/lib/institutional/capabilities";
import { z } from "zod";
import type { ContentConfig } from "./config";
import { extractJson, type MeteredLlm } from "./llm";

export type Fetcher = (url: string, signal: AbortSignal) => Promise<{ ok: boolean; text: string }>;

export const defaultFetcher: Fetcher = async (url, signal) => {
  const response = await fetch(url, {
    signal,
    redirect: "follow",
    headers: {
      "user-agent": "Mozilla/5.0 (compatible; PrestyjFactCheck/1.0; +https://prestyj.com)",
    },
  });
  // Only text/HTML can be read here (no PDF parser); anything else counts as unreachable.
  const type = response.headers.get("content-type") ?? "";
  const readable = response.ok && /text\/|html|xml|json/i.test(type || "text/html");
  return { ok: readable, text: readable ? await response.text() : "" };
};

export function htmlToText(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

export function sourceUrls(body: string): string[] {
  const start = body.indexOf("## Sources");
  if (start < 0) return [];
  const rest = body.slice(start + "## Sources".length);
  const next = rest.search(/\n## /);
  const section = next < 0 ? rest : rest.slice(0, next);
  return [
    ...new Set(
      [...section.matchAll(/https?:\/\/[^\s)>\]"'`*<]+/g)].map((m) =>
        m[0].replace(/[.,;:!?]+$/, "").replace(/[?&]utm_source=openai$/, ""),
      ),
    ),
  ];
}

/** "true"/"yes"/1 → true; anything else unknown → `fallback`. */
const softBool = (fallback: boolean) =>
  z.preprocess((value) => {
    if (typeof value === "boolean") return value;
    const text = String(value ?? "")
      .trim()
      .toLowerCase();
    if (["true", "yes", "1", "supported"].includes(text)) return true;
    if (["false", "no", "0", "unsupported"].includes(text)) return false;
    return fallback;
  }, z.boolean());
const softText = z.preprocess(
  (value) => (value === undefined || value === null ? null : String(value)),
  z.string().nullable(),
);

// Soft fields are normalized. Unknown `supported` counts as unsupported and unknown `core`
// as core, so normalization can only make the gate stricter, never looser.
const verdictSchema = z.preprocess(
  (value) => (Array.isArray(value) ? { claims: value } : value),
  z.object({
    claims: z.array(
      z.object({
        claim: z.preprocess((value) => String(value ?? ""), z.string()),
        quote: z.preprocess((value) => String(value ?? ""), z.string()),
        core: softBool(true),
        supported: softBool(false),
        sourceUrl: softText.optional(),
        replacement: softText.optional(),
      }),
    ),
  }),
);

export type FactCheckResult = {
  passed: boolean;
  body: string;
  reasons: string[];
  sourcesChecked: number;
  claims: number;
  failed: number;
  costUsd: number;
  /** Plain text of every fetched source, for the originality gate. */
  sourceTexts?: string[];
};

/**
 * Prestyj's approved, first-party description of its own service. Statements that
 * describe what Prestyj offers and how it works may be supported by this text; it
 * never supports customers, results, metrics, prices or timelines.
 */
export function firstPartyServiceText(): string {
  const caps = capabilities
    .map(
      (c) =>
        `${c.title}: ${c.description} Review: ${c.review} Outputs: ${c.outputs.join("; ")}. Boundary: ${c.boundary}`,
    )
    .join("\n");
  return `${positioning.fullPitch}\nAudience: ${positioning.audience}\nCore offer: ${positioning.coreOffer} ${positioning.pricingRange}\nPrestyj offers a workflow demo at /book-demo for any of these workflows.\n${caps}`;
}

const FACTCHECK_SYSTEM = `You are an exacting fact-checker for an institutional real estate publisher. You did not write the article. Your job is to find every checkable factual claim (statistics, dates, named regulations, standards, laws, named products or organisations and what they do, and any statement about Prestyj's customers, results, prices or timelines) and judge it ONLY against the fetched source text provided. Opinion, advice and clearly labelled illustrative/synthetic examples are not claims. Only list claims that appear in the ARTICLE, with "quote" copied verbatim from it; never list statements about the sources themselves or about your checking. A claim is supported only if a provided source states it; general knowledge does not count. The source labelled PRESTYJ FIRST-PARTY may support statements about what Prestyj offers and how its service works (its own approved description), but never a Prestyj customer, result, metric, price or timeline. Any statement presenting a Prestyj customer, result, metric, price or timeline as real is unsupported and core.`;

export function isMetaClaim(claim: string): boolean {
  return /\b(?:supplied|provided|fetched|cited|listed)\s+(?:[\w-]+\s+){0,3}sources?\b|\bthe (?:article|draft)\b/i.test(
    claim,
  );
}

const normalize = (text: string): string =>
  text
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201c\u201d]/g, '"')
    .replace(/[*_`]/g, "")
    .replace(/\s+/g, " ")
    .trim();

/** Find the article text for a quoted sentence, tolerating quote marks, emphasis and spacing. */
export function locateQuote(body: string, quote: string): string | null {
  if (body.includes(quote)) return quote;
  const target = normalize(quote);
  if (!target) return null;
  for (const line of body.split("\n")) {
    for (const sentence of line.split(/(?<=[.!?])\s+/)) {
      if (sentence && normalize(sentence) === target) return sentence;
    }
    if (normalize(line) === target) return line;
  }
  return null;
}

export async function factCheck(
  body: string,
  ctx: { llm: MeteredLlm; config: ContentConfig; fetcher: Fetcher; topic: string },
): Promise<FactCheckResult> {
  const reasons: string[] = [];
  const urls = sourceUrls(body);
  const fetched: { url: string; text: string }[] = [];
  let working = body;
  for (const url of urls) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 20_000);
    try {
      const page = await ctx.fetcher(url, controller.signal);
      const text = htmlToText(page.text);
      if (page.ok && text.length > 200) fetched.push({ url, text: text.slice(0, 40_000) });
      else reasons.push(`source unreachable or empty: ${url}`);
    } catch {
      reasons.push(`source fetch failed: ${url}`);
    } finally {
      clearTimeout(timer);
    }
  }
  // Drop unreachable sources from the list so the page never cites what we could not read.
  for (const url of urls)
    if (!fetched.some((page) => page.url === url))
      working = working
        .split("\n")
        .filter((line) => !(line.trim().startsWith("-") && line.includes(url)))
        .join("\n");
  if (fetched.length < ctx.config.gates.minReachableSources)
    return {
      passed: false,
      body: working,
      reasons: [
        ...reasons,
        `only ${fetched.length} reachable sources (min ${ctx.config.gates.minReachableSources})`,
      ],
      sourcesChecked: fetched.length,
      claims: 0,
      failed: 0,
      costUsd: 0,
    };

  const prompt = `Article topic: ${ctx.topic}

ARTICLE:
${working}

FETCHED SOURCES:
${fetched.map((page, i) => `[${i + 1}] ${page.url}\n${page.text}`).join("\n\n")}

[PRESTYJ FIRST-PARTY] approved service description
${firstPartyServiceText()}

Return ONLY JSON: {"claims": [{"claim": "the claim", "quote": "exact sentence from the article containing it, copied verbatim", "core": true if the article's main answer depends on it, "supported": true/false, "sourceUrl": "url that supports it or null", "replacement": "a rewritten sentence that is supported or claim-free (keeps meaning where possible), or null to delete the sentence; null if supported"}]}`;
  const result = await ctx.llm.complete({
    purpose: "factcheck",
    model: ctx.config.models.factChecker,
    system: FACTCHECK_SYSTEM,
    prompt,
    maxTokens: 12000,
  });
  const verdict = verdictSchema.parse(extractJson(result.text));
  // Notes about the checking itself ("the supplied source supports...") are not article claims.
  const claims = verdict.claims.filter((claim) => !isMetaClaim(claim.claim));
  const failedClaims = claims.filter((claim) => !claim.supported);
  for (const claim of failedClaims) {
    reasons.push(`${claim.core ? "core claim" : "claim"} unsupported: ${claim.claim}`);
    const located = claim.quote ? locateQuote(working, claim.quote) : null;
    if (located) working = working.replace(located, claim.replacement ?? "");
    else reasons.push(`could not locate unsupported claim to fix: ${claim.claim}`);
  }
  const total = claims.length;
  const ratio = total ? failedClaims.length / total : 0;
  const coreFailed = failedClaims.some((claim) => claim.core);
  const unfixed = reasons.some((reason) => reason.startsWith("could not locate"));
  if (ratio > ctx.config.gates.maxFailedClaimRatio)
    reasons.push(
      `${failedClaims.length}/${total} claims unsupported (>${ctx.config.gates.maxFailedClaimRatio * 100}%)`,
    );
  return {
    passed: !coreFailed && !unfixed && ratio <= ctx.config.gates.maxFailedClaimRatio,
    body: working.replace(/\n{3,}/g, "\n\n"),
    reasons,
    sourcesChecked: fetched.length,
    claims: total,
    failed: failedClaims.length,
    costUsd: result.costUsd,
    sourceTexts: fetched.map((page) => page.text),
  };
}
