import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PricingHero } from "@/components/sections/pricing/pricing-hero";
import { PricingTiersSection } from "@/components/sections/pricing/pricing-tiers";
import { BatchVideoAdsCrossSellSection } from "@/components/sections/pricing/batch-video-ads-cross-sell";
import { PricingComparisonSection } from "@/components/sections/pricing/pricing-comparison";
import { PricingStoriesSection } from "@/components/sections/pricing/pricing-stories";
import { PricingROISection } from "@/components/sections/pricing/pricing-roi";
import { PricingFAQSection } from "@/components/sections/pricing/pricing-faq";
import { CTASection } from "@/components/sections/cta";
import { FAQJsonLd } from "@/components/seo/json-ld";
import { SafeJsonLd } from "@/components/seo/safe-json-ld";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { pricingFaqs, pricingTiers } from "@/lib/pricing-data";

export const metadata: Metadata = {
  title: "Pricing | AI Lead Response & Batch Video Ads for Service Businesses | Prestyj",
  description:
    "Transparent pricing for Prestyj's AI lead response, appointment setting, and batch video ad platform. Plans from $1,997/mo. No contracts.",
  keywords: [
    "AI lead response pricing",
    "batch video ads pricing",
    "AI sales agent cost",
    "real estate AI pricing",
    "service business advertising cost",
    "AI appointment setting pricing",
    "video ad production pricing",
  ],
  openGraph: {
    title: "Pricing | AI Lead Response & Batch Video Ads for Service Businesses | Prestyj",
    description:
      "Transparent pricing for Prestyj's AI lead response, appointment setting, and batch video ad platform. Plans from $1,997/mo.",
    type: "website",
    url: "https://prestyj.com/pricing",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing | AI Lead Response & Batch Video Ads | Prestyj",
    description:
      "Transparent pricing for AI lead response and batch video ads. Plans from $1,997/mo. No contracts.",
  },
  alternates: {
    canonical: "https://prestyj.com/pricing",
  },
};

export default function PricingPage() {
  const pricingPageUrl = "https://prestyj.com/pricing";

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "PRESTYJ AI Sales & Marketing Platform",
    description:
      "AI-powered lead response, appointment setting, batch video ads, and marketing automation platform for service businesses and real estate teams.",
    brand: { "@type": "Brand", name: "PRESTYJ" },
    url: pricingPageUrl,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: String(pricingTiers[0].monthlyPrice),
      highPrice: String(pricingTiers[pricingTiers.length - 1].monthlyPrice),
      offerCount: pricingTiers.length,
      availability: "https://schema.org/InStock",
      offers: pricingTiers.map((tier) => ({
        "@type": "Offer",
        name: `Prestyj ${tier.name} — ${tier.tagline}`,
        price: String(tier.monthlyPrice),
        priceCurrency: "USD",
        priceValidUntil: "2026-12-31",
        availability: "https://schema.org/InStock",
        url: pricingPageUrl,
        description: tier.bestFor,
      })),
    },
  };

  const softwareAppSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "PRESTYJ AI Sales & Marketing Platform",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "All-in-one AI sales and marketing platform with lead response, appointment setting, batch video ads, and marketing automation.",
    url: pricingPageUrl,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: String(pricingTiers[0].monthlyPrice),
      highPrice: String(pricingTiers[pricingTiers.length - 1].monthlyPrice),
      offerCount: pricingTiers.length,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "150",
      bestRating: "5",
      worstRating: "1",
    },
  };

  const breadcrumbs = [
    { name: "Home", url: "https://prestyj.com" },
    { name: "Pricing", url: pricingPageUrl },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <SafeJsonLd data={productSchema} />
      <SafeJsonLd data={softwareAppSchema} />
      <FAQJsonLd faqs={pricingFaqs} />
      <Navbar />
      <main>
        <PricingHero />
        <BatchVideoAdsCrossSellSection />
        <PricingTiersSection />
        <PricingComparisonSection />
        <PricingStoriesSection />
        <PricingROISection />
        <PricingFAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
