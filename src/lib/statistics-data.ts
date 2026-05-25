/**
 * Data for the Statistics Hub page — categories of cite-worthy statistics,
 * plain-text FAQs for JSON-LD, and structured data for schema markup.
 */

export interface StatSource {
  name: string;
  year: string;
  url?: string;
}

export interface Statistic {
  id: string;
  value: string;
  description: string;
  source: StatSource;
  context?: string;
}

export interface StatCategory {
  id: string;
  title: string;
  slug: string;
  description: string;
  statistics: Statistic[];
}

export interface StatisticsFAQ {
  question: string;
  answer: string;
}

// ─── Speed to Lead Statistics ─────────────────────────────────────────────────

const speedToLeadStats: Statistic[] = [
  {
    id: "stl-21x",
    value: "21×",
    description:
      "Companies that respond within 5 minutes are 21× more likely to qualify a lead than those that wait 30 minutes.",
    source: {
      name: "Harvard Business Review / LeadResponseManagement.org",
      year: "2011 (widely re-cited 2024–2026)",
      url: "https://hbr.org/2011/03/the-short-life-of-online-sales-leads",
    },
  },
  {
    id: "stl-391",
    value: "391%",
    description:
      "Calling within the first minute boosts conversion rates by 391% compared to waiting even a few minutes longer.",
    source: {
      name: "Velocify",
      year: "2024–2025",
    },
  },
  {
    id: "stl-78pct",
    value: "78%",
    description: "78% of B2B customers buy from the vendor that responds first.",
    source: {
      name: "LeadConnect / Chili Piper",
      year: "2025",
    },
  },
  {
    id: "stl-100x",
    value: "100×",
    description:
      "You are 100× more likely to connect with a lead if you respond within 5 minutes vs. 30 minutes.",
    source: {
      name: "LeadResponseManagement.org",
      year: "2024–2026",
    },
  },
  {
    id: "stl-8x-drop",
    value: "8×",
    description: "Conversion rates drop 8× after just 5 minutes of delay in lead response.",
    source: {
      name: "InsideSales (55M activities, 5.7M leads, 400+ companies)",
      year: "2021, re-cited 2024–2026",
    },
  },
  {
    id: "stl-400pct-drop",
    value: "400%",
    description:
      "The likelihood of qualifying a lead drops 400% when response time moves from 5 to 10 minutes.",
    source: {
      name: "Harvard Business Review (via Amplemarket)",
      year: "2024",
    },
  },
  {
    id: "stl-avg-42hr",
    value: "42 hours",
    description:
      "The average B2B lead response time is 42 hours — far beyond the 5-minute window that maximizes conversions.",
    source: {
      name: "Multiple sources (Amplemarket, Voiso)",
      year: "2024–2025",
    },
  },
  {
    id: "stl-only-01pct",
    value: "0.1%",
    description:
      "Only 0.1% of inbound leads are engaged within 5 minutes by the businesses receiving them.",
    source: {
      name: "InsideSales Lead Response Research (55M activities)",
      year: "2021, re-cited 2024–2026",
    },
  },
  {
    id: "stl-77pct-no-response",
    value: "77%",
    description:
      "77% of inbound leads never receive any response at all from the business they contacted.",
    source: {
      name: "InsideSales (via Convoso)",
      year: "2025",
    },
  },
  {
    id: "stl-82pct-10min",
    value: "82%",
    description: "82% of consumers expect a response within 10 minutes of submitting an inquiry.",
    source: {
      name: "HubSpot",
      year: "2024–2025",
    },
  },
  {
    id: "stl-1pct-b2b",
    value: "1%",
    description: "Only 1% of B2B companies respond to leads in under 5 minutes.",
    source: {
      name: "Amplemarket",
      year: "2024",
    },
  },
  {
    id: "stl-instant-66",
    value: "66.7%",
    description:
      "Instant lead response achieves a 66.7% meeting booking rate vs. ~30% for standard delayed follow-up.",
    source: {
      name: "Chili Piper (analysis of 4M form submissions)",
      year: "2025",
    },
  },
  {
    id: "stl-50pct-first",
    value: "50%+",
    description:
      "Over 50% of people hire the first business to respond, even if that business is more expensive.",
    source: {
      name: "Forbes (via Verse.ai)",
      year: "2025",
    },
  },
  {
    id: "stl-53pct-frustration",
    value: "53%",
    description:
      "53% of consumers say waiting too long is the most frustrating part of dealing with businesses.",
    source: {
      name: "Tidio",
      year: "2025",
    },
  },
];

// ─── Video Advertising Statistics ─────────────────────────────────────────────

