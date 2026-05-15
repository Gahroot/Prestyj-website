/**
 * NOTE: This simulation now models the live TOF offer.
 * Numbers are Beta-distributed priors anchored to public B2B benchmarks;
 * replace with actual GA4/CRM data once 30+ purchases are recorded.
 *
 * Top-of-funnel offer Monte Carlo — v2.
 *
 * Now centers on /batch-video-ads as the productized TOF offer and models
 * the full economics, not just "customers per 1k visitors":
 *
 *   visitors → batch buyers ($1,497–$3,997 one-time)
 *           → expansion into Starter/Pro/Scale (recurring)
 *
 * Outputs per 1,000 baseline visitors:
 *   - TOF buyers (paying customers from the productized service)
 *   - Expansion customers (TOF buyers who upgrade to a plan)
 *   - Gross revenue, year 1 (TOF + expansion MRR × avg months)
 *   - CAC vs. AOV (payback)
 *
 * Run:  npx tsx scripts/simulate-tof-offers.ts
 */

type Beta = { alpha: number; beta: number };

/** Sample from Beta(α, β) via two Gamma draws. */
function sampleBeta({ alpha, beta }: Beta): number {
  const x = sampleGamma(alpha);
  const y = sampleGamma(beta);
  return x / (x + y);
}

/** Marsaglia–Tsang for Gamma(shape, 1). */
function sampleGamma(shape: number): number {
  if (shape < 1) {
    const u = Math.random();
    return sampleGamma(shape + 1) * Math.pow(u, 1 / shape);
  }
  const d = shape - 1 / 3;
  const c = 1 / Math.sqrt(9 * d);
  while (true) {
    let x: number;
    let v: number;
    do {
      x = sampleNormal();
      v = 1 + c * x;
    } while (v <= 0);
    v = v * v * v;
    const u = Math.random();
    if (u < 1 - 0.0331 * x * x * x * x) return d * v;
    if (Math.log(u) < 0.5 * x * x + d * (1 - v + Math.log(v))) return d * v;
  }
}

function sampleNormal(): number {
  const u = 1 - Math.random();
  const v = Math.random();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}

/** Convert a (mean, "strength") pair to Beta params. Strength = α+β. */
function beta(mean: number, strength: number): Beta {
  return { alpha: mean * strength, beta: (1 - mean) * strength };
}

interface Offer {
  name: string;
  description: string;
  /** Visitor → identified lead (form fill, opt-in, account, demo book, or TOF purchase). */
  visitorToLead: Beta;
  /** Lead → booked sales call (or, for productized TOF, lead → purchase). */
  leadToBookedCall: Beta;
  /** Booked call → showed up (1.0 for productized — purchase IS the conversion). */
  showRate: Beta;
  /** Showed up → closed deal (for productized TOF, this is purchase conversion). */
  closeRate: Beta;
  /** Relative organic / paid pull vs. a baseline "book a demo" page. */
  trafficMultiplier: number;
  /** Marginal fulfillment cost per *lead* (USD). */
  fulfillmentCostPerLead: number;
  /** Average order value of the TOF conversion itself (USD). 0 for free magnets. */
  tofAOV: number;
  /** % of TOF buyers who expand into a recurring plan. */
  expansionRate: Beta;
  /** Average MRR of the expansion customer (USD). */
  expansionMRR: number;
  /** Expected avg months retained for an expansion customer. */
  expansionMonths: number;
  notes: string;
}

/**
 * Offers under consideration. Means anchored to:
 *  - Unbounce/HubSpot LP benchmarks (B2B services median ≈ 2-3%)
 *  - First Page Sage 2024 SaaS/services demo-request CVR (1.5-3%)
 *  - DemandGen content opt-in 20-35%
 *  - ZoomInfo / Gong demo show rate 50-65%
 *  - High-ticket DFY services close rate 20-30%
 */
