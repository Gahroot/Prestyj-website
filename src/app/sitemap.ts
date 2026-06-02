import type { MetadataRoute } from "next";
import { blogSource } from "@/lib/source";
import { getAllAlternativeSlugs } from "@/lib/alternatives";
import { getAllSolutionSlugs } from "@/lib/solutions";
import { getAllBestForSlugs } from "@/lib/best-for";
import { getAllLocationSlugs } from "@/lib/locations";
import { getAllStatIds } from "@/lib/statistics";
import { getAllIndustrySlugs } from "@/lib/statistics/industries";

const baseUrl = "https://prestyj.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Static routes — buyer-intent pages and key product/positioning pages aligned
  // with the core "AI agents for marketing & sales" positioning. Every URL here
  // MUST have a backing page in src/app/. Off-positioning / orphan / utility
  // pages (e.g. /demo, /intake, /admin, /affiliate, /r, /media-master) are
  // intentionally excluded. /free-ads/* IS included — the free-ads offer is
  // now the primary top-of-funnel for the AI agents pricing tier.
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.82,
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
      priority: 0.8,
    },
    {
      url: `${baseUrl}/platform`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/results`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.8,
    },
    // Product/positioning landing pages
    {
      url: `${baseUrl}/batch-video-ads`,
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
      url: `${baseUrl}/ai-sales-agents`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ai-voice-agents`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ai-marketing-agents`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.88,
    },
    {
      url: `${baseUrl}/done-for-you-ai-agents`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.88,
    },
    {
      url: `${baseUrl}/ai-receptionist`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.88,
    },
    {
      url: `${baseUrl}/founding-cohort`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/bulk-video-ad-pricing`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // Batch video ads exact-intent landing pages
    {
      url: `${baseUrl}/100-video-ads`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.82,
    },
    {
      url: `${baseUrl}/300-video-ads`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.82,
    },
    {
      url: `${baseUrl}/500-video-ads`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.84,
    },
    {
      url: `${baseUrl}/1000-video-ads`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.84,
    },
    {
      url: `${baseUrl}/ad-creative-testing-service`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.84,
    },
    {
      url: `${baseUrl}/youtube-media-testing-services`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.84,
    },
    {
      url: `${baseUrl}/video-ad-testing-pricing`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.84,
    },
    {
      url: `${baseUrl}/run-my-first-facebook-ads`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.78,
    },
    {
      url: `${baseUrl}/scale-facebook-ads-with-more-creative`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.78,
    },
    {
      url: `${baseUrl}/creative-volume`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.78,
    },
    {
      url: `${baseUrl}/meta-ad-creative-testing`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.78,
    },
    {
      url: `${baseUrl}/tiktok-ad-creative-testing`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.78,
    },
    // Hub indexes for dynamic page collections
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
    // Lead magnets
    {
      url: `${baseUrl}/lead-magnet`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/ai-first-audit`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/lead-magnet/brokerage-playbook`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.65,
    },
    {
      url: `${baseUrl}/lead-magnet/roofing-playbook`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.65,
    },
    {
      url: `${baseUrl}/lead-magnet/qualvol-playbook`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.65,
    },
    {
      url: `${baseUrl}/lead-magnet/reactivate-leads`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.65,
    },
    // Calculators
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
      priority: 0.7,
    },
    {
      url: `${baseUrl}/batch-video-ad-roi-calculator`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/cost-per-tested-ad-angle-calculator`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // Thought leadership / topical authority pages
    {
      url: `${baseUrl}/statistics`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.75,
    },
    // Open dataset landing + downloads (CC BY 4.0). High link-acquisition
    // value: every external citation must attribute back here.
    {
      url: `${baseUrl}/data`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    // Discovery + redistribution endpoints (oEmbed, RSS, public API)
    {
      url: `${baseUrl}/feed/stats.xml`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/api/statistics`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.55,
    },
    {
      url: `${baseUrl}/data/statistics.csv`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/data/statistics.json`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/ad-fatigue-solution`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/how-many-ad-creatives-to-test`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/how-often-refresh-ad-creative`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/why-facebook-ads-stop-working`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/ai-ads-vs-human-ads`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    // Legal
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

  // Blog posts — use actual post dates for lastModified; exclude noindexed posts.
  const blogPages = blogSource.getPages();
  const blogRoutes: MetadataRoute.Sitemap = blogPages
    .filter((page) => !page.data.noindex)
    .map((page) => ({
      url: `${baseUrl}${page.url}`,
      lastModified: page.data.date ? new Date(page.data.date) : now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  // Dynamic routes driven by registries — every slug here corresponds to a
  // generated page via [slug]/page.tsx + generateStaticParams.
  const alternativeRoutes: MetadataRoute.Sitemap = getAllAlternativeSlugs().map((slug) => ({
    url: `${baseUrl}/alternatives/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const solutionRoutes: MetadataRoute.Sitemap = getAllSolutionSlugs().map((slug) => ({
    url: `${baseUrl}/solutions/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const bestForRoutes: MetadataRoute.Sitemap = getAllBestForSlugs().map((slug) => ({
    url: `${baseUrl}/best-for/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Compare pages — hardcoded list. Every URL MUST have a backing
  // src/app/compare/<slug>/page.tsx and MUST NOT be 301-redirected in
  // next.config.ts.
  // Excluded (redirected — see next.config.ts):
  //   - prestyj-vs-ylopo → /alternatives/ylopo
  //   - prestyj-vs-{isa,internal-isa-team,offshore-isa,answering-service}
  //     → /alternatives/human-isa
  //   - {structurely,alanna-ai,follow-up-boss,lofty,resimpli}-vs-prestyj
  //     → canonical prestyj-vs-X orientation
  //   - off-positioning compares (capcut, opus-clip, invideo,
  //     fiverr-video-ads, fiverr-social-media, buffer, later, hootsuite, canva)
  //     → /compare
  //   - ai-consultant-* pages → /pricing
  const compareSlugs = [
    // AI sales / lead-conversion agents (core positioning)
    "prestyj-vs-conversica",
    "prestyj-vs-structurely",
    "prestyj-vs-drift",
    "prestyj-vs-alanna-ai",
    "prestyj-vs-follow-up-boss",
    "prestyj-vs-lofty",
    "prestyj-vs-resimpli",
    // AI voice agents
    "prestyj-vs-bland-ai",
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
    "prestyj-vs-ugc-creator-video-for-coaches",
    "prestyj-vs-fiverr-video-for-media-buyers",
    "prestyj-vs-in-house-video-for-cmos",
    "prestyj-vs-ai-avatar-tool-video-for-agency-owners",
    "prestyj-vs-agency-video-for-service-business-owners",
    "prestyj-vs-ugc-creator-video-for-hvac-companies",
    "prestyj-vs-fiverr-video-for-plumbing-contractors",
    "prestyj-vs-in-house-video-for-roofing-contractors",
    "prestyj-vs-ai-avatar-tool-video-for-real-estate-teams",
    "prestyj-vs-agency-video-for-mortgage-brokers",
    // Vertical social matrix
    "prestyj-vs-in-house-hire-for-coaches",
    "prestyj-vs-smma-for-media-buyers",
    "prestyj-vs-in-house-hire-for-cmos",
    "prestyj-vs-va-plus-templates-for-agency-owners",
    "prestyj-vs-smma-for-service-business-owners",
    "prestyj-vs-fiverr-for-ecommerce-brands",
    "prestyj-vs-in-house-hire-for-saas-founders",
    "prestyj-vs-va-plus-templates-for-personal-brands",
    "prestyj-vs-fiverr-for-creators",
    "prestyj-vs-smma-for-consultants",
    // Generic positioning compare
    "ai-lead-generation-vs-traditional",
  ];
  const compareRoutes: MetadataRoute.Sitemap = compareSlugs.map((slug) => ({
    url: `${baseUrl}/compare/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Free-ads landing pages — top-of-funnel for the AI agents offer. Hub +
  // one page per vertical. Every slug MUST have a backing
  // src/app/free-ads/<slug>/page.tsx.
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
  const freeAdsRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/free-ads`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    ...freeAdsSlugs.map((slug) => ({
      url: `${baseUrl}/free-ads/${slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.75,
    })),
  ];

  // Location pages — registry-driven.
  const locationRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/locations`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    ...getAllLocationSlugs().map((slug) => ({
      url: `${baseUrl}/locations/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];

  // Per-statistic permalink pages (/stat/[id]). Each one is a citable
  // anchor for a single quotable number — the canonical home for embeds.
  const statRoutes: MetadataRoute.Sitemap = getAllStatIds().map((id) => ({
    url: `${baseUrl}/stat/${id}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.55,
  }));

  // Per-industry hub pages + slice downloads. Each industry hub is its own
  // crawlable Dataset schema with CSV + JSON distribution.
  const industryRoutes: MetadataRoute.Sitemap = getAllIndustrySlugs().flatMap((slug) => [
    {
      url: `${baseUrl}/statistics/${slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/data/industry/${slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.55,
    },
  ]);

  return [
    ...staticRoutes,
    ...blogRoutes,
    ...alternativeRoutes,
    ...solutionRoutes,
    ...bestForRoutes,
    ...compareRoutes,
    ...freeAdsRoutes,
    ...locationRoutes,
    ...statRoutes,
    ...industryRoutes,
  ];
}
