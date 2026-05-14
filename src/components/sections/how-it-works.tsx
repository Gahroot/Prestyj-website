import { Zap, MessageSquare, Calendar, RotateCcw } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { HowItWorksCTA } from "./how-it-works-cta";

const steps = [
  {
    number: "01",
    icon: Zap,
    title: "Instant Lead Response",
    description:
      "A lead fills out your form at 9pm on a Saturday. Your AI agent texts them back in under 60 seconds — from your brand, in your voice. Your competitors haven't even seen the notification yet.",
    highlight: "Sub-60-second average response",
  },
  {
    number: "02",
    icon: MessageSquare,
    title: "Smart Qualification",
    description:
      "The conversation flows naturally. Timeline, motivation, budget, fit. Your AI agent asks the right questions without sounding like a script. You only talk to the leads worth your time.",
    highlight: "Leads qualified by our AI in plain conversation.",
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
      "That database of leads from last year? Most teams leave them for dead. Your AI agent re-engages them with personalized follow-ups that actually get responses. Turn sunk ad spend into new business.",
    highlight: "Reactivate cold leads in your CRM.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="mb-16 text-center">
          <h2 className="font-heading text-foreground mb-4 text-3xl font-bold sm:text-4xl">
            How Our AI Agents Work
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            From lead capture to booked meeting — fully automated.
          </p>
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

        <HowItWorksCTA />
      </div>
    </section>
  );
}
