import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SafeJsonLd } from "@/components/seo/safe-json-ld";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { FAQJsonLd } from "@/components/seo/json-ld";
import { ContentEngineHero } from "@/components/sections/content-engine/hero";
import { ContentEngineProofBar } from "@/components/sections/content-engine/proof-bar";
import { ContentEngineProblem } from "@/components/sections/content-engine/problem";
import { ContentEngineSolution } from "@/components/sections/content-engine/solution";
import { ContentEngineProofScreenshots } from "@/components/sections/content-engine/proof-screenshots";
import { ContentEngineHowItWorks } from "@/components/sections/content-engine/how-it-works";
import { ContentEnginePricing } from "@/components/sections/content-engine/pricing";
import { ContentEngineComparison } from "@/components/sections/content-engine/comparison";
import { ContentEngineFAQ } from "@/components/sections/content-engine/faq";
import { contentEngineFaqs } from "@/components/sections/content-engine/faq-data";
import { ContentEngineCTA } from "@/components/sections/content-engine/cta";

const PAGE_URL = "https://prestyj.com/done-for-you-social-media";

export const metadata: Metadata = {
  title:
    "Done-For-You Social Media | 1,500+ Posts/Month Across 7 Platforms — Prestyj Content Engine",
  description:
    "Most agencies ship 30 posts a month for $5K. We ship 1,500+. The Prestyj Content Engine is an AI-powered done-for-you social media service producing 50+ posts a day across Instagram, Facebook, TikTok, YouTube, LinkedIn, Threads, and X — from $2,000/mo.",
  keywords: [
    "done for you social media",
    "social media management service",
    "AI social media management",
    "social media content service",
    "1000 posts per month",
    "social media on autopilot",
    "AI content engine",
    "AI content department",
    "social media automation service",
    "managed social media",
    "done for you content marketing",
    "instagram content service",
    "tiktok content service",
    "linkedin content service",
    "social media for agencies",
    "social media for coaches",
    "social media for service businesses",
  ],
  openGraph: {
    title:
      "Done-For-You Social Media | 1,500+ Posts/Month — Prestyj Content Engine",
    description:
      "50+ posts a day across 7 platforms. AI content engine that ships 1,500+ posts/month for less than the cost of one junior hire. From $2,000/mo.",
    type: "website",
    url: PAGE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Done-For-You Social Media | 1,500+ Posts/Month — Prestyj Content Engine",
    description:
      "50+ posts a day across 7 platforms. AI content engine that ships 1,500+ posts/month for less than the cost of one junior hire.",
  },
  alternates: {
    canonical: PAGE_URL,
  },
};

export default function DoneForYouSocialMediaPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Prestyj Content Engine — Done-For-You Social Media",
    description:
      "AI-powered done-for-you social media management service producing 50+ posts/day (1,500+/month) across Instagram, Facebook, TikTok, YouTube, LinkedIn, Threads, and X. Includes brand kit, content sequencing, native publishing, monthly creative refresh, and reporting.",
    provider: {
      "@type": "Organization",
      name: "PRESTYJ",
      url: "https://prestyj.com",
      logo: "https://prestyj.com/icon-512.png",
    },
    serviceType: [
      "Social Media Management",
      "AI Content Generation",
      "Done-For-You Social Media",
      "Multi-Platform Publishing",
      "Content Marketing Automation",
    ],
    areaServed: "United States",
    url: PAGE_URL,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "2000",
      highPrice: "5000",
      offerCount: "3",
      availability: "https://schema.org/InStock",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Content Engine Plans",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Minimum Plan",
          price: "2000",
          priceCurrency: "USD",
          itemOffered: {
            "@type": "Service",
            name: "Minimum Plan — 3 platforms, 30+ posts/day",
          },
        },
        {
          "@type": "Offer",
          name: "Pro Plan",
          price: "3000",
          priceCurrency: "USD",
          itemOffered: {
            "@type": "Service",
            name: "Pro Plan — 5–6 platforms, 50+ posts/day, 1,500+/month",
          },
        },
        {
          "@type": "Offer",
          name: "Max Plan",
          price: "5000",
          priceCurrency: "USD",
          itemOffered: {
            "@type": "Service",
            name: "Max Plan — All platforms, multi-brand, unlimited automations",
          },
        },
      ],
    },
  };

  return (
    <>
      <SafeJsonLd data={serviceJsonLd} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://prestyj.com" },
          {
            name: "Done-For-You Social Media",
            url: PAGE_URL,
          },
        ]}
      />
      <FAQJsonLd faqs={contentEngineFaqs} />
      <Navbar />
      <main>
        <ContentEngineHero />
        <ContentEngineProofBar />
        <ContentEngineProblem />
        <ContentEngineSolution />
        <ContentEngineProofScreenshots />
        <ContentEngineHowItWorks />
        <ContentEnginePricing />
        <ContentEngineComparison />
        <ContentEngineFAQ />
        <ContentEngineCTA />
      </main>
      <Footer />
    </>
  );
}
