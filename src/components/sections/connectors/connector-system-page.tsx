import Link from "next/link";
import type { ReactElement } from "react";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";

import { EditorialShell } from "@/components/layout/editorial-shell";
import { EditorialPageHeader } from "@/components/layout/editorial-page-header";
import {
  ConnectorBreadcrumb,
  ConnectorClosing,
  ConnectorFaqList,
  ConnectorLinkList,
  ConnectorSection,
} from "@/components/sections/connectors/connector-blocks";
import { Button } from "@/components/ui/button";
import { connectorServicePath, connectorServices } from "@/lib/connectors/services";
import {
  connectorSystemPath,
  connectorSystems,
  connectorSystemsVerified,
  type ConnectorSystem,
} from "@/lib/connectors/systems";

export function ConnectorSystemPage({ system }: { system: ConnectorSystem }): ReactElement {
  const services = [
    ...system.related.flatMap((slug) => connectorServices.filter((s) => s.slug === slug)),
    ...connectorServices.filter((s) => !system.related.includes(s.slug)),
  ];
  const otherSystems = connectorSystems.filter(
    (item) => item.slug !== system.slug && item.category === system.category,
  );

  return (
    <EditorialShell>
      <main id="main-content" className="editorial-inner pb-0!">
        <section className="pb-16 sm:pb-20">
          <div className="editorial-rail">
            <ConnectorBreadcrumb
              items={[{ label: "Connectors", href: "/connectors" }, { label: system.name }]}
            />
            <div className="grid gap-12 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-start">
              <div>
                <p className="editorial-eyebrow">{system.category} connector</p>
                <EditorialPageHeader title={system.title}>
                  <p>{system.lede}</p>
                </EditorialPageHeader>
                <div className="editorial-actions">
                  <Button asChild>
                    <Link href="/book-demo">
                      Book a scoping call <ArrowUpRight aria-hidden="true" />
                    </Link>
                  </Button>
                  <a href="#how-we-build" className="editorial-text-link">
                    How we would build it <ArrowRight size={15} aria-hidden="true" />
                  </a>
                </div>
              </div>
              <section aria-labelledby="questions-title" className="bg-background border p-6">
                <h2 id="questions-title" className="text-sm font-semibold">
                  What your team could ask
                </h2>
                <ul className="mt-4 space-y-3 text-sm leading-6">
                  {system.questions.map((item) => (
                    <li key={item} className="flex gap-3">
                      <Check size={16} aria-hidden="true" className="mt-1 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </section>

        <ConnectorSection
          id="actions-title"
          title="What it could do, with approval"
          intro="Write actions are optional. Each one is shown to a person before it changes anything."
          muted
        >
          <ul className="list-disc space-y-3 pl-5 leading-7">
            {system.actions.map((action) => (
              <li key={action}>{action}</li>
            ))}
          </ul>
        </ConnectorSection>

        <ConnectorSection
          id="existing-title"
          title={`What already exists for ${system.name}`}
          intro={`Checked against vendor and platform sources on ${formatDate(connectorSystemsVerified)}. If an official option covers your need, use it.`}
        >
          <div className="editorial-reading max-w-3xl leading-8">
            <p>{system.existing.summary}</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 leading-7">
              {system.existing.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </ConnectorSection>

        <ConnectorSection id="why-custom-title" title="Why build a custom one" muted>
          <ul className="grid gap-8 sm:grid-cols-2">
            {system.whyCustom.map((point) => (
              <li key={point.title} className="border-t pt-5">
                <h3 className="text-base font-semibold">{point.title}</h3>
                <p className="text-muted-foreground mt-2 text-sm leading-6">{point.body}</p>
              </li>
            ))}
          </ul>
        </ConnectorSection>

        <div id="how-we-build" className="scroll-mt-24">
          <ConnectorSection id="build-title" title="How we would build it">
            <dl className="grid gap-6 border-t pt-5 text-sm leading-6 sm:grid-cols-2">
              <div>
                <dt className="font-semibold">API</dt>
                <dd className="text-muted-foreground mt-1">{system.build.api}</dd>
              </div>
              <div>
                <dt className="font-semibold">Sign-in</dt>
                <dd className="text-muted-foreground mt-1">{system.build.auth}</dd>
              </div>
            </dl>
            <ol className="mt-8 space-y-6">
              {system.build.steps.map((step, index) => (
                <li key={step} className="grid grid-cols-[2.5rem_1fr] gap-4 border-t pt-5">
                  <span aria-hidden="true" className="text-muted-foreground font-mono text-sm">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm leading-6">{step}</p>
                </li>
              ))}
            </ol>
          </ConnectorSection>
        </div>

        <ConnectorSection id="faq-title" title="Questions we get" muted>
          <ConnectorFaqList faqs={system.faqs} />
        </ConnectorSection>

        <ConnectorSection id="sources-title" title="Sources">
          <ul className="text-muted-foreground space-y-2 text-sm leading-6">
            {system.sources.map((source) => (
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
            Vendor products and plan rules change often. Check the linked pages before you plan a
            rollout.
          </p>
        </ConnectorSection>

        <ConnectorSection id="services-title" title="Have us build it" muted>
          <ConnectorLinkList
            links={services.map((service) => ({
              href: connectorServicePath(service.slug),
              label: service.navLabel,
              description: service.metaDescription,
            }))}
          />
          {otherSystems.length > 0 && (
            <>
              <h3 className="mt-10 mb-3 text-sm font-semibold">Related systems</h3>
              <ConnectorLinkList
                links={otherSystems.map((item) => ({
                  href: connectorSystemPath(item.slug),
                  label: `${item.name} connector`,
                }))}
              />
            </>
          )}
          <p className="mt-8 text-sm">
            <Link href="/connectors" className="editorial-text-link">
              All connector services <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </p>
        </ConnectorSection>

        <ConnectorClosing
          title={`Want a ${system.name} connector built for your team?`}
          body="Bring the questions your team asks and the systems behind them. We will come back with a written scope and a fixed price."
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
