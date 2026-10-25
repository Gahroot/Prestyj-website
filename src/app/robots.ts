import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

const DISALLOW = ["/api/", "/admin/", "/embed/"];

/** Search and AI answer crawlers named explicitly so their access is unambiguous. */
const ALLOWED_CRAWLERS = [
  "Googlebot",
  "Bingbot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "PerplexityBot",
  "Perplexity-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
] as const;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: [...ALLOWED_CRAWLERS], allow: "/", disallow: DISALLOW },
      // Allow full crawl of indexable content. Legacy paths stay redirected, not opened here.
      { userAgent: "*", allow: "/", disallow: DISALLOW },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
