/**
 * Generate the Done-For-You Social Media vertical × angle matrix.
 *
 * Run with: npx tsx scripts/generate-social-vertical-matrix.ts
 *
 * Idempotent — rewrites all 40 data files + 10 compare route files, and
 * patches src/lib/best-for/index.ts, src/lib/alternatives/index.ts,
 * src/app/sitemap.ts, and src/lib/nav-data.ts inside marker comments.
 *
 * Angles per vertical:
 *   A: /best-for/done-for-you-social-for-{vertical}        (offer page)
 *   B: /alternatives/{vertical}-social-media-agency-alternative
 *   C: /compare/prestyj-vs-{competitor}-for-{vertical}
 *   D: /best-for/social-volume-strategy-for-{vertical}     (strategy/edu page)
 */
import { mkdirSync, writeFileSync, readFileSync } from "node:fs";
import { join } from "node:path";

const ROOT = process.cwd();
const SRC = join(ROOT, "src");

// ----------------------------- Types -----------------------------

interface Competitor {
  slug: "in-house-hire" | "smma" | "fiverr" | "va-plus-templates";
  name: string;
  shortName: string;
  pricing: string;
  pricingPeriod: string;
  cadence: string;
  postsPerMonth: string;
  pros: string[];
  cons: string[];
  description: string;
}

interface Vertical {
  slug: string;
  varBase: string;     // camelCase
  name: string;        // "Coaches"
  audience: string;
  jobValue: string;
  platforms: string;        // "LinkedIn + Instagram"
  platformList: string;     // "LinkedIn, Instagram, X, YouTube Shorts"
  postsPerMonth: string;    // "1,500+"
  postsPerDay: string;      // "30-50"
  cadenceNote: string;      // "what the algorithm rewards in 2026 for {vertical}"
  painA: string;
  painB: string;
  painC: string;
  painD: string;
  hiddenCost: string;
  authorityHook: string;    // why volume = authority for this vertical
  voiceNote: string;        // voice-protection note specific to vertical
  competitorKey: Competitor["slug"];
  faqSeed: { q: string; a: string }[];
}

// ----------------------------- Competitors -----------------------------

const COMPETITORS: Record<Competitor["slug"], Competitor> = {
  "in-house-hire": {
    slug: "in-house-hire",
    name: "In-House Social Media Hire",
    shortName: "In-House Hire",
    pricing: "$55K–$85K",
    pricingPeriod: "/year (fully loaded)",
    cadence: "20–40 posts/month, 9–5, PTO + sick days",
    postsPerMonth: "20–40",
    pros: [
      "Sits in your office / Slack and can be briefed in real time",
      "Builds institutional knowledge of your business",
      "One throat to choke for everything social",
    ],
    cons: [
      "Median tenure under 14 months — you'll re-hire and re-train",
      "Caps out at 20–40 posts/month before quality collapses",
      "9–5 + PTO + sick days = your social goes dark when they do",
      "Salary, benefits, severance risk, and management overhead",
      "Single point of failure for voice, strategy, and execution",
    ],
    description:
      "A salaried in-house social media coordinator or manager — usually a 1–3 year experience hire making $55K–$85K fully loaded — responsible for posting, captions, and basic creative.",
  },
  smma: {
    slug: "smma",
    name: "SMMA / Social Media Marketing Agency",
    shortName: "SMMA",
    pricing: "$3K–$15K",
    pricingPeriod: "/month retainer",
    cadence: "20–30 posts/month, account manager + quarterly reporting cycles",
    postsPerMonth: "20–30",
    pros: [
      "Senior strategist on calls when you want a meeting",
      "Brand workshops and pillar docs delivered up front",
      "Established relationship model for clients who prefer agencies",
    ],
    cons: [
      "20–30 posts/month is the industry-standard ceiling",
      "$3K–$15K/month means $100–$750 per post once you do the math",
      "3–12 month contracts lock you in before you see results",
      "Slow 2–4 week creative cycles miss trends and platform shifts",
      "Account-manager overhead inflates the line item",
      "Quality varies wildly between agencies and the junior staff actually doing the work",
    ],
    description:
      "A traditional social media marketing agency selling retainer-based posting, strategy decks, and account management — typically $3K–$15K/month for 20–30 posts.",
  },
  fiverr: {
    slug: "fiverr",
    name: "Fiverr Freelancers",
    shortName: "Fiverr",
    pricing: "$25–$500",
    pricingPeriod: "per gig",
    cadence: "Per-gig — you stitch together posts, captions, designers",
    postsPerMonth: "Variable, 20–80 with heavy management",
    pros: [
      "Lowest entry price per individual deliverable",
      "Marketplace of thousands of sellers to choose from",
      "No long-term commitment per gig",
    ],
    cons: [
      "Quality is a coin flip across thousands of sellers",
      "You become the de-facto project manager — coordinating posts, captions, and design across multiple freelancers",
      "No vertical-specific scripting unless you write the brief",
      "Voice drifts because every gig is a new seller",
      "Hidden management time often exceeds the cost of the gig",
      "No performance loop — every gig is one-and-done",
    ],
    description:
      "A patchwork of Fiverr / Upwork gig workers handling individual deliverables (posts, captions, carousel design) — cheap per piece, expensive in management overhead.",
  },
  "va-plus-templates": {
    slug: "va-plus-templates",
    name: "VA + Canva Templates Stack",
    shortName: "VA + Templates",
    pricing: "$800–$2,500",
    pricingPeriod: "/month (VA salary + Canva Pro)",
    cadence: "40–80 templated posts/month, formulaic output",
    postsPerMonth: "40–80",
    pros: [
      "Cheaper than an agency or in-house hire",
      "Templates ensure visual consistency week to week",
      "VA can manage publishing, DMs, and basic engagement",
    ],
    cons: [
      "Templates ship templated content — algorithms detect and demote",
      "No vertical-specific scripting — VA copies the brief, not your voice",
      "VA bandwidth caps at ~80 posts/month before quality breaks",
      "Strategy still falls back on you — VA executes, doesn't think",
      "Templated content reads as low-effort — hurts authority positioning",
      "Hidden cost: every week of training is your time, not the VA's",
    ],
    description:
      "An offshore or part-time VA running a Canva template library and a scheduling tool — the duct-tape stack many solo operators reach for before hiring a real team.",
  },
};

// ----------------------------- Verticals -----------------------------

