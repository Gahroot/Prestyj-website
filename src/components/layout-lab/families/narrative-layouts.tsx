import type { ReactElement } from "react";
import { ArrowDown, ArrowRight, Check, UserCheck } from "lucide-react";

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

export function NarrativeLayout({ recipe }: { recipe: LayoutRecipe }): ReactElement {
  switch (recipe.composition.variant) {
    case 1:
      return <OneDealJourney recipe={recipe} />;
    case 2:
      return <FundCalendar recipe={recipe} />;
    case 3:
      return <EvidenceChain recipe={recipe} />;
    case 4:
      return <RoleRelay recipe={recipe} />;
  }
}

function NarrativeHero({ recipe, title }: { recipe: LayoutRecipe; title: string }): ReactElement {
  return (
    <section className="border-b py-16 sm:py-24">
      <PrototypeRail>
        <p className="text-primary text-sm font-semibold">Operating narrative / {recipe.number}</p>
        <h1 className="font-heading mt-6 max-w-6xl text-5xl font-bold tracking-tight text-balance lg:text-8xl">
          {title}
        </h1>
        <p className="text-muted-foreground mt-7 max-w-3xl text-lg leading-8">
          {layoutLabContent.positioning.fullPitch}
        </p>
      </PrototypeRail>
    </section>
  );
}

