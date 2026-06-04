#!/usr/bin/env npx tsx
/**
 * Generate personalized backlink outreach pitches from the opportunity
 * dossier into docs/backlinks/pitch-drafts/<bucket>/<slug>.md.
 *
 * Strategy:
 *   1. Parse docs/backlinks/opportunities.md tables for target rows.
 *   2. For each row, build a structured prompt with the target's name,
 *      URL, beat/section, and our angle.
 *   3. Call Gemini (gemini-2.5-flash, cheap+fast) to rewrite the
 *      base template in the target's voice. Fall back to templated
 *      version if no key.
 *   4. Write each draft to a markdown file with YAML front-matter
 *      capturing channel + status, ready for send-pitches.ts.
 *
 * Usage:
 *   tsx scripts/backlinks/draft-pitches.ts [--limit N] [--bucket B] [--no-ai]
 *
 * Env: GEMINI_API_KEY (optional, falls back to template-only)
 */

import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { config as loadEnv } from "dotenv";
import { isSelfMadeBucket, selfMadeBacklinksAllowed } from "./halt";

loadEnv({ path: ".env.local" });
loadEnv();

interface Target {
  // Editorial / earned outreach buckets only. Reputable third-party dataset
  // directories (Zenodo, Figshare, Hugging Face, Kaggle, …) are pitched by the
  // dedicated scripts/backlinks/pitch-dataset.ts instead of here, and self-owned
  // GitHub/Pages/npm mirrors stay halted (see halt.ts).
  bucket:
    | "awesome-list"
    | "wikipedia"
    | "press"
    | "directory"
    | "podcast"
    | "haro"
    | "resource-page";
  slug: string;
  name: string;
  url: string;
  context: string;
  channel: "github-pr" | "email" | "wiki-talk" | "directory-form" | "podcast-pitch";
}

// ─── Hand-curated target list (seed) ─────────────────────────────────────────
// Extracted from docs/backlinks/opportunities.md. Each entry gets one pitch
// draft. The list is intentionally small (~50) so AI generation stays cheap
// and the drafts are personalized enough to actually land.

