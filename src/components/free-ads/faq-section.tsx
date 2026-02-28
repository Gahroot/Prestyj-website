"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "Are the 300 video ads really free?",
    answer:
      "Yes, 100% free. You send us your raw footage, and within 24 hours we deliver 300 unique video ads ready to run. No catch, no credit card, no commitment. We do this because we know once you see the quality, you'll want the full system.",
  },
  {
    question: "What kind of footage do I need to send?",
    answer:
      "Just raw video of you or your team — talking to camera, walking through a property, behind-the-scenes, anything. We show up with scripts and make it effortless. Zero experience on camera needed. Most of our clients wrap up in about 20 minutes.",
  },
  {
    question: "What happens after I get my 300 ads?",
    answer:
      "If you qualify, we offer a full done-for-you system: we upload all 300 ads to your Facebook ad account, build you a custom landing page, and set up AI that instantly calls, texts, qualifies, and books leads for you. You just show up to the appointments.",
  },
  {
    question: "How much does the full system cost?",
    answer:
      "Setup is $3K-$5K (landing page, AI setup, ad account structure) with a $1K-$2K monthly retainer for ad management, AI maintenance, and support. You'll also need a minimum of $1,000/month in ad spend paid directly to Meta.",
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
