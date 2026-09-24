import Link from "next/link";
import type { ReactElement } from "react";
import { ArrowRight, Check } from "lucide-react";

import { EditorialShell } from "@/components/layout/editorial-shell";
import { EditorialPageHeader } from "@/components/layout/editorial-page-header";
import { Button } from "@/components/ui/button";
import type { Audience } from "@/lib/institutional/audiences";
import { getCapability } from "@/lib/institutional/capabilities";

export function AudiencePage({ audience }: { audience: Audience }): ReactElement {
  const related = audience.capabilities.flatMap((slug) => {
    const capability = getCapability(slug);
    return capability ? [capability] : [];
  });

  return (
    <EditorialShell>
      <main id="main-content" className="editorial-inner">
        <section className="border-b">
          <div className="editorial-rail">
            <EditorialPageHeader title={audience.title}>
              <p>{audience.description}</p>
            </EditorialPageHeader>
          </div>
        </section>

        <section aria-labelledby="recognized-title" className="border-b py-12 sm:py-16">
          <div className="editorial-rail grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <h2 id="recognized-title" className="font-heading text-3xl font-bold tracking-tight">
              This is probably familiar.
            </h2>
            <ul className="border-t">
              {audience.recognized.map((item) => (
                <li key={item} className="border-b py-5 text-lg leading-7">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section aria-labelledby="outcome-title" className="border-b py-12 sm:py-16">
          <div className="editorial-rail">
            <h2
              id="outcome-title"
              className="font-heading max-w-3xl text-3xl font-bold tracking-tight"
            >
              What changes when the work has an owner
            </h2>
            <ul className="editorial-rows mt-8">
              {audience.outcomes.map((outcome) => (
                <li key={outcome} className="flex gap-4">
                  <Check aria-hidden="true" className="text-primary mt-1 h-4 w-4 shrink-0" />
                  <span className="text-lg">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section aria-labelledby="capabilities-title" className="border-b py-12 sm:py-16">
          <div className="editorial-rail">
            <div className="grid gap-8 border-b pb-8 lg:grid-cols-2">
              <h2
                id="capabilities-title"
                className="font-heading text-3xl font-bold tracking-tight"
              >
                The work we put on the system
              </h2>
              <p className="text-muted-foreground leading-7">
                Typical sources: {audience.systems.join(", ")}.
              </p>
            </div>
            <ul>
              {related.map((capability) => (
                <li key={capability.slug} className="border-b last:border-b-0">
                  <Link
                    href={`/capabilities/${capability.slug}`}
                    className="group hover:text-primary focus-visible:ring-ring grid gap-5 py-7 transition-colors focus-visible:ring-2 focus-visible:outline-none sm:grid-cols-[0.5fr_1fr_auto]"
                  >
                    <strong className="font-heading text-xl">{capability.navLabel}</strong>
                    <span className="text-muted-foreground">{capability.title}</span>
                    <ArrowRight aria-hidden="true" className="h-5 w-5" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-20 sm:py-28">
          <div className="editorial-rail">
            <p className="text-primary text-sm font-semibold">Start with one workflow</p>
            <div className="mt-4 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <h2 className="font-heading max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
                {audience.cta}
              </h2>
              <Button size="lg" asChild>
                <Link href="/book-demo">
                  Book a workflow demo <ArrowRight aria-hidden="true" className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </EditorialShell>
  );
}
