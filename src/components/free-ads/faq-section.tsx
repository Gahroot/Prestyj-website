"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { Button } from "@/components/ui/button";
import { pricingTiers } from "@/lib/pricing-data";
import { bulkAdPricingTiers } from "@/lib/bulk-ad-pricing-data";

const starterTier = pricingTiers.find((t) => t.id === "starter");
if (!starterTier) {
  throw new Error("Starter tier not found in pricing-data.ts");
}
const formatPrice = (n: number): string => `$${n.toLocaleString("en-US")}`;
const STARTER_SETUP = formatPrice(starterTier.setupFee);
const STARTER_MONTHLY = formatPrice(starterTier.monthlyPrice);

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
    answer: (
      <>
        We hope you give us the opportunity to run those ads for you and set up our full{" "}
        <Link
          href="/platform"
          className="text-primary hover:text-primary/80 underline underline-offset-2"
        >
          AI platform
        </Link>
        . If not, the ads are yours and we go our separate ways.
      </>
    ),
  },
  {
    question: "How much does the full system cost?",
    answer: (
      <div className="space-y-2">
        <p>
          <span className="text-foreground font-semibold">{STARTER_SETUP}</span> setup fee
        </p>
        <p>
          <span className="text-foreground font-semibold">{STARTER_MONTHLY}</span> / month
        </p>
        <p className="pt-1">
          You&apos;ll also need a minimum of $1,000/month in ad spend paid directly to Meta.{" "}
          <Link
            href="/pricing"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            See full pricing details →
          </Link>
        </p>
      </div>
    ),
  },
  {
    question: "Can I buy more ads?",
    answer: (
      <div className="space-y-3">
        <p>Yes, we have different one-time packages.</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-border border-b">
                <th className="text-foreground py-2 pr-4 text-left font-semibold">Package</th>
                <th className="text-foreground py-2 text-left font-semibold">Price</th>
              </tr>
            </thead>
            <tbody>
              {bulkAdPricingTiers.map((tier, i) => (
                <tr
                  key={tier.name}
                  className={
                    i < bulkAdPricingTiers.length - 1 ? "border-border/50 border-b" : undefined
                  }
                >
                  <td className="py-2 pr-4">{tier.name}</td>
                  <td className="text-foreground py-2 font-semibold">{tier.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="pt-1">
          <Link
            href="/bulk-video-ad-pricing"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            See full batch ad pricing →
          </Link>
        </p>
      </div>
    ),
  },
  {
    question: "Can I see samples before committing?",
    answer: (
      <>
        You already are. The ad you clicked, this landing page you&apos;re reading, and the AI that
        will follow up with you after you submit — that&apos;s the exact system we build for your
        business. You can also{" "}
        <Link
          href="/samples"
          className="text-primary hover:text-primary/80 underline underline-offset-2"
        >
          see more video ad samples →
        </Link>
        .
      </>
    ),
  },
  {
    question: "How is this different from other ad agencies?",
    answer:
      "Most agencies hand you a few ads and a report. We build the entire pipeline: 300 ads, landing page, and an AI system that responds to leads in seconds — not hours. No leads slip through the cracks because a human wasn't fast enough.",
  },
  {
    question: "What industries do you create video ads for?",
    answer:
      "We create video ads for service businesses including real estate teams, HVAC contractors, plumbers, roofers, landscapers, and home service companies. Our scripts and ad strategies are tailored to each industry's buyer psychology and seasonal patterns.",
  },
  {
    question: "What platforms do the video ads work on?",
    answer:
      "Our video ads are optimized for Meta (Facebook and Instagram), TikTok, YouTube Shorts, and Google Video campaigns. Each batch includes platform-specific aspect ratios and durations so your ads perform well wherever you run them.",
  },
];

export function FreeAdsFAQ() {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="mb-12 text-center">
          <h2 className="font-heading text-foreground mb-4 text-3xl font-bold sm:text-4xl">
            Questions? Answers.
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.2}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border-border rounded-lg border px-6"
              >
                <AccordionTrigger className="font-heading text-foreground text-left font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.3} className="mt-12 flex justify-center">
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