const videoAdStats: Statistic[] = [
  {
    id: "vid-89pct",
    value: "89%",
    description: "89% of businesses now use video as a marketing tool, up from 63% five years ago.",
    source: {
      name: "Wyzowl Video Marketing Statistics",
      year: "2025",
      url: "https://www.wyzowl.com/video-marketing-statistics/",
    },
  },
  {
    id: "vid-93pct-roi",
    value: "93%",
    description: "93% of marketers report a strong ROI from video marketing content.",
    source: {
      name: "Wyzowl",
      year: "2025",
    },
  },
  {
    id: "vid-85b-vs-59b",
    value: "$85B vs $59B",
    description:
      "US digital video ad spend ($85B) has surpassed traditional TV ad spend ($59B), signaling a permanent shift.",
    source: {
      name: "Statista (via HubSpot)",
      year: "2024",
    },
  },
  {
    id: "vid-64pct-purchase",
    value: "64%",
    description: "64% of consumers make a purchase after watching branded social media videos.",
    source: {
      name: "WordStream",
      year: "2024",
    },
  },
  {
    id: "vid-300pct-email",
    value: "+300%",
    description: "Including video in email campaigns increases click-through rates by 300%.",
    source: {
      name: "WordStream / Single Grain",
      year: "2024",
    },
  },
  {
    id: "vid-38pct-lp",
    value: "38%",
    description:
      "Landing pages with embedded video see a 38% higher conversion rate compared to image-only pages (21%).",
    source: {
      name: "Zebracat",
      year: "2025",
    },
  },
  {
    id: "vid-completion-15s",
    value: "+53%",
    description:
      "Video ads under 15 seconds have a 53% higher completion rate than ads over 30 seconds.",
    source: {
      name: "Zebracat",
      year: "2025",
    },
  },
  {
    id: "vid-mobile-28pct",
    value: "+28%",
    description: "Mobile video ads generate 28% higher engagement than desktop video ads.",
    source: {
      name: "Zebracat",
      year: "2025",
    },
  },
  {
    id: "vid-92pct-roi",
    value: "92%",
    description:
      "92% of marketers say video delivers a positive ROI, compared to 74% for static images.",
    source: {
      name: "Zebracat",
      year: "2025",
    },
  },
  {
    id: "vid-87pct-buy",
    value: "87%",
    description:
      "87% of consumers say they have been convinced to buy a product or service by watching a video.",
    source: {
      name: "SellersCommerce",
      year: "2025",
    },
  },
  {
    id: "vid-96pct-ai",
    value: "96%",
    description:
      "96% of marketers believe AI will be central to video production workflows within the next few years.",
    source: {
      name: "Lemonlight",
      year: "2025",
    },
  },
  {
    id: "vid-82pct-ai-roi",
    value: "+82%",
    description:
      "AI-driven video marketing campaigns deliver an 82% increase in ROI; AI product demo videos boost conversions by 40%.",
    source: {
      name: "SellersCommerce",
      year: "2025",
    },
  },
];

// ─── AI Adoption in Sales Statistics ──────────────────────────────────────────

const aiAdoptionStats: Statistic[] = [
  {
    id: "ai-56pct-daily",
    value: "56%",
    description:
      "56% of sales professionals use AI daily — and daily AI users are 2× more likely to exceed their targets.",
    source: {
      name: "LinkedIn State of Sales",
      year: "2025",
    },
  },
  {
    id: "ai-24-to-43",
    value: "24% → 43%",
    description:
      "AI adoption among sales reps nearly doubled in one year, growing from 24% in 2023 to 43% in 2024 — a 79% year-over-year increase.",
    source: {
      name: "HubSpot State of AI in Sales",
      year: "2024",
    },
  },
  {
    id: "ai-37x-quota",
    value: "3.7×",
    description: "Sellers who partner with AI are 3.7× more likely to meet their sales quota.",
    source: {
      name: "Gartner",
      year: "2025",
    },
  },
  {
    id: "ai-15pct-conv",
    value: "15–30%",
    description:
      "AI-using sales teams see a 15% boost in sales conversions, with lead conversion improvements up to 30%.",
    source: {
      name: "Datagrid",
      year: "2025",
    },
  },
  {
    id: "ai-45pct-deals",
    value: "45%",
    description:
      "Salespeople using AI and machine learning tools close 45% more deals than those who don't.",
    source: {
      name: "Forrester (via Datagrid)",
      year: "2025",
    },
  },
  {
    id: "ai-81pct-rev",
    value: "81%",
    description:
      "81% of revenue increase reported by AI-using sales teams vs. 66% for non-AI teams — a 17 percentage-point gap.",
    source: {
      name: "Datagrid",
      year: "2025",
    },
  },
  {
    id: "ai-86pct-roi-year1",
    value: "86%",
    description:
      "86% of sales teams see a positive ROI within the first year of adopting AI tools.",
    source: {
      name: "Sopro",
      year: "2026",
    },
  },
  {
    id: "ai-40pct-productivity",
    value: "+40%",
    description:
      "AI tools can boost sales productivity by up to 40%, while also reducing sales cycles by approximately 25%.",
    source: {
      name: "Sopro",
      year: "2026",
    },
  },
  {
    id: "ai-28pct-quota",
    value: "28%",
    description:
      "Only 28% of sales reps hit their annual quota — the lowest rate in six years — creating urgency for AI assistance.",
    source: {
      name: "Salesforce State of Sales",
      year: "2024–2025",
    },
  },
  {
    id: "ai-25pct-selling",
    value: "25%",
    description:
      "Sales reps spend only about 25% of their time actually selling — the rest goes to admin, data entry, and internal meetings.",
    source: {
      name: "Bain & Company",
      year: "2025",
    },
  },
  {
    id: "ai-62pct-agents",
    value: "62%",
    description:
      "62% of organizations are now experimenting with AI agents (39% experimenting, 23% already scaling).",
    source: {
      name: "McKinsey Global AI Survey",
      year: "2025",
    },
  },
  {
    id: "ai-trillion",
    value: "$1.2T",
    description:
      "McKinsey estimates generative AI could unlock $0.8–1.2 trillion in productivity gains across sales and marketing functions.",
    source: {
      name: "McKinsey (via Everstage)",
      year: "2025",
    },
  },
];

// ─── Lead Response & Conversion Statistics ────────────────────────────────────

