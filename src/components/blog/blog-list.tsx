"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { BLOG_CATEGORIES, type BlogCategory } from "@/lib/blog/categories";

export type BlogListPost = {
  url: string;
  title: string;
  description: string;
  date: string | undefined;
  image: string | undefined;
  category: BlogCategory;
};

type FilterValue = BlogCategory | "All";

type Props = {
  posts: ReadonlyArray<BlogListPost>;
  initialQuery?: string;
};

function postMatchesQuery(post: BlogListPost, query: string): boolean {
  const normalizedQuery = query.trim().toLowerCase();
  if (!normalizedQuery) return true;

  const searchableText = [post.title, post.description, post.category, post.url]
    .join(" ")
    .toLowerCase();

  return normalizedQuery
    .split(/\s+/)
    .filter(Boolean)
    .every((term) => searchableText.includes(term));
}

export function BlogList({ posts, initialQuery = "" }: Props): React.ReactElement {
  const [active, setActive] = useState<FilterValue>("All");
  const [query, setQuery] = useState(initialQuery);

  const counts = useMemo(() => {
    const map = new Map<FilterValue, number>();
    map.set("All", posts.length);
    for (const c of BLOG_CATEGORIES) map.set(c, 0);
    for (const p of posts) map.set(p.category, (map.get(p.category) ?? 0) + 1);
    return map;
  }, [posts]);

  const filtered = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory = active === "All" || post.category === active;
      return matchesCategory && postMatchesQuery(post, query);
    });
  }, [posts, active, query]);

  const filters: ReadonlyArray<FilterValue> = ["All", ...BLOG_CATEGORIES];

  return (
    <>
      <div className="mb-8">
        <label htmlFor="blog-search" className="sr-only">
          Search blog posts
        </label>
        <input
          id="blog-search"
          type="search"
          name="q"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search by topic, offer, or cost question..."
          className="border-border bg-card text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20 mx-auto block w-full max-w-xl rounded-full border px-4 py-3 text-sm outline-none transition-colors focus:ring-4"
        />
      </div>

      <div
        role="tablist"
        aria-label="Filter posts by category"
        className="mb-10 flex flex-wrap justify-center gap-2"
      >
        {filters.map((filter) => {
          const isActive = active === filter;
          const count = counts.get(filter) ?? 0;
          return (
            <button
              key={filter}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(filter)}
              className={cn(
                "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-medium transition-colors",
                isActive
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted-foreground hover:border-primary/50 hover:text-foreground",
              )}
            >
              <span>{filter}</span>
              <span
                className={cn(
                  "rounded-full px-1.5 py-0.5 text-xs tabular-nums",
                  isActive
                    ? "bg-primary-foreground/20 text-primary-foreground"
                    : "bg-muted text-muted-foreground",
                )}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <div className="py-12 text-center">
          <p className="text-muted-foreground">
            No posts match this search and category combination yet.
          </p>
        </div>
      ) : (
        <div className="grid gap-6">
          {filtered.map((post) => (
            <Link key={post.url} href={post.url}>
              <Card className="bg-card border-border hover:border-primary/50 overflow-hidden transition-colors">
                {post.image && (
                  <div className="relative h-48 w-full">
                    <Image
                      src={post.image}
                      alt={`${post.title} — Prestyj`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 768px"
                    />
                  </div>
                )}
                <CardHeader>
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="border-primary/40 text-primary text-xs">
                      {post.category}
                    </Badge>
                    {post.date && (
                      <time dateTime={post.date} className="text-muted-foreground text-sm">
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                    )}
                  </div>
                  <CardTitle className="font-heading text-foreground">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{post.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
