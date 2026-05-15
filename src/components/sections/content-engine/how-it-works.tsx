import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { defaultContentEngineConfig, type HowItWorksConfig } from "@/lib/content-engine";

interface ContentEngineHowItWorksProps {
  config?: HowItWorksConfig;
}

export function ContentEngineHowItWorks({
  config = defaultContentEngineConfig.howItWorks,
}: ContentEngineHowItWorksProps) {
  const { headline, subhead, steps } = config;

  return (
    <section id="how-it-works" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="mb-16 text-center">
          <h2 className="font-heading text-foreground mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
            {headline}
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">{subhead}</p>
        </AnimateOnScroll>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <AnimateOnScroll
              key={step.number}
              delay={index * 0.1}
              className="flex flex-col items-start gap-8 md:flex-row"
            >
              <div className="flex shrink-0 items-center gap-4 md:pt-1">
                <span className="font-heading text-primary/20 text-5xl leading-none font-bold">
                  {step.number}
                </span>
                <step.icon className="text-primary h-8 w-8 shrink-0" />
              </div>
              <div>
                <h3 className="font-heading text-foreground mb-3 text-2xl font-semibold">
                  {step.title}
                </h3>
                <p className="text-muted-foreground mb-4">{step.description}</p>
                <span className="bg-primary/10 text-primary inline-block rounded-full px-3 py-1 text-sm">
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