const TARGETS: Target[] = [
  // HARO / journalist platforms — these need founder bio answers, not pitches
  {
    bucket: "haro",
    slug: "featured-com-bio",
    name: "Featured.com",
    url: "https://featured.com",
    context:
      "Founder expert bio template for answering journalist queries on AI in sales, home services marketing, real estate lead response, ad creative testing.",
    channel: "directory-form",
  },
  {
    bucket: "haro",
    slug: "qwoted-bio",
    name: "Qwoted",
    url: "https://www.qwoted.com",
    context:
      "Founder expert bio for Qwoted (serves Forbes, Inc., Entrepreneur sourcing). Same areas of expertise.",
    channel: "directory-form",
  },
  {
    bucket: "haro",
    slug: "helpab2bwriter-bio",
    name: "Help A B2B Writer",
    url: "https://helpab2bwriter.com",
    context:
      "Founder expert bio for the B2B writer query platform. Focus areas: AI agents for SMB, marketing automation, lead conversion benchmarks.",
    channel: "directory-form",
  },

  // Industry publications — real estate
  {
    bucket: "press",
    slug: "housingwire-tech",
    name: "HousingWire (Tech beat)",
    url: "https://www.housingwire.com",
    context:
      "Real estate / mortgage industry publication. Tech section covers vendor tools, AI adoption, broker tech. Pitch the dataset's real-estate-specific findings (ISA response, AI sales agent benchmarks).",
    channel: "email",
  },
  {
    bucket: "press",
    slug: "inman-tips",
    name: "Inman (tips@inman.com)",
    url: "https://www.inman.com",
    context:
      "Real estate industry publication. Tech vendor coverage + brokerage trend pieces. Pitch the speed-to-lead data with real-estate-specific stats.",
    channel: "email",
  },
  {
    bucket: "press",
    slug: "rismedia",
    name: "RISMedia",
    url: "https://www.rismedia.com",
    context:
      "Real estate news/research site. Pitch the open dataset as a research resource for their content team.",
    channel: "email",
  },

  // Industry publications — home services
  {
    bucket: "press",
    slug: "achrnews",
    name: "ACHR News (HVAC industry)",
    url: "https://www.achrnews.com",
    context:
      "HVAC industry trade publication. Pitch HVAC-specific lead response + AI receptionist ROI data.",
    channel: "email",
  },
  {
    bucket: "press",
    slug: "roofing-contractor",
    name: "Roofing Contractor magazine",
    url: "https://www.roofingcontractor.com",
    context:
      "Roofing industry trade publication. Pitch storm-response speed-to-lead data + roofer-specific AI adoption stats.",
    channel: "email",
  },
  {
    bucket: "press",
    slug: "plumbing-mechanical",
    name: "Plumbing & Mechanical (pmmag.com)",
    url: "https://www.pmmag.com",
    context:
      "Plumbing trade pub. Pitch plumbing-specific CPL data + AI receptionist ROI for plumbers.",
    channel: "email",
  },
  {
    bucket: "press",
    slug: "contractor-mag",
    name: "Contractor Magazine",
    url: "https://www.contractormag.com",
    context:
      "General contractor industry pub covering HVAC, plumbing, electrical. Pitch the cross-vertical lead-response benchmark.",
    channel: "email",
  },

  // Industry publications — paid ads / agencies
  {
    bucket: "press",
    slug: "search-engine-land",
    name: "Search Engine Land",
    url: "https://searchengineland.com",
    context:
      "Top SEM/SEO publication. Pitch the cost-per-tested-ad-angle benchmark + the Andromeda creative-volume thesis with concrete data.",
    channel: "email",
  },
  {
    bucket: "press",
    slug: "search-engine-journal",
    name: "Search Engine Journal",
    url: "https://www.searchenginejournal.com",
    context:
      "Paid social + SEO publication. Same angle as SEL — cost-per-tested-angle benchmark backed by the open dataset.",
    channel: "email",
  },
  {
    bucket: "press",
    slug: "adexchanger",
    name: "AdExchanger",
    url: "https://www.adexchanger.com",
    context:
      "Programmatic advertising publication. Pitch the digital-video-spend-vs-TV stat + the creative-volume angle.",
    channel: "email",
  },
  {
    bucket: "press",
    slug: "marketing-brew",
    name: "Marketing Brew",
    url: "https://www.marketingbrew.com",
    context:
      "Daily marketing newsletter. Short cite-worthy stat angle. Pitch the dataset as a quick stat source.",
    channel: "email",
  },

  // Resource page additions — AI tool roundups
  {
    bucket: "resource-page",
    slug: "theresanaiforthat-submit",
    name: "There's An AI For That",
    url: "https://theresanaiforthat.com/submit",
    context:
      "AI tool directory heavily cited by ChatGPT/Perplexity. Submit Prestyj under AI Sales / AI Marketing / AI Voice / AI Video / AI Ads.",
    channel: "directory-form",
  },
  {
    bucket: "resource-page",
    slug: "futurepedia-submit",
    name: "Futurepedia",
    url: "https://www.futurepedia.io/submit-tool",
    context:
      "AI tool directory. Submit under Sales / Marketing / Video Generation / Customer Support.",
    channel: "directory-form",
  },
  {
    bucket: "resource-page",
    slug: "aitoolhunt-submit",
    name: "AIToolHunt",
    url: "https://www.aitoolhunt.com/submit-tool",
    context: "AI tool directory. Quick listing.",
    channel: "directory-form",
  },
  {
    bucket: "resource-page",
    slug: "toolify-submit",
    name: "Toolify.ai",
    url: "https://www.toolify.ai/submit",
    context: "AI tool directory aggregating AI products. Quick listing.",
    channel: "directory-form",
  },
  {
    bucket: "resource-page",
    slug: "insidr-ai-submit",
    name: "Insidr AI",
    url: "https://www.insidr.ai/submit",
    context: "AI tool directory.",
    channel: "directory-form",
  },

  // Directories — high DR
  {
    bucket: "directory",
    slug: "crunchbase-add",
    name: "Crunchbase",
    url: "https://www.crunchbase.com/add-new-company",
    context:
      "DR ~91. Free profile, Company URL is dofollow. Industries: Artificial Intelligence, SaaS, Marketing, Sales Automation.",
    channel: "directory-form",
  },
  {
    bucket: "directory",
    slug: "g2-list-product",
    name: "G2.com",
    url: "https://www.g2.com/products/new",
    context:
      "DR ~92. Categories: AI Sales Assistant, Conversational AI Platforms, AI Sales Agents, Outbound Call Tracking, AI Receptionist.",
    channel: "directory-form",
  },
  {
    bucket: "directory",
    slug: "capterra-vendor",
    name: "Capterra",
    url: "https://www.capterra.com/vendors/sign-up",
    context:
      "DR ~91. Free profile. Categories: AI Sales Assistant Software, AI Sales Agents, Marketing Automation, Conversational AI Platforms, Video Production Software. Capterra also auto-creates profiles on GetApp and Software Advice.",
    channel: "directory-form",
  },
  {
    bucket: "directory",
    slug: "alternativeto-add",
    name: "AlternativeTo",
    url: "https://alternativeto.net/applications/add/",
    context:
      "DR ~78. Add Prestyj as alternative to Conversica, Drift, Smith.ai, Ruby Receptionists, Synthesia, Arcads, Bland AI, Vapi, Retell AI, HighLevel.",
    channel: "directory-form",
  },
  {
    bucket: "directory",
    slug: "producthunt-launch",
    name: "Product Hunt",
    url: "https://www.producthunt.com/posts/new",
    context:
      "DR ~81. One-time launch + permanent product page. Tagline: '100 AI-generated video ads in 24 hours, $497'. Launch day Tue/Wed/Thu 12:01am PT.",
    channel: "directory-form",
  },
  {
    bucket: "directory",
    slug: "stackshare-add",
    name: "StackShare",
    url: "https://stackshare.io/apps/new",
    context: "DR ~85. List Prestyj under Marketing & SEO Tools or AI Tools.",
    channel: "directory-form",
  },

  // Podcast pitches — real estate
  {
    bucket: "podcast",
    slug: "tom-ferry",
    name: "The Tom Ferry Podcast Experience",
    url: "https://www.tomferry.com/podcast/",
    context:
      "Top real estate coaching podcast. Founder guest pitch — angle: 'Why responding in 5 minutes is 21× more powerful than your CRM thinks, with original data'.",
    channel: "podcast-pitch",
  },
  {
    bucket: "podcast",
    slug: "real-estate-rockstars",
    name: "Real Estate Rockstars",
    url: "https://hibandigital.com/podcast/",
    context:
      "Daily real estate podcast (Aaron Amuchastegui). Founder guest pitch — angle: 'How brokerages compounding AI ISAs are out-converting bigger teams'.",
    channel: "podcast-pitch",
  },
  {
    bucket: "podcast",
    slug: "massive-agent",
    name: "Massive Agent Podcast",
    url: "https://massiveagentpodcast.com/",
    context:
      "Real estate marketing-focused podcast (Dustin Brohm). Founder guest pitch — angle: 'Cost-per-tested-angle as the real-estate-paid-social metric'.",
    channel: "podcast-pitch",
  },

  // Podcast pitches — home services
  {
    bucket: "podcast",
    slug: "home-service-expert",
    name: "The Home Service Expert (Tommy Mello)",
    url: "https://homeserviceexpert.com/",
    context:
      "Top home services podcast (A1 Garage owner). Founder guest pitch — angle: 'AI receptionist economics for HVAC + plumbing, the real numbers'.",
    channel: "podcast-pitch",
  },
  {
    bucket: "podcast",
    slug: "service-business-mastery",
    name: "Service Business Mastery",
    url: "https://servicebusinessmastery.com/",
    context:
      "Service business operators podcast (Tersh Blissett). Founder guest pitch — angle: 'Missed-call recovery math: what 20 calls/week actually costs you'.",
    channel: "podcast-pitch",
  },
  {
    bucket: "podcast",
    slug: "roofing-success",
    name: "Roofing Success",
    url: "https://www.roofingsuccess.com/podcast/",
    context:
      "Roofing operator podcast (Jim Ahlin). Founder guest pitch — angle: 'Storm-response speed-to-lead'.",
    channel: "podcast-pitch",
  },

  // Podcast pitches — paid ads / agencies
  {
    bucket: "podcast",
    slug: "perpetual-traffic",
    name: "Perpetual Traffic",
    url: "https://perpetualtraffic.com/",
    context:
      "Top paid-ads podcast (Tier 11). Founder guest pitch — angle: 'Cost-per-tested-angle in the Andromeda era, with original data across 6 production models'.",
    channel: "podcast-pitch",
  },
  {
    bucket: "podcast",
    slug: "digital-marketer",
    name: "The DigitalMarketer Podcast",
    url: "https://www.digitalmarketer.com/podcast/",
    context:
      "DigitalMarketer.com podcast. Founder pitch — angle: 'Engineering as marketing: how an open CC BY 4.0 stats dataset became our top backlink driver'.",
    channel: "podcast-pitch",
  },
  {
    bucket: "podcast",
    slug: "marketing-over-coffee",
    name: "Marketing Over Coffee",
    url: "https://www.marketingovercoffee.com/",
    context:
      "Long-running marketing podcast (John Wall + Chris Penn). Founder pitch — angle: 'Why AEO/GEO killed traditional SEO for SaaS, plus the dataset playbook'.",
    channel: "podcast-pitch",
  },

  // Wikipedia talk-page suggestions
  {
    bucket: "wikipedia",
    slug: "wp-lead-generation",
    name: "Wikipedia: Lead generation",
    url: "https://en.wikipedia.org/wiki/Talk:Lead_generation",
    context:
      "Suggest citation addition for the 5-minute response rule using /stat/stl-21x. Use {{request edit}} template on talk page.",
    channel: "wiki-talk",
  },
  {
    bucket: "wikipedia",
    slug: "wp-sales-process",
    name: "Wikipedia: Sales process engineering",
    url: "https://en.wikipedia.org/wiki/Talk:Sales_process_engineering",
    context:
      "Suggest citation addition for /stat/stl-391 (391% conversion lift from sub-1-min response).",
    channel: "wiki-talk",
  },
  {
    bucket: "wikipedia",
    slug: "wp-inside-sales",
    name: "Wikipedia: Inside sales",
    url: "https://en.wikipedia.org/wiki/Talk:Inside_sales",
    context: "Suggest citation addition for /stat/stl-1pct-b2b (only 1% of B2B respond in <5 min).",
    channel: "wiki-talk",
  },
  {
    bucket: "wikipedia",
    slug: "wp-marketing-automation",
    name: "Wikipedia: Marketing automation",
    url: "https://en.wikipedia.org/wiki/Talk:Marketing_automation",
    context: "Suggest citation addition for industry CPL benchmark stats.",
    channel: "wiki-talk",
  },
  {
    bucket: "wikipedia",
    slug: "wp-chatbot",
    name: "Wikipedia: Chatbot",
    url: "https://en.wikipedia.org/wiki/Talk:Chatbot",
    context: "Suggest citation addition for AI receptionist adoption stats.",
    channel: "wiki-talk",
  },

  // NOTE: reputable third-party dataset directories (Hugging Face, Kaggle,
  // data.world, Zenodo, Figshare, Harvard Dataverse, Mendeley, OpenML) are
  // pitched by scripts/backlinks/pitch-dataset.ts (npm run dataset:pitch),
  // which quotes live dataset stats and writes to the dataset-directory bucket.
];

