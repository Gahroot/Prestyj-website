/**
 * IndexNow API integration for instant search engine indexing
 * Supports: Bing, Yandex, Naver, Seznam, Yep
 *
 * Setup:
 * 1. Get API key from https://www.bing.com/indexnow/getstarted
 * 2. Create file: public/{YOUR_API_KEY}.txt containing just the key
 * 3. Set INDEXNOW_API_KEY in your environment variables
 */

import { blogSource } from "./source";
import { getAllAlternativeSlugs } from "./alternatives";
import { getAllSolutionSlugs } from "./solutions";
import { getAllBestForSlugs } from "./best-for";

const BASE_URL = "https://prestyj.com";
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/IndexNow";

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

/**
 * Get the IndexNow API key from environment
 */
export function getIndexNowKey(): string | undefined {
  return process.env.INDEXNOW_API_KEY;
}

/**
 * Submit a single URL to IndexNow
 */
export async function submitUrl(url: string): Promise<IndexNowResponse> {
  const key = getIndexNowKey();

  if (!key) {
    return {
      success: false,
      message: "INDEXNOW_API_KEY not configured",
      error: "Missing API key",
    };
  }

  const params = new URLSearchParams({
    url,
    key,
  });

  try {
    const response = await fetch(`${INDEXNOW_ENDPOINT}?${params.toString()}`, {
      method: "GET",
    });

    if (response.ok || response.status === 202) {
      return {
        success: true,
        message: `Successfully submitted: ${url}`,
        urlCount: 1,
      };
    }

    return {
      success: false,
      message: `Failed to submit: ${url}`,
      error: `HTTP ${response.status}: ${response.statusText}`,
    };
  } catch (error) {
    return {
      success: false,
      message: `Error submitting: ${url}`,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

/**
 * Submit multiple URLs to IndexNow (batch submission)
 * Maximum 10,000 URLs per request
 */
export async function submitUrls(urls: string[]): Promise<IndexNowResponse> {
  const key = getIndexNowKey();

  if (!key) {
    return {
      success: false,
      message: "INDEXNOW_API_KEY not configured",
      error: "Missing API key",
    };
  }

  if (urls.length === 0) {
    return {
      success: false,
      message: "No URLs provided",
      error: "Empty URL list",
    };
  }

  // IndexNow has a limit of 10,000 URLs per request
  if (urls.length > 10000) {
    return {
      success: false,
      message: "Too many URLs",
      error: "Maximum 10,000 URLs per request",
    };
  }

  const payload: IndexNowSubmission = {
    host: "prestyj.com",
    key,
    keyLocation: `${BASE_URL}/${key}.txt`,
    urlList: urls,
  };

  try {
    const response = await fetch(INDEXNOW_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    // IndexNow returns 200 or 202 on success
    if (response.ok || response.status === 202) {
      return {
        success: true,
        message: `Successfully submitted ${urls.length} URLs to IndexNow`,
        urlCount: urls.length,
      };
    }

    // Handle specific error codes
    const errorMessages: Record<number, string> = {
      400: "Invalid request format",
      403: "Key not valid or not matching key location",
      422: "URLs don't belong to the host or key not found at keyLocation",
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

/**
 * Get all indexable URLs from the site
 */
export function getAllUrls(): string[] {
  const urls: string[] = [];

  // Static routes
  const staticRoutes = [
    "",
    "/book-demo",
    "/blog",
    "/results",
    "/alternatives",
    "/best-for",
    "/privacy",
    "/terms",
  ];

  urls.push(...staticRoutes.map((route) => `${BASE_URL}${route}`));

  // Blog posts
  const blogPages = blogSource.getPages();
  urls.push(...blogPages.map((page) => `${BASE_URL}${page.url}`));

  // Alternative pages
  const alternativeSlugs = getAllAlternativeSlugs();
  urls.push(
    ...alternativeSlugs.map((slug) => `${BASE_URL}/alternatives/${slug}`)
  );

  // Solution pages
  const solutionSlugs = getAllSolutionSlugs();
  urls.push(...solutionSlugs.map((slug) => `${BASE_URL}/solutions/${slug}`));

  // Best-for pages (excluding noindex pages)
  const noindexBestForSlugs = ["solo-agents", "new-agents"];
  const bestForSlugs = getAllBestForSlugs().filter(
    (slug) => !noindexBestForSlugs.includes(slug)
  );
  urls.push(...bestForSlugs.map((slug) => `${BASE_URL}/best-for/${slug}`));

  // Compare pages
  const compareRoutes = [
    "/compare/prestyj-vs-isa",
    "/compare/prestyj-vs-ylopo",
    "/compare/prestyj-vs-conversica",
    "/compare/prestyj-vs-structurely",
    "/compare/prestyj-vs-drift",
    "/compare/prestyj-vs-internal-isa-team",
    "/compare/prestyj-vs-offshore-isa",
  ];
  urls.push(...compareRoutes.map((route) => `${BASE_URL}${route}`));

  return urls;
}

/**
 * Submit all site URLs to IndexNow
 */
export async function submitAllUrls(): Promise<IndexNowResponse> {
  const urls = getAllUrls();
  return submitUrls(urls);
}
