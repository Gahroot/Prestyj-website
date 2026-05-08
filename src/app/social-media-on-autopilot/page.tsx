import type { Metadata } from "next";
import { SafeJsonLd } from "@/components/seo/safe-json-ld";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { FAQJsonLd } from "@/components/seo/json-ld";
import { AutopilotPageContent } from "@/components/sections/content-engine/autopilot-page-content";
import { autopilotContentEngineConfig } from "@/lib/content-engine/autopilot-config";

const PAGE_URL = "https://prestyj.com/social-media-on-autopilot";

export const metadata: Metadata = {
  title:
    "Social Media On Autopilot \u2014 You Never Open The App Again | Prestyj",
  description:
    "Fully hands-off social media management. No creating, scheduling, approving, or posting. The AI engine writes, designs, publishes, and optimizes across 7 platforms. From $1,997/mo.",
  keywords: [
    "social media on autopilot",
    "hands-off social media",
    "automated social media management",
    "zero-touch social media",
    "social media automation",
    "AI social media management",
    "done for you social media",
    "hands-free social media",
    "automatic social media posting",
    "social media without lifting a finger",
    "set it and forget it social media",
    "passive social media management",
    "AI content engine",
    "fully automated social media",
    "social media management service",
  ],
  openGraph: {
    title:
      "Social Media On Autopilot \u2014 You Never Open The App Again | Prestyj",
    description:
      "Fully hands-off social media management. No creating, scheduling, approving, or posting. AI writes, designs, publishes across 7 platforms. From $1,997/mo.",
    type: "website",
    url: PAGE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Social Media On Autopilot \u2014 You Never Open The App Again",
    description:
      "Fully hands-off social media. No creating, scheduling, or approving. AI handles everything across 7 platforms. From $1,997/mo.",
  },
  alternates: {
    canonical: PAGE_URL,
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Prestyj Autopilot \u2014 Social Media On Autopilot",
  description:
    "Fully hands-off social media management powered by AI. Zero-touch content creation, scheduling, publishing, and optimization across Instagram, Facebook, TikTok, YouTube, LinkedIn, Threads, and X. Live in 24 hours. From $1,997/mo.",
  provider: {
    "@type": "Organization",
    name: "PRESTYJ",
    url: "https://prestyj.com",
    logo: "https://prestyj.com/icon-512.png",
  },
  serviceType: [
    "Social Media Management",
    "AI Content Generation",
    "Automated Social Media",
    "Hands-Off Social Media",
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
    name: "Autopilot Content Plans",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Minimum Plan",
        price: "1997",
        priceCurrency: "USD",
        itemOffered: {
          "@type": "Service",
          name: "Minimum Plan \u2014 1 account, 3 platforms, ~270 posts/month on autopilot",
        },
      },
      {
        "@type": "Offer",
        name: "Pro Plan",
        price: "2997",
        priceCurrency: "USD",
        itemOffered: {
          "@type": "Service",
          name: "Pro Plan \u2014 2 accounts, 5 platforms, ~900 posts/month on autopilot",
        },
      },
      {
        "@type": "Offer",
        name: "Max Plan",
        price: "4997",
        priceCurrency: "USD",
        itemOffered: {
          "@type": "Service",
          name: "Max Plan \u2014 3 accounts, 7 platforms, ~2,700 posts/month on autopilot",
        },
      },
    ],
  },
};

export default function SocialMediaOnAutopilotPage() {
  return (
    <>
      <SafeJsonLd data={serviceJsonLd} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://prestyj.com" },
          {
            name: "Social Media On Autopilot",
            url: PAGE_URL,
          },
        ]}
      />
      <FAQJsonLd faqs={autopilotContentEngineConfig.faq.faqs} />
      <AutopilotPageContent />
    </>
  );
}
