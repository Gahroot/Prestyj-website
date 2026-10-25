import type { ReactElement } from "react";

import { EditorialShell } from "@/components/layout/editorial-shell";
import { EditorialPageHeader } from "@/components/layout/editorial-page-header";
import {
  ConnectorBreadcrumb,
  ConnectorClosing,
  ConnectorLinkList,
} from "@/components/sections/connectors/connector-blocks";
import { connectorGuidePath, connectorGuides, type ConnectorGuide } from "@/lib/connectors/guides";
import { connectorServicePath, connectorServices } from "@/lib/connectors/services";

export function ConnectorGuidePage({ guide }: { guide: ConnectorGuide }): ReactElement {
  const services = connectorServices.filter((service) => service.guides.includes(guide.slug));
  const otherGuides = connectorGuides.filter((item) => item.slug !== guide.slug);

  return (
    <EditorialShell>
      <main id="main-content" className="editorial-inner pb-0!">
        <article>
          <div className="editorial-rail">
            <ConnectorBreadcrumb
              items={[{ label: "Connectors", href: "/connectors" }, { label: "Guide" }]}
            />
            <EditorialPageHeader title={guide.title}>
              <p>{guide.description}</p>
            </EditorialPageHeader>
            <p className="text-muted-foreground mt-4 text-sm">
              Updated <time dateTime={guide.modified}>{formatDate(guide.modified)}</time>
            </p>

            <aside
              aria-labelledby="summary-title"
              className="bg-muted/40 mt-10 max-w-3xl border p-6"
            >
              <h2 id="summary-title" className="text-sm font-semibold">
                In short
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 leading-7">
                {guide.summary.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </aside>

            <div className="editorial-reading mt-12 max-w-3xl pb-16">
              {guide.sections.map((section) => (
                <section key={section.heading} className="mt-12 first:mt-0">
                  <h2 className="font-heading text-2xl font-bold tracking-tight">
                    {section.heading}
                  </h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="mt-4 leading-8">
                      {paragraph}
                    </p>
                  ))}
                  {section.bullets && (
                    <ul className="mt-4 list-disc space-y-3 pl-5 leading-7">
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}

              <section className="mt-12 border-t pt-8">
                <h2 className="font-heading text-xl font-bold">Sources</h2>
                <ul className="text-muted-foreground mt-4 space-y-2 text-sm leading-6">
                  {guide.sources.map((source) => (
                    <li key={source.url}>
                      <a
                        href={source.url}
                        className="underline underline-offset-4"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {source.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground mt-4 text-sm leading-6">
                  Plan rules and product names from Anthropic and OpenAI change often. Check the
                  linked documentation for your plan before you plan a rollout.
                </p>
              </section>
            </div>
          </div>
        </article>

        <section aria-labelledby="guide-services" className="bg-muted/40 border-t py-16">
          <div className="editorial-rail grid gap-10 lg:grid-cols-2">
            <div>
              <h2 id="guide-services" className="font-heading text-2xl font-bold tracking-tight">
                Have us build it
              </h2>
              <div className="mt-6">
                <ConnectorLinkList
                  links={services.map((service) => ({
                    href: connectorServicePath(service.slug),
                    label: service.navLabel,
                    description: service.metaDescription,
                  }))}
                />
              </div>
            </div>
            <div>
              <h2 className="font-heading text-2xl font-bold tracking-tight">More guides</h2>
              <div className="mt-6">
                <ConnectorLinkList
                  links={otherGuides.map((item) => ({
                    href: connectorGuidePath(item.slug),
                    label: item.title,
                  }))}
                />
              </div>
            </div>
          </div>
        </section>

        <ConnectorClosing
          title="Want this built for your systems?"
          body="Tell us which systems Claude or ChatGPT should reach and who should see what. We will scope it in writing."
        />
      </main>
    </EditorialShell>
  );
}

function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
