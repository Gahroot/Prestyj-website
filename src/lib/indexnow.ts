import { institutionalIndexablePaths } from "./institutional/site-map";
import { siteConfig } from "./site-config";

export interface IndexNowResponse {
  success: boolean;
  message: string;
  urlCount?: number;
  error?: string;
}

export interface IndexNowSubmission {
  host: string;
  key: string;
  keyLocation: string;
  urlList: string[];
}

export function getIndexNowKey(): string | undefined {
  return process.env.INDEXNOW_API_KEY;
}

const BASE_URL = siteConfig.url;

export function getAllUrls(): string[] {
  return [
    ...new Set(institutionalIndexablePaths.map((path) => `${BASE_URL}${path === "/" ? "" : path}`)),
  ].sort();
}

export async function submitUrls(urls: string[]): Promise<IndexNowResponse> {
  const key = getIndexNowKey();

  if (!key) {
    return {
      success: false,
      message: "INDEXNOW_API_KEY not configured",
      error: "Missing API key",
    };
  }

  const payload = {
    host: new URL(siteConfig.url).hostname,
    key,
    keyLocation: `${siteConfig.url}/${key}.txt`,
    urlList: urls,
  };

  try {
    const response = await fetch("https://yandex.com/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    if (response.ok || response.status === 202) {
      return {
        success: true,
        message: `Successfully submitted ${urls.length} URLs to IndexNow`,
        urlCount: urls.length,
      };
    }

    const errorMessages: Record<number, string> = {
      400: "Invalid request format",
      403: "Key not valid or not matching key location",
      422: "URLs don't belong to host or key not found at keyLocation",
      429: "Too many requests (rate limited)",
    };

    return {
      success: false,
      message: `Failed to submit ${urls.length} URLs`,
      error: errorMessages[response.status] || `HTTP ${response.status}`,
    };
  } catch (error) {
    return {
      success: false,
      message: "Error submitting URLs to IndexNow",
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

export async function submitUrl(url: string): Promise<IndexNowResponse> {
  return submitUrls([url]);
}

export async function submitAllUrls(): Promise<IndexNowResponse> {
  const urls = getAllUrls();
  return submitUrls(urls);
}
