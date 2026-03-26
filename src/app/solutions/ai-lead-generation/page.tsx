import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import {
  LandingHero,
  LandingPainPoints,
  LandingBenefits,
  LandingCTA,
  ROICalculator,
} from "@/components/sections/landing";
import { CompareFeatureTable } from "@/components/sections/compare/CompareFeatureTable";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { aiLeadGeneration, aiLeadGenerationComparison } from "@/lib/solutions/ai-lead-generation";

const siteUrl = "https://prestyj.com";

export const metadata: Metadata = {
  title: aiLeadGeneration.meta.title,
  description: aiLeadGeneration.meta.description,
  keywords: aiLeadGeneration.meta.keywords,
  openGraph: {
    title: aiLeadGeneration.meta.title,
    description: aiLeadGeneration.meta.description,
    type: "website",
    url: `${siteUrl}/solutions/ai-lead-generation`,
  },
  alternates: {
    canonical: `${siteUrl}/solutions/ai-lead-generation`,
  },
};

export default function AILeadGenerationPage() {
  return (
    <>
      <Navbar />
      <main>
        <LandingHero content={aiLeadGeneration.hero} />
        <LandingPainPoints content={aiLeadGeneration.painPoints} />
        {aiLeadGeneration.calculator && (
          <ROICalculator content={aiLeadGeneration.calculator} />
        )}
        <LandingBenefits content={aiLeadGeneration.benefits} />
        <CompareFeatureTable
          features={aiLeadGenerationComparison.features}
          competitorName="Manual Lead Capture"
        />
        {aiLeadGeneration.faqs && (
          <section className="py-24">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <AnimateOnScroll className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
                  AI Lead Generation FAQ
                </h2>
                <p className="text-muted-foreground text-lg">
                  Everything you need to know about capturing leads with AI.
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <Accordion type="single" collapsible className="space-y-4">
                  {aiLeadGeneration.faqs.map((faq, index) => (
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
        )}
        <LandingCTA content={aiLeadGeneration.cta} />
      </main>
      <Footer />
    </>
  );
}
