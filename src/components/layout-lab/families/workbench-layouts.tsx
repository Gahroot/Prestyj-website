import type { ReactElement } from "react";
import { Check, Circle, FileCheck2, Inbox, UserCheck } from "lucide-react";

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

export function WorkbenchLayout({ recipe }: { recipe: LayoutRecipe }): ReactElement {
  switch (recipe.composition.variant) {
    case 1:
      return <AnalystDesk recipe={recipe} />;
    case 2:
      return <WorkflowBoard recipe={recipe} />;
    case 3:
      return <InboxToDecision recipe={recipe} />;
    case 4:
      return <DealRoom recipe={recipe} />;
  }
}

function WorkbenchHero({ recipe, title }: { recipe: LayoutRecipe; title: string }): ReactElement {
  return (
    <section className="border-b py-14 sm:py-20">
      <PrototypeRail className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div>
          <p className="text-primary text-sm font-semibold">Workbench / {recipe.number}</p>
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

function AnalystDesk({ recipe }: { recipe: LayoutRecipe }): ReactElement {
  const { capabilities, outcomes, positioning, proofRecords } = layoutLabContent;
  const capability = capabilities[recipe.featured.capability];

  return (
    <div id="top">
      <PrototypeNav />
      <main>
        <section className="border-b py-16 sm:py-24">
          <PrototypeRail>
            <div className="grid gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
              <div>
                <p className="text-primary text-sm font-semibold">
                  AI for institutional real estate
                </p>
                <h1 className="font-heading mt-6 max-w-5xl text-5xl leading-[0.98] font-bold tracking-tight text-balance lg:text-8xl">
                  {positioning.coreOffer}
                </h1>
                <p className="text-muted-foreground mt-8 max-w-3xl text-lg leading-8">
                  {positioning.fullPitch}
                </p>
              </div>
              <div className="border-t">
                <p className="text-muted-foreground py-4 font-mono text-xs tracking-wider uppercase">
                  Defined work
                </p>
                {capabilities.slice(0, 5).map((item, index) => (
                  <div
                    key={item.slug}
                    className="grid grid-cols-[2rem_1fr] gap-3 border-t py-3 text-sm"
                  >
                    <span className="text-muted-foreground font-mono text-xs">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{item.navLabel}</span>
                  </div>
                ))}
              </div>
            </div>
          </PrototypeRail>
        </section>

        <section id="work" className="border-b py-12 sm:py-20">
          <PrototypeRail>
            <div className="flex flex-col gap-5 border-b pb-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-primary text-sm font-semibold">Workflow anatomy</p>
                <h2 className="font-heading mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
                  One assignment, fully legible.
                </h2>
              </div>
              <p className="text-muted-foreground max-w-xl text-sm leading-6">
                Every row keeps the source, defined action, review owner, and released work visible.
              </p>
            </div>

            <div className="mt-8 border">
              <div className="grid gap-4 border-b p-5 lg:grid-cols-[1fr_auto] lg:items-end">
                <div>
                  <p className="text-muted-foreground text-xs font-semibold tracking-wider uppercase">
                    Selected workflow
                  </p>
                  <h3 className="font-heading mt-3 text-2xl font-bold">{capability.title}</h3>
                  <p className="text-muted-foreground mt-3 max-w-3xl leading-7">
                    {capability.description}
                  </p>
                </div>
                <div className="border-l pl-5 text-sm">
                  <p className="text-muted-foreground">Release owner</p>
                  <p className="mt-2 max-w-sm leading-6">{capability.review}</p>
                </div>
              </div>

              <ol>
                {capability.asks.slice(0, 3).map((ask, index) => (
                  <li
                    key={ask}
                    className="grid gap-5 border-b p-5 lg:grid-cols-[2rem_1.2fr_0.8fr_0.8fr_0.8fr]"
                  >
                    <span className="text-muted-foreground font-mono text-xs">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="text-muted-foreground text-xs font-semibold tracking-wider uppercase">
                        Question
                      </p>
                      <p className="mt-2 leading-7">{ask}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs font-semibold tracking-wider uppercase">
                        Source
                      </p>
                      <p className="mt-2 text-sm leading-6">
                        {capability.sources[index] ?? capability.sources.join(", ")}
                      </p>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs font-semibold tracking-wider uppercase">
                        Agent action
                      </p>
                      <p className="mt-2 text-sm leading-6">
                        {capability.actions[index] ?? capability.actions.join(", ")}
                      </p>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs font-semibold tracking-wider uppercase">
                        Work product
                      </p>
                      <p className="mt-2 text-sm leading-6">
                        {capability.outputs[index] ?? capability.outputs.join(", ")}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="grid gap-3 p-5 text-sm sm:grid-cols-[2rem_1fr]">
                <Check aria-hidden="true" className="text-primary size-5" />
                <p>{capability.review}</p>
              </div>
            </div>
          </PrototypeRail>
        </section>

        <section className="border-b py-14 sm:py-20">
          <PrototypeRail>
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
              <div>
                <p className="text-primary text-sm font-semibold">Connected context</p>
                <h2 className="font-heading mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
                  Sources stay attached to the work.
                </h2>
              </div>
              <div className="grid border-t sm:grid-cols-2 lg:grid-cols-3">
                {capabilities.slice(0, 6).map((item) => (
                  <article key={item.slug} className="border-b p-5 sm:border-r">
                    <h3 className="font-heading font-bold">{item.navLabel}</h3>
                    <p className="text-muted-foreground mt-3 text-sm leading-6">
                      {item.sources.slice(0, 4).join(", ")}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </PrototypeRail>
        </section>

        <section id="proof" className="border-b py-14 sm:py-20">
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

function WorkflowBoard({ recipe }: { recipe: LayoutRecipe }): ReactElement {
  const { capabilities, outcomes, proofRecords } = layoutLabContent;
  const capability = capabilities[recipe.featured.capability];

  return (
    <div id="top">
      <PrototypeNav />
      <main>
        <WorkbenchHero recipe={recipe} title="Five work lanes. One evidence standard." />
        <section id="work" className="border-b py-12 sm:py-16">
          <PrototypeRail>
            <h2 className="sr-only">Workflow lanes</h2>
            <div className="grid border-t sm:grid-cols-2 lg:grid-cols-5">
              {capabilities.slice(0, 5).map((item, index) => (
                <article
                  key={item.slug}
                  className="border-b p-5 sm:border-r sm:odd:border-l lg:border-l-0 lg:first:border-l"
                >
                  <p className="text-muted-foreground font-mono text-xs">Lane {index + 1}</p>
                  <h3 className="font-heading mt-5 text-xl font-bold">{item.navLabel}</h3>
                  <ul className="mt-6 space-y-4 text-sm">
                    <li>
                      <span className="text-muted-foreground block">Source</span>
                      <span className="mt-1 block">{item.sources.slice(0, 2).join(", ")}</span>
                    </li>
                    <li>
                      <span className="text-muted-foreground block">Action</span>
                      <span className="mt-1 block">{item.actions.slice(0, 2).join(", ")}</span>
                    </li>
                    <li>
                      <span className="text-muted-foreground block">Output</span>
                      <span className="mt-1 block">{item.outputs.slice(0, 2).join(", ")}</span>
                    </li>
                  </ul>
                </article>
              ))}
            </div>
          </PrototypeRail>
        </section>
        <section className="border-b py-14 sm:py-20">
          <PrototypeRail>
            <SectionIntro
              title={capability.title}
              body={capability.description}
              label="Selected lane"
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

function InboxToDecision({ recipe }: { recipe: LayoutRecipe }): ReactElement {
  const { capabilities, outcomes, proofRecords } = layoutLabContent;
  const capability = capabilities[recipe.featured.capability];
  const stages = [
    { label: "Incoming request", body: capability.asks[0], icon: Inbox },
    { label: "Evidence gathered", body: capability.sources.join(", "), icon: Circle },
    { label: "Reviewed answer", body: capability.review, icon: UserCheck },
    { label: "Delivered artifact", body: capability.outputs.join(", "), icon: FileCheck2 },
  ] as const;

  return (
    <div id="top">
      <PrototypeNav />
      <main>
        <WorkbenchHero recipe={recipe} title="From an incoming request to reviewed delivery." />
        <section id="work" className="border-b py-14 sm:py-20">
          <PrototypeRail className="max-w-5xl">
            <div className="border">
              <div className="flex items-center gap-3 border-b p-5">
                <Inbox aria-hidden="true" className="text-primary size-5" />
                <div>
                  <p className="text-muted-foreground text-xs font-semibold tracking-wider uppercase">
                    Work request
                  </p>
                  <h2 className="font-heading mt-1 text-xl font-bold">{capability.navLabel}</h2>
                </div>
              </div>
              <ol>
                {stages.map((stage, index) => {
                  const Icon = stage.icon;
                  return (
                    <li
                      key={stage.label}
                      className="grid gap-4 border-b p-6 last:border-b-0 sm:grid-cols-[3rem_0.7fr_1.3fr]"
                    >
                      <span className="text-muted-foreground font-mono text-xs">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <Icon aria-hidden="true" className="mb-3 size-5" />
                        <h3 className="font-heading font-bold">{stage.label}</h3>
                      </div>
                      <p className="text-muted-foreground text-sm leading-6">{stage.body}</p>
                    </li>
                  );
                })}
              </ol>
            </div>
          </PrototypeRail>
        </section>
        <section id="proof" className="border-b py-14 sm:py-20">
          <PrototypeRail>
            <SectionIntro title="The handoff includes the record." body={capability.boundary} />
            <div className="mt-8 grid gap-10 lg:grid-cols-2">
              <ProofRecord record={proofRecords[recipe.featured.proof]} />
              <OutcomeRecord
                outcome={outcomes[recipe.featured.outcome]}
                index={recipe.featured.outcome}
              />
            </div>
          </PrototypeRail>
        </section>
        <PrototypeCta />
      </main>
      <PrototypeFooter />
    </div>
  );
}

function DealRoom({ recipe }: { recipe: LayoutRecipe }): ReactElement {
  const { capabilities, outcomes, proofRecords } = layoutLabContent;
  const capability = capabilities[recipe.featured.capability];

  return (
    <div id="top">
      <PrototypeNav />
      <main>
        <WorkbenchHero recipe={recipe} title="A deal room organized around open questions." />
        <section id="work" className="border-b py-12 sm:py-16">
          <PrototypeRail>
            <div className="grid border lg:grid-cols-[0.7fr_1.3fr]">
              <aside className="border-b p-6 lg:border-r lg:border-b-0">
                <p className="text-muted-foreground text-xs font-semibold tracking-wider uppercase">
                  Source inventory
                </p>
                <ul className="mt-6">
                  {capability.sources.map((source) => (
                    <li key={source} className="flex gap-3 border-b py-3 text-sm">
                      <Check aria-hidden="true" className="text-primary size-4 shrink-0" />
                      <span>{source}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground mt-6 text-sm leading-6">
                  {capability.boundary}
                </p>
              </aside>
              <div>
                <div className="border-b p-6">
                  <p className="text-muted-foreground text-xs font-semibold tracking-wider uppercase">
                    Live diligence questions
                  </p>
                  <h2 className="font-heading mt-2 text-2xl font-bold">{capability.title}</h2>
                </div>
                <ol>
                  {capability.asks.map((ask, index) => (
                    <li key={ask} className="grid gap-3 border-b p-6 sm:grid-cols-[3rem_1fr_auto]">
                      <span className="text-muted-foreground font-mono text-xs">
                        Q-{String(index + 1).padStart(2, "0")}
                      </span>
                      <span>{ask}</span>
                      <span className="text-sm">Review required</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </PrototypeRail>
        </section>
        <section className="border-b py-14 sm:py-20">
          <PrototypeRail>
            <SectionIntro title="Completed work" body={capability.review} />
            <div className="mt-8">
              <SourceChain capability={capability} compact />
            </div>
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
