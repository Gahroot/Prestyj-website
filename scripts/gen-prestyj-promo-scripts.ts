#!/usr/bin/env npx tsx
/**
 * Generate promo scripts for Prestyj's own batch-video-ads service.
 *
 * Hits the same script-gen endpoint the /batch-video-ads form uses, but with
 * Prestyj pre-baked as the "business". The real offer: up to 1000 unique
 * video ads delivered in 24 hours across three packages (300/500/1000). The
 * client reads scripts off a teleprompter in one sitting, sends us the raw
 * footage, and we edit and deliver finished ads ready to upload to Meta,
 * YouTube, and TikTok. Pain points target owners whose CAC is climbing from
 * creative fatigue, who can't iterate fast enough to feed the algorithm, and
 * who are burning budget before finding their winning angle.
 *
 * Usage:
 *   npm run gen-scripts                      # 5 random pain points (Pro tier)
 *   npm run gen-scripts -- --count 10        # 10 random (Max tier)
 *   npm run gen-scripts -- --count 3         # 3 random (Minimum tier)
 *   npm run gen-scripts -- --pains 1,4,7,12  # specific pains by 1-based index
 *   npm run gen-scripts -- --list            # print the library and exit
 *   npm run gen-scripts -- --dry-run         # build payload, don't call API
 */

import { mkdirSync, writeFileSync } from "fs";
import { join } from "path";

const SCRIPT_GEN_URL = "https://script-gen-production-5b56.up.railway.app/generate";
const OUTPUT_DIR = join(process.cwd(), "scripts", "output");

type PainPointSolution = { pain_point: string; solution: string };

const PRESTYJ = {
  business_name: "Prestyj",
  website_url: "https://prestyj.com/batch-video-ads",
  target_audience:
    "Business owners and marketers running paid social (Meta/Facebook/Instagram primarily, plus YouTube and TikTok) who can't iterate ad creative fast enough to beat ad fatigue and find winners before their budget runs out. Local service businesses, real estate agents, mortgage brokers, home services (roofing, HVAC, plumbing), and anyone currently spending $1k+/month on ads whose CAC is climbing and who are tired of guessing what's working.",
  offer:
    "Up to 1000 unique, fully-edited video ads delivered 24 hours after you send us your raw teleprompter footage. Three packages: 300 (find your angle), 500 (scale your winner), and 1000 (feed the algorithm). We write every script (each a unique permutation framing you as the solution to a specific pain point in your buyer), you read them off a teleprompter in one sitting, send us the raw footage, and we edit and return ready-to-upload ads for Meta, YouTube, and TikTok. One flat fee, no retainer. Backed by four guarantees: (1) delivered in 24 hours or your next batch is free; (2) find at least one ad that beats your current control CPA when properly tested or we produce another batch free; (3) platform-compliant — any Meta/TikTok rejection is replaced free in 24 hours; (4) you own 100% of the creatives forever. Proven on micro budgets — clients have closed deals off $15/day ad spend once the winning angle is in the batch.",
  top_stats: [
    "Up to 1000 finished ads per batch",
    "24-hour delivery — guaranteed",
    "1 teleprompter recording session",
    "Ready to upload to Meta, YouTube, TikTok",
  ],
  // No lead magnet — the offer is the magnet. Kept non-empty so script-gen
  // doesn't choke; phrased so any copy it generates around this field reads fine.
  lead_magnet_name: "None — the offer is the lead magnet",
  // Backend requires these — edit if wrong.
  contact_name: "Nolan Grout",
  contact_email: "nolan@prestyj.com",
  contact_phone: "0000000000",
};

