/**
 * Generate the Batch Video Ads vertical × angle matrix:
 *   - /best-for/batch-video-ads-for-{vertical}
 *   - /best-for/cost-per-tested-ad-angle-for-{vertical}
 *   - /alternatives/{vertical}-video-production-alternative
 *   - /compare/prestyj-vs-{competitor}-video
 *
 * Run with: npx tsx scripts/generate-batch-video-ad-matrix.ts
 *
 * Idempotent: rewrites the data files and route folders, then patches
 * src/lib/best-for/index.ts, src/lib/alternatives/index.ts, and src/app/sitemap.ts
 * inside marker comments so re-runs do not duplicate registrations.
 */
import { mkdirSync, writeFileSync, readFileSync } from "node:fs";
import { join } from "node:path";

const ROOT = process.cwd();
const SRC = join(ROOT, "src");

// ---------- vertical definitions ----------

interface Vertical {
  slug: string; // url segment + filename base
  varBase: string; // camelCase identifier base
  name: string; // "HVAC Companies"
  shortName: string; // "HVAC"
  audience: string; // descriptive audience phrase used in copy
  jobValue: string; // typical revenue per closed deal/job, in copy
  cplWithBatch: string; // typical CPL with batch creative
  cplWithout: string; // typical CPL without
  painA: string; // unique pain hook 1
  painB: string; // unique pain hook 2
  painC: string; // unique pain hook 3
  hiddenCost: string; // sentence: "the hidden costs of X"
  competitor: {
    slug: string; // competitor slug for /compare/prestyj-vs-{slug}-video
    varBase: string;
    name: string; // "UGC Creator", "Fiverr", "AI Avatar Tool", "In-House Production", "Video Agency"
    pricing: string; // "$200-500 per video"
    pricingPeriod: string; // "/video" or "/month"
    badge: string; // hero badge
    angle: string; // headline angle
  };
}