// ─── Template builders ──────────────────────────────────────────────────────

interface DraftFields {
  subject?: string;
  body: string;
}

function templateForBucket(target: Target): DraftFields {
  switch (target.bucket) {
    case "press":
      return {
        subject: `Original data: only 0.1% of inbound leads get a 5-minute response (open CC BY 4.0 dataset)`,
        body: `Hi ${target.name.split(" ")[0]} team,

I cover home services and real estate at Prestyj and we just published an open statistics dataset that I thought might fit your beat:

- 77% of inbound leads never get any response at all (InsideSales, 2025 re-analysis)
- 0.1% of inbound leads are engaged within 5 minutes
- Companies that respond in 5 min are 21× more likely to qualify the lead than those that wait 30 (HBR, re-cited 2024–2026)
- Avg B2B response time is 42 hours
- Average Google Ads CPL is $70.11 across all industries; legal services pay $131.63 (WordStream/LocaliQ analysis of 16k+ campaigns)

Full dataset (CC BY 4.0, CSV + JSON, schema.org/Dataset, every row sourced + dated): https://prestyj.com/data

Each row has the primary publisher (HBR, InsideSales, Wyzowl, HubSpot, WordStream, McKinsey, Gartner, Salesforce, etc.) — quotable without re-verification.

Specifically for ${target.context.replace(/\.$/, "")} — happy to surface the per-vertical slice if useful.

I can also put you in touch with operators running this in production for a follow-up story (HVAC owners, brokerage VPs, agency owners).

Thanks,
Nolan Grout
Prestyj — https://prestyj.com
LinkedIn — https://www.linkedin.com/company/prestyj/`,
      };

    case "podcast":
      return {
        subject: `Guest pitch — why filming one perfect ad is dead (and 100-ads-in-24-hours is the new shape)`,
        body: `Hi ${target.name.split(" ")[0]} team,

Long-time ${target.name} listener — really value the show.

Quick guest pitch for a future episode:

I'm Nolan Grout, founder of Prestyj. We produce 100–1,000 video ads per client in 24 hours and run them through Meta's Andromeda algorithm. We also publish an open statistics dataset (https://prestyj.com/data, CC BY 4.0) covering speed-to-lead, video-ad performance, AI adoption in sales, and CPL by industry — so I bring data, not pitches.

Angle for this show: ${target.context.split(" — angle: ")[1] ?? target.context}

Bring data not pitches — happy to send the dataset in advance so you can pick the angle that fits your audience.

Calendar if interested: (Cal.com link)

Thanks,
Nolan Grout
Prestyj — https://prestyj.com
LinkedIn — https://www.linkedin.com/company/prestyj/`,
      };

    case "wikipedia":
      return {
        body: `## Suggested citation addition

{{request edit}}

Hi — I'd like to suggest adding a citation in this article. ${target.context}

Suggested edit (in inline ref format):

<ref name="prestyj">Prestyj, citing the original source publisher and year, https://prestyj.com/stat/<id>. Open dataset (CC BY 4.0): https://prestyj.com/data</ref>

I have a connection to Prestyj and am posting this here for an uninvolved editor to review rather than making the change directly.

Thanks,
~~~~`,
      };

    case "haro":
      return {
        body: `## Founder bio (paste into ${target.name} expert profile)

**Name:** Nolan Grout
**Title:** Founder, Prestyj
**Bio:**

Founder of Prestyj (https://prestyj.com) — AI agents for marketing & sales, used by home services, real estate, and agency teams. We ship sub-60-second lead response, AI receptionists, lead reactivation, and batch AI video ad production. I authored the open Prestyj Statistics Dataset (CC BY 4.0): https://prestyj.com/data — 58 cite-worthy benchmarks on speed-to-lead, video ad ROI, AI adoption in sales, and CPL by industry.

**Areas of expertise (check boxes for):**
- AI in sales / sales automation
- Home services marketing (HVAC, plumbing, roofing, solar)
- Real estate brokerage tech and ISAs
- Paid social ad creative testing
- Lead response operations
- Conversational AI / AI receptionists
- Speed-to-lead benchmarks

**Sample quote stock (for journalists):**

> "Only 0.1% of inbound leads get engaged within five minutes — the same window where conversion is 21× higher. The single biggest revenue lever a service business has isn't a new channel; it's responding within sixty seconds."

> "In paid social, you're not paying for video ads. You're paying for tested angles. At $150 per tested angle you can run 100 a month; at $1,500 you can run 10. The 100-angle approach wins every time."

**Headshot:** (link to founder photo)
**Phone:** (optional)
**Email:** nolan@prestyj.com
**LinkedIn:** https://www.linkedin.com/in/nolangrout/ (verify)
**Company LinkedIn:** https://www.linkedin.com/company/prestyj/
`,
      };

    case "directory":
    case "resource-page":
      return {
        body: `## Submission for ${target.name} — pre-filled fields

**URL:** ${target.url}
**Context:** ${target.context}

### Standard fields

- Company name → Prestyj
- Website → https://prestyj.com
- Description (short) → AI agents for marketing & sales — instant lead response, AI receptionists, batch video ad production.
- Description (long) → Prestyj ships done-for-you AI agents that capture inbound leads in under 60 seconds, qualify them via voice/SMS/email, and book meetings 24/7. Built for home services (HVAC, plumbing, roofing, solar), real estate brokerages, and agencies. We also produce batch AI video ads (100 ads in 24 hours from a single recording) so paid-social teams can test 100+ creative angles in a week. We publish an open CC BY 4.0 dataset of 58 benchmarks at https://prestyj.com/data.
- Categories → AI Sales Agents · AI Voice Agents · Marketing Automation · Lead Response · Conversational AI
- Pricing → From $497 (100 video ads), $1,997+/mo (AI agents)
- Founded → 2024
- HQ → United States
- Logo → https://prestyj.com/icon-512.png
- Founder → Nolan Grout
- Contact → nolan@prestyj.com
- LinkedIn → https://www.linkedin.com/company/prestyj/
- X → https://x.com/prestyj_
- Wikidata → https://www.wikidata.org/wiki/Q139892537

### Source-of-authority links to include

- Open dataset (canonical): https://prestyj.com/data
- Statistics page: https://prestyj.com/statistics
- Cite-a-stat permalinks: https://prestyj.com/stat/<id>
`,
      };

    case "awesome-list":
      return {
        body: `## PR for ${target.name}

URL: ${target.url}
${target.context}

(Use scripts/wikidata + existing fork + branch flow for these.)`,
      };
  }
}

