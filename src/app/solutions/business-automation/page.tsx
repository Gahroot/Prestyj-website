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
import {
  businessAutomation,
  businessAutomationComparison,
} from "@/lib/solutions/business-automation";

const siteUrl = "https://prestyj.com";

export const metadata: Metadata = {
  title: businessAutomation.meta.title,
  description: businessAutomation.meta.description,
  keywords: businessAutomation.meta.keywords,
  openGraph: {
    title: businessAutomation.meta.title,
    description: businessAutomation.meta.description,
    type: "website",
    url: `${siteUrl}/solutions/business-automation`,
  },
  alternates: {
    canonical: `${siteUrl}/solutions/business-automation`,
  },
};

export default function BusinessAutomationPage() {
  return (
    <>
      <Navbar />
      <main>
        <LandingHero content={businessAutomation.hero} />
        <LandingPainPoints content={businessAutomation.painPoints} />
        {businessAutomation.calculator && (
          <ROICalculator content={businessAutomation.calculator} />
        )}
        <LandingBenefits content={businessAutomation.benefits} />
        <CompareFeatureTable
          features={businessAutomationComparison.features}
          competitorName="Manual Processes"
        />
        {businessAutomation.objections && (
          <ObjectionAccordion content={businessAutomation.objections} />
        )}
        {businessAutomation.faqs && (
          <section className="py-24">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <AnimateOnScroll className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
                  Business Automation FAQ
                </h2>
                <p className="text-muted-foreground text-lg">
                  Everything you need to know about implementing workflow automation.
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <Accordion type="single" collapsible className="space-y-4">
                  {businessAutomation.faqs.map((faq, index) => (
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
        <LandingCTA content={businessAutomation.cta} />
      </main>
      <Footer />
    </>
  );
}
