# Offer Tournament — Top-of-Funnel Bracket

**Simulation:** 01
**Date:** 2026-05-15
**ICP:** Local service business owners doing **$3M+/yr revenue** (HVAC, roofing, plumbing, multi-rooftop home services; secondary: $3M+ real estate teams already running paid). Owner-operator or owner + small ops team. Already buying ads or willing to.
**Goal:** Rank Prestyj's six candidate top-of-funnel offers head-to-head and pick the top 3 to advance into the Angle × ICP simulation.

> **Important framing.** Prestyj does not currently run all six offers in pure form. The candidates below map to **what's actually on the site** (so the tournament reflects real options, not hypotheticals). Each candidate row shows the candidate name → the closest live equivalent on prestyj.com.

---

## 1. Candidate Mapping (abstract offer → what actually exists)

| #   | Tournament Candidate                     | Closest Live Prestyj Offer                                                                                                                                                                                                                      | Status                                                                                                                            |
| --- | ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| O1  | Free AI video ad sample                  | **Founding Cohort** — 300 free scripted vertical ads ($1,497 value) for 5 businesses in exchange for testimonial + Google review + 14-day spend commitment. Also a softer cousin: `/free-ads` ("300 free ads when you start a $1,997/mo plan"). | **Live.** `/founding-cohort`, `/free-ads`, `/free-ads/hvac`, `/free-ads/roofers`, `/free-ads/plumbers`, `/free-ads/contractors`.  |
| O2  | ROI calculator → personalized report     | **AI Call Handling ROI Calculator** (HVAC/plumbing tilt) + **Real Estate ROI Calculator** (RE tilt). Result page stores inputs in sessionStorage, shows ROI, CTAs to book demo.                                                                 | **Live.** `/ai-call-handling-calculator`, `/real-estate-roi-calculator`, `/team-commission-calculator`, `/ai-calculator-results`. |
| O3  | "Steal our top-performing ad" swipe file | **Not live in pure form.** Closest analogue is the **batch sample reel** embedded on `/free-ads` (Vimeo 1169158190) and `video-ad-samples/` portfolio. There is no gated "swipe file" PDF.                                                      | **Hypothetical** — scored as if launched.                                                                                         |
| O4  | Free competitor teardown                 | **Not live as an offer.** Static comparison content exists (`/compare/*`, `/alternatives/[slug]`) but it's SEO, not a personalized teardown lead-gen flow.                                                                                      | **Hypothetical** — scored as if launched as a 1:1 personalized teardown.                                                          |
| O5  | Industry-specific lead magnet            | **Live.** `/lead-magnet` hub + 4 magnets: Brokerage Playbook, Roofing 24/7 Lead Response Playbook, QualVol Content Playbook, Reactivate Dead Leads (live AI call — this one is a _demo_, not a PDF).                                            | **Live.** `/lead-magnet/{brokerage,roofing,qualvol,reactivate-leads}-playbook`.                                                   |
| O6  | Guaranteed-leads trial                   | **Not live.** The Starter plan ($3,997 setup + $1,997/mo, no contract) is the closest paid trial. No risk-reversed "X leads or your money back".                                                                                                | **Hypothetical** — scored as if launched as 14-day or "first 10 leads or refund" trial.                                           |

The pricing/identity context the tournament has to respect:

- Lowest paid offer is **$497** (100-ad batch, `/batch-video-ads`).
- Lowest _plan_ is **$3,997 setup + $1,997/mo** (Starter).
- Hero is `/batch-video-ads` ($497, 100 ads, 24h).
- Hottest current top-of-funnel push is the **Founding Cohort** (5 spots, free $1,497 batch in exchange for case study).

---

## 2. Assumptions Table

Numbers are explicit, conservative, and tied to the $3M+ local-service ICP. They're informed by typical home-services paid-ads benchmarks, not internal Prestyj data (we don't have CPL/book-rate logs in the repo). Treat every number as a default to be replaced when real funnel data exists.

