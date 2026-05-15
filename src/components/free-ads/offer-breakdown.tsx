"use client";

import { Video, Clock, Megaphone, Globe, Bot, CalendarCheck } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { Button } from "@/components/ui/button";
import BorderGlow from "@/components/ui/border-glow";

const features = [
  {
    icon: Video,
    title: "300 Custom Video Ads",
    description:
      "Unique, scroll-stopping creatives made from your footage. Not templates — real ads.",
    free: true,
  },
  {
    icon: Clock,
    title: "24-Hour Turnaround",
    description: "Send us your footage today, get 300 finished ads back tomorrow. That fast.",
    free: true,
  },
  {
    icon: Megaphone,
    title: "We Run the Ads for You",
    description:
      "We don't just hand you creatives and wish you luck. We launch and manage the campaigns in your ad account. You do nothing.",
    free: false,
  },
  {
    icon: Globe,
    title: "Custom Landing Page",
    description:
      "A high-converting landing page built specifically for your offer. Not a generic template.",
    free: false,
  },
  {
    icon: Bot,
    title: "AI Responds Instantly",
    description:
      "When leads come in, AI calls and texts them within seconds. 24/7. No leads slip through.",
    free: false,
  },
  {
    icon: CalendarCheck,
    title: "Appointments on Your Calendar",
    description:
      "Leads get qualified and booked automatically. You just show up to the appointments.",
    free: false,
  },
];

export function OfferBreakdown() {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="mb-16 text-center">
          <h2 className="font-heading text-foreground mb-4 text-3xl font-bold sm:text-4xl">
            Here&apos;s Exactly What You Get
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            300 free video ads is just the beginning. Here&apos;s the full system that turns your
            footage into booked appointments.
          </p>
        </AnimateOnScroll>

        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <AnimateOnScroll key={index} delay={index * 0.1}>
              <BorderGlow borderRadius={14} innerClassName="p-6" className="relative h-full">
                <span
                  className={`absolute top-4 right-4 rounded-full px-2.5 py-1 text-xs font-bold ${
                    feature.free ? "bg-success/10 text-success" : "bg-primary/10 text-primary"
                  }`}
                >
                  {feature.free ? "1ST BATCH FREE" : "PAID"}
                </span>
                <div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-full">
                  <feature.icon className="text-primary h-6 w-6" />
                </div>
                <h3 className="font-heading text-foreground mb-2 text-lg font-semibold">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </BorderGlow>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll className="flex justify-center">
          <Button
            size="lg"
            onClick={scrollToForm}
            className="shadow-primary/25 rounded-lg px-8 py-6 text-base font-bold shadow-lg md:px-12 md:py-7 md:text-lg"
          >
            Get My FREE Ads
          </Button>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
