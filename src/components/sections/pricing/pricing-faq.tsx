"use client";

import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { pricingFaqs } from "@/lib/pricing-data";
import BorderGlow from "@/components/ui/border-glow";

/** Key phrases that should become internal links within FAQ answers. */
const linkReplacements: Record<string, { href: string; label: string }> = {
  "batch video ads": {
    href: "/batch-video-ads",
    label: "batch video ads",
  },
  "300 batch video ads": {
    href: "/free-ads",
    label: "300 batch video ads",
  },
};

/**
 * Replace linkable phrases in a plain-text FAQ answer with Next.js Links.
 * Uses longest-match-first to avoid nested replacements.
 */
function renderAnswerWithLinks(answer: string) {
  const sorted = Object.entries(linkReplacements).sort((a, b) => b[0].length - a[0].length);

  // Build a list of segments — either plain strings or Link elements
  const segments: React.ReactNode[] = [];
  let remaining = answer;

  while (remaining.length > 0) {
    let earliestMatch: { index: number; phrase: string; href: string } | null = null;

    for (const [phrase, { href }] of sorted) {
      const idx = remaining.toLowerCase().indexOf(phrase.toLowerCase());
      if (idx !== -1) {
        if (!earliestMatch || idx < earliestMatch.index) {
          earliestMatch = { index: idx, phrase: remaining.slice(idx, idx + phrase.length), href };
        }
      }
    }

    if (!earliestMatch) {
      segments.push(remaining);
      break;
    }

    // Push text before the match
    if (earliestMatch.index > 0) {
      segments.push(remaining.slice(0, earliestMatch.index));
    }

    // Push the linked match
    segments.push(
      <Link
        key={segments.length}
        href={earliestMatch.href}
        className="text-primary hover:text-primary/80 underline underline-offset-2"
      >
        {earliestMatch.phrase}
      </Link>,
    );

    remaining = remaining.slice(earliestMatch.index + earliestMatch.phrase.length);
  }

  return segments;
}

export function PricingFAQSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="mb-12 text-center">
          <h2 className="font-heading text-foreground mb-4 text-3xl font-bold sm:text-4xl">
            Pricing Questions? Answered.
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about plans, pricing, and getting started.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.2}>
          <Accordion type="single" collapsible className="space-y-4">
            {pricingFaqs.map((faq, index) => (
              <BorderGlow key={index} borderRadius={10} innerClassName="px-6">
                <AccordionItem value={`item-${index}`} className="border-none">
                  <AccordionTrigger className="font-heading text-foreground text-left font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {renderAnswerWithLinks(faq.answer)}
                  </AccordionContent>
                </AccordionItem>
              </BorderGlow>
            ))}
          </Accordion>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