| #   | Assumption                                                | Default Value                                                          | Notes / Source                                                 |
| --- | --------------------------------------------------------- | ---------------------------------------------------------------------- | -------------------------------------------------------------- |
| A1  | Cold traffic CPM (FB/IG/YouTube, US, home services)       | $18–$30                                                                | Mid-market home-services range.                                |
| A2  | Cold landing-page CTR                                     | 1.0–1.8%                                                               | Decent video-led LP.                                           |
| A3  | Opt-in rate (email-only PDF)                              | 25–40%                                                                 | Industry lead magnet baseline.                                 |
| A4  | Opt-in rate (multi-field form w/ ad spend & phone)        | 8–15%                                                                  | Higher-intent, more friction.                                  |
| A5  | Opt-in rate (calculator with multi-step inputs)           | 12–22%                                                                 | Interactive lifts vs PDF for B2B.                              |
| A6  | Opt-in rate (free-batch / "guaranteed leads" application) | 4–9%                                                                   | Application-style + qualifying = lower opt-in, higher quality. |
| A7  | Lead → demo-booked rate (low-intent magnet)               | 3–7%                                                                   | Cold PDF download → call is brutal.                            |
| A8  | Lead → demo-booked rate (mid-intent calculator)           | 10–20%                                                                 | ROI number on screen is a strong CTA.                          |
| A9  | Lead → demo-booked rate (high-intent application/trial)   | 35–55%                                                                 | They already self-qualified.                                   |
| A10 | Demo → close rate at $3,997 setup + $1,997/mo             | 20–35%                                                                 | Owner-operator, $3M+ rev, pre-qualified.                       |
| A11 | Avg first-year ACV (Starter assumed)                      | $27,961                                                                | $3,997 setup + 12 × $1,997.                                    |
| A12 | Useful sample size to call a winner                       | 80–150 leads                                                           | One ICP × one geo, monthly.                                    |
| A13 | Founding Cohort gross margin to Prestyj                   | ~breakeven on COGS, positive on case-study/SEO value                   | Stated trade: free for testimonial.                            |
| A14 | $3M+ owner's tolerance for friction                       | Higher than average — they have ops staff, they'll fill a 4-field form | Drives qualification-power scoring.                            |
| A15 | $3M+ owner's tolerance for "free" gimmicks                | Lower than average — they smell pitch decks                            | Drives perceived-value scoring.                                |

---

## 3. Scoring Rubric (1–10 per dimension, 5 dimensions)

Each offer gets a 1–10 score on five dimensions. **Equal-weighted composite** = arithmetic mean.

| Dimension                                              | What 1 looks like                            | What 10 looks like                                        |
| ------------------------------------------------------ | -------------------------------------------- | --------------------------------------------------------- |
| **Perceived value** (PV)                               | Generic, "another PDF", obvious sales bait   | Tangible, dollar-quantified, would-pay-for-it on its own  |
| **Friction** (FR) — _inverted; higher = less friction_ | 7-step form, scheduling required, app review | One field, instant gratification                          |
| **Qualifying power** (QP)                              | Tire-kickers and competitors download too    | Self-selects $3M+ operators with intent to buy in 90 days |
| **CAC efficiency** (CE)                                | Burns ad $ to fill an inbox                  | Low cost-per-qualified-demo, leverages owned content      |
| **Demo-book rate** (DB)                                | <5% lead→booked                              | >35% lead→booked, often same-session                      |

**Score keys.** Inverted "friction" means: 10 = frictionless, 1 = maximum friction. All dimensions read "higher is better".

---

## 4. Per-Offer Scoring

### O1 — Founding Cohort (free 300-ad batch for 5 businesses)

| PV  | FR  | QP  | CE  | DB  | **Mean** |
| --- | --- | --- | --- | --- | -------- |
| 9   | 4   | 9   | 7   | 8   | **7.4**  |

- **PV 9.** $1,497 stated value, tangible deliverable, 24h SLA. $3M+ owners get this immediately — it's ads, not a PDF.
- **FR 4.** Application form + $X/day spend commitment + Google review + testimonial. High friction by design.
- **QP 9.** "Run $X/day for 14 days minimum" filter strips broke operators and tourists. Self-qualifying by spend.
- **CE 7.** Only 5 spots, so scale is capped — but the case-study output recycles into long-tail CAC for the next 12 months.
- **DB 8.** Approved applicants are already pre-qualified; they're in the sales conversation by structure.

