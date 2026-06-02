import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { OrganicIntentPage } from "@/components/sections/batch-video-ads/organic-intent-page";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { FAQJsonLd } from "@/components/seo/json-ld";
import { SafeJsonLd } from "@/components/seo/safe-json-ld";
import { getOrganicIntentPage } from "@/lib/batch-video-ads/organic-pages";

const slug = "video-ad-testing-pricing";
const pageUrl = `https://prestyj.com/${slug}`;
const page = getOrganicIntentPage(slug);

export const metadata: Metadata = {
  title: page?.title ?? "Video Ad Testing Pricing",
  description: page?.description,
  keywords: page?.keywords,
  openGraph: {
    title: page?.title ?? "Video Ad Testing Pricing",
    description: page?.description,
    type: "website",
    url: pageUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: page?.title ?? "Video Ad Testing Pricing",
    description: page?.description,
  },
  alternates: { canonical: pageUrl },
};

export default function VideoAdTestingPricingPage() {
  if (!page) {
    notFound();
  }

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: "Prestyj Video Ad Testing Pricing",
    description: page.description,
    url: pageUrl,
    provider: {
      "@type": "Organization",
      name: "Prestyj",
      url: "https://prestyj.com",
    },
    serviceType: ["Video Ad Testing", "Batch Video Ads", "Paid Social Creative Testing", "Cost Per Tested Angle"],
    areaServed: "United States",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "497",
      highPrice: "3997",
      offerCount: "4",
      availability: "https://schema.org/InStock",
      url: "https://prestyj.com/batch-video-ads#pricing",
    },
  };

  return (
    <>
      <SafeJsonLd data={serviceJsonLd} />
      <FAQJsonLd faqs={page.faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://prestyj.com" },
          { name: page.breadcrumbLabel, url: pageUrl },
        ]}
      />
      <OrganicIntentPage page={page} />
    </>
  );
}
