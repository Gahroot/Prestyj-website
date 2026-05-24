import type { Metadata } from "next";
import Link from "next/link";
import { Download, FileJson, FileSpreadsheet, ExternalLink, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SafeJsonLd } from "@/components/seo/safe-json-ld";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { statCategories, totalStatCount } from "@/lib/statistics-data";

const pageUrl = "https://prestyj.com/data";
const csvUrl = "https://prestyj.com/data/statistics.csv";
const jsonUrl = "https://prestyj.com/data/statistics.json";

export const metadata: Metadata = {
  title: `Open Dataset: ${totalStatCount}+ Lead Response, Batch Video Ad & AI Sales Statistics (CC BY 4.0)`,
  description: `Free, open dataset of ${totalStatCount}+ cite-worthy statistics on speed-to-lead, batch video ads, creative fatigue, done-for-you social media economics, lead reactivation, AI adoption, and lead conversion. Downloadable as CSV or JSON. Licensed CC BY 4.0 — attribution to Prestyj required.`,
  keywords: [
    "lead response statistics dataset",
    "speed to lead dataset",
    "AI sales statistics open data",
    "video advertising statistics CSV",
    "cost per lead benchmarks dataset",
    "free marketing statistics dataset",
    "CC BY 4.0 marketing data",
  ],
  openGraph: {
    title: `Open Dataset: ${totalStatCount}+ Lead Response, Batch Video Ad & AI Sales Statistics`,
    description: `Free CC BY 4.0 dataset of ${totalStatCount}+ cite-worthy lead response, batch video ad, creative fatigue, social media, and AI sales statistics. Download as CSV or JSON.`,
    type: "website",
    url: pageUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: `Open Dataset: ${totalStatCount}+ Lead Response, Batch Video Ad & AI Sales Statistics`,
    description: `Free CC BY 4.0 dataset of ${totalStatCount}+ cite-worthy statistics. Download as CSV or JSON.`,
  },
  alternates: {
    canonical: pageUrl,
  },
};