const leadConversionStats: Statistic[] = [
  {
    id: "lc-7x-1hr",
    value: "7×",
    description:
      "Companies are 7× more likely to qualify a lead when they respond within 1 hour vs. after 1 hour.",
    source: {
      name: "Harvard Business Review",
      year: "2011 (re-cited 2024–2026)",
    },
  },
  {
    id: "lc-60x-1hr",
    value: "60×",
    description: "You are 60× more likely to qualify a lead within 1 hour vs. waiting 24 hours.",
    source: {
      name: "Teamgate (citing HBR)",
      year: "2025",
    },
  },
  {
    id: "lc-13-attempts",
    value: "1.3",
    description:
      "The average sales rep makes only 1.3 call attempts before giving up on a lead — far below the 6–8 attempts recommended for optimal contact rates.",
    source: {
      name: "Multiple sources (Teamgate, rework.com)",
      year: "2025",
    },
  },
  {
    id: "lc-15pct-day1",
    value: "< 15%",
    description:
      "Less than 15% of lead follow-up attempts happen within the first day of receiving the inquiry.",
    source: {
      name: "InsideSales (via Convoso)",
      year: "2025",
    },
  },
  {
    id: "lc-51pct-never",
    value: "51%",
    description:
      "51% of leads are never contacted at all, representing a massive untapped revenue opportunity.",
    source: {
      name: "InsideSales",
      year: "2021, re-cited 2025",
    },
  },
  {
    id: "lc-57pct-week",
    value: "57%",
    description: "57% of companies take a full week or more to respond to inbound leads.",
    source: {
      name: "InsideSales (via Verse.ai)",
      year: "2025",
    },
  },
  {
    id: "lc-37pct-1hr",
    value: "37%",
    description: "Only 37% of businesses respond to leads within the first hour.",
    source: {
      name: "Harvard Business Review",
      year: "2011, re-cited 2024–2025",
    },
  },
  {
    id: "lc-48pct-rev",
    value: "48%",
    description:
      "48% of sales teams using AI report a direct boost in revenue from improved lead response and follow-up.",
    source: {
      name: "Spekit",
      year: "2025",
    },
  },
  {
    id: "lc-20-30pct-pred",
    value: "20–30%",
    description:
      "Predictive AI models improve lead conversion rates by 20–30% through better scoring and prioritization.",
    source: {
      name: "Sopro",
      year: "2026",
    },
  },
  {
    id: "lc-12pp-quota",
    value: "+12pp",
    description:
      "AI sales tools improve quota attainment by 12 percentage points (from 65% to 77%) across 939 companies studied.",
    source: {
      name: "Optifai",
      year: "2025",
    },
  },
];

// ─── Industry-Specific Data (Cost Per Lead & Benchmarks) ──────────────────────

const industryStats: Statistic[] = [
  {
    id: "ind-cpl-70",
    value: "$70.11",
    description:
      "The average cost per lead in Google Ads across all industries in 2025 — up 5.13% year-over-year.",
    source: {
      name: "WordStream/LocaliQ (16,000+ Google Ads campaigns)",
      year: "2025",
    },
  },
  {
    id: "ind-cpl-legal",
    value: "$131.63",
    description:
      "Attorneys & legal services have the highest average cost per lead in Google Ads at $131.63 — nearly double the cross-industry average.",
    source: {
      name: "WordStream/LocaliQ",
      year: "2025",
    },
  },
  {
    id: "ind-cpl-auto",
    value: "$28.50",
    description:
      "Automotive repair, service & parts businesses have the lowest average cost per lead at just $28.50.",
    source: {
      name: "WordStream/LocaliQ",
      year: "2025",
    },
  },
  {
    id: "ind-cpl-biz",
    value: "$103.54",
    description:
      "Business services companies pay an average of $103.54 per lead — one of the highest CPLs across all industries.",
    source: {
      name: "WordStream/LocaliQ",
      year: "2025",
    },
  },
  {
    id: "ind-ctr-66",
    value: "6.66%",
    description: "The average click-through rate across all Google Ads industries in 2025.",
    source: {
      name: "WordStream/LocaliQ",
      year: "2025",
    },
  },
  {
    id: "ind-cvr-752",
    value: "7.52%",
    description: "The average conversion rate across all Google Ads industries in 2025.",
    source: {
      name: "WordStream/LocaliQ",
      year: "2025",
    },
  },
  {
    id: "ind-cpc-526",
    value: "$5.26",
    description: "The average cost per click in Google Ads across all industries in 2025.",
    source: {
      name: "WordStream/LocaliQ",
      year: "2025",
    },
  },
  {
    id: "ind-linkedin-110",
    value: "$110",
    description:
      "The average cost per lead on LinkedIn is $110 — approximately 57% higher than Google Search's $70.11 average.",
    source: {
      name: "Flywheel Digital",
      year: "2025",
    },
  },
  {
    id: "ind-auto-conv",
    value: "14.67%",
    description:
      "Automotive repair businesses achieve the highest Google Ads conversion rate at 14.67% — nearly double the cross-industry average.",
    source: {
      name: "WordStream/LocaliQ",
      year: "2025",
    },
  },
  {
    id: "ind-education-cpl-up",
    value: "+25.87%",
    description:
      "Cost per lead in Education & Instruction rose 25.87% year-over-year — the steepest increase across all industries.",
    source: {
      name: "WordStream/LocaliQ",
      year: "2025",
    },
  },
];

// ─── Batch Video Ads & Creative Testing Statistics ─────────────────────────────

