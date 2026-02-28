"use client";

import {
  Video,
  Clock,
  Upload,
  Globe,
  Bot,
  CalendarCheck,
} from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { Button } from "@/components/ui/button";

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
    description:
      "Send us your footage today, get 300 finished ads back tomorrow. That fast.",
    free: true,
  },
  {
    icon: Upload,
    title: "Uploaded to Facebook",
    description:
      "We don't just hand you files. We upload all 300 ads directly to your ad account.",
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            Here&apos;s Exactly What You Get
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            300 free video ads is just the beginning. Here&apos;s the full system that turns your footage into booked appointments.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <AnimateOnScroll key={index} delay={index * 0.1}>
              <div className="bg-card border border-border rounded-xl p-6 h-full relative">
                <span
                  className={`absolute top-4 right-4 text-xs font-bold px-2.5 py-1 rounded-full ${
                    feature.free
                      ? "bg-success/10 text-success"
                      : "bg-primary/10 text-primary"
                  }`}
                >
                  {feature.free ? "1ST BATCH FREE" : "PAID"}
                </span>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll className="flex justify-center">
          <Button
            size="lg"
            onClick={scrollToForm}
            className="font-bold text-base md:text-lg px-8 md:px-12 py-6 md:py-7 rounded-lg shadow-lg shadow-primary/25"
          >
            Get My FREE Ads
          </Button>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
