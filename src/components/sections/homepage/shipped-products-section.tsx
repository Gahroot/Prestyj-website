import type { ReactElement } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";

/**
 * Generic proof section — the old product-specific cards (EZ Coder, Media Master)
 * have been removed per the one-lane pivot. This section is no longer rendered on
 * the homepage but remains functional in case other code references the export.
 */
export function ShippedProductsSection(): ReactElement {
  return (
    <section id="proof" className="bg-muted/30 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="outline" className="border-primary/40 text-primary">
            Proof we ship
          </Badge>
          <h2 className="font-heading text-foreground mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
            We ship working AI systems, not slide decks.
          </h2>
          <p className="text-muted-foreground mt-4 text-lg leading-8">
            Every engagement ends with live agents, running ad creative, and booked
            appointments — not a plan on paper.
          </p>
          <div className="text-primary mt-6 flex items-center justify-center gap-2 text-sm font-semibold">
            <Sparkles className="h-4 w-4" />
            See what we can build for you
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </section>
  );
}
