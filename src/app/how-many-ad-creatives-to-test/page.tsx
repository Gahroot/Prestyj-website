import type { Metadata } from "next";
import { HowManyCreativesClient } from "./client";
import { FAQJsonLd } from "@/components/seo/json-ld";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";

export const metadata: Metadata = {
  title: "How Many Ad Creatives Should You Test? [Free Calculator] | PRESTYJ",
  description:
    "Free calculator: enter your ad spend and CPC to get the minimum number of creative variations you need to test per month for statistically valid results. Most accounts under-test by 10x.",
  openGraph: {
    title: "How Many Ad Creatives Should You Test? | PRESTYJ",
    description:
      "Free calculator to find your minimum creative test volume for statistical significance.",
    type: "website",
  },
  alternates: { canonical: "https://prestyj.com/how-many-ad-creatives-to-test" },
};

const FAQS = [
  {
    q: "Why do I need 50+ creatives to find a winner?",
    a: "Because winning ads are statistical outliers — typically the top 5-10% of anything you test. To find one outlier with confidence, you need to generate enough candidates. Testing 5 ads and picking the best gives you the best of 5, which is not the same as a winner.",
  },
  {
    q: "What's 'the 50-hook rule'?",
    a: "A rough heuristic from media buyers running real accounts: to find one hook that consistently produces below-target CPLs, you typically test 50+ hook variations. One or two will break out. Most will be average. Some will be bad. That's the distribution — and you can't shortcut it.",
  },
  {
    q: "Doesn't this calculator just tell me to buy more ads?",
    a: "It tells you the math. If you're spending $3k/month on ads, the math says you need roughly 6-10 creative tests per month for valid results. If you're producing 2, you're under-testing by 3-5x. Whether you solve that with us, in-house, or agencies is up to you — we just show you the gap.",
  },
  {
    q: "What's a 'statistically significant' test here?",
    a: "Rough rule: 100+ clicks per variant to get directional signal, 300-500+ for confidence. Below 100 clicks per variant, you're looking at noise. This calculator uses 100 clicks/variant as the floor for its minimum estimate.",
  },
  {
    q: "Can I just run fewer, better creatives?",
    a: "You can't pick winners in advance. Every media buyer who's ever worked an account at scale will tell you: the ads you expect to win rarely do. The point of volume testing is to surface the outliers you wouldn't have bet on. See our batch video ads page for how to produce this volume.",
  },
];

export default function HowManyCreativesPage() {
  return (
    <>
      <FAQJsonLd faqs={FAQS.map((f) => ({ question: f.q, answer: f.a }))} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://prestyj.com" },
          {
            name: "How Many Ad Creatives to Test",
            url: "https://prestyj.com/how-many-ad-creatives-to-test",
          },
        ]}
      />
      <HowManyCreativesClient faqs={FAQS} />
    </>
  );
}
