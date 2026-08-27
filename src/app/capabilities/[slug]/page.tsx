import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CapabilityPage } from "@/components/sections/institutional/capability-page";
import { SafeJsonLd } from "@/components/seo/safe-json-ld";
import { capabilities, getCapability } from "@/lib/institutional/capabilities";
import { siteConfig } from "@/lib/site-config";

export const dynamicParams = false;

export function generateStaticParams() {
  return capabilities.map((capability) => ({ slug: capability.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const capability = getCapability(slug);
  if (!capability) return { title: "Capability not found" };

  const url = `${siteConfig.url}/capabilities/${capability.slug}`;
  return {
    title: `${capability.navLabel} | Prestyj`,
    description: capability.description,
    alternates: { canonical: url },
    openGraph: {
      title: capability.title,
      description: capability.description,
      url,
      type: "website",
    },
  };
}

export default async function CapabilityRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const capability = getCapability(slug);
  if (!capability) notFound();

  return (
    <>
      <SafeJsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: `${capability.navLabel} AI agents`,
          description: capability.description,
          url: `${siteConfig.url}/capabilities/${capability.slug}`,
          provider: { "@id": `${siteConfig.url}/#organization` },
          audience: {
            "@type": "Audience",
            audienceType: "Institutional real estate firms",
          },
        }}
      />
      <CapabilityPage capability={capability} />
    </>
  );
}
