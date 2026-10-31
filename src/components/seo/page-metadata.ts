import type { Metadata } from "next";

import { siteConfig } from "@/lib/site-config";

type PageMetadataInput = {
  /** Page title without the brand; the root layout template appends "| Prestyj" once. */
  title: string;
  description: string;
  /** Site path, e.g. "/pricing". */
  path: string;
};

/**
 * Canonical, Open Graph and Twitter metadata for a static page, so social previews
 * never inherit the homepage title and description.
 */
export function pageMetadata({ title, description, path }: PageMetadataInput): Metadata {
  const url = `${siteConfig.url}${path}`;
  const socialTitle = `${title} | ${siteConfig.name}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: socialTitle,
      description,
      url,
      type: "website",
      images: [siteConfig.ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [siteConfig.ogImage],
    },
  };
}
