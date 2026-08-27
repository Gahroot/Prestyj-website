import type { ReactElement } from "react";

import { firmPrompts, type FirmPrompt } from "@/lib/institutional/prompts";
import { cn } from "@/lib/utils";

function PromptCard({ prompt }: { prompt: FirmPrompt }): ReactElement {
  return (
    // Spacing lives on the card, not as a track gap, so the -50% loop is exact.
    <figure className="bg-card/70 mr-4 w-80 shrink-0 rounded-2xl border p-5 sm:w-96">
      <blockquote className="text-foreground text-[15px] leading-relaxed text-pretty">
        &ldquo;{prompt.ask}&rdquo;
      </blockquote>
      <figcaption className="mt-4 flex flex-wrap gap-1.5">
        {prompt.sources.map((source) => (
          <span
            key={source}
            className="text-muted-foreground bg-secondary/60 rounded-md border px-2 py-0.5 text-xs"
          >
            {source}
          </span>
        ))}
      </figcaption>
    </figure>
  );
}

function MarqueeRow({
  prompts,
  reverse = false,
}: {
  prompts: readonly FirmPrompt[];
  reverse?: boolean;
}): ReactElement {
  return (
    <div className={cn("animate-marquee flex w-max", reverse && "[animation-direction:reverse]")}>
      {/* Two identical copies: translating the track -50% lands on copy two. */}
      {[0, 1].map((copy) => (
        <div key={copy} aria-hidden={copy === 1} className="flex shrink-0">
          {prompts.map((prompt) => (
            <PromptCard key={prompt.ask} prompt={prompt} />
          ))}
        </div>
      ))}
    </div>
  );
}

export function PromptMarquee(): ReactElement {
  const midpoint = Math.ceil(firmPrompts.length / 2);

  return (
    <section className="overflow-hidden border-b py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-heading text-foreground text-3xl font-bold tracking-tight text-balance sm:text-4xl">
          It knows your firm&rsquo;s
          <span className="text-primary"> way of working</span>
        </h2>
        <p className="text-muted-foreground mt-4 text-lg text-pretty">
          Not a chatbot pointed at your files. Agents wired into the systems the answer actually
          lives in, holding your firm&rsquo;s criteria, your formats, and your review rules.
        </p>
      </div>

      <div className="relative mt-14 flex flex-col gap-4 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <MarqueeRow prompts={firmPrompts.slice(0, midpoint)} />
        <MarqueeRow prompts={firmPrompts.slice(midpoint)} reverse />
      </div>
    </section>
  );
}