const batchVideoAdStats: Statistic[] = [
  {
    id: "bva-winner-rate-home-services",
    value: "7–12%",
    description:
      "Home service batch video ad tests average a 7–12% winning-ad rate, or roughly 1 winning ad per 8–14 tested creatives.",
    source: {
      name: "Prestyj production benchmark across home service batch video ad tests",
      year: "2026",
      url: "https://prestyj.com/blog/average-winning-ad-rate-batch-video-ad-testing-home-services-2026",
    },
    context:
      "Benchmark covers HVAC, roofing, plumbing, electrical, garage door, pest control, restoration, solar, landscaping, and pool service batch tests where a winner meets at least two performance thresholds against the account control.",
  },
  {
    id: "bva-cost-per-ad-variation",
    value: "$4–$5",
    description:
      "Prestyj batch video ad packs price finished vertical ad variations at roughly $4–$5 per ad in 300–1,000-ad batches, compared with $75–$2,000 per ad from UGC or agency production.",
    source: {
      name: "Prestyj batch video ads pricing and market cost comparison",
      year: "2026",
      url: "https://prestyj.com/batch-video-ads",
    },
    context:
      "Calculated from Prestyj's $1,497 / 300-ad, $2,497 / 500-ad, and $3,997 / 1,000-ad packs and compared with published UGC creator, agency, and in-house production cost ranges summarized on the Batch Video Ads page.",
  },
  {
    id: "bva-cost-per-tested-angle",
    value: "$400–$500",
    description:
      "A tested customer-problem angle costs about $400–$500 through batch video production versus $1K–$15K through UGC, agency, or in-house production workflows.",
    source: {
      name: "Prestyj batch video ads pricing and hidden-cost comparison",
      year: "2026",
      url: "https://prestyj.com/batch-video-ads#hidden-cost",
    },
    context:
      "Uses the Prestyj 300+ ad batch economics and compares the cost of testing one customer-problem angle against common UGC, agency, and in-house production alternatives.",
  },
  {
    id: "bva-creative-volume-top-accounts",
    value: "300–1,000/mo",
    description:
      "Top-performing lead-generation accounts post-Andromeda commonly run 300–1,000 distinct creative variations per month to keep testing velocity ahead of fatigue.",
    source: {
      name: "Prestyj batch video ad statistics synthesis",
      year: "2026",
      url: "https://prestyj.com/blog/batch-video-ad-statistics-2026",
    },
    context:
      "Synthesized from Meta Andromeda creative-volume discussions, creative testing benchmarks, and Prestyj campaign operations for lead-generation accounts.",
  },
  {
    id: "bva-small-batch-zero-winner-risk",
    value: "30–40%",
    description:
      "Small creative batches below 25 ads can produce zero winners 30–40% of the time purely from sample-size variance, even at a healthy 9% long-run winner rate.",
    source: {
      name: "Prestyj home services winning-ad-rate benchmark",
      year: "2026",
      url: "https://prestyj.com/blog/average-winning-ad-rate-batch-video-ad-testing-home-services-2026",
    },
    context:
      "Used to explain why 4–10-ad agency starter packages often fail to generate reliable signal for paid social advertisers.",
  },
];

const creativeFatigueStats: Statistic[] = [
  {
    id: "fatigue-meta-cpa-degradation-5-7-days",
    value: "5–7 days",
    description:
      "Meta video ads show measurable CPA degradation within 5–7 days of active spend once weekly frequency rises above roughly 2.0.",
    source: {
      name: "Motion App Creative Trends Report / Prestyj synthesis",
      year: "2025–2026",
      url: "https://prestyj.com/blog/batch-video-ad-statistics-2026",
    },
    context:
      "Relevant for paid social accounts refreshing creative weekly or slower; sourced from creative fatigue benchmarks cited in the batch video ad statistics roundup.",
  },
  {
    id: "fatigue-ads-fully-fatigued-14-days",
    value: "60%",
    description:
      "Roughly 60% of Meta video ads are fully fatigued within 14 days of launch when CPA rises above 2× the original baseline.",
    source: {
      name: "Foreplay ad library cohort analysis / Prestyj synthesis",
      year: "2025–2026",
      url: "https://prestyj.com/blog/batch-video-ad-statistics-2026",
    },
    context:
      "Used as a planning benchmark for accounts that need fresh creative before a two-week fatigue window closes.",
  },
  {
    id: "fatigue-cpm-creep-14-days",
    value: "+28–40%",
    description:
      "Across industry benchmarks, CPM commonly creeps 28–40% in the first 14 days of running the same creative pool.",
    source: {
      name: "Varos, Northbeam, Motion, Triple Whale, and Prestyj benchmark synthesis",
      year: "2026",
      url: "https://prestyj.com/blog/creative-fatigue-statistics-by-industry-2026",
    },
    context:
      "Range summarizes the industry table for HVAC, roofing, solar, real estate, mortgage, dental, med-spa, ecommerce, coaches, and lead-gen agencies.",
  },
  {
    id: "fatigue-refresh-extends-life",
    value: "3–5×",
    description:
      "High-volume creative refresh programs using 15–50+ new variants per month can extend campaign life 3–5× compared with thin creative libraries.",
    source: {
      name: "Motion, Foreplay, and Prestyj creative fatigue benchmark synthesis",
      year: "2026",
      url: "https://prestyj.com/blog/creative-fatigue-statistics-by-industry-2026",
    },
    context:
      "Applies most directly to accounts spending $10K+/month in paid social where single-creative campaigns reliably decay within 14–21 days.",
  },
];

const socialMediaEconomicsStats: Statistic[] = [
  {
    id: "social-dfy-real-loaded-cost",
    value: "$2.4K–$7.8K/mo",
    description:
      "Done-for-you social media retainers advertised at $800–$3,500 per month often cost $2,400–$7,800 per month after setup, platform, premium content, revision, and contract costs are included.",
    source: {
      name: "Prestyj hidden-cost analysis of done-for-you social media services",
      year: "2026",
      url: "https://prestyj.com/blog/hidden-costs-done-for-you-social-media-2026",
    },
    context:
      "Fully loaded cost range includes typical agency setup fees, per-platform upcharges, premium content tiers, revision overages, strategy calls, reporting, and contract lock-in costs.",
  },
  {
    id: "social-agency-post-volume",
    value: "20–30/mo",
    description:
      "Typical done-for-you social media agency packages ship only 20–30 posts per month, often on one or two platforms.",
    source: {
      name: "Prestyj hidden-cost analysis of done-for-you social media services",
      year: "2026",
      url: "https://prestyj.com/blog/hidden-costs-done-for-you-social-media-2026",
    },
    context:
      "Used to compare standard agency output against high-volume AI content operations and platform-level posting cadence requirements.",
  },
  {
    id: "social-platform-cadence-short-form",
    value: "1–3/day",
    description:
      "Short-form recommendation systems such as TikTok, Instagram Reels, and YouTube Shorts commonly reward 1–3 posts per day per account in 2026 cadence benchmarks.",
    source: {
      name: "Prestyj platform-by-platform posting frequency synthesis",
      year: "2026",
      url: "https://prestyj.com/blog/posting-frequency-by-platform-2026",
    },
    context:
      "Synthesized from Buffer, Socialinsider, Sprout Social, AuthoredUp, Adobe, and late-2025 platform cadence research cited in the posting-frequency guide.",
  },
  {
    id: "social-effective-cost-per-post",
    value: "$0.74–$7.40",
    description:
      "Prestyj AI Content Department pricing can produce an effective cost per post of roughly $0.74–$7.40, compared with $83–$500 for many agency packages.",
    source: {
      name: "Prestyj AI Content Department pricing comparison",
      year: "2026",
      url: "https://prestyj.com/ai-content-department#hidden-cost",
    },
    context:
      "Calculated from Prestyj's $1,997–$4,997 monthly pricing and 270–2,700 post-per-month plan ranges, compared with typical social agency output and retainers.",
  },
];

