"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { SolutionObjections } from "@/lib/solutions/types";

interface ObjectionAccordionProps {
  content: SolutionObjections;
}

export function ObjectionAccordion({ content }: ObjectionAccordionProps) {
  return (
    <section
      id="objections"
      className="py-24"
      aria-labelledby="objections-heading"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2
            id="objections-heading"
            className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4"
          >
            {content.headline}
          </h2>
          <p className="text-muted-foreground text-lg">{content.subheadline}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion
            type="single"
            collapsible
            className="bg-card rounded-xl border border-border shadow-sm"
          >
            {content.objections.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="px-6 border-border"
              >
                <AccordionTrigger className="text-left text-base font-medium text-foreground hover:text-primary hover:no-underline py-5">
                  <span className="pr-4">&ldquo;{item.objection}&rdquo;</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {item.response}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
