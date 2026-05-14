import type { MetadataRoute } from "next";
import { blogSource } from "@/lib/source";
import { getAllAlternativeSlugs } from "@/lib/alternatives";
import { getAllSolutionSlugs } from "@/lib/solutions";
import { getAllBestForSlugs } from "@/lib/best-for";
import { getAllLocationSlugs } from "@/lib/locations";

const baseUrl = "https://prestyj.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/batch-video-ads`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/founding-cohort`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/done-for-you-social-media`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/1000-posts-per-month`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ai-content-department`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/social-media-on-autopilot`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ai-social-media-management`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/book-demo`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/samples`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/bulk-video-ad-pricing`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/results`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/alternatives`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/best-for`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/lead-magnet`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/ai-call-handling-calculator`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/team-commission-calculator`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/real-estate-roi-calculator`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/lead-magnet/brokerage-playbook`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/platform`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/statistics`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ad-fatigue-solution`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/how-many-ad-creatives-to-test`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/how-often-refresh-ad-creative`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/why-facebook-ads-stop-working`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/ai-ads-vs-human-ads`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Blog posts - use actual post dates for lastModified; exclude noindexed posts
  const blogPages = blogSource.getPages();
  const blogRoutes: MetadataRoute.Sitemap = blogPages
    .filter((page) => !page.data.noindex)
    .map((page) => ({
      url: `${baseUrl}${page.url}`,
      lastModified: page.data.date ? new Date(page.data.date) : now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  // Alternative pages
  const alternativeRoutes: MetadataRoute.Sitemap = getAllAlternativeSlugs().map(
    (slug) => ({
      url: `${baseUrl}/alternatives/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })
  );

  // Solution pages
  const solutionRoutes: MetadataRoute.Sitemap = getAllSolutionSlugs().map(
    (slug) => ({
      url: `${baseUrl}/solutions/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })
  );

  // Best-for pages - exclude noindex pages (non-RE niches, wrong ICP)
  const noindexBestForSlugs = [
    "solo-agents", "new-agents",
    "hvac", "roofing", "plumbing", "solar", "contractors", "electricians",
    "landscaping-lawn-care", "painting-contractors", "window-and-door-manufacturers",
    "siding-contractors", "garage-door", "flooring-contractors", "pest-control", "movers",
    "dental", "law-firms", "plastic-surgery", "mental-health-clinics", "veterinary-clinics",
    "accounting-firms", "auto-dealerships", "auto-repair-shops", "senior-care", "retail-stores",
    "restaurants", "salons-and-spas", "gyms-and-fitness-centers",
    "servicetitan-users", "jobber-users",
    "ai-voice-receptionist-dental", "ai-voice-receptionist-legal",
    "ai-voice-receptionist-medical", "ai-voice-receptionist-insurance",
  ];
  const bestForRoutes: MetadataRoute.Sitemap = getAllBestForSlugs()
    .filter((slug) => !noindexBestForSlugs.includes(slug))
    .map((slug) => ({
      url: `${baseUrl}/best-for/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  // Compare pages (excluding redirected ones: ylopo → /alternatives/ylopo, isa → /alternatives/human-isa)
  const compareRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/compare/prestyj-vs-conversica`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/compare/prestyj-vs-structurely`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/compare/prestyj-vs-drift`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/compare/prestyj-vs-internal-isa-team`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/compare/prestyj-vs-offshore-isa`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/compare/prestyj-vs-answering-service`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/compare/prestyj-vs-arcads`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/compare/prestyj-vs-creatify`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/compare/prestyj-vs-heygen`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/compare/prestyj-vs-billo`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/compare/prestyj-vs-fiverr-video-ads`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/compare/prestyj-vs-fiverr-social-media`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/compare/prestyj-vs-ai-avatar-ads`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/compare/prestyj-vs-ugc-creators`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/compare/prestyj-vs-production-agencies`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/compare/prestyj-vs-pencil`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/compare/prestyj-vs-capcut`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/compare/prestyj-vs-canva`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/compare/prestyj-vs-later`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/compare/prestyj-vs-buffer`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/compare/prestyj-vs-hootsuite`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/compare/prestyj-vs-sprout-social`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/compare/prestyj-vs-social-media-agency`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/compare/prestyj-vs-junior-social-hire`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/compare/prestyj-vs-opus-clip`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/compare/prestyj-vs-invideo`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/compare/prestyj-vs-synthesia`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/compare/prestyj-vs-adcreative-ai`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/compare/structurely-vs-prestyj`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/compare/follow-up-boss-vs-prestyj`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/compare/lofty-vs-prestyj`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/compare/resimpli-vs-prestyj`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/compare/alanna-ai-vs-prestyj`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    // BATCH-MATRIX-COMPARE-START
    {
      url: `${baseUrl}/compare/prestyj-vs-ugc-creator-video-for-coaches`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/compare/prestyj-vs-fiverr-video-for-media-buyers`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/compare/prestyj-vs-in-house-video-for-cmos`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/compare/prestyj-vs-ai-avatar-tool-video-for-agency-owners`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/compare/prestyj-vs-agency-video-for-service-business-owners`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/compare/prestyj-vs-ugc-creator-video-for-hvac-companies`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/compare/prestyj-vs-fiverr-video-for-plumbing-contractors`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/compare/prestyj-vs-in-house-video-for-roofing-contractors`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/compare/prestyj-vs-ai-avatar-tool-video-for-real-estate-teams`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/compare/prestyj-vs-agency-video-for-mortgage-brokers`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    // SOCIAL-VERTICAL-MATRIX-COMPARE-START
    {
      url: `${baseUrl}/compare/prestyj-vs-in-house-hire-for-coaches`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/compare/prestyj-vs-smma-for-media-buyers`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/compare/prestyj-vs-in-house-hire-for-cmos`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/compare/prestyj-vs-va-plus-templates-for-agency-owners`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/compare/prestyj-vs-smma-for-service-business-owners`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/compare/prestyj-vs-fiverr-for-ecommerce-brands`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/compare/prestyj-vs-in-house-hire-for-saas-founders`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/compare/prestyj-vs-va-plus-templates-for-personal-brands`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/compare/prestyj-vs-fiverr-for-creators`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/compare/prestyj-vs-smma-for-consultants`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  // SOCIAL-VERTICAL-MATRIX-COMPARE-END
  // BATCH-MATRIX-COMPARE-END

  ];

  // Location pages
  const locationRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/locations`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    ...getAllLocationSlugs().map((slug) => ({
      url: `${baseUrl}/locations/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];

  return [
    ...staticRoutes,
    ...blogRoutes,
    ...alternativeRoutes,
    ...solutionRoutes,
    ...bestForRoutes,
    ...compareRoutes,
    ...locationRoutes,
  ];
}