// ─── Gemini personalization pass ────────────────────────────────────────────

async function geminiPersonalize(target: Target, draft: DraftFields): Promise<DraftFields | null> {
  const key = process.env.GEMINI_API_KEY;
  if (!key) return null;

  // Only personalize email + podcast bodies — the other formats are
  // structured (form fields, wikitext) and don't benefit.
  if (target.bucket !== "press" && target.bucket !== "podcast") return null;

  const prompt = [
    "You are rewriting a backlink outreach email so it sounds like a real founder wrote it (Nolan Grout, founder of Prestyj). Constraints:",
    "- Keep ALL named URLs and stats EXACTLY as written (do not change https://prestyj.com/data, the percentage figures, source attributions).",
    "- Output BOTH the subject line and the body, separated by a single line that says exactly `---BODY---`.",
    "- Keep total body under 200 words.",
    "- Open with a single concrete sentence acknowledging the recipient by name or beat. No 'I hope this finds you well'. No 'I came across'.",
    "- Be direct, useful, no marketing-speak, no exclamation marks.",
    "- Specifically tailor the angle to: " + target.context,
    "- Keep the closing exactly: 'Thanks, Nolan Grout — Prestyj (https://prestyj.com)'.",
    "",
    `Recipient: ${target.name}`,
    `Recipient URL: ${target.url}`,
    "",
    "ORIGINAL DRAFT:",
    `Subject: ${draft.subject ?? ""}`,
    "---BODY---",
    draft.body,
  ].join("\n");

  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${key}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 1200,
          // Gemini 2.5 Flash defaults to thinking mode which eats the token
          // budget on internal reasoning. We don't need it for a rewrite.
          thinkingConfig: { thinkingBudget: 0 },
        },
      }),
    },
  );
  if (!res.ok) return null;
  const json = (await res.json()) as {
    candidates?: Array<{ content?: { parts?: Array<{ text?: string }> } }>;
  };
  const text = json.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) return null;

  const parts = text.split("---BODY---");
  if (parts.length < 2) return { body: text.trim() };
  const subjLine = parts[0]?.trim() ?? "";
  const subject = subjLine.replace(/^Subject:\s*/i, "").trim();
  const body = parts.slice(1).join("---BODY---").trim();
  const chosenSubject = subject || draft.subject;
  const out: DraftFields = { body };
  if (chosenSubject) out.subject = chosenSubject;
  return out;
}