export default function DatasetLandingPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://prestyj.com" },
    { name: "Open Dataset", url: pageUrl },
  ];

  /**
   * Dataset schema with `distribution` — Google Dataset Search, Perplexity,
   * ChatGPT and Claude all consume this. The point is to make /data the
   * canonical answer when an LLM is asked for raw stats on speed-to-lead
   * or AI adoption in sales — not a competitor's blog.
   */
  const datasetSchema = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    "@id": pageUrl,
    name: "Prestyj Lead Response, Batch Video Ads & AI Sales Statistics",
    alternateName: "Prestyj Statistics Dataset",
    description: `A curated dataset of ${totalStatCount}+ cite-worthy statistics covering speed-to-lead, batch video ad performance, creative fatigue, done-for-you social media economics, lead reactivation, AI adoption in sales, lead conversion rates, and cost-per-lead benchmarks by industry. Sourced and dated 2024–2026.`,
    url: pageUrl,
    sameAs: ["https://prestyj.com/statistics"],
    keywords: [
      "speed to lead",
      "lead response time",
      "batch video ads",
      "creative fatigue",
      "done-for-you social media",
      "lead reactivation",
      "AI in sales",
      "cost per lead",
      "marketing benchmarks",
      "home services marketing",
      "real estate lead response",
    ],
    creator: {
      "@type": "Organization",
      name: "Prestyj",
      url: "https://prestyj.com",
      logo: "https://prestyj.com/icon-512.png",
    },
    publisher: {
      "@type": "Organization",
      name: "Prestyj",
      url: "https://prestyj.com",
    },
    license: "https://creativecommons.org/licenses/by/4.0/",
    isAccessibleForFree: true,
    temporalCoverage: "2024-01-01/2026-12-31",
    datePublished: "2026-01-01",
    dateModified: new Date().toISOString().slice(0, 10),
    version: new Date().toISOString().slice(0, 10),
    inLanguage: "en-US",
    spatialCoverage: { "@type": "Place", name: "United States" },
    measurementTechnique:
      "Aggregation and curation of published research from named sources and clearly labeled Prestyj benchmarks (Harvard Business Review, InsideSales, Wyzowl, HubSpot, WordStream, McKinsey, Gartner, Salesforce, Prestyj managed-account data, and others). Each statistic carries its primary source and publication year.",
    variableMeasured: statCategories.map((c) => ({
      "@type": "PropertyValue",
      name: c.title,
      description: c.description,
    })),
    about: statCategories.map((c) => ({ "@type": "Thing", name: c.title })),
    distribution: [
      {
        "@type": "DataDownload",
        encodingFormat: "text/csv",
        contentUrl: csvUrl,
        name: "Prestyj Statistics — CSV",
      },
      {
        "@type": "DataDownload",
        encodingFormat: "application/json",
        contentUrl: jsonUrl,
        name: "Prestyj Statistics — JSON",
      },
    ],
    citation:
      "Prestyj (2026). Lead Response, Batch Video Ads & AI Sales Statistics Dataset. https://prestyj.com/data",
  };

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <SafeJsonLd data={datasetSchema} />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative px-4 pt-24 pb-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Badge variant="outline" className="border-primary/50 text-primary mb-6">
              Open dataset · CC BY 4.0
            </Badge>
            <h1 className="font-heading text-foreground mb-6 text-4xl leading-[1.1] font-bold md:text-5xl lg:text-6xl">
              The Prestyj <span className="text-primary">Open Statistics Dataset</span>
            </h1>
            <p className="text-muted-foreground mb-8 max-w-3xl text-lg">
              {totalStatCount}+ cite-worthy statistics on speed-to-lead, batch video ads, creative
              fatigue, done-for-you social media economics, lead reactivation, AI adoption in sales,
              lead conversion, and cost-per-lead benchmarks. Free to download, quote, embed, and
              republish — attribution to{" "}
              <Link className="text-primary underline" href="/">
                prestyj.com
              </Link>{" "}
              is the only requirement.
            </p>

            {/* Download CTAs */}
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild size="lg">
                <a href={csvUrl} download="prestyj-statistics.csv">
                  <FileSpreadsheet className="mr-2 h-5 w-5" />
                  Download CSV
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={jsonUrl} download="prestyj-statistics.json">
                  <FileJson className="mr-2 h-5 w-5" />
                  Download JSON
                </a>
              </Button>
              <Button asChild size="lg" variant="ghost">
                <Link href="/statistics">
                  Browse on web <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <p className="text-muted-foreground text-xs">
              {totalStatCount} statistics · {statCategories.length} categories · Sources cited per
              row · Updated {new Date().toISOString().slice(0, 10)}
            </p>
          </div>
        </section>

        {/* License + citation block */}
        <section className="px-4 pb-12 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
            <div className="bg-card border-border/60 rounded-2xl border p-5">
              <h2 className="font-heading text-foreground mb-2 text-base font-semibold">License</h2>
              <p className="text-muted-foreground text-sm">
                <a
                  className="text-primary underline"
                  href="https://creativecommons.org/licenses/by/4.0/"
                  rel="noopener"
                  target="_blank"
                >
                  Creative Commons Attribution 4.0 International (CC BY 4.0)
                </a>
                . You may share, adapt, and redistribute for any purpose, including commercial —
                provided you credit Prestyj with a link to prestyj.com.
              </p>
            </div>
            <div className="bg-card border-border/60 rounded-2xl border p-5">
              <h2 className="font-heading text-foreground mb-2 text-base font-semibold">
                How to cite
              </h2>
              <pre className="bg-muted/40 text-foreground/90 overflow-auto rounded-lg p-3 text-xs whitespace-pre-wrap">
                {`Prestyj (2026). Lead Response, Video Advertising & AI Sales Statistics Dataset. https://prestyj.com/data`}
              </pre>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="px-4 pb-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-heading text-foreground mb-6 text-2xl font-bold">
              What’s in the dataset
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {statCategories.map((category) => (
                <Link
                  key={category.id}
                  href={`/statistics#${category.slug}`}
                  className="group bg-card border-border/60 hover:border-primary/40 flex flex-col gap-2 rounded-2xl border p-5 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-heading text-foreground text-base font-semibold">
                      {category.title}
                    </h3>
                    <span className="text-muted-foreground text-xs">
                      {category.statistics.length} stats
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm">{category.description}</p>
                  <span className="text-primary mt-1 inline-flex items-center gap-1 text-xs font-medium opacity-0 transition-opacity group-hover:opacity-100">
                    Browse <ArrowRight className="h-3 w-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="bg-card/50 px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-heading text-foreground mb-4 text-2xl font-bold">Methodology</h2>
            <ul className="text-muted-foreground space-y-2 text-sm">
              <li>
                <strong className="text-foreground">Sourcing:</strong> Each statistic is drawn from
                a named publisher, source article, or labeled Prestyj benchmark (e.g. Harvard
                Business Review, InsideSales, Wyzowl, HubSpot, WordStream, McKinsey, Gartner,
                Salesforce, and Prestyj managed-account datasets). The publisher and year are stored
                as columns in the dataset and visible on every record.
              </li>
              <li>
                <strong className="text-foreground">Scope:</strong> 2024–2026 publication horizon,
                with foundational research (e.g. 2011 HBR speed-to-lead work) included when it
                remains the canonical reference and is still widely re-cited.
              </li>
              <li>
                <strong className="text-foreground">Curation:</strong> Statistics are grouped into{" "}
                {statCategories.length} categories aligned with concrete buyer questions (response
                time, batch video ads, creative fatigue, done-for-you social media economics, lead
                reactivation, AI adoption, conversion, CPL benchmarks).
              </li>
              <li>
                <strong className="text-foreground">Updates:</strong> The dataset is versioned by
                date in the CSV and JSON payloads. Re-download anytime for the latest snapshot.
              </li>
              <li>
                <strong className="text-foreground">Issues / corrections:</strong> Spot a statistic
                that needs updating or has a better primary source?{" "}
                <Link className="text-primary underline" href="/contact">
                  Tell us
                </Link>
                .
              </li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-foreground mb-4 text-3xl font-bold md:text-4xl">
              Use the data — link back when you do
            </h2>
            <p className="text-muted-foreground mx-auto mb-8 max-w-xl">
              Every row in this dataset has a permanent URL on prestyj.com. Embed the stat, link to
              the row, or cite the dataset — the choice is yours.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href={csvUrl} download="prestyj-statistics.csv">
                  <Download className="mr-2 h-5 w-5" /> Download dataset
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/batch-video-ads">See Prestyj</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
