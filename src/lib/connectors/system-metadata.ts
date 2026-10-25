import type { Metadata } from "next";

import type { ConnectorSystem } from "@/lib/connectors/systems";
import { connectorSystemPath } from "@/lib/connectors/systems";
import { siteConfig } from "@/lib/site-config";

export function connectorSystemMetadata(system: ConnectorSystem): Metadata {
  const url = `${siteConfig.url}${connectorSystemPath(system.slug)}`;
  const title = system.metaTitle;
  const description = system.metaDescription;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "website", images: [siteConfig.ogImage] },
    twitter: { card: "summary_large_image", title, description, images: [siteConfig.ogImage] },
  };
}

export function connectorSystemJsonLd(system: ConnectorSystem): Record<string, unknown>[] {
  const url = `${siteConfig.url}${connectorSystemPath(system.slug)}`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${url}#service`,
      name: `Custom ${system.name} connector for Claude and ChatGPT`,
      serviceType: `${system.name} MCP server`,
      description: system.metaDescription,
      url,
      provider: { "@id": siteConfig.organizationId },
      areaServed: "Worldwide",
      audience: { "@type": "BusinessAudience", audienceType: "Businesses" },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: system.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Connectors",
          item: `${siteConfig.url}/connectors`,
        },
        { "@type": "ListItem", position: 2, name: system.name, item: url },
      ],
    },
  ];
}