const PAIN_POINTS: PainPointSolution[] = [
  // 1 — Creative fatigue kills winners faster than you can replace them
  {
    pain_point:
      "You finally found an ad that worked. It crushed for five days, the CPM doubled, and now it's dead — and you've got nothing queued up. Every week is another scramble for the next winner.",
    solution:
      "Up to 1000 ads in a single batch is months of rotation ammo. When one winner dies, the next is already warmed up and waiting. No more dead-ad panic, no more Monday scrambles.",
  },

  // 2 — The algorithm needs volume to converge on your buyer
  {
    pain_point:
      "Meta and TikTok's machine learning needs 20 to 50 fresh creatives a week to find your buyer. You're running 3 to 5. The algorithm never gets enough to converge — you're guessing, not testing.",
    solution:
      "1000 ads delivered in 24 hours feeds the algorithm exactly what it wants. You stop fighting the system and it starts doing the targeting work for you — because the creative variety is finally high enough.",
  },

  // 3 — Traditional production is too slow to matter
  {
    pain_point:
      "Every agency quote says 2 to 6 weeks per batch. By the time they deliver, the trend is dead, the hook is tired, and you're paying real money for last month's angles.",
    solution:
      "Delivered in 24 hours — guaranteed, or your next batch is free. Raw footage in one day, finished ads the next. You're always testing this week's ideas, never last month's.",
  },

  // 4 — Per-ad cost from agencies and UGC is prohibitive at volume
  {
    pain_point:
      "Agencies charge $500 to $2,000 per video. UGC creators charge $300 to $800. To test 1000 ads the traditional way costs half a million dollars — so most brands cap out at five and pray.",
    solution:
      "One flat fee for up to 1000 ads. The per-ad math drops from $500 to a fraction of that — and you own every clip forever, not rent it from a retainer.",
  },

  // 5 — You don't know your winning angle yet (proof: $15/day closed deals)
  {
    pain_point:
      "You've got 20 possible hooks, 10 personas, and 15 pain points in your head — but you're only testing three at a time. Finding the real winning angle takes six months of guessing at $5k–$10k a month in spend.",
    solution:
      "1000 different scripts tests every permutation in one sweep. Our clients have closed deals off $15/day ad spend once the winning angle was in the batch — because when the right angle exists, it works on pocket change. Find it in 72 hours, not six months.",
  },

  // 6 — Your creative pipeline is linear (editor/actor bottleneck)
  {
    pain_point:
      "One editor. One UGC creator. One shoot day. Every step of your creative pipeline is linear — you can only make ads as fast as your slowest human.",
    solution:
      "Our pipeline runs parallel. You record once off a teleprompter, we return the entire batch the next day. The bottleneck disappears — your creative output just jumped 100x without hiring anyone.",
  },

  // 7 — You're burning ad spend before you know what works
  {
    pain_point:
      "You burn $10k to $50k on Meta before you know what's working. By the time you've got a winner, the quarter's budget is gone and you're explaining the numbers to yourself at 2am.",
    solution:
      "The winning angle is already in the batch — you just need to let $15/day per ad show you which one. We've had clients close real deals on $15/day because the right hook only needs pocket-change testing. Scale after the data tells you to, not before.",
  },

  // 8 — Thin data means no real decisions (analysis paralysis)
  {
    pain_point:
      "Three ads with 200 impressions each isn't a test — it's a coin flip. You can't tell signal from noise, so you commit to the one that feels right and hope the gut-feel math works out.",
    solution:
      "1000 ads produces actual data. The top few percent jump off the dashboard and the losers are unmistakable. No more vibes, no more hoping — just math telling you exactly what to scale.",
  },

  // 9 — Competitors are out-iterating you into irrelevance
  {
    pain_point:
      "The top advertisers in your space are running 200+ live creatives. You're running four. The gap between you and them feels impossible to close without a creative team and a six-figure budget.",
    solution:
      "Close it in 24 hours. 1000 ads in a single batch puts you at the same creative cadence as the brands dominating your feed — without hiring a creative team, without a monthly retainer, without giving up ownership.",
  },

  // 10 — One dying winner = revenue cliff with no backup
  {
    pain_point:
      "You scaled a winning ad to $1k/day. It fatigued. Revenue cliffed. Panic mode, back to scrambling for the next thing with nothing queued up and no time to build a bench.",
    solution:
      "A batch of 1000 IS the bench. When one winner fatigues, you've got 999 more waiting — no cliffs, just graceful handoffs between angles. And you own every one of them forever, so the bench is yours whether we work together again or not.",
  },
];

function parseArgs() {
  const args = process.argv.slice(2);
  const opts = {
    count: 5,
    pains: null as number[] | null,
    list: false,
    dryRun: false,
  };
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === "--count") opts.count = parseInt(args[++i], 10);
    else if (arg === "--pains") opts.pains = args[++i].split(",").map((n) => parseInt(n, 10));
    else if (arg === "--list") opts.list = true;
    else if (arg === "--dry-run") opts.dryRun = true;
    else if (arg === "--help" || arg === "-h") {
      printHelp();
      process.exit(0);
    }
  }
  return opts;
}

