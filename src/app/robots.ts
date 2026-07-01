import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Allow full crawl of indexable content.
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/embed/"],
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
