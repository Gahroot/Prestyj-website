import type { ReactElement } from "react";
import { ArrowRight, Check, FileCheck2, ShieldCheck, UserCheck } from "lucide-react";

import {
  ControlList,
  OutcomeRecord,
  ProofRecord,
  PrototypeCta,
  PrototypeFooter,
  PrototypeNav,
  PrototypeRail,
  SectionIntro,
  SourceChain,
} from "@/components/layout-lab/prototype-primitives";
import { layoutLabContent, type LayoutRecipe } from "@/lib/layout-lab/layouts";

export function ConversionLayout({ recipe }: { recipe: LayoutRecipe }): ReactElement {
  switch (recipe.composition.variant) {
    case 1:
      return <QualifyFirst recipe={recipe} />;
    case 2:
      return <WorkSampleFirst recipe={recipe} />;
    case 3:
      return <ChooseWorkflow recipe={recipe} />;
    case 4:
      return <ControlRoom recipe={recipe} />;
  }
}

function ConversionHero({ recipe, title }: { recipe: LayoutRecipe; title: string }): ReactElement {
  return (
    <section className="border-b py-14 sm:py-20">
      <PrototypeRail className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div>
          <p className="text-primary text-sm font-semibold">Access path / {recipe.number}</p>
          <h1 className="font-heading mt-5 text-5xl font-bold tracking-tight text-balance lg:text-7xl">
            {title}
          </h1>
        </div>
        <p className="text-muted-foreground text-lg leading-8">
          {layoutLabContent.positioning.fullPitch}
        </p>
      </PrototypeRail>
    </section>
  );
}

function QualifyFirst({ recipe }: { recipe: LayoutRecipe }): ReactElement {
  const { audiences, capabilities, outcomes, proofRecords } = layoutLabContent;
  const capability = capabilities[recipe.featured.capability];

  return (
    <div id="top">
      <PrototypeNav />
      <main>
        <ConversionHero recipe={recipe} title="Confirm the fit before the access request." />
        <section id="work" className="border-b py-12 sm:py-16">
          <PrototypeRail>
            <h2 className="font-heading text-3xl font-bold">Who this is built for</h2>
            <div className="mt-8 grid border-t lg:grid-cols-3">
              {audiences.map((audience, index) => (
                <article key={audience.slug} className="border-b p-6 lg:border-r">
                  <p className="text-muted-foreground font-mono text-xs">0{index + 1}</p>
                  <h3 className="font-heading mt-5 text-2xl font-bold">{audience.navLabel}</h3>
                  <p className="text-muted-foreground mt-4 text-sm leading-6">
                    {audience.description}
                  </p>
                  <p className="mt-6 text-sm font-semibold">{audience.cta}</p>
                </article>
              ))}
            </div>
          </PrototypeRail>
        </section>
        <section className="border-b py-14 sm:py-20">
          <PrototypeRail>
            <SectionIntro
              title="The qualification record"
              body={capability.description}
              label={capability.navLabel}
            />
            <dl className="mt-8 grid border sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["Workflow", capability.asks[0]],
                ["Systems", capability.sources.join(", ")],
                ["Review owner", capability.review],
                ["Finished work", capability.outputs.join(", ")],
              ].map(([term, detail]) => (
                <div key={term} className="border-b p-5 sm:border-r">
                  <dt className="text-muted-foreground text-xs font-semibold uppercase">{term}</dt>
                  <dd className="mt-4 text-sm leading-6">{detail}</dd>
                </div>
              ))}
            </dl>
          </PrototypeRail>
        </section>
        <section id="proof" className="border-b py-14 sm:py-20">
          <PrototypeRail className="grid gap-10 lg:grid-cols-2">
            <OutcomeRecord
              outcome={outcomes[recipe.featured.outcome]}
              index={recipe.featured.outcome}
            />
            <div>
              <ProofRecord record={proofRecords[recipe.featured.proof]} />
              <div className="mt-8">
                <ControlList capability={capability} />
              </div>
            </div>
          </PrototypeRail>
        </section>
        <PrototypeCta prompt={audiences[0].cta} />
      </main>
      <PrototypeFooter />
    </div>
  );
}

