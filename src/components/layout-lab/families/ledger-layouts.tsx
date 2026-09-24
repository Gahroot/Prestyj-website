import type { ReactElement } from "react";
import { Check, FileCheck2, UserCheck } from "lucide-react";

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

export function LedgerLayout({ recipe }: { recipe: LayoutRecipe }): ReactElement {
  switch (recipe.composition.variant) {
    case 1:
      return <SourceToDecision recipe={recipe} />;
    case 2:
      return <CommitteeMemo recipe={recipe} />;
    case 3:
      return <AuditTrail recipe={recipe} />;
    case 4:
      return <FindingsIndex recipe={recipe} />;
  }
}

function SourceToDecision({ recipe }: { recipe: LayoutRecipe }): ReactElement {
  const { capabilities, outcomes, positioning, proofRecords } = layoutLabContent;
  const capability = capabilities[recipe.featured.capability];

  return (
    <div id="top">
      <PrototypeNav />
      <main>
        <section className="border-b py-16 sm:py-24">
          <PrototypeRail>
            <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
              <div>
                <p className="text-primary text-sm font-semibold">
                  Evidence ledger / {recipe.number}
                </p>
                <h1 className="font-heading mt-5 text-5xl font-bold tracking-tight text-balance lg:text-7xl">
                  Every answer keeps its source.
                </h1>
              </div>
              <p className="text-muted-foreground max-w-2xl text-lg leading-8">
                {positioning.fullPitch}
              </p>
            </div>
            <div id="work" className="mt-14">
              <SourceChain capability={capability} />
            </div>
          </PrototypeRail>
        </section>

        <section className="border-b py-16 sm:py-20">
          <PrototypeRail className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-muted-foreground font-mono text-xs uppercase">Current workflow</p>
              <h2 className="font-heading mt-4 text-3xl font-bold">{capability.navLabel}</h2>
              <p className="text-muted-foreground mt-4 leading-7">{capability.description}</p>
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
            </div>
          </PrototypeRail>
        </section>

        <section id="proof" className="border-b py-16 sm:py-20">
          <PrototypeRail>
            <SectionIntro
              title="The record survives the decision."
              body={capability.boundary}
              label="Control boundary"
            />
            <div className="mt-6 grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
              <OutcomeRecord
                outcome={outcomes[recipe.featured.outcome]}
                index={recipe.featured.outcome}
              />
              <ProofRecord record={proofRecords[recipe.featured.proof]} />
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

function CommitteeMemo({ recipe }: { recipe: LayoutRecipe }): ReactElement {
  const { capabilities, outcomes, positioning, proofRecords } = layoutLabContent;
  const capability = capabilities[recipe.featured.capability];
  const outcome = outcomes[recipe.featured.outcome];

  return (
    <div id="top">
      <PrototypeNav />
      <main>
        <section className="border-b py-12 sm:py-16">
          <PrototypeRail>
            <div className="flex flex-wrap items-center justify-between gap-3 border-y py-3 text-xs font-semibold tracking-wider uppercase">
              <span>Committee memorandum</span>
              <span>Concept {String(recipe.number).padStart(2, "0")}</span>
              <span>Review required</span>
            </div>
            <div className="grid gap-10 py-12 lg:grid-cols-[0.7fr_1.3fr]">
              <div>
                <p className="text-primary text-sm font-semibold">Recommendation</p>
                <h1 className="font-heading mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                  {outcome.title} {outcome.titleAccent}.
                </h1>
              </div>
              <div>
                <p className="text-xl leading-9">{outcome.body}</p>
                <p className="text-muted-foreground mt-5 leading-7">{positioning.fullPitch}</p>
              </div>
            </div>
          </PrototypeRail>
        </section>

        <section id="work" className="border-b py-14 sm:py-20">
          <PrototypeRail className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2 className="font-heading text-3xl font-bold">Questions under review</h2>
              <ol className="mt-8 border-t">
                {capability.asks.map((ask, index) => (
                  <li key={ask} className="grid gap-4 border-b py-5 sm:grid-cols-[3rem_1fr_auto]">
                    <span className="text-muted-foreground font-mono text-xs">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{ask}</span>
                    <span className="text-muted-foreground text-sm">Source attached</span>
                  </li>
                ))}
              </ol>
            </div>
            <aside className="border-l pl-6">
              <h2 className="font-heading text-xl font-bold">Evidence available</h2>
              <ul className="mt-6 space-y-3 text-sm">
                {capability.sources.map((source) => (
                  <li key={source} className="flex gap-3 border-b pb-3">
                    <Check aria-hidden="true" className="text-primary size-4 shrink-0" />
                    <span>{source}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground mt-6 text-sm leading-6">{capability.boundary}</p>
            </aside>
          </PrototypeRail>
        </section>

        <section id="proof" className="border-b py-14 sm:py-20">
          <PrototypeRail>
            <SectionIntro title="Release conditions" body={capability.review} />
            <div className="mt-8">
              <SourceChain capability={capability} compact />
            </div>
            <div className="mt-10">
              <ProofRecord record={proofRecords[recipe.featured.proof]} />
            </div>
          </PrototypeRail>
        </section>
        <PrototypeCta />
      </main>
      <PrototypeFooter />
    </div>
  );
}

function AuditTrail({ recipe }: { recipe: LayoutRecipe }): ReactElement {
  const { capabilities, outcomes, positioning, proofRecords } = layoutLabContent;
  const capability = capabilities[recipe.featured.capability];
  const events = [
    { label: "Source opened", body: capability.sources.join(", ") },
    { label: "Defined work completed", body: capability.actions.join(", ") },
    { label: "Review gate", body: capability.review },
    { label: "Work released", body: capability.outputs.join(", ") },
  ] as const;

  return (
    <div id="top">
      <PrototypeNav />
      <main>
        <section className="border-b py-16 sm:py-24">
          <PrototypeRail className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-primary text-sm font-semibold">Audit trail / {recipe.number}</p>
              <h1 className="font-heading mt-5 text-5xl font-bold tracking-tight lg:text-7xl">
                Controlled by your review rules.
              </h1>
            </div>
            <div className="lg:pt-10">
              <p className="text-muted-foreground text-lg leading-8">{positioning.fullPitch}</p>
              <p className="mt-6">{outcomes[recipe.featured.outcome].body}</p>
            </div>
          </PrototypeRail>
        </section>

        <section id="work" className="border-b py-16 sm:py-24">
          <PrototypeRail className="grid gap-12 lg:grid-cols-[0.6fr_1.4fr]">
            <div>
              <h2 className="font-heading text-3xl font-bold">Work record</h2>
              <p className="text-muted-foreground mt-4 leading-7">{capability.title}</p>
            </div>
            <ol className="relative border-l">
              {events.map((event, index) => (
                <li key={event.label} className="relative border-b py-7 pl-10">
                  <span className="bg-primary border-background absolute top-8 -left-1.5 size-3 rounded-full border-2" />
                  <div className="grid gap-3 sm:grid-cols-[3rem_0.7fr_1.3fr]">
                    <span className="text-muted-foreground font-mono text-xs">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-heading font-bold">{event.label}</h3>
                    <p className="text-muted-foreground text-sm leading-6">{event.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </PrototypeRail>
        </section>

        <section id="proof" className="border-b py-16 sm:py-24">
          <PrototypeRail>
            <SectionIntro title="A named gate before release." body={capability.boundary} />
            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              {proofRecords.slice(0, 2).map((record, index) => (
                <ProofRecord key={record.name} record={record} index={index} compact />
              ))}
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

function FindingsIndex({ recipe }: { recipe: LayoutRecipe }): ReactElement {
  const { capabilities, outcomes, positioning, proofRecords } = layoutLabContent;
  const capability = capabilities[recipe.featured.capability];

  return (
    <div id="top">
      <PrototypeNav />
      <main>
        <section className="border-b py-12 sm:py-16">
          <PrototypeRail>
            <p className="text-primary text-sm font-semibold">Findings index / {recipe.number}</p>
            <div className="mt-6 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <h1 className="font-heading text-5xl font-bold tracking-tight lg:text-7xl">
                Reviewed work, indexed for a fast read.
              </h1>
              <p className="text-muted-foreground leading-7">{positioning.fullPitch}</p>
            </div>
          </PrototypeRail>
        </section>

        <section id="work" className="border-b py-12 sm:py-16">
          <PrototypeRail>
            <h2 className="sr-only">Indexed findings</h2>
            <ol className="border-t">
              {capabilities.map((item, index) => {
                const Icon = item.icon;
                return (
                  <li
                    key={item.slug}
                    className="grid gap-5 border-b py-7 lg:grid-cols-[4rem_0.8fr_1fr_1fr]"
                  >
                    <span className="text-muted-foreground font-mono text-xs">
                      F-{String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <Icon aria-hidden="true" className="mb-3 size-5" />
                      <h3 className="font-heading text-xl font-bold">{item.navLabel}</h3>
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{item.title}</p>
                      <p className="text-muted-foreground mt-2 text-sm leading-6">
                        {item.sources.slice(0, 3).join(", ")}
                      </p>
                    </div>
                    <div className="text-sm leading-6">
                      <p className="flex gap-2">
                        <UserCheck
                          aria-hidden="true"
                          className="text-primary mt-0.5 size-4 shrink-0"
                        />
                        {item.review}
                      </p>
                      <p className="text-muted-foreground mt-3 flex gap-2">
                        <FileCheck2 aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
                        {item.outputs.slice(0, 2).join(", ")}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </PrototypeRail>
        </section>

        <section id="proof" className="border-b py-14 sm:py-20">
          <PrototypeRail className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <h2 className="font-heading text-3xl font-bold">Finding selected</h2>
              <div className="mt-6">
                <OutcomeRecord
                  outcome={outcomes[recipe.featured.outcome]}
                  index={recipe.featured.outcome}
                />
              </div>
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
