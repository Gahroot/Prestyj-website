import Link from "next/link";
import type { ReactElement } from "react";
import { ArrowRight } from "lucide-react";

import { audiences } from "@/lib/institutional/audiences";

export function AudiencePathways(): ReactElement {
  return (
    <section aria-labelledby="audiences-title" className="border-b py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="audiences-title"
          className="font-heading text-3xl font-bold tracking-tight sm:text-4xl"
        >
          One operating model. Three different desks.
        </h2>
        <ul className="mt-10 border-t">
          {audiences.map((audience) => (
            <li key={audience.slug} className="border-b">
              <Link
                href={`/for/${audience.slug}`}
                className="hover:text-primary focus-visible:ring-ring grid gap-5 py-7 transition-colors focus-visible:ring-2 focus-visible:outline-none sm:grid-cols-[0.55fr_1fr_auto]"
              >
                <strong className="font-heading text-xl">{audience.navLabel}</strong>
                <span className="text-muted-foreground">{audience.description}</span>
                <ArrowRight aria-hidden="true" className="h-5 w-5" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
