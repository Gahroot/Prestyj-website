import { researchArticles } from "@/lib/institutional/research";
import { siteConfig } from "@/lib/site-config";

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
    .map(
      (article) => `<item>
<title>${escapeXml(article.title)}</title>
<link>${siteConfig.url}/blog/${article.slug}</link>
<guid isPermaLink="true">${siteConfig.url}/blog/${article.slug}</guid>
<description>${escapeXml(article.description)}</description>
</item>`,
    )
    .join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
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