function WorkSampleFirst({ recipe }: { recipe: LayoutRecipe }): ReactElement {
  const { capabilities, outcomes, proofRecords } = layoutLabContent;
  const capability = capabilities[recipe.featured.capability];
  const proof = proofRecords[recipe.featured.proof];

  return (
    <div id="top">
      <PrototypeNav />
      <main>
        <section id="work" className="border-b py-14 sm:py-20">
          <PrototypeRail>
            <p className="text-primary text-sm font-semibold">Work sample / {recipe.number}</p>
            <div className="mt-6 border">
              <div className="flex flex-col gap-4 border-b p-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-muted-foreground text-xs font-semibold tracking-wider uppercase">
                    {proof.stage}
                  </p>
                  <h1 className="font-heading mt-2 text-3xl font-bold">{proof.name}</h1>
                </div>
                <p className="text-primary text-sm font-semibold">Reviewed work product</p>
              </div>
              <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
                <div className="border-b p-6 lg:border-r lg:border-b-0">
                  <p className="text-muted-foreground text-sm">Delivered</p>
                  <p className="mt-4 text-lg leading-8">{proof.delivered}</p>
                  <div className="mt-8">
                    <SourceChain capability={capability} compact />
                  </div>
                </div>
                <aside className="p-6">
                  <p className="text-muted-foreground text-sm">Control anatomy</p>
                  <ul className="mt-5 space-y-4">
                    {proof.controls.map((control) => (
                      <li key={control} className="flex gap-3 border-b pb-4">
                        <FileCheck2 aria-hidden="true" className="text-primary size-5 shrink-0" />
                        <span>{control}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-muted-foreground mt-6 text-sm leading-6">
                    {capability.boundary}
                  </p>
                </aside>
              </div>
            </div>
          </PrototypeRail>
        </section>
        <section className="border-b py-16 sm:py-24">
          <PrototypeRail className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-primary text-sm font-semibold">How the work is controlled</p>
              <h2 className="font-heading mt-4 text-4xl font-bold tracking-tight lg:text-6xl">
                {capability.title}
              </h2>
              <p className="text-muted-foreground mt-5 max-w-2xl leading-7">
                {capability.description}
              </p>
            </div>
            <OutcomeRecord
              outcome={outcomes[recipe.featured.outcome]}
              index={recipe.featured.outcome}
            />
          </PrototypeRail>
        </section>
        <section id="proof" className="border-b py-14 sm:py-20">
          <PrototypeRail>
            <SectionIntro title="The proof is the record itself." body={capability.review} />
            <div className="mt-8">
              <ControlList capability={capability} />
            </div>
          </PrototypeRail>
        </section>
        <PrototypeCta />
      </main>
      <PrototypeFooter />
    </div>
  );
}

function ChooseWorkflow({ recipe }: { recipe: LayoutRecipe }): ReactElement {
  const { capabilities, outcomes, proofRecords } = layoutLabContent;
  const capability = capabilities[recipe.featured.capability];

  return (
    <div id="top">
      <PrototypeNav />
      <main>
        <ConversionHero recipe={recipe} title="Choose the recurring workflow first." />
        <section id="work" className="border-b py-12 sm:py-16">
          <PrototypeRail>
            <h2 className="sr-only">Choose a workflow</h2>
            <div className="grid border-t lg:grid-cols-5">
              {capabilities.slice(0, 5).map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.slug}
                    href="#access"
                    className="hover:border-primary focus-visible:ring-ring group border-b p-6 transition-colors focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:outline-none motion-reduce:transition-none lg:border-r"
                  >
                    <span className="text-muted-foreground font-mono text-xs">0{index + 1}</span>
                    <Icon aria-hidden="true" className="mt-8 size-5" />
                    <h3 className="font-heading mt-4 text-xl font-bold">{item.navLabel}</h3>
                    <p className="text-muted-foreground mt-4 text-sm leading-6">{item.title}</p>
                    <span className="text-primary mt-6 inline-flex items-center gap-2 text-sm font-semibold">
                      Scope this work <ArrowRight aria-hidden="true" className="size-4" />
                    </span>
                  </a>
                );
              })}
            </div>
          </PrototypeRail>
        </section>
        <section className="border-b py-14 sm:py-20">
          <PrototypeRail>
            <SectionIntro
              title={capability.title}
              body={capability.description}
              label="Workflow anatomy"
            />
            <div className="mt-8">
              <SourceChain capability={capability} />
            </div>
          </PrototypeRail>
        </section>
        <section id="proof" className="border-b py-14 sm:py-20">
          <PrototypeRail className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <OutcomeRecord
              outcome={outcomes[recipe.featured.outcome]}
              index={recipe.featured.outcome}
            />
            <div>
              <ProofRecord record={proofRecords[recipe.featured.proof]} />
              <div className="mt-8">
                <ControlList capability={capability} />
              </div>
            </div>
          </PrototypeRail>
        </section>
        <PrototypeCta />
      </main>
      <PrototypeFooter />
    </div>
  );
}