const leadReactivationStats: Statistic[] = [
  {
    id: "reactivation-dormant-crm-volume",
    value: "3,000–10,000",
    description:
      "The average SMB with several years of lead history has roughly 3,000–10,000 untouched leads sitting in its CRM.",
    source: {
      name: "Prestyj lead reactivation statistics benchmark",
      year: "2026",
      url: "https://prestyj.com/blog/lead-reactivation-statistics",
    },
    context:
      "Vendor audits and reactivation planning benchmarks across real estate teams, mortgage brokers, home services, insurance, solar, dental, and B2B services.",
  },
  {
    id: "reactivation-cost-savings",
    value: "60–80% less",
    description:
      "Lead reactivation campaigns commonly cost 60–80% less per qualified lead than acquiring new leads through paid channels.",
    source: {
      name: "Prestyj lead reactivation statistics benchmark",
      year: "2026",
      url: "https://prestyj.com/blog/lead-reactivation-statistics",
    },
    context:
      "Compares email, SMS, and AI voice reactivation cost ranges with Google Ads, Meta Ads, lead aggregators, and outbound SDR acquisition cost ranges.",
  },
  {
    id: "reactivation-multichannel-rate",
    value: "8–15%",
    description:
      "Multi-channel lead reactivation campaigns using email, SMS, and AI voice commonly reactivate 8–15% of dormant leads, outperforming single-channel outreach by 3–5×.",
    source: {
      name: "Prestyj lead reactivation statistics benchmark",
      year: "2026",
      url: "https://prestyj.com/blog/lead-reactivation-statistics",
    },
    context:
      "Applies to dormant CRM audiences where consent and list hygiene support multi-channel outreach.",
  },
  {
    id: "reactivation-home-services-recovered-revenue",
    value: "$50K–$200K+",
    description:
      "Home service companies can often recover $50K–$200K+ in revenue within 60–90 days by reactivating 3–5% of a 2,000–5,000 lead dormant database.",
    source: {
      name: "Prestyj home services lead reactivation benchmark",
      year: "2026",
      url: "https://prestyj.com/blog/lead-reactivation-for-home-services",
    },
    context:
      "Modeled across HVAC, plumbing, roofing, electrical, and other service businesses using typical dormant database sizes and ticket values.",
  },
];

// ─── Voice Agent Economics ────────────────────────────────────────────────────

const voiceAgentStats: Statistic[] = [
  {
    id: "voice-agent-hidden-cost-percent",
    value: "18–35%",
    description:
      "Hidden costs (per-minute overage, telephony pass-through, integration fees, after-hours premiums, voice cloning, and managed-knowledge updates) add 18–35% to the advertised monthly price of most AI voice agent vendors.",
    source: {
      name: "Prestyj AI voice agent pricing benchmark",
      year: "2026",
      url: "https://prestyj.com/blog/hidden-costs-of-ai-voice-agents-2026",
    },
    context:
      "Compiled from published rate cards, vendor contracts, and Prestyj implementation invoices across HVAC, plumbing, roofing, dental, real estate, and property management deployments.",
  },
  {
    id: "voice-agent-cost-per-minute-at-scale",
    value: "$0.06–$0.18/min",
    description:
      "At scale (50,000+ minutes/month) AI voice agents deliver fully-loaded cost per minute of $0.06–$0.18, versus $0.65–$1.20 for live answering services and $0.95–$2.40 for in-house receptionists on a loaded basis.",
    source: {
      name: "Prestyj AI voice agent at-scale pricing benchmark",
      year: "2026",
      url: "https://prestyj.com/blog/ai-voice-agent-cost-per-minute-at-scale-2026",
    },
    context:
      "Reflects platform + LLM + STT/TTS + telephony costs at high-volume tiers and assumes managed implementation. Live answering and in-house numbers use Glassdoor loaded-cost data and industry rate cards.",
  },
  {
    id: "voice-agent-pilot-setup-cost-range",
    value: "$0–$1,500",
    description:
      "A properly scoped AI voice agent pilot deployment costs $0–$1,500 in setup fees, including persona configuration, knowledge ingestion, CRM webhook, and call routing — versus the $5,000–$25,000 setup fees still quoted by legacy enterprise voice vendors.",
    source: {
      name: "Prestyj AI voice agent pilot benchmark",
      year: "2026",
      url: "https://prestyj.com/blog/lowest-setup-cost-ai-voice-agent-pilot-2026",
    },
    context:
      "Range covers SMB pilots across home services, dental, real estate, and property management. Some Prestyj pilots launch at $0 setup when contracted under a 90-day production commitment.",
  },
  {
    id: "branded-calling-answer-rate-lift",
    value: "+27–41%",
    description:
      "Branded calling (verified caller ID with business name + logo) lifts outbound answer rates by 27–41% on average versus unbranded numbers for tech services and home services firms.",
    source: {
      name: "Prestyj branded calling pricing benchmark",
      year: "2026",
      url: "https://prestyj.com/blog/branded-calling-pricing-comparison-2026",
    },
    context:
      "Synthesized from CTIA STIR/SHAKEN attestation data, First Orion and Hiya answer-rate studies, and Prestyj branded-calling campaign A/B tests.",
  },
];

