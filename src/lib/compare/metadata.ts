import type { Metadata } from "next";
import type { CompareMetadata } from "./types";
import { siteConfig } from "@/lib/site-config";

export function generateCompareMetadata(config: CompareMetadata): Metadata {
  const { slug, competitorName, title, description, keywords } = config;
  const canonicalUrl = `${siteConfig.url}/compare/${slug}`;

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "Prestyj",
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: `Prestyj vs ${competitorName}`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.ogImage],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}
