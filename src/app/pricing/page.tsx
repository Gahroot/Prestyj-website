import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PricingHero } from "@/components/sections/pricing/pricing-hero";
import { PricingTiersSection } from "@/components/sections/pricing/pricing-tiers";
import { PricingComparisonSection } from "@/components/sections/pricing/pricing-comparison";
import { PricingStoriesSection } from "@/components/sections/pricing/pricing-stories";
import { PricingROISection } from "@/components/sections/pricing/pricing-roi";
import { PricingFAQSection } from "@/components/sections/pricing/pricing-faq";
import { CTASection } from "@/components/sections/cta";
import { FAQJsonLd } from "@/components/seo/json-ld";
import { pricingFaqs } from "@/lib/pricing-data";

export default function PricingPage() {
  return (
    <>
      <FAQJsonLd faqs={pricingFaqs} />
      <Navbar />
      <main>
        <PricingHero />
        <PricingTiersSection />
        <PricingComparisonSection />
        <PricingStoriesSection />
        <PricingROISection />
        <PricingFAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
