import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import {
  defaultContentEngineConfig,
  type SolutionConfig,
} from "@/lib/content-engine";

interface ContentEngineSolutionProps {
  config?: SolutionConfig;
}

export function ContentEngineSolution({
  config = defaultContentEngineConfig.solution,
}: ContentEngineSolutionProps) {
  const { headline, subhead, pillars } = config;

  return (
    <section className="py-24 bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            {headline}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {subhead}
          </p>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <AnimateOnScroll key={pillar.title} delay={i * 0.05}>
              <div className="bg-card border border-border rounded-lg p-6 h-full hover:border-primary/40 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <pillar.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
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
