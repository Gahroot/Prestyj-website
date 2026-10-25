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
  ReferenceBuilds,
} from "@/components/sections/connectors/connector-blocks";
import { Button } from "@/components/ui/button";
import { connectorGuidePath, getConnectorGuide } from "@/lib/connectors/guides";
import {
  connectorServicePath,
  getConnectorService,
  type ConnectorService,
} from "@/lib/connectors/services";
import { connectorSystemPath, connectorSystems } from "@/lib/connectors/systems";

export function ConnectorServicePage({ service }: { service: ConnectorService }): ReactElement {
  const guideLinks = service.guides.flatMap((slug) => {
    const guide = getConnectorGuide(slug);
    return guide
      ? [{ href: connectorGuidePath(slug), label: guide.title, description: guide.description }]
      : [];
  });
  const relatedLinks = service.related.map((slug) => {
    const related = getConnectorService(slug);
    return { href: connectorServicePath(slug), label: related.navLabel, description: related.lede };
  });

  return (
    <EditorialShell>
      <main id="main-content" className="editorial-inner pb-0!">
        <section className="pb-16 sm:pb-20">
          <div className="editorial-rail">
            <ConnectorBreadcrumb
              items={[{ label: "Connectors", href: "/connectors" }, { label: service.navLabel }]}
            />
            <div className="grid gap-12 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-start">
              <div>
                <p className="editorial-eyebrow">{service.eyebrow}</p>
                <EditorialPageHeader title={service.title}>
                  <p>{service.lede}</p>
                </EditorialPageHeader>
                <div className="editorial-actions">
                  <Button asChild>
                    <Link href="/book-demo">
                      Book a scoping call <ArrowUpRight aria-hidden="true" />
                    </Link>
                  </Button>
                  <a href="#how-we-build" className="editorial-text-link">
                    How we build it <ArrowRight size={15} aria-hidden="true" />
                  </a>
                </div>
              </div>
              <section aria-labelledby="deliverables-title" className="bg-background border p-6">
                <h2 id="deliverables-title" className="text-sm font-semibold">
                  What you get
                </h2>
                <ul className="mt-4 space-y-3 text-sm leading-6">
                  {service.deliverables.map((item) => (
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

        <ConnectorSection id="answer-title" title={service.answer.question} muted>
          <div className="editorial-reading max-w-3xl space-y-5 leading-8">
            {service.answer.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </ConnectorSection>

        <ConnectorSection id="use-cases-title" title="Where it pays off">
          <ul className="grid gap-8 sm:grid-cols-2">
            {service.useCases.map((useCase) => (
              <li key={useCase.title} className="border-t pt-5">
                <h3 className="text-base font-semibold">{useCase.title}</h3>
                <p className="text-muted-foreground mt-2 text-sm leading-6">{useCase.body}</p>
              </li>
            ))}
          </ul>
        </ConnectorSection>

        <div id="how-we-build" className="scroll-mt-24">
          <ConnectorSection id="process-title" title="How we build it" muted>
            <ol className="space-y-6">
              {service.process.map((step, index) => (
                <li key={step.title} className="grid grid-cols-[2.5rem_1fr] gap-4 border-t pt-5">
                  <span aria-hidden="true" className="text-muted-foreground font-mono text-sm">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold">{step.title}</h3>
                    <p className="text-muted-foreground mt-2 text-sm leading-6">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </ConnectorSection>
        </div>

        <ConnectorSection
          id="comparison-title"
          title={service.comparison.heading}
          intro={service.comparison.intro}
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
              <caption className="sr-only">{service.comparison.heading}</caption>
              <thead>
                <tr className="border-b">
                  <th scope="col" className="py-3 pr-4 font-medium">
                    <span className="sr-only">Criterion</span>
                  </th>
                  {service.comparison.columns.map((column) => (
                    <th key={column} scope="col" className="py-3 pr-4 font-semibold">
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {service.comparison.rows.map((row) => (
                  <tr key={row.label} className="border-b align-top">
                    <th scope="row" className="py-3 pr-4 font-medium">
                      {row.label}
                    </th>
                    {row.values.map((value, index) => (
                      <td
                        key={`${row.label}-${index}`}
                        className={`py-3 pr-4 ${index === 2 ? "" : "text-muted-foreground"}`}
                      >
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ConnectorSection>

        <ReferenceBuilds headingId="builds-title" />

        <ConnectorSection id="faq-title" title="Questions we get">
          <ConnectorFaqList faqs={service.faqs} />
        </ConnectorSection>

        <ConnectorSection id="guides-title" title="Read more" muted>
          <h3 className="mb-3 text-sm font-semibold">Guides</h3>
          <ConnectorLinkList links={guideLinks} />
          <h3 className="mt-10 mb-3 text-sm font-semibold">Related services</h3>
          <ConnectorLinkList links={relatedLinks} />
          <h3 className="mt-10 mb-3 text-sm font-semibold">Connectors by system</h3>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {connectorSystems.map((system) => (
              <li key={system.slug}>
                <Link
                  href={connectorSystemPath(system.slug)}
                  className="underline underline-offset-4 hover:no-underline"
                >
                  {system.name}
                </Link>
              </li>
            ))}
          </ul>
        </ConnectorSection>

        <ConnectorClosing
          title="Tell us what Claude or ChatGPT should know."
          body="Bring the questions your team asks and the systems that hold the answers. We will come back with a written scope, a timeline, and a fixed price."
        />
      </main>
    </EditorialShell>
  );
}
