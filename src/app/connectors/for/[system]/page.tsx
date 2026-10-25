import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ConnectorSystemPage } from "@/components/sections/connectors/connector-system-page";
import { SafeJsonLd } from "@/components/seo/safe-json-ld";
import { connectorSystemJsonLd, connectorSystemMetadata } from "@/lib/connectors/system-metadata";
import { connectorSystems, getConnectorSystem } from "@/lib/connectors/systems";

export const dynamicParams = false;

export function generateStaticParams() {
  return connectorSystems.map((system) => ({ system: system.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ system: string }>;
}): Promise<Metadata> {
  const { system: slug } = await params;
  const system = getConnectorSystem(slug);
  return system ? connectorSystemMetadata(system) : { title: "Connector not found" };
}

export default async function ConnectorSystemRoute({
  params,
}: {
  params: Promise<{ system: string }>;
}) {
  const { system: slug } = await params;
  const system = getConnectorSystem(slug);
  if (!system) notFound();

  return (
    <>
      {connectorSystemJsonLd(system).map((data, index) => (
        <SafeJsonLd key={index} data={data} />
      ))}
      <ConnectorSystemPage system={system} />
    </>
  );
}
