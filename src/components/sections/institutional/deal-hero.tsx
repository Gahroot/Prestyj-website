import Link from "next/link";
import type { ReactElement } from "react";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function DealHero(): ReactElement {
  return (
    <section className="border-b pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
          <div>
            <p className="text-primary text-sm font-semibold">Staff AI across the fund</p>
            <h1 className="font-heading mt-6 max-w-5xl text-5xl font-bold tracking-tight text-balance sm:text-7xl">
              The deal does not wait for your analyst bench.
            </h1>
            <p className="text-muted-foreground mt-7 max-w-3xl text-lg leading-8 sm:text-xl">
              Prestyj builds and runs the AI that completes the work between the source and the
              decision: diligence, quarter-end, the LP inbox, portfolio questions, and brokerage
              inbound.
            </p>
            <p className="mt-5 text-lg">
              You get the finished work product, not another seat license.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/book-demo">
                  Get access <ArrowRight aria-hidden="true" className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#outcomes">See the work</Link>
              </Button>
            </div>
          </div>

          <dl className="border-t text-sm">
            {[
              ["Built for", "Funds from $500M AUM"],
              ["Also for", "Commercial brokerages and CRE operators"],
              ["Delivered as", "Reviewed work product"],
              ["Runs on", "Your existing systems"],
            ].map(([term, detail]) => (
              <div key={term} className="grid grid-cols-[7rem_1fr] gap-4 border-b py-4">
                <dt className="text-muted-foreground">{term}</dt>
                <dd>{detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
