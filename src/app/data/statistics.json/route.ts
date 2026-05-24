import { getAllFlatStatistics, getStatisticsByCategory } from "@/lib/statistics";

/**
 * Public JSON download of every Prestyj statistic.
 *
 * Licensed CC BY 4.0 — see /data for license terms. Every record carries
 * its permalink, embed URL, and the required attribution string so any
 * downstream consumer has all the info needed to link back.
 *
 * URL: https://prestyj.com/data/statistics.json
 */
export const dynamic = "force-static";

interface DatasetPayload {
  name: string;
  description: string;
  url: string;
  license: string;
  license_url: string;
  attribution: string;
  citation: string;
  version: string;
  last_modified: string;
  total: number;
  categories: Array<{
    id: string;
    title: string;
    slug: string;
    description: string;
    permalink: string;
    statistics: ReturnType<typeof getAllFlatStatistics>;
  }>;
}

export function GET(): Response {
  const grouped = getStatisticsByCategory();
  const flat = getAllFlatStatistics();

  const payload: DatasetPayload = {
    name: "Prestyj Lead Response, Batch Video Ads & AI Sales Statistics",
    description:
      "Curated dataset of cite-worthy statistics on speed-to-lead, batch video ad performance, creative fatigue, done-for-you social media economics, lead reactivation, AI adoption in sales, lead conversion benchmarks, and cost-per-lead by industry — sourced and dated for 2024–2026.",
    url: "https://prestyj.com/data",
    license: "CC BY 4.0",
    license_url: "https://creativecommons.org/licenses/by/4.0/",
    attribution: "Prestyj — https://prestyj.com",
    citation:
      "Prestyj (2026). Lead Response, Batch Video Ads & AI Sales Statistics Dataset. https://prestyj.com/data",
    version: new Date().toISOString().slice(0, 10),
    last_modified: new Date().toISOString(),
    total: flat.length,
    categories: grouped.map(({ category, statistics }) => ({
      id: category.id,
      title: category.title,
      slug: category.slug,
      description: category.description,
      permalink: `https://prestyj.com/statistics#${category.slug}`,
      statistics,
    })),
  };

  return new Response(JSON.stringify(payload, null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Content-Disposition": 'inline; filename="prestyj-statistics.json"',
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
      "X-License": "CC BY 4.0",
      "X-Attribution-Required": "https://prestyj.com",
    },
  });
}
