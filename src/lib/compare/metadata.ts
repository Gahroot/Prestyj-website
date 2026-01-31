import type { Metadata } from "next";
import type { CompareMetadata } from "./types";

export function generateCompareMetadata(config: CompareMetadata): Metadata {
  const { slug, competitorName, title, description, keywords } = config;
  const canonicalUrl = `https://prestyj.com/compare/${slug}`;

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "PrestyJ",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `PrestyJ vs ${competitorName}`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.png"],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}
