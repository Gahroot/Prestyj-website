import type { Metadata } from "next";

import type { ConnectorGuide } from "@/lib/connectors/guides";
import { connectorGuidePath } from "@/lib/connectors/guides";
import type { ConnectorService } from "@/lib/connectors/services";
import { connectorServicePath } from "@/lib/connectors/services";
import { siteConfig } from "@/lib/site-config";

function pageMetadata(
  path: string,
  title: string,
  description: string,
  type: "website" | "article",
): Metadata {
  const url = `${siteConfig.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type, images: [siteConfig.ogImage] },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.ogImage],
    },
  };
}

export function connectorServiceMetadata(service: ConnectorService): Metadata {
  return pageMetadata(
    connectorServicePath(service.slug),
    service.metaTitle,
    service.metaDescription,
    "website",
  );
}

export function connectorGuideMetadata(guide: ConnectorGuide): Metadata {
  return pageMetadata(
    connectorGuidePath(guide.slug),
    guide.metaTitle,
    guide.description,
    "article",
  );
}

export function connectorServiceJsonLd(service: ConnectorService): Record<string, unknown>[] {
  const url = `${siteConfig.url}${connectorServicePath(service.slug)}`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${url}#service`,
      name: service.navLabel,
      serviceType: service.primaryKeyword,
      description: service.metaDescription,
      url,
      provider: { "@id": siteConfig.organizationId },
      areaServed: "Worldwide",
      audience: { "@type": "BusinessAudience", audienceType: "Businesses" },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: service.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
    breadcrumbJsonLd([
      { name: "Connectors", url: `${siteConfig.url}/connectors` },
      { name: service.navLabel, url },
    ]),
  ];
}

export function connectorGuideJsonLd(guide: ConnectorGuide): Record<string, unknown>[] {
  const url = `${siteConfig.url}${connectorGuidePath(guide.slug)}`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: guide.title,
      description: guide.description,
      url,
      mainEntityOfPage: url,
      datePublished: guide.published,
      dateModified: guide.modified,
      author: { "@id": siteConfig.organizationId },
      publisher: { "@id": siteConfig.organizationId },
      image: siteConfig.ogImage,
    },
    breadcrumbJsonLd([
      { name: "Connectors", url: `${siteConfig.url}/connectors` },
      { name: guide.metaTitle, url },
    ]),
  ];
}

function breadcrumbJsonLd(items: { name: string; url: string }[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