function ControlRoom({ recipe }: { recipe: LayoutRecipe }): ReactElement {
  const { capabilities, outcomes, proofRecords } = layoutLabContent;
  const capability = capabilities[recipe.featured.capability];
  const controls = [
    { label: "Source boundary", body: capability.boundary, icon: ShieldCheck },
    { label: "Review owner", body: capability.review, icon: UserCheck },
    { label: "Release record", body: capability.outputs.join(", "), icon: FileCheck2 },
  ] as const;

  return (
    <div id="top">
      <PrototypeNav />
      <main>
        <section className="border-b py-14 sm:py-20">
          <PrototypeRail>
            <p className="text-primary text-sm font-semibold">Control room / {recipe.number}</p>
            <h1 className="font-heading mt-5 max-w-6xl text-5xl font-bold tracking-tight lg:text-7xl">
              Review rules lead. Capabilities support them.
            </h1>
            <p className="text-muted-foreground mt-6 max-w-3xl text-lg leading-8">
              {layoutLabContent.positioning.fullPitch}
            </p>
          </PrototypeRail>
        </section>
        <section id="work" className="border-b py-12 sm:py-16">
          <PrototypeRail>
            <h2 className="sr-only">Control rules</h2>
            <div className="grid border lg:grid-cols-3">
              {controls.map((control, index) => {
                const Icon = control.icon;
                return (
                  <article key={control.label} className="border-b p-7 lg:border-r lg:border-b-0">
                    <div className="flex items-center justify-between gap-4">
                      <Icon aria-hidden="true" className="text-primary size-5" />
                      <span className="text-muted-foreground font-mono text-xs">0{index + 1}</span>
                    </div>
                    <h2 className="font-heading mt-8 text-2xl font-bold">{control.label}</h2>
                    <p className="text-muted-foreground mt-4 text-sm leading-6">{control.body}</p>
                  </article>
                );
              })}
            </div>
            <div className="mt-10">
              <SourceChain capability={capability} compact />
            </div>
          </PrototypeRail>
        </section>
        <section className="border-b py-14 sm:py-20">
          <PrototypeRail>
            <SectionIntro title="Capabilities inside the boundary" body={capability.description} />
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {capability.actions.map((action) => (
                <li key={action} className="flex gap-3 border-t pt-4">
                  <Check aria-hidden="true" className="text-primary size-4 shrink-0" />
                  <span>{action}</span>
                </li>
              ))}
            </ul>
          </PrototypeRail>
        </section>
        <section id="proof" className="border-b py-14 sm:py-20">
          <PrototypeRail className="grid gap-10 lg:grid-cols-2">
            <ProofRecord record={proofRecords[recipe.featured.proof]} />
            <OutcomeRecord
              outcome={outcomes[recipe.featured.outcome]}
              index={recipe.featured.outcome}
            />
          </PrototypeRail>
        </section>
        <PrototypeCta />
      </main>
      <PrototypeFooter />
    </div>
  );
}
