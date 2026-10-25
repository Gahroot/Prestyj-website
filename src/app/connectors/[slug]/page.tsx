import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ConnectorGuidePage } from "@/components/sections/connectors/connector-guide-page";
import { SafeJsonLd } from "@/components/seo/safe-json-ld";
import { connectorGuides, getConnectorGuide } from "@/lib/connectors/guides";
import { connectorGuideJsonLd, connectorGuideMetadata } from "@/lib/connectors/metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return connectorGuides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getConnectorGuide(slug);
  return guide ? connectorGuideMetadata(guide) : { title: "Guide not found" };
}

export default async function ConnectorGuideRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getConnectorGuide(slug);
  if (!guide) notFound();

  return (
    <>
      {connectorGuideJsonLd(guide).map((data, index) => (
        <SafeJsonLd key={index} data={data} />
      ))}
      <ConnectorGuidePage guide={guide} />
    </>
  );
}
