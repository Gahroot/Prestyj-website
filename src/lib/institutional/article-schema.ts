import type { FaqEntry } from "@/lib/institutional/article-content";

type SiteInfo = { url: string; organizationId: string; ogImage: string };

export function buildBlogPostingSchema(input: {
  site: SiteInfo;
  slug: string;
  title: string;
  description?: string | undefined;
  published: string;
  modified: string;
  authorName: string;
  keywords?: readonly string[] | undefined;
  section?: string | undefined;
}): Record<string, unknown> {
  const url = `${input.site.url}/blog/${input.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: input.title,
    ...(input.description ? { description: input.description } : {}),
    author: { "@type": "Person", name: input.authorName, url: `${input.site.url}/about` },
    publisher: { "@id": input.site.organizationId },
    datePublished: input.published,
    dateModified: input.modified,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    image: input.site.ogImage,
    ...(input.keywords?.length ? { keywords: input.keywords.join(", ") } : {}),
    ...(input.section ? { articleSection: input.section } : {}),
  };
}

export function buildBreadcrumbSchema(
  siteUrl: string,
  items: readonly { name: string; path: string }[],
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

/** Null when there are no Q&A pairs: never emit an empty FAQPage. */
export function buildFaqSchema(entries: readonly FaqEntry[]): Record<string, unknown> | null {
  if (entries.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: entries.map((entry) => ({
      "@type": "Question",
      name: entry.question,
      acceptedAnswer: { "@type": "Answer", text: entry.answer },
    })),
  };
}
