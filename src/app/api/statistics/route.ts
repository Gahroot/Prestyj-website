import { getAllFlatStatistics, getStatisticsByCategory } from "@/lib/statistics";

/**
 * Public read-only JSON API for the Prestyj statistics dataset.
 *
 * Why a /api/* twin of /data/statistics.json: developers building dashboards,
 * RAG pipelines, embed widgets, and aggregators expect the data at a stable
 * /api/* path with CORS headers. Each consumer typically backlinks Prestyj
 * in their own README / docs / about page.
 *
 * License: CC BY 4.0 (see canonical landing at https://prestyj.com/data).
 *
 * URL: https://prestyj.com/api/statistics
 */
export const dynamic = "force-static";

export function GET(): Response {
  const grouped = getStatisticsByCategory();
  const flat = getAllFlatStatistics();
  const now = new Date();

  const payload = {
    name: "Prestyj Lead Response, Batch Video Ads & AI Sales Statistics",
    description:
      "Curated dataset of cite-worthy statistics on speed-to-lead, batch video ads, creative fatigue, done-for-you social media economics, lead reactivation, AI adoption in sales, lead conversion, and cost-per-lead by industry.",
    url: "https://prestyj.com/data",
    canonical: "https://prestyj.com/data",
    api_version: 1,
    license: "CC BY 4.0",
    license_url: "https://creativecommons.org/licenses/by/4.0/",
    attribution: "Prestyj — https://prestyj.com",
    citation:
      "Prestyj (2026). Lead Response, Batch Video Ads & AI Sales Statistics Dataset. https://prestyj.com/data",
    version: now.toISOString().slice(0, 10),
    last_modified: now.toISOString(),
    total: flat.length,
    formats: {
      csv: "https://prestyj.com/data/statistics.csv",
      json: "https://prestyj.com/data/statistics.json",
      rss: "https://prestyj.com/feed/stats.xml",
      oembed_endpoint: "https://prestyj.com/oembed",
    },
    categories: grouped.map(({ category, statistics }) => ({
      id: category.id,
      title: category.title,
      slug: category.slug,
      description: category.description,
      permalink: `https://prestyj.com/statistics#${category.slug}`,
      count: statistics.length,
      statistics,
    })),
  };

  return new Response(JSON.stringify(payload, null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      Link: '<https://prestyj.com/data>; rel="canonical", <https://prestyj.com/feed/stats.xml>; rel="alternate"; type="application/rss+xml", <https://prestyj.com/oembed>; rel="alternate"; type="application/json+oembed"',
      "X-License": "CC BY 4.0",
      "X-Attribution-Required": "https://prestyj.com",
    },
  });
}

export function OPTIONS(): Response {
  return new Response(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Max-Age": "86400",
    },
  });
}