### O2 — ROI Calculator → personalized report

| PV  | FR  | QP  | CE  | DB  | **Mean** |
| --- | --- | --- | --- | --- | -------- |
| 7   | 7   | 6   | 8   | 7   | **7.0**  |

- **PV 7.** Personalized $-figure ("you're losing $X/yr to missed calls") is sticky. Higher value than a PDF, lower than a free deliverable.
- **FR 7.** Multi-step input, but no phone required to see results; email gate is light.
- **QP 6.** Filters on call volume + business type — okay, but doesn't filter for "actively buying paid ads".
- **CE 8.** Pure-content, evergreen, can SEO-rank, retargets well. Cheap to operate.
- **DB 7.** ROI number on result page is the best demo-book CTA Prestyj has — once they see "$184K/yr in recovered revenue", booking is the natural next click.

### O3 — "Steal our top-performing ad" swipe file _(hypothetical)_

| PV  | FR  | QP  | CE  | DB  | **Mean** |
| --- | --- | --- | --- | --- | -------- |
| 8   | 8   | 5   | 8   | 6   | **7.0**  |

- **PV 8.** Asymmetric value if branded as "the 7 ads driving $14M for HVAC operators". Show, don't tell.
- **FR 8.** Email-only opt-in; instant download or Loom walkthrough.
- **QP 5.** Anyone curious about ads downloads. Doesn't isolate $3M+ operators.
- **CE 8.** Owned creative becomes the magnet — zero new asset cost.
- **DB 6.** Swipe files are notorious for high opt-in / low book rate. The pitch comes after.

### O4 — Free competitor teardown _(hypothetical, personalized 1:1)_

| PV  | FR  | QP  | CE  | DB  | **Mean** |
| --- | --- | --- | --- | --- | -------- |
| 9   | 3   | 9   | 4   | 9   | **6.8**  |

- **PV 9.** "We'll personally tear down 3 of your top competitor's ads, what they're spending, and where they're leaking" — premium.
- **FR 3.** Requires submitting competitor info + scheduling a 15-min walkthrough. High intent only.
- **QP 9.** Volunteering to expose your local market = high-intent operator who's losing share.
- **CE 4.** Manual delivery. Doesn't scale without a tool or junior analyst — cost per teardown is high.
- **DB 9.** Walkthrough _is_ a soft demo. Conversion to paid is the highest in the bracket.

### O5 — Industry-specific playbook (HVAC / roofing / brokerage / reactivate-leads)

| PV  | FR  | QP  | CE  | DB  | **Mean** |
| --- | --- | --- | --- | --- | -------- |
| 6   | 9   | 5   | 9   | 5   | **6.8**  |

- **PV 6.** PDF playbooks are commodity. Exception: the `/lead-magnet/reactivate-leads` _live AI call_ offer — that's an 8+.
- **FR 9.** Name + email. Lowest friction in the bracket (excluding swipe file).
- **QP 5.** Anyone with a CRM and curiosity downloads. The roofing/HVAC industry slug helps, but doesn't isolate $3M+.
- **CE 9.** Lowest CAC by far. Cheap to produce, ranks SEO, retargets endlessly.
- **DB 5.** PDF readers convert poorly to demos. The live-AI-call variant is the exception (it qualifies _during_ the magnet).

### O6 — Guaranteed-leads trial _(hypothetical)_

| PV  | FR  | QP  | CE  | DB  | **Mean** |
| --- | --- | --- | --- | --- | -------- |
| 9   | 4   | 8   | 5   | 9   | **7.0**  |

- **PV 9.** "We deliver 20 qualified leads in 30 days or you don't pay" is the strongest perceived-value claim possible. Risk reversal is king for $3M+ owners burned by agencies.
- **FR 4.** Application, payment hold, scoping call — must qualify both directions.
- **QP 8.** Self-selects buyers, not browsers. Application + payment-method-on-file filters hard.
- **CE 5.** Margin-thin. If a market underperforms, Prestyj eats the cost. Operationally risky without tight ICP fit.
- **DB 9.** Trial _is_ the close. Lead → trial-activated is effectively the demo-book equivalent.

