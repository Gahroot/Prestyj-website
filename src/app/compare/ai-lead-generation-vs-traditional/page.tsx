"use client";

import { ComparePageWrapper } from "@/components/sections/compare/ComparePageWrapper";
import {
  aiLeadGenVsTraditionalData,
  traditionalMethodPainPoints,
  aiLeadGenBenefits,
  aiVsTraditionalFAQ,
} from "@/lib/compare/data/ai-lead-generation-vs-traditional";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { AlertCircle, CheckCircle, Zap } from "lucide-react";

export default function AILeadGenerationVsTraditionalPage() {
  return (
    <>
      <ComparePageWrapper data={aiLeadGenVsTraditionalData} />

      {/* Traditional Pain Points Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
              The Problem with Traditional Lead Generation
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Manual lead handling creates bottlenecks that cost you deals. Here&apos;s why traditional methods are holding you back.
            </p>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {traditionalMethodPainPoints.map((point, index) => (
              <AnimateOnScroll key={index} delay={index * 0.1}>
                <div className="bg-card border border-border rounded-lg p-6 h-full">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-2">
                        {point.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* AI Benefits Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
              Why AI Lead Generation Wins
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              AI-powered lead generation eliminates the bottlenecks of traditional methods, helping you convert more leads into customers.
            </p>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiLeadGenBenefits.map((benefit, index) => (
              <AnimateOnScroll key={index} delay={index * 0.1}>
                <div className="bg-card border border-border rounded-lg p-6 h-full">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
              AI vs Traditional: Your Questions Answered
            </h2>
            <p className="text-muted-foreground text-lg">
              Common questions about making the switch from manual to AI-powered lead generation.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.2}>
            <Accordion type="single" collapsible className="space-y-4">
              {aiVsTraditionalFAQ.map((faq, index) => (
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
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 sm:p-12">
              <Zap className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
                Ready to Leave Traditional Behind?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Join businesses that have already switched to AI-powered lead generation. See the difference in your first week.
              </p>
              <a
                href="/book-demo"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Book Your Free Demo
              </a>
              <p className="text-muted-foreground text-sm mt-4">
                No credit card required. See it work with your leads.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