function printHelp() {
  console.log(`
Generate promo scripts for Prestyj's batch-video-ads service.

Usage:
  npm run gen-scripts                      # 5 random pain points (Pro tier)
  npm run gen-scripts -- --count 10        # 10 random (Max tier)
  npm run gen-scripts -- --count 3         # 3 random (Minimum tier)
  npm run gen-scripts -- --pains 1,4,7,12  # specific pains by 1-based index
  npm run gen-scripts -- --list            # print the library and exit
  npm run gen-scripts -- --dry-run         # build payload, don't call API
`);
}

function shuffle<T>(arr: T[]): T[] {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

function pickPains(count: number, explicit: number[] | null): PainPointSolution[] {
  if (explicit) {
    return explicit.map((i) => {
      const p = PAIN_POINTS[i - 1];
      if (!p) throw new Error(`Pain point index ${i} out of range (1-${PAIN_POINTS.length})`);
      return p;
    });
  }
  if (count > PAIN_POINTS.length) {
    throw new Error(`Requested ${count} pains but library only has ${PAIN_POINTS.length}`);
  }
  return shuffle(PAIN_POINTS).slice(0, count);
}

async function generateScripts(pains: PainPointSolution[]): Promise<string> {
  const payload = {
    business_name: PRESTYJ.business_name,
    target_audience: PRESTYJ.target_audience,
    pain_points_solutions: pains,
    offer: PRESTYJ.offer,
    lead_magnet: PRESTYJ.lead_magnet_name,
    top_stats: PRESTYJ.top_stats,
    website_url: PRESTYJ.website_url,
    contact_name: PRESTYJ.contact_name,
    contact_email: PRESTYJ.contact_email,
    contact_phone: PRESTYJ.contact_phone,
  };

  console.log(`→ POST ${SCRIPT_GEN_URL}`);
  const res = await fetch(SCRIPT_GEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    signal: AbortSignal.timeout(30000),
  });

  if (res.status !== 202) {
    const body = await res.text().catch(() => "");
    throw new Error(`Script API returned ${res.status}: ${body}`);
  }

  const job = await res.json();
  const statusUrl: string | undefined = job.status_url;
  if (!statusUrl) throw new Error("Missing status_url in job response");

  console.log(`→ polling ${statusUrl}`);
  const deadline = Date.now() + 300_000;
  let attempt = 0;
  while (Date.now() < deadline) {
    await new Promise((r) => setTimeout(r, 5000));
    attempt++;
    const statusRes = await fetch(statusUrl, { signal: AbortSignal.timeout(10000) });
    if (!statusRes.ok) {
      process.stdout.write(`  attempt ${attempt}: HTTP ${statusRes.status}\n`);
      continue;
    }
    const state = await statusRes.json();
    process.stdout.write(`  attempt ${attempt}: ${state.status}\n`);
    if (state.status === "completed") return state.markdown || "";
    if (state.status === "failed") throw new Error(state.error || "Script generation failed");
  }
  throw new Error("Script generation timed out after 5 minutes");
}

async function main() {
  const opts = parseArgs();

  if (opts.list) {
    console.log(`\nPain Point Library (${PAIN_POINTS.length} total):\n`);
    PAIN_POINTS.forEach((p, i) => {
      console.log(`${String(i + 1).padStart(2)}. ${p.pain_point}`);
      console.log(`    → ${p.solution}\n`);
    });
    return;
  }

  const pains = pickPains(opts.count, opts.pains);

  console.log(`\nUsing ${pains.length} pain point${pains.length === 1 ? "" : "s"}:\n`);
  pains.forEach((p, i) => {
    const idx = PAIN_POINTS.indexOf(p) + 1;
    console.log(`  [${idx}] ${p.pain_point.slice(0, 90)}${p.pain_point.length > 90 ? "..." : ""}`);
  });
  console.log();

  if (opts.dryRun) {
    console.log("--dry-run: skipping API call");
    return;
  }

  const markdown = await generateScripts(pains);

  mkdirSync(OUTPUT_DIR, { recursive: true });
  const ts = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
  const outPath = join(OUTPUT_DIR, `prestyj-scripts-${ts}.md`);
  writeFileSync(outPath, markdown, "utf8");

  console.log(`\n✓ Saved to ${outPath}\n`);
  console.log("─".repeat(60));
  console.log(markdown);
  console.log("─".repeat(60));
}

main().catch((err) => {
  console.error("\n✗", err instanceof Error ? err.message : err);
  process.exit(1);
});
