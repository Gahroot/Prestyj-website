import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { blogSource } from "@/lib/source";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import { SafeJsonLd } from "@/components/seo/safe-json-ld";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

const siteUrl = "https://prestyj.com";

export async function generateStaticParams() {
  return blogSource.getPages().map((page) => ({
    slug: page.slugs[0],
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = blogSource.getPage([slug]);

  if (!page) {
    return {
      title: "Post Not Found - PRESTYJ",
    };
  }

  const { title, description, keywords, author, image, date, noindex } = page.data;
  const postUrl = `${siteUrl}/blog/${slug}`;
  const ogImage = image || "/images/og-default.jpg";

  return {
    title: `${title} | PRESTYJ Blog`,
    description,
    keywords: keywords?.length ? keywords : undefined,
    authors: author ? [{ name: author }] : undefined,
    openGraph: {
      type: "article",
      locale: "en_US",
      url: postUrl,
      title,
      description,
      siteName: "PRESTYJ",
      publishedTime: date,
      authors: author ? [author] : undefined,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      creator: "@prestyj",
    },
    alternates: {
      canonical: postUrl,
    },
    robots: noindex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const page = blogSource.getPage([slug]);

  if (!page) {
    notFound();
  }

  const MDXContent = page.data.body;
  const { title, description, author, date, image, keywords } = page.data;
  const postUrl = `${siteUrl}/blog/${slug}`;

  // JSON-LD structured data for Article
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: image ? `${siteUrl}${image}` : `${siteUrl}/images/og-default.jpg`,
    author: {
      "@type": "Organization",
      name: author || "Prestyj Team",
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "PRESTYJ",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
      },
    },
    datePublished: date,
    dateModified: date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
    url: postUrl,
    keywords: keywords?.join(", "),
  };

  return (
    <>
      <SafeJsonLd data={jsonLd} />
      <Navbar />
      <main className="pt-24 pb-16">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>

          <header className="mb-12">
            {date && (
              <time
                dateTime={date}
                className="text-sm text-muted-foreground mb-2 block"
              >
                {new Date(date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            )}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
              {title}
            </h1>
            {description && (
              <p className="text-xl text-muted-foreground">{description}</p>
            )}
            {image && (
              <figure className="mt-8">
                <Image
                  src={image}
                  alt={`${title}${keywords?.length ? ` — ${keywords.slice(0, 3).join(", ")}` : ""}`}
                  width={1200}
                  height={630}
                  className="w-full rounded-lg"
                  priority
                />
                <figcaption className="sr-only">
                  {title} — PRESTYJ AI-powered lead response
                </figcaption>
              </figure>
            )}
          </header>

          <div className="prose prose-invert prose-lg max-w-none prose-headings:font-heading prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-strong:text-foreground prose-code:text-primary">
            <MDXContent />
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