// ─── Sales Outreach Economics ─────────────────────────────────────────────────

const salesOutreachStats: Statistic[] = [
  {
    id: "ai-cold-call-volume-per-agent-per-month",
    value: "46,000+/mo",
    description:
      "A single AI cold-calling agent can place 46,000+ outbound dial attempts per month — roughly the equivalent of 35–50 human SDRs working a 9-to-5 schedule with industry-average dial cadence.",
    source: {
      name: "Prestyj AI cold-calling capacity benchmark",
      year: "2026",
      url: "https://prestyj.com/blog/ai-make-46000-calls-per-month-without-hiring-sdrs-2026",
    },
    context:
      "Assumes 24/7 parallel dialing, compliant local-time windows, and standard list-warming and pacing rules. Human SDR baseline uses Bridge Group annual dial-volume averages.",
  },
];

// ─── Lead Reactivation Industry Expansions ────────────────────────────────────

const leadReactivationIndustryStats: Statistic[] = [
  {
    id: "dormant-lead-reactivation-real-estate-rate",
    value: "6–14%",
    description:
      "Real estate teams running multi-channel dormant lead reactivation (email + SMS + AI voice) commonly convert 6–14% of dormant database contacts to a live conversation within a 30-day campaign.",
    source: {
      name: "Prestyj real estate dormant lead reactivation benchmark",
      year: "2026",
      url: "https://prestyj.com/blog/dormant-lead-reactivation-software-real-estate-2026",
    },
    context:
      "Modeled across brokerages and team accounts with 2,000–25,000 dormant leads from past portal inquiries, open-house signups, and expired follow-up sequences.",
  },
  {
    id: "off-season-database-revenue-share",
    value: "18–32%",
    description:
      "Home service companies running structured off-season database reactivation campaigns commonly source 18–32% of annual revenue from existing customer and dormant lead lists rather than new paid acquisition.",
    source: {
      name: "Prestyj home services off-season revenue benchmark",
      year: "2026",
      url: "https://prestyj.com/blog/home-services-off-season-revenue-customer-database-2026",
    },
    context:
      "Applies to HVAC, plumbing, roofing, electrical, pool service, landscaping, and pest control databases ≥2 years old with seasonal demand swings.",
  },
  {
    id: "home-services-avg-inbound-call-response",
    value: "47 hours",
    description:
      "Home service companies take an average of 47 hours to respond to inbound web form leads and over 8 minutes to answer inbound calls during peak hours — AI voice and SMS systems cut both to 12–45 seconds.",
    source: {
      name: "Prestyj home services inbound response benchmark",
      year: "2026",
      url: "https://prestyj.com/blog/average-response-time-home-services-inbound-calls-2026",
    },
    context:
      "Synthesized from Lead Response Management research, ServiceTitan and Housecall Pro public benchmark reports, and Prestyj mystery-shopper studies of contractor inbound response.",
  },
  {
    id: "cpl-reduction-conversational-ai",
    value: "32–58%",
    description:
      "Conversational AI (voice + SMS qualification before human handoff) reduces effective cost per qualified lead by 32–58% by killing unqualified traffic earlier and lifting show-up rates on booked appointments.",
    source: {
      name: "Prestyj conversational AI CPL reduction benchmark",
      year: "2026",
      url: "https://prestyj.com/blog/cost-per-lead-reduction-conversational-ai-2026",
    },
    context:
      "Modeled across paid lead sources (Google Ads, Meta, lead aggregators) where AI qualification sits between form submit and human sales touch.",
  },
];

// ─── Batch Video Ads vs Alternatives Expansions ───────────────────────────────

const batchVideoCitationStats: Statistic[] = [
  {
    id: "ugc-ad-roi-vs-ai-batch-roi-ratio",
    value: "2.1–4.7×",
    description:
      "AI-generated batch video ads deliver 2.1–4.7× the per-dollar ROI of UGC creator marketplace ads when measured on cost per winning ad across a 60–90 day test window.",
    source: {
      name: "Prestyj UGC vs AI batch ROI benchmark",
      year: "2026",
      url: "https://prestyj.com/blog/evaluate-roi-ai-generated-ugc-ads-2026",
    },
    context:
      "Uses winning-ad-rate, cost-per-finished-variation, and cost-per-tested-angle to normalize across vendor types. UGC marketplace inputs from published Billo, Insense, and JoinBrands rate cards.",
  },
  {
    id: "ugc-marketplace-hidden-cost-percent",
    value: "22–48%",
    description:
      "Hidden costs (revision rounds, usage rights, exclusivity fees, reshoots, and platform service fees) add 22–48% to the advertised price of UGC creator marketplace ads.",
    source: {
      name: "Prestyj UGC marketplace hidden cost benchmark",
      year: "2026",
      url: "https://prestyj.com/blog/hidden-costs-of-ugc-creator-marketplaces-2026",
    },
    context:
      "Compiled from Billo, Insense, JoinBrands, and Trend.io public rate cards plus Prestyj client invoice audits.",
  },
  {
    id: "batch-video-cost-per-tested-angle-vs-agency",
    value: "$400–$500 vs $4K–$12K",
    description:
      "Batch video production tests a customer-problem angle for $400–$500, versus $4,000–$12,000 per tested angle at a traditional creative agency once concept, shoot, edit, and revision rounds are included.",
    source: {
      name: "Prestyj cost per tested ad angle benchmark",
      year: "2026",
      url: "https://prestyj.com/blog/cost-per-tested-ad-angle-batch-video-vs-agency-2026",
    },
    context:
      "Uses Prestyj's 300/500/1,000-ad pack economics and compares with published agency creative rate cards and creative-RFP medians.",
  },
  {
    id: "batch-video-pilot-setup-cost",
    value: "$497",
    description:
      "A batch video ad pilot starts at $497 for 100 vertical ad variations delivered in 1–2 business days, versus $5,000+ for a traditional creative-agency starter retainer that typically produces 4–10 finished ads.",
    source: {
      name: "Prestyj batch video ads pilot pricing",
      year: "2026",
      url: "https://prestyj.com/batch-video-ads",
    },
    context:
      "Pilot pricing reflects Prestyj's published 100-ad $497 pack and is contrasted with traditional creative-agency and in-house pilot starter retainers.",
  },
];

