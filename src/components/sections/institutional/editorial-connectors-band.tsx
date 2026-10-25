import Link from "next/link";
import { ArrowUpRight, Cable } from "lucide-react";
import type { ReactElement } from "react";

import { Button } from "@/components/ui/button";
import { connectorServicePath, connectorServices } from "@/lib/connectors/services";

/** Homepage band for the second offer: custom connectors and MCP servers for any business. */
export function EditorialConnectorsBand(): ReactElement {
  return (
    <section className="editorial-voice-section" aria-labelledby="connectors-band-title">
      <div className="editorial-rail editorial-voice-layout">
        <div className="editorial-voice-label">
          <Cable size={26} strokeWidth={1.4} aria-hidden="true" />
          <span>Connectors and MCP servers</span>
        </div>
        <div>
          <h2 id="connectors-band-title">
            Custom Claude connectors and ChatGPT plugins for your business systems.
          </h2>
          <p>
            We also build, host, and maintain custom MCP servers for any business, so Claude and
            ChatGPT can answer from your ERP, database, or internal API with each person&apos;s own
            permissions.
          </p>
          <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-xs">
            {connectorServices.map((service) => (
              <li key={service.slug}>
                <Link
                  href={connectorServicePath(service.slug)}
                  className="underline underline-offset-4 hover:no-underline"
                >
                  {service.navLabel}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Button asChild variant="outline">
          <Link href="/connectors">
            See connector work <ArrowUpRight aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
