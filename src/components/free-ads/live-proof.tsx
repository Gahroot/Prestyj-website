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
    description: "After you submit, AI responds instantly via call and text. 24/7.",
  },
  {
    icon: CheckCircle,
    label: "That's the System",
    description: "Ads, landing page, AI follow-up. You just experienced it.",
  },
];

export function LiveProof({ ctaHref }: { ctaHref?: string }) {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="mb-10 text-center">
          <p className="text-primary mb-3 text-sm font-bold tracking-widest uppercase">
            Want to see a sample?
          </p>
          <h2 className="font-heading text-foreground mb-4 text-3xl font-bold sm:text-4xl">
            You&apos;re Looking At It Right Now
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            The ad you clicked, this landing page, and the AI that&apos;ll text you next —
            that&apos;s exactly what we build for your business.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <AnimateOnScroll key={index} delay={index * 0.1}>
              <BorderGlow
                borderRadius={14}
                innerClassName="p-5 text-center"
                className="relative h-full"
              >
                {index < steps.length - 1 && (
                  <div className="text-muted-foreground/40 absolute top-1/2 -right-2.5 hidden -translate-y-1/2 text-xl font-bold lg:block">
                    &rarr;
                  </div>
                )}
                <div className="bg-primary/10 text-primary mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full">
                  <step.icon className="h-5 w-5" />
                </div>
                <p className="font-heading text-foreground mb-1 text-sm font-semibold">
                  {step.label}
                </p>
                <p className="text-muted-foreground text-xs leading-relaxed">{step.description}</p>
              </BorderGlow>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll className="mt-10 flex justify-center">
          <Button
            size="lg"
            asChild
            className="shadow-primary/25 rounded-lg px-8 py-6 text-base font-bold shadow-lg md:px-12 md:py-7 md:text-lg"
          >
            <Link href={ctaHref ?? "/pricing"}>See Plans &amp; Pricing</Link>
          </Button>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
