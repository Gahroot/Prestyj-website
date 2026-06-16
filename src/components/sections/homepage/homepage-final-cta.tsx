import Link from "next/link";
import type { ReactElement } from "react";
import { ArrowRight, Bot, Mic } from "lucide-react";

import { Button } from "@/components/ui/button";

export function HomepageFinalCta(): ReactElement {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="from-primary/20 to-primary/5 relative overflow-hidden rounded-[2rem] border bg-linear-to-br p-8 text-center sm:p-12">
          <div className="bg-primary/20 text-primary mx-auto grid size-14 place-items-center rounded-2xl">
            <Bot className="h-6 w-6" />
          </div>
          <h2 className="font-heading text-foreground mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
            Give us the task your team keeps doing by hand.
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg leading-8">
            We will turn the repeated calls, follow-up, intake, reporting, content,
            booking or handoff work into an AI system your team can use every day.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/book-demo">
                Book a build call
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/#ai-concierge">
                <Mic className="h-5 w-5" />
                Try the voice demo
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
