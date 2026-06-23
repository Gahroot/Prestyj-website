"use client";

import Link from "next/link";
import { Star } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { Button } from "@/components/ui/button";
import BorderGlow from "@/components/ui/border-glow";

const testimonials = [
  {
    text: "If you are looking to start making some videos, this is the company to hire. It took 20 minutes, they showed up with scripts, all I had to do was read and walk.",
    highlight: "20 minutes. Scripts ready. All I had to do was read and walk.",
    role: "Real Estate Team Lead",
  },
  {
    text: "I have zero experience on camera. It was so much easier than anticipated. They couldn't make it easier for their clients if they tried.",
    highlight: "Zero experience on camera. So much easier than anticipated.",
    role: "HVAC Contractor",
  },
  {
    text: "100% happy and will definitely be using their services in the future. If I could give them more than 5 stars I would.",
    highlight: "If I could give them more than 5 stars I would.",
    role: "Home Services Business Owner",
  },
];

export function SocialProof({ ctaHref }: { ctaHref?: string }) {
  return (
    <section className="py-8 md:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="mb-12 text-center">
          <h2 className="font-heading text-foreground mb-4 text-3xl font-bold sm:text-4xl">
            Don&apos;t Take Our Word For It
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Real results from real clients who sent us their footage.
          </p>
        </AnimateOnScroll>

        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <AnimateOnScroll key={index} delay={index * 0.15}>
              <BorderGlow borderRadius={14} innerClassName="p-6 flex flex-col" className="h-full">
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="fill-success text-success h-5 w-5" />
                  ))}
                </div>
                <p className="text-foreground font-heading mb-3 text-lg font-semibold">
                  &ldquo;{testimonial.highlight}&rdquo;
                </p>
                <p className="text-muted-foreground flex-1 text-sm">{testimonial.text}</p>
                <p className="text-primary border-border mt-3 border-t pt-3 text-xs font-medium">
                  {testimonial.role}
                </p>
              </BorderGlow>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll className="flex justify-center">
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