/**
 * Plan economics (anchored to /pricing):
 *   Starter: $3,997 setup + $1,997/mo  → blended ~$2,330 MRR over 12mo
 *   Pro:     $6,997 setup + $3,497/mo  → blended ~$4,080 MRR
 *   Scale:   $9,997 setup + $5,997/mo  → blended ~$6,830 MRR
 *
 * For expansion math we use a conservative blended MRR (skewed Starter)
 * and avg retention of 9 months (industry norm for productized done-for-you).
 */
const BLENDED_PLAN_MRR = 2_600; // Starter-heavy mix, includes amortized setup
const AVG_RETENTION_MONTHS = 9;

const OFFERS: Offer[] = [
  {
    name: "Book-a-demo (control)",
    description: "Straight 'book a 15-min demo' CTA — current default.",
    visitorToLead: beta(0.022, 300),
    leadToBookedCall: beta(0.95, 200),
    showRate: beta(0.55, 100),
    closeRate: beta(0.22, 80),
    trafficMultiplier: 1.0,
    fulfillmentCostPerLead: 0,
    tofAOV: 0,
    expansionRate: beta(1.0, 500), // demo closers ARE the plan customer
    expansionMRR: BLENDED_PLAN_MRR,
    expansionMonths: AVG_RETENTION_MONTHS,
    notes: "Baseline. High intent, low volume. No leverage on cold traffic.",
  },
  {
    name: "Batch Video Ads (productized TOF)",
    description: "/batch-video-ads — $1,497–$3,997 one-time, 1–2 day turnaround.",
    // Productized service LPs with strong proof + price anchor typically
    // convert cold paid traffic at 1.5–3%. Warm/referral much higher.
    visitorToLead: beta(0.025, 250),
    leadToBookedCall: beta(1.0, 500), // purchase = conversion, no "booked call" step
    showRate: beta(1.0, 500), // n/a — they paid
    closeRate: beta(1.0, 500), // already closed
    trafficMultiplier: 1.6, // "300 ads in 24 hours for $1,497" is a strong hook
    fulfillmentCostPerLead: 0, // fulfillment cost is on the buyer, not the lead
    tofAOV: 2_100, // weighted toward 500-pack ($2,497) but starter pack drags down
    expansionRate: beta(0.28, 60), // ~25–35% of batch buyers upgrade to a plan within 90d
    expansionMRR: BLENDED_PLAN_MRR,
    expansionMonths: AVG_RETENTION_MONTHS,
    notes: "Self-serve revenue + qualified upsell pool. Buyer ≠ prospect.",
  },
  {
    name: "Batch Video Ads — $497 starter (LIVE TOF)",
    description: "Add a NEW low-tier SKU below current pricing. 100 ads, $497.",
    visitorToLead: beta(0.045, 220), // half the price ≈ ~1.8x CVR (price elasticity)
    leadToBookedCall: beta(1.0, 500),
    showRate: beta(1.0, 500),
    closeRate: beta(1.0, 500),
    trafficMultiplier: 1.9,
    fulfillmentCostPerLead: 0,
    tofAOV: 497,
    expansionRate: beta(0.32, 60), // lower entry = bigger top, slightly higher expansion %
    expansionMRR: BLENDED_PLAN_MRR,
    expansionMonths: AVG_RETENTION_MONTHS,
    notes: "Trip-wire ADDED below current pricing. Doesn't cannibalize — catches buyers who'd never pay $1,497.",
  },
  {
    name: "Batch Video Ads — reprice 300/$497 (replace)",
    description: "REPLACE current $1,497 tier with $497 for the same 300 ads.",
    // Same volume promise at 1/3 price — CVR jumps even harder than tripwire
    // because the *anchor* offer (300 ads) is the same one converting today.
    visitorToLead: beta(0.055, 220), // ~2.2x base CVR — price is the main objection
    leadToBookedCall: beta(1.0, 500),
    showRate: beta(1.0, 500),
    closeRate: beta(1.0, 500),
    trafficMultiplier: 2.0,
    fulfillmentCostPerLead: 0,
    tofAOV: 497,
    // Lower commitment — buyers are LESS qualified than $1,497 buyers.
    // Expansion rate drops because price-sensitive buyers don't buy $2,600/mo plans.
    expansionRate: beta(0.18, 60),
    expansionMRR: BLENDED_PLAN_MRR,
    expansionMonths: AVG_RETENTION_MONTHS,
    notes: "Same product, 1/3 price. Bigger top of funnel, weaker buyers, expansion craters.",
  },
  {
    name: "Free AI lead-response audit",
    description: "Submit your CRM — we send a Loom showing leads you lost.",
    visitorToLead: beta(0.085, 200),
    leadToBookedCall: beta(0.45, 100),
    showRate: beta(0.65, 100),
    closeRate: beta(0.3, 80),
    trafficMultiplier: 2.1,
    fulfillmentCostPerLead: 35,
    tofAOV: 0,
    expansionRate: beta(1.0, 500),
    expansionMRR: BLENDED_PLAN_MRR,
    expansionMonths: AVG_RETENTION_MONTHS,
    notes: "Specific, personalized, painful. Classic 'audit' play.",
  },
  {
    name: "Live AI call-you-back demo",
    description: "/lead-magnet/reactivate-leads — submit #, AI calls in 60s.",
    visitorToLead: beta(0.11, 220),
    leadToBookedCall: beta(0.32, 120),
    showRate: beta(0.6, 100),
    closeRate: beta(0.28, 80),
    trafficMultiplier: 2.4,
    fulfillmentCostPerLead: 1.5,
    tofAOV: 0,
    expansionRate: beta(1.0, 500),
    expansionMRR: BLENDED_PLAN_MRR,
    expansionMonths: AVG_RETENTION_MONTHS,
    notes: "The 'wow' moment IS the funnel. Travels on social.",
  },
  {
    name: "Free 300 video ads (with paid plan)",
    description: "Current /free-ads — free ads bundled w/ $1,997+ plan.",
    visitorToLead: beta(0.04, 250),
    leadToBookedCall: beta(0.35, 120),
    showRate: beta(0.6, 100),
    closeRate: beta(0.35, 80),
    trafficMultiplier: 1.8,
    fulfillmentCostPerLead: 0,
    tofAOV: 0,
    expansionRate: beta(1.0, 500),
    expansionMRR: BLENDED_PLAN_MRR,
    expansionMonths: AVG_RETENTION_MONTHS,
    notes: "Strong magnet, but the 'with a plan' twist kills volume.",
  },
  {
    name: "ROI / commission calculator",
    description: "Real-estate ROI + team commission calculators.",
    visitorToLead: beta(0.06, 200),
    leadToBookedCall: beta(0.18, 100),
    showRate: beta(0.5, 100),
    closeRate: beta(0.2, 80),
    trafficMultiplier: 1.6,
    fulfillmentCostPerLead: 0,
    tofAOV: 0,
    expansionRate: beta(1.0, 500),
    expansionMRR: BLENDED_PLAN_MRR,
    expansionMonths: AVG_RETENTION_MONTHS,
    notes: "Great SEO asset, weak intent. Educates but doesn't qualify.",
  },
  {
    name: "Playbook PDF",
    description: "Existing /lead-magnet playbooks — gated PDF.",
    visitorToLead: beta(0.18, 200),
    leadToBookedCall: beta(0.08, 100),
    showRate: beta(0.5, 100),
    closeRate: beta(0.18, 80),
    trafficMultiplier: 1.4,
    fulfillmentCostPerLead: 0,
    tofAOV: 0,
    expansionRate: beta(1.0, 500),
    expansionMRR: BLENDED_PLAN_MRR,
    expansionMonths: AVG_RETENTION_MONTHS,
    notes: "High opt-in, low intent. Needs nurture to monetize.",
  },
  {
    name: "7-day free AI texting agent trial",
    description: "Hook up lead source — AI texts every new lead for 7 days.",
    visitorToLead: beta(0.05, 200),
    leadToBookedCall: beta(0.55, 100),
    showRate: beta(0.7, 100),
    closeRate: beta(0.4, 80),
    trafficMultiplier: 1.5,
    fulfillmentCostPerLead: 25,
    tofAOV: 0,
    expansionRate: beta(1.0, 500),
    expansionMRR: BLENDED_PLAN_MRR,
    expansionMonths: AVG_RETENTION_MONTHS,
    notes: "Highest close rate, lowest volume. The 'PLG' play.",
  },
];

