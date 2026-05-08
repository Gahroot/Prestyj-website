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
import { ContentEngineLiveAccounts } from "@/components/sections/content-engine/live-accounts";
import { ContentEngineHowItWorks } from "@/components/sections/content-engine/how-it-works";
import { ContentEnginePricing } from "@/components/sections/content-engine/pricing";
import { ContentEngineComparison } from "@/components/sections/content-engine/comparison";
import { ContentEngineFAQ } from "@/components/sections/content-engine/faq";
import { contentEngineFaqs } from "@/components/sections/content-engine/faq-data";
import { ContentEngineCTA } from "@/components/sections/content-engine/cta";

const PAGE_URL = "https://prestyj.com/done-for-you-social-media";

export const metadata: Metadata = {
  title:
    "Done-For-You Social Media Swarm | Live in 24 Hours — Prestyj",
  description:
    "One brand isn't enough. Run a content swarm across your business, your personal brand, and niche accounts. Up to 7 platforms, 2,700+ posts/month, live in 24 hours. From $1,997/mo.",
  keywords: [
    "done for you social media",
    "social media management service",
    "AI social media management",
    "social media content service",
    "content swarm",
    "multi-account social media",
    "personal brand management",
    "done for you personal brand",
    "24 hour social media setup",
    "algorithm safe social media",
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
      "Done-For-You Social Media Swarm | Live in 24 Hours — Prestyj",
    description:
      "One brand isn't enough. Run a content swarm across your business, your personal brand, and niche accounts. Up to 7 platforms, 2,700+ posts/month, live in 24 hours. From $1,997/mo.",
    type: "website",
    url: PAGE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Done-For-You Social Media Swarm | Live in 24 Hours — Prestyj",
    description:
      "One brand isn't enough. Run a content swarm across your business, your personal brand, and niche accounts. Up to 7 platforms, 2,700+ posts/month, live in 24 hours.",
  },
  alternates: {
    canonical: PAGE_URL,
  },
};

export default function DoneForYouSocialMediaPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Prestyj Content Swarm — Done-For-You Social Media",
    description:
      "AI-powered done-for-you social media swarm running multiple accounts (brand, personal brand, and niche pages) across Instagram, Facebook, TikTok, YouTube, LinkedIn, Threads, and X. Live in 24 hours from account access. Up to 2,700+ posts/month with a volume guarantee.",
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
      "Multi-Account Social Media",
      "Personal Brand Management",
      "Multi-Platform Publishing",
      "Content Marketing Automation",
    ],
    areaServed: "United States",
    url: PAGE_URL,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "1997",
      highPrice: "4997",
      offerCount: "3",
      availability: "https://schema.org/InStock",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Content Swarm Plans",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Minimum Plan",
          price: "1997",
          priceCurrency: "USD",
          itemOffered: {
            "@type": "Service",
            name: "Minimum Plan — 1 account, 3 platforms, ~270 posts/month",
          },
        },
        {
          "@type": "Offer",
          name: "Pro Plan",
          price: "2997",
          priceCurrency: "USD",
          itemOffered: {
            "@type": "Service",
            name: "Pro Plan — 2 accounts, 5 platforms, ~900 posts/month",
          },
        },
        {
          "@type": "Offer",
          name: "Max Plan",
          price: "4997",
          priceCurrency: "USD",
          itemOffered: {
            "@type": "Service",
            name: "Max Plan — 3 accounts, 7 platforms, ~2,700 posts/month",
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
        <ContentEngineLiveAccounts />
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
