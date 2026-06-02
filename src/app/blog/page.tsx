import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { blogSource } from "@/lib/source";
import { Badge } from "@/components/ui/badge";
import { SafeJsonLd } from "@/components/seo/safe-json-ld";
import { BlogList, type BlogListPost } from "@/components/blog/blog-list";
import { categorizeSlug, slugFromUrl } from "@/lib/blog/categories";
import { resolveBlogImage } from "@/lib/blog/images";

const siteUrl = "https://prestyj.com";

export const metadata: Metadata = {
  title: "Prestyj Blog — AI Agents for Marketing & Sales",
  description:
    "Guides, playbooks, and how-tos on AI agents, lead response, and marketing & sales automation.",
  keywords: [
    "AI agents for marketing",
    "AI agents for sales",
    "AI sales agents",
    "AI marketing agents",
    "lead response",
    "marketing and sales automation",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${siteUrl}/blog`,
    title: "Prestyj Blog — AI Agents for Marketing & Sales",
    description:
      "Guides, playbooks, and how-tos on AI agents, lead response, and marketing & sales automation.",
    siteName: "Prestyj",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prestyj Blog — AI Agents for Marketing & Sales",
    description:
      "Guides, playbooks, and how-tos on AI agents, lead response, and marketing & sales automation.",
    creator: "@prestyj_",
  },
  alternates: {
    canonical: `${siteUrl}/blog`,
  },
};

type BlogSearchParams = {
  q?: string | string[];
};

type BlogPageProps = {
  searchParams?: Promise<BlogSearchParams>;
};

function normalizeSearchQuery(searchParams: BlogSearchParams | undefined): string {
  const rawQuery = Array.isArray(searchParams?.q) ? searchParams.q[0] : searchParams?.q;
  return rawQuery?.trim() ?? "";
}

export default async function BlogPage({ searchParams }: BlogPageProps): Promise<React.ReactElement> {
  const query = normalizeSearchQuery(await searchParams);
  const posts = blogSource.getPages().filter((post) => !post.data.noindex);

  // Sort indexable posts by date (newest first), then map to a serializable shape
  // and infer category from slug.
  const sortedPosts: ReadonlyArray<BlogListPost> = [...posts]
    .sort((a, b) => {
      const dateA = a.data.date ? new Date(a.data.date).getTime() : 0;
      const dateB = b.data.date ? new Date(b.data.date).getTime() : 0;
      return dateB - dateA;
    })
    .map((post) => {
      const category = categorizeSlug(slugFromUrl(post.url));

      return {
        url: post.url,
        title: post.data.title,
        description: post.data.description ?? "",
        date: post.data.date,
        image: resolveBlogImage(post.data.image, category),
        category,
      };
    });

  // JSON-LD for Blog listing
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Prestyj Blog",
    description:
      "Guides, playbooks, and how-tos on AI agents, lead response, and marketing & sales automation.",
    url: `${siteUrl}/blog`,
    publisher: {
      "@type": "Organization",
      name: "Prestyj",
      url: siteUrl,
    },
    blogPost: sortedPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      url: `${siteUrl}${post.url}`,
      datePublished: post.date,
    })),
  };

  return (
    <>
      <SafeJsonLd data={jsonLd} />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <Badge variant="outline" className="border-primary/50 text-primary mb-4">
              Resources
            </Badge>
            <h1 className="font-heading text-foreground mb-4 text-3xl font-bold sm:text-4xl">
              AI Agents for Marketing & Sales — Blog
            </h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              Guides, playbooks, and how-tos on AI agents, lead response, and marketing & sales
              automation.
            </p>
            {query ? (
              <p className="text-muted-foreground mt-3 text-sm">
                Showing posts matching <span className="text-foreground font-medium">“{query}”</span>.
              </p>
            ) : null}
          </div>

          {sortedPosts.length === 0 ? (
            <div className="py-12 text-center">
              <p className="text-muted-foreground">No posts yet. Check back soon!</p>
            </div>
          ) : (
            <BlogList posts={sortedPosts} initialQuery={query} />
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