const VERTICALS: Vertical[] = [
  {
    slug: "coaches",
    varBase: "coaches",
    name: "Coaches",
    shortName: "Coaches",
    audience: "high-ticket coaches, course creators, and group-program operators",
    jobValue: "$2,000-$25,000 per client",
    cplWithBatch: "$8-$22",
    cplWithout: "$60-$180",
    painA: "Your face is the offer — but you only have 4 ad creatives in rotation",
    painB: "Webinar registrations stalled because every prospect has seen your same hook 12 times",
    painC: "VSL-only funnels are dying in 2026 — short-form ads now feed every booking call",
    hiddenCost:
      "the hidden cost of running coach ads is creative fatigue tax — your CPL doubles every 3 weeks until you ship fresh creative",
    competitor: {
      slug: "ugc-creator",
      varBase: "UgcCreator",
      name: "UGC Creators",
      pricing: "$150-$400",
      pricingPeriod: "per video",
      badge: "UGC vs Founder-Led Coach Ads",
      angle: "A UGC creator pretending to be your student is not your offer. You are the offer.",
    },
  },
  {
    slug: "media-buyers",
    varBase: "mediaBuyers",
    name: "Media Buyers",
    shortName: "Media Buyers",
    audience:
      "in-house media buyers and performance marketers managing $50K-$2M/month in paid social spend",
    jobValue: "every 1-point CPA improvement on a $200K/month account = $20K-$60K saved/quarter",
    cplWithBatch: "30-60% lower vs static rotation",
    cplWithout: "rising CPA every 7-14 days due to fatigue",
    painA: "You can ship 50 ad sets a week — but your creative team can ship 4 videos",
    painB: "The algorithm exits learning at 50 fresh creatives per ad set, and you have 6",
    painC: "Every Q4, ad fatigue compounds and your account collapses without volume",
    hiddenCost:
      "the hidden cost is the 'creative bottleneck tax' — your buying skill is capped by how many videos you have to test",
    competitor: {
      slug: "fiverr",
      varBase: "Fiverr",
      name: "Fiverr Video Editors",
      pricing: "$25-$500",
      pricingPeriod: "per gig",
      badge: "Fiverr Lottery vs Batch System",
      angle:
        "Fiverr is fine for a logo. It is not a creative testing engine for a $200K/month account.",
    },
  },
  {
    slug: "cmos",
    varBase: "cmos",
    name: "CMOs",
    shortName: "CMOs",
    audience:
      "B2B and DTC CMOs at $10M-$200M revenue companies driving paid social as a primary channel",
    jobValue: "$100K-$500K MQL pipeline lift per quarter from creative testing alone",
    cplWithBatch: "40% lower MQL cost on average",
    cplWithout: "MQL cost up 18% YoY industry-wide",
    painA: "Your in-house team ships 8 videos/quarter and your board wants 80",
    painB: "Agency retainers are $25K-$60K/month and you still can't get creative volume",
    painC: "You have 6 buyer personas to test and your team can only afford to make creative for 2",
    hiddenCost:
      "the hidden cost is the opportunity cost of un-tested personas — you are leaving an entire ICP segment unaddressed because creative production cannot keep pace",
    competitor: {
      slug: "in-house",
      varBase: "InHouse",
      name: "In-House Video Production",
      pricing: "$180K-$450K",
      pricingPeriod: "fully loaded annual",
      badge: "Fractional Batch vs In-House Studio",
      angle:
        "An in-house team of 3 ships fewer ads per quarter than a single Prestyj batch — at 10x the cost.",
    },
  },
  {
    slug: "agency-owners",
    varBase: "agencyOwners",
    name: "Agency Owners",
    shortName: "Agency Owners",
    audience: "marketing, creative, and growth agency owners running $30K-$300K/month shops",
    jobValue: "$3,000-$15,000/month in retainer per landed client",
    cplWithBatch: "$22-$48 cost-per-discovery-call",
    cplWithout: "$120-$300 (when you ship at all)",
    painA:
      "The cobbler's kids have no shoes — you ship creative for clients but never for yourself",
    painB: "Your positioning case studies are gold and they live in a Notion doc nobody sees",
    painC: "Every retainer churn forces you to scramble for new business with zero creative bench",
    hiddenCost:
      "the hidden cost of skipping your own marketing is concentration risk — one client churn becomes a survival event because you never built creative volume to backfill",
    competitor: {
      slug: "ai-avatar-tool",
      varBase: "AiAvatarTool",
      name: "AI Avatar Tools",
      pricing: "$110-$220",
      pricingPeriod: "/month",
      badge: "AI Avatar vs Real Founder Face",
      angle:
        "Your prospects can clock an AI avatar in 2 seconds. The moment they do, your agency loses authority.",
    },
  },
  {
    slug: "service-business-owners",
    varBase: "serviceBusinessOwners",
    name: "Service Business Owners",
    shortName: "Service Business Owners",
    audience:
      "service business owners running $500K-$10M/year operations across home services, professional services, and local trades",
    jobValue: "$800-$20,000 per closed job depending on trade",
    cplWithBatch: "$18-$45 per booked appointment",
    cplWithout: "$80-$220 per appointment via Yelp/Angi/Thumbtack",
    painA: "Lead aggregator costs are up 60% in 24 months and you still don't own the customer",
    painB: "You tried Facebook ads, spent $3K, got 4 leads, and your agency blamed 'the algorithm'",
    painC:
      "Every truck on the road is a billboard you already paid for — and zero of it is in any ad",
    hiddenCost:
      "the hidden cost of relying on aggregators is permanent pricing pressure — they sell the same lead to 3 competitors and your close rate collapses",
    competitor: {
      slug: "agency",
      varBase: "Agency",
      name: "Marketing Agencies",
      pricing: "$3,500-$8,000",
      pricingPeriod: "/month retainer",
      badge: "Retainer Agency vs Flat-Fee Batch",
      angle:
        "Agencies bill you for 'creative production' as a line item and ship 3 videos a quarter. Batch ships 500 for less than your first month's retainer.",
    },
  },
  {
    slug: "hvac-companies",
    varBase: "hvacCompanies",
    name: "HVAC Companies",
    shortName: "HVAC",
    audience: "residential HVAC companies running $2M-$25M/year with 5-50 trucks",
    jobValue: "$280 service call → $7,500-$22,000 system replacement",
    cplWithBatch: "$22-$55 per booked appointment",
    cplWithout: "$110-$240 per Angi/Yelp lead (sold to 3 competitors)",
    painA:
      "Heat-wave Tuesday means peak demand on Wednesday — but your ads were last refreshed in March",
    painB: "ServiceTitan tells you which job pays — it doesn't tell you which ad creative drove it",
    painC:
      "Equipment financing offers convert 4x better in video — but you only have 2 financing creatives running",
    hiddenCost:
      "the hidden cost of static creative for HVAC is missed weather windows — every heat event is a 7-day demand spike and your competition's ads are already running",
    competitor: {
      slug: "ugc-creator",
      varBase: "UgcCreator",
      name: "Home Services UGC Creators",
      pricing: "$200-$600",
      pricingPeriod: "per video",
      badge: "UGC Marketplace vs Owner-Led HVAC Ads",
      angle:
        "A UGC actress in her kitchen is not an HVAC technician. Homeowners trust the owner of the company they're letting into their attic — not a hired model.",
    },
  },
  {
    slug: "plumbing-contractors",
    varBase: "plumbingContractors",
    name: "Plumbing Contractors",
    shortName: "Plumbing",
    audience:
      "residential and commercial plumbing contractors running $1M-$15M/year with 3-30 trucks",
    jobValue: "$220 service call → $4,500-$28,000 repipe / sewer / water-heater install",
    cplWithBatch: "$18-$44 per booked appointment",
    cplWithout: "$95-$210 per aggregator lead (sold to 3 competitors)",
    painA:
      "Sewer-line jobs and water-heater jobs are different audiences — and your one ad treats them as one",
    painB:
      "Emergency leak ads vs preventive repipe ads need different creative — you ship one generic 'we do plumbing' video",
    painC:
      "Your warranty pitch and your financing pitch never appear in the same ad rotation because you only have 2 ads",
    hiddenCost:
      "the hidden cost is mismatched-intent traffic — generic plumbing ads pull tire-kickers while specific 'water-heater replacement' or 'slab leak' ads pull buyers",
    competitor: {
      slug: "fiverr",
      varBase: "Fiverr",
      name: "Fiverr Video Editors",
      pricing: "$25-$500",
      pricingPeriod: "per gig",
      badge: "Fiverr Lottery vs Plumbing Batch System",
      angle:
        "Your Fiverr editor has never written a sewer-replacement script. Prestyj's batch ships 50 plumbing-specific scripts in one delivery.",
    },
  },
  {
    slug: "roofing-contractors",
    varBase: "roofingContractors",
    name: "Roofing Contractors",
    shortName: "Roofing",
    audience:
      "residential roofing contractors with 3-100 crews chasing storm and retail-reroof demand",
    jobValue: "$12,000-$40,000 per reroof (insurance or retail)",
    cplWithBatch: "$15-$45 per booked inspection",
    cplWithout: "$80-$200 per canvasser-generated lead (fully loaded labor)",
    painA: "Hail-storm windows close in 10 days and your agency ships ads in 14",
    painB: "Hail vs wind vs retail-reroof are three different creatives and you ship one",
    painC: "Adjuster-denial-reversal ads are gold and you don't have a single one in rotation",
    hiddenCost:
      "the hidden cost is missed storm windows — the gold rush collapses inside 14 days and a retainer agency cannot ship event-specific creative in time",
    competitor: {
      slug: "in-house",
      varBase: "InHouse",
      name: "In-House Marketing Hire",
      pricing: "$72K-$110K",
      pricingPeriod: "fully loaded annual salary",
      badge: "In-House Hire vs Roofing Batch",
      angle:
        "An in-house marketing manager ships 8 videos a quarter and costs you $90K. A Prestyj batch ships 500 in 24 hours for $3,997.",
    },
  },
  {
    slug: "real-estate-teams",
    varBase: "realEstateTeams",
    name: "Real Estate Teams",
    shortName: "RE Teams",
    audience:
      "real estate teams of 5-50 agents running paid social as a primary buyer/seller acquisition channel",
    jobValue: "$8,000-$24,000 GCI per closed transaction",
    cplWithBatch: "$12-$38 per qualified buyer/seller lead",
    cplWithout: "$45-$140 per Zillow/CINC/Realtor.com lead",
    painA: "Buyer leads and seller leads need different creative — most teams run only buyer ads",
    painB:
      "Listing video ads, market-update ads, and seller-pain-point ads are three full creative tracks and your team has none",
    painC: "Recruiting agent video ads are a separate channel and you've never shipped one",
    hiddenCost:
      "the hidden cost of portal leads is permanent buyer-side bias and zero brand equity — every dollar to Zillow strengthens Zillow, not your team brand",
    competitor: {
      slug: "ai-avatar-tool",
      varBase: "AiAvatarTool",
      name: "AI Avatar Tools",
      pricing: "$110-$220",
      pricingPeriod: "/month",
      badge: "AI Avatar vs Real Agent Face for RE",
      angle:
        "A buyer spending $400K researches the agent before they call. An AI avatar tells them nothing. Your real face tells them everything.",
    },
  },
  {
    slug: "mortgage-brokers",
    varBase: "mortgageBrokers",
    name: "Mortgage Brokers",
    shortName: "Mortgage Brokers",
    audience:
      "independent mortgage brokers and small mortgage shops competing against retail lenders and rocket-style direct-to-consumer brands",
    jobValue: "$2,800-$9,500 commission per funded loan",
    cplWithBatch: "$22-$60 per pre-qualified borrower lead",
    cplWithout: "$120-$320 per shared lead from Zillow/LendingTree",
    painA:
      "Rate-quote ads, refi ads, first-time-buyer ads, and HELOC ads are four creative tracks and you have one",
    painB:
      "When the 10-year yield moves, your competition has an ad in market in 24 hours and you do not",
    painC:
      "Realtor-partnership ads (recruiting referral partners) are a separate ad track and you've never shipped one",
    hiddenCost:
      "the hidden cost is rate-cycle invisibility — when rates move you should be in market within hours and a retainer agency cannot ship event-driven creative at that pace",
    competitor: {
      slug: "agency",
      varBase: "Agency",
      name: "Mortgage Marketing Agencies",
      pricing: "$2,500-$6,500",
      pricingPeriod: "/month retainer",
      badge: "Retainer Agency vs Mortgage Batch",
      angle:
        "Mortgage marketing agencies bill $4K/month and ship 6 videos a year. Batch ships 500 in 24 hours for less than a single month of retainer.",
    },
  },
];

// Sanity check: 10 verticals
if (VERTICALS.length !== 10) {
  throw new Error(`Expected 10 verticals, got ${VERTICALS.length}`);
}

// ---------- shared snippets ----------

const PRESTYJ_PRICING_FEATURES_TS = `[
  { text: "300-1,000 unique vertical video ads per batch", included: true },
  { text: "Scripts written for you (vertical-researched)", included: true },
  { text: "You record once in 15-20 min", included: true },
  { text: "24-hour turnaround", included: true },
  { text: "Hook + body + CTA variations", included: true },
  { text: "Your real face — not AI", included: true },
  { text: "No monthly subscription", included: true },
  { text: "Error revisions included", included: true },
]`;

const PRICING_TIERS_NOTE =
  "Flat fee. 300 ads / 3 angles at $1,497. 500 ads / 5 angles at $2,497. 1,000 ads / 10 angles at $3,997.";

// ---------- file writers ----------

const written: string[] = [];

function write(path: string, content: string) {
  const dir = path.substring(0, path.lastIndexOf("/"));
  mkdirSync(dir, { recursive: true });
  writeFileSync(path, content);
  written.push(path.replace(ROOT + "/", ""));
}

// ---------- TEMPLATE 1: best-for/batch-video-ads-for-{vertical} ----------

