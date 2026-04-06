"use client";

import Link from "next/link";
import { MousePointerClick, Globe, Bot, CheckCircle } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { Button } from "@/components/ui/button";
import BorderGlow from "@/components/ui/border-glow";

const steps = [
  {
    icon: MousePointerClick,
    label: "You Clicked Our Ad",
    description: "You saw a video ad and it caught your attention.",
  },
  {
    icon: Globe,
    label: "You Landed Here",
    description: "This page was built by us — just like we'd build yours.",
  },
  {
    icon: Bot,
    label: "AI Will Follow Up",
    description:
      "After you submit, AI responds instantly via call and text. 24/7.",
  },
  {
    icon: CheckCircle,
    label: "That's the System",
    description: "Ads, landing page, AI follow-up. You just experienced it.",
  },
];

export function LiveProof({ ctaHref }: { ctaHref?: string }) {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-10">
          <p className="text-sm font-bold uppercase tracking-widest text-primary mb-3">
            Want to see a sample?
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            You&apos;re Looking At It Right Now
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The ad you clicked, this landing page, and the AI that&apos;ll text
            you next — that&apos;s exactly what we build for your business.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, index) => (
            <AnimateOnScroll key={index} delay={index * 0.1}>
              <BorderGlow borderRadius={14} innerClassName="p-5 text-center" className="relative h-full">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2.5 -translate-y-1/2 text-muted-foreground/40 text-xl font-bold">
                    &rarr;
                  </div>
                )}
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary mb-3">
                  <step.icon className="w-5 h-5" />
                </div>
                <p className="font-heading font-semibold text-foreground text-sm mb-1">
                  {step.label}
                </p>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {step.description}
                </p>
              </BorderGlow>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll className="flex justify-center mt-10">
          {ctaHref ? (
            <Button
              size="lg"
              asChild
              className="font-bold text-base md:text-lg px-8 md:px-12 py-6 md:py-7 rounded-lg shadow-lg shadow-primary/25"
            >
              <Link href={ctaHref}>Get My FREE Ads</Link>
            </Button>
          ) : (
            <Button
              size="lg"
              onClick={scrollToForm}
              className="font-bold text-base md:text-lg px-8 md:px-12 py-6 md:py-7 rounded-lg shadow-lg shadow-primary/25"
            >
              Get My FREE Ads
            </Button>
          )}
        </AnimateOnScroll>
      </div>
    </section>
  );
}
