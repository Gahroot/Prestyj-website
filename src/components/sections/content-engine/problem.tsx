import { X } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { defaultContentEngineConfig, type ProblemConfig } from "@/lib/content-engine";

interface ContentEngineProblemProps {
  config?: ProblemConfig;
}

export function ContentEngineProblem({
  config = defaultContentEngineConfig.problem,
}: ContentEngineProblemProps) {
  const { headline, subhead, pains } = config;

  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="mb-16 text-center">
          <h2 className="font-heading text-foreground mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
            {headline}
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">{subhead}</p>
        </AnimateOnScroll>

        <div className="grid gap-6 md:grid-cols-2">
          {pains.map((pain, i) => (
            <AnimateOnScroll key={pain.title} delay={i * 0.1}>
              <div className="bg-card border-border h-full rounded-lg border p-6">
                <div className="flex items-start gap-3">
                  <div className="bg-destructive/10 mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full">
                    <X className="text-destructive h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-heading text-foreground mb-2 font-semibold">
                      {pain.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{pain.detail}</p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