const VERTICALS: Vertical[] = [
  {
    slug: "coaches",
    varBase: "coaches",
    name: "Coaches",
    audience: "business, executive, and life coaches selling $2K–$25K coaching programs and group offers",
    jobValue: "$2,000–$25,000 per client",
    platforms: "LinkedIn + Instagram (primary), YouTube Shorts + X (secondary)",
    platformList: "LinkedIn, Instagram, YouTube Shorts, X, Threads, Facebook, TikTok",
    postsPerMonth: "1,500+",
    postsPerDay: "30–50",
    cadenceNote: "Coaches who post daily land 3–5× more discovery calls — but coaching delivery makes daily posting impossible without a content engine.",
    painA: "Your social media goes quiet for weeks when you're back-to-back in client sessions",
    painB: "You stare at a blank screen for 30 minutes before every post — writer's block is killing your pipeline",
    painC: "Your content gets likes but doesn't convert followers into discovery calls",
    painD: "Hiring a social media manager costs $3K–$5K/month and they still can't capture your coaching voice",
    hiddenCost: "the hidden cost of coaching is that every hour spent writing posts is an hour you're not delivering transformation — and one high-ticket client pays for an entire year of content",
    authorityHook: "Authority compounds — every post you ship today is a discovery call you book next quarter, and consistency over 6–12 months is what separates the booked-out coaches from the ones perpetually launching",
    voiceNote: "Coaches live or die by voice — generic guru-bot content actively repels the high-ticket clients you actually want. Voice training on your existing posts, podcast clips, and program transcripts is non-negotiable.",
    competitorKey: "in-house-hire",
    faqSeed: [
      { q: "How many posts per month does a coach actually need to fill a calendar?", a: "" },
      { q: "Will the content sound like a real coach — or like a generic motivational quote account?", a: "" },
      { q: "What platforms matter most for coaches — LinkedIn, Instagram, or YouTube?", a: "" },
      { q: "How quickly will I see discovery calls from this?", a: "" },
      { q: "What about executive coaches with C-suite audiences — is the content professional enough?", a: "" },
    ],
  },
  {
    slug: "media-buyers",
    varBase: "mediaBuyers",
    name: "Media Buyers",
    audience: "in-house media buyers and performance marketers managing $50K–$2M/month in paid social spend",
    jobValue: "every 1-point CPA improvement on a $200K/month account = $20K–$60K saved per quarter",
    platforms: "LinkedIn (primary for personal brand), X + Threads (industry conversation)",
    platformList: "LinkedIn, X, Threads, Facebook, Instagram, YouTube",
    postsPerMonth: "1,500+",
    postsPerDay: "30–50",
    cadenceNote: "The same algorithm that demands 50 fresh creatives per ad set to exit learning is the one that rewards daily organic posting — your organic and paid are the same audience, just different surfaces.",
    painA: "You can ship 50 ad sets a week — but your creative team can ship 4 videos, and your organic social is even slower",
    painB: "Organic posts that contradict your paid creative angles confuse the algorithm and tank your CPA",
    painC: "Your personal LinkedIn is the strongest media-buyer brand asset you own — and it's been silent for 3 months",
    painD: "You're testing 50 ad creatives a week and posting 2 LinkedIn updates a month — the math is broken",
    hiddenCost: "the hidden cost is the 'organic-paid asymmetry tax' — your paid testing pool is fed by organic signal, and starving organic starves paid performance",
    authorityHook: "Media buyers with active LinkedIn presence command 2–3× higher freelance/in-house rates — your organic content is the highest-leverage compensation lever you control, and it's almost always being ignored",
    voiceNote: "Media buyer voice is data-forward and pattern-driven — generic 'tips and tricks' content reads as junior. Your real voice — the screenshots, the CPA breakdowns, the contrarian takes — has to come through.",
    competitorKey: "smma",
    faqSeed: [
      { q: "How does this not contradict the paid creative angles I'm testing?", a: "" },
      { q: "Can the content keep up with current-quarter ad library trends and platform shifts?", a: "" },
      { q: "Will it sound like a real media buyer or like a marketing blog?", a: "" },
      { q: "How does organic posting actually feed paid performance?", a: "" },
      { q: "Is this useful for in-house buyers or only freelancers?", a: "" },
    ],
  },
  {
    slug: "cmos",
    varBase: "cmos",
    name: "CMOs",
    audience: "B2B and DTC CMOs at $10M–$200M revenue companies driving paid social as a primary channel",
    jobValue: "$100K–$500K MQL pipeline lift per quarter from creative volume and brand presence",
    platforms: "LinkedIn (executive brand + company), brand Instagram, X",
    platformList: "LinkedIn, Instagram, X, YouTube, Facebook, Threads, TikTok",
    postsPerMonth: "1,500+",
    postsPerDay: "30–50",
    cadenceNote: "The board wants pipeline numbers monthly — but the brand-content cadence that produces those numbers operates on a daily clock the agency retainer model can't sustain.",
    painA: "Your agency ships 20–30 posts/month and the board is asking why the brand presence is invisible",
    painB: "Brand consistency across 5+ markets and 3+ product lines is impossible with the agency's manual cycle",
    painC: "Legal/compliance review on every post is slowing your team to a 2-week turnaround per asset",
    painD: "Quarterly reporting decks measure activity, not learning velocity — and your CEO can tell",
    hiddenCost: "the hidden cost of the agency retainer model is the 'agency-review tax' — every post requires an account manager call, a strategist review, a CMO sign-off, and 2–4 weeks of cycle time before it ships",
    authorityHook: "CMOs with personal LinkedIn presence command board-level compensation and recruiter inbound — your executive brand is the strongest career asset you own, yet 90% of CMOs are dark on social",
    voiceNote: "CMO voice is strategic, data-grounded, and brand-safe — generic 'leadership' content reads as ghost-written. Compliance guardrails and brand-voice training have to be baked in, not bolted on.",
    competitorKey: "in-house-hire",
    faqSeed: [
      { q: "How do you handle legal and compliance review on regulated content?", a: "" },
      { q: "Can this maintain brand consistency across 5+ markets or product lines?", a: "" },
      { q: "What does the reporting look like for board-level updates?", a: "" },
      { q: "Will the executive content sound like a CMO or like a marketing blog?", a: "" },
      { q: "How does this work alongside our existing agency or in-house team?", a: "" },
    ],
  },
  {
    slug: "agency-owners",
    varBase: "agencyOwners",
    name: "Agency Owners",
    audience: "founders of $30K–$300K/month marketing, creative, and growth agencies",
    jobValue: "$3,000–$15,000/month in recurring retainer per landed client",
    platforms: "LinkedIn (primary for client acquisition), Instagram + X (founder brand)",
    platformList: "LinkedIn, Instagram, X, Threads, YouTube, Facebook, TikTok",
    postsPerMonth: "1,500+",
    postsPerDay: "30–50",
    cadenceNote: "The cobbler's kids have no shoes — you ship daily creative for clients but your own feeds have been dark for months, and your last 3 inbound leads came from referrals because no one can find you organically.",
    painA: "You ship pitch-deck-grade content for clients and post nothing for yourself — every quarter",
    painB: "Your case studies are gold and they live in a Notion doc no prospect will ever see",
    painC: "One client churn becomes a survival event because you never built creative volume to backfill pipeline",
    painD: "Your team has the skills to do your social — but billable hours always win the priority fight",
    hiddenCost: "the hidden cost of skipping your own marketing is concentration risk — one client churn becomes a survival event because you never built creative volume to backfill",
    authorityHook: "Agency owners with active personal brands close 30–50% higher retainers and shorten sales cycles by 2–3 weeks — your founder brand is the highest-leverage growth channel your agency owns and the one you're most likely to ignore",
    voiceNote: "Agency-owner voice is opinionated, case-study-driven, and pattern-recognized — generic 'agency tips' content reads as commoditized. Your real voice (the contrarian takes, the client teardowns, the unit-economics breakdowns) is what wins pitches.",
    competitorKey: "va-plus-templates",
    faqSeed: [
      { q: "How does this work when my whole agency does this for a living?", a: "" },
      { q: "Will the content sound like a real agency owner or like generic marketing advice?", a: "" },
      { q: "Can it ship case-study content without exposing client details?", a: "" },
      { q: "How does this feed actual inbound retainer pipeline?", a: "" },
      { q: "Can my team take this over once we're stable?", a: "" },
    ],
  },
  {
    slug: "service-business-owners",
    varBase: "serviceBusinessOwners",
    name: "Service Business Owners",
    audience: "owners of $1M–$10M revenue HVAC, plumbing, roofing, electrical, and home-service shops",
    jobValue: "$3,000–$25,000 average ticket on installs and major service jobs",
    platforms: "Facebook (primary for local trust), Instagram + YouTube Shorts, TikTok for younger demos",
    platformList: "Facebook, Instagram, YouTube Shorts, TikTok, Nextdoor, Google Business Profile",
    postsPerMonth: "1,500+",
    postsPerDay: "30–50",
    cadenceNote: "Your before/after photos, 5-star reviews, and field tech footage are the highest-converting social content in your category — and 95% of it is rotting on your team's phones because no one has time to post it.",
    painA: "You run jobs by day and try to write captions at midnight — both halves suffer",
    painB: "Before/after photos, technician footage, and 5-star reviews are rotting in a shared Google Drive",
    painC: "Your local competitors with worse work are out-posting you and winning Google Business reviews",
    painD: "You tried hiring an in-house person and they ghost-posted stock photos until you fired them",
    hiddenCost: "the hidden cost of being dark on social is local trust erosion — when prospects Google your company name, an inactive feed signals 'out of business' and pushes them to the louder competitor",
    authorityHook: "Service businesses with daily multi-platform presence command 15–25% higher close rates on quoted jobs — local trust signals (review counts, post recency, photo volume) directly drive in-home conversion",
    voiceNote: "Service-business voice is plainspoken, local, and trades-grounded — generic 'home services tips' content reads as imported. Your real voice (the tech's perspective, the customer testimonial, the field photo) is what builds local trust.",
    competitorKey: "smma",
    faqSeed: [
      { q: "How many posts per month should an HVAC, plumbing, or roofing shop actually publish?", a: "" },
      { q: "Will the content sound like a real trades operator or like a marketing agency?", a: "" },
      { q: "How do you handle before/after photos and field tech footage from my team?", a: "" },
      { q: "Does this help with Google Business Profile and local SEO?", a: "" },
      { q: "Can this replace the SMMA I'm paying $5K/month for 20 posts?", a: "" },
    ],
  },
  {
    slug: "ecommerce-brands",
    varBase: "ecommerceBrands",
    name: "Ecommerce Brands",
    audience: "DTC and ecommerce operators doing $1M–$50M in annual GMV",
    jobValue: "$50–$300 average order value, $200–$800 customer LTV",
    platforms: "Meta (Instagram + Facebook) + TikTok primary, Pinterest + YouTube secondary",
    platformList: "Instagram, Facebook, TikTok, Pinterest, YouTube, X, Threads",
    postsPerMonth: "1,500+",
    postsPerDay: "30–50",
    cadenceNote: "Organic content feeds your paid-social testing pool — TikTok and Instagram reward the brands that post 3–5× daily across formats, and that's also where your highest-ROAS UGC ads get sourced.",
    painA: "You launch 4–8 SKUs a quarter and your organic content can't keep up with the product velocity",
    painB: "Your UGC backlog is 200+ clips deep and nothing is getting stitched, captioned, or shipped",
    painC: "Seasonal and launch spikes need 3× content volume — and your team can barely hit baseline",
    painD: "Your organic IG/TikTok performance is flat and it's quietly tanking your paid creative cost-per-acquisition",
    hiddenCost: "the hidden cost of low organic cadence is that your paid social CAC rises 15–30% — Meta and TikTok algorithmically reward brands with active organic, and starving organic raises paid bid costs",
    authorityHook: "Brands with daily organic + UGC content compound — every post adds to your retargetable audience, your customer-LTV signal, and your UGC ad pipeline. Quiet brands pay 2–3× more per acquired customer over time.",
    voiceNote: "Ecommerce brand voice is product-led and customer-first — generic 'shop now' content gets demoted. Your real voice (UGC, customer stories, product use-case posts, founder POV) is what platforms actually surface.",
    competitorKey: "fiverr",
    faqSeed: [
      { q: "How do you keep up with our SKU launch cadence — 4–8 new products per quarter?", a: "" },
      { q: "Can you stitch and caption our existing UGC backlog?", a: "" },
      { q: "Does this feed our paid social creative testing or stay separate?", a: "" },
      { q: "How does this perform for TikTok vs Instagram vs Pinterest?", a: "" },
      { q: "Can it scale for Q4 / BFCM / launch weeks?", a: "" },
    ],
  },
  {
    slug: "saas-founders",
    varBase: "saasFounders",
    name: "SaaS Founders",
    audience: "founders and CEOs of B2B SaaS companies at $1M–$20M ARR",
    jobValue: "$5,000–$50,000 ACV, 24–48 month LTV",
    platforms: "LinkedIn (primary), X (developer/B2B audience), YouTube (long-form)",
    platformList: "LinkedIn, X, YouTube, Threads, Facebook, Instagram",
    postsPerMonth: "1,500+",
    postsPerDay: "30–50",
    cadenceNote: "For B2B SaaS at $1M–$20M ARR, founder-led LinkedIn distribution outperforms paid acquisition on payback period by 3–5× — and almost every founder under-indexes on it because shipping product feels more urgent than shipping posts.",
    painA: "Founder-led brand is your #1 distribution channel and you've posted 4 times this quarter",
    painB: "Your ICP-specific use-case stories are in customer Slack threads, not on LinkedIn where prospects can find them",
    painC: "Build-in-public cadence requires daily posting — and you're shipping product 60+ hours a week",
    painD: "Your competitors with worse product are outranking you on LinkedIn because they're posting and you aren't",
    hiddenCost: "the hidden cost of founder silence is that your acquisition becomes 100% paid — and paid B2B SaaS CAC has doubled in 3 years while founder-led organic compounds for free",
    authorityHook: "Founder-led LinkedIn at $5M ARR generates more qualified pipeline than $20K/month in paid LinkedIn ads — the founder voice is the single highest-leverage GTM asset a SaaS company owns",
    voiceNote: "SaaS founder voice is technical, specific, and customer-pattern-driven — generic 'founder tips' content reads as ghost-written. Real voice (the technical post-mortem, the customer screenshot, the unit-economics teardown) is what technical buyers actually trust.",
    competitorKey: "in-house-hire",
    faqSeed: [
      { q: "How much pipeline does founder-led LinkedIn actually generate at $5M ARR?", a: "" },
      { q: "Will the content sound like a real technical founder or like marketing copy?", a: "" },
      { q: "Can you handle build-in-public posts, customer screenshots, and product launches?", a: "" },
      { q: "How does this work alongside our content marketing or DevRel team?", a: "" },
      { q: "What about X — is it still worth posting there for B2B SaaS in 2026?", a: "" },
    ],
  },
  {
    slug: "personal-brands",
    varBase: "personalBrands",
    name: "Personal Brands",
    audience: "solopreneur thought leaders, course creators, and authors monetizing through audience",
    jobValue: "$1,000–$10,000 per course/program sale, $50K–$500K per book/keynote cycle",
    platforms: "LinkedIn + X + Instagram + YouTube — multi-platform repurposing is the strategy",
    platformList: "LinkedIn, X, Instagram, YouTube, Threads, Facebook, TikTok",
    postsPerMonth: "1,500+",
    postsPerDay: "30–50",
    cadenceNote: "Personal brands compound through consistency, not virality — the audience that follows you in year 3 is the one that buys your course, books, and keynotes in year 5. Daily multi-platform posting is the single durable strategy.",
    painA: "You post for two weeks, get busy with clients, and disappear for a month — and your audience growth resets",
    painB: "Writing the same idea four different ways for LinkedIn, X, Instagram, and YouTube is unsustainable",
    painC: "Hiring a social media manager costs $3K–$5K/month and they can't capture your voice",
    painD: "Your audience plateaued at the volume you can personally sustain — growth requires content velocity you don't have",
    hiddenCost: "the hidden cost of inconsistency is that personal-brand audiences shrink without daily input — every dark month costs you 6 months of compounded growth",
    authorityHook: "Personal brands at 50K+ followers generate $500K–$5M annually from course sales, sponsorships, and speaking — and the differentiator isn't talent, it's posting cadence over 24+ months",
    voiceNote: "Personal-brand voice is unmistakable, opinionated, and frameworked — generic 'thought leadership' content reads as commoditized. Your unique frameworks, contrarian takes, and lived experiences are the entire moat.",
    competitorKey: "va-plus-templates",
    faqSeed: [
      { q: "How does this protect my voice across LinkedIn, X, Instagram, and YouTube?", a: "" },
      { q: "Can it repurpose one idea into platform-native content for every channel?", a: "" },
      { q: "How is this different from hiring a VA with Canva templates?", a: "" },
      { q: "Will my audience notice the AI assistance?", a: "" },
      { q: "How does this drive course, book, or keynote pipeline?", a: "" },
    ],
  },
  {
    slug: "creators",
    varBase: "creators",
    name: "Creators",
    audience: "full-time content creators monetizing $100K–$5M/year through ads, sponsorships, and product",
    jobValue: "$2,000–$50,000 per sponsorship deal, $20K–$300K per product/course launch",
    platforms: "TikTok + Instagram + YouTube (Shorts and long-form) primary",
    platformList: "TikTok, Instagram, YouTube, X, Threads, Facebook",
    postsPerMonth: "1,500+",
    postsPerDay: "30–50",
    cadenceNote: "The algorithm rewards creators who post 3–5× daily across short-form platforms — and brand-deal contracts increasingly require minimum posting cadence as a deliverable, not a suggestion.",
    painA: "Sponsorship contracts require X posts per week and you're scrambling to hit baseline organic cadence",
    painB: "Your sponsored content and organic creator content compete for the same slots and you can't ship both",
    painC: "Burnout is real — daily content for 3+ platforms for 5+ years isn't sustainable solo",
    painD: "You hired an editor and a VA and you're still the bottleneck on scripting, captions, and ideation",
    hiddenCost: "the hidden cost of creator solo-mode is platform risk — when one algorithm change tanks your reach, you have no audience reserve on other platforms because you've been single-platform for years",
    authorityHook: "Creators with active multi-platform presence command 2–3× higher sponsorship rates and have 4× lower platform-risk — your distribution moat is the number of platforms you reliably show up on",
    voiceNote: "Creator voice IS the product — generic 'creator tips' content erases what makes your audience watch. Voice training, format consistency, and on-brand caption patterns are the entire game.",
    competitorKey: "fiverr",
    faqSeed: [
      { q: "How does this handle the daily multi-platform cadence creators actually need?", a: "" },
      { q: "Will my audience notice the difference between my posts and AI-assisted posts?", a: "" },
      { q: "Can this handle sponsored content compliance and brand-deal deliverables?", a: "" },
      { q: "How is this different from hiring Fiverr editors for individual posts?", a: "" },
      { q: "What about TikTok — can it actually rank in 2026?", a: "" },
    ],
  },
  {
    slug: "consultants",
    varBase: "consultants",
    name: "Consultants",
    audience: "boutique consultants and independent advisors selling $10K–$250K engagements",
    jobValue: "$10,000–$250,000 per engagement",
    platforms: "LinkedIn (primary, by a wide margin), X + Substack + YouTube secondary",
    platformList: "LinkedIn, X, Substack, YouTube, Threads, Facebook",
    postsPerMonth: "1,500+",
    postsPerDay: "30–50",
    cadenceNote: "For boutique consulting, LinkedIn thought leadership is the entire sales funnel — daily authority content drives the inbound that fills your pipeline, and the consultants who skip it pay 10× more per acquired engagement through outbound.",
    painA: "Your IP frameworks are scattered across client decks and your LinkedIn looks empty",
    painB: "Every inbound lead asks 'what have you written about this?' and you have nothing to point to",
    painC: "Client confidentiality means you can't post the case studies that would actually sell the next engagement",
    painD: "Speaking and book opportunities require an audience — and yours has been stuck at 5K followers for two years",
    hiddenCost: "the hidden cost of consultant silence is that you compete on price instead of authority — and authority is built post by post over years, not pitches",
    authorityHook: "Consultants with active LinkedIn presence command 30–60% higher engagement fees and book speaking/board roles 3–4× more frequently — authority compounds, and authority is built on the public record",
    voiceNote: "Consultant voice is framework-driven, opinionated, and IP-specific — generic 'business strategy' content reads as recycled MBA. Your real voice (the proprietary framework, the contrarian client outcome, the industry-pattern teardown) is the entire moat.",
    competitorKey: "smma",
    faqSeed: [
      { q: "How do you protect client confidentiality while still shipping case-study content?", a: "" },
      { q: "Will the content sound like a real consultant or like a McKinsey blog post?", a: "" },
      { q: "How does this drive inbound engagement pipeline?", a: "" },
      { q: "Can it help me land speaking gigs and book deals?", a: "" },
      { q: "What's the right LinkedIn cadence for a $50K+ engagement consultant?", a: "" },
    ],
  },
];

