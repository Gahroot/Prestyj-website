import type { MetadataRoute } from "next";
import { blogSource } from "@/lib/source";
import { getAllAlternativeSlugs } from "@/lib/alternatives";
import { getAllSolutionSlugs } from "@/lib/solutions";
import { getAllBestForSlugs } from "@/lib/best-for";

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
      url: `${baseUrl}/book-demo`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
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

  // Blog posts - use actual post dates for lastModified
  const blogPages = blogSource.getPages();
  const blogRoutes: MetadataRoute.Sitemap = blogPages.map((page) => ({
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

  // Best-for pages - exclude noindex pages (targeting wrong ICP)
  const noindexBestForSlugs = ["solo-agents", "new-agents"];
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
  ];

  return [
    ...staticRoutes,
    ...blogRoutes,
    ...alternativeRoutes,
    ...solutionRoutes,
    ...bestForRoutes,
    ...compareRoutes,
  ];
}