function buildBatchBestFor(v: Vertical): string {
  const slug = `batch-video-ads-for-${v.slug}`;
  const varName = `batchVideoAdsFor${cap(v.varBase)}`;
  return `import type { BestForPageContent } from "./types";

// AUTO-GENERATED by scripts/generate-batch-video-ad-matrix.ts
// Vertical: ${v.name} · Angle: batch video ads
export const ${varName}: BestForPageContent = {
  slug: "${slug}",
  niche: {
    name: "Batch Video Ads for ${v.name}",
    shortName: "${v.shortName}",
    description:
      "${v.audience} using batch video ad creative testing to compress 6 weeks of production into 24 hours and finally feed the algorithm enough creative volume to exit learning.",
  },
  meta: {
    title: "Batch Video Ads for ${v.name}: 500 Ads in 24 Hours (From $1,497) | PRESTYJ",
    description:
      "${v.name} ship 8 ads a quarter. Batch ships 300-1,000 in 24 hours from one 20-minute recording — flat fee, scripts written for you, your real face. From $1,497.",
    keywords: [
      "batch video ads for ${v.slug}",
      "video ads for ${v.slug}",
      "${v.shortName.toLowerCase()} facebook ads creative",
      "${v.shortName.toLowerCase()} video ad production",
      "scaled creative testing for ${v.slug}",
      "${v.shortName.toLowerCase()} ad fatigue solution",
      "done for you video ads ${v.slug}",
      "creative volume for ${v.slug}",
    ],
  },
  hero: {
    badge: "Batch Video Ads for ${v.shortName}",
    headline: "${v.name} Need 50 Fresh Ads a Month.",
    headlineAccent: "Most Ship 4. Here's How Batch Solves It.",
    subheadline:
      "${capFirst(v.audience)} live or die on creative volume. Meta and TikTok exit the learning phase at roughly 50 fresh creatives per ad set — and most ${v.shortName} ship 4 a quarter. Prestyj turns one 20-minute recording into 300-1,000 scripted vertical video ads, delivered in 24 hours, scripted for ${v.shortName} pain points specifically. Flat fee. Your real face. No retainer.",
  },
  whyBestFor: [
    {
      icon: "Zap",
      title: "${v.painA}",
      description:
        "This is the #1 silent killer for ${v.shortName} on paid social. The platforms reward creative diversity and punish repetition. When you ship 4 ads, you live in the learning phase forever — your CPL never compresses, the algorithm never finds your buyer cluster, and you blame the channel when the real bottleneck is creative volume. Batch fixes the volume problem in one delivery.",
    },
    {
      icon: "Target",
      title: "${v.painB}",
      description:
        "Different audiences need different hooks. Generic creative averages everything down. ${v.shortName} who run 5-10 angle-specific tracks (instead of one 'general' track) consistently see ${v.cplWithBatch} versus the ${v.cplWithout} they were getting before. Batch is engineered around angle-testing — every batch ships with multiple distinct hook tracks ready to A/B at the ad-set level.",
    },
    {
      icon: "DollarSign",
      title: "${v.painC}",
      description:
        "When the unit economics are this big — ${v.jobValue} — you cannot afford to be creative-starved. A single additional booked deal pays for the entire batch many times over. The math for ${v.shortName} is some of the most favorable in the entire batch-creative space.",
    },
    {
      icon: "Clock",
      title: "Your retainer agency ships ads in 14 days. Batch ships in 24 hours.",
      description:
        "${capFirst(v.hiddenCost)}. The only way to win is to ship event-specific or audience-specific creative inside the window when it matters. Batch turnaround is 24 hours from footage delivery — meaning you can record on a Monday and have hundreds of new ads live by Tuesday afternoon.",
    },
    {
      icon: "Sparkles",
      title: "Scripts are vertical-researched, not generic 'video ads'",
      description:
        "Every batch begins with a vertical research pass. We pull the highest-converting hook patterns from current-quarter ad libraries in your space, mix them with your specific offer and pricing, and write 300-1,000 distinct scripts designed to test which angle wins for your business — not someone else's. This is the difference between batch creative that works and batch creative that's just volume.",
    },
  ],
  painPoints: [
    {
      problem: "You spent $5K-$50K on Facebook ads, got disappointing CPL, and concluded 'paid social doesn't work for ${v.shortName}'",
      solution:
        "It's almost never the channel — it's almost always the creative volume. Meta needs roughly 30-50 fresh creatives per ad set to exit learning. If you tested 3 ads, you never left learning. After a single batch delivery, ${v.shortName} consistently see CPL drop 40-70% in the first 30 days because the algorithm finally has enough fuel to optimize.",
    },
    {
      problem: "Your in-house team / freelancer / agency ships 2-8 video ads per month — far below what the platforms need",
      solution:
        "This is the bottleneck the entire industry is hitting. Production capacity has not scaled with platform demand. A Prestyj batch ships in one day what your current pipeline ships in two quarters — without you firing anyone or restructuring your team.",
    },
    {
      problem: "You don't have time to write scripts, pick angles, or manage a video production process",
      solution:
        "You don't have to. Send us a creative brief (we have a 5-question form) and 15-20 minutes of selfie footage. We write every script, mix every variation, and deliver. Your only job is recording the footage and approving the final batch.",
    },
    {
      problem: "Your creative looks identical to every other ${v.shortName.toLowerCase()} in your market",
      solution:
        "Generic creative is what happens when production is scarce. When production is abundant, you can finally afford to ship specific creative — specific to your market, specific to your offer, specific to a sub-audience. Batch makes specific cheap.",
    },
    {
      problem: "You worry batch creative will dilute your brand or look low-quality",
      solution:
        "Every batch is reviewed before delivery. You record in good light with reasonable audio (we send a one-page setup guide), and we handle the rest. The ads look like exactly what they are: a real ${v.shortName.toLowerCase()} talking about real pain points — which is what converts on Meta and TikTok in 2026.",
    },
  ],
  comparison: {
    headers: ["Feature", "Prestyj Batch Video Ads", "${v.competitor.name} / Status Quo"],
    rows: [
      {
        feature: "Ad creatives shipped per delivery",
        prestyj: "300-1,000",
        others: "1-8",
      },
      {
        feature: "Turnaround time",
        prestyj: "24 hours from footage",
        others: "${v.competitor.slug === "in-house" ? "2-6 weeks per ad" : "1-4 weeks"}",
      },
      {
        feature: "Pricing model",
        prestyj: "Flat one-time fee from $1,497",
        others: "${v.competitor.pricing}${v.competitor.pricingPeriod}",
      },
      {
        feature: "Scripts written for you (vertical-specific)",
        prestyj: "Yes — researched per batch",
        others: "${v.competitor.slug === "in-house" ? "Done internally — slow" : "No — you write briefs or scripts"}",
      },
      {
        feature: "Cost per ad (at 500-ad tier)",
        prestyj: "≈ $5",
        others: "${v.competitor.slug === "fiverr" ? "$25-$500 each" : v.competitor.slug === "ai-avatar-tool" ? "Subscription, hidden per-ad cost" : "$200-$2,000 each fully loaded"}",
      },
      {
        feature: "Uses your real face / your actual ${v.shortName.toLowerCase().includes("hvac") || v.shortName.toLowerCase().includes("plumb") || v.shortName.toLowerCase().includes("roof") ? "company" : "brand"}",
        prestyj: "Always",
        others: "${v.competitor.slug === "ai-avatar-tool" || v.competitor.slug === "ugc-creator" ? "No — synthetic or hired actor" : "Sometimes"}",
      },
      {
        feature: "Built for ad fatigue / creative refresh cycles",
        prestyj: "Designed for 50+ ad/set rotation",
        others: "Not architected for refresh cadence",
      },
    ],
  },
  faq: [
    {
      question: "How is this different from generic 'video ads for ${v.slug}'?",
      answer:
        "Generic 'video ads for ${v.slug}' usually means a retainer agency producing 4-8 videos a month at $4K-$15K/month. Batch is a fundamentally different unit: 300-1,000 scripted variations from one recording, delivered in 24 hours, flat fee. It exists because the platforms changed — Meta and TikTok now require creative volume to exit the learning phase, and the old monthly-retainer model cannot supply that volume.",
    },
    {
      question: "What does cost per tested ad angle actually look like for ${v.shortName}?",
      answer:
        "At the 500-ad tier ($2,497), if we ship 5 distinct hook angles you get roughly 100 variations per angle — meaning your effective cost per fully tested angle is around $500. Compare that to a retainer agency where one new angle costs you a full month of fees ($4K-$15K) and ships 1-2 videos. The cost-per-tested-angle math is what makes batch viable for ${v.shortName} who need to test many positions before committing budget.",
    },
    {
      question: "Will the ads actually look like 'me' or like generic UGC?",
      answer:
        "You record yourself. We never use AI avatars, hired actors, or stock voiceover. Every ad in the batch features your real face, your real voice, and the real footage you sent. That's the entire point — for ${v.shortName.toLowerCase()}, authenticity is the conversion engine and batch lets you scale authenticity instead of replacing it with synthetic content.",
    },
    {
      question: "How fast can I be running ads after we kick off?",
      answer:
        "Standard timeline: kickoff Monday, you record Tuesday, we deliver Wednesday, you upload to your ad account Wednesday afternoon and run by Thursday. Total: 4 days from signed contract to live ads. Compare to a retainer agency where 4 days is a single revision cycle.",
    },
    {
      question: "What's the catch on the $1,497 pricing?",
      answer:
        "There isn't one — it's a flat fee for 300 ads / 3 angles. We make money because the production system is engineered for batch output, not because we're hiding costs. Most ${v.shortName} start at the $2,497 tier (500 ads / 5 angles) because the cost-per-angle math is significantly better there.",
    },
  ],
  cta: {
    headline: "${v.name}: 500 Real Video Ads in 24 Hours.",
    subheadline:
      "One 20-minute recording. ${v.shortName}-specific scripts. 300-1,000 ready-to-test ads. Flat fee from $1,497. No retainer, no subscription.",
    buttonText: "Pick My Batch",
    buttonHref: "/batch-video-ads#pricing",
    footnote: "One-time pricing from $1,497 · 24-hour delivery · No retainer",
  },
};
`;
}