// ----------------------------- Helpers -----------------------------

function ensureDir(p: string) {
  mkdirSync(p, { recursive: true });
}

function writeFile(p: string, content: string) {
  ensureDir(join(p, ".."));
  writeFileSync(p, content, "utf8");
  console.log("  wrote", p.replace(ROOT + "/", ""));
}

function cap(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function patchBetweenMarkers(
  filePath: string,
  startMarker: string,
  endMarker: string,
  newBlock: string,
  insertBeforeIfMissing?: string
) {
  const src = readFileSync(filePath, "utf8");
  const startIdx = src.indexOf(startMarker);
  const endIdx = src.indexOf(endMarker);
  let next: string;
  if (startIdx !== -1 && endIdx !== -1 && endIdx > startIdx) {
    const before = src.slice(0, startIdx + startMarker.length);
    const after = src.slice(endIdx);
    next = before + "\n" + newBlock + "\n  " + after;
  } else if (insertBeforeIfMissing && src.includes(insertBeforeIfMissing)) {
    const wrapped =
      startMarker + "\n" + newBlock + "\n  " + endMarker + "\n  ";
    next = src.replace(insertBeforeIfMissing, wrapped + insertBeforeIfMissing);
  } else {
    throw new Error(
      `patchBetweenMarkers: cannot find markers and no anchor in ${filePath}`
    );
  }
  writeFileSync(filePath, next, "utf8");
  console.log("  patched", filePath.replace(ROOT + "/", ""));
}

function varName(prefix: string, v: Vertical): string {
  return prefix + cap(v.varBase);
}

function altVarName(v: Vertical): string {
  return v.varBase + "SocialMediaAgencyAlternative";
}

function compareVarName(v: Vertical): string {
  const c = COMPETITORS[v.competitorKey];
  const compCamel = c.slug
    .split("-")
    .map((s, i) => (i === 0 ? s : cap(s)))
    .join("");
  return v.varBase + "Vs" + cap(compCamel) + "ForCompareData";
}

// ----------------------------- Angle A: /best-for/done-for-you-social-for-{vertical} -----------------------------

function renderAngleA(v: Vertical): string {
  const exportName = varName("doneForYouSocialFor", v);
  return `import type { BestForPageContent } from "./types";

// AUTO-GENERATED by scripts/generate-social-vertical-matrix.ts
// Vertical: ${v.name} · Angle: Done-For-You Social Media (offer page)
export const ${exportName}: BestForPageContent = {
  slug: "done-for-you-social-for-${v.slug}",
  niche: {
    name: "Done-For-You Social Media for ${v.name}",
    shortName: "${v.name}",
    description:
      "Done-for-you social media content service for ${v.audience}. Daily multi-platform publishing, vertical-specific scripts, and voice-trained content \u2014 1,500+ posts per month across 7 platforms, with no retainer, no contract, and no account-manager overhead.",
  },
  meta: {
    title: "Done-For-You Social Media for ${v.name} | Prestyj",
    description:
      "Done-for-you social media content for ${v.name.toLowerCase()}. ${v.postsPerMonth} posts per month across 7 platforms, vertical-researched scripts, voice-trained captions \u2014 no agency retainer, no in-house hire, no contract. Built for ${v.audience}.",
    keywords: [
      "done for you social media for ${v.slug}",
      "social media content service for ${v.slug}",
      "social media for ${v.slug}",
      "best social media for ${v.name.toLowerCase()}",
      "social media outsourcing for ${v.slug}",
      "how many posts per month does a ${v.slug.replace(/-/g, " ").replace(/s$/, "")} need",
      "${v.slug.replace(/-/g, " ")} content production",
      "${v.slug.replace(/-/g, " ")} social media agency alternative",
      "daily social media posting for ${v.slug}",
      "ai social media content for ${v.slug}",
    ],
  },
  hero: {
    badge: "Done-For-You Social Media for ${v.name}",
    headline: "Done-For-You Social Media \u2014",
    headlineAccent: "Built for ${v.name}.",
    subheadline:
      "You're ${v.audience} \u2014 not a content creator. ${v.cadenceNote} Prestyj is the AI-powered content engine that ships ${v.postsPerMonth} posts per month across ${v.platforms.split(",")[0]} and 6 other platforms, with vertical-researched scripts written in your voice. No retainer. No account manager. No long-term contract.",
  },
  whyBestFor: [
    {
      icon: "TrendingUp",
      title: "${v.authorityHook.split("\u2014")[0].trim() || `Why ${v.name} need daily content volume`}",
      description:
        "${v.authorityHook}",
    },
    {
      icon: "DollarSign",
      title: "One closed deal pays for a year of content",
      description:
        "Your typical deal value is ${v.jobValue}. Prestyj's content engine costs a fraction of that per month. A single client acquired through consistent social presence delivers 10\u201350\u00d7 ROI on your content investment \u2014 and the compounding effect accelerates every quarter you stay consistent.",
    },
    {
      icon: "Users",
      title: "Voice-trained content that sounds like a real ${v.name.toLowerCase().replace(/s$/, "")}",
      description:
        "${v.voiceNote}",
    },
    {
      icon: "Zap",
      title: "Stop sacrificing core work for content production",
      description:
        "You didn't get into this business to become a full-time content creator. Every hour spent writing posts, editing carousels, and scheduling content is an hour you're not generating revenue. Prestyj handles the production so you can focus on what actually moves the business forward.",
    },
  ],
  painPoints: [
    {
      problem: "${v.painA}",
      solution:
        "Prestyj produces ${v.postsPerDay} posts per day across ${v.platformList.split(", ").slice(0, 4).join(", ")} and more. Your social presence stays active even during your busiest weeks. Prospects see consistent authority \u2014 not a ghost town that makes them question whether you're still in business.",
    },
    {
      problem: "${v.painB}",
      solution:
        "Prestyj's content engine is trained on ${v.name.toLowerCase()}-specific pain points, frameworks, and conversation patterns. Every post is ready to publish \u2014 you review and approve. The creative heavy lifting is done for you, with vertical research baked into every batch.",
    },
    {
      problem: "${v.painC}",
      solution:
        "Vanity metrics don't move your business. Prestyj's content is engineered for conversion \u2014 strategic CTAs, authority-building frameworks, and nurture sequences that move followers from passive viewer to qualified inbound. Built for ${v.audience}.",
    },
    {
      problem: "${v.painD}",
      solution:
        "Prestyj learns your voice during onboarding from existing posts, podcast clips, presentations, or client communications. Every piece of content sounds like you wrote it \u2014 because it's trained on how you actually communicate. No generic templated voice. Just your authentic perspective at scale.",
    },
  ],
  comparison: {
    headers: ["Feature", "Prestyj for ${v.name}", "DIY / In-House"],
    rows: [
      {
        feature: "Posts per month",
        prestyj: "${v.postsPerMonth} across 7 platforms",
        others: "40\u2013120 if you have time, dark months when you don't",
      },
      {
        feature: "Time investment",
        prestyj: "15\u201330 min/week to review and approve",
        others: "10\u201320 hours/week writing, editing, scheduling",
      },
      {
        feature: "Platform coverage",
        prestyj: "${v.platformList}",
        others: "1\u20132 platforms you can sustain",
      },
      {
        feature: "Voice authenticity",
        prestyj: "AI-trained on your existing content",
        others: "Authentic when you write \u2014 dark when you don't",
      },
      {
        feature: "Vertical-specific scripts",
        prestyj: "${v.name}-researched hooks and frameworks",
        others: "Generic templates and trends you adapt yourself",
      },
      {
        feature: "Consistency",
        prestyj: "365 days/year, never misses",
        others: "Stops when core work gets busy",
      },
      {
        feature: "Monthly cost",
        prestyj: "$3,000 flat",
        others: "$0\u2013$5,000 (your time at billable rate)",
      },
    ],
  },
  faq: [
    {
      question: "How many posts per month does a ${v.name.toLowerCase().replace(/s$/, "")} actually need?",
      answer:
        "The honest answer is more than you think. The algorithms on ${v.platforms.split(",")[0]}, Instagram, and TikTok reward accounts that post 3\u20135\u00d7 daily across formats \u2014 short-form video, carousels, single posts, and stories. For ${v.audience}, the right baseline is ${v.postsPerMonth} per month across multiple platforms. ${v.cadenceNote}",
    },
    {
      question: "Will the content actually sound like a ${v.name.toLowerCase().replace(/s$/, "")} \u2014 or like generic AI content?",
      answer:
        "${v.voiceNote} During onboarding, you provide samples of your existing content, frameworks, and communication style. The output mirrors how you actually speak and write \u2014 not generic templates. You review every piece before it ships, and the model improves from your feedback over time.",
    },
    {
      question: "What platforms matter most for ${v.name.toLowerCase()}?",
      answer:
        "For ${v.audience}, the priority stack is: ${v.platforms}. Prestyj produces platform-native content for each \u2014 not cross-posted duplicates \u2014 with formatting and hooks tuned to how each algorithm rewards content in 2026. All 7 platforms are included in the standard package.",
    },
    {
      question: "How quickly will I see results?",
      answer:
        "Most ${v.name.toLowerCase()} see a noticeable increase in profile visits, follower growth, and inbound DMs within the first 2\u20134 weeks. Pipeline impact (booked calls, inbound leads, sponsorship inquiries, depending on your business model) typically lifts within 30\u201390 days as the content library builds authority and the nurture patterns take effect. The compounding effect accelerates every month.",
    },
    {
      question: "Can this replace my agency / in-house hire / VA stack?",
      answer:
        "Yes \u2014 and at a fraction of the cost. A traditional ${COMPETITORS[v.competitorKey].name.toLowerCase()} runs ${COMPETITORS[v.competitorKey].pricing}${COMPETITORS[v.competitorKey].pricingPeriod} and ships ${COMPETITORS[v.competitorKey].postsPerMonth} posts. Prestyj is $3,000/month flat for ${v.postsPerMonth} posts across 7 platforms. Most ${v.name.toLowerCase()} replace the entire existing stack within 30 days.",
    },
  ],
  cta: {
    headline: "Your ${v.name} Brand Shouldn't Depend on Your Free Time.",
    subheadline:
      "Done-for-you social media content for ${v.audience}. ${v.postsPerMonth} posts per month across 7 platforms. Vertical-researched scripts. Voice-trained captions. No retainer, no contract, no account managers.",
    buttonText: "See How It Works for ${v.name}",
    buttonHref: "/done-for-you-social-media",
    footnote: "Your voice \u00b7 7 platforms \u00b7 ${v.postsPerMonth} posts/mo \u00b7 No contract",
  },
};
`;
}

// ----------------------------- Angle D: /best-for/social-volume-strategy-for-{vertical} -----------------------------

function renderAngleD(v: Vertical): string {
  const exportName = varName("socialVolumeStrategyFor", v);
  return `import type { BestForPageContent } from "./types";

// AUTO-GENERATED by scripts/generate-social-vertical-matrix.ts
// Vertical: ${v.name} · Angle: Social Volume Strategy (strategy/education page)
export const ${exportName}: BestForPageContent = {
  slug: "social-volume-strategy-for-${v.slug}",
  niche: {
    name: "Social Volume Strategy for ${v.name}",
    shortName: "${v.name} Strategy",
    description:
      "The 2026 social media volume strategy for ${v.audience} \u2014 why ${v.postsPerMonth} posts per month across 7 platforms is the cadence the algorithms now reward, and how to execute it without a 5-person content team.",
  },
  meta: {
    title: "Social Media Volume Strategy for ${v.name} (2026 Cadence) | Prestyj",
    description:
      "How many posts per month should a ${v.name.toLowerCase().replace(/s$/, "")} publish in 2026? The data-driven volume strategy for ${v.audience}: platform priorities, cadence math, and the content engine that makes it executable.",
    keywords: [
      "how many posts per month for ${v.slug}",
      "social media cadence for ${v.slug}",
      "social media volume strategy for ${v.slug}",
      "${v.slug.replace(/-/g, " ")} content cadence",
      "${v.slug.replace(/-/g, " ")} posting frequency",
      "daily social media posting for ${v.slug}",
      "social media strategy for ${v.name.toLowerCase()}",
      "best posting frequency for ${v.slug}",
      "how often should ${v.slug.replace(/-/g, " ")} post",
      "${v.slug.replace(/-/g, " ")} algorithm strategy",
    ],
  },
  hero: {
    badge: "Social Volume Strategy for ${v.name}",
    headline: "The 2026 Social Volume Strategy",
    headlineAccent: "for ${v.name}.",
    subheadline:
      "The honest answer to 'how many posts per month does a ${v.name.toLowerCase().replace(/s$/, "")} need?' is more than you think \u2014 and the agencies and in-house hires shipping 20\u201330 posts per month are losing reach every quarter to the operators publishing 1,500+. Here's the cadence math, platform priorities, and execution model that actually works for ${v.audience}.",
  },
  whyBestFor: [
    {
      icon: "BarChart3",
      title: "The cadence math the platforms actually reward in 2026",
      description:
        "${v.cadenceNote} The algorithms on every major platform now reward accounts with daily multi-format posting. 20\u201330 posts per month \u2014 the legacy agency cadence \u2014 puts ${v.name.toLowerCase()} below the algorithmic threshold for organic reach. ${v.postsPerMonth} posts per month is the new baseline for serious operators.",
    },
    {
      icon: "Target",
      title: "Platform priority stack: ${v.platforms}",
      description:
        "Not every platform is equal weight for ${v.audience}. The priority stack: ${v.platforms}. ${v.platformList.split(", ").slice(0, 2).join(" and ")} carry the highest leverage \u2014 the others matter for distribution but yield decays without daily input on the primary platforms.",
    },
    {
      icon: "TrendingUp",
      title: "Why compounding matters more than virality",
      description:
        "${v.authorityHook} A single viral post is worth less than 365 consistent posts because audiences that follow you for daily value convert; audiences that follow you for one viral hit don't. The compounding strategy is the only durable strategy.",
    },
    {
      icon: "Zap",
      title: "Why ${v.name.toLowerCase()} can't execute this solo",
      description:
        "${v.hiddenCost}. ${v.postsPerMonth} posts/month across 7 platforms is a 5-person content team operation. The only path that scales for ${v.audience} is a content engine that handles production while you handle approval \u2014 spending 15\u201330 minutes a week on review, not 15\u201320 hours on creation.",
    },
  ],
  painPoints: [
    {
      problem: "The agency or in-house team shipping 20\u201330 posts/month is losing you reach every quarter",
      solution:
        "Platform algorithms in 2026 demote low-cadence accounts \u2014 they read sparse posting as low-quality signal and reduce distribution. ${v.name} who scale to ${v.postsPerMonth} posts/month see 3\u20137\u00d7 reach improvement within 60 days, not because individual posts are better but because algorithmic surface area expanded.",
    },
    {
      problem: "You're posting on 1\u20132 platforms because you can't sustain 7",
      solution:
        "Platform diversification is now a defensive necessity, not a growth tactic. One algorithm change on your primary platform can erase years of audience-building. Daily presence on all 7 (${v.platformList}) is the only durable distribution moat for ${v.audience}.",
    },
    {
      problem: "Your content cadence is whatever you have time for \u2014 not what the platforms reward",
      solution:
        "Cadence determines reach, and reach determines pipeline. ${v.audience} who let cadence float to free time consistently underperform competitors with a fixed daily publishing schedule. The strategy isn't 'post when inspired' \u2014 it's '${v.postsPerDay} per day, every day, across every platform.'",
    },
    {
      problem: "You think more posts will dilute the quality of your brand",
      solution:
        "This was true on legacy platforms with chronological feeds. On algorithm-curated feeds (every major platform in 2026), the algorithm itself filters distribution by engagement \u2014 your best content surfaces, your weaker content gets buried, and shipping more produces more best content. The dilution worry is a 2018 mental model.",
    },
  ],
  comparison: {
    headers: ["Cadence Tier", "Posts/Month", "Outcome for ${v.name}"],
    rows: [
      {
        feature: "Tier 0 \u2014 Dark",
        prestyj: "0\u201310/mo",
        others: "Negative signal \u2014 looks closed for business",
      },
      {
        feature: "Tier 1 \u2014 Hobby",
        prestyj: "10\u201340/mo",
        others: "Below algorithmic threshold \u2014 no organic reach lift",
      },
      {
        feature: "Tier 2 \u2014 Agency Standard",
        prestyj: "40\u2013120/mo",
        others: "Minimal reach \u2014 you're paying for presence, not distribution",
      },
      {
        feature: "Tier 3 \u2014 In-House Maxed",
        prestyj: "120\u2013400/mo",
        others: "Some compounding \u2014 but single-platform bias",
      },
      {
        feature: "Tier 4 \u2014 Content Engine",
        prestyj: "${v.postsPerMonth}/mo",
        others: "Algorithmic threshold cleared \u2014 multi-platform compounding",
      },
      {
        feature: "Required headcount",
        prestyj: "1 reviewer (you, 15\u201330 min/wk)",
        others: "5\u20137 person content team to match Tier 4 manually",
      },
    ],
  },
  faq: [
    {
      question: "What's the right posting frequency for ${v.name.toLowerCase()} in 2026?",
      answer:
        "${v.postsPerMonth} posts per month across ${v.platformList.split(", ").length} platforms is the threshold where compounding kicks in for ${v.audience}. Below that, you're paying production cost without crossing the algorithmic distribution threshold. Above that, marginal returns flatten. The sweet spot is ${v.postsPerDay} posts per day across all platforms.",
    },
    {
      question: "Won't posting that often dilute my brand or annoy my audience?",
      answer:
        "On algorithm-curated feeds, no individual follower sees every post you publish \u2014 the algorithm filters by engagement signal. Your best content surfaces broadly; your weaker content reaches niche segments. Volume produces more best content, not more spam in any individual feed. Followers in 2026 don't experience high-volume accounts as noisy \u2014 they experience them as authoritative.",
    },
    {
      question: "Which platforms matter most for ${v.name.toLowerCase()}?",
      answer:
        "For ${v.audience}, the priority stack is: ${v.platforms}. Concentrate quality on the primary platforms; treat secondary platforms as repurposing targets to capture audiences off the dominant ones. All 7 platforms (${v.platformList}) should run, even if priority weight differs.",
    },
    {
      question: "How do you actually execute ${v.postsPerMonth} posts/month without a 5-person team?",
      answer:
        "You don't execute it manually \u2014 nobody can. The only viable path is a content engine that handles production while you handle approval. Prestyj's model: 15\u201330 minutes a week reviewing the publishing calendar, full vertical-researched and voice-trained production happens in the background. That's the only execution model that works for ${v.audience} at this cadence.",
    },
    {
      question: "How fast will I see results from a Tier 4 cadence?",
      answer:
        "Most ${v.name.toLowerCase()} see clear reach and follower-growth signal within 30 days. Pipeline impact (inbound, qualified conversations, downstream revenue) typically lifts within 60\u201390 days as the content library accumulates authority. The compounding effect is the point: month 6 outperforms month 2 by 5\u201310\u00d7, month 12 outperforms month 6 by 3\u20135\u00d7.",
    },
  ],
  cta: {
    headline: "Stop Posting What You Have Time For. Start Posting What the Algorithm Rewards.",
    subheadline:
      "Prestyj is the content engine that lets ${v.audience} execute a Tier 4 cadence \u2014 ${v.postsPerMonth} posts/month across 7 platforms \u2014 with 15\u201330 minutes of weekly review. No 5-person team. No retainer. No contract.",
    buttonText: "Get My ${v.name} Volume Plan",
    buttonHref: "/done-for-you-social-media",
    footnote: "Tier 4 cadence \u00b7 7 platforms \u00b7 15 min/wk to review \u00b7 No contract",
  },
};
`;
}

// ----------------------------- Angle B: /alternatives/{vertical}-social-media-agency-alternative -----------------------------

function renderAngleB(v: Vertical): string {
  const exportName = altVarName(v);
  const c = COMPETITORS.smma; // alternative angle is always vs the agency archetype
  return `import type { AlternativePageContent } from "./types";
import { createAlternativePage } from "@/lib/content-factory";

// AUTO-GENERATED by scripts/generate-social-vertical-matrix.ts
// Vertical: ${v.name} · Angle: ${v.name} Social Media Agency Alternative
export const ${exportName}: AlternativePageContent = createAlternativePage({
  slug: "${v.slug}-social-media-agency-alternative",
  type: "direct-competitor",
  competitor: {
    name: "${v.name} Social Media Agency",
    shortName: "${v.name} Agency",
    pricing: "${c.pricing}${c.pricingPeriod}",
    description:
      "Traditional social media agencies serving ${v.audience} \u2014 retainer-based engagements shipping 20\u201330 posts per month with a senior strategist on calls and a junior team doing the actual production.",
  },
  meta: {
    title: "${v.name} Social Media Agency Alternative | Prestyj \u2014 1,500+ Posts/Month",
    description:
      "Looking for a ${v.name.toLowerCase()} social media agency alternative? Prestyj replaces the $3K\u2013$15K/mo agency retainer with an AI content engine: ${v.postsPerMonth} posts/month across 7 platforms, vertical-researched for ${v.audience}, no contract, no account manager.",
    keywords: [
      "${v.slug} social media agency alternative",
      "alternative to social media agency for ${v.slug}",
      "replace social media agency for ${v.name.toLowerCase()}",
      "social media agency for ${v.slug}",
      "best social media agency for ${v.name.toLowerCase()}",
      "social media for ${v.slug}",
      "done for you social media for ${v.slug}",
      "${v.slug.replace(/-/g, " ")} content production",
      "ai social media for ${v.slug}",
      "${v.slug} content service",
    ],
  },
  hero: {
    badge: "${v.name} Social Media Agency Alternative",
    subheadline:
      "Traditional ${v.name.toLowerCase()} social media agencies bill ${v.audience} ${c.pricing}${c.pricingPeriod} for 20\u201330 posts, an account manager, and quarterly reporting decks. Prestyj is the AI-powered alternative: a content engine that ships ${v.postsPerMonth} posts/month across 7 platforms, vertical-researched and voice-trained, with no retainer, no strategist calls, and no creative cycles measured in weeks.",
  },
  industryStats: [
    {
      stat: "${c.pricing}${c.pricingPeriod}",
      description: "typical ${v.name.toLowerCase()} social media agency retainer for 20\u201330 posts/month",
    },
    {
      stat: "${v.postsPerMonth}",
      description: "posts per month Prestyj ships for ${v.name.toLowerCase()} across 7 platforms",
    },
    {
      stat: "50\u00d7",
      description: "more content volume per dollar vs. a ${v.name.toLowerCase()} agency retainer",
    },
    {
      stat: "0",
      description: "long-term contracts, account managers, or status calls required",
    },
  ],
  comparison: {
    features: [
      {
        feature: "Posts published per month for ${v.name.toLowerCase()}",
        prestyj: "${v.postsPerMonth}",
        competitor: "${c.postsPerMonth}",
        note: "Agencies bill creative hours; Prestyj bills outcomes at scale",
      },
      {
        feature: "Platforms covered",
        prestyj: "7 (${v.platformList.split(", ").slice(0, 6).join(", ")})",
        competitor: "2\u20133 typical",
        note: "Most agencies charge extra per added platform",
      },
      {
        feature: "Monthly cost",
        prestyj: "$3,000 flat",
        competitor: "${c.pricing}${c.pricingPeriod}",
      },
      {
        feature: "Cost per post",
        prestyj: "~$2",
        competitor: "$100\u2013$750",
      },
      {
        feature: "${v.name}-specific scripts and hooks",
        prestyj: true,
        competitor: "Depends on agency niche",
        note: "Prestyj begins every engagement with vertical research on ${v.name.toLowerCase()} hook patterns",
      },
      {
        feature: "Long-term contract required",
        prestyj: false,
        competitor: true,
        note: "Agencies typically lock in 3\u201312 month commitments",
      },
      {
        feature: "Account managers and status calls",
        prestyj: false,
        competitor: true,
        note: "You're paying for the meeting, not the post",
      },
      {
        feature: "Daily multi-platform publishing",
        prestyj: true,
        competitor: false,
        note: "Agencies operate on 2\u20134 week creative cycles",
      },
      {
        feature: "Voice training on existing ${v.name.toLowerCase().replace(/s$/, "")} content",
        prestyj: true,
        competitor: "Sometimes \u2014 via brand workshops that take 4\u20138 weeks",
      },
      {
        feature: "Performance learning loop",
        prestyj: true,
        competitor: "Quarterly review",
      },
      {
        feature: "Turnaround on new content",
        prestyj: "Daily auto-publish",
        competitor: "2\u20134 weeks",
      },
      {
        feature: "Onboarding time",
        prestyj: "Days",
        competitor: "4\u20138 weeks",
        note: "Agencies require brand workshops, pillar docs, voice guides",
      },
    ],
    competitorPricing: {
      price: "${c.pricing}",
      period: "${c.pricingPeriod}",
      note: "3\u201312 month contract typical, plus per-platform upcharges and the account-manager overhead inflating every line item. ${c.description}",
      pros: ${JSON.stringify(c.pros)},
      cons: ${JSON.stringify(c.cons)},
    },
    prestyjPricingOverrides: {
      price: "$3,000",
      period: "/month",
      note: "All-in. ${v.postsPerMonth} posts/month across 7 platforms. ${v.name}-researched scripts, voice-trained captions, no contract, no account manager.",
      pros: [
        "${v.postsPerMonth} posts/month across 7 platforms \u2014 flat fee",
        "Daily auto-publish with ${v.name}-specific scripts and captions",
        "Voice training on your existing content (no 4-week brand workshop)",
        "Weekly content calendar \u2014 approve in 15\u201330 minutes",
        "Performance learning loop tunes future posts",
        "No long-term contract, no account managers, no status calls",
      ],
    },
  },
  whySwitch: [
    {
      icon: "TrendingUp",
      title: "Volume that actually feeds the algorithm for ${v.name.toLowerCase()}",
      description:
        "${v.cadenceNote} 20\u201330 posts per month \u2014 the agency standard \u2014 barely registers. Prestyj ships ${v.postsPerMonth} posts/month across 7 platforms, giving the algorithm enough surface area to find your audience and enough creative variety to avoid fatigue.",
    },
    {
      icon: "DollarSign",
      title: "50\u00d7 more volume per dollar",
      description:
        "${v.name} agencies charge ${c.pricing}${c.pricingPeriod} for 20\u201330 posts \u2014 that's $100\u2013$750 per post, before ad spend. Prestyj is $3,000/month flat for ${v.postsPerMonth} posts at roughly $2 per post. You're not paying for account managers, status calls, or creative cycles \u2014 you're paying for distribution.",
    },
    {
      icon: "Zap",
      title: "Days to launch, not months of onboarding",
      description:
        "${v.name.toLowerCase()} agencies need brand workshops, pillar docs, voice guides, and approval cycles before the first post ships \u2014 usually 4\u20138 weeks. Prestyj's vertical-tuned scripts and voice-training process mean you go from kickoff to daily publishing in days, with weekly approval calendars that take minutes to review.",
    },
    {
      icon: "RefreshCw",
      title: "No retainers, no contracts, no lock-in",
      description:
        "Agencies require 3\u201312 month commitments to make the math work for them. Prestyj is month-to-month \u2014 ${v.audience} stay because the volume and performance keep working, not because they signed a contract.",
    },
    {
      icon: "Target",
      title: "Built for ${v.audience}",
      description:
        "Generic agencies pivot from ${v.name.toLowerCase()} to dentists to SaaS without changing their playbook. Prestyj is purpose-built for ${v.audience} \u2014 every script, hook, and content angle is written for the ${v.name.toLowerCase()}-specific pain points your business actually sells against. ${v.voiceNote}",
    },
    {
      icon: "BarChart3",
      title: "Performance loop, not quarterly slide decks",
      description:
        "${v.name} agencies report quarterly. Prestyj's content engine ingests performance signals from every post and tunes the next batch \u2014 what's hooking, what's converting, what's fatiguing. You get learning velocity, not PowerPoint reviews.",
    },
  ],
  whenCompetitorFits: [
    "You want a hand-touched, custom hero campaign with multiple human strategists in the room",
    "You prefer the relationship and meeting cadence of a traditional ${v.name.toLowerCase()} agency over volume",
    "Your business model rewards 20\u201330 polished posts per month over ${v.postsPerMonth}\u2014some niches do",
    "You have an existing internal team that just needs an external strategist, not a content engine",
    "Retainers, contracts, and account-manager overhead are already baked into your annual budget",
  ],
  whenPrestyjFits: [
    "You're ${v.audience} and you need daily multi-platform presence to win",
    "You want ${v.postsPerMonth} posts/month and vertical-researched ${v.name.toLowerCase()} hooks without managing freelancers or vendors",
    "You're tired of paying ${c.pricing}${c.pricingPeriod} for 20\u201330 posts and quarterly reports",
    "You don't want to sign 3\u201312 month contracts before seeing results",
    "You'd rather replace the entire agency stack \u2014 strategist, copywriter, designer, account manager \u2014 with a single AI content engine tuned for ${v.name.toLowerCase()}",
    "You want ${v.name.toLowerCase()}-specific scripts and pain-point-driven content, not generic agency templates",
  ],
  relatedResources: [
    {
      href: "/done-for-you-social-media",
      title: "Done-For-You Social Media \u2014 the Service",
      description: "How Prestyj's content engine replaces your agency, freelancer, and in-house stack.",
    },
    {
      href: "/best-for/done-for-you-social-for-${v.slug}",
      title: "Done-For-You Social Media for ${v.name}",
      description: "Vertical-specific offer page covering ${v.name.toLowerCase()} pain points and pricing.",
    },
    {
      href: "/best-for/social-volume-strategy-for-${v.slug}",
      title: "Social Volume Strategy for ${v.name}",
      description: "Cadence math, platform priorities, and the 2026 volume strategy for ${v.audience}.",
    },
    {
      href: "/compare/prestyj-vs-${COMPETITORS[v.competitorKey].slug}-for-${v.slug}",
      title: "Prestyj vs ${COMPETITORS[v.competitorKey].shortName} (for ${v.name})",
      description: "Head-to-head comparison against the dominant non-agency alternative for ${v.name.toLowerCase()}.",
    },
  ],
  cta: {
    headline: "Replace the ${v.name} Agency Retainer with an AI Content Engine",
    subheadline:
      "See how Prestyj ships ${v.postsPerMonth} posts/month across 7 platforms for ${v.audience} \u2014 for less than half the cost of a traditional social media agency. No retainer. No contract. No account manager.",
    buttonText: "See How It Works for ${v.name}",
    buttonHref: "/done-for-you-social-media",
    footnote: "$3,000/mo flat \u00b7 ${v.postsPerMonth} posts/mo \u00b7 7 platforms \u00b7 No contract",
  },
});
`;
}

// ----------------------------- Angle C: /compare/prestyj-vs-{competitor}-for-{vertical} -----------------------------

function renderAngleC(v: Vertical): string {
  const c = COMPETITORS[v.competitorKey];
  const exportName = compareVarName(v);
  return `import type { ComparePageData, CompareMetadata } from "../types";
import { createComparePage } from "@/lib/content-factory";

// AUTO-GENERATED by scripts/generate-social-vertical-matrix.ts
// Vertical: ${v.name} · Angle: Prestyj vs ${c.name}

const PRESTYJ_PRICING_FEATURES = [
  { text: "${v.postsPerMonth} posts/month across 7 platforms", included: true },
  { text: "${v.name}-researched scripts, hooks, and frameworks", included: true },
  { text: "Voice-trained captions on your existing content", included: true },
  { text: "Daily multi-platform publishing (${v.platformList.split(", ").slice(0, 4).join(", ")}, +)", included: true },
  { text: "Weekly content calendar \u2014 approve in 15\u201330 min", included: true },
  { text: "Performance learning loop tunes future posts", included: true },
  { text: "Live in days \u2014 not 4\u20138 week onboarding", included: true },
  { text: "Month-to-month \u2014 cancel anytime, no contract", included: true },
];

export const ${exportName}: ComparePageData = createComparePage({
  slug: "prestyj-vs-${c.slug}-for-${v.slug}",
  competitorName: "${c.name} (for ${v.name})",
  hero: {
    badge: "AI Content Engine vs ${c.shortName}",
    title: "Prestyj vs",
    titleAccent: "${c.name} for ${v.name}",
    subtitle:
      "${v.audience} keep defaulting to ${c.name.toLowerCase()} for social \u2014 and watching them ship ${c.postsPerMonth} posts/month at ${c.cadence}. Prestyj is the AI content engine alternative: ${v.postsPerMonth} posts/month across 7 platforms, ${v.name}-researched, voice-trained, month-to-month from $3,000/mo flat.",
    description: "",
    keyStats: [
      { value: "$3K/mo vs ${c.pricing}${c.pricingPeriod}", label: "AI engine vs ${c.shortName.toLowerCase()}" },
      { value: "${v.postsPerMonth} vs ${c.postsPerMonth}", label: "Posts/month \u2014 Prestyj vs ${c.shortName.toLowerCase()}" },
      { value: "7 vs 1\u20133", label: "Platforms covered" },
      { value: "Days vs 4\u20138 wks", label: "Onboarding time" },
    ],
  },
  pricing: {
    prestyj: {
      price: "$3,000",
      priceSubtext: "/month \u00b7 ${v.postsPerMonth} posts \u00b7 ${v.name}-researched",
      features: PRESTYJ_PRICING_FEATURES,
    },
    competitor: {
      price: "${c.pricing}",
      priceSubtext: "${c.pricingPeriod}",
      features: [
        { text: "${c.cadence}", included: true },
        { text: "${v.name}-specific vertical research", included: false },
        { text: "Voice training on your existing content", included: false },
        { text: "${v.postsPerMonth} posts/month volume", included: false },
        { text: "7-platform daily publishing", included: false },
        { text: "Performance learning loop", included: false },
        { text: "Live in days, no long onboarding", included: false },
      ],
    },
  },
  features: [
    { feature: "${v.name}-specific vertical research", prestyj: true, competitor: false, note: "${c.name} does not research ${v.name.toLowerCase()} pain points by default" },
    { feature: "Posts per month", prestyj: "${v.postsPerMonth}", competitor: "${c.postsPerMonth}" },
    { feature: "Platforms covered", prestyj: "7 (${v.platformList.split(", ").slice(0, 4).join(", ")}, +)", competitor: "1\u20133 typical" },
    { feature: "Monthly cost", prestyj: "$3,000 flat", competitor: "${c.pricing}${c.pricingPeriod}" },
    { feature: "Cost per post", prestyj: "~$2", competitor: "$50\u2013$750" },
    { feature: "Voice training on your existing content", prestyj: true, competitor: false },
    { feature: "Daily auto-publish", prestyj: true, competitor: false },
    { feature: "Long-term contract required", prestyj: false, competitor: ${c.slug === "smma" ? "true" : c.slug === "in-house-hire" ? "true" : "false"}, note: "${c.slug === "smma" ? "3\u201312 month agency contracts typical" : c.slug === "in-house-hire" ? "Employment contract \u2014 plus severance risk" : "Per-gig or per-month \u2014 but you replace the cost monthly"}" },
    { feature: "Onboarding time", prestyj: "Days", competitor: "${c.slug === "smma" ? "4\u20138 weeks" : c.slug === "in-house-hire" ? "6\u201312 weeks (hiring + ramp)" : c.slug === "va-plus-templates" ? "2\u20136 weeks (training)" : "Per-gig, per-seller, every time"}" },
    { feature: "Coverage", prestyj: "24/7/365", competitor: "${c.slug === "in-house-hire" ? "9\u20135 + PTO + sick days" : c.slug === "smma" ? "Account manager hours" : c.slug === "va-plus-templates" ? "VA timezone + hours" : "Per-gig availability"}" },
    { feature: "Performance learning loop", prestyj: true, competitor: false },
    { feature: "Risk of voice drift", prestyj: "Low \u2014 trained on your existing content", competitor: "${c.slug === "fiverr" ? "High \u2014 every gig is a new seller" : c.slug === "va-plus-templates" ? "High \u2014 templates flatten voice" : "Medium \u2014 depends on team turnover"}" },
  ],
  whySwitch: {
    title: "Why ${v.name} Pick the AI Content Engine Over ${c.name}",
    description:
      "${c.description} For ${v.audience}, the math stops working at scale.",
    reasons: [
      {
        icon: "Zap",
        title: "Volume that actually feeds the algorithm",
        description:
          "${v.cadenceNote} ${c.shortName} cannot ship at ${v.postsPerMonth} posts/month \u2014 the unit of work they produce (${c.cadence.toLowerCase()}) is fundamentally incompatible with the cadence the algorithms now reward for ${v.name.toLowerCase()}.",
      },
      {
        icon: "DollarSign",
        title: "The math finally works for ${v.name.toLowerCase()}",
        description:
          "${v.hiddenCost}. Prestyj's $3,000/month flat math puts cost per post at ~$2. ${c.shortName} math puts the same content at $50\u2013$750 per post once you factor in management overhead, training, or turnover.",
      },
      {
        icon: "Clock",
        title: "Days to launch, not months of ramp",
        description:
          "${c.shortName} requires ${c.slug === "smma" ? "4\u20138 weeks of brand workshops, pillar docs, and voice guides" : c.slug === "in-house-hire" ? "6\u201312 weeks to hire, onboard, and ramp" : c.slug === "va-plus-templates" ? "2\u20136 weeks of template buildouts and VA training" : "per-gig coordination every time you need new content"} before the first post ships. Prestyj's voice training and ${v.name.toLowerCase()}-specific scripts mean daily publishing in days, not weeks.",
      },
      {
        icon: "Target",
        title: "${v.name}-specific scripts vs generic ${c.shortName.toLowerCase()} output",
        description:
          "${v.voiceNote} ${c.shortName} typically ships what you brief them on \u2014 they do not bring ${v.name.toLowerCase()} vertical research to the table. Prestyj begins every engagement with a vertical research pass on current-quarter ${v.name.toLowerCase()} hook patterns.",
      },
      {
        icon: "Shield",
        title: "Single accountable engine, not turnover risk",
        description:
          "${c.slug === "in-house-hire" ? "Median tenure of a junior social hire is under 14 months \u2014 every departure resets voice training and content velocity." : c.slug === "smma" ? "Agency turnover and account-manager rotation is constant \u2014 the senior who pitched you is rarely the junior actually doing the work." : c.slug === "fiverr" ? "Every gig is a new seller \u2014 voice resets, quality varies, and management overhead compounds." : "VAs rotate, templates expire, and you re-train every time someone leaves."} Prestyj is one engine, one voice, one standard \u2014 ${v.postsPerMonth} posts a month, every month.",
      },
    ],
  },
  relatedResources: [
    { title: "Done-For-You Social Media \u2014 the Service", description: "See the Prestyj content engine product", href: "/done-for-you-social-media", linkText: "Learn more" },
    { title: "Done-For-You Social Media for ${v.name}", description: "${v.name}-specific offer page", href: "/best-for/done-for-you-social-for-${v.slug}", linkText: "Read use case" },
    { title: "Social Volume Strategy for ${v.name}", description: "Cadence math and 2026 platform priorities", href: "/best-for/social-volume-strategy-for-${v.slug}", linkText: "See the strategy" },
    { title: "${v.name} Social Media Agency Alternative", description: "Alternative to traditional ${v.name.toLowerCase()} social media agencies", href: "/alternatives/${v.slug}-social-media-agency-alternative", linkText: "Compare" },
  ],
  cta: {
    title: "${v.name} Pick the AI Content Engine Over ${c.name}.",
    description:
      "${v.postsPerMonth} ${v.name.toLowerCase()}-researched posts a month across 7 platforms. One flat fee of $3,000/mo. Voice-trained. No contract. Live in days.",
    buttonText: "See How It Works for ${v.name}",
    buttonHref: "/done-for-you-social-media",
    disclaimer: "Month-to-month \u00b7 No contract \u00b7 ${v.postsPerMonth} posts/month",
  },
});

export const ${exportName}Metadata: CompareMetadata = {
  slug: "prestyj-vs-${c.slug}-for-${v.slug}",
  competitorName: "${c.name} (for ${v.name})",
  title: "PRESTYJ vs ${c.name} for ${v.name} (2026 Cadence Math)",
  description:
    "${c.description.split(".")[0]}. See full posts-per-month math and why ${v.audience} pick the AI content engine from $3,000/mo over ${c.pricing}${c.pricingPeriod}.",
  keywords: [
    "prestyj vs ${c.slug} for ${v.slug}",
    "${c.slug} alternative for ${v.slug}",
    "${v.name.toLowerCase()} ${c.shortName.toLowerCase()} comparison",
    "social media for ${v.slug}",
    "${v.slug} content production pricing",
    "${c.slug} for ${v.slug} alternative",
  ],
};
`;
}

// Compare route file
function renderCompareRoute(v: Vertical): string {
  const c = COMPETITORS[v.competitorKey];
  const dataVar = compareVarName(v);
  const compName = v.varBase.split("-").map((s, i) => (i === 0 ? cap(s) : cap(s))).join("");
  const slugForFn = `${v.slug}-${c.slug}`.split("-").map(cap).join("");
  const fnName = `PrestyjVs${cap(c.slug.split("-").map((s, i) => (i === 0 ? s : cap(s))).join(""))}For${compName}Page`;
  return `"use client";

// AUTO-GENERATED by scripts/generate-social-vertical-matrix.ts
import { ComparePageWrapper } from "@/components/sections/compare/ComparePageWrapper";
import { ${dataVar} } from "@/lib/compare/data/prestyj-vs-${c.slug}-for-${v.slug}";

export default function ${fnName}() {
  return <ComparePageWrapper data={${dataVar}} />;
}
`;
}

// ----------------------------- Main runner -----------------------------

function run() {
  console.log("Generating done-for-you social vertical × angle matrix...\n");
  console.log(`Verticals: ${VERTICALS.length}, Competitors: ${Object.keys(COMPETITORS).length}\n`);

  const bestForDir = join(SRC, "lib", "best-for");
  const alternativesDir = join(SRC, "lib", "alternatives");
  const compareDataDir = join(SRC, "lib", "compare", "data");
  const compareRoutesDir = join(SRC, "app", "compare");

  // 1) Emit 40 data files + 10 compare route files
  for (const v of VERTICALS) {
    console.log(`→ ${v.name} (${v.slug})`);
    const c = COMPETITORS[v.competitorKey];

    writeFile(join(bestForDir, `done-for-you-social-for-${v.slug}.ts`), renderAngleA(v));
    writeFile(join(bestForDir, `social-volume-strategy-for-${v.slug}.ts`), renderAngleD(v));
    writeFile(join(alternativesDir, `${v.slug}-social-media-agency-alternative.ts`), renderAngleB(v));

    const compareSlug = `prestyj-vs-${c.slug}-for-${v.slug}`;
    writeFile(join(compareDataDir, `${compareSlug}.ts`), renderAngleC(v));
    writeFile(join(compareRoutesDir, compareSlug, "page.tsx"), renderCompareRoute(v));
  }

  // 2) Patch src/lib/best-for/index.ts
  console.log("\nPatching src/lib/best-for/index.ts");
  {
    const filePath = join(bestForDir, "index.ts");
    const imports = VERTICALS.flatMap((v) => [
      `import { ${varName("doneForYouSocialFor", v)} } from "./done-for-you-social-for-${v.slug}";`,
      `import { ${varName("socialVolumeStrategyFor", v)} } from "./social-volume-strategy-for-${v.slug}";`,
    ]).join("\n");
    const records = VERTICALS.flatMap((v) => [
      `  "done-for-you-social-for-${v.slug}": ${varName("doneForYouSocialFor", v)},`,
      `  "social-volume-strategy-for-${v.slug}": ${varName("socialVolumeStrategyFor", v)},`,
    ]).join("\n");

    patchBetweenMarkers(
      filePath,
      "// SOCIAL-VERTICAL-MATRIX-IMPORTS-START",
      "// SOCIAL-VERTICAL-MATRIX-IMPORTS-END",
      imports,
      "// BATCH-MATRIX-IMPORTS-END"
    );
    patchBetweenMarkers(
      filePath,
      "// SOCIAL-VERTICAL-MATRIX-REGISTER-START",
      "// SOCIAL-VERTICAL-MATRIX-REGISTER-END",
      records,
      "// BATCH-MATRIX-REGISTER-END"
    );
  }

  // 3) Patch src/lib/alternatives/index.ts
  console.log("\nPatching src/lib/alternatives/index.ts");
  {
    const filePath = join(alternativesDir, "index.ts");
    const imports = VERTICALS
      .map((v) => `import { ${altVarName(v)} } from "./${v.slug}-social-media-agency-alternative";`)
      .join("\n");
    const records = VERTICALS
      .map((v) => `  "${v.slug}-social-media-agency-alternative": ${altVarName(v)},`)
      .join("\n");

    patchBetweenMarkers(
      filePath,
      "// SOCIAL-VERTICAL-MATRIX-IMPORTS-START",
      "// SOCIAL-VERTICAL-MATRIX-IMPORTS-END",
      imports,
      "// BATCH-MATRIX-IMPORTS-END"
    );
    patchBetweenMarkers(
      filePath,
      "// SOCIAL-VERTICAL-MATRIX-REGISTER-START",
      "// SOCIAL-VERTICAL-MATRIX-REGISTER-END",
      records,
      "// BATCH-MATRIX-REGISTER-END"
    );
  }

  // 4) Patch src/app/sitemap.ts (only compare routes need explicit entries)
  console.log("\nPatching src/app/sitemap.ts");
  {
    const filePath = join(SRC, "app", "sitemap.ts");
    const entries = VERTICALS.map((v) => {
      const c = COMPETITORS[v.competitorKey];
      return `    {
      url: \`\${baseUrl}/compare/prestyj-vs-${c.slug}-for-${v.slug}\`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },`;
    }).join("\n");

    patchBetweenMarkers(
      filePath,
      "// SOCIAL-VERTICAL-MATRIX-COMPARE-START",
      "// SOCIAL-VERTICAL-MATRIX-COMPARE-END",
      entries,
      "// BATCH-MATRIX-COMPARE-END"
    );
  }

  // 5) Patch src/lib/nav-data.ts — add 3 best-for links
  console.log("\nPatching src/lib/nav-data.ts");
  {
    const filePath = join(SRC, "lib", "nav-data.ts");
    const src = readFileSync(filePath, "utf8");
    const navEntries = [
      `  { href: "/best-for/done-for-you-social-for-coaches", label: "Social for Coaches", description: "${VERTICALS[0].postsPerMonth} posts/mo for coaches.", icon: Share2 },`,
      `  { href: "/best-for/done-for-you-social-for-agency-owners", label: "Social for Agency Owners", description: "Founder brand at scale.", icon: Share2 },`,
      `  { href: "/best-for/done-for-you-social-for-saas-founders", label: "Social for SaaS Founders", description: "Founder-led LinkedIn distribution.", icon: Share2 },`,
    ].join("\n");

    const startMarker = "// SOCIAL-VERTICAL-MATRIX-NAV-START";
    const endMarker = "// SOCIAL-VERTICAL-MATRIX-NAV-END";
    if (src.includes(startMarker) && src.includes(endMarker)) {
      patchBetweenMarkers(filePath, startMarker, endMarker, navEntries);
    } else {
      // Insert before the closing `];` of bestForLinks array
      const anchor = `  { href: "/best-for/batch-video-ads-for-coaches", label: "Batch Ads for Coaches", description: "300-1,000 ads from one recording.", icon: Video },\n];`;
      if (!src.includes(anchor)) {
        throw new Error("Cannot find bestForLinks closing anchor in nav-data.ts");
      }
      const replacement = `  { href: "/best-for/batch-video-ads-for-coaches", label: "Batch Ads for Coaches", description: "300-1,000 ads from one recording.", icon: Video },\n  ${startMarker}\n${navEntries}\n  ${endMarker}\n];`;
      writeFileSync(filePath, src.replace(anchor, replacement), "utf8");
      console.log("  patched", filePath.replace(ROOT + "/", ""));
    }
  }

  console.log("\n✓ Done. 40 data files + 10 compare route files written.");
  console.log("  Next: run `npm run typecheck && npm run lint && npm run build`");
}

run();
