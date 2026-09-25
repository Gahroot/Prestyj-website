import { researchArticles } from "@/lib/institutional/research";
import { siteConfig } from "@/lib/site-config";
import { blogSource } from "@/lib/source";
import { getArticleDates, rssArticleDate } from "@/lib/institutional/article-metadata";

function escapeXml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export function GET(): Response {
  const items = researchArticles
    .map((article) => {
      const dates = getArticleDates(blogSource.getPage([article.slug])?.data);
      return `<item>
<title>${escapeXml(article.title)}</title>
<link>${siteConfig.url}/blog/${article.slug}</link>
<guid isPermaLink="true">${siteConfig.url}/blog/${article.slug}</guid>
<description>${escapeXml(article.description)}</description>
<pubDate>${rssArticleDate(dates.published)}</pubDate>
<atom:updated>${dates.modified}T00:00:00Z</atom:updated>
</item>`;
    })
    .join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>Prestyj field notes</title>
<link>${siteConfig.url}/blog</link>
<description>${escapeXml(siteConfig.description)}</description>
<language>en-us</language>
${items}
</channel>
</rss>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