// ---------- TEMPLATE 2: best-for/cost-per-tested-ad-angle-for-{vertical} ----------

function buildCostPerAngleBestFor(v: Vertical): string {
  const slug = `cost-per-tested-ad-angle-for-${v.slug}`;
  const varName = `costPerTestedAdAngleFor${cap(v.varBase)}`;
  return `import type { BestForPageContent } from "./types";

// AUTO-GENERATED by scripts/generate-batch-video-ad-matrix.ts
// Vertical: ${v.name} · Angle: cost per tested ad angle (pricing math)
export const ${varName}: BestForPageContent = {
  slug: "${slug}",
  niche: {
    name: "Cost Per Tested Ad Angle for ${v.name}",
    shortName: "${v.shortName}",
    description:
      "Pricing math for ${v.audience} who need to know the true unit cost of testing a new ad angle — not the headline price of a video, but the fully-loaded cost to run, learn, and decide on one positioning hypothesis.",
  },
  meta: {
    title: "Cost Per Tested Ad Angle for ${v.name} (2026 Math) | PRESTYJ",
    description:
      "What does it actually cost to test one ad angle for ${v.shortName}? Agency: $4K-$15K. Freelancer: $2K-$8K. Batch: ≈$500. Full pricing math, fatigue tax, and hidden costs broken down.",
    keywords: [
      "cost per ad angle ${v.slug}",
      "cost per tested creative ${v.slug}",
      "${v.shortName.toLowerCase()} ad creative pricing",
      "video ad pricing for ${v.slug}",
      "hidden costs of ${v.slug} video ads",
      "${v.shortName.toLowerCase()} creative testing cost",
      "ad angle testing pricing ${v.slug}",
      "cost per fresh creative ${v.slug}",
    ],
  },
  hero: {
    badge: "Pricing Math for ${v.shortName}",
    headline: "What Does It Actually Cost to Test One Ad Angle for ${v.shortName}?",
    headlineAccent: "Headline Price ≠ Tested Cost.",
    subheadline:
      "Most ${v.shortName.toLowerCase()} compare ad creative on per-video price. That's the wrong unit. The unit that matters is cost per tested angle — the fully-loaded cost to ship enough variations of one hook to actually learn whether it converts. Agency math, freelancer math, in-house math, and batch math give wildly different answers. Here is the breakdown.",
  },
  whyBestFor: [
    {
      icon: "DollarSign",
      title: "Per-video pricing hides the real cost",
      description:
        "A $300 Fiverr video sounds cheap. But to actually test that angle you need 30-50 variations of it (different hooks, different B-roll, different CTA). That's $9,000-$15,000 of Fiverr gigs to learn one angle. Batch math: ≈$500 per fully tested angle at the 500-ad / 5-angle tier. The per-video number is a distraction.",
    },
    {
      icon: "BarChart3",
      title: "Algorithm exit cost is the real benchmark",
      description:
        "Meta needs roughly 50 fresh creatives per ad set to leave the learning phase. If your test does not include enough variations to exit learning, your CPL data is noise — you spent the money and learned nothing. Cost per tested angle has to include 'enough variations to exit learning' or it is not a real test.",
    },
    {
      icon: "Percent",
      title: "Fatigue tax compounds every 7-14 days",
      description:
        "Even a winning angle dies inside 14-21 days as frequency builds. Cost per tested angle has to include the refresh — you do not test once, you test, ship, refresh, repeat. ${capFirst(v.hiddenCost)}.",
    },
    {
      icon: "Clock",
      title: "Time-to-learning is part of the cost",
      description:
        "An agency angle takes 14-30 days to ship 1-2 videos. A batch angle ships in 24 hours with 100 variations. The opportunity cost of waiting 30 days to start a test is invisible on an invoice but very real in your P&L — especially for ${v.shortName.toLowerCase()} where ${v.jobValue}.",
    },
    {
      icon: "Filter",
      title: "Most 'video ad pricing' calculators ignore script research",
      description:
        "If you give a freelancer a script, that's one cost. If you ask them to research your vertical and write the script, you've doubled the price and added 2 weeks. Batch pricing includes vertical-researched scripts written for ${v.shortName} pain points specifically. That's bundled, not extra.",
    },
  ],
  painPoints: [
    {
      problem: "You compared a $300 freelancer video to a $1,497 batch and the freelancer 'won' — but you tested 1 ad and it failed",
      solution:
        "You did not test an angle. You tested an ad. An angle is a hook + body + CTA pattern with enough variations to exit Meta's learning phase. One ad cannot do that. The freelancer comparison is apples-to-oranges. Per-tested-angle math reveals the freelancer route at $9K-$15K versus batch at ≈$500.",
    },
    {
      problem: "Your retainer agency calls every video they ship 'a tested angle' and bills $4K-$15K/month",
      solution:
        "Two videos a month is not a tested angle. Ask your agency: how many variations did you ship for that hook? If the answer is under 30, you paid for video production, not for a test. Batch is engineered to ship 50-100+ variations of every angle in the same delivery — which is the only way the test is real.",
    },
    {
      problem: "You can't tell which line item in the agency invoice is 'creative production' versus 'media management' versus 'reporting'",
      solution:
        "That ambiguity is intentional. It makes it impossible to do per-angle math. Batch is a flat-fee, single-line invoice: ${PRICING_TIERS_NOTE} Cost-per-angle is just (price ÷ angles). No interpretation required.",
    },
    {
      problem: "Your in-house production cost feels 'free' because it's salaried — but the per-angle math is brutal",
      solution:
        "An in-house video producer at ${v.shortName === "CMOs" ? "$95K + benefits" : "$70K + benefits"} who ships 8 videos a quarter is costing roughly $11K-$14K per video, fully loaded. At 30 videos to test one angle, that's $330K-$420K per fully tested angle — before you've shipped a single batch refresh. Salaried production is not free; it is the most expensive way to buy creative volume.",
    },
    {
      problem: "You assumed batch was 'lower quality' because the per-ad price is so much lower",
      solution:
        "Per-ad price is low because the production system is engineered for batch — not because we cut corners. Same scripts (vertical-researched), same recording quality (your real face, your real footage), same review process. The cost difference comes from compressing a 6-week sprint into 24 hours of production time, not from quality reduction.",
    },
  ],
  comparison: {
    headers: ["Cost Component", "Prestyj Batch (500 ads / 5 angles)", "Typical ${v.competitor.name} Path"],
    rows: [
      {
        feature: "Headline price",
        prestyj: "$2,497 flat",
        others: "${v.competitor.pricing}${v.competitor.pricingPeriod}",
      },
      {
        feature: "Variations per tested angle",
        prestyj: "≈100",
        others: "1-8",
      },
      {
        feature: "Cost per fully tested angle",
        prestyj: "≈$500",
        others: "${v.competitor.slug === "in-house" ? "$80K-$120K (salaried + opportunity)" : v.competitor.slug === "agency" ? "$4,000-$15,000 / month, 1-2 angles" : v.competitor.slug === "fiverr" ? "$9,000-$15,000 to assemble enough variations" : v.competitor.slug === "ugc-creator" ? "$3,000-$8,000 per angle (one creator, limited variation)" : "$2,000-$5,000 in subscription + scripting time"}",
      },
      {
        feature: "Time-to-first-test",
        prestyj: "4 days from kickoff",
        others: "14-45 days",
      },
      {
        feature: "Refresh cadence cost",
        prestyj: "New batch when you need it",
        others: "Recurring monthly retainer or per-video billing",
      },
      {
        feature: "Vertical-specific script research",
        prestyj: "Included",
        others: "Extra or skipped",
      },
      {
        feature: "Effective CPL impact",
        prestyj: "${v.cplWithBatch}",
        others: "${v.cplWithout}",
      },
    ],
  },
  faq: [
    {
      question: "How do you calculate cost per tested ad angle?",
      answer:
        "(Total cost to ship enough variations of one hook to exit Meta's learning phase) ÷ (number of distinct angles in that delivery). For batch at the 500-ad / 5-angle tier: $2,497 ÷ 5 = ≈$500/angle. For an agency shipping 1 angle/month at $5K retainer: $5,000/angle (and that's only one angle in 30 days). For Fiverr assembling 30-50 variations of one hook at $200/video: $6,000-$10,000/angle. The math is what makes batch viable for ${v.shortName.toLowerCase()}.",
    },
    {
      question: "Doesn't more variations just mean more noise?",
      answer:
        "No — it means cleaner signal. Meta and TikTok algorithms are designed to find the best-performing creative inside an ad set when given enough options. Below ~30 variations they cannot reliably differentiate. Above ~50 they consistently find a winner. 'More variations = noise' was true in 2018 manual-bidding. In 2026 algorithmic bidding, more variations = better optimization. ${v.shortName} who ship batch consistently report ${v.cplWithBatch} after the algorithm has enough fuel.",
    },
    {
      question: "Are the 100 variations per angle actually unique or just minor edits?",
      answer:
        "Both — and that's the point. Meta's algorithm responds to varied hooks, varied B-roll cuts, varied CTAs, varied first-3-second framing, and varied copy lengths. A '100 variation' angle is engineered to vary along all those axes so the algorithm can find the precise combination that hits your buyer. Trivial visual edits do not move the needle; structural variations do, and batch ships both.",
    },
    {
      question: "What about ${v.shortName.toLowerCase()} who only need to test 1 angle?",
      answer:
        "Then the 300-ad / 3-angle tier at $1,497 still wins on per-angle math (≈$500/angle). But realistically, ${v.shortName.toLowerCase()} almost never need only one angle. Different sub-audiences, different offers, different funnel stages, different times of year all need different hooks. Most ${v.shortName.toLowerCase()} land at 5-10 angles within their first quarter on paid social.",
    },
    {
      question: "Where does the fatigue tax come into the math?",
      answer:
        "${capFirst(v.hiddenCost)}. Cost per tested angle has to be re-paid every 30-60 days because winning angles fatigue. Batch math: a refresh batch is the same flat fee. Agency math: every refresh resets the retainer clock. Over 12 months the cost gap widens dramatically — most ${v.shortName.toLowerCase()} who run continuous paid social see batch save 60-85% of fully-loaded creative cost over a calendar year.",
    },
  ],
  cta: {
    headline: "Run the Math for ${v.shortName}: ≈$500 Per Tested Angle.",
    subheadline:
      "300-1,000 scripted ads, vertical-researched for ${v.shortName.toLowerCase()}, your real face, 24-hour delivery. Flat fee from $1,497 — the only pricing model where per-tested-angle math actually works.",
    buttonText: "Pick My Batch",
    buttonHref: "/batch-video-ads#pricing",
    footnote: "One-time pricing from $1,497 · No retainer · ${PRICING_TIERS_NOTE}",
  },
};
`;
}