### Composite leaderboard

| Rank | Offer                       | Composite |
| ---- | --------------------------- | --------- |
| 1    | **O1 — Founding Cohort**    | **7.4**   |
| 2    | O2 — ROI Calculator         | 7.0       |
| 2    | O3 — Swipe File             | 7.0       |
| 2    | O6 — Guaranteed-Leads Trial | 7.0       |
| 5    | O4 — Competitor Teardown    | 6.8       |
| 5    | O5 — Industry Playbook      | 6.8       |

---

## 5. Head-to-Head Matchups (single-elim bracket)

Seeded by composite. Ties broken by **DB × QP** (demo-book × qualifying power — the two dimensions that matter most for CAC math).

```
Quarterfinals (seeds)
(1) Founding Cohort   ──┐
                        ├── SF1 ──┐
(8) [bye]               ──┘        │
                                   │
(4) Competitor Teardown ──┐         ├── FINAL ──┐
                          ├── SF2 ──┘            │
(5) Industry Playbook   ──┘                      │   WINNER
                                                 │
(2) ROI Calculator      ──┐                      │
                          ├── SF3 ──┐            │
(7) [bye]                ──┘        │            │
                                    ├── F2 ──────┘
(3) Swipe File          ──┐         │
                          ├── SF4 ──┘
(6) Guaranteed Trial    ──┘
```

(With 6 entrants the 4 lowest seeds fight in; we run it as a 6-team bracket — top 2 seeds get byes, then winners meet.)

### Round 1

**M1: O4 Competitor Teardown vs O5 Industry Playbook**
Teardown wins on DB (9 vs 5) and QP (9 vs 5). Playbook wins on CE (9 vs 4) and FR (9 vs 3).
For a $3M+ owner, **demo-book and qualification dominate** — they have money, they want signal, not another PDF.
**Winner: O4 Teardown.**

**M2: O3 Swipe File vs O6 Guaranteed Trial**
Swipe wins FR (8 vs 4) and ties CE (8 vs 5 → swipe).
Trial wins PV (9 vs 8), QP (8 vs 5), DB (9 vs 6).
The $3M+ ICP doesn't need education — they need risk reversal. Trial **outperforms on the three highest-leverage dimensions**.
**Winner: O6 Guaranteed Trial.**

### Round 2 (semis)

**SF1: O1 Founding Cohort vs O4 Teardown**

- PV: 9 / 9 — tie
- FR: 4 / 3 — Cohort
- QP: 9 / 9 — tie
- CE: 7 / 4 — **Cohort big** (scalability + case-study compounding)
- DB: 8 / 9 — Teardown by a hair

Cohort wins on the operational scoring (CE) and ties or wins the rest. Teardown's edge is human-manual and doesn't scale past ~10/week.
**Winner: O1 Founding Cohort.**

**SF2: O2 ROI Calculator vs O6 Guaranteed Trial**

- PV: 7 / 9 — Trial
- FR: 7 / 4 — Calculator
- QP: 6 / 8 — Trial
- CE: 8 / 5 — **Calculator big**
- DB: 7 / 9 — Trial

Trial wins 3 of 5, but **CE gap is the deciding factor for a $5–15K/mo–ish ad budget** (which is the implied range for the $3M+ ICP starting with Prestyj). The calculator can run forever at low cost; the trial bleeds margin until ICP+market fit is dialed in.

**Tie-break by DB × QP:** Trial = 9 × 8 = 72; Calc = 7 × 6 = 42. **Trial wins the tie-break.**

**Winner: O6 Guaranteed Trial** — _but flagged as operationally risky._

### Final

**O1 Founding Cohort vs O6 Guaranteed Trial**

| Dimension | O1 Cohort | O6 Trial | Edge       |
| --------- | --------- | -------- | ---------- |
| PV        | 9         | 9        | tie        |
| FR        | 4         | 4        | tie        |
| QP        | 9         | 8        | Cohort     |
| CE        | 7         | 5        | **Cohort** |
| DB        | 8         | 9        | Trial      |

