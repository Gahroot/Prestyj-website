"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ContentEngineHero } from "@/components/sections/content-engine/hero";
import { ContentEngineProofBar } from "@/components/sections/content-engine/proof-bar";
import { ContentEngineProblem } from "@/components/sections/content-engine/problem";
import { ContentEngineSolution } from "@/components/sections/content-engine/solution";
import { ContentEngineVideoWalkthrough } from "@/components/sections/content-engine/video-walkthrough";
import { ContentEngineProofScreenshots } from "@/components/sections/content-engine/proof-screenshots";
import { ContentEngineLiveAccounts } from "@/components/sections/content-engine/live-accounts";
import { ContentEngineLiveFeed } from "@/components/sections/content-engine/live-feed";
import { ContentEngineHowItWorks } from "@/components/sections/content-engine/how-it-works";
import { ContentEnginePricing } from "@/components/sections/content-engine/pricing";
import { ContentEngineComparison } from "@/components/sections/content-engine/comparison";
import { ContentEngineFAQ } from "@/components/sections/content-engine/faq";
import { ContentEngineCTA } from "@/components/sections/content-engine/cta";
import { volumeContentEngineConfig } from "@/lib/content-engine/volume-config";

const {
  hero: heroConfig,
  proofBar: proofBarConfig,
  problem: problemConfig,
  solution: solutionConfig,
  videoWalkthrough: videoWalkthroughConfig,
  proofScreenshots: proofScreenshotsConfig,
  liveAccounts: liveAccountsConfig,
  liveFeed: liveFeedConfig,
  howItWorks: howItWorksConfig,
  pricing: pricingConfig,
  comparison: comparisonConfig,
  faq: faqConfig,
  cta: ctaConfig,
} = volumeContentEngineConfig;

export function ThousandPostsPageContent() {
  return (
    <>
      <Navbar />
      <main>
        <ContentEngineHero config={heroConfig} />
        <ContentEngineProofBar config={proofBarConfig} />
        <ContentEngineProblem config={problemConfig} />
        <ContentEngineSolution config={solutionConfig} />
        <ContentEngineVideoWalkthrough config={videoWalkthroughConfig} />
        <ContentEngineProofScreenshots config={proofScreenshotsConfig} />
        <ContentEngineLiveAccounts config={liveAccountsConfig} />
        <ContentEngineLiveFeed config={liveFeedConfig} />
        <ContentEngineHowItWorks config={howItWorksConfig} />
        <ContentEnginePricing config={pricingConfig} />
        <ContentEngineComparison config={comparisonConfig} />
        <ContentEngineFAQ config={faqConfig} />
        <ContentEngineCTA config={ctaConfig} />
      </main>
      <Footer />
    </>
  );
}
