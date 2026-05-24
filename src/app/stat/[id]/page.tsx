import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Download } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SafeJsonLd } from "@/components/seo/safe-json-ld";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { StatEmbedCard } from "@/components/embed/stat-embed-card";
import { ShareCitePanel } from "@/components/embed/share-cite-panel";
import { findStatById, getAllStatIds } from "@/lib/statistics";

interface PageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams(): Array<{ id: string }> {
  return getAllStatIds().map((id) => ({ id }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const stat = findStatById(id);
  if (!stat) return { title: "Statistic Not Found" };
  const title = `${stat.value} — ${stat.description.slice(0, 90)}${stat.description.length > 90 ? "…" : ""}`;
  return {
    title: `${title} | Prestyj Statistics`,
    description: stat.description,
    alternates: {
      canonical: stat.permalink,
      types: {
        "application/json+oembed": `https://prestyj.com/oembed?url=${encodeURIComponent(stat.permalink)}`,
      },
    },
    openGraph: {
      title,
      description: stat.description,
      url: stat.permalink,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: stat.description,
    },
  };
}

export default async function StatPermalinkPage({ params }: PageProps) {
  const { id } = await params;
  const stat = findStatById(id);
  if (!stat) notFound();

  const breadcrumbs = [
    { name: "Home", url: "https://prestyj.com" },
    { name: "Statistics", url: "https://prestyj.com/statistics" },
    { name: stat.categoryTitle, url: stat.categoryPermalink },
    { name: stat.value, url: stat.permalink },
  ];

  // Claim schema marks this URL as a citable claim with a numeric value —
  // signals to LLMs and search engines that this URL is the canonical home
  // for the statistic. Combined with the parent /data Dataset, we want this
  // to be the link AI engines return when asked the underlying question.
  const claimSchema = {
    "@context": "https://schema.org",
    "@type": "Claim",
    "@id": stat.permalink,
    appearance: stat.permalink,
    claimReviewed: stat.description,
    firstAppearance: stat.permalink,
    author: {
      "@type": "Organization",
      name: "Prestyj",
      url: "https://prestyj.com",
    },
    citation: stat.source.url
      ? [{ "@type": "CreativeWork", name: stat.source.name, url: stat.source.url }]
      : [{ "@type": "CreativeWork", name: stat.source.name }],
  };

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <SafeJsonLd data={claimSchema} />
      <Navbar />
      <main className="mx-auto max-w-4xl px-4 pt-24 pb-20 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex flex-wrap items-center gap-3 text-sm">
          <Link href="/statistics" className="text-muted-foreground hover:text-foreground">
            ← All statistics
          </Link>
          <span className="text-muted-foreground/40">·</span>
          <Link href={`/statistics#${stat.categorySlug}`} className="text-primary hover:underline">
            {stat.categoryTitle}
          </Link>
        </div>

        {/* Stat card (canonical visual) */}
        <Badge variant="outline" className="border-primary/50 text-primary mb-4">
          Cite this statistic
        </Badge>
        <h1 className="font-heading text-foreground mb-3 text-3xl leading-tight font-bold sm:text-4xl">
          {stat.description}
        </h1>
        <p className="text-muted-foreground mb-8 max-w-2xl text-base">
          A Prestyj-curated statistic from the {stat.categoryTitle} dataset. Free to embed, quote,
          and cite under the CC BY 4.0 license — attribution to{" "}
          <Link className="text-primary underline" href="/">
            prestyj.com
          </Link>{" "}
          is required.
        </p>

        <div className="mb-10">
          <StatEmbedCard stat={stat} withAttribution={false} />
        </div>

        {/* Embed + cite panels — the backlink machine */}
        <ShareCitePanel stat={stat} />

        {/* Dataset / methodology links */}
        <section className="bg-card/50 mt-10 flex flex-col gap-4 rounded-2xl border border-dashed p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-heading text-foreground text-base font-semibold">
              Want the full dataset?
            </h2>
            <p className="text-muted-foreground text-sm">
              Download all Prestyj statistics as CSV or JSON — free, CC BY 4.0 licensed.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button asChild variant="outline" size="sm">
              <Link href="/data">
                <Download className="mr-2 h-4 w-4" /> Open dataset
              </Link>
            </Button>
            <Button asChild size="sm">
              <Link href="/batch-video-ads">
                See Prestyj <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