const instantLeadResponseStats: Statistic[] = [
  {
    id: "lead-response-ai-time-to-contact",
    value: "12–45 sec",
    description:
      "Modern AI lead response systems can make first contact in 12–45 seconds, compared with 42–47 hours for many delayed human follow-up workflows.",
    source: {
      name: "Prestyj AI lead response systems guide",
      year: "2026",
      url: "https://prestyj.com/blog/ai-lead-response-systems-2026",
    },
    context:
      "Covers AI systems connected to web forms, phone calls, SMS, email, CRM webhooks, and lead portals.",
  },
  {
    id: "lead-response-ai-cost-per-lead-engaged",
    value: "$2–$8",
    description:
      "AI lead response systems commonly engage and qualify leads at $2–$8 per lead, versus roughly $25–$50 for human follow-up workflows.",
    source: {
      name: "Prestyj AI lead response systems guide",
      year: "2026",
      url: "https://prestyj.com/blog/ai-lead-response-systems-2026",
    },
    context:
      "Used for ROI modeling when AI handles initial contact, qualification, and appointment booking before human handoff.",
  },
  {
    id: "lead-response-ai-roi-six-months",
    value: "300–500%",
    description:
      "AI lead response systems can deliver 300–500% ROI within six months by lowering cost per engaged lead and recovering pipeline lost to slow follow-up.",
    source: {
      name: "Prestyj AI lead response systems guide",
      year: "2026",
      url: "https://prestyj.com/blog/ai-lead-response-systems-2026",
    },
    context:
      "ROI estimate assumes paid lead volume already exists and the AI system improves first-contact speed, multi-channel follow-up, and appointment booking.",
  },
  {
    id: "lead-response-hybrid-conversion-lift",
    value: "+34%",
    description:
      "Hybrid AI-plus-human lead response converts 34% more leads than either fully manual or fully automated follow-up alone.",
    source: {
      name: "Prestyj AI lead response systems guide",
      year: "2026",
      url: "https://prestyj.com/blog/ai-lead-response-systems-2026",
    },
    context:
      "AI handles speed, qualification, and routing while humans take the highest-intent sales conversations.",
  },
];

// ─── Aggregated Categories ────────────────────────────────────────────────────

export const statCategories: StatCategory[] = [
  {
    id: "speed-to-lead",
    title: "Speed to Lead Statistics",
    slug: "speed-to-lead",
    description:
      "How response time impacts lead qualification and conversion rates. The data is clear: faster follow-up wins more deals.",
    statistics: speedToLeadStats,
  },
  {
    id: "video-advertising",
    title: "Video Advertising Statistics",
    slug: "video-advertising",
    description:
      "Video ad performance data including ROI benchmarks, engagement rates, completion rates, and AI-driven production trends.",
    statistics: videoAdStats,
  },
  {
    id: "ai-adoption",
    title: "AI Adoption in Sales Statistics",
    slug: "ai-adoption-sales",
    description:
      "AI adoption rates, performance impact, productivity gains, and ROI data for sales teams leveraging artificial intelligence.",
    statistics: aiAdoptionStats,
  },
  {
    id: "lead-conversion",
    title: "Lead Response & Conversion Statistics",
    slug: "lead-response-conversion",
    description:
      "Follow-up frequency, qualification rates, no-show reduction, and the real cost of slow lead response.",
    statistics: leadConversionStats,
  },
  {
    id: "batch-video-ads",
    title: "Batch Video Ads & Creative Testing Statistics",
    slug: "batch-video-ads-creative-testing",
    description:
      "Winner-rate, creative-volume, cost-per-ad, and cost-per-tested-angle benchmarks for paid social advertisers using batch video ad production.",
    statistics: batchVideoAdStats,
  },
  {
    id: "creative-fatigue",
    title: "Creative Fatigue & Refresh Statistics",
    slug: "creative-fatigue-refresh",
    description:
      "How quickly paid social creative fatigues, how CPM creeps, and how high-volume refresh cadences extend campaign life.",
    statistics: creativeFatigueStats,
  },
  {
    id: "social-media-economics",
    title: "Done-For-You Social Media Economics",
    slug: "done-for-you-social-media-economics",
    description:
      "Fully loaded agency costs, posting frequency benchmarks, post-volume economics, and AI content department cost-per-post comparisons.",
    statistics: socialMediaEconomicsStats,
  },
  {
    id: "lead-reactivation",
    title: "Lead Reactivation Benchmarks",
    slug: "lead-reactivation-benchmarks",
    description:
      "Dormant CRM value, reactivation cost savings, multi-channel response rates, and recovered-revenue benchmarks for old leads.",
    statistics: leadReactivationStats,
  },
  {
    id: "instant-lead-response",
    title: "Instant AI Lead Response Economics",
    slug: "instant-ai-lead-response-economics",
    description:
      "AI lead response speed, cost-per-engaged-lead, ROI, and hybrid AI-plus-human conversion benchmarks.",
    statistics: [...instantLeadResponseStats, ...leadReactivationIndustryStats],
  },
  {
    id: "voice-agent-economics",
    title: "AI Voice Agent Economics",
    slug: "ai-voice-agent-economics",
    description:
      "Per-minute, pilot setup, hidden cost, and branded-calling answer-rate benchmarks for AI voice agents in 2026.",
    statistics: voiceAgentStats,
  },
  {
    id: "sales-outreach-economics",
    title: "AI Sales Outreach Economics",
    slug: "ai-sales-outreach-economics",
    description:
      "Per-agent dial volume, SDR-equivalent capacity, and outbound throughput benchmarks for AI cold-calling agents.",
    statistics: salesOutreachStats,
  },
  {
    id: "batch-video-citations",
    title: "Batch Video vs UGC & Agency Benchmarks",
    slug: "batch-video-vs-ugc-agency-benchmarks",
    description:
      "ROI ratios, hidden-cost percentages, cost-per-tested-angle, and pilot setup-cost comparisons between AI batch video production, UGC creator marketplaces, and traditional creative agencies.",
    statistics: batchVideoCitationStats,
  },
  {
    id: "industry-benchmarks",
    title: "Industry Benchmarks: Cost Per Lead & Conversion Rates",
    slug: "industry-benchmarks",
    description:
      "Average cost per lead, CPC, CTR, and conversion rate benchmarks by industry for Google Ads in 2025.",
    statistics: industryStats,
  },
];

