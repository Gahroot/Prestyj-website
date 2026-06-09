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
import { CitationStatsSection } from "@/components/sections/citation-stats-section";
import { FAQJsonLd } from "@/components/seo/json-ld";
import { SafeJsonLd } from "@/components/seo/safe-json-ld";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { pricingFaqs, pricingTiers } from "@/lib/pricing-data";

export const metadata: Metadata = {
  title: "AI Agent & Batch Video Ads Pricing — From $1,497/mo",
  description:
    "Transparent pricing for Prestyj's AI agents for marketing and sales. Lead response, appointment setting, and batch video ads for businesses. Plans from $1,997/mo. No contracts.",
  keywords: [
    "AI lead response pricing",
    "batch video ads pricing",
    "AI sales agent cost",
    "real estate AI pricing",
    "business advertising cost",
    "AI appointment setting pricing",
    "video ad production pricing",
  ],
  openGraph: {
    title: "AI Agent & Batch Video Ads Pricing — From $1,497/mo",
    description:
      "Transparent pricing for Prestyj's AI agents for marketing and sales. Plans from $1,997/mo.",
    type: "website",
    url: "https://prestyj.com/pricing",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Agent & Batch Video Ads Pricing — From $1,497/mo",
    description:
      "Transparent pricing for AI lead response and batch video ads. Plans from $1,997/mo. No contracts.",
  },
  alternates: {
    canonical: "https://prestyj.com/pricing",
  },
};

export default function PricingPage() {
  const pricingPageUrl = "https://prestyj.com/pricing";
  const firstTier = pricingTiers[0];
  const lastTier = pricingTiers[pricingTiers.length - 1];
  if (!firstTier || !lastTier) {
    throw new Error("pricingTiers must contain at least one tier");
  }

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Prestyj AI Sales & Marketing Platform",
    description:
      "AI agents for marketing and sales: lead response, appointment setting, batch video ads, and marketing automation for businesses.",
    brand: { "@type": "Brand", name: "Prestyj" },
    url: pricingPageUrl,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: String(firstTier.monthlyPrice),
      highPrice: String(lastTier.monthlyPrice),
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
    name: "Prestyj AI Sales & Marketing Platform",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "AI agents for marketing and sales: lead response, appointment setting, batch video ads, and marketing automation for businesses.",
    url: pricingPageUrl,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: String(firstTier.monthlyPrice),
      highPrice: String(lastTier.monthlyPrice),
      offerCount: pricingTiers.length,
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
        <PricingTiersSection />
        <CitationStatsSection
          statIds={[
            "voice-agent-cost-per-minute-at-scale",
            "voice-agent-pilot-setup-cost-range",
            "voice-agent-hidden-cost-percent",
            "batch-video-pilot-setup-cost",
          ]}
          eyebrow="Citable pricing benchmarks"
          title="The numbers behind Prestyj pricing."
          description="Per-minute cost at scale, pilot setup cost, hidden-cost percentage, and batch video ad pilot pricing — each a permanent statistic with source, embed, and citation formats."
          cta={{
            label: "Browse all Prestyj statistics",
            href: "/statistics",
          }}
          className="bg-muted/20 border-border/50 border-y"
        />
        <PricingComparisonSection />
        <PricingStoriesSection />
        <PricingROISection />
        <BatchVideoAdsCrossSellSection />
        <PricingFAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
