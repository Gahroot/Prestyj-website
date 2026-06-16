import Link from "next/link";
import type { ReactElement } from "react";
import { ArrowRight, Calculator, Clapperboard, Layers3 } from "lucide-react";

import { Button } from "@/components/ui/button";

export function VideoMachineSection(): ReactElement {
  return (
    <section id="video-machine" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="from-primary/15 to-primary/5 grid overflow-hidden rounded-[2rem] border bg-linear-to-br via-transparent lg:grid-cols-[1.05fr_0.95fr]">
          <div className="p-8 sm:p-10 lg:p-12">
            <div className="bg-primary/10 text-primary inline-grid size-12 place-items-center rounded-2xl">
              <Clapperboard className="h-5 w-5" />
            </div>
            <h2 className="font-heading text-foreground mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
              The productized on-ramp: one recording into hundreds of ad tests.
            </h2>
            <p className="text-muted-foreground mt-4 text-lg leading-8">
              The video-ad machine is still here — just in the right place. It is
              one repeatable Prestyj system inside the broader AI-agent stack for
              creative testing, lead capture, and follow-up.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/batch-video-ads">
                  See batch video ads
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/batch-video-ad-roi-calculator">
                  <Calculator className="h-5 w-5" />
                  Run ROI calculator
                </Link>
              </Button>
            </div>
          </div>

          <div className="border-t bg-slate-950 p-8 text-white lg:border-t-0 lg:border-l lg:p-12">
            <div className="flex items-center gap-3">
              <Layers3 className="text-primary h-6 w-6" />
              <p className="font-semibold">What the machine tests</p>
            </div>
            <div className="mt-8 grid gap-4">
              {[
                "Hooks: first-three-second angles and pattern interrupts.",
                "Bodies: pains, proof points, demos, objections, and offers.",
                "CTAs: booking, lead magnets, quote requests, and direct response.",
                "Variants: enough volume to learn instead of guessing from 3–5 ads.",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  {item}
                </div>
              ))}
            </div>
            <Link
              href="/300-video-ads"
              className="text-primary mt-6 inline-flex items-center gap-2 text-sm font-semibold hover:underline"
            >
              View the 300-video-ad page
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
