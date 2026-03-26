import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import {
  LandingHero,
  LandingPainPoints,
  LandingBenefits,
  LandingCTA,
  ROICalculator,
  ObjectionAccordion,
} from "@/components/sections/landing";
import { CompareFeatureTable } from "@/components/sections/compare/CompareFeatureTable";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { salesAutomation, salesAutomationComparison } from "@/lib/solutions/sales-automation";

const siteUrl = "https://prestyj.com";

export const metadata: Metadata = {
  title: salesAutomation.meta.title,
  description: salesAutomation.meta.description,
  keywords: salesAutomation.meta.keywords,
  openGraph: {
    title: salesAutomation.meta.title,
    description: salesAutomation.meta.description,
    type: "website",
    url: `${siteUrl}/solutions/sales-automation`,
  },
  alternates: {
    canonical: `${siteUrl}/solutions/sales-automation`,
  },
};

export default function SalesAutomationPage() {
  return (
    <>
      <Navbar />
      <main>
        <LandingHero content={salesAutomation.hero} />
        <LandingPainPoints content={salesAutomation.painPoints} />
        {salesAutomation.calculator && (
          <ROICalculator content={salesAutomation.calculator} />
        )}
        <LandingBenefits content={salesAutomation.benefits} />
        <CompareFeatureTable
          features={salesAutomationComparison.features}
          competitorName="Manual Sales Process"
        />
        {salesAutomation.objections && (
          <ObjectionAccordion content={salesAutomation.objections} />
        )}
        {salesAutomation.faqs && (
          <section className="py-24">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <AnimateOnScroll className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
                  Sales Automation FAQ
                </h2>
                <p className="text-muted-foreground text-lg">
                  Everything you need to know about implementing sales automation.
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <Accordion type="single" collapsible className="space-y-4">
                  {salesAutomation.faqs.map((faq, index) => (
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
        <LandingCTA content={salesAutomation.cta} />
      </main>
      <Footer />
    </>
  );
}
