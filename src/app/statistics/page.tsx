import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SafeJsonLd } from "@/components/seo/safe-json-ld";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { FAQJsonLd } from "@/components/seo/json-ld";
import { statCategories, statisticsFaqs, totalStatCount } from "@/lib/statistics-data";
import { StatisticsTableOfContents } from "@/components/sections/statistics/table-of-contents";
import { StatCategorySection } from "@/components/sections/statistics/stat-category-section";
import { StatisticsFAQSection } from "@/components/sections/statistics/statistics-faq";

const pageUrl = "https://prestyj.com/statistics";

export const metadata: Metadata = {
  title: `${totalStatCount}+ Lead Response, Video Ad & AI Sales Statistics (2025–2026)`,
  description: `${totalStatCount}+ cite-worthy statistics on speed-to-lead, video advertising performance, AI adoption in marketing and sales, lead conversion benchmarks, and cost per lead by industry — updated for 2025–2026.`,
  keywords: [
    "speed to lead statistics",
    "lead response time statistics",
    "video advertising statistics 2025",
    "AI adoption in sales statistics",
    "cost per lead by industry 2025",
    "lead conversion rate benchmarks",
    "video ad performance statistics",
    "AI sales statistics 2026",
    "lead response time conversion rate",
    "batch video ads statistics",
    "marketing statistics 2025",
    "sales AI statistics",
  ],
  openGraph: {
    title: `${totalStatCount}+ Lead Response, Video Ad & AI Sales Statistics (2025–2026)`,
    description: `The most comprehensive collection of cite-worthy statistics on speed-to-lead, video ads, AI adoption, lead conversion, and industry benchmarks. Updated for 2025–2026.`,
    type: "website",
    url: pageUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: `${totalStatCount}+ Lead Response, Video Ad & AI Sales Statistics`,
    description: `Cite-worthy statistics on speed-to-lead, video ads, AI adoption, lead conversion, and industry benchmarks.`,
  },
  alternates: {
    canonical: pageUrl,
  },
};

export default function StatisticsPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://prestyj.com" },
    { name: "Statistics", url: pageUrl },
  ];

  // Article schema for the statistics page
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${totalStatCount}+ Lead Response, Video Ad & AI Sales Statistics (2025–2026)`,
    description: metadata.description,
    url: pageUrl,
    publisher: {
      "@type": "Organization",
      name: "Prestyj",
      url: "https://prestyj.com",
      logo: {
        "@type": "ImageObject",
        url: "https://prestyj.com/icon-512.png",
      },
    },
    datePublished: "2025-01-15",
    dateModified: "2026-05-07",
    author: {
      "@type": "Organization",
      name: "Prestyj",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    keywords: (metadata.keywords as string[])?.join(", "),
  };

  // Dataset schema for the statistics collection
  const datasetSchema = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: "Lead Response, Video Advertising & AI Sales Statistics Collection (2025–2026)",
    description: `A curated dataset of ${totalStatCount}+ statistics covering speed-to-lead, video ad performance, AI adoption in sales, lead conversion rates, and industry cost-per-lead benchmarks.`,
    url: pageUrl,
    creator: {
      "@type": "Organization",
      name: "Prestyj",
      url: "https://prestyj.com",
    },
    temporalCoverage: "2024/2026",
    about: statCategories.map((cat) => ({
      "@type": "Thing",
      name: cat.title,
    })),
  };

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <SafeJsonLd data={articleSchema} />
      <SafeJsonLd data={datasetSchema} />
      <FAQJsonLd faqs={statisticsFaqs} />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative px-4 pt-24 pb-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="border-primary/50 text-primary mb-6">
              Research & Data
            </Badge>
            <h1 className="font-heading text-foreground mb-6 text-4xl leading-[1.1] font-bold md:text-5xl lg:text-6xl">
              {totalStatCount}+ Cite-Worthy <span className="text-primary">Statistics</span> for
              2025–2026
            </h1>
            <p className="text-muted-foreground mx-auto mb-8 max-w-3xl text-lg">
              The most comprehensive collection of lead response, video advertising, AI adoption,
              and industry benchmark statistics — sourced, dated, and ready to cite in your content.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              {/* CTA-sweep: cold traffic → batch offer */}
              <Button size="lg" asChild>
                <Link href="/batch-video-ads">Get 100 ads for $497</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/platform">Explore the Platform</Link>
              </Button>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
              <Link
                href="/pricing"
                className="text-primary hover:text-primary/80 underline underline-offset-2"
              >
                See pricing →
              </Link>
              <Link
                href="/free-ads"
                className="text-primary hover:text-primary/80 underline underline-offset-2"
              >
                Free batch video ads →
              </Link>
              <Link
                href="/batch-video-ads"
                className="text-primary hover:text-primary/80 underline underline-offset-2"
              >
                Batch ad production →
              </Link>
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <StatisticsTableOfContents />

        {/* Stat Categories */}
        {statCategories.map((category, index) => (
          <StatCategorySection key={category.id} category={category} index={index} />
        ))}

        {/* FAQ */}
        <StatisticsFAQSection />

        {/* CTA */}
        <section className="bg-card/50 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-foreground mb-4 text-3xl font-bold md:text-4xl">
              Put These Statistics to Work
            </h2>
            <p className="text-muted-foreground mx-auto mb-8 max-w-xl">
              Prestyj helps service businesses turn speed-to-lead and AI advantages into booked
              appointments. Sub-60-second response, 24/7 coverage, and 300+ video ad variations from
              a single recording.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              {/* CTA-sweep: cold traffic → batch offer */}
              <Button size="lg" asChild>
                <Link href="/batch-video-ads">Get 100 ads for $497</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/pricing">See Pricing</Link>
              </Button>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
              <Link
                href="/free-ads"
                className="text-primary hover:text-primary/80 underline underline-offset-2"
              >
                Try free batch video ads →
              </Link>
              <Link
                href="/solutions/speed-to-lead"
                className="text-primary hover:text-primary/80 underline underline-offset-2"
              >
                Speed to lead solution →
              </Link>
            </div>
            <p className="text-muted-foreground mt-4 text-xs">
              No commitment required. See a live demo customized to your industry.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
