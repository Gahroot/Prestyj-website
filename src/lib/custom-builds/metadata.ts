import type { Metadata } from "next";

import {
  customBuildPath,
  customBuildHubSlug,
  getCustomBuild,
  type CustomBuild,
} from "@/lib/custom-builds/services";
import { siteConfig } from "@/lib/site-config";

export function customBuildMetadata(build: CustomBuild): Metadata {
  const url = `${siteConfig.url}${customBuildPath(build.slug)}`;
  const title = build.metaTitle;
  const description = build.metaDescription;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "website", images: [siteConfig.ogImage] },
    twitter: { card: "summary_large_image", title, description, images: [siteConfig.ogImage] },
  };
}

export function customBuildJsonLd(build: CustomBuild): Record<string, unknown>[] {
  const url = `${siteConfig.url}${customBuildPath(build.slug)}`;
  const hub = getCustomBuild(customBuildHubSlug);
  const crumbs = [
    { name: "Home", url: siteConfig.url },
    ...(build.slug === hub.slug
      ? []
      : [{ name: hub.navLabel, url: `${siteConfig.url}${customBuildPath(hub.slug)}` }]),
    { name: build.navLabel, url },
  ];
  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${url}#service`,
      name: build.navLabel,
      serviceType: build.primaryKeyword,
      description: build.metaDescription,
      url,
      provider: { "@id": siteConfig.organizationId },
      areaServed: "Worldwide",
      audience: { "@type": "BusinessAudience", audienceType: "Businesses" },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: build.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: crumbs.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: item.url,
      })),
    },
  ];
}
