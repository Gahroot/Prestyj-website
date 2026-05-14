import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { Button } from "@/components/ui/button";
import { FAQJsonLd } from "@/components/seo/json-ld";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { ArrowRight } from "lucide-react";
import BorderGlow from "@/components/ui/border-glow";
import { faqs } from "@/lib/faq-data";

const siteUrl = "https://prestyj.com";

export const metadata: Metadata = {
  title: "FAQ | AI Agents for Marketing & Sales",
  description:
    "Common questions about Prestyj — what you get, pricing, onboarding, integrations, and how our AI agents for marketing and sales actually work.",
  keywords: [
    "AI agents FAQ",
    "AI marketing agent",
    "AI sales agent",
    "AI agent pricing",
    "AI agent onboarding",
    "Prestyj FAQ",
  ],
  openGraph: {
    title: "FAQ | AI Agents for Marketing & Sales",
    description:
      "Common questions about Prestyj — what you get, pricing, onboarding, integrations, and how our AI agents for marketing and sales actually work.",
    type: "website",
    url: `${siteUrl}/faq`,
  },
  alternates: {
    canonical: `${siteUrl}/faq`,
  },
};

const breadcrumbs = [
  { name: "Home", url: siteUrl },
  { name: "FAQ", url: `${siteUrl}/faq` },
];

export default function FAQPage() {
  return (
    <>
      <FAQJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={breadcrumbs} />
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <AnimateOnScroll>
              <h1 className="font-heading text-foreground mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl">
                Questions? Answers.
              </h1>
              <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
                Everything you need to know about Prestyj — what we build, how it works, what it
                costs, and what happens after you book a demo.
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="pb-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll delay={0.1}>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <BorderGlow key={index} borderRadius={10} innerClassName="px-6">
                    <AccordionItem value={`item-${index}`} className="border-none">
                      <AccordionTrigger className="font-heading text-foreground text-left font-semibold hover:no-underline">
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

        {/* CTA Section */}
        <section className="relative overflow-hidden py-24">
          <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <AnimateOnScroll>
              <h2 className="font-heading text-foreground mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl">
                Still have questions?
              </h2>
              <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg">
                Book a free demo and we&apos;ll walk you through exactly how AI agents would work in
                your marketing and sales funnel.
              </p>
              <Button size="lg" className="px-10 py-6 text-lg" asChild>
                <Link href="/book-demo">
                  Book a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <p className="text-muted-foreground mt-6 text-sm">
                No commitment. We&apos;ll tell you if it&apos;s not a fit.
              </p>
            </AnimateOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
