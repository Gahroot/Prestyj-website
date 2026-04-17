const DEFAULT_TIMEOUT_MS = 10_000;
const MAX_CHARS = 8_000;

export interface CompetitorFetchResult {
  url: string;
  status: number;
  textContent: string;
  truncated: boolean;
}

export interface CompetitorFetchOptions {
  timeoutMs?: number;
  maxChars?: number;
  userAgent?: string;
}

function stripHtml(html: string): string {
  return html
    .replace(/<!--[\s\S]*?-->/g, " ")
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, " ")
    .replace(/<svg[\s\S]*?<\/svg>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/&#x27;/gi, "'")
    .replace(/\s+/g, " ")
    .trim();
}

export async function fetchCompetitor(
  url: string,
  options?: CompetitorFetchOptions
): Promise<CompetitorFetchResult> {
  const timeoutMs = options?.timeoutMs ?? DEFAULT_TIMEOUT_MS;
  const maxChars = options?.maxChars ?? MAX_CHARS;
  const userAgent =
    options?.userAgent ??
    "Mozilla/5.0 (compatible; PrestyjSEOBot/1.0; +https://prestyj.com)";

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(url, {
      method: "GET",
      redirect: "follow",
      signal: controller.signal,
      headers: {
        "user-agent": userAgent,
        accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "accept-language": "en-US,en;q=0.9",
      },
    });

    const bodyText = response.ok ? await response.text() : "";
    const cleaned = bodyText ? stripHtml(bodyText) : "";
    const truncated = cleaned.length > maxChars;
    const textContent = truncated ? cleaned.slice(0, maxChars) : cleaned;

    return {
      url,
      status: response.status,
      textContent,
      truncated,
    };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    const status = message.toLowerCase().includes("abort") ? 408 : 0;
    return {
      url,
      status,
      textContent: "",
      truncated: false,
    };
  } finally {
    clearTimeout(timer);
  }
}
