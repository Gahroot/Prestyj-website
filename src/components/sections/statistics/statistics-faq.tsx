"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { statisticsFaqs } from "@/lib/statistics-data";
import BorderGlow from "@/components/ui/border-glow";

export function StatisticsFAQSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <AnimateOnScroll className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Common questions about lead response, video advertising, and AI
            adoption statistics.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.2}>
          <Accordion type="single" collapsible className="space-y-4">
            {statisticsFaqs.map((faq, index) => (
              <BorderGlow key={index} borderRadius={10} innerClassName="px-6">
                <AccordionItem
                  value={`item-${index}`}
                  className="border-none"
                >
                  <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
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
