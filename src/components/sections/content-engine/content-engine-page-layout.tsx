import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ContentEngineHero } from "@/components/sections/content-engine/hero";
import { ContentEngineProofBar } from "@/components/sections/content-engine/proof-bar";
import { ContentEngineProblem } from "@/components/sections/content-engine/problem";
import { ContentEngineSolution } from "@/components/sections/content-engine/solution";
import { ContentEngineVideoWalkthrough } from "@/components/sections/content-engine/video-walkthrough";
import { ContentEngineProofScreenshots } from "@/components/sections/content-engine/proof-screenshots";
import { ContentEngineCaseStudy } from "@/components/sections/content-engine/case-study";
import { ContentEngineLiveAccounts } from "@/components/sections/content-engine/live-accounts";
import { ContentEngineLiveFeed } from "@/components/sections/content-engine/live-feed";
import { ContentEngineHowItWorks } from "@/components/sections/content-engine/how-it-works";
import { ContentEnginePricing } from "@/components/sections/content-engine/pricing";
import { ContentEngineComparison } from "@/components/sections/content-engine/comparison";
import { ContentEngineFAQ } from "@/components/sections/content-engine/faq";
import { ContentEngineAvatarGrid } from "@/components/sections/content-engine/avatar-grid";
import { ContentEngineCTA } from "@/components/sections/content-engine/cta";

import type { ContentEnginePageConfig } from "@/lib/content-engine/page-config";

interface ContentEnginePageLayoutProps {
  config: ContentEnginePageConfig;
}

export function ContentEnginePageLayout({
  config,
}: ContentEnginePageLayoutProps) {
  return (
    <>
      <Navbar />
      <main>
        <ContentEngineHero config={config.hero} />
        <ContentEngineProofBar config={config.proofBar} />
        <ContentEngineProblem config={config.problem} />
        <ContentEngineSolution config={config.solution} />
        <ContentEngineVideoWalkthrough config={config.videoWalkthrough} />
        <ContentEngineProofScreenshots config={config.proofScreenshots} />
        <ContentEngineCaseStudy />
        <ContentEngineLiveAccounts config={config.liveAccounts} />
        <ContentEngineLiveFeed config={config.liveFeed} />
        <ContentEngineHowItWorks config={config.howItWorks} />
        <ContentEnginePricing config={config.pricing} />
        <ContentEngineComparison config={config.comparison} />
        <ContentEngineAvatarGrid />
        <ContentEngineFAQ config={config.faq} />
        <ContentEngineCTA config={config.cta} />
      </main>
      <Footer />
    </>
  );
}
