import Link from "next/link";
import type { ReactElement } from "react";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function InstitutionalCta(): ReactElement {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-primary text-sm font-semibold">Start with one workflow</p>
        <div className="mt-4 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <h2 className="font-heading max-w-4xl text-4xl font-bold tracking-tight text-balance sm:text-5xl">
              Bring the work you would hire two analysts to carry.
            </h2>
            <p className="text-muted-foreground mt-5 max-w-2xl text-lg leading-8">
              Show us the source systems, the work product, and who approves it. We will scope the
              smallest version that can prove itself on your own process.
            </p>
          </div>
          <Button size="lg" asChild>
            <Link href="/book-demo">
              Get access <ArrowRight aria-hidden="true" className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
