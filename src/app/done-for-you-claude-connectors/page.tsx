import type { Metadata } from "next";

import { ConnectorServicePage } from "@/components/sections/connectors/connector-service-page";
import { SafeJsonLd } from "@/components/seo/safe-json-ld";
import { connectorServiceJsonLd, connectorServiceMetadata } from "@/lib/connectors/metadata";
import { getConnectorService } from "@/lib/connectors/services";

const service = getConnectorService("done-for-you-claude-connectors");

export const metadata: Metadata = connectorServiceMetadata(service);

export default function Page() {
  return (
    <>
      {connectorServiceJsonLd(service).map((data, index) => (
        <SafeJsonLd key={index} data={data} />
      ))}
      <ConnectorServicePage service={service} />
    </>
  );
}
