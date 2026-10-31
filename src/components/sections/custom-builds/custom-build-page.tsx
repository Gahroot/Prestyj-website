import Link from "next/link";
import type { ReactElement } from "react";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";

import { EditorialShell } from "@/components/layout/editorial-shell";
import { EditorialPageHeader } from "@/components/layout/editorial-page-header";
import {
  ConnectorBreadcrumb,
  ConnectorFaqList,
  ConnectorLinkList,
  ConnectorSection,
} from "@/components/sections/connectors/connector-blocks";
import { Button } from "@/components/ui/button";
import { ctaDataProps } from "@/lib/attribution/cta";
import { referenceBuildStage, referenceBuilds } from "@/lib/connectors/reference-builds";
import { connectorServicePath, getConnectorService } from "@/lib/connectors/services";
import {
  customBuildCtaHref,
  customBuildHubSlug,
  customBuildPath,
  getCustomBuild,
  type CustomBuild,
} from "@/lib/custom-builds/services";
import { buildControls, buildEngagementSteps, openSourceProof } from "@/lib/custom-builds/shared";

function PointList({ points }: { points: readonly { title: string; body: string }[] }) {
  return (
    <ul className="grid gap-8 sm:grid-cols-2">
      {points.map((point) => (
        <li key={point.title} className="border-t pt-5">
          <h3 className="text-base font-semibold">{point.title}</h3>
          <p className="text-muted-foreground mt-2 text-sm leading-6">{point.body}</p>
        </li>
      ))}
    </ul>
  );
}

export function CustomBuildPage({ build }: { build: CustomBuild }): ReactElement {
  const isHub = build.slug === customBuildHubSlug;
  const hub = getCustomBuild(customBuildHubSlug);
  const ctaHref = customBuildCtaHref(build.slug);
  const proof = referenceBuilds.filter((item) =>
    (build.proof as readonly string[]).includes(item.name),
  );
  const proofItems = [...proof, openSourceProof];
  const siblingLinks = build.related.map((slug) => {
    const related = getCustomBuild(slug);
    return { href: customBuildPath(slug), label: related.navLabel, description: related.lede };
  });
  const connectorLinks = build.connectors.map((slug) => {
    const service = getConnectorService(slug);
    return { href: connectorServicePath(slug), label: service.navLabel, description: service.lede };
  });

  return (
    <EditorialShell>
      <main id="main-content" className="editorial-inner pb-0!">
        <section className="pb-16 sm:pb-20">
          <div className="editorial-rail">
            <ConnectorBreadcrumb
              items={
                isHub
                  ? [{ label: "Home", href: "/" }, { label: build.navLabel }]
                  : [
                      { label: hub.navLabel, href: customBuildPath(hub.slug) },
                      { label: build.navLabel },
                    ]
              }
            />
            <div className="grid gap-12 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-start">
              <div>
                <p className="editorial-eyebrow">{build.eyebrow}</p>
                <EditorialPageHeader title={build.title}>
                  <p>{build.lede}</p>
                </EditorialPageHeader>
                <div className="editorial-actions">
                  <Button asChild>
                    <Link href={ctaHref} {...ctaDataProps(`custom-build-hero:${build.slug}`)}>
                      Book a scoping call <ArrowUpRight aria-hidden="true" />
                    </Link>
                  </Button>
                  <a href="#engagement" className="editorial-text-link">
                    How an engagement works <ArrowRight size={15} aria-hidden="true" />
                  </a>
                </div>
              </div>
              <section aria-labelledby="audience-title" className="bg-background border p-6">
                <h2 id="audience-title" className="text-sm font-semibold">
                  Who this is for
                </h2>
                <ul className="mt-4 space-y-3 text-sm leading-6">
                  {build.audience.map((item) => (
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
          id="examples-title"
          title="What we build"
          intro="Examples of what can be built. These describe the kind of system, not case studies or client results."
          muted
        >
          <PointList points={build.examples} />
        </ConnectorSection>

        <div id="engagement" className="scroll-mt-24">
          <ConnectorSection
            id="engagement-title"
            title="How an engagement works"
            intro="Every engagement is scoped per workflow, source systems, volume, and control requirements, and priced in writing after scoping."
          >
            <ol className="space-y-6">
              {buildEngagementSteps.map((step, index) => (
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
          id="controls-title"
          title="Controls built in"
          intro="The same controls apply to every agent we run."
          muted
        >
          <PointList points={buildControls} />
        </ConnectorSection>

        <ConnectorSection
          id="proof-title"
          title="Engineering we have shipped"
          intro={referenceBuildStage}
        >
          <ul className="grid gap-6 md:grid-cols-2">
            {proofItems.map((item) => (
              <li key={item.name} className="bg-background border p-6">
                <h3 className="text-base font-semibold">{item.name}</h3>
                <p className="text-muted-foreground mt-1 text-xs">{item.systems.join(" · ")}</p>
                <p className="mt-4 text-sm leading-6">{item.summary}</p>
                <ul className="text-muted-foreground mt-4 list-disc space-y-2 pl-5 text-sm leading-6">
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </ConnectorSection>

        <ConnectorSection id="faq-title" title="Questions buyers ask" muted>
          <ConnectorFaqList faqs={build.faqs} />
        </ConnectorSection>

        <ConnectorSection id="related-title" title="Related">
          {!isHub && (
            <>
              <h3 className="mb-3 text-sm font-semibold">Custom AI builds</h3>
              <ConnectorLinkList
                links={[
                  { href: customBuildPath(hub.slug), label: hub.navLabel, description: hub.lede },
                ]}
              />
            </>
          )}
          <h3 className={`mb-3 text-sm font-semibold ${isHub ? "" : "mt-10"}`}>
            {isHub ? "Agents by function" : "Related builds"}
          </h3>
          <ConnectorLinkList links={siblingLinks} />
          <h3 className="mt-10 mb-3 text-sm font-semibold">Connectors</h3>
          <ConnectorLinkList links={connectorLinks} />
          {isHub && (
            <>
              <h3 className="mt-10 mb-3 text-sm font-semibold">Institutional real estate</h3>
              <ConnectorLinkList
                links={[
                  {
                    href: "/platform",
                    label: "AI agents for institutional real estate",
                    description:
                      "Real estate funds, brokerages, and owner-operators: see the deal, fund, investor, and portfolio workflows we run.",
                  },
                ]}
              />
            </>
          )}
        </ConnectorSection>

        <section aria-labelledby="custom-build-next-step" className="border-t py-16 sm:py-20">
          <div className="editorial-rail flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2
                id="custom-build-next-step"
                className="font-heading max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl"
              >
                Bring one workflow and the systems it touches.
              </h2>
              <p className="text-muted-foreground mt-4 max-w-2xl leading-7">
                Tell us what the work is, where its data lives, how much of it there is, and who
                signs it off. We come back with a written scope.
              </p>
            </div>
            <Button size="lg" asChild>
              <Link href={ctaHref} {...ctaDataProps(`page-end:custom-build:${build.slug}`)}>
                Book a scoping call <ArrowUpRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </EditorialShell>
  );
}
