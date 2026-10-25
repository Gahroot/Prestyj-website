/**
 * Canonical traffic-channel classification shared by the site (first-touch capture)
 * and the growth engine (GA4 / booking attribution). Keep this the single source.
 */
export type TrafficChannel = "organic" | "ai" | "referral" | "social" | "paid" | "email" | "direct";

export const AI_REFERRER_HOSTS: readonly string[] = [
  "chatgpt.com",
  "chat.openai.com",
  "openai.com",
  "perplexity.ai",
  "copilot.microsoft.com",
  "gemini.google.com",
  "bard.google.com",
  "claude.ai",
  "you.com",
  "phind.com",
  "meta.ai",
  "grok.com",
  "x.ai",
  "deepseek.com",
  "chat.deepseek.com",
  "poe.com",
  "kagi.com",
  "mistral.ai",
  "chat.mistral.ai",
];

export const SEARCH_HOSTS: readonly string[] = [
  "google.",
  "bing.com",
  "duckduckgo.com",
  "search.yahoo.com",
  "yandex.",
  "ecosia.org",
  "search.brave.com",
  "startpage.com",
  "baidu.com",
  "naver.com",
];

export const SOCIAL_HOSTS: readonly string[] = [
  "linkedin.com",
  "lnkd.in",
  "x.com",
  "twitter.com",
  "t.co",
  "facebook.com",
  "instagram.com",
  "reddit.com",
  "youtube.com",
  "news.ycombinator.com",
];

function hostMatches(host: string, list: readonly string[]): boolean {
  return list.some((entry) =>
    entry.endsWith(".")
      ? host.startsWith(entry) || host.includes(`.${entry}`)
      : host === entry || host.endsWith(`.${entry}`),
  );
}

export function normalizeHost(value: string | null | undefined): string | null {
  if (!value) return null;
  try {
    const host = (value.includes("://") ? new URL(value).hostname : value).toLowerCase();
    return host.replace(/^www\./, "") || null;
  } catch {
    return null;
  }
}

export function classifyChannel(input: {
  referrer?: string | null;
  utmSource?: string | null;
  utmMedium?: string | null;
  ownHost?: string;
}): TrafficChannel {
  const medium = input.utmMedium?.toLowerCase() ?? "";
  const source = normalizeHost(input.utmSource) ?? input.utmSource?.toLowerCase() ?? "";
  if (/^(cpc|ppc|paid|paidsearch|paid_social|display|cpm)$/.test(medium)) return "paid";
  if (medium === "email" || medium === "newsletter") return "email";
  if (source && hostMatches(source, AI_REFERRER_HOSTS)) return "ai";
  if (/chatgpt|perplexity|copilot|gemini|claude/.test(source)) return "ai";
  const host = normalizeHost(input.referrer);
  const own = normalizeHost(input.ownHost ?? "prestyj.com");
  if (host && host !== own) {
    if (hostMatches(host, AI_REFERRER_HOSTS)) return "ai";
    if (hostMatches(host, SEARCH_HOSTS)) return "organic";
    if (hostMatches(host, SOCIAL_HOSTS)) return "social";
    return "referral";
  }
  if (medium === "organic") return "organic";
  if (medium === "social") return "social";
  if (medium === "referral") return "referral";
  return "direct";
}
