import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { BestForPageClient } from "@/components/sections/best-for/best-for-page-client";
import { getBestFor, getAllBestForSlugs } from "@/lib/best-for";
import { FAQJsonLd } from "@/components/seo/json-ld";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";

interface BestForPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllBestForSlugs().map((slug) => ({ slug }));
}

const siteUrl = "https://prestyj.com";

export async function generateMetadata({ params }: BestForPageProps): Promise<Metadata> {
  const { slug } = await params;
  const bestFor = getBestFor(slug);

  if (!bestFor) {
    return {
      title: "Page Not Found",
    };
  }

  const pageUrl = `${siteUrl}/best-for/${slug}`;

  return {
    title: bestFor.meta.title,
    description: bestFor.meta.description,
    keywords: bestFor.meta.keywords,
    openGraph: {
      title: bestFor.meta.title,
      description: bestFor.meta.description,
      type: "website",
      url: pageUrl,
    },
    alternates: {
      canonical: pageUrl,
    },
    robots: { index: true, follow: true },
  };
}

export default async function BestForPage({ params }: BestForPageProps) {
  const { slug } = await params;
  const bestFor = getBestFor(slug);

  if (!bestFor) {
    notFound();
  }

  const breadcrumbs = [
    { name: "Home", url: siteUrl },
    { name: "Best For", url: `${siteUrl}/best-for` },
    { name: bestFor.meta.title, url: `${siteUrl}/best-for/${slug}` },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <FAQJsonLd faqs={bestFor.faq} />
      <Navbar />
      <main className="pt-16">
        <BestForPageClient bestFor={bestFor} />
      </main>
      <Footer />
    </>
  );
}
