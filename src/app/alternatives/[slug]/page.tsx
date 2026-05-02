import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AlternativePageClient } from "@/components/sections/alternatives/alternative-page-client";
import { getAlternative, getAllAlternativeSlugs } from "@/lib/alternatives";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { SafeJsonLd } from "@/components/seo/safe-json-ld";
import { FAQJsonLd } from "@/components/seo/json-ld";

interface AlternativePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllAlternativeSlugs().map((slug) => ({ slug }));
}

const siteUrl = "https://prestyj.com";

export async function generateMetadata({ params }: AlternativePageProps): Promise<Metadata> {
  const { slug } = await params;
  const alternative = getAlternative(slug);

  if (!alternative) {
    return {
      title: "Alternative Not Found",
    };
  }

  const pageUrl = `${siteUrl}/alternatives/${slug}`;

  return {
    title: alternative.meta.title,
    description: alternative.meta.description,
    keywords: alternative.meta.keywords,
    openGraph: {
      title: alternative.meta.title,
      description: alternative.meta.description,
      type: "website",
      url: pageUrl,
    },
    alternates: {
      canonical: pageUrl,
    },
  };
}

export default async function AlternativePage({ params }: AlternativePageProps) {
  const { slug } = await params;
  const alternative = getAlternative(slug);

  if (!alternative) {
    notFound();
  }

  const pageUrl = `${siteUrl}/alternatives/${slug}`;

  const breadcrumbs = [
    { name: "Home", url: siteUrl },
    { name: "Alternatives", url: `${siteUrl}/alternatives` },
    { name: alternative.competitor.name, url: pageUrl },
  ];

  // Product schema for Prestyj in comparison context
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "PRESTYJ AI Sales Agent",
    description: `${alternative.hero.subheadline} Compare Prestyj vs ${alternative.competitor.name}.`,
    brand: { "@type": "Brand", name: "PRESTYJ" },
    url: pageUrl,
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: alternative.comparison.prestyjPricing.price.replace(/[^0-9]/g, "") || "1997",
      availability: "https://schema.org/InStock",
      seller: { "@type": "Organization", name: "PRESTYJ" },
    },
  };

  // FAQ from comparison features
  const faqItems = alternative.comparison.features.slice(0, 5).map((f) => ({
    question: `How does Prestyj compare to ${alternative.competitor.name} for ${f.feature}?`,
    answer:
      f.note ||
      `Prestyj offers ${typeof f.prestyj === "boolean" ? (f.prestyj ? "full support" : "no support") : f.prestyj} for ${f.feature}, while ${alternative.competitor.name} offers ${typeof f.competitor === "boolean" ? (f.competitor ? "support" : "no support") : f.competitor}.`,
  }));

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <SafeJsonLd data={productSchema} />
      {faqItems.length > 0 && <FAQJsonLd faqs={faqItems} />}
      <Navbar />
      <main className="pt-16">
        <AlternativePageClient alternative={alternative} />
      </main>
      <Footer />
    </>
  );
}
