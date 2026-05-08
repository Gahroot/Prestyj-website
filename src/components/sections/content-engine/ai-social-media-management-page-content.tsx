"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Breadcrumb } from "@/components/ui/breadcrumb";
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
import { aiSocialMediaManagementConfig } from "@/lib/content-engine/ai-social-media-management-config";

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
} = aiSocialMediaManagementConfig;

export function AISocialMediaManagementPageContent() {
  return (
    <>
      <Navbar />
      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "AI Social Media Management" },
            ]}
          />
        </div>
        <ContentEngineHero config={heroConfig} />
        <ContentEngineProofBar config={proofBarConfig} />
        <ContentEngineProblem config={problemConfig} />
        <ContentEngineSolution config={solutionConfig} />
        <ContentEngineVideoWalkthrough config={videoWalkthroughConfig} />
        <ContentEngineProofScreenshots config={proofScreenshotsConfig} />
        <ContentEngineLiveAccounts config={liveAccountsConfig} />
        <ContentEngineLiveFeed config={liveFeedConfig} />
        <ContentEngineHowItWorks config={howItWorksConfig} />
        <ContentEngineComparison config={comparisonConfig} />
        <ContentEnginePricing config={pricingConfig} />
        <ContentEngineFAQ config={faqConfig} />
        <ContentEngineCTA config={ctaConfig} />
      </main>
      <Footer />
    </>
  );
}
