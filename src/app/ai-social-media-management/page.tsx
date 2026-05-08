import type { Metadata } from "next";
import { SafeJsonLd } from "@/components/seo/safe-json-ld";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { FAQJsonLd } from "@/components/seo/json-ld";
import { AISocialMediaManagementPageContent } from "@/components/sections/content-engine/ai-social-media-management-page-content";
import { aiSocialMediaManagementConfig } from "@/lib/content-engine/ai-social-media-management-config";

const PAGE_URL = "https://prestyj.com/ai-social-media-management";

export const metadata: Metadata = {
  title: "AI Social Media Management \u2014 Fully Autonomous, 7 Platforms | Prestyj",
  description:
    "AI social media management that actually runs itself. Creates, publishes, and optimizes content across Instagram, Facebook, TikTok, YouTube, LinkedIn, Threads, and X. Zero daily effort. From $1,997/mo.",
  keywords: [
    "AI social media management",
    "AI social media manager",
    "AI social media tools",
    "automated social media management",
    "AI social media automation",
    "social media management AI",
    "best AI social media management",
    "AI content management",
    "AI powered social media management",
    "social media management software AI",
    "fully automated social media",
    "AI social media marketing",
    "hands-off social media management",
    "done for you social media",
    "AI social media scheduler",
  ],
  openGraph: {
    title: "AI Social Media Management \u2014 Fully Autonomous, 7 Platforms | Prestyj",
    description:
      "AI social media management that creates, publishes, and optimizes content across 7 platforms. Zero daily effort. Live in 24 hours. From $1,997/mo.",
    type: "website",
    url: PAGE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Social Media Management \u2014 Fully Autonomous, 7 Platforms",
    description:
      "AI social media management that runs itself. Creates, publishes, and optimizes across 7 platforms. Zero effort. From $1,997/mo.",
  },
  alternates: {
    canonical: PAGE_URL,
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Prestyj AI Social Media Management",
  description:
    "Fully autonomous AI social media management service. Creates, publishes, and optimizes content across Instagram, Facebook, TikTok, YouTube, LinkedIn, Threads, and X. Zero daily effort required. Live in 24 hours. From $1,997/mo.",
  provider: {
    "@type": "Organization",
    name: "PRESTYJ",
    url: "https://prestyj.com",
    logo: "https://prestyj.com/icon-512.png",
  },
  serviceType: [
    "AI Social Media Management",
    "Social Media Management",
    "AI Content Generation",
    "Automated Social Media",
    "Content Marketing Automation",
    "Done-For-You Social Media",
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
    name: "AI Social Media Management Plans",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Minimum Plan",
        price: "1997",
        priceCurrency: "USD",
        itemOffered: {
          "@type": "Service",
          name: "Minimum Plan \u2014 1 account, 3 platforms, ~270 AI-managed posts/month",
        },
      },
      {
        "@type": "Offer",
        name: "Pro Plan",
        price: "2997",
        priceCurrency: "USD",
        itemOffered: {
          "@type": "Service",
          name: "Pro Plan \u2014 2 accounts, 5 platforms, ~900 AI-managed posts/month",
        },
      },
      {
        "@type": "Offer",
        name: "Max Plan",
        price: "4997",
        priceCurrency: "USD",
        itemOffered: {
          "@type": "Service",
          name: "Max Plan \u2014 3 accounts, 7 platforms, ~2,700 AI-managed posts/month",
        },
      },
    ],
  },
};

export default function AISocialMediaManagementPage() {
  return (
    <>
      <SafeJsonLd data={serviceJsonLd} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://prestyj.com" },
          {
            name: "AI Social Media Management",
            url: PAGE_URL,
          },
        ]}
      />
      <FAQJsonLd faqs={aiSocialMediaManagementConfig.faq.faqs} />
      <AISocialMediaManagementPageContent />
    </>
  );
}
