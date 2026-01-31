import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import type { ComparePageData } from "@/lib/compare/types";
import { CompareHero } from "./CompareHero";
import { CompareStats } from "./CompareStats";
import { ComparePricing } from "./ComparePricing";
import { CompareFeatureTable } from "./CompareFeatureTable";
import { CompareWhySwitch } from "./CompareWhySwitch";
import { CompareRelatedResources } from "./CompareRelatedResources";
import { CompareCTA } from "./CompareCTA";
import { CostCalculator } from "./special/CostCalculator";
import { SecurityWarning } from "./special/SecurityWarning";
import { TCPAWarning } from "./special/TCPAWarning";

interface ComparePageWrapperProps {
  data: ComparePageData;
}

export function ComparePageWrapper({ data }: ComparePageWrapperProps) {
  const {
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

        {relatedResources && relatedResources.length > 0 && (
          <CompareRelatedResources resources={relatedResources} />
        )}

        <CompareCTA data={cta} />
      </main>
      <Footer />
    </>
  );
}
