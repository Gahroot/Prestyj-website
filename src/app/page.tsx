import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { PainPointsSection } from "@/components/sections/pain-points";
import { SolutionSection } from "@/components/sections/solution";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { PricingSection } from "@/components/sections/pricing";
import { FAQSection } from "@/components/sections/faq";
import { faqs } from "@/lib/faq-data";
import { CTASection } from "@/components/sections/cta";
import {
  OrganizationJsonLd,
  WebSiteJsonLd,
  ProductJsonLd,
  FAQJsonLd,
  SoftwareApplicationJsonLd,
} from "@/components/seo/json-ld";

export default function Home() {
  return (
    <>
      <OrganizationJsonLd />
      <WebSiteJsonLd />
      <ProductJsonLd />
      <SoftwareApplicationJsonLd />
      <FAQJsonLd faqs={faqs} />
      <Navbar />
      <main>
        <HeroSection />
        <PainPointsSection />
        <SolutionSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