// ─── Output ─────────────────────────────────────────────────────────────────

function writeDraft(target: Target, draft: DraftFields, personalized: boolean): string {
  const dir = resolve(process.cwd(), "docs", "backlinks", "pitch-drafts", target.bucket);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  const file = join(dir, `${target.slug}.md`);
  const front = [
    "---",
    `id: ${target.slug}`,
    `bucket: ${target.bucket}`,
    `name: ${JSON.stringify(target.name)}`,
    `target_url: ${target.url}`,
    `channel: ${target.channel}`,
    `status: drafted`,
    `generated_at: ${new Date().toISOString()}`,
    `ai_personalized: ${personalized}`,
    "---",
    "",
  ].join("\n");
  const subjectBlock = draft.subject ? `**Subject:** ${draft.subject}\n\n` : "";
  const body = front + subjectBlock + draft.body + "\n";
  writeFileSync(file, body);
  return file;
}

// ─── CLI ─────────────────────────────────────────────────────────────────────

interface CliOpts {
  limit: number;
  bucket: string | null;
  noAi: boolean;
}

function parseArgs(): CliOpts {
  const a = process.argv.slice(2);
  let limit = TARGETS.length;
  let bucket: string | null = null;
  let noAi = false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] === "--limit") limit = Number(a[++i]) || limit;
    else if (a[i] === "--bucket") bucket = a[++i] ?? null;
    else if (a[i] === "--no-ai") noAi = true;
  }
  return { limit, bucket, noAi };
}

