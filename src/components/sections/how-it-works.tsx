import { Zap, MessageSquare, Calendar, RotateCcw } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { HowItWorksCTA } from "./how-it-works-cta";

const steps = [
  {
    number: "01",
    icon: Zap,
    title: "Speed-to-Lead",
    description:
      "A new lead comes in. Your agent responds in under 60 seconds via text or call. While your competitors are still checking their phones.",
    highlight: "47 second average response",
  },
  {
    number: "02",
    icon: MessageSquare,
    title: "Smart Qualification",
    description:
      "Your agent asks the right questions naturally. Timeline, budget, qualification criteria. No scripts that feel robotic.",
    highlight: "BANT qualification built-in",
  },
  {
    number: "03",
    icon: Calendar,
    title: "Appointment Booking",
    description:
      "Qualified leads get booked directly on your calendar. You wake up to appointments, not follow-up tasks.",
    highlight: "Direct calendar integration",
  },
  {
    number: "04",
    icon: RotateCcw,
    title: "Lead Recovery",
    description:
      "Old leads sitting in your CRM? Your agent re-engages them with personalized follow-ups. Turn cold leads warm again.",
    highlight: "Resurrect dormant leads",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From lead to appointment in 4 simple steps. Fully automated.
          </p>
        </AnimateOnScroll>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <AnimateOnScroll
              key={step.number}
              delay={index * 0.1}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-8 md:gap-16`}
            >
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-5xl font-heading font-bold text-primary/20">
                    {step.number}
                  </span>
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-heading font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground mb-4">{step.description}</p>
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                  {step.highlight}
                </span>
              </div>
              <div className="flex-1 w-full">
                <div className="bg-background border border-border rounded-lg p-8 h-48 flex items-center justify-center">
                  <step.icon className="h-16 w-16 text-primary/30" />
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <HowItWorksCTA />
      </div>
    </section>
  );
}
