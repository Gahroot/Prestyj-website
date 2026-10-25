import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { EditorialShell } from "@/components/layout/editorial-shell";
import { EditorialPageHeader } from "@/components/layout/editorial-page-header";
import {
  ConnectorClosing,
  ConnectorLinkList,
  ConnectorSection,
  ReferenceBuilds,
} from "@/components/sections/connectors/connector-blocks";
import { SafeJsonLd } from "@/components/seo/safe-json-ld";
import { Button } from "@/components/ui/button";
import { connectorGuidePath, connectorGuides } from "@/lib/connectors/guides";
import { connectorServicePath, connectorServices } from "@/lib/connectors/services";
import { connectorSystemPath, connectorSystems } from "@/lib/connectors/systems";
import { siteConfig } from "@/lib/site-config";

const title = "Custom Claude Connectors, MCP Servers, and ChatGPT Plugins";
const description =
  "Prestyj builds custom Claude connectors, custom MCP servers, and custom ChatGPT plugins for businesses, done for you: scoped, built, secured, hosted, and maintained.";
const url = `${siteConfig.url}/connectors`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "website", images: [siteConfig.ogImage] },
  twitter: { card: "summary_large_image", title, description, images: [siteConfig.ogImage] },
};

export default function ConnectorsHubPage() {
  return (
    <>
      <SafeJsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: title,
          description,
          url,
          publisher: { "@id": siteConfig.organizationId },
          hasPart: [
            ...connectorServices.map((service) => ({
              "@type": "WebPage",
              name: service.navLabel,
              url: `${siteConfig.url}${connectorServicePath(service.slug)}`,
            })),
            ...connectorSystems.map((system) => ({
              "@type": "WebPage",
              name: system.metaTitle,
              url: `${siteConfig.url}${connectorSystemPath(system.slug)}`,
            })),
            ...connectorGuides.map((guide) => ({
              "@type": "Article",
              headline: guide.title,
              url: `${siteConfig.url}${connectorGuidePath(guide.slug)}`,
            })),
          ],
        }}
      />
      <EditorialShell>
        <main id="main-content" className="editorial-inner pb-0!">
          <section className="pb-16">
            <div className="editorial-rail">
              <p className="editorial-eyebrow">AI connectors for business</p>
              <EditorialPageHeader title="Connect Claude and ChatGPT to the systems your business runs.">
                <p>
                  We build custom Claude connectors, MCP servers, and ChatGPT plugins for the
                  systems no off-the-shelf connector covers. Done for you: scoped around your
                  questions, secured with per-user access, hosted, and maintained.
                </p>
              </EditorialPageHeader>
              <div className="editorial-actions">
                <Button asChild>
                  <Link href="/book-demo">
                    Book a scoping call <ArrowUpRight aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          <ConnectorSection id="services-title" title="What we build" muted>
            <ConnectorLinkList
              links={connectorServices.map((service) => ({
                href: connectorServicePath(service.slug),
                label: service.navLabel,
                description: service.lede,
              }))}
            />
          </ConnectorSection>

          <ConnectorSection id="hub-systems-title" title="Connectors by system">
            <ConnectorLinkList
              links={connectorSystems.map((system) => ({
                href: connectorSystemPath(system.slug),
                label: `${system.name} connector for Claude and ChatGPT`,
                description: system.metaDescription,
              }))}
            />
          </ConnectorSection>

          <ReferenceBuilds headingId="hub-builds-title" />

          <ConnectorSection id="hub-guides-title" title="Guides">
            <ConnectorLinkList
              links={connectorGuides.map((guide) => ({
                href: connectorGuidePath(guide.slug),
                label: guide.title,
                description: guide.description,
              }))}
            />
          </ConnectorSection>

          <ConnectorClosing
            title="Start with the questions."
            body="Bring ten questions your team wants answered and the systems that hold the answers. We will come back with a written scope and a fixed price."
          />
        </main>
      </EditorialShell>
    </>
  );
}
