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
      "AI lead response systems can engage leads in under 60 seconds — compared to the industry average of 42 hours. Instant lead response achieves a 66.7% meeting booking rate vs. ~30% for standard delayed follow-up. AI-using sales teams see a 15–30% boost in lead conversion, and 86% of teams report positive ROI within the first year of AI adoption.",
  },
  {
    question: "What is the average cost per lead in 2025?",
    answer:
      "According to WordStream/LocaliQ's analysis of 16,000+ Google Ads campaigns, the average cost per lead across all industries is $70.11 in 2025, up 5.13% year-over-year. The highest CPL is in legal services at $131.63, while the lowest is automotive repair at $28.50. LinkedIn's average CPL is $110 — about 57% higher than Google Search.",
  },
  {
    question: "How effective are video ads compared to static images?",
    answer:
      "Video significantly outperforms static content. 92% of marketers say video delivers a positive ROI vs. 74% for images. Landing pages with video convert at 38% vs. 21% for image-only pages. 64% of consumers make a purchase after watching branded social videos, and video emails see 300% higher click-through rates.",
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
];
