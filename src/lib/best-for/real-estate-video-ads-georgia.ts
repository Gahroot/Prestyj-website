import type { BestForPageContent } from "./types";
import { GEO_COMPARISON_HEADERS, geoComparisonRows, GEO_CTA_BUTTON } from "./_geo-helpers";

export const realEstateVideoAdsGeorgia: BestForPageContent = {
  slug: "real-estate-video-ads-georgia",
  niche: {
    name: "Real Estate Video Ads for Georgia",
    shortName: "Georgia Realtors",
    description:
      "Georgia agents using batch vertical video ad creative to convert Atlanta ITP / OTP sub-markets, out-of-state relocation, and Savannah / coastal markets across FMLS, GAMLS, and regional Georgia MLS territory under GREC compliance.",
  },
  meta: {
    title: "Real Estate Video Ads for Georgia | 300–1,000 Scripted Ads | Prestyj",
    description:
      "Georgia agents: 300–1,000 vertical video ads in 24 hours. Tuned for FMLS, GAMLS, GREC compliance, ITP/OTP, and out-of-state relocation. From $1,497.",
    keywords: [
      "real estate video ads georgia",
      "georgia realtor facebook ads",
      "grec compliant video ads",
      "georgia real estate marketing",
      "fmls gamls video ads",
      "georgia agent batch video",
    ],
  },
  hero: {
    badge: "Statewide Batch Video Ads for Georgia Realtors",
    headline: "ITP Intown, OTP Suburbs, Savannah Coast —",
    headlineAccent: "Georgia's Three Markets.",
    subheadline:
      "Georgia real estate runs on three distinct markets: Atlanta ITP (intown walkability) vs OTP (Outside the Perimeter family suburbs), Athens / Augusta / Columbus secondary metros, and Savannah / coastal Georgia luxury and retirement. Prestyj turns one 20-minute selfie recording into 300–1,000 scripted vertical video ads for Georgia agents across FMLS, GAMLS, and regional MLSs with GREC compliance built in.",
  },
  whyBestFor: [
    {
      icon: "Home",
      title: "Atlanta ITP vs OTP are Georgia's defining sub-markets",
      description:
        "ITP (Intown Atlanta) buyers want walkability, BeltLine, specific neighborhoods (Virginia-Highland, Inman Park, Grant Park). OTP buyers want school districts, new construction, family communities (Alpharetta, Johns Creek, Forsyth). Sub-market creative wins both.",
    },
    {
      icon: "Users",
      title: "Out-of-state relocation (NY, IL, CA) fuels Georgia demand",
      description:
        "NY, Chicago, and LA buyers relocate to Atlanta for lower cost-of-living. Relocation-specific creative with Georgia homestead and tax math converts.",
    },
    {
      icon: "Target",
      title: "Savannah / Coastal Georgia is a distinct luxury and retirement market",
      description:
        "Savannah historic district, Tybee Island, Hilton Head-adjacent, Sea Island attract luxury and retirement buyers. Coastal-specific creative with hurricane-insurance and lifestyle-authentic scripts converts.",
    },
    {
      icon: "Building2",
      title: "Secondary metros (Athens, Augusta, Columbus, Macon) each have specific drivers",
      description:
        "Athens (UGA / healthcare), Augusta (medical, military Fort Eisenhower), Columbus (Fort Moore military, Synovus / Aflac), Macon (small metro family) each have their own pipelines. Secondary-market creative captures these buyers.",
    },
    {
      icon: "Shield",
      title: "GREC compliance applies statewide",
      description:
        "Georgia Real Estate Commission rules require licensed broker disclosure, no discriminatory source language, no implied buyer-side commission solicitation, proper team/DBA disclosures. Post-NAR settlement adds buyer-rep agreement requirements. We bake GREC + NAR compliance into every script.",
    },
  ],
  painPoints: [
    {
      problem: "Your ITP vs OTP buyers get the wrong creative and convert poorly",
      solution:
        "We script parallel creative tracks: ITP (Inman Park, Grant Park, Kirkwood, Decatur) with walkability and BeltLine hooks, OTP (Alpharetta, Johns Creek, Forsyth, Cherokee) with school district and new-construction hooks.",
    },
    {
      problem: "Your out-of-state relocation buyers stall on Georgia property-tax questions",
      solution:
        "We script relocation comparison creative: 'if you're coming from NY with $14K property tax, here's what $600K North Fulton actually costs all-in,' 'Georgia homestead exemption explained.'",
    },
    {
      problem: "Your Savannah coastal buyers are hurricane / insurance skittish",
      solution:
        "We script coastal-honest creative: 'if you're buying in Savannah / Tybee / Skidaway in 2026, here's what hurricane insurance actually costs,' 'coastal-GA flood-zone truth for out-of-state buyers.'",
    },
    {
      problem: "Your secondary-metro creative doesn't differentiate Athens vs Augusta vs Columbus",
      solution:
        "We script metro-specific creative: 'UGA faculty and healthcare in Athens,' 'Fort Eisenhower military PCS in Augusta,' 'Fort Moore military PCS in Columbus,' 'Macon family affordability.'",
    },
    {
      problem: "Your FMLS / GAMLS 'Just Listed' posts are indistinguishable",
      solution:
        "We write hook-driven creative rooted in ITP / OTP, coastal, and secondary-metro specificity.",
    },
  ],
  comparison: {
    headers: GEO_COMPARISON_HEADERS,
    rows: geoComparisonRows("Georgia"),
  },
  faq: [
    {
      question: "Can one batch cover multiple Georgia markets?",
      answer:
        "Yes. A 500-ad or 1,000-ad batch can include Atlanta ITP, OTP, Savannah coastal, and secondary-metro sub-tracks from one 20-minute recording.",
    },
    {
      question: "How does the FMLS vs GAMLS distinction affect ad strategy?",
      answer:
        "FMLS and GAMLS are the two major Atlanta-metro MLSs with different cooperation and compensation rules — but both feed the same buyer pool. For ad purposes, your creative targets ITP vs OTP buyers, not FMLS vs GAMLS. Our scripts are buyer-facing and sub-market-specific rather than MLS-specific.",
    },
    {
      question: "What GREC compliance do I need in every video ad?",
      answer:
        "Georgia Real Estate Commission rules require licensed broker disclosure, no discriminatory source language, no implied buyer-side commission solicitation, proper team/DBA disclosures. Post-NAR settlement adds buyer-rep agreement requirements. We bake GREC + NAR compliance into every script.",
    },
    {
      question: "Is Savannah really a distinct market from Atlanta?",
      answer:
        "Yes. Savannah and coastal Georgia have completely different buyer profiles from Atlanta — second-home, luxury retirement, historic-home, and hurricane-aware pools. Coastal-specific creative with insurance and lifestyle-authentic scripts converts where Atlanta-focused creative misses entirely.",
    },
    {
      question: "Can batch handle small-metro Georgia (Athens, Augusta, Columbus, Macon, Warner Robins)?",
      answer:
        "Yes. Each secondary metro has its own drivers (university, military, manufacturing, healthcare). Multi-market batch covers them with sub-market-specific creative.",
    },
  ],
  cta: {
    headline: "One Batch for Every Georgia Metro and Market.",
    subheadline:
      "One 20-minute recording. 300–1,000 vertical ads tuned for FMLS, GAMLS, GREC compliance, ITP/OTP, and Savannah coastal. Delivered in 24 hours.",
    ...GEO_CTA_BUTTON,
  },
};
