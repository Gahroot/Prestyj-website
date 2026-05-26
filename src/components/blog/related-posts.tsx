import Link from "next/link";
import Image from "next/image";
import { blogSource } from "@/lib/source";
import { categorizeSlug, slugFromUrl } from "@/lib/blog/categories";
import { resolveBlogImage } from "@/lib/blog/images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface RelatedPostsProps {
  currentSlug: string;
  keywords: readonly string[];
  limit?: number;
}

interface ScoredPost {
  url: string;
  title: string;
  description: string | undefined;
  date: string | undefined;
  image: string | undefined;
  score: number;
}

export function RelatedPosts({ currentSlug, keywords, limit = 3 }: RelatedPostsProps) {
  const currentKeywords = new Set(keywords.map((k) => k.toLowerCase()));
  const allPosts = blogSource.getPages();

  const scored: ScoredPost[] = allPosts
    .filter((post) => post.slugs[0] !== currentSlug && !post.data.noindex)
    .map((post) => {
      const postKeywords = (post.data.keywords ?? []).map((k) => k.toLowerCase());
      const overlap = postKeywords.filter((k) => currentKeywords.has(k)).length;
      const category = categorizeSlug(slugFromUrl(post.url));

      return {
        url: post.url,
        title: post.data.title,
        description: post.data.description,
        date: post.data.date,
        image: resolveBlogImage(post.data.image, category),
        score: overlap,
      };
    })
    // Sort by keyword overlap desc, then by date desc as tiebreaker
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      const dateA = a.date ? new Date(a.date).getTime() : 0;
      const dateB = b.date ? new Date(b.date).getTime() : 0;
      return dateB - dateA;
    });

  // Prefer posts with at least one keyword overlap; fall back to most recent
  const withOverlap = scored.filter((p) => p.score > 0).slice(0, limit);
  const related =
    withOverlap.length >= limit
      ? withOverlap
      : [...withOverlap, ...scored.filter((p) => p.score === 0)].slice(0, limit);

  if (related.length === 0) return null;

  return (
    <section aria-labelledby="related-posts-heading" className="mt-16">
      <h2
        id="related-posts-heading"
        className="font-heading text-foreground mb-6 text-2xl font-bold"
      >
        Related reading
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {related.map((post) => (
          <Link key={post.url} href={post.url} className="group">
            <Card className="bg-card border-border hover:border-primary/50 h-full overflow-hidden transition-colors">
              {post.image && (
                <div className="relative h-36 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 384px"
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle className="font-heading text-foreground group-hover:text-primary text-base transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              {post.description && (
                <CardContent>
                  <p className="text-muted-foreground line-clamp-2 text-sm">{post.description}</p>
                </CardContent>
              )}
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
