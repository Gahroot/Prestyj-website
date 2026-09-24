import type { ReactElement } from "react";
import { ArrowDown, Check } from "lucide-react";

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

export function EditorialLayout({ recipe }: { recipe: LayoutRecipe }): ReactElement {
  switch (recipe.composition.variant) {
    case 1:
      return <InvestmentBrief recipe={recipe} />;
    case 2:
      return <SplitDossier recipe={recipe} />;
    case 3:
      return <SundayMemo recipe={recipe} />;
    case 4:
      return <ExecutiveManifesto recipe={recipe} />;
  }
}

function InvestmentBrief({ recipe }: { recipe: LayoutRecipe }): ReactElement {
  const { capabilities, outcomes, positioning, proofRecords } = layoutLabContent;
  const capability = capabilities[recipe.featured.capability];
  const outcome = outcomes[recipe.featured.outcome];

  return (
    <div id="top">
      <PrototypeNav />
      <main>
        <section className="border-b py-16 sm:py-24">
          <PrototypeRail>
            <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
              <div>
                <p className="text-primary text-sm font-semibold">
                  Investment brief / {recipe.number}
                </p>
                <h1 className="font-heading mt-6 max-w-4xl text-5xl font-bold tracking-tight text-balance lg:text-7xl">
                  {positioning.coreOffer}
                </h1>
                <p className="text-muted-foreground mt-7 max-w-3xl text-lg leading-8">
                  {positioning.fullPitch}
                </p>
              </div>
              <dl className="border-t text-sm">
                {[
                  ["Built for", positioning.audience],
                  ["Current work", capability.navLabel],
                  ["Review", capability.review],
                  ["Output", capability.outputs.join(", ")],
                ].map(([term, detail]) => (
                  <div key={term} className="grid gap-2 border-b py-4 sm:grid-cols-[6rem_1fr]">
                    <dt className="text-muted-foreground">{term}</dt>
                    <dd>{detail}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </PrototypeRail>
        </section>

        <section id="work" className="border-b py-16 sm:py-20">
          <PrototypeRail>
            <SectionIntro
              title={capability.title}
              body={capability.description}
              label={capability.eyebrow}
            />
            <div className="mt-10">
              <SourceChain capability={capability} />
            </div>
          </PrototypeRail>
        </section>

        <section className="border-b py-16 sm:py-20">
          <PrototypeRail className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-muted-foreground font-mono text-xs uppercase">Named outcome</p>
              <h2 className="font-heading mt-4 text-3xl font-bold">What changes</h2>
            </div>
            <OutcomeRecord outcome={outcome} index={recipe.featured.outcome} />
          </PrototypeRail>
        </section>

        <section id="proof" className="border-b py-16 sm:py-20">
          <PrototypeRail>
            <SectionIntro
              title="Delivered records, honestly staged."
              body="Each record names the work and the controls without relying on a logo wall."
            />
            <div className="mt-4">
              {proofRecords.slice(0, 2).map((record, index) => (
                <ProofRecord key={record.name} record={record} index={index} />
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

function SplitDossier({ recipe }: { recipe: LayoutRecipe }): ReactElement {
  const { capabilities, outcomes, positioning, proofRecords } = layoutLabContent;
  const capability = capabilities[recipe.featured.capability];
  const outcome = outcomes[recipe.featured.outcome];
  const proof = proofRecords[recipe.featured.proof];

  return (
    <div id="top">
      <PrototypeNav />
      <main>
        <PrototypeRail className="grid gap-0 lg:grid-cols-[22rem_1fr]">
          <aside className="border-b py-12 lg:border-r lg:border-b-0 lg:pr-8">
            <div className="lg:sticky lg:top-20">
              <p className="text-primary text-sm font-semibold">Dossier / {recipe.number}</p>
              <h1 className="font-heading mt-5 text-4xl font-bold tracking-tight">
                {recipe.title}
              </h1>
              <p className="text-muted-foreground mt-5 leading-7">{positioning.coreOffer}</p>
              <dl className="mt-10 border-t text-sm">
                <div className="border-b py-4">
                  <dt className="text-muted-foreground">Workflow</dt>
                  <dd className="mt-2">{capability.navLabel}</dd>
                </div>
                <div className="border-b py-4">
                  <dt className="text-muted-foreground">Release owner</dt>
                  <dd className="mt-2">{capability.review}</dd>
                </div>
                <div className="border-b py-4">
                  <dt className="text-muted-foreground">Work product</dt>
                  <dd className="mt-2">{capability.outputs.join(", ")}</dd>
                </div>
              </dl>
              <a
                href="#work"
                className="text-primary focus-visible:ring-ring mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:outline-none"
              >
                Read the dossier <ArrowDown aria-hidden="true" className="size-4" />
              </a>
            </div>
          </aside>

          <div className="lg:pl-12">
            <section className="border-b py-12 sm:py-16">
              <p className="text-muted-foreground max-w-3xl text-xl leading-9">
                {positioning.fullPitch}
              </p>
            </section>
            <section id="work" className="border-b py-12 sm:py-16">
              <h2 className="font-heading text-3xl font-bold">Open questions</h2>
              <ol className="mt-8 border-t">
                {capability.asks.map((ask, index) => (
                  <li key={ask} className="grid gap-4 border-b py-5 sm:grid-cols-[3rem_1fr]">
                    <span className="text-muted-foreground font-mono text-xs">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p>{ask}</p>
                  </li>
                ))}
              </ol>
            </section>
            <section className="border-b py-12 sm:py-16">
              <h2 className="font-heading text-3xl font-bold">Evidence chain</h2>
              <div className="mt-8">
                <SourceChain capability={capability} compact />
              </div>
            </section>
            <section className="border-b py-12 sm:py-16">
              <h2 className="font-heading text-3xl font-bold">Operating outcome</h2>
              <div className="mt-4">
                <OutcomeRecord outcome={outcome} index={recipe.featured.outcome} />
              </div>
            </section>
            <section id="proof" className="py-12 sm:py-16">
              <h2 className="font-heading text-3xl font-bold">Delivery record</h2>
              <div className="mt-4">
                <ProofRecord record={proof} />
              </div>
              <div className="mt-8">
                <ControlList capability={capability} />
              </div>
            </section>
          </div>
        </PrototypeRail>
        <PrototypeCta prompt={layoutLabContent.audiences[2].cta} />
      </main>
      <PrototypeFooter />
    </div>
  );
}

function SundayMemo({ recipe }: { recipe: LayoutRecipe }): ReactElement {
  const { capabilities, outcomes, positioning, proofRecords } = layoutLabContent;
  const capability = capabilities[recipe.featured.capability];
  const outcome = outcomes[recipe.featured.outcome];

  return (
    <div id="top">
      <PrototypeNav />
      <main>
        <section className="border-b py-14 sm:py-20">
          <PrototypeRail>
            <div className="flex items-center justify-between border-y py-3 text-xs font-semibold tracking-wider uppercase">
              <span>Operating memo</span>
              <span>Issue {String(recipe.number).padStart(2, "0")}</span>
            </div>
            <div className="grid gap-10 py-12 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
              <div>
                <p className="text-muted-foreground">{outcome.lane}</p>
                <h1 className="font-heading mt-4 text-6xl leading-[0.95] font-bold tracking-tight text-balance lg:text-8xl">
                  {outcome.title} <span className="text-primary">{outcome.titleAccent}.</span>
                </h1>
              </div>
              <div>
                <p className="text-lg leading-8">{outcome.body}</p>
                <p className="text-muted-foreground mt-4 italic">{outcome.felt}</p>
              </div>
            </div>
            <div className="grid border-t sm:grid-cols-3">
              {[positioning.coreOffer, capability.review, capability.boundary].map(
                (fact, index) => (
                  <p
                    key={fact}
                    className="border-b py-5 text-sm leading-6 sm:border-r sm:px-5 sm:first:pl-0"
                  >
                    <span className="text-muted-foreground mr-3 font-mono text-xs">
                      0{index + 1}
                    </span>
                    {fact}
                  </p>
                ),
              )}
            </div>
          </PrototypeRail>
        </section>

        <section id="work" className="border-b py-16 sm:py-24">
          <PrototypeRail>
            <div className="grid gap-10 lg:grid-cols-[0.55fr_1.45fr]">
              <h2 className="font-heading text-3xl font-bold">The operating desk</h2>
              <div>
                {capabilities.slice(0, 4).map((item, index) => (
                  <WorkRow
                    key={item.slug}
                    capability={item}
                    index={index}
                    active={item.slug === capability.slug}
                  />
                ))}
              </div>
            </div>
          </PrototypeRail>
        </section>

        <section id="proof" className="border-b py-16 sm:py-24">
          <PrototypeRail>
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <p className="text-primary text-sm font-semibold">Reviewed delivery</p>
                <h2 className="font-heading mt-4 text-4xl font-bold tracking-tight">
                  Proof belongs beside the claim.
                </h2>
                <p className="text-muted-foreground mt-5 leading-7">{positioning.fullPitch}</p>
              </div>
              <ProofRecord record={proofRecords[recipe.featured.proof]} />
            </div>
            <div className="mt-10">
              <SourceChain capability={capability} compact />
            </div>
          </PrototypeRail>
        </section>
        <PrototypeCta />
      </main>
      <PrototypeFooter />
    </div>
  );
}

function ExecutiveManifesto({ recipe }: { recipe: LayoutRecipe }): ReactElement {
  const { capabilities, outcomes, positioning, proofRecords } = layoutLabContent;
  const capability = capabilities[recipe.featured.capability];
  const outcome = outcomes[recipe.featured.outcome];

  return (
    <div id="top">
      <PrototypeNav />
      <main>
        <section className="border-b py-20 sm:py-32">
          <PrototypeRail>
            <p className="text-primary text-sm font-semibold">
              Operating position / {recipe.number}
            </p>
            <h1 className="font-heading mt-8 max-w-6xl text-5xl leading-[1.02] font-bold tracking-tight text-balance lg:text-8xl">
              {positioning.fullPitch}
            </h1>
          </PrototypeRail>
        </section>

        <section id="work" className="border-b py-20 sm:py-32">
          <PrototypeRail className="grid gap-12 lg:grid-cols-[0.55fr_1.45fr]">
            <p className="text-muted-foreground font-mono text-xs uppercase">01 / Defined work</p>
            <div>
              <h2 className="font-heading max-w-4xl text-4xl font-bold tracking-tight lg:text-6xl">
                {capability.title}
              </h2>
              <p className="text-muted-foreground mt-7 max-w-2xl text-lg leading-8">
                {capability.description}
              </p>
              <div className="mt-12">
                <SourceChain capability={capability} compact />
              </div>
            </div>
          </PrototypeRail>
        </section>

        <section className="border-b py-20 sm:py-32">
          <PrototypeRail className="grid gap-12 lg:grid-cols-[0.55fr_1.45fr]">
            <p className="text-muted-foreground font-mono text-xs uppercase">02 / Operating fact</p>
            <div>
              <h2 className="font-heading max-w-4xl text-5xl font-bold tracking-tight lg:text-7xl">
                {outcome.title} <span className="text-primary">{outcome.titleAccent}.</span>
              </h2>
              <p className="text-muted-foreground mt-7 max-w-2xl text-lg leading-8">
                {outcome.body}
              </p>
              <ul className="mt-10 grid gap-4 sm:grid-cols-2">
                {capability.outputs.map((output) => (
                  <li key={output} className="flex gap-3 border-t pt-4">
                    <Check aria-hidden="true" className="text-primary mt-0.5 size-4 shrink-0" />
                    <span>{output}</span>
                  </li>
                ))}
              </ul>
            </div>
          </PrototypeRail>
        </section>

        <section id="proof" className="border-b py-20 sm:py-32">
          <PrototypeRail className="grid gap-12 lg:grid-cols-[0.55fr_1.45fr]">
            <p className="text-muted-foreground font-mono text-xs uppercase">03 / Record</p>
            <div>
              <ProofRecord record={proofRecords[recipe.featured.proof]} />
              <div className="mt-10">
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
