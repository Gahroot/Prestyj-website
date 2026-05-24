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
import {
  findIndustrySlice,
  getAllIndustrySlugs,
  getStatisticsForIndustry,
  industrySlices,
} from "@/lib/statistics/industries";

interface PageProps {
  params: Promise<{ industry: string }>;
}

export function generateStaticParams(): Array<{ industry: string }> {
  return getAllIndustrySlugs().map((slug) => ({ industry: slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { industry } = await params;
  const slice = findIndustrySlice(industry);
  if (!slice) return { title: "Industry not found" };
  const stats = getStatisticsForIndustry(slice);
  const pageUrl = `https://prestyj.com/statistics/${industry}`;
  return {
    title: `${stats.length}+ ${slice.title} (2024-2026)`,
    description: slice.description,
    alternates: { canonical: pageUrl },
    openGraph: {
      title: `${stats.length}+ ${slice.title}`,
      description: slice.description,
      url: pageUrl,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${stats.length}+ ${slice.title}`,
      description: slice.description,
    },
  };
}

export default async function IndustryStatsHub({ params }: PageProps) {
  const { industry } = await params;
  const slice = findIndustrySlice(industry);
  if (!slice) notFound();
  const stats = getStatisticsForIndustry(slice);
  const pageUrl = `https://prestyj.com/statistics/${industry}`;
  const csvUrl = `https://prestyj.com/data/industry/${industry}?format=csv`;
  const jsonUrl = `https://prestyj.com/data/industry/${industry}`;

  const breadcrumbs = [
    { name: "Home", url: "https://prestyj.com" },
    { name: "Statistics", url: "https://prestyj.com/statistics" },
    { name: slice.title, url: pageUrl },
  ];

  // Per-vertical Dataset schema so each industry slice is its own crawlable
  // citable surface (Google Dataset Search, Perplexity, ChatGPT, Claude).
  const datasetSchema = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    "@id": pageUrl,
    name: slice.title,
    description: slice.description,
    url: pageUrl,
    sameAs: ["https://prestyj.com/data"],
    isPartOf: { "@type": "Dataset", "@id": "https://prestyj.com/data" },
    keywords: [slice.slug, "lead response", "AI sales", "marketing benchmarks"],
    creator: { "@type": "Organization", name: "Prestyj", url: "https://prestyj.com" },
    publisher: { "@type": "Organization", name: "Prestyj", url: "https://prestyj.com" },
    license: "https://creativecommons.org/licenses/by/4.0/",
    isAccessibleForFree: true,
    temporalCoverage: "2024-01-01/2026-12-31",
    dateModified: new Date().toISOString().slice(0, 10),
    distribution: [
      { "@type": "DataDownload", encodingFormat: "text/csv", contentUrl: csvUrl },
      { "@type": "DataDownload", encodingFormat: "application/json", contentUrl: jsonUrl },
    ],
  };

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <SafeJsonLd data={datasetSchema} />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="px-4 pt-24 pb-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Badge variant="outline" className="border-primary/50 text-primary mb-4">
              {slice.title.split(" ")[0]} · Open dataset · CC BY 4.0
            </Badge>
            <h1 className="font-heading text-foreground mb-5 text-3xl leading-tight font-bold sm:text-4xl md:text-5xl">
              {stats.length}+ <span className="text-primary">{slice.title}</span>
            </h1>
            <p className="text-muted-foreground mb-8 max-w-3xl text-base sm:text-lg">
              {slice.description} Every stat carries its primary source (HBR, InsideSales, Wyzowl,
              HubSpot, WordStream, McKinsey, etc.) and a stable permalink — free to embed, quote,
              and cite under CC BY 4.0.
            </p>

            <div className="mb-6 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href={csvUrl} download={`prestyj-${slice.slug}-statistics.csv`}>
                  <Download className="mr-2 h-5 w-5" />
                  CSV
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={jsonUrl} download={`prestyj-${slice.slug}-statistics.json`}>
                  JSON
                </a>
              </Button>
              <Button asChild size="lg" variant="ghost">
                <Link href={slice.primaryCta.href}>
                  {slice.primaryCta.label} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <p className="text-muted-foreground text-xs">
              {stats.length} statistics · Sources cited per row · Each row has a permalink at{" "}
              <code>prestyj.com/stat/&lt;id&gt;</code> and an iframe embed.
            </p>
          </div>
        </section>

        {/* Stat grid */}
        <section className="px-4 pb-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col gap-3">
                <StatEmbedCard stat={stat} withAttribution={false} />
                <div className="flex flex-wrap items-center justify-between gap-2 px-1 text-xs">
                  <span className="text-muted-foreground">
                    {stat.source.name}
                    {stat.source.year ? ` · ${stat.source.year}` : null}
                  </span>
                  <Link
                    href={`/stat/${stat.id}`}
                    className="text-primary font-medium hover:underline"
                  >
                    Cite / embed →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Other industries */}
        <section className="bg-card/40 px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-heading text-foreground mb-4 text-xl font-bold">
              Other industry slices
            </h2>
            <div className="flex flex-wrap gap-2">
              {industrySlices
                .filter((s) => s.slug !== slice.slug)
                .map((s) => (
                  <Link
                    key={s.slug}
                    href={`/statistics/${s.slug}`}
                    className="border-border/60 text-foreground hover:border-primary/40 hover:text-primary inline-flex items-center gap-1 rounded-full border px-3 py-1.5 text-xs font-medium"
                  >
                    {s.title.replace(" Marketing & Lead Response Statistics", "").replace(" Statistics", "")}
                  </Link>
                ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-foreground mb-4 text-3xl font-bold md:text-4xl">
              Want the full dataset?
            </h2>
            <p className="text-muted-foreground mx-auto mb-8 max-w-xl">
              {stats.length} {slice.slug} stats here. {58 - stats.length}+ more across every other
              vertical, plus speed-to-lead, video advertising, AI adoption, and Google Ads CPL
              benchmarks.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/data">Open full dataset</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={slice.primaryCta.href}>{slice.primaryCta.label}</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
