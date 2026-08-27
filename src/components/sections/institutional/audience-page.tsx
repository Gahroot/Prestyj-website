import Link from "next/link";
import type { ReactElement } from "react";
import { ArrowRight, Check } from "lucide-react";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import type { Audience } from "@/lib/institutional/audiences";
import { getCapability } from "@/lib/institutional/capabilities";

export function AudiencePage({ audience }: { audience: Audience }): ReactElement {
  const related = audience.capabilities.flatMap((slug) => {
    const capability = getCapability(slug);
    return capability ? [capability] : [];
  });

  return (
    <>
      <Navbar />
      <main>
        <section className="border-b pt-32 pb-20 sm:pt-40 sm:pb-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-primary text-sm font-semibold">For {audience.navLabel}</p>
            <h1 className="font-heading mt-5 max-w-5xl text-4xl font-bold tracking-tight text-balance sm:text-6xl">
              {audience.title}
            </h1>
            <p className="text-muted-foreground mt-6 max-w-3xl text-lg leading-8">
              {audience.description}
            </p>
          </div>
        </section>

        <section aria-labelledby="recognized-title" className="border-b py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.7fr_1.3fr] lg:px-8">
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

        <section aria-labelledby="outcome-title" className="border-b py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2
              id="outcome-title"
              className="font-heading max-w-3xl text-3xl font-bold tracking-tight"
            >
              What changes when the work has an owner
            </h2>
            <ul className="bg-border mt-10 grid gap-px border md:grid-cols-2">
              {audience.outcomes.map((outcome) => (
                <li key={outcome} className="bg-background flex gap-3 p-6">
                  <Check aria-hidden="true" className="text-primary mt-1 h-4 w-4 shrink-0" />
                  <span className="text-lg">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section aria-labelledby="capabilities-title" className="border-b py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-primary text-sm font-semibold">Start with one workflow</p>
            <div className="mt-4 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <h2 className="font-heading max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
                {audience.cta}
              </h2>
              <Button size="lg" asChild>
                <Link href="/book-demo">
                  Get access <ArrowRight aria-hidden="true" className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
