import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound, permanentRedirect } from "next/navigation";

import { EditorialShell } from "@/components/layout/editorial-shell";
import { SafeJsonLd } from "@/components/seo/safe-json-ld";
import { blogSource } from "@/lib/source";
import { institutionalBlogSlugs, isInstitutionalBlogSlug } from "@/lib/institutional/site-map";
import { siteConfig } from "@/lib/site-config";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

function formatLongDate(value: string): string {
  return new Date(`${value}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export function generateStaticParams() {
  return institutionalBlogSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  if (!isInstitutionalBlogSlug(slug)) {
    return { title: "Archived article", robots: { index: false, follow: true } };
  }

  const page = blogSource.getPage([slug]);
  if (!page) return { title: "Post not found" };

  const { title, description, keywords, date } = page.data;
  const postUrl = `${siteConfig.url}/blog/${slug}`;
  return {
    title,
    description,
    keywords: keywords?.length ? keywords : undefined,
    authors: [{ name: "Nolan Grout", url: `${siteConfig.url}/about` }],
    alternates: { canonical: postUrl },
    openGraph: {
      type: "article",
      url: postUrl,
      title,
      description,
      publishedTime: date,
      authors: ["Nolan Grout"],
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  if (!isInstitutionalBlogSlug(slug)) permanentRedirect("/blog");

  const page = blogSource.getPage([slug]);
  if (!page) notFound();

  const MDXContent = page.data.body;
  const { title, description, date, keywords } = page.data;
  const postUrl = `${siteConfig.url}/blog/${slug}`;

  return (
    <>
      <SafeJsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: title,
          description,
          author: { "@type": "Person", name: "Nolan Grout", url: `${siteConfig.url}/about` },
          publisher: { "@id": siteConfig.organizationId },
          datePublished: date,
          mainEntityOfPage: postUrl,
          url: postUrl,
          keywords: keywords?.join(", "),
        }}
      />
      <EditorialShell>
        <main id="main-content" className="editorial-rail editorial-inner pt-10 sm:pt-16">
          <article className="editorial-reading">
            <Link
              href="/blog"
              className="text-muted-foreground hover:text-foreground focus-visible:ring-ring inline-flex items-center gap-2 text-sm transition-colors focus-visible:ring-2 focus-visible:outline-none"
            >
              <ArrowLeft aria-hidden="true" className="h-4 w-4" /> Field notes
            </Link>

            <header className="editorial-page-header mt-8 border-b !pt-0">
              {date ? (
                <time dateTime={date} className="text-muted-foreground text-sm">
                  {formatLongDate(date)}
                </time>
              ) : null}
              <h1 className="font-heading mt-4 text-4xl font-bold tracking-tight text-balance sm:text-5xl">
                {title}
              </h1>
              {description ? (
                <p className="text-muted-foreground mt-5 text-xl leading-8">{description}</p>
              ) : null}
              <p className="mt-6 text-sm">By Nolan Grout</p>
            </header>

            <div className="prose prose-lg prose-headings:font-[Georgia] prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-strong:text-foreground mt-10 max-w-none">
              <MDXContent />
            </div>

            <aside className="mt-14 border-t pt-8">
              <h2 className="font-heading text-2xl font-bold">
                Bring us the workflow behind this question.
              </h2>
              <Link
                href="/book-demo"
                className="text-primary mt-4 inline-block font-semibold hover:underline"
              >
                Book a workflow demo
              </Link>
            </aside>
          </article>
        </main>
      </EditorialShell>
    </>
  );
}
