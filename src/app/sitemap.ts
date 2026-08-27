import type { MetadataRoute } from "next";

import { researchArticles } from "@/lib/institutional/research";
import { canonicalPublicRoutes } from "@/lib/institutional/site-map";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPages: MetadataRoute.Sitemap = canonicalPublicRoutes
    .filter((route) => route !== "/demo")
    .map((route) => ({
      url: `${siteConfig.url}${route === "/" ? "" : route}`,
      lastModified: now,
      changeFrequency: route === "/" ? "weekly" : "monthly",
      priority: route === "/" ? 1 : route.startsWith("/capabilities/") ? 0.9 : 0.7,
    }));

  const articles: MetadataRoute.Sitemap = researchArticles.map((article) => ({
    url: `${siteConfig.url}/blog/${article.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...articles];
}
