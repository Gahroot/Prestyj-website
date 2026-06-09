import { blogSource } from "./source";
import { getAllAlternativeSlugs } from "./alternatives";
import { getAllSolutionSlugs } from "./solutions";
import { getAllBestForSlugs } from "./best-for";
import { getAllLocationSlugs } from "./locations";
import { getAllIndustrySlugs } from "./statistics/industries";
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
  const urls: string[] = [];

  // Static routes
  urls.push(
    BASE_URL,
    `${BASE_URL}/pricing`,
    `${BASE_URL}/about`,
    `${BASE_URL}/contact`,
    `${BASE_URL}/faq`,
    `${BASE_URL}/book-demo`,
    `${BASE_URL}/blog`,
    `${BASE_URL}/results`,
    `${BASE_URL}/alternatives`,
    `${BASE_URL}/best-for`,
    `${BASE_URL}/privacy`,
    `${BASE_URL}/terms`,
    `${BASE_URL}/lead-magnet`,
    `${BASE_URL}/ai-call-handling-calculator`,
    `${BASE_URL}/team-commission-calculator`,
    `${BASE_URL}/real-estate-roi-calculator`,
    `${BASE_URL}/batch-video-ad-roi-calculator`,
    `${BASE_URL}/cost-per-tested-ad-angle-calculator`,
    `${BASE_URL}/platform`,
    `${BASE_URL}/batch-video-ads`,
    `${BASE_URL}/100-video-ads`,
    `${BASE_URL}/300-video-ads`,
    `${BASE_URL}/500-video-ads`,
    `${BASE_URL}/1000-video-ads`,
    `${BASE_URL}/ad-creative-testing-service`,
    `${BASE_URL}/run-my-first-facebook-ads`,
    `${BASE_URL}/scale-facebook-ads-with-more-creative`,
    `${BASE_URL}/creative-volume`,
    `${BASE_URL}/meta-ad-creative-testing`,
    `${BASE_URL}/tiktok-ad-creative-testing`,
    `${BASE_URL}/ad-fatigue-solution`,
    `${BASE_URL}/how-many-ad-creatives-to-test`,
    `${BASE_URL}/how-often-refresh-ad-creative`,
    `${BASE_URL}/why-facebook-ads-stop-working`,
    `${BASE_URL}/ai-content-department`,
    `${BASE_URL}/ai-sales-agents`,
    `${BASE_URL}/ai-voice-agents`,
    `${BASE_URL}/ai-marketing-agents`,
    `${BASE_URL}/done-for-you-ai-agents`,
    `${BASE_URL}/ai-receptionist`,
    `${BASE_URL}/founding-cohort`,
    `${BASE_URL}/bulk-video-ad-pricing`,
    `${BASE_URL}/youtube-media-testing-services`,
    `${BASE_URL}/video-ad-testing-pricing`,
    `${BASE_URL}/ai-ads-vs-human-ads`,
    `${BASE_URL}/ai-first-audit`,
    `${BASE_URL}/statistics`,
    `${BASE_URL}/data`,
    `${BASE_URL}/lead-magnet/brokerage-playbook`,
    `${BASE_URL}/lead-magnet/roofing-playbook`,
    `${BASE_URL}/lead-magnet/qualvol-playbook`,
    `${BASE_URL}/lead-magnet/reactivate-leads`,
  );

  // Blog posts - dynamically from content source
  const blogPages = blogSource.getPages();
  for (const page of blogPages) {
    urls.push(`${BASE_URL}${page.url}`);
  }

  // Alternative pages
  const alternativeSlugs = getAllAlternativeSlugs();
  for (const slug of alternativeSlugs) {
    urls.push(`${BASE_URL}/alternatives/${slug}`);
  }

  // Solution pages
  const solutionSlugs = getAllSolutionSlugs();
  for (const slug of solutionSlugs) {
    urls.push(`${BASE_URL}/solutions/${slug}`);
  }

  // Best-for pages (excluding noindex pages)
  const bestForSlugs = getAllBestForSlugs();
  const noindexSlugs: string[] = ["solo-agents", "new-agents"];
  const filteredBestForSlugs = bestForSlugs.filter((slug) => !noindexSlugs.includes(slug));

  for (const slug of filteredBestForSlugs) {
    urls.push(`${BASE_URL}/best-for/${slug}`);
  }

  // Compare pages (canonical prestyj-vs-X orientation only;
  // ISA/answering-service variants redirect to /alternatives/human-isa)
  const compareSlugs = [
    // AI sales / lead-conversion agents
    "prestyj-vs-conversica",
    "prestyj-vs-structurely",
    "prestyj-vs-drift",
    "prestyj-vs-alanna-ai",
    "prestyj-vs-follow-up-boss",
    "prestyj-vs-lofty",
    "prestyj-vs-resimpli",
    // AI voice agents
    "prestyj-vs-vapi",
    "prestyj-vs-retell-ai",
    "prestyj-vs-synthflow",
    "prestyj-vs-air-ai",
    "prestyj-vs-goodcall",
    "prestyj-vs-smith-ai",
    "prestyj-vs-ruby-receptionists",
    // AI video / ad creative
    "prestyj-vs-arcads",
    "prestyj-vs-creatify",
    "prestyj-vs-heygen",
    "prestyj-vs-synthesia",
    "prestyj-vs-pencil",
    "prestyj-vs-pictory",
    "prestyj-vs-ai-avatar-ads",
    "prestyj-vs-ugc-creators",
    "prestyj-vs-ugc-marketplaces",
    "prestyj-vs-billo",
    "prestyj-vs-insense",
    "prestyj-vs-production-agencies",
    "prestyj-vs-traditional-video-agency",
    "prestyj-vs-in-house-creative-team",
    "prestyj-vs-adcreative-ai",
    // Marketing platforms (managed alternatives)
    "prestyj-vs-highlevel",
    "prestyj-vs-hootsuite-managed",
    "prestyj-vs-sprout-social",
    "prestyj-vs-social-media-agency",
    "prestyj-vs-junior-social-hire",
    // Vertical video-production matrix
    "prestyj-vs-in-house-video-for-cmos",
    "prestyj-vs-agency-video-for-service-business-owners",
    "prestyj-vs-ugc-creator-video-for-hvac-companies",
    "prestyj-vs-fiverr-video-for-plumbing-contractors",
    "prestyj-vs-ai-avatar-tool-video-for-real-estate-teams",
    // Vertical social matrix
    "prestyj-vs-va-plus-templates-for-agency-owners",
    "prestyj-vs-smma-for-service-business-owners",
    "prestyj-vs-in-house-hire-for-saas-founders",
    "prestyj-vs-fiverr-for-creators",
  ];
  for (const slug of compareSlugs) {
    urls.push(`${BASE_URL}/compare/${slug}`);
  }

  // Free-ads landing pages
  const freeAdsSlugs = [
    "agencies",
    "auto-dealers",
    "chiropractors",
    "coaches",
    "contractors",
    "dentists",
    "electricians",
    "gyms",
    "hvac",
    "law-firms",
    "med-spas",
    "mortgage-brokers",
    "plumbers",
    "real-estate-agents",
    "roofers",
    "solar-companies",
  ];
  urls.push(`${BASE_URL}/free-ads`);
  for (const slug of freeAdsSlugs) {
    urls.push(`${BASE_URL}/free-ads/${slug}`);
  }

  // Location pages
  const locationSlugs = getAllLocationSlugs();
  for (const slug of locationSlugs) {
    urls.push(`${BASE_URL}/locations/${slug}`);
  }

  // Statistics / industry pages
  const industrySlugs = getAllIndustrySlugs();
  for (const slug of industrySlugs) {
    urls.push(`${BASE_URL}/statistics/${slug}`);
  }

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