const TRIALS = 20_000;
const BASELINE_VISITORS = 1_000;
const CAC_AD_SPEND_PER_VISITOR = 2.5; // ~$2.50 CPC blended Meta+Google for this niche

interface Result {
  name: string;
  tofBuyersP50: number;
  expansionCustomersP50: number;
  totalCustomersP50: number;
  totalCustomersP10: number;
  totalCustomersP90: number;
  tofRevenueP50: number;
  expansionRevenueP50: number;
  year1RevenueP50: number;
  year1RevenueP10: number;
  year1RevenueP90: number;
  cacP50: number;
  paybackRatio: number; // year1 revenue / total acquisition cost
}

function pct(arr: number[], p: number): number {
  const sorted = [...arr].sort((a, b) => a - b);
  const idx = Math.floor((sorted.length - 1) * p);
  return sorted[idx] ?? 0;
}

function simulate(offer: Offer): Result {
  const tofBuyers: number[] = [];
  const expansionCustomers: number[] = [];
  const totalCustomers: number[] = [];
  const tofRevenue: number[] = [];
  const expansionRevenue: number[] = [];
  const year1Revenue: number[] = [];
  const cacs: number[] = [];

  const visitors = BASELINE_VISITORS * offer.trafficMultiplier;
  const adSpend = visitors * CAC_AD_SPEND_PER_VISITOR;

  for (let i = 0; i < TRIALS; i++) {
    const leadRate = sampleBeta(offer.visitorToLead);
    const bookRate = sampleBeta(offer.leadToBookedCall);
    const show = sampleBeta(offer.showRate);
    const close = sampleBeta(offer.closeRate);
    const expansion = sampleBeta(offer.expansionRate);

    const leads = visitors * leadRate;
    const tof = leads * bookRate * show * close; // "customers" of the TOF offer
    const expanded = offer.tofAOV > 0 ? tof * expansion : tof; // free magnets: tof IS expansion
    const total = offer.tofAOV > 0 ? tof + expanded : expanded;

    const tofRev = tof * offer.tofAOV;
    const expRev = expanded * offer.expansionMRR * offer.expansionMonths;
    const y1Rev = tofRev + expRev;

    const fulfillment = leads * offer.fulfillmentCostPerLead;
    const totalCost = adSpend + fulfillment;
    const cac = total > 0 ? totalCost / total : Infinity;

    tofBuyers.push(tof);
    expansionCustomers.push(expanded);
    totalCustomers.push(total);
    tofRevenue.push(tofRev);
    expansionRevenue.push(expRev);
    year1Revenue.push(y1Rev);
    cacs.push(cac);
  }

  const year1RevenueP50 = pct(year1Revenue, 0.5);
  const cacP50 = pct(cacs.filter((c) => Number.isFinite(c)), 0.5);
  const adSpendTotal = adSpend;

  return {
    name: offer.name,
    tofBuyersP50: pct(tofBuyers, 0.5),
    expansionCustomersP50: pct(expansionCustomers, 0.5),
    totalCustomersP50: pct(totalCustomers, 0.5),
    totalCustomersP10: pct(totalCustomers, 0.1),
    totalCustomersP90: pct(totalCustomers, 0.9),
    tofRevenueP50: pct(tofRevenue, 0.5),
    expansionRevenueP50: pct(expansionRevenue, 0.5),
    year1RevenueP50,
    year1RevenueP10: pct(year1Revenue, 0.1),
    year1RevenueP90: pct(year1Revenue, 0.9),
    cacP50,
    paybackRatio: year1RevenueP50 / Math.max(adSpendTotal, 1),
  };
}

