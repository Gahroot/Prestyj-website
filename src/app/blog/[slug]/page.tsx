import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { blogSource } from "@/lib/source";
import { categorizeSlug } from "@/lib/blog/categories";
import { resolveAuthor } from "@/lib/blog/authors";
import { resolveBlogImage } from "@/lib/blog/images";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import { SafeJsonLd } from "@/components/seo/safe-json-ld";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { FAQJsonLd } from "@/components/seo/json-ld";
import { PostCta } from "@/components/blog/post-cta";
import { RelatedPosts } from "@/components/blog/related-posts";
import { readFile, stat } from "fs/promises";
import { join } from "path";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

const siteUrl = "https://prestyj.com";

function formatLongDate(value: string): string {
  // Parse YYYY-MM-DD as UTC midnight and format in UTC so the displayed day
  // matches the authored date regardless of server timezone.
  return new Date(`${value}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export async function generateStaticParams() {
  return blogSource.getPages().map((page) => ({
    slug: page.slugs[0],
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = blogSource.getPage([slug]);

  if (!page) {
    return {
      title: "Post Not Found",
    };
  }

  const { title, description, keywords, author, image, date, noindex } = page.data;
  const postUrl = `${siteUrl}/blog/${slug}`;
  const category = categorizeSlug(slug);
  const ogImage = resolveBlogImage(image, category);
  const resolvedAuthor = resolveAuthor(author, category);

  return {
    title: title,
    description,
    keywords: keywords?.length ? keywords : undefined,
    authors: [{ name: resolvedAuthor.name, url: `${siteUrl}/about#${resolvedAuthor.slug}` }],
    openGraph: {
      type: "article",
      locale: "en_US",
      url: postUrl,
      title,
      description,
      siteName: "Prestyj",
      publishedTime: date,
      authors: [resolvedAuthor.name],
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
      creator: "@prestyj_",
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
  const { title, description, author, date, image, keywords, updated } = page.data;
  const postUrl = `${siteUrl}/blog/${slug}`;
  const category = categorizeSlug(slug);
  const resolvedImage = resolveBlogImage(image, category);
  const resolvedAuthor = resolveAuthor(author, category);

  // Get raw MDX content for word count, FAQ extraction, and step extraction
  const mdxPath = join(process.cwd(), "content/blog", `${slug}.mdx`);
  let rawContent = "";
  let fileModified: string | undefined;
  try {
    rawContent = await readFile(mdxPath, "utf-8");
    const fileStat = await stat(mdxPath);
    fileModified = fileStat.mtime.toISOString().split("T")[0];
  } catch {
    // File read failed, skip content analysis
  }
  const wordCount = rawContent.split(/\s+/).filter(Boolean).length;

  // Determine dateModified: frontmatter `updated` > file mtime > datePublished
  const dateModified = updated || fileModified || date;

  // Extract FAQ items with answers from MDX content
  const faqItems: Array<{ question: string; answer: string }> = [];
  // Capture from the FAQ H2 up to the next H2 (`\n## `, not `###`), an `---` rule, or EOF.
  const faqRegex =
    /##\s+(?:Frequently Asked Questions|FAQs?|Common Questions)[\s\S]*?(?=\n##\s|\n---|$)/i;
  const faqSection = faqRegex.exec(rawContent);
  if (faqSection) {
    // Split FAQ section into individual Q&A pairs (### question + following paragraphs)
    const qaPairs = faqSection[0].split(/(?=###\s+)/);
    for (const qa of qaPairs) {
      const questionMatch = /^###\s+(.+)/.exec(qa);
      if (questionMatch?.[1]) {
        const question = questionMatch[1].replace(/\*\*/g, "").trim();
        // Extract answer text: everything after the question heading, stripped of markdown
        const answerText = qa
          .replace(/^###\s+.*/, "") // Remove the question heading
          .replace(/\*\*([^*]+)\*\*/g, "$1") // Bold
          .replace(/\*([^*]+)\*/g, "$1") // Italic
          .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") // Links
          .replace(/^#{1,4}\s+/gm, "") // Sub-headings
          .replace(/^[-*]\s+/gm, "") // List markers
          .replace(/^\d+\.\s+/gm, "") // Numbered list markers
          .replace(/^>\s?/gm, "") // Blockquotes
          .replace(/`{1,3}[^`]*`{1,3}/g, "") // Inline code
          .replace(/\n{2,}/g, " ") // Multiple newlines → space
          .trim();
        faqItems.push({
          question,
          answer: answerText || "See full answer in the article.",
        });
      }
    }
  }

  // Extract step-by-step HowTo data from MDX content
  const howToSteps: Array<{ name: string; text: string }> = [];
  const stepRegex = /^##\s+Step\s+\d+[::\s]\s*(.+)$/gm;
  let stepMatch: RegExpExecArray | null;
  while ((stepMatch = stepRegex.exec(rawContent)) !== null) {
    if (!stepMatch[1]) continue;
    const stepName = stepMatch[1].trim();
    // Extract text between this ## heading and the next ## heading
    const stepStart = stepMatch.index + stepMatch[0].length;
    const nextSection = rawContent.indexOf("\n## ", stepStart);
    const stepBody = rawContent.slice(
      stepStart,
      nextSection === -1 ? rawContent.length : nextSection,
    );
    const stepText = stepBody
      .replace(/\*\*([^*]+)\*\*/g, "$1")
      .replace(/\*([^*]+)\*/g, "$1")
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
      .replace(/^#{3,4}\s+.*/gm, "") // Sub-headings within step
      .replace(/^[-*]\s+/gm, "")
      .replace(/^\d+\.\s+/gm, "")
      .replace(/^>\s?/gm, "")
      .replace(/`{1,3}[^`]*`{1,3}/g, "")
      .replace(/\n{2,}/g, " ")
      .trim()
      .slice(0, 500); // Cap length for structured data
    howToSteps.push({ name: stepName, text: stepText });
  }

  // JSON-LD structured data for Article
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: resolvedImage.startsWith("/") ? `${siteUrl}${resolvedImage}` : resolvedImage,
    author: {
      "@type": "Person",
      name: resolvedAuthor.name,
      url: `${siteUrl}/about#${resolvedAuthor.slug}`,
      jobTitle: resolvedAuthor.jobTitle,
      description: resolvedAuthor.bio,
      knowsAbout: [...resolvedAuthor.expertise],
      worksFor: {
        "@type": "Organization",
        name: "Prestyj",
        url: siteUrl,
      },
    },
    publisher: {
      "@type": "Organization",
      name: "Prestyj",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/icon-512.png`,
      },
    },
    datePublished: date,
    dateModified,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
    url: postUrl,
    keywords: keywords?.join(", "),
    wordCount,
  };

  // JSON-LD structured data for HowTo (only for step-by-step posts)
  const howToJsonLd =
    howToSteps.length >= 2
      ? {
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: title,
          description,
          totalTime: undefined as string | undefined,
          step: howToSteps.map((step, index) => ({
            "@type": "HowToStep",
            position: index + 1,
            name: step.name,
            text: step.text || `Complete step ${index + 1}: ${step.name}`,
            url: `${postUrl}#step-${index + 1}`,
          })),
        }
      : null;

  const breadcrumbs = [
    { name: "Home", url: siteUrl },
    { name: "Blog", url: `${siteUrl}/blog` },
    { name: title, url: postUrl },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <SafeJsonLd data={articleJsonLd} />
      {faqItems.length > 0 && <FAQJsonLd faqs={faqItems} />}
      {howToJsonLd && <SafeJsonLd data={howToJsonLd} />}
      <Navbar />
      <main className="pt-24 pb-16">
        <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Button variant="ghost" className="mb-8" asChild>
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          <header className="mb-12">
            <div className="text-muted-foreground mb-2 flex flex-wrap items-center gap-x-2 text-sm">
              {date && <time dateTime={date}>Published {formatLongDate(date)}</time>}
              {updated && updated !== date && (
                <>
                  <span aria-hidden="true">·</span>
                  <time dateTime={updated} className="text-foreground font-medium">
                    Updated {formatLongDate(updated)}
                  </time>
                </>
              )}
            </div>
            <h1 className="font-heading text-foreground mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
              {title}
            </h1>
            {description && <p className="text-muted-foreground text-xl">{description}</p>}
            <div className="border-border mt-6 flex items-center gap-3 border-t pt-6">
              <span
                aria-hidden="true"
                className="bg-primary/15 text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold"
              >
                {resolvedAuthor.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")}
              </span>
              <div className="text-sm">
                <span className="text-muted-foreground">By </span>
                <Link
                  href={`/about#${resolvedAuthor.slug}`}
                  className="text-foreground font-semibold hover:underline"
                  rel="author"
                >
                  {resolvedAuthor.name}
                </Link>
                <span className="text-muted-foreground block">{resolvedAuthor.jobTitle}</span>
              </div>
            </div>
            <figure className="mt-8">
              <Image
                src={resolvedImage}
                alt={`${title} — Prestyj`}
                width={1200}
                height={630}
                className="w-full rounded-lg"
                priority
              />
              <figcaption className="sr-only">{title} — Prestyj</figcaption>
            </figure>
          </header>

          <div className="prose prose-invert prose-lg prose-headings:font-heading prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-strong:text-foreground prose-code:text-primary max-w-none">
            <MDXContent />
          </div>

          <PostCta />

          <RelatedPosts currentSlug={slug} keywords={keywords ?? []} />
        </article>
      </main>
      <Footer />
    </>
  );
}
