import { Zap, MessageSquare, Calendar, RotateCcw } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { HowItWorksCTA } from "./how-it-works-cta";

const steps = [
  {
    number: "01",
    icon: Zap,
    title: "Speed-to-Lead",
    description:
      "A buyer fills out your form at 9pm on a Saturday. Your AI team member texts them back in under 60 seconds — from your brand, in your voice. Your competitors haven't even seen the notification yet.",
    highlight: "47 second average response",
  },
  {
    number: "02",
    icon: MessageSquare,
    title: "Smart Qualification",
    description:
      "The conversation flows naturally. Timeline, motivation, budget, pre-approval status. Your AI team member asks the right questions without sounding like a script. You only talk to the leads worth your time.",
    highlight: "Buyers, sellers & investors qualified",
  },
  {
    number: "03",
    icon: Calendar,
    title: "Appointment Booking",
    description:
      "Qualified leads get booked directly on your calendar. You wake up to confirmed appointments — not a pile of voicemails and texts to sort through.",
    highlight: "Direct calendar integration",
  },
  {
    number: "04",
    icon: RotateCcw,
    title: "Lead Recovery",
    description:
      "That database of leads from last year? Most teams leave them for dead. Your AI team member re-engages them with personalized follow-ups that actually get responses. Turn sunk ad spend into new business.",
    highlight: "Resurrect your cold database",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            How Your AI Team Member Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From new lead to booked appointment — fully automated, fully on-brand.
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
                <p className="text-muted-foreground mb-4">{step.description}</p>
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                  {step.highlight}
                </span>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <HowItWorksCTA />
      </div>
    </section>
  );
}
