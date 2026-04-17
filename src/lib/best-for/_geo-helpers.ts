import type { ComparisonRow } from "./types";

export const GEO_CTA_BUTTON = {
  buttonText: "Pick My Batch",
  buttonHref: "/batch-video-ads#pricing",
  footnote: "One-time pricing from $1,497 · 24-hour delivery · No retainer",
};

export function geoComparisonRows(region: string): ComparisonRow[] {
  return [
    {
      feature: "Ad variations delivered",
      prestyj: "300–1,000 unique variations",
      others: "4–10 ads per month on retainer",
    },
    {
      feature: "Cost structure",
      prestyj: "One-time: $1,497 / $2,497 / $3,997",
      others: "$1,500–$4,000/month ongoing retainer",
    },
    {
      feature: "Who is on camera",
      prestyj: `You — the agent ${region} clients will actually hire`,
      others: "Stock footage, listing photos, or hired UGC actors",
    },
    {
      feature: "Time commitment from you",
      prestyj: "One 15–20 minute selfie recording",
      others: "Ongoing strategy calls, approvals, shoot days",
    },
    {
      feature: "Delivery time",
      prestyj: "24 hours after footage submission",
      others: "2–4 week production cycle per ad set",
    },
    {
      feature: "Local market hook coverage",
      prestyj: `Scripts tuned to ${region} inventory, sub-markets, and seasonality`,
      others: "Generic 'just listed' templates",
    },
    {
      feature: "Creative volume for Meta learning phase",
      prestyj: "30–50+ fresh creatives per ad set available day one",
      others: "Algorithm stuck in learning on 3–5 creatives",
    },
  ];
}

export const GEO_COMPARISON_HEADERS = [
  "Feature",
  "Prestyj Batch Video Ads",
  "Hiring a Local Real Estate Marketing Agency",
];