// helpers
function cap(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
function capFirst(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

// ---------- TEMPLATE 3: alternatives/{vertical}-video-production-alternative ----------

function buildAlternative(v: Vertical): string {
  const slug = `${v.slug}-video-production-alternative`;
  const varName = `${v.varBase}VideoProductionAlternative`;
  return `import type { AlternativePageContent } from "./types";

// AUTO-GENERATED by scripts/generate-batch-video-ad-matrix.ts
// Vertical: ${v.name} · Angle: video production alternative
export const ${varName}: AlternativePageContent = {
  slug: "${slug}",
  type: "direct-competitor",
  competitor: {
    name: "Traditional ${v.name} Video Production",
    shortName: "${v.shortName} Video Production",
    pricing: "${v.competitor.pricing}${v.competitor.pricingPeriod} (${v.competitor.name})",
    description:
      "The legacy way ${v.audience} buy video creative — typically a ${v.competitor.name.toLowerCase()} engagement that ships 1-8 videos per cycle at high per-unit cost.",
  },
  meta: {
    title: "${v.name} Video Production Alternative — Batch Creative That Ships in 24 Hours | PRESTYJ",
    description:
      "Traditional ${v.shortName.toLowerCase()} video production ships 4 ads a quarter. Batch ships 300-1,000 in 24 hours from one 20-min recording. Same real face. ≈$5/ad. From $1,497 flat.",
    keywords: [
      "${v.slug} video production alternative",
      "video production for ${v.slug}",
      "${v.shortName.toLowerCase()} ad production alternative",
      "alternative to ${v.shortName.toLowerCase()} video agency",
      "batch video production for ${v.slug}",
      "${v.shortName.toLowerCase()} creative production alternative",
      "fastest video production for ${v.slug}",
    ],
  },
  hero: {
    badge: "${v.shortName} Video Production Alternative",
    headline: "${v.shortName} Video Production",
    headlineAccent: "Reinvented as a 24-Hour Batch.",
    subheadline:
      "Traditional ${v.shortName.toLowerCase()} video production was built for the brand-film era — 1-2 polished hero videos per quarter. Paid social in 2026 needs creative volume the old model cannot supply. Prestyj is the alternative: ${v.shortName}-researched scripts, your real face, 300-1,000 vertical ads delivered in 24 hours, flat fee from $1,497. Built for the rotation cadence Meta and TikTok actually require.",
  },
  industryStats: [
    {
      stat: "300-1,000",
      description: "ad variations per ${v.shortName.toLowerCase()} batch — versus 1-8 from a typical production engagement",
    },
    {
      stat: "≈$5",
      description: "cost per ad at the 500-ad tier — versus ${v.competitor.pricing}${v.competitor.pricingPeriod} for ${v.competitor.name.toLowerCase()}",
    },
    {
      stat: "24 hrs",
      description: "turnaround from footage delivery — versus 14-45 days through traditional production",
    },
    {
      stat: "0",
      description: "monthly retainer or subscription — flat one-time fee per batch",
    },
  ],
  comparison: {
    features: [
      {
        feature: "Vertical-researched scripts (${v.shortName}-specific)",
        prestyj: true,
        competitor: false,
        note: "Most ${v.competitor.name.toLowerCase()} engagements ship video production, not vertical research",
      },
      {
        feature: "Variations per delivery",
        prestyj: "300-1,000",
        competitor: "1-8",
      },
      {
        feature: "Turnaround SLA",
        prestyj: "24 hrs from footage",
        competitor: "${v.competitor.slug === "in-house" ? "2-6 weeks per video" : "14-45 days"}",
      },
      {
        feature: "Pricing model",
        prestyj: "Flat one-time per batch",
        competitor: "${v.competitor.pricingPeriod === "/month" ? "Recurring monthly" : "Per video / per gig"}",
      },
      {
        feature: "Built for ad fatigue / refresh cadence",
        prestyj: true,
        competitor: false,
      },
      {
        feature: "Uses your real face — not AI or hired actor",
        prestyj: true,
        competitor: "${v.competitor.slug === "ai-avatar-tool" || v.competitor.slug === "ugc-creator" ? "false" : "true"}" as unknown as boolean | string,
        note: "${v.competitor.slug === "ai-avatar-tool" ? "AI avatars don't look like you — buyers can clock them" : v.competitor.slug === "ugc-creator" ? "UGC creators are hired models — not the actual ${v.shortName.toLowerCase()}" : "Both use your real face, but only batch ships at scale"}",
      },
      {
        feature: "Cost per fully tested angle",
        prestyj: "≈$500",
        competitor: "${v.competitor.slug === "in-house" ? "$80K-$120K fully loaded" : v.competitor.slug === "agency" ? "$4K-$15K per angle / month" : "$3K-$15K per tested angle"}",
      },
      {
        feature: "Error revisions included",
        prestyj: true,
        competitor: "Varies",
      },
    ],
    competitorPricing: {
      price: "${v.competitor.pricing}",
      period: "${v.competitor.pricingPeriod}",
      note: "${v.competitor.name} is the dominant ${v.shortName.toLowerCase()} video production model. Pricing covers 1-8 polished videos per cycle; cannot supply the 50+ creatives/ad-set Meta requires for learning-phase exit.",
      pros: [
        "Higher production polish per individual video",
        "Single-creative deliverables suitable for hero/brand work",
        "Direct creative control over each video",
      ],
      cons: [
        "Cannot ship at the volume paid social actually requires",
        "Per-angle math is brutal — $3K-$15K per fully tested angle",
        "Turnaround timelines incompatible with event-driven creative",
        "${v.painA}",
        "${v.hiddenCost}",
      ],
    },
    prestyjPricing: {
      price: "$1,497 – $3,997",
      note: "${PRICING_TIERS_NOTE}",
      pros: [
        "300-1,000 ad variations per batch",
        "${v.shortName}-researched scripts written for you",
        "Your real face, your real footage — no AI, no hired actors",
        "24-hour turnaround from footage delivery",
        "Flat fee, no retainer, no subscription",
        "Designed for ${v.shortName.toLowerCase()} CPL profile (${v.cplWithBatch})",
      ],
      cons: [],
    },
  },
  whySwitch: [
    {
      icon: "Zap",
      title: "${v.shortName} need creative volume the old model cannot supply",
      description:
        "${v.painA} The old production model was architected for hero videos, not the 50+ fresh creatives per ad set that Meta and TikTok require to exit learning. Batch is purpose-built for the new cadence.",
    },
    {
      icon: "DollarSign",
      title: "Per-angle math finally works",
      description:
        "${capFirst(v.hiddenCost)}. Cost per fully tested angle for ${v.shortName.toLowerCase()} drops from $3K-$15K (traditional) to roughly $500 (batch). On unit economics of ${v.jobValue}, that delta funds an entire additional creative experiment per quarter.",
    },
    {
      icon: "Clock",
      title: "Event-driven creative becomes possible",
      description:
        "${v.painB} Batch delivers in 24 hours, which means ${v.shortName.toLowerCase()} can finally ship event-specific creative inside the window when it matters — instead of 14 days after the event when the demand spike has already collapsed.",
    },
    {
      icon: "Target",
      title: "Vertical research is built in",
      description:
        "Generic 'video production' ships generic creative. Batch begins with a vertical research pass on the highest-converting ${v.shortName.toLowerCase()} hook patterns from current-quarter ad libraries — meaning the scripts are already tuned to ${v.shortName.toLowerCase()} pain before you hit record.",
    },
  ],
  whenCompetitorFits: [
    "You need a single high-polish brand film for a website hero or an investor deck",
    "You're producing a long-form documentary or case-study video where a 24-hour batch cadence is irrelevant",
    "You have a creative team that can absorb production internally and you only need 1-2 polished assets per quarter",
  ],
  whenPrestyjFits: [
    "You're ${v.audience.split(",")[0]} actively running paid social and CPL is rising due to creative fatigue",
    "You ship fewer than 50 fresh creatives per ad set per month and your accounts live in the learning phase",
    "You need event-driven or seasonal creative inside 24-72 hour windows",
    "You want ${v.shortName.toLowerCase()}-researched scripts written for you — not generic 'video production'",
    "You want flat-fee pricing with cost-per-tested-angle math that actually pencils out (≈$500/angle)",
  ],
  relatedResources: [
    {
      href: "/batch-video-ads",
      title: "Batch Video Ads — the Service",
      description: "How Prestyj turns 20 minutes of footage into 300-1,000 vertical ads in 24 hours.",
    },
    {
      href: "/best-for/batch-video-ads-for-${v.slug}",
      title: "Batch Video Ads for ${v.name}",
      description: "Use case page covering ${v.shortName.toLowerCase()}-specific pain points and pricing math.",
    },
    {
      href: "/best-for/cost-per-tested-ad-angle-for-${v.slug}",
      title: "Cost Per Tested Ad Angle for ${v.shortName}",
      description: "Full pricing breakdown across batch, agency, freelancer, and in-house production paths.",
    },
    {
      href: "/compare/prestyj-vs-${v.competitor.slug}-video-for-${v.slug}",
      title: "Prestyj vs ${v.competitor.name} (for ${v.shortName})",
      description: "Head-to-head comparison against the dominant ${v.shortName.toLowerCase()} alternative.",
    },
  ],
  cta: {
    headline: "${v.shortName} Video Production, Re-Engineered for Paid Social.",
    subheadline:
      "Send us 20 minutes of footage and we'll deliver a complete batch of ${v.shortName.toLowerCase()}-specific video ads organized by angle — ready to test on Meta and TikTok within days.",
    buttonText: "Pick My Batch",
    buttonHref: "/batch-video-ads#pricing",
    footnote: "Packages from $1,497 · 24-hour delivery · No retainer",
  },
};
`;
}

// ---------- TEMPLATE 4: compare/prestyj-vs-{competitor}-video ----------
//   data file at src/lib/compare/data/{slug}.ts
//   route at src/app/compare/{slug}/page.tsx

function buildCompareData(v: Vertical): string {
  const slug = `prestyj-vs-${v.competitor.slug}-video-for-${v.slug}`;
  const varName = `${v.varBase}Vs${v.competitor.varBase}VideoCompareData`;
  const metaVar = `${v.varBase}Vs${v.competitor.varBase}VideoMetadata`;
  return `import type { ComparePageData, CompareMetadata } from "../types";
import { createComparePage } from "@/lib/content-factory";

// AUTO-GENERATED by scripts/generate-batch-video-ad-matrix.ts
// Vertical: ${v.name} · Angle: vs ${v.competitor.name}

const PRESTYJ_PRICING_FEATURES = ${PRESTYJ_PRICING_FEATURES_TS};

export const ${varName}: ComparePageData = createComparePage({
  slug: "${slug}",
  competitorName: "${v.competitor.name} (for ${v.shortName})",
  hero: {
    badge: "${v.competitor.badge}",
    title: "Prestyj vs",
    titleAccent: "${v.competitor.name} for ${v.shortName}",
    subtitle:
      "${v.competitor.angle} Prestyj is the alternative: ${v.shortName}-researched scripts, your real face, 300-1,000 ads in 24 hours, flat fee from $1,497.",
    description: "",
    keyStats: [
      { value: "300-1,000", label: "Prestyj ads per batch" },
      { value: "${v.competitor.pricing}", label: "${v.competitor.name} starting price" },
      { value: "24 hrs", label: "Prestyj turnaround" },
    ],
  },
  pricing: {
    prestyj: {
      price: "$1,497 – $3,997",
      priceSubtext: "One-time · 300-1,000 ads · ${v.shortName}-researched",
      features: PRESTYJ_PRICING_FEATURES,
    },
    competitor: {
      price: "${v.competitor.pricing}",
      priceSubtext: "${v.competitor.pricingPeriod}",
      features: [
${competitorFeaturesFor(v)}
      ],
    },
  },
  features: [
    { feature: "Scripts researched for ${v.shortName} pain points", prestyj: true, competitor: false, note: "${v.competitor.name} does not research your vertical by default" },
    { feature: "Uses your real face / actual ${v.shortName.toLowerCase().includes("hvac") || v.shortName.toLowerCase().includes("plumb") || v.shortName.toLowerCase().includes("roof") ? "company" : "brand"}", prestyj: true, competitor: ${v.competitor.slug === "ai-avatar-tool" || v.competitor.slug === "ugc-creator" ? "false" : '"Sometimes"'} },
    { feature: "Variations per engagement", prestyj: "300-1,000", competitor: "${v.competitor.slug === "in-house" ? "1-8 per quarter" : v.competitor.slug === "agency" ? "2-6 per month" : v.competitor.slug === "fiverr" ? "1-5 per gig" : v.competitor.slug === "ai-avatar-tool" ? "Unlimited but you write every script" : "1-3 per creator"}" },
    { feature: "Turnaround SLA", prestyj: "24 hrs guaranteed", competitor: "${v.competitor.slug === "in-house" ? "2-6 weeks" : v.competitor.slug === "fiverr" ? "3-14 days, often slipped" : v.competitor.slug === "ai-avatar-tool" ? "Minutes per render, but you script everything" : "14-45 days"}" },
    { feature: "Pricing model", prestyj: "One-time flat", competitor: "${v.competitor.pricingPeriod === "/month" ? "Monthly recurring" : v.competitor.pricingPeriod === "fully loaded annual" || v.competitor.pricingPeriod === "fully loaded annual salary" ? "Annual salary + benefits" : "Per video / per gig"}" },
    { feature: "Cost per ad (at 500 ads)", prestyj: "≈$5", competitor: "${v.competitor.slug === "in-house" ? "$11K-$14K (fully loaded)" : v.competitor.slug === "fiverr" ? "$25-$500 each" : v.competitor.slug === "agency" ? "$500-$2,500 each" : v.competitor.slug === "ai-avatar-tool" ? "Subscription + script labor" : "$200-$600 each"}" },
    { feature: "Cost per fully tested angle", prestyj: "≈$500", competitor: "${v.competitor.slug === "in-house" ? "$80K-$120K" : v.competitor.slug === "agency" ? "$4K-$15K" : v.competitor.slug === "fiverr" ? "$9K-$15K" : v.competitor.slug === "ai-avatar-tool" ? "$2K-$5K + scripting time" : "$3K-$8K"}" },
    { feature: "Built for ${v.shortName} ad fatigue cycles", prestyj: true, competitor: false },
    { feature: "Vertical research bundled", prestyj: true, competitor: false },
  ],
  whySwitch: {
    title: "Why ${v.shortName} Pick Batch Over ${v.competitor.name}",
    description: "${v.competitor.angle}",
    reasons: [
      {
        icon: "Zap",
        title: "${v.painA}",
        description:
          "${v.competitor.name} cannot fix this. The unit they ship (per-video, per-gig, per-month) is fundamentally incompatible with the cadence paid social actually requires (50+ creatives per ad set to exit learning).",
      },
      {
        icon: "DollarSign",
        title: "Per-angle math finally works",
        description:
          "${capFirst(v.hiddenCost)}. Batch math at the 500-ad tier puts cost per fully tested angle at ≈$500. ${v.competitor.name} math puts it at ${v.competitor.slug === "in-house" ? "$80K-$120K fully loaded" : v.competitor.slug === "agency" ? "$4K-$15K per angle per month" : v.competitor.slug === "fiverr" ? "$9K-$15K to assemble enough variations" : v.competitor.slug === "ai-avatar-tool" ? "$2K-$5K once you account for scripting labor" : "$3K-$8K per tested angle"}.",
      },
      {
        icon: "Clock",
        title: "Event-driven creative inside 24 hours",
        description:
          "${v.painB} ${v.competitor.name} cycles cannot ship event-specific creative inside the window when it matters. Batch delivers in 24 hours from footage — meaning ${v.shortName.toLowerCase()} can finally compete on cadence.",
      },
      {
        icon: "Target",
        title: "${v.shortName}-specific scripts vs generic ${v.competitor.name.toLowerCase()} output",
        description:
          "${v.painC} Batch begins every engagement with a vertical research pass on highest-converting ${v.shortName.toLowerCase()} hook patterns from current-quarter ad libraries. ${v.competitor.name} typically ship what you brief them on — they do not bring vertical research to the table.",
      },
      {
        icon: "Shield",
        title: "${v.competitor.slug === "ai-avatar-tool" ? "Real face, real trust" : v.competitor.slug === "ugc-creator" ? "Owner authenticity beats hired actors" : v.competitor.slug === "fiverr" ? "Single team, single accountability" : v.competitor.slug === "in-house" ? "No fixed cost overhead" : "Flat fee, no retainer surprise"}",
        description:
          "${v.competitor.slug === "ai-avatar-tool" ? "Your prospects can clock an AI avatar in 2 seconds. The moment they do, your authority collapses. Batch ships your real face at scale — no synthetic risk." : v.competitor.slug === "ugc-creator" ? "A UGC actress is not the owner of your business. " + cap(v.shortName.toLowerCase()) + " buy from people, not models." : v.competitor.slug === "fiverr" ? "Fiverr is a coin flip across thousands of sellers. Batch is one team, one standard, every delivery." : v.competitor.slug === "in-house" ? "An in-house production hire costs $90K-$150K fully loaded and ships 8 videos a quarter. Batch is variable cost — you only pay when you need a new batch." : "Retainer agencies charge whether they ship or not. Batch is paid for output, not for time."}",
      },
    ],
  },
  relatedResources: [
    { title: "Batch Video Ads — the Service", description: "See the Prestyj batch product", href: "/batch-video-ads", linkText: "Learn more" },
    { title: "Batch Video Ads for ${v.name}", description: "${v.shortName}-specific use case", href: "/best-for/batch-video-ads-for-${v.slug}", linkText: "Read use case" },
    { title: "Cost Per Tested Ad Angle for ${v.shortName}", description: "Full pricing math breakdown", href: "/best-for/cost-per-tested-ad-angle-for-${v.slug}", linkText: "See the math" },
    { title: "${v.name} Video Production Alternative", description: "Alternative to traditional ${v.shortName.toLowerCase()} video production", href: "/alternatives/${v.slug}-video-production-alternative", linkText: "Compare" },
  ],
  cta: {
    title: "${v.shortName} Pick Batch Over ${v.competitor.name}.",
    description:
      "300-1,000 ${v.shortName.toLowerCase()}-researched ads in 24 hours. One flat fee from $1,497. Your real face. No retainer.",
    buttonText: "Pick My Batch",
    buttonHref: "/batch-video-ads#pricing",
    disclaimer: "One-time payment · No subscription · 24-hour turnaround",
  },
});

export const ${metaVar}: CompareMetadata = {
  slug: "${slug}",
  competitorName: "${v.competitor.name} (for ${v.shortName})",
  title: "PRESTYJ vs ${v.competitor.name} for ${v.shortName} (2026 Pricing Math)",
  description:
    "${v.competitor.angle} See full per-angle pricing math and why ${v.shortName.toLowerCase()} pick batch from $1,497 over ${v.competitor.pricing}${v.competitor.pricingPeriod}.",
  keywords: [
    "prestyj vs ${v.competitor.slug} for ${v.slug}",
    "${v.competitor.slug} alternative for ${v.slug}",
    "${v.shortName.toLowerCase()} ${v.competitor.slug} comparison",
    "batch video ads vs ${v.competitor.slug}",
    "${v.shortName.toLowerCase()} video creative pricing",
    "${v.competitor.slug} for ${v.slug} alternative",
  ],
};
`;
}

function competitorFeaturesFor(v: Vertical): string {
  switch (v.competitor.slug) {
    case "ugc-creator":
      return [
        '        { text: "Real human creator (not AI)", included: true },',
        '        { text: "Authentic-feeling style", included: true },',
        '        { text: "Vertical-researched scripts", included: false },',
        '        { text: "Uses your real face", included: false },',
        '        { text: "Volume per engagement (300+ ads)", included: false },',
        '        { text: "24-hour turnaround", included: false },',
      ].join("\n");
    case "fiverr":
      return [
        '        { text: "Marketplace of thousands of sellers", included: true },',
        '        { text: "Low entry price per gig", included: true },',
        '        { text: "Vertical-specific scripting", included: false },',
        '        { text: "Quality consistent across deliverables", included: false },',
        '        { text: "Volume per engagement (300+ ads)", included: false },',
        '        { text: "24-hour turnaround SLA", included: false },',
      ].join("\n");
    case "ai-avatar-tool":
      return [
        '        { text: "Unlimited AI avatar generation", included: true },',
        '        { text: "Multiple AI actor options", included: true },',
        '        { text: "You write every script yourself", included: false },',
        '        { text: "Uses your real face", included: false },',
        '        { text: "AI uncanny-valley risk every render", included: false },',
        '        { text: "Vertical research bundled", included: false },',
      ].join("\n");
    case "in-house":
      return [
        '        { text: "Direct creative control", included: true },',
        '        { text: "Owns the production process internally", included: true },',
        '        { text: "Ships 50+ creatives per ad set per month", included: false },',
        '        { text: "Flat fee, no fixed overhead", included: false },',
        '        { text: "24-hour turnaround", included: false },',
        '        { text: "Vertical-researched scripts", included: false },',
      ].join("\n");
    case "agency":
    default:
      return [
        '        { text: "Strategy + creative + media bundled", included: true },',
        '        { text: "Account manager handholding", included: true },',
        '        { text: "Volume per month (50+ creatives)", included: false },',
        '        { text: "Flat fee per batch", included: false },',
        '        { text: "24-hour turnaround on creative", included: false },',
        '        { text: "Cost per tested angle under $1,000", included: false },',
      ].join("\n");
  }
}

// ---------- compare route file ----------

function buildCompareRoute(v: Vertical): string {
  const slug = `prestyj-vs-${v.competitor.slug}-video-for-${v.slug}`;
  const dataVar = `${v.varBase}Vs${v.competitor.varBase}VideoCompareData`;
  return `"use client";

// AUTO-GENERATED by scripts/generate-batch-video-ad-matrix.ts
import { ComparePageWrapper } from "@/components/sections/compare/ComparePageWrapper";
import { ${dataVar} } from "@/lib/compare/data/${slug}";

export default function PrestyJVs${cap(v.competitor.varBase)}For${cap(v.varBase)}Page() {
  return <ComparePageWrapper data={${dataVar}} />;
}
`;
}

// ---------- index patcher ----------
//
// We use marker comments so re-runs are idempotent.
//   // BATCH-MATRIX-IMPORTS-START / BATCH-MATRIX-IMPORTS-END
//   // BATCH-MATRIX-REGISTER-START / BATCH-MATRIX-REGISTER-END
//
// If markers don't exist, we insert them.

function ensureBlock(
  source: string,
  startMarker: string,
  endMarker: string,
  insertBefore: string,
  newContent: string,
): string {
  const startIdx = source.indexOf(startMarker);
  const endIdx = source.indexOf(endMarker);
  if (startIdx !== -1 && endIdx !== -1) {
    return (
      source.slice(0, startIdx + startMarker.length) +
      "\n" +
      newContent +
      "\n" +
      source.slice(endIdx)
    );
  }
  // insert fresh block before `insertBefore`
  const insertIdx = source.indexOf(insertBefore);
  if (insertIdx === -1) {
    throw new Error(`Could not find insertion anchor: ${insertBefore}`);
  }
  const block = `${startMarker}\n${newContent}\n${endMarker}\n\n`;
  return source.slice(0, insertIdx) + block + source.slice(insertIdx);
}

function patchBestForIndex() {
  const path = join(SRC, "lib/best-for/index.ts");
  let src = readFileSync(path, "utf8");

  const importLines: string[] = [];
  const registerLines: string[] = [];
  for (const v of VERTICALS) {
    const batchSlug = `batch-video-ads-for-${v.slug}`;
    const batchVar = `batchVideoAdsFor${cap(v.varBase)}`;
    const costSlug = `cost-per-tested-ad-angle-for-${v.slug}`;
    const costVar = `costPerTestedAdAngleFor${cap(v.varBase)}`;
    importLines.push(`import { ${batchVar} } from "./${batchSlug}";`);
    importLines.push(`import { ${costVar} } from "./${costSlug}";`);
    registerLines.push(`  "${batchSlug}": ${batchVar},`);
    registerLines.push(`  "${costSlug}": ${costVar},`);
  }

  src = ensureBlock(
    src,
    "// BATCH-MATRIX-IMPORTS-START",
    "// BATCH-MATRIX-IMPORTS-END",
    "export const bestForPages",
    importLines.join("\n"),
  );

  src = ensureBlock(
    src,
    "  // BATCH-MATRIX-REGISTER-START",
    "  // BATCH-MATRIX-REGISTER-END",
    "};\n\nexport function getBestFor",
    registerLines.join("\n"),
  );

  writeFileSync(path, src);
  written.push(path.replace(ROOT + "/", ""));
}

function patchAlternativesIndex() {
  const path = join(SRC, "lib/alternatives/index.ts");
  let src = readFileSync(path, "utf8");

  const importLines: string[] = [];
  const registerLines: string[] = [];
  for (const v of VERTICALS) {
    const slug = `${v.slug}-video-production-alternative`;
    const varName = `${v.varBase}VideoProductionAlternative`;
    importLines.push(`import { ${varName} } from "./${slug}";`);
    registerLines.push(`  "${slug}": ${varName},`);
  }

  src = ensureBlock(
    src,
    "// BATCH-MATRIX-IMPORTS-START",
    "// BATCH-MATRIX-IMPORTS-END",
    "export const alternatives",
    importLines.join("\n"),
  );

  src = ensureBlock(
    src,
    "  // BATCH-MATRIX-REGISTER-START",
    "  // BATCH-MATRIX-REGISTER-END",
    "};\n\nexport function getAlternative",
    registerLines.join("\n"),
  );

  writeFileSync(path, src);
  written.push(path.replace(ROOT + "/", ""));
}

function patchSitemap() {
  const path = join(SRC, "app/sitemap.ts");
  let src = readFileSync(path, "utf8");

  const compareEntries = VERTICALS.map((v) => {
    const slug = `prestyj-vs-${v.competitor.slug}-video-for-${v.slug}`;
    return `    {
      url: \`\${baseUrl}/compare/${slug}\`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },`;
  }).join("\n");

  src = ensureBlock(
    src,
    "    // BATCH-MATRIX-COMPARE-START",
    "    // BATCH-MATRIX-COMPARE-END",
    "  ];\n\n  // Location pages",
    compareEntries,
  );

  writeFileSync(path, src);
  written.push(path.replace(ROOT + "/", ""));
}

// ---------- main ----------

function main() {
  for (const v of VERTICALS) {
    // Best-for: batch
    write(join(SRC, "lib/best-for", `batch-video-ads-for-${v.slug}.ts`), buildBatchBestFor(v));
    // Best-for: cost-per-angle
    write(
      join(SRC, "lib/best-for", `cost-per-tested-ad-angle-for-${v.slug}.ts`),
      buildCostPerAngleBestFor(v),
    );
    // Alternative
    write(
      join(SRC, "lib/alternatives", `${v.slug}-video-production-alternative.ts`),
      buildAlternative(v),
    );
    // Compare data
    const compareSlug = `prestyj-vs-${v.competitor.slug}-video-for-${v.slug}`;
    write(join(SRC, "lib/compare/data", `${compareSlug}.ts`), buildCompareData(v));
    // Compare route
    write(join(SRC, "app/compare", compareSlug, "page.tsx"), buildCompareRoute(v));
  }

  // Patch indexes / sitemap
  patchBestForIndex();
  patchAlternativesIndex();
  patchSitemap();

  console.log(
    `\nGenerated ${written.length} files for ${VERTICALS.length} verticals × 4 angles:\n`,
  );
  for (const w of written) console.log("  " + w);
}

main();