function fmt(n: number, digits = 1): string {
  if (!Number.isFinite(n)) return "  ∞ ";
  return n.toFixed(digits).padStart(6, " ");
}

function bar(value: number, max: number, width = 20): string {
  const filled = Math.round((value / max) * width);
  return "█".repeat(filled) + "░".repeat(width - filled);
}

function money(n: number): string {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(2)}M`;
  if (n >= 1_000) return `$${(n / 1_000).toFixed(1)}k`;
  return `$${n.toFixed(0)}`;
}

console.log(
  `\nTop-of-funnel offer simulation v2 — ${TRIALS.toLocaleString()} trials each, ` +
    `${BASELINE_VISITORS.toLocaleString()} baseline visitors\n` +
    `Ad spend: $${CAC_AD_SPEND_PER_VISITOR}/visitor · Blended plan MRR: $${BLENDED_PLAN_MRR} · ` +
    `Avg retention: ${AVG_RETENTION_MONTHS}mo\n`,
);

const results = OFFERS.map(simulate);
results.sort((a, b) => b.year1RevenueP50 - a.year1RevenueP50);

const maxRev = Math.max(...results.map((r) => r.year1RevenueP50));

console.log("RANKING by Year-1 revenue per 1k visitors (TOF + expansion)\n");
console.log(
  "Rank  Offer                                       Y1 Rev (P10 / P50 / P90)        CAC      Payback",
);
console.log("─".repeat(115));
results.forEach((r, i) => {
  const name = r.name.padEnd(43);
  const rev = `${money(r.year1RevenueP10).padStart(7)} / ${money(r.year1RevenueP50).padStart(7)} / ${money(r.year1RevenueP90).padStart(7)}`;
  const cac = `$${fmt(r.cacP50, 0).trim().padStart(5)}`;
  const payback = `${r.paybackRatio.toFixed(1)}x`;
  console.log(`  ${(i + 1).toString().padStart(2)}. ${name} ${rev}   ${cac}   ${payback.padStart(5)}`);
});

console.log("\nREVENUE BREAKDOWN — where the money comes from\n");
console.log(
  "  Offer                                       TOF rev (productized)   Expansion rev (plans)   Y1 total",
);
console.log("  " + "─".repeat(105));
results.forEach((r) => {
  const name = r.name.padEnd(43);
  console.log(
    `  ${name} ${money(r.tofRevenueP50).padStart(10)}              ${money(r.expansionRevenueP50).padStart(10)}            ${money(r.year1RevenueP50).padStart(10)}`,
  );
});

console.log("\nY1 REVENUE per 1k baseline visitors\n");
results.forEach((r) => {
  console.log(
    `  ${r.name.padEnd(43)} ${money(r.year1RevenueP50).padStart(8)}  ${bar(r.year1RevenueP50, maxRev, 28)}`,
  );
});

console.log("\nCAC per acquired customer (lower = better)\n");
const byCac = [...results].sort((a, b) => a.cacP50 - b.cacP50);
const maxCac = Math.max(...byCac.map((r) => (Number.isFinite(r.cacP50) ? r.cacP50 : 0)));
byCac.forEach((r) => {
  const w = Number.isFinite(r.cacP50) ? Math.round((r.cacP50 / maxCac) * 25) : 25;
  console.log(`  ${r.name.padEnd(43)} $${fmt(r.cacP50, 0).trim().padStart(6)}  ${"█".repeat(w)}`);
});

console.log("\nOffer notes\n");
OFFERS.forEach((o) => {
  console.log(`  • ${o.name}\n      ${o.notes}`);
});
console.log();
