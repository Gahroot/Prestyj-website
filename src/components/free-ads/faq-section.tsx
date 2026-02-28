"use client";

import type { ReactNode } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { Button } from "@/components/ui/button";

const faqs: { question: string; answer: ReactNode }[] = [
  {
    question: "Are the 300 video ads really free?",
    answer:
      "Yes, 100% free. You send us your raw footage, and within 24 hours we deliver 300 unique video ads ready to run. No catch, no credit card, no commitment. We do this because we know once you see the quality, you'll want the full system.",
  },
  {
    question: "What kind of footage do I need to send?",
    answer:
      "We'll walk you through everything on the call. We send you the scripts — you just record yourself on your phone using a teleprompter app. No production crew, no fancy equipment. Relatability sells.",
  },
  {
    question: "What happens after I get my 300 ads?",
    answer:
      "We hope you give us the opportunity to run those ads for you and set up our full system. If not, the ads are yours and we go our separate ways.",
  },
  {
    question: "How much does the full system cost?",
    answer: (
      <div className="space-y-2">
        <p><span className="font-semibold text-foreground">$5K</span> setup fee</p>
        <p><span className="font-semibold text-foreground">$2K</span> / month</p>
        <p className="pt-1">You&apos;ll also need a minimum of $1,000/month in ad spend paid directly to Meta.</p>
      </div>
    ),
  },
  {
    question: "Can I buy more ads?",
    answer: (
      <div className="space-y-3">
        <p>Yes, we have different packages.</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-4 font-semibold text-foreground">Package</th>
                <th className="text-left py-2 pr-4 font-semibold text-foreground">Regular</th>
                <th className="text-left py-2 font-semibold text-foreground">Subscriber Price</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4">300 ads</td>
                <td className="py-2 pr-4">$3,000</td>
                <td className="py-2 font-semibold text-success">$1,500</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4">500 ads</td>
                <td className="py-2 pr-4">$4,000</td>
                <td className="py-2 font-semibold text-success">$2,000</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">1000 ads</td>
                <td className="py-2 pr-4">$5,000</td>
                <td className="py-2 font-semibold text-success">$2,500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  {
    question: "How is this different from other ad agencies?",
    answer:
      "Most agencies hand you a few ads and a report. We build the entire pipeline: 300 ads, landing page, and an AI system that responds to leads in seconds — not hours. No leads slip through the cracks because a human wasn't fast enough.",
  },
];

export function FreeAdsFAQ() {
  const scrollToForm = () => {
    document
      .getElementById("lead-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            Questions? Answers.
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.2}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.3} className="flex justify-center mt-12">
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