Cohort and Trial both promise risk-reversal value, but the **Cohort is structurally cheaper to deliver** (one-time creative batch, no perf guarantee) and **scales without underwriting market variance**. Trial wins demo-book by 1 point but Cohort wins CE by 2 — and CE is the dimension that determines whether the offer survives quarter 2 at the same spend.

**🏆 Tournament Winner: O1 — Founding Cohort.**

---

## 6. Final Ranking

| Rank | Offer                                         | Composite | Notes                                                                                                                                                                                                                    |
| ---- | --------------------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 🥇 1 | **O1 — Founding Cohort**                      | 7.4       | Live. Cap at 5 spots is both the scarcity hook _and_ the ceiling — once full, the offer dies and you need a Cohort 2.                                                                                                    |
| 🥈 2 | **O6 — Guaranteed-Leads Trial**               | 7.0       | Hypothetical. Highest DB but worst margin variance. Launch only with a tight HVAC-or-roofing-only ICP.                                                                                                                   |
| 🥉 3 | **O2 — ROI Calculator → personalized report** | 7.0       | Live. The only **always-on, evergreen** finalist. Pair with O1 as the warm-funnel feeder.                                                                                                                                |
| 4    | O3 — Swipe file                               | 7.0       | Hypothetical. Best low-friction email capture; weak qualifier. Use as retargeting middle-funnel.                                                                                                                         |
| 5    | O4 — Competitor teardown                      | 6.8       | Strongest demo-book offer in the field; doesn't scale past founder-led delivery.                                                                                                                                         |
| 6    | O5 — Industry playbook                        | 6.8       | Lowest CAC, lowest book rate. Keep for SEO + retargeting, retire as primary paid offer. **Exception: `/lead-magnet/reactivate-leads` (the live AI call) — that one behaves like O4 and should be re-scored separately.** |

---

## 7. Predicted CPL Ranges ($3M+ local-services ICP, US paid social, mid-market)

Ranges are derived from A1–A9. **Cost-per-qualified-demo (CPQD)** matters more than raw CPL.

| Offer                  | Predicted CPL | Predicted CPQD (cost per booked demo) |
| ---------------------- | ------------- | ------------------------------------- |
| O1 Founding Cohort     | $45 – $90     | $90 – $220                            |
| O2 ROI Calculator      | $20 – $55     | $130 – $400                           |
| O3 Swipe File          | $8 – $22      | $160 – $550                           |
| O4 Competitor Teardown | $60 – $140    | $80 – $250                            |
| O5 Industry Playbook   | $5 – $18      | $200 – $700                           |
| O6 Guaranteed Trial    | $80 – $180    | $130 – $300                           |

At an A11 ACV of ~$27,961 and A10 close rate of 20–35%, **CPQD up to ~$1,400 is profitable on first-year value alone**. Every offer in the bracket clears that bar at its midpoint — the differentiator is volume × scalability, which is where O1 + O2 win.

---

## 8. Sensitivity Analysis (±30% on key assumptions)

| Shock                                                           | What changes                                                                                                                                        | Does the winner change?                                                                                          |
| --------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| **A8 (calc DB rate) +30%** → 13–26% lead→demo                   | O2 composite rises to ~7.2. Calculator overtakes Trial for #2 cleanly but still trails Cohort on CE.                                                | **No — O1 still wins.**                                                                                          |
| **A8 (calc DB rate) −30%** → 7–14%                              | O2 drops to ~6.6. Falls behind Teardown.                                                                                                            | **No — O1 still wins.**                                                                                          |
| **A6 (cohort/trial opt-in) +30%** → 5–12% application rate      | Both O1 and O6 CE rise. Gap widens in O1's favor (already cheaper to deliver).                                                                      | **No — O1 still wins, by more.**                                                                                 |
| **A6 −30%** → 2.8–6.3%                                          | O6 CE drops to ~3.5 (margin disaster on a guarantee with low volume). O1 still ~6 CE because COGS is fixed.                                         | **No — O1 wins by more.**                                                                                        |
| **A10 (close rate) −30%** → 14–24%                              | Every offer's CPQD ceiling drops to ~$980. O5 (Playbook) falls out of profit at the high end. O4 (Teardown) becomes borderline. O1/O2/O6 stay safe. | **No — O1 still wins; O5 dies.**                                                                                 |
| **A11 ACV halved** (e.g., churn at month 3, ACV ≈ $9,988)       | Profitable CPQD ceiling drops to ~$500. O4 and O6 squeeze. O1's case-study output partially compensates.                                            | **No — O1 still wins, but O6 falls below O3.**                                                                   |
| **A14 (friction tolerance) flipped** — assume owners hate forms | O1 FR penalty deepens (3 instead of 4). O5 + O3 rise (lowest friction). O2 unchanged.                                                               | **Yes — possible flip to O2 (calculator) as winner.** This is the only scenario where the bracket changes hands. |

