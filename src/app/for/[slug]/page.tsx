import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { AudiencePage } from "@/components/sections/institutional/audience-page";
import { SafeJsonLd } from "@/components/seo/safe-json-ld";
import { audiences, getAudience } from "@/lib/institutional/audiences";
import { siteConfig } from "@/lib/site-config";

export const dynamicParams = false;

export function generateStaticParams() {
  return audiences.map((audience) => ({ slug: audience.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const audience = getAudience(slug);
  if (!audience) return { title: "Audience not found" };

  const url = `${siteConfig.url}/for/${audience.slug}`;
  const title = audience.searchTitle;
  return {
    title,
    description: audience.description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: audience.description,
      url,
      type: "website",
      images: [siteConfig.ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: audience.description,
      images: [siteConfig.ogImage],
    },
  };
}

export default async function AudienceRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const audience = getAudience(slug);
  if (!audience) notFound();

  return (
    <>
      <SafeJsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: `AI agents for ${audience.navLabel}`,
          description: audience.description,
          url: `${siteConfig.url}/for/${audience.slug}`,
          provider: { "@id": `${siteConfig.url}/#organization` },
          audience: { "@type": "Audience", audienceType: audience.navLabel },
        }}
      />
      <AudiencePage audience={audience} />
    </>
  );
}
