import type { BestForPageContent } from "./types";
import { GEO_COMPARISON_HEADERS, geoComparisonRows, GEO_CTA_BUTTON } from "./_geo-helpers";

export const realEstateVideoAdsNewYork: BestForPageContent = {
  slug: "real-estate-video-ads-new-york",
  niche: {
    name: "Real Estate Video Ads for New York",
    shortName: "New York Realtors",
    description:
      "New York State agents using batch vertical video ad creative to convert NYC condo / brownstone, Westchester / Long Island family, upstate (Rochester, Buffalo, Albany) across REBNY, OneKey, GRAR, WNYREIS and regional MLS territory under NY DOS compliance.",
  },
  meta: {
    title: "Real Estate Video Ads for New York | 300–1,000 Scripted Ads | Prestyj",
    description:
      "NY State agents: 300–1,000 vertical video ads in 24 hours. Tuned for REBNY, OneKey, upstate MLSs, and NY DOS compliance. From $1,497.",
    keywords: [
      "real estate video ads new york state",
      "ny realtor facebook ads",
      "ny dos compliant video ads",
      "new york state real estate",
      "rebny onekey video ads",
      "ny agent batch video",
    ],
  },
  hero: {
    badge: "Statewide Batch Video Ads for NY Realtors",
    headline: "NYC Buildings, Westchester Districts,",
    headlineAccent: "Upstate Affordability — Three Tracks.",
    subheadline:
      "New York State splits across three completely different markets: NYC (Manhattan buildings, Brooklyn blocks, Queens lifestyle), Westchester / Long Island family (school-district-driven), and upstate (Rochester, Buffalo, Albany — affordability and Northeast-escapers). Prestyj turns one 20-minute selfie recording into 300–1,000 scripted vertical video ads for NY agents across REBNY, OneKey, GRAR, WNYREIS, and regional MLSs with NY DOS compliance built in.",
  },
  whyBestFor: [
    {
      icon: "Home",
      title: "NYC buildings, blocks, and neighborhoods need sub-market specificity",
      description:
        "Manhattan condo buyers shop by building. Brooklyn brownstone buyers shop by block. Queens buyers split between Astoria lifestyle and Bayside family. Sophisticated NYC buyers need building-aware and block-specific creative.",
    },
    {
      icon: "Target",
      title: "Westchester and Long Island family buyers shop by school district",
      description:
        "Scarsdale, Rye, Chappaqua in Westchester; Manhasset, Garden City, Great Neck in Long Island — $1M–$3M+ decisions driven by school districts. District-specific creative with actual feeder-pattern knowledge converts.",
    },
    {
      icon: "Users",
      title: "Upstate NY (Buffalo, Rochester, Albany, Syracuse) absorbs NYC escapers",
      description:
        "Cost-of-living relocators from NYC, SF, and LA increasingly target upstate NY for affordability and top schools. Upstate creative with cost-comparison math converts.",
    },
    {
      icon: "Building2",
      title: "Hudson Valley (Beacon, Hudson, Saugerties) is a distinct second-home / weekender market",
      description:
        "Hudson Valley attracts NYC weekender and permanent-escape buyers. Hudson Valley-specific creative with historic-home and commute-from-NYC honesty converts.",
    },
    {
      icon: "Shield",
      title: "NY Department of State compliance applies statewide",
      description:
        "NY DOS Division of Licensing rules require licensed broker disclosure, proper team/DBA disclosures, no discriminatory source language, no implied buyer-side commission solicitation public-facing. Post-NAR settlement adds buyer-rep agreement requirements. We bake NY DOS + NAR compliance into every script.",
    },
  ],
  painPoints: [
    {
      problem: "Your NYC creative is generic 'Manhattan luxury' and doesn't reference specific buildings",
      solution:
        "We script building-aware creative: 'the three 57th Street buildings still offering negotiable terms in 2026,' 'Brooklyn Heights vs Cobble Hill — the block-level value gap.'",
    },
    {
      problem: "Your Westchester family buyers stall on school-district comparison",
      solution:
        "We script district-specific creative: 'Scarsdale vs Rye for a family with elementary-age kids,' 'Chappaqua Horace Greeley vs Byram Hills — the tiebreaker parents ask.'",
    },
    {
      problem: "Your upstate NY buyers don't find cost-comparison creative that resonates",
      solution:
        "We script cost-comparison creative: 'if NYC priced you out at $1.5M, here's what Buffalo / Rochester / Albany offer,' 'Hudson Valley for the NYC weekender-to-permanent.'",
    },
    {
      problem: "Your Long Island ads don't handle North Shore vs South Shore",
      solution:
        "We script LI creative: 'North Shore (Manhasset, Great Neck, Port Washington) vs South Shore (Massapequa, Merrick, Bellmore) — the LI family tradeoff,' 'the Five Towns luxury family decision.'",
    },
    {
      problem: "Your MLS 'Just Listed' posts are indistinguishable",
      solution:
        "We write hook-driven creative rooted in NYC building-awareness, Westchester / LI district, and upstate cost-comparison specificity.",
    },
  ],
  comparison: {
    headers: GEO_COMPARISON_HEADERS,
    rows: geoComparisonRows("New York"),
  },
  faq: [
    {
      question: "Can one batch cover NYC, Westchester, LI, and upstate?",
      answer:
        "Yes. A 1,000-ad batch can include NYC (REBNY), Westchester / LI (OneKey MLS), Hudson Valley, and upstate (Buffalo WNYREIS, Rochester GRAR, Albany CRMLS/GCAR) sub-tracks from one 20-minute recording.",
    },
    {
      question: "How do REBNY and OneKey MLS differ for ad purposes?",
      answer:
        "REBNY governs Manhattan inter-broker compensation. OneKey MLS covers Brooklyn, Queens, Long Island, and Westchester for consumer-facing MLS data. For ad creative, the distinction matters less than sub-market specificity. Our scripts are buyer-facing and sub-market-focused.",
    },
    {
      question: "What NY DOS compliance do I need in every video ad?",
      answer:
        "NY Department of State Division of Licensing requires licensed broker disclosure, proper team/DBA disclosures, no discriminatory source language, no implied buyer-side commission solicitation. Post-NAR settlement adds buyer-rep agreement requirements. We bake NY + NAR compliance into every script.",
    },
    {
      question: "Is upstate NY really absorbing NYC relocators?",
      answer:
        "Yes, at growing rates. Buffalo and Rochester specifically absorb cost-of-living relocators from NYC and coastal metros. Upstate creative with direct NYC-comparison math converts serious relocators.",
    },
    {
      question: "Can batch handle Hudson Valley and Catskills markets?",
      answer:
        "Yes. Hudson Valley (Beacon, Hudson, Saugerties, Woodstock, Rhinebeck) and Catskills second-home markets each have their own dynamics. Multi-market batch covers them.",
    },
  ],
  cta: {
    headline: "One Batch for NYC, Suburbs, and Upstate.",
    subheadline:
      "One 20-minute recording. 300–1,000 vertical ads tuned for REBNY, OneKey MLS, upstate MLSs, and NY DOS compliance. Delivered in 24 hours.",
    ...GEO_CTA_BUTTON,
  },
};