function OneDealJourney({ recipe }: { recipe: LayoutRecipe }): ReactElement {
  const { capabilities, outcomes, proofRecords } = layoutLabContent;
  const capability = capabilities[recipe.featured.capability];
  const journey = [
    { title: "Question enters", body: capability.asks[0] },
    { title: "Sources assemble", body: capability.sources.join(", ") },
    { title: "Defined work runs", body: capability.actions.join(", ") },
    { title: "Deal team reviews", body: capability.review },
    { title: "Committee work ships", body: capability.outputs.join(", ") },
  ] as const;

  return (
    <div id="top">
      <PrototypeNav />
      <main>
        <NarrativeHero recipe={recipe} title="Follow one deal from question to committee work." />
        <section id="work" className="border-b py-16 sm:py-24">
          <PrototypeRail className="max-w-5xl">
            <ol>
              {journey.map((step, index) => (
                <li key={step.title} className="grid gap-5 sm:grid-cols-[5rem_1fr]">
                  <div className="flex flex-col items-center">
                    <span className="border-primary bg-background flex size-10 items-center justify-center rounded-full border font-mono text-xs">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {index < journey.length - 1 ? (
                      <span className="bg-border min-h-16 w-px flex-1" />
                    ) : null}
                  </div>
                  <article className="border-b pb-10">
                    <h2 className="font-heading text-3xl font-bold">{step.title}</h2>
                    <p className="text-muted-foreground mt-4 max-w-2xl leading-7">{step.body}</p>
                  </article>
                </li>
              ))}
            </ol>
          </PrototypeRail>
        </section>
        <section id="proof" className="border-b py-16 sm:py-20">
          <PrototypeRail>
            <div className="grid gap-10 lg:grid-cols-2">
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

function FundCalendar({ recipe }: { recipe: LayoutRecipe }): ReactElement {
  const { capabilities, outcomes, proofRecords } = layoutLabContent;
  const capability = capabilities[recipe.featured.capability];
  const cadence = [
    { period: "Month-end", outcome: outcomes[0], work: capabilities[1] },
    { period: "Quarter-end", outcome: outcomes[2], work: capabilities[2] },
    { period: "Committee", outcome: outcomes[4], work: capabilities[0] },
    { period: "Portfolio review", outcome: outcomes[5], work: capabilities[3] },
  ] as const;

  return (
    <div id="top">
      <PrototypeNav />
      <main>
        <NarrativeHero recipe={recipe} title="The fund calendar becomes the page structure." />
        <section id="work" className="border-b py-12 sm:py-16">
          <PrototypeRail>
            <h2 className="sr-only">Fund operating cadence</h2>
            <ol className="border-t">
              {cadence.map((entry, index) => (
                <li
                  key={entry.period}
                  className="grid gap-6 border-b py-8 lg:grid-cols-[8rem_0.8fr_1.2fr_1fr]"
                >
                  <div>
                    <p className="text-muted-foreground font-mono text-xs">0{index + 1}</p>
                    <p className="mt-2 font-semibold">{entry.period}</p>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold">{entry.work.navLabel}</h3>
                    <p className="text-muted-foreground mt-2 text-sm leading-6">
                      {entry.work.sources.slice(0, 3).join(", ")}
                    </p>
                  </div>
                  <p className="leading-7">{entry.outcome.body}</p>
                  <div className="text-sm">
                    <p className="text-muted-foreground">Release owner</p>
                    <p className="mt-2 leading-6">{entry.work.review}</p>
                  </div>
                </li>
              ))}
            </ol>
          </PrototypeRail>
        </section>
        <section className="border-b py-14 sm:py-20">
          <PrototypeRail>
            <SectionIntro
              title={capability.title}
              body={capability.description}
              label="Quarter-end focus"
            />
            <div className="mt-8">
              <SourceChain capability={capability} compact />
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

function EvidenceChain({ recipe }: { recipe: LayoutRecipe }): ReactElement {
  const { capabilities, outcomes, proofRecords } = layoutLabContent;
  const capability = capabilities[recipe.featured.capability];
  const chain = capability.asks.map((ask, index) => ({
    question: ask,
    source: capability.sources[index] ?? capability.sources[0],
    action: capability.actions[index] ?? capability.actions[0],
    output: capability.outputs[index] ?? capability.outputs[0],
  }));

  return (
    <div id="top">
      <PrototypeNav />
      <main>
        <NarrativeHero
          recipe={recipe}
          title="One cited answer carries forward to the next decision."
        />
        <section id="work" className="border-b py-14 sm:py-20">
          <PrototypeRail className="max-w-6xl">
            <ol className="grid gap-8">
              {chain.map((step, index) => (
                <li key={step.question}>
                  <article className="grid border lg:grid-cols-[4rem_1.2fr_0.8fr_0.8fr_0.8fr]">
                    <span className="text-muted-foreground p-5 font-mono text-xs">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="border-t p-5 lg:border-t-0 lg:border-l">
                      <p className="text-muted-foreground text-xs font-semibold uppercase">
                        Question
                      </p>
                      <h2 className="font-heading mt-3 text-xl font-bold">{step.question}</h2>
                    </div>
                    <div className="border-t p-5 lg:border-t-0 lg:border-l">
                      <p className="text-muted-foreground text-xs font-semibold uppercase">
                        Source
                      </p>
                      <p className="mt-3 text-sm">{step.source}</p>
                    </div>
                    <div className="border-t p-5 lg:border-t-0 lg:border-l">
                      <p className="text-muted-foreground text-xs font-semibold uppercase">
                        Action
                      </p>
                      <p className="mt-3 text-sm">{step.action}</p>
                    </div>
                    <div className="border-t p-5 lg:border-t-0 lg:border-l">
                      <p className="text-muted-foreground text-xs font-semibold uppercase">
                        Output
                      </p>
                      <p className="mt-3 text-sm">{step.output}</p>
                    </div>
                  </article>
                  {index < chain.length - 1 ? (
                    <ArrowDown aria-hidden="true" className="text-primary mx-auto my-4 size-5" />
                  ) : null}
                </li>
              ))}
            </ol>
          </PrototypeRail>
        </section>
        <section id="proof" className="border-b py-14 sm:py-20">
          <PrototypeRail>
            <SectionIntro
              title="The review boundary closes the chain."
              body={capability.boundary}
            />
            <div className="mt-8 grid gap-10 lg:grid-cols-2">
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

function RoleRelay({ recipe }: { recipe: LayoutRecipe }): ReactElement {
  const { capabilities, outcomes, proofRecords } = layoutLabContent;
  const capability = capabilities[recipe.featured.capability];
  const roles = [
    { role: "Partner", action: capability.asks[0] },
    { role: "Analyst", action: capability.actions.join(", ") },
    { role: "Operations", action: capability.sources.join(", ") },
    { role: "Reviewer", action: capability.review },
  ] as const;

  return (
    <div id="top">
      <PrototypeNav />
      <main>
        <NarrativeHero
          recipe={recipe}
          title="The page follows the handoff between responsible roles."
        />
        <section id="work" className="border-b py-14 sm:py-20">
          <PrototypeRail>
            <ol className="grid border-t lg:grid-cols-4">
              {roles.map((item, index) => (
                <li key={item.role} className="relative border-b p-6 lg:border-r">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-muted-foreground font-mono text-xs">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {index < roles.length - 1 ? (
                      <ArrowRight aria-hidden="true" className="size-4" />
                    ) : null}
                  </div>
                  <UserCheck aria-hidden="true" className="text-primary mt-8 size-5" />
                  <h2 className="font-heading mt-4 text-2xl font-bold">{item.role}</h2>
                  <p className="text-muted-foreground mt-4 text-sm leading-6">{item.action}</p>
                </li>
              ))}
            </ol>
            <div className="mt-10">
              <SourceChain capability={capability} compact />
            </div>
          </PrototypeRail>
        </section>
        <section className="border-b py-14 sm:py-20">
          <PrototypeRail className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <h2 className="font-heading text-3xl font-bold">Handoff rules</h2>
              <p className="text-muted-foreground mt-4 leading-7">{capability.boundary}</p>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {capability.outputs.map((output) => (
                <li key={output} className="flex gap-3 border-t pt-4">
                  <Check aria-hidden="true" className="text-primary size-4 shrink-0" />
                  <span>{output}</span>
                </li>
              ))}
            </ul>
          </PrototypeRail>
        </section>
        <section id="proof" className="border-b py-14 sm:py-20">
          <PrototypeRail className="grid gap-10 lg:grid-cols-2">
            <ProofRecord record={proofRecords[recipe.featured.proof]} />
            <div>
              <OutcomeRecord
                outcome={outcomes[recipe.featured.outcome]}
                index={recipe.featured.outcome}
              />
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
