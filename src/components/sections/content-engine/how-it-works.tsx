import { CreditCard, Cog, Rocket, RefreshCw } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

const STEPS = [
  {
    number: "01",
    icon: CreditCard,
    title: "Pay & Connect",
    description: "Pick a plan. Grant account access. We start the clock.",
    highlight: "Day 0",
  },
  {
    number: "02",
    icon: Cog,
    title: "AI Builds Your Engine",
    description:
      "Brand kit, voice, prompt stack, platform connections — wired up and live in 24 hours.",
    highlight: "Live in 24h or setup fee refunded",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Posts Start Shipping",
    description:
      "Multiple accounts, 7 platforms, every single day. Algorithm-safe volume.",
    highlight: "Day 1 onward",
  },
  {
    number: "04",
    icon: RefreshCw,
    title: "Monthly Refresh + Reporting",
    description: "Hooks rotate. Avatars evolve. You see what's working.",
    highlight: "Always optimizing",
  },
];

export function ContentEngineHowItWorks() {
  return (
    <section id="how-it-works" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            From Payment to Posting in 24 Hours.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            One link. The AI handles the rest.
          </p>
        </AnimateOnScroll>

        <div className="space-y-12">
          {STEPS.map((step, index) => (
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
                <p className="text-muted-foreground mb-4">{step.description}</p>
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
