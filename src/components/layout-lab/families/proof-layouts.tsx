import type { ReactElement } from "react";
import { ArrowRight, Check, FileCheck2 } from "lucide-react";

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
  WorkRow,
} from "@/components/layout-lab/prototype-primitives";
import { layoutLabContent, type LayoutRecipe } from "@/lib/layout-lab/layouts";

export function ProofLayout({ recipe }: { recipe: LayoutRecipe }): ReactElement {
  switch (recipe.composition.variant) {
    case 1:
      return <ProofBeforePromise recipe={recipe} />;
    case 2:
      return <OutcomeIndex recipe={recipe} />;
    case 3:
      return <BeforeAfter recipe={recipe} />;
    case 4:
      return <FieldNotes recipe={recipe} />;
  }
}

function ProofBeforePromise({ recipe }: { recipe: LayoutRecipe }): ReactElement {
  const { capabilities, outcomes, positioning, proofRecords } = layoutLabContent;
  const capability = capabilities[recipe.featured.capability];

  return (
    <div id="top">
      <PrototypeNav />
      <main>
        <section id="proof" className="border-b py-14 sm:py-20">
          <PrototypeRail>
            <div className="grid gap-8 border-b pb-10 lg:grid-cols-[0.7fr_1.3fr]">
              <div>
                <p className="text-primary text-sm font-semibold">Proof first / {recipe.number}</p>
                <h1 className="font-heading mt-5 text-5xl font-bold tracking-tight lg:text-7xl">
                  The work, before the promise.
                </h1>
              </div>
              <p className="text-muted-foreground max-w-2xl text-lg leading-8 lg:pt-10">
                Each record is anonymized and labeled by its actual delivery stage.
              </p>
            </div>
            <div>
              {proofRecords.slice(0, 3).map((record, index) => (
                <ProofRecord key={record.name} record={record} index={index} />
              ))}
            </div>
          </PrototypeRail>
        </section>
        <section className="border-b py-16 sm:py-24">
          <PrototypeRail className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
            <div>
              <p className="text-primary text-sm font-semibold">Position</p>
              <h2 className="font-heading mt-5 text-4xl font-bold tracking-tight lg:text-6xl">
                {positioning.coreOffer}
              </h2>
              <p className="text-muted-foreground mt-6 max-w-3xl text-lg leading-8">
                {positioning.fullPitch}
              </p>
            </div>
            <OutcomeRecord
              outcome={outcomes[recipe.featured.outcome]}
              index={recipe.featured.outcome}
            />
          </PrototypeRail>
        </section>
        <section id="work" className="border-b py-16 sm:py-20">
          <PrototypeRail>
            <SectionIntro
              title={capability.title}
              body={capability.description}
              label={capability.eyebrow}
            />
            <div className="mt-8">
              <SourceChain capability={capability} />
            </div>
            <div className="mt-10">
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

function OutcomeIndex({ recipe }: { recipe: LayoutRecipe }): ReactElement {
  const { capabilities, outcomes, proofRecords } = layoutLabContent;
  const capability = capabilities[recipe.featured.capability];

  return (
    <div id="top">
      <PrototypeNav />
      <main>
        <section className="border-b py-14 sm:py-20">
          <PrototypeRail className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="text-primary text-sm font-semibold">Outcome index / {recipe.number}</p>
              <h1 className="font-heading mt-5 text-5xl font-bold tracking-tight lg:text-7xl">
                Start with the work that needs to move.
              </h1>
            </div>
            <p className="text-muted-foreground text-lg leading-8">
              {layoutLabContent.positioning.fullPitch}
            </p>
          </PrototypeRail>
        </section>
        <section id="work" className="border-b py-12 sm:py-16">
          <PrototypeRail>
            <h2 className="sr-only">Outcomes</h2>
            <div className="grid border-t lg:grid-cols-3">
              {outcomes.slice(0, 6).map((outcome, index) => (
                <div
                  key={`${outcome.title}-${outcome.titleAccent}`}
                  className="border-b p-6 lg:border-r"
                >
                  <OutcomeRecord outcome={outcome} index={index} />
                </div>
              ))}
            </div>
          </PrototypeRail>
        </section>
        <section className="border-b py-14 sm:py-20">
          <PrototypeRail>
            <SectionIntro
              title="The implementation stays subordinate."
              body={capability.boundary}
            />
            <div className="mt-8">
              <SourceChain capability={capability} compact />
            </div>
          </PrototypeRail>
        </section>
        <section id="proof" className="border-b py-14 sm:py-20">
          <PrototypeRail className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <h2 className="font-heading text-3xl font-bold">Authentic delivery record</h2>
              <p className="text-muted-foreground mt-4 leading-7">{capability.review}</p>
            </div>
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

function BeforeAfter({ recipe }: { recipe: LayoutRecipe }): ReactElement {
  const { capabilities, outcomes, proofRecords } = layoutLabContent;
  const capability = capabilities[recipe.featured.capability];
  const outcome = outcomes[recipe.featured.outcome];

  return (
    <div id="top">
      <PrototypeNav />
      <main>
        <section className="border-b py-14 sm:py-20">
          <PrototypeRail>
            <p className="text-primary text-sm font-semibold">
              Operating contrast / {recipe.number}
            </p>
            <h1 className="font-heading mt-5 max-w-5xl text-5xl font-bold tracking-tight lg:text-7xl">
              Compare the manual pattern with controlled delivery.
            </h1>
          </PrototypeRail>
        </section>
        <section id="work" className="border-b py-14 sm:py-20">
          <PrototypeRail>
            <div className="grid border lg:grid-cols-2">
              <article className="border-b p-7 lg:border-r lg:border-b-0">
                <p className="text-muted-foreground text-xs font-semibold tracking-wider uppercase">
                  Before
                </p>
                <h2 className="font-heading mt-5 text-3xl font-bold">{outcome.felt}</h2>
                <p className="text-muted-foreground mt-5 leading-7">{capability.asks[0]}</p>
                <ul className="mt-8 space-y-3 text-sm">
                  {capability.sources.slice(0, 4).map((source) => (
                    <li key={source} className="flex gap-3 border-t pt-3">
                      <span className="text-muted-foreground">Source</span>
                      <span>{source}</span>
                    </li>
                  ))}
                </ul>
              </article>
              <article className="p-7">
                <p className="text-primary text-xs font-semibold tracking-wider uppercase">
                  Controlled delivery
                </p>
                <h2 className="font-heading mt-5 text-3xl font-bold">
                  {outcome.title} {outcome.titleAccent}.
                </h2>
                <p className="text-muted-foreground mt-5 leading-7">{outcome.body}</p>
                <ul className="mt-8 space-y-3 text-sm">
                  {capability.outputs.map((output) => (
                    <li key={output} className="flex gap-3 border-t pt-3">
                      <Check aria-hidden="true" className="text-primary size-4 shrink-0" />
                      <span>{output}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
            <div className="mt-10">
              <SourceChain capability={capability} compact />
            </div>
          </PrototypeRail>
        </section>
        <section id="proof" className="border-b py-14 sm:py-20">
          <PrototypeRail>
            <SectionIntro title="The controls stay visible." body={capability.boundary} />
            <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
              <ProofRecord record={proofRecords[recipe.featured.proof]} />
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

function FieldNotes({ recipe }: { recipe: LayoutRecipe }): ReactElement {
  const { capabilities, outcomes, positioning, proofRecords } = layoutLabContent;
  const capability = capabilities[recipe.featured.capability];

  return (
    <div id="top">
      <PrototypeNav />
      <main>
        <section className="border-b py-14 sm:py-20">
          <PrototypeRail className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-primary text-sm font-semibold">Field notes / {recipe.number}</p>
              <h1 className="font-heading mt-5 text-5xl font-bold tracking-tight lg:text-7xl">
                Compact records from delivered work.
              </h1>
            </div>
            <p className="text-muted-foreground max-w-2xl text-lg leading-8 lg:pt-10">
              {positioning.fullPitch}
            </p>
          </PrototypeRail>
        </section>
        <section id="proof" className="border-b py-12 sm:py-16">
          <PrototypeRail>
            <h2 className="sr-only">Field records</h2>
            <div className="bg-border grid gap-px border">
              {proofRecords.slice(0, 4).map((record, index) => (
                <article key={record.name} className="bg-background p-6">
                  <div className="grid gap-6 lg:grid-cols-[4rem_0.7fr_1.3fr_1fr]">
                    <span className="text-muted-foreground font-mono text-xs">
                      FN-{String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="text-muted-foreground text-xs font-semibold tracking-wider uppercase">
                        {record.stage}
                      </p>
                      <h3 className="font-heading mt-2 text-xl font-bold">{record.name}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-6">{record.delivered}</p>
                    <ul className="space-y-2 text-sm">
                      {record.controls.map((control) => (
                        <li key={control} className="flex gap-2">
                          <FileCheck2 aria-hidden="true" className="text-primary size-4 shrink-0" />
                          <span>{control}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </PrototypeRail>
        </section>
        <section id="work" className="border-b py-14 sm:py-20">
          <PrototypeRail className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <OutcomeRecord
                outcome={outcomes[recipe.featured.outcome]}
                index={recipe.featured.outcome}
              />
            </div>
            <div>
              {capabilities.slice(0, 3).map((item, index) => (
                <WorkRow
                  key={item.slug}
                  capability={item}
                  index={index}
                  active={item.slug === capability.slug}
                />
              ))}
              <a
                href="#access"
                className="text-primary focus-visible:ring-ring mt-6 inline-flex min-h-11 items-center gap-2 font-semibold focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:outline-none"
              >
                Scope this workflow <ArrowRight aria-hidden="true" className="size-4" />
              </a>
            </div>
          </PrototypeRail>
        </section>
        <PrototypeCta />
      </main>
      <PrototypeFooter />
    </div>
  );
}