// ─── Total stat count for hero display ────────────────────────────────────────

export const totalStatCount = statCategories.reduce((sum, cat) => sum + cat.statistics.length, 0);

// ─── FAQs ─────────────────────────────────────────────────────────────────────

export const statisticsFaqs: StatisticsFAQ[] = [
  {
    question: "What is speed to lead?",
    answer:
      "Speed to lead measures how quickly a business responds to a new inbound lead after they submit an inquiry. Research from Harvard Business Review shows that responding within 5 minutes makes you 21× more likely to qualify the lead compared to waiting 30 minutes. Despite this, the average B2B response time is 42 hours, and 77% of leads never receive any response at all.",
  },
  {
    question: "Why is lead response time so important?",
    answer:
      "Lead response time directly impacts conversion rates. Conversion rates drop 8× after just 5 minutes of delay, and the likelihood of qualifying a lead drops 400% when response time goes from 5 to 10 minutes. Meanwhile, 78% of B2B customers buy from the vendor that responds first, and over 50% of consumers hire the first business to respond even if it's more expensive.",
  },
  {
    question: "How does AI improve lead response times?",
    answer:
      "AI lead response systems can engage leads in 12–45 seconds or under 60 seconds across web forms, calls, SMS, and email — compared to the industry average of 42+ hours. Instant lead response achieves a 66.7% meeting booking rate vs. ~30% for standard delayed follow-up. AI-using sales teams see a 15–30% boost in lead conversion, and 86% of teams report positive ROI within the first year of AI adoption.",
  },
  {
    question: "What is the average cost per lead in 2025?",
    answer:
      "According to WordStream/LocaliQ's analysis of 16,000+ Google Ads campaigns, the average cost per lead across all industries is $70.11 in 2025, up 5.13% year-over-year. The highest CPL is in legal services at $131.63, while the lowest is automotive repair at $28.50. LinkedIn's average CPL is $110 — about 57% higher than Google Search.",
  },
  {
    question: "How effective are video ads compared to static images?",
    answer:
      "Video significantly outperforms static content. 92% of marketers say video delivers a positive ROI vs. 74% for images. Landing pages with video convert at 38% vs. 21% for image-only pages. Batch creative benchmarks show home service video tests average a 7–12% winning-ad rate, while fatigue benchmarks show many Meta video ads decay within 5–14 days without fresh variants.",
  },
  {
    question: "How many sales reps use AI in 2025?",
    answer:
      "56% of sales professionals now use AI daily, and daily AI users are 2× more likely to exceed their targets. AI adoption among sales reps nearly doubled from 24% in 2023 to 43% in 2024. 62% of organizations are experimenting with AI agents, and McKinsey estimates generative AI could unlock $0.8–1.2 trillion in sales and marketing productivity gains.",
  },
  {
    question: "What percentage of leads are never contacted?",
    answer:
      "Research shows that 51–77% of inbound leads never receive any response from the business they contacted. Additionally, the average sales rep makes only 1.3 call attempts before giving up, and less than 15% of follow-up attempts happen within the first day. Only 37% of businesses respond within the first hour.",
  },
  {
    question: "What are the latest AI adoption trends for sales teams?",
    answer:
      "AI adoption in sales is accelerating rapidly. Generative AI adoption doubled from 33% in 2023 to 71% in 2024. Sellers using AI close 45% more deals and are 3.7× more likely to meet quota. 86% of sales teams achieve positive ROI in the first year, and Gartner predicts 95% of seller research workflows will begin with AI by 2027.",
  },
  {
    question: "What batch video ad statistics should paid social teams track?",
    answer:
      "The highest-leverage batch video ad statistics are winning-ad rate, cost per finished ad, cost per tested customer-problem angle, creative fatigue window, CPM creep, and fresh creative volume per month. Prestyj benchmarks put home service winner rates at 7–12%, batch production at roughly $4–$5 per ad, and top lead-gen accounts at 300–1,000 variants per month.",
  },
  {
    question: "What are the economics of done-for-you social media in 2026?",
    answer:
      "Traditional done-for-you social media retainers often advertise $800–$3,500 per month but land around $2,400–$7,800 per month once setup, platform, premium content, revision, reporting, and contract costs are included. Output is usually 20–30 posts per month, while modern short-form platforms often reward daily or multi-daily posting cadences.",
  },
];
