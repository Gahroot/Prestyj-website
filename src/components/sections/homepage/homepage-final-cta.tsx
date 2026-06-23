import Link from "next/link";
import type { ReactElement } from "react";
import { ArrowRight, Mic } from "lucide-react";

import { Button } from "@/components/ui/button";

export function HomepageFinalCta(): ReactElement {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="from-primary/20 to-primary/5 relative overflow-hidden rounded-[2rem] border bg-linear-to-br p-8 text-center sm:p-12">
          <h2 className="font-heading text-foreground mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
            Put AI on the work that slows your team down.
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg leading-8">
            Calls, leads, follow-up, and ad creative — done for you, not a tool you learn.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/book-demo">
                Book a call
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/#ai-concierge">
                <Mic className="h-5 w-5" />
                Talk to the AI
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
