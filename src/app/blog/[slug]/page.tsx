import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound, permanentRedirect } from "next/navigation";
import { Children, isValidElement, type ComponentProps, type ReactNode } from "react";

import { EditorialShell } from "@/components/layout/editorial-shell";
import { ArticleTable } from "@/components/sections/institutional/article-table";
import { ArticleCta } from "@/components/conversion/article-cta";
import {
  extractFaq,
  inlineCtaAnchorHeading,
  stripInlineMarkdown,
} from "@/lib/institutional/article-content";
import {
  buildBlogPostingSchema,
  buildBreadcrumbSchema,
  buildFaqSchema,
} from "@/lib/institutional/article-schema";
import { readArticleSource } from "@/lib/institutional/article-source";
import { getRelatedArticles, researchArticles } from "@/lib/institutional/research";
import { SafeJsonLd } from "@/components/seo/safe-json-ld";
import { blogSource } from "@/lib/source";
import { institutionalBlogSlugs, isInstitutionalBlogSlug } from "@/lib/institutional/site-map";
import { siteConfig } from "@/lib/site-config";
import { getArticleDates, formatArticleDate } from "@/lib/institutional/article-metadata";

const AUTHOR_NAME = "Nolan Grout";

function nodeText(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(nodeText).join("");
  if (isValidElement<{ children?: ReactNode }>(node)) return nodeText(node.props.children);
  return "";
}

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
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

  const { title, description, keywords } = page.data;
  const { published, modified } = getArticleDates(page.data);
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
      publishedTime: published,
      modifiedTime: modified,
      authors: ["Nolan Grout"],
      images: [siteConfig.ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.ogImage],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const page = blogSource.getPage([slug]);
  if (!page) notFound();
  if (!isInstitutionalBlogSlug(slug)) permanentRedirect("/blog");

  const MDXContent = page.data.body;
  const { title, description, keywords } = page.data;
  const { published, modified } = getArticleDates(page.data);
  const article = researchArticles.find((entry) => entry.slug === slug);
  const source = readArticleSource(slug);
  const anchorHeading = inlineCtaAnchorHeading(source);
  const faqSchema = buildFaqSchema(extractFaq(source));
  const inlineCta = article ? <ArticleCta article={article} placement="article-inline" /> : null;

  // Inline CTA renders before the second H2, i.e. right after the answer section.
  const H2 = (props: ComponentProps<"h2">) => {
    const isAnchor =
      anchorHeading !== null &&
      stripInlineMarkdown(nodeText(Children.toArray(props.children))) === anchorHeading;
    return (
      <>
        {isAnchor ? inlineCta : null}
        <h2 {...props} />
      </>
    );
  };

  return (
    <>
      <SafeJsonLd
        data={buildBlogPostingSchema({
          site: siteConfig,
          slug,
          title,
          description,
          published,
          modified,
          authorName: AUTHOR_NAME,
          keywords,
          section: article?.category,
        })}
      />
      <SafeJsonLd
        data={buildBreadcrumbSchema(siteConfig.url, [
          { name: "Home", path: "/" },
          { name: "Field notes", path: "/blog" },
          { name: title, path: `/blog/${slug}` },
        ])}
      />
      {faqSchema ? <SafeJsonLd data={faqSchema} /> : null}
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
              <p className="text-muted-foreground text-sm">
                Published <time dateTime={published}>{formatArticleDate(published)}</time>
                {modified !== published ? (
                  <>
                    {" "}
                    · Updated <time dateTime={modified}>{formatArticleDate(modified)}</time>
                  </>
                ) : null}
              </p>
              <h1 className="font-heading mt-4 text-4xl font-bold tracking-tight text-balance sm:text-5xl">
                {title}
              </h1>
              {description ? (
                <p className="text-muted-foreground mt-5 text-xl leading-8">{description}</p>
              ) : null}
              <p className="mt-6 text-sm">By Nolan Grout</p>
            </header>

            <div className="prose prose-lg prose-headings:font-[Georgia] prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-strong:text-foreground mt-10 max-w-none">
              <MDXContent components={{ table: ArticleTable, h2: H2 }} />
            </div>

            {article ? <ArticleCta article={article} placement="article-end" /> : null}
            <nav aria-label="Related analysis" className="mt-12 border-t pt-8">
              <h2 className="text-2xl">Related analysis</h2>
              <ul className="editorial-rows mt-5">
                {getRelatedArticles(slug).map((related) => (
                  <li key={related.slug}>
                    <p className="text-muted-foreground text-xs">{related.category}</p>
                    <Link href={`/blog/${related.slug}`} className="underline underline-offset-4">
                      {related.title}
                    </Link>
                    <p className="text-muted-foreground mt-1 text-sm leading-6">
                      {related.description}
                    </p>
                  </li>
                ))}
              </ul>
            </nav>
          </article>
        </main>
      </EditorialShell>
    </>
  );
}
