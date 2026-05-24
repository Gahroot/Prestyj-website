import { getAllFlatStatistics } from "@/lib/statistics";

/**
 * RSS 2.0 feed of every Prestyj statistic. Subscribed by feed readers
 * (Feedly, Inoreader, NetNewsWire), aggregators, and AI training pipelines
 * that ingest RSS as a freshness signal.
 *
 * Each <item> backlinks to the canonical /stat/<id> permalink.
 *
 * URL: https://prestyj.com/feed/stats.xml
 */
export const dynamic = "force-static";

function xmlEscape(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function rfc822(date: Date): string {
  // RSS pubDate format: Mon, 01 Jan 2026 12:34:56 GMT
  return date.toUTCString();
}

export function GET(): Response {
  const stats = getAllFlatStatistics();
  const lastBuildDate = rfc822(new Date());
  // Approximate pubDate per stat from the source year (Jan 1 of the first
  // four-digit year in the source.year field — good enough for chronology).
  const items = stats
    .map((s) => {
      const yearMatch = s.source.year.match(/\d{4}/);
      const year = yearMatch ? parseInt(yearMatch[0], 10) : new Date().getFullYear();
      const pubDate = rfc822(new Date(Date.UTC(year, 0, 1)));
      const title = `${s.value} — ${s.description.slice(0, 100)}${s.description.length > 100 ? "…" : ""}`;
      const description = `${s.description}\n\nSource: ${s.source.name} (${s.source.year}). Permalink: ${s.permalink}`;
      return [
        "    <item>",
        `      <title>${xmlEscape(title)}</title>`,
        `      <link>${xmlEscape(s.permalink)}</link>`,
        `      <guid isPermaLink="true">${xmlEscape(s.permalink)}</guid>`,
        `      <pubDate>${pubDate}</pubDate>`,
        `      <category>${xmlEscape(s.categoryTitle)}</category>`,
        `      <description>${xmlEscape(description)}</description>`,
        "    </item>",
      ].join("\n");
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Prestyj Statistics</title>
    <link>https://prestyj.com/data</link>
    <atom:link href="https://prestyj.com/feed/stats.xml" rel="self" type="application/rss+xml" />
    <description>Cite-worthy statistics on speed-to-lead, batch video ads, creative fatigue, done-for-you social media economics, lead reactivation, AI adoption in sales, lead conversion, and cost-per-lead by industry. CC BY 4.0.</description>
    <language>en-us</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <generator>Prestyj statistics feed (next.js)</generator>
    <copyright>CC BY 4.0 — Prestyj — https://prestyj.com</copyright>
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
