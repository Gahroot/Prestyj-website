import type { MetadataRoute } from "next";

import { researchArticles } from "@/lib/institutional/research";
import { indexableStaticRoutes } from "@/lib/institutional/site-map";
import { siteConfig } from "@/lib/site-config";
import { blogSource } from "@/lib/source";
import { getArticleDates } from "@/lib/institutional/article-metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = indexableStaticRoutes.map((route) => ({
    url: `${siteConfig.url}${route === "/" ? "" : route}`,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.startsWith("/capabilities/") ? 0.9 : 0.7,
  }));

  const articles: MetadataRoute.Sitemap = researchArticles.map((article) => ({
    url: `${siteConfig.url}/blog/${article.slug}`,
    lastModified: getArticleDates(blogSource.getPage([article.slug])?.data).modified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...articles];
}
