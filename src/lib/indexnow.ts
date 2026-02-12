import { getAllAlternativeSlugs } from "./alternatives";
import { getAllSolutionSlugs } from "./solutions";
import { getAllBestForSlugs } from "./best-for";

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

const BASE_URL = "https://www.prestyj.com";

export function getAllUrls(): string[] {
  const urls: string[] = [];

  // Static routes
  urls.push(
    "",
    "/book-demo",
    "/blog",
    "/results",
    "/alternatives",
    "/best-for",
    "/privacy",
    "/terms"
  );

  // Blog posts
  const blogPosts = [
    "/blog/roofing-speed-to-lead-2026",
    "/blog/missed-call-text-back-roofers-2026",
    "/blog/ai-storm-response-roofing-2026",
    "/blog/roofing-lead-magnet-2026",
  ];

  for (const post of blogPosts) {
    urls.push(BASE_URL + post);
  }

  // Alternative pages
  const alternativeSlugs = getAllAlternativeSlugs();
  for (const slug of alternativeSlugs) {
    urls.push(BASE_URL + "/alternatives/" + slug);
  }

  // Solution pages
  const solutionSlugs = getAllSolutionSlugs();
  for (const slug of solutionSlugs) {
    urls.push(BASE_URL + "/solutions/" + slug);
  }

  // Best-for pages (excluding noindex pages)
  const bestForSlugs = getAllBestForSlugs();
  const noindexSlugs: string[] = ["solo-agents", "new-agents"];
  const filteredBestForSlugs = bestForSlugs.filter(
    (slug) => !noindexSlugs.includes(slug)
  );

  for (const slug of filteredBestForSlugs) {
    urls.push(BASE_URL + "/best-for/" + slug);
  }

  // Lead magnet page
  urls.push(BASE_URL + "/lead-magnet");

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
  urls.push(...compareRoutes.map((route) => BASE_URL + route));

  return urls;
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
    host: "www.prestyj.com",
    key: getIndexNowKey(),
    keyLocation: getIndexNowKey(),
    urlList: urls,
  };

  try {
    const response = await fetch("https://api.indexnow.org/IndexNow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    if (response.ok || response.status === 202) {
      return {
        success: true,
        message: "Successfully submitted " + urls.length + " URLs to IndexNow",
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
      message: "Failed to submit " + urls.length + " URLs",
      error: errorMessages[response.status] || "HTTP " + response.status,
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
