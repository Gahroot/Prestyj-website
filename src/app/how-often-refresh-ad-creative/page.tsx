import type { Metadata } from "next";
import { RefreshCadenceClient } from "./client";
import { FAQJsonLd } from "@/components/seo/json-ld";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";

export const metadata: Metadata = {
  title: "How Often Should You Refresh Ad Creative? [Free Calculator] | PRESTYJ",
  description:
    "Enter your ad spend and active creative count to see how many days until fatigue — plus how many new ads per week you need to produce. Spend drives cadence, not the calendar.",
  openGraph: {
    title: "How Often to Refresh Ad Creative? | PRESTYJ",
    description:
      "Free calculator: find your real refresh cadence based on spend and creative volume.",
    type: "website",
  },
  alternates: {
    canonical: "https://prestyj.com/how-often-refresh-ad-creative",
  },
};

const FAQS = [
  {
    q: "Why does spend determine cadence instead of a calendar rule?",
    a: "Because fatigue is about impressions per unique user, not days on the calendar. A $1k/month account might run the same 3 ads for 30 days before frequency climbs above 3. A $20k/month account will hit frequency 3+ on those same 3 ads in 4-5 days. Time doesn't fatigue ads — frequency does, and frequency tracks spend.",
  },
  {
    q: "What's a healthy frequency cap?",
    a: "Broad consensus: keep rolling 7-day frequency under 3, and any single creative's lifetime frequency under 5-6 on a given audience. Above those, CTR decays and CPMs inflate. Below them, you're generally safe.",
  },
  {
    q: "Can I just re-use old winners?",
    a: "Yes and no. You can pause, rest a winner for 30-60 days, then bring it back — but the audience has memory, especially warm retargeting pools. Permanent reuse without rest triggers the same fatigue dynamics.",
  },
  {
    q: "What counts as a 'new' creative for refresh purposes?",
    a: "New hook, new body framing, or genuinely new visual cut. Changing only the CTA button color does not reset fatigue. Changing the opening 3-second hook and the first 8 seconds of body does.",
  },
  {
    q: "How do I actually produce this refresh volume?",
    a: "If your calculator result says you need 15+ new ads per week, you cannot realistically do this in-house while running a business. That's why we built batch video ads — one recording session, 300-1000 scripted variations in 24 hours.",
  },
];

export default function RefreshCadencePage() {
  return (
    <>
      <FAQJsonLd faqs={FAQS.map((f) => ({ question: f.q, answer: f.a }))} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://prestyj.com" },
          {
            name: "How Often to Refresh Ad Creative",
            url: "https://prestyj.com/how-often-refresh-ad-creative",
          },
        ]}
      />
      <RefreshCadenceClient faqs={FAQS} />
    </>
  );
}
