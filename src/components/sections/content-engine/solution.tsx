import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { defaultContentEngineConfig, type SolutionConfig } from "@/lib/content-engine";

interface ContentEngineSolutionProps {
  config?: SolutionConfig;
}

export function ContentEngineSolution({
  config = defaultContentEngineConfig.solution,
}: ContentEngineSolutionProps) {
  const { headline, subhead, pillars } = config;

  return (
    <section className="bg-muted/20 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="mb-16 text-center">
          <h2 className="font-heading text-foreground mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
            {headline}
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">{subhead}</p>
        </AnimateOnScroll>

        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <AnimateOnScroll key={pillar.title} delay={i * 0.05}>
              <div className="bg-card border-border hover:border-primary/40 h-full rounded-lg border p-6 transition-colors">
                <div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
                  <pillar.icon className="text-primary h-6 w-6" />
                </div>
                <h3 className="font-heading text-foreground mb-2 font-semibold">{pillar.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
