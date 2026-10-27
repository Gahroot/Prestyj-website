import type { ResearchArticle } from "@/lib/institutional/research";

/**
 * Newest published first. Articles sharing a publication date keep the registry
 * convention that later entries are newer, so they are listed in reverse registry order.
 */
export function sortNewestFirst(
  articles: readonly ResearchArticle[],
  publishedOn: (slug: string) => string,
): readonly ResearchArticle[] {
  return articles
    .map((article, index) => ({ article, index, published: publishedOn(article.slug) }))
    .sort((a, b) =>
      a.published === b.published ? b.index - a.index : a.published < b.published ? 1 : -1,
    )
    .map(({ article }) => article);
}
