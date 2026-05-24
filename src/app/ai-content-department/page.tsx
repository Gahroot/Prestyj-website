import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { FAQJsonLd } from "@/components/seo/json-ld";
import { SafeJsonLd } from "@/components/seo/safe-json-ld";
import { replaceAHireConfig } from "@/lib/content-engine/replace-a-hire-config";
import { AIContentDepartmentClient } from "./ai-content-department-client";

const PAGE_URL = "https://prestyj.com/ai-content-department";
const PAGE_TITLE = "AI Content Department — Done-For-You Social Media on Autopilot";
const PAGE_DESCRIPTION =
  "Prestyj AI Content Department is done-for-you social media on autopilot: 270–2,700 posts/month across up to 7 platforms, live in 24 hours, from $1,997/month.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "AI content department",
    "done-for-you social media",
    "managed social media service",
    "social media on autopilot",
    "AI social media management",
    "AI content generation service",
    "high volume social media posting",
    "social media agency alternative",
  ],
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    type: "website",
    url: PAGE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
  alternates: {
    canonical: PAGE_URL,
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${PAGE_URL}#service`,
  name: "Prestyj AI Content Department",
  alternateName: [
    "Done-For-You Social Media",
    "Managed Social Media Service",
    "Social Media on Autopilot",
    "AI Agent for Social Media",
    "AI Social Media Management",
  ],
  description: PAGE_DESCRIPTION,
  provider: {
    "@type": "Organization",
    name: "Prestyj",
    url: "https://prestyj.com",
    logo: "https://prestyj.com/icon-512.png",
  },
  serviceType: [
    "Done-For-You Social Media",
    "Managed Social Media Service",
    "AI Agent for Social Media",
    "AI Social Media Management",
    "Social Media on Autopilot",
    "AI Content Generation",
    "Content Marketing Automation",
    "Multi-Account Social Media",
    "High-Volume Social Media Posting",
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
    url: PAGE_URL,
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AI Content Department Plans",
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

export default function AIContentDepartmentPage() {
  return (
    <>
      <SafeJsonLd data={serviceJsonLd} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://prestyj.com" },
          { name: "AI Content Department", url: PAGE_URL },
        ]}
      />
      <FAQJsonLd faqs={replaceAHireConfig.faq.faqs} />
      <AIContentDepartmentClient />
    </>
  );
}