**Robustness verdict:** O1 wins under 6 of 7 stress scenarios. The single flip case (A14 inverted) is unlikely for $3M+ owner-operators who routinely fill agency RFPs and intake forms — but it's worth pressure-testing with one A/B before scaling spend.

---

## 9. Recommended Top 3 → Angle × ICP Simulation

Take these three into the next simulation. Each plays a distinct funnel role; they're complementary, not redundant.

### 🥇 Primary: **O1 — Founding Cohort** (live)

**Role.** Hero offer. Highest-intent application flow with built-in case-study compounding.
**Why it advances.** Wins the bracket; wins 6 of 7 sensitivity scenarios; already live and instrumented at `/founding-cohort`.
**Angles to test next round.** Scarcity ("3 of 5 spots left"), risk-reversal ("free until you see results"), peer proof ("Joining 4 HVAC operators already running this batch"), pain ("Your ads are fatigued — refresh 300 in 24h").

### 🥈 Secondary (evergreen feeder): **O2 — ROI Calculator** (live)

**Role.** Always-on, SEO-friendly, retargeting backbone. Calculator results page is the natural place to send paid traffic that _isn't ready to apply yet_.
**Why it advances.** Best CAC efficiency of any live offer; ROI number itself is the demo CTA.
**Angles to test next round.** Loss framing ("$184K/yr you're already losing"), comparison framing ("vs hiring 2 ISAs"), industry-specific ("HVAC operators in your bracket recover 17 jobs/mo"), seasonal ("Before the busy season").

### 🥉 Hypothetical to validate: **O6 — Guaranteed-Leads Trial** (not live)

**Role.** Bottom-funnel close accelerator for the warmest segment. Don't run as a cold offer — run only to applicants who failed Cohort qualification or to ROI calculator finishers who didn't book.
**Why it advances.** Highest DB rate; risk reversal is the single most powerful angle for the $3M+ owner who's been burned by an agency. Caveat: must launch with one tightly-scoped ICP (recommend HVAC-only first) so margin variance is bounded.
**Angles to test next round.** "10 booked appointments or your money back," "30 days at $0 setup," "We pay if we miss," "Only 3 markets per quarter."

### What gets cut (and why)

- **O3 Swipe File** — keep as middle-funnel retargeting asset, not a primary offer. Doesn't qualify $3M+ buyers.
- **O4 Competitor Teardown** — best demo-book in the bracket but doesn't scale past founder-led delivery. Revisit if/when a junior analyst or automated audit tool exists.
- **O5 Industry Playbook** — keep alive for SEO + retargeting (it's cheap), but stop putting paid budget on it as the primary offer. **Exception:** rescore `/lead-magnet/reactivate-leads` (live AI call demo) as a separate candidate in the next round — it behaves more like O4 than like a PDF and may deserve a spot.

---

## 10. Open Questions for the User (resolve before Simulation 02)

1. **What's the real opt-in rate on `/founding-cohort` today?** A6 is the largest sensitivity in this model.
2. **What's the real lead → demo-booked rate on `/ai-call-handling-calculator` results page?** Drives O2's true rank.
3. **Are HVAC and roofing the actual top ICPs or should this re-run for $3M+ real-estate teams?** The scoring is portable but the angle library changes.
4. **Monthly ad-budget assumption.** Used $5–15K/mo as implied. Confirm or correct — it changes the CPQD ceiling in §7.
5. **Any existing winning hooks/creatives** to seed the Angle × ICP simulation? Without these, Simulation 02 starts from priors instead of evidence.
