import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import type { ComparePageData } from "@/lib/compare/types";
import { CompareHero } from "./CompareHero";
import { CompareStats } from "./CompareStats";
import { ComparePricing } from "./ComparePricing";
import { CompareFeatureTable } from "./CompareFeatureTable";
import { CompareWhySwitch } from "./CompareWhySwitch";
import { CompareRelatedResources } from "./CompareRelatedResources";
import { CompareReviews } from "./CompareReviews";
import { CompareCTA } from "./CompareCTA";
import { CostCalculator } from "./special/CostCalculator";
import { SecurityWarning } from "./special/SecurityWarning";
import { TCPAWarning } from "./special/TCPAWarning";
import { CLIENT_TESTIMONIALS } from "@/lib/testimonials";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { SafeJsonLd } from "@/components/seo/safe-json-ld";
import { resolveProprietaryData } from "@/lib/proprietary-data";
import { ProprietaryDataSection } from "@/components/sections/proprietary-data-section";

interface ComparePageWrapperProps {
  data: ComparePageData;
}

const SITE_URL = "https://prestyj.com";

export function ComparePageWrapper({ data }: ComparePageWrapperProps) {
  const {
    slug,
    competitorName,
    hero,
    stats,
    pricing,
    features,
    whySwitch,
    relatedResources,
    cta,
    specialSections = [],
  } = data;

  const proprietaryData = resolveProprietaryData(data.proprietaryData);

  const pageUrl = `${SITE_URL}/compare/${slug}`;

  // BreadcrumbList schema
  const breadcrumbs = [
    { name: "Home", url: SITE_URL },
    { name: "Compare", url: `${SITE_URL}/compare` },
    { name: `Prestyj vs ${competitorName}`, url: pageUrl },
  ];

  // Product schema for Prestyj with comparison context
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Prestyj AI Sales Agent",
    description:
      hero.subtitle || `Compare Prestyj AI Sales Agent vs ${competitorName}. ${hero.description}`,
    brand: { "@type": "Brand", name: "Prestyj" },
    url: pageUrl,
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: pricing.prestyj.price.replace(/[^0-9]/g, "") || "1997",
      availability: "https://schema.org/InStock",
      seller: { "@type": "Organization", name: "Prestyj" },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      bestRating: "5",
      worstRating: "1",
      reviewCount: CLIENT_TESTIMONIALS.length,
    },
    review: CLIENT_TESTIMONIALS.map((t) => ({
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: t.author },
      reviewBody: t.full,
      ...(t.href ? { url: t.href } : {}),
    })),
  };

  // FAQPage schema derived from hero key stats and feature comparisons
  const faqItems = features.slice(0, 5).map((f) => ({
    question: `How does Prestyj compare to ${competitorName} for ${f.feature}?`,
    answer:
      f.note ||
      `Prestyj offers ${typeof f.prestyj === "boolean" ? (f.prestyj ? "full support" : "no support") : f.prestyj} for ${f.feature}, while ${competitorName} offers ${typeof f.competitor === "boolean" ? (f.competitor ? "support" : "no support") : f.competitor}.`,
  }));

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  // Helper to render special sections at a given position
  const renderSpecialSections = (position: string) => {
    return specialSections
      .filter((section) => section.position === position)
      .map((section, index) => {
        switch (section.type) {
          case "cost-calculator":
            return <CostCalculator key={`special-${position}-${index}`} />;
          case "security-warning":
            return <SecurityWarning key={`special-${position}-${index}`} />;
          case "tcpa-warning":
            return <TCPAWarning key={`special-${position}-${index}`} />;
          default:
            return null;
        }
      });
  };

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <SafeJsonLd data={productSchema} />
      <SafeJsonLd data={faqSchema} />
      <Navbar />
      <main className="pt-16">
        <CompareHero data={hero} />

        {stats && stats.length > 0 && <CompareStats stats={stats} />}
        {renderSpecialSections("after-stats")}

        <ComparePricing data={pricing} />
        {renderSpecialSections("after-pricing")}

        <CompareFeatureTable features={features} competitorName={competitorName} />
        {renderSpecialSections("after-features")}

        <CompareWhySwitch data={whySwitch} />
        {renderSpecialSections("after-why-switch")}

        {proprietaryData && <ProprietaryDataSection block={proprietaryData} surface="muted" />}

        <CompareReviews competitorName={competitorName} />

        {relatedResources && relatedResources.length > 0 && (
          <CompareRelatedResources resources={relatedResources} />
        )}

        <CompareCTA data={cta} />
      </main>
      <Footer />
    </>
  );
}