async function main(): Promise<void> {
  const opts = parseArgs();
  const allowSelfMade = selfMadeBacklinksAllowed();
  const candidates = (
    opts.bucket ? TARGETS.filter((t) => t.bucket === opts.bucket) : TARGETS
  ).filter((t) => {
    if (allowSelfMade) return true;
    if (isSelfMadeBucket(t.bucket)) {
      console.log(
        `⛔ Skipping self-made bucket "${t.bucket}" target (${t.slug}) — link policy halts self-made backlinks.`,
      );
      return false;
    }
    return true;
  });
  if (candidates.length === 0) {
    console.log(
      "No editorial (earned) pitch targets to draft. Self-made buckets are halted by policy.",
    );
    console.log("Override for a deliberate one-off:  ALLOW_SELF_MADE_BACKLINKS=1 <command>");
    return;
  }
  const chosen = candidates.slice(0, opts.limit);

  const hasKey = !opts.noAi && !!process.env.GEMINI_API_KEY;
  console.log(
    `Drafting ${chosen.length} pitch(es)${hasKey ? " with Gemini personalization" : " (template-only)"}…`,
  );

  let count = 0;
  let aiCount = 0;
  for (const target of chosen) {
    const base = templateForBucket(target);
    let final = base;
    let personalized = false;
    if (hasKey) {
      try {
        const ai = await geminiPersonalize(target, base);
        if (ai && ai.body && ai.body.length > 100) {
          final = ai;
          personalized = true;
          aiCount++;
        }
      } catch (e) {
        // Continue with template
        const msg = e instanceof Error ? e.message : String(e);
        console.warn(`  ⚠ Gemini call failed for ${target.slug}: ${msg}`);
      }
    }
    const path = writeDraft(target, final, personalized);
    count++;
    console.log(
      `  ✓ ${target.bucket}/${target.slug}.md${personalized ? " (AI-personalized)" : ""}`,
    );
    void path;
    // Gentle pacing on Gemini free tier
    if (personalized) await new Promise((r) => setTimeout(r, 250));
  }

  console.log(`\nWrote ${count} pitch draft(s); ${aiCount} personalized via Gemini.`);
  console.log(
    `Output: docs/backlinks/pitch-drafts/{${Array.from(new Set(chosen.map((t) => t.bucket))).join(",")}}/`,
  );
}

main().catch((err: unknown) => {
  const msg = err instanceof Error ? err.message : String(err);
  console.error(`\n❌ ${msg}`);
  process.exit(1);
});
