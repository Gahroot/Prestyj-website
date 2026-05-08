import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import {
  defaultContentEngineConfig,
  type HowItWorksConfig,
} from "@/lib/content-engine";

interface ContentEngineHowItWorksProps {
  config?: HowItWorksConfig;
}

export function ContentEngineHowItWorks({
  config = defaultContentEngineConfig.howItWorks,
}: ContentEngineHowItWorksProps) {
  const { headline, subhead, steps } = config;

  return (
    <section id="how-it-works" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            {headline}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {subhead}
          </p>
        </AnimateOnScroll>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <AnimateOnScroll
              key={step.number}
              delay={index * 0.1}
              className="flex flex-col md:flex-row items-start gap-8"
            >
              <div className="flex items-center gap-4 md:pt-1 shrink-0">
                <span className="text-5xl font-heading font-bold text-primary/20 leading-none">
                  {step.number}
                </span>
                <step.icon className="h-8 w-8 text-primary shrink-0" />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {step.description}
                </p>
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                  {step.highlight}
                </span>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
