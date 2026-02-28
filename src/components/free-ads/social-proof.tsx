"use client";

import { Star } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    text: "If you are looking to start making some videos, this is the company to hire. It took 20 minutes, they showed up with scripts, all I had to do was read and walk.",
    highlight: "20 minutes. Scripts ready. All I had to do was read and walk.",
  },
  {
    text: "I have zero experience on camera. It was so much easier than anticipated. They couldn't make it easier for their clients if they tried.",
    highlight: "Zero experience on camera. So much easier than anticipated.",
  },
  {
    text: "100% happy and will definitely be using their services in the future. If I could give them more than 5 stars I would.",
    highlight: "If I could give them more than 5 stars I would.",
  },
];

export function SocialProof() {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            Don&apos;t Take Our Word For It
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real results from real clients who sent us their footage.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <AnimateOnScroll key={index} delay={index * 0.15}>
              <div className="bg-card border border-border rounded-xl p-6 h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-success text-success"
                    />
                  ))}
                </div>
                <p className="text-foreground font-heading font-semibold text-lg mb-3">
                  &ldquo;{testimonial.highlight}&rdquo;
                </p>
                <p className="text-muted-foreground text-sm flex-1">
                  {testimonial.text}
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
