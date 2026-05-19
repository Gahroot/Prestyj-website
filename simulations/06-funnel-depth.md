# Funnel Depth Simulation — $/Lead × Lead Quality Tradeoff

> **Anchors.** Winning offer set from `01-offer-tournament.md`: **O1 Founding Cohort (hero)** + **O2 ROI Calculator (evergreen feeder)** + **O6 Guaranteed Trial (warm-only closer)**. Top angle/ICP from `02-angle-icp-matrix.md`: **O1 AUTH × ROOF/HVAC**, **O2 PAIN × HVAC**, **O6 PAIN × HVAC**. ACV ≈ **$27,961**; close rate **20–35%**; profitable CPQD ceiling ≈ **$1,400**.
> **Scope.** We are simulating the _path between ad click and demo booking_ — not the offer itself, not the creative. Offer = O1 Founding Cohort for this simulation (the bracket winner). Where a path naturally pairs with a different anchor offer (e.g., quiz → segment routes to O1/O2/O6) it's noted.

---

## 0. Framing — How to Read This Document

**What "funnel depth" means here.** The number of mandatory steps between _ad click_ and _demo on calendar_. More depth = more friction filters out unqualified traffic but also drops absolute demo volume; less depth = volume up, lead quality variance up.

**Four paths under test.**

1. **P1 Direct-to-demo** — ad → `/book-demo` (1 step after click).
2. **P2 Lead-magnet-first** — ad → `/lead-magnet` → email/SMS nurture (5–7 touches) → demo (3+ steps).
3. **P3 VSL-gated** — ad → 6–9 min video sales letter → demo CTA below video (2 steps, time-gated).
4. **P4 Quiz-funnel** — ad → 5–7 question qualifying quiz → segmented offer (O1 / O2 / O6) → demo (3 steps).

**Metric definitions.**

- **TOFU CVR** — % of ad clicks that take _any_ meaningful action on the first landing surface (book demo, opt in, finish VSL, finish quiz).
- **Qualified lead rate** — of those who entered the funnel, % that meet ICP ($3M+ rev, decision-maker, US, in-target vertical). This is _predicted_ via behavior + form fields, not the eventual close.
- **Demo-show rate** — of _booked_ demos, % that show live.
- **Close rate** — of shows, % that become paying customers (uses A10 from `01`).
- **CAC** — ad spend ÷ closed deals.
- **Lead Quality Score (LQS, 1–10)** — composite: intent strength (40%), ICP fit (30%), info richness available to sales rep before call (20%), elapsed time from click to demo (10%, inverse — faster = higher intent).

**Scoring philosophy.** Ranges are predicted, not measured. Midpoints used for ranking. All four paths share the same upstream creative (top cell from `02`) — the ad CPM and CTR are held constant so that _only the post-click path differs_.

---

## 1. Shared Assumptions Table

| ID  | Assumption                                          | Value             | Notes / Source                                                                                                    |
| --- | --------------------------------------------------- | ----------------- | ----------------------------------------------------------------------------------------------------------------- |
| F1  | Blended ad CPM (Meta, US, $3M+ owner targeting)     | $32               | Mid of `01` A1.                                                                                                   |
| F2  | Blended ad CTR for top-5 cell (O1 AUTH × HVAC/ROOF) | 1.7%              | Mid of `02` cell #3/#4.                                                                                           |
| F3  | Resulting **CPC**                                   | ≈ $1.88           | `F1 / (F2 × 10)`.                                                                                                 |
| F4  | A10 close rate of shown demos                       | 27%               | Mid of `01` A10 (20–35%).                                                                                         |
| F5  | A11 ACV (first-year)                                | $27,961           | `01` A11.                                                                                                         |
| F6  | Profitable CAC ceiling (1x ACV payback)             | ≈ $9,300          | ACV × gross margin (33%, conservative).                                                                           |
| F7  | Profitable CPQD ceiling                             | ≈ $1,400          | `01` §7.                                                                                                          |
| F8  | Industry baseline demo-show rate (paid → demo)      | 55–70%            | Held constant _unless_ the funnel materially changes intent (P2 nurture, P4 quiz).                                |
| F9  | Nurture sequence avg open / click                   | 32% / 4% per send | 5–7 sends over 14 days.                                                                                           |
| F10 | VSL completion rate (6–9 min)                       | 18–28% (mid 22%)  | Industry mid for cold paid traffic to long-form video.                                                            |
| F11 | Quiz completion rate (5–7 Qs, single-column)        | 55–72% (mid 63%)  | Higher than VSL because each step is short + sunk-cost compounds.                                                 |
| F12 | Quiz → segmented-offer page CVR                     | 35–55% (mid 44%)  | Personalization lifts CVR above generic LP.                                                                       |
| F13 | Lead-magnet opt-in rate (HVAC playbook PDF)         | 22–38% (mid 30%)  | Live evidence: `/lead-magnet` exists.                                                                             |
| F14 | Nurture sequence → demo book rate (of opt-ins)      | 4–9% (mid 6%)     | 14-day window; declines fast after day 10.                                                                        |
| F15 | A14 form-friction tolerance for $3M+ owner-operator | **High**          | `01` §8 — owners routinely fill RFPs; this is the single most important assumption. **Sensitivity-tested below.** |

**Sensitivity hinge:** F15 is the single assumption that re-ranks paths. If owners hate forms (low friction tolerance), every path gets re-weighted toward shallow depth. All base-case rankings assume **F15 = high** as the tournament concluded.

---

## 2. Per-Path Predicted Metrics (base case, neutral spend)

All percentages are click → step, unless noted. Composite funnel = product of every step from click to closed deal.

### 2.1 P1 — Direct-to-demo (ad → `/book-demo`)

| Step                              | Rate                    | Notes                                                                                                  |
| --------------------------------- | ----------------------- | ------------------------------------------------------------------------------------------------------ |
| Click → demo page view            | 100%                    | (Definitionally — page load.)                                                                          |
| Page view → demo booked           | 4.5–8.5% (mid **6.5%**) | Anchored to `05-landing-page-variants` mid for high-intent booking pages with O1's social proof block. |
| Demo booked → demo show           | 58%                     | Lower than F8 mid — cold traffic, no nurture, ~3 day book-to-call gap.                                 |
| Show → close                      | 25%                     | Slightly below F4 mid — sales rep has minimal context pre-call.                                        |
| **Click → closed deal**           | **0.94%**               | mid: `6.5% × 58% × 25%`.                                                                               |
| Qualified lead rate (of bookings) | **35–50%**              | Self-selected for intent but no ICP filter. Off-ICP showings burn rep time.                            |
| **LQS**                           | **6.5**                 | High intent (booked) + fast (10) — but thin info richness (3) and ICP fit roulette (5).                |

### 2.2 P2 — Lead-magnet-first (ad → `/lead-magnet` → nurture → demo)

| Step                                           | Rate                 | Notes                                                                                                         |
| ---------------------------------------------- | -------------------- | ------------------------------------------------------------------------------------------------------------- |
| Click → LM page view                           | 100%                 |                                                                                                               |
| Page view → opt-in                             | 22–38% (mid **30%**) | F13. Hero asset: "HVAC Owner's 2026 Ad Playbook."                                                             |
| Opt-in → nurture engagement (≥2 emails opened) | 48%                  | F9-derived.                                                                                                   |
| Engaged → demo booked                          | 6%                   | F14 mid.                                                                                                      |
| Demo booked → demo show                        | 72%                  | Higher than F8 — nurtured leads have warmed up over 7–14 days.                                                |
| Show → close                                   | 30%                  | Rep has rich behavioral data + 14 days of intent signals.                                                     |
| **Click → closed deal**                        | **0.39%**            | mid: `30% × 48% × 6% × 72% × 30%` (off opt-in base).                                                          |
| Qualified lead rate (of opt-ins)               | **18–28%**           | Low — magnet attracts learners, not buyers. Most opt-ins are agency staff, juniors, info-collectors.          |
| **LQS**                                        | **5.8**              | Decent info richness (7) + ICP fit no better than P1 (5) — _but_ the 14-day delay tanks intent freshness (3). |

### 2.3 P3 — VSL-gated (ad → VSL → demo CTA)

| Step                              | Rate       | Notes                                                                                                                   |
| --------------------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------- |
| Click → VSL page view             | 100%       |                                                                                                                         |
| Page view → VSL 50% mark          | 28%        | Mid of F10. Big drop-off at minute 2.                                                                                   |
| 50% mark → demo CTA click         | 38%        | Below-video CTA + in-video soft pitch at min 6.                                                                         |
| CTA click → demo booked           | 62%        | Pre-sold by video; lower form abandonment.                                                                              |
| Demo booked → demo show           | 74%        | Highest of all paths — video built rapport, candidate is pre-qualified by sitting through 6+ min.                       |
| Show → close                      | 33%        | Highest — rep walks into a "I know your story, I'm interested" call.                                                    |
| **Click → closed deal**           | **1.62%**  | mid: `28% × 38% × 62% × 74% × 33%`.                                                                                     |
| Qualified lead rate (of bookings) | **55–70%** | VSL itself is a filter — only owners who self-identify with the problem complete it.                                    |
| **LQS**                           | **8.2**    | Strong on every dimension; freshness is fine (same-session book), info richness is mid (no form fields beyond contact). |

### 2.4 P4 — Quiz-funnel (ad → quiz → segmented offer → demo)

| Step                                 | Rate                 | Notes                                                                                               |
| ------------------------------------ | -------------------- | --------------------------------------------------------------------------------------------------- |
| Click → quiz Q1                      | 100%                 |                                                                                                     |
| Q1 → quiz complete                   | 55–72% (mid **63%**) | F11. Each Q is one click; progress bar visible.                                                     |
| Quiz complete → segmented offer page | 96%                  | Auto-redirect; trivial drop.                                                                        |
| Offer page → demo booked             | 35–55% (mid **44%**) | F12. Personalization ("Your segment: HVAC operator, $4–8M, fatigue stage") lifts CVR materially.    |
| Demo booked → demo show              | 70%                  | Self-disclosure builds commitment; quiz answers preview the call.                                   |
| Show → close                         | 31%                  | Rep has 5–7 data points before call → tailored pitch.                                               |
| **Click → closed deal**              | **1.91%**            | mid: `63% × 96% × 44% × 70% × 31%`.                                                                 |
| Qualified lead rate (of completions) | **60–75%**           | Quiz _is_ the qualifier — disqualifies on revenue, role, and timeline questions.                    |
| **LQS**                              | **8.7**              | Highest. Strong intent (10), high ICP fit (9), best info richness (9), same-session freshness (10). |

---

## 3. Per-Spend Sensitivity — $1k / $5k / $20k per Month

**Method.** Hold CPC (F3 = $1.88) constant at $1k and $5k. At $20k, apply a **+25% CPC inflation** (auction saturation in narrow $3M+ HVAC/ROOF audience — Meta's effective audience size for this targeting is ~180–240K US accounts; sustained $20k/mo will exhaust the high-intent slice). Apply step rates from §2.

**Volume assumptions per tier (clicks):**

- $1k: ~530 clicks
- $5k: ~2,660 clicks
- $20k: ~8,510 clicks (with CPC inflation to $2.35)

### 3.1 $1,000 / month

| Path      | Clicks | Demos booked | Demos shown | Closed deals | $/qualified lead                 | $/closed deal (CAC) | LQS |
| --------- | ------ | ------------ | ----------- | ------------ | -------------------------------- | ------------------- | --- |
| P1 Direct | 530    | 34           | 20          | **5**        | $59                              | **$200**            | 6.5 |
| P2 Magnet | 530    | 5            | 4           | **1**        | $25 (per opt-in) / $222 (per QL) | **$1,000**          | 5.8 |
| P3 VSL    | 530    | 13           | 9           | **3**        | $111                             | **$333**            | 8.2 |
| P4 Quiz   | 530    | 92           | 65          | **10**       | $30                              | **$100**            | 8.7 |

> _$/qualified-lead uses the per-path qualified-lead-rate midpoint applied to the relevant base (bookings for P1/P3/P4, opt-ins for P2 — also reported per-QL for fair comparison)._

**$1k commentary.** Volume is razor-thin. P2's 1 deal isn't statistically meaningful — could just as easily be 0 or 2. P4 wins both metrics cleanly; P1 wins on simplicity if you only have one rep.

### 3.2 $5,000 / month

| Path      | Clicks | Demos booked | Demos shown | Closed deals | $/qualified lead | $/closed deal (CAC) | LQS |
| --------- | ------ | ------------ | ----------- | ------------ | ---------------- | ------------------- | --- |
| P1 Direct | 2,660  | 173          | 100         | **25**       | $59              | **$200**            | 6.5 |
| P2 Magnet | 2,660  | 23           | 17          | **5**        | $25 / $222       | **$1,000**          | 5.8 |
| P3 VSL    | 2,660  | 64           | 47          | **16**       | $111             | **$313**            | 8.2 |
| P4 Quiz   | 2,660  | 460          | 322         | **51**       | $30              | **$98**             | 8.7 |

**$5k commentary.** Now statistically credible. Sales-team capacity becomes the binding constraint for P4 — 322 shown demos/mo is ≥3 FTE reps. P1 produces 100 shows on 1.5 reps and is operationally simplest. P2's CAC stays above the profitable ceiling for any path that isn't bottom-funnel; only viable as a _retargeting feeder_ into P1/P4, not as a primary path.

### 3.3 $20,000 / month

CPC inflates to $2.35 → 8,510 clicks.

| Path      | Clicks | Demos booked | Demos shown | Closed deals | $/qualified lead | $/closed deal (CAC) | LQS   |
| --------- | ------ | ------------ | ----------- | ------------ | ---------------- | ------------------- | ----- |
| P1 Direct | 8,510  | 553          | 321         | **80**       | $74              | **$250**            | 6.3 ↓ |
| P2 Magnet | 8,510  | 74           | 53          | **16**       | $31 / $278       | **$1,250**          | 5.5 ↓ |
| P3 VSL    | 8,510  | 204          | 151         | **50**       | $139             | **$400**            | 8.0   |
| P4 Quiz   | 8,510  | 1,475        | 1,032       | **162**      | $38              | **$123**            | 8.5   |

**Why LQS drops for P1/P2 at $20k.** Saturation pushes the auction down-funnel into less-qualified inventory. Self-selection paths (P3 VSL, P4 Quiz) are _resistant_ to this — the funnel filter does the work the audience used to do.

**Operational note at $20k.** P4 produces 1,032 shown demos/mo (≈50/day). That requires ≥6 FTE sales reps or a serious SDR/AE split with calendar-routing. If the org can't staff it, P3 (151 shows/mo) is the more _executable_ recommendation at this tier — still $400 CAC, well under F6 ceiling.

---

## 4. Per-Path Composite Ranking

Composite score = `0.45 × ($/closed-deal rank) + 0.30 × (LQS rank) + 0.15 × ($/qualified-lead rank) + 0.10 × (operational simplicity rank)`. Lower is better.

| Path          | $/Closed (avg) | LQS | $/QL     | Op. simplicity                | **Composite rank** |
| ------------- | -------------- | --- | -------- | ----------------------------- | ------------------ |
| **P4 Quiz**   | $107           | 8.7 | $34      | 3rd (build cost: medium)      | **🥇 1**           |
| **P3 VSL**    | $349           | 8.2 | $125     | 2nd (build: easier than quiz) | **🥈 2**           |
| **P1 Direct** | $217           | 6.4 | $66      | 1st (already live)            | **🥉 3**           |
| **P2 Magnet** | $1,083         | 5.7 | $28/$241 | 4th (most moving parts)       | **4**              |

**Reading the ranks.** P4 wins on three of four dimensions; P3 is the close runner-up with materially less build cost; P1 is the _fastest-to-deploy_ path and earns its podium spot on simplicity alone. P2 underperforms because the lead-magnet audience is structurally not the buyer audience for a $28k ACV B2B sale — it's a content-marketing audience.

---

## 5. Sensitivity Analysis (re-ranking under shocks)

| Shock                                                       | Effect                                                                                                                                         | Does the ranking change?                                            |
| ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| **F15 flipped — low form-friction tolerance**               | P4 quiz completion falls to ~40%; P1 demo-page CVR falls to 3%. Both depth-heavy paths suffer. P3 VSL is least affected (passive consumption). | **Yes — P3 takes #1, P4 drops to #2, P1 to #3.**                    |
| **F4 close rate −30%** (close = 19%)                        | CAC ceiling drops to ~$650. P2 dies (CAC $1.4k). P3 squeezes ($505 CAC). P4 and P1 stay safe.                                                  | **P2 falls behind even a no-funnel control.** P4 still #1.          |
| **F5 ACV halved** (churn at month 3)                        | CAC ceiling ≈ $470. P2 dies. P3 borderline ($349 avg, $400 at $20k). P4 stays comfortably profitable.                                          | **P4 #1 by wider margin; P3 risk-flagged.**                         |
| **Sales-team cap = 2 reps** (≈80 demos/mo)                  | P4 over-produces at $5k+; surplus rots in calendar. Effective P4 CAC rises. P1's lower volume becomes a _feature_.                             | **At capped-team scale, P1 #1, P4 #2.** Build quiz when team grows. |
| **Saturation hits earlier — CPC inflation at $5k not $20k** | All paths' CAC rise ~25% at the $5k tier. P2 dies; P4 still profitable.                                                                        | **No change to top 3.**                                             |
| **Audience expansion to Solar/Agent ICPs**                  | Quiz segmentation pays off harder (more diverse routing). VSL loses (one script can't address 4 ICPs).                                         | **P4 widens lead; P3 drops to #3 behind P1.**                       |

**Robustness verdict.** P4 wins under 4 of 6 stress scenarios. P3 wins one (low friction tolerance). P1 wins one (sales-team-capped). **There is no shock under which P2 ranks #1.**

---

## 6. Cross-References to Prior Simulations

- **`01-offer-tournament.md` §8** flagged A14 (friction tolerance) as the only shock that flips the offer winner. This simulation finds the _same variable_ is the only shock that flips funnel-depth rankings. **Both layers are bet on the same assumption.** Validating F15 with a single A/B (P1 vs P3 at $1k each) is the highest-leverage cheap test before any scale-up.
- **`02-angle-icp-matrix.md` §4** identifies HVAC/ROOF as 5-of-5 top cells. P4's quiz segmentation logic _requires_ multi-ICP routing to pay its build cost. **If we stay HVAC+ROOF-only for 6 months, P4's advantage shrinks** — quiz routes degenerate into "are you HVAC or roofing?" which is cheaper to ask in a single form field on P1. This is the strongest argument for P3 over P4 in v1.
- **`05-landing-page-variants.md`** ROI/LP-CVR data feeds P1's 6.5% mid. If that LP variant test concludes a higher CVR (e.g., 9%), P1's CAC drops to ~$155 and it threatens P3's #2 slot.

---

## 7. Final Recommended Funnel Architecture

### 7.1 The Recommendation (Hybrid, Phased)

**Run a 2-path hybrid, not a single funnel.** Funnel architecture is not "which path" — it's "which path for which traffic temperature":

```
                           ┌──────────────────────────────┐
                           │  Top angle/ICP creative      │
                           │  (O1 AUTH × HVAC/ROOF —      │
                           │   from `02-angle-icp-matrix` │
                           └──────────────┬───────────────┘
                                          │
                          ┌───────────────┴────────────────┐
                          │                                │
                  COLD traffic (70%)              WARM/retargeting (30%)
                          │                                │
                  ┌───────▼──────────┐             ┌───────▼─────────┐
                  │ P3 VSL-gated     │             │ P1 Direct-to-   │
                  │ → /founding-     │             │ demo (existing  │
                  │ cohort with 7-min│             │ `/book-demo`)   │
                  │ VSL above fold   │             │                 │
                  └───────┬──────────┘             └───────┬─────────┘
                          │                                │
                          └──────────────┬─────────────────┘
                                         ▼
                              Demo booked → AE call
                                         │
                            (Disqualified-but-warm)
                                         ▼
                              P2-lite nurture (4 emails, 10 days)
                              → re-offer O6 Guarantee Trial
```

**Phase 1 (months 0–2) — Validate the hinge.**

- Spend $5k/mo split 50/50 between **P1 Direct** and **P3 VSL**.
- Single creative (top cell from `02`). Single offer (O1 Cohort).
- Goal: empirically measure F15 (friction tolerance). If P3 wins CAC by >20%, the F15-high assumption is wrong and the whole stack re-prioritizes.

**Phase 2 (months 2–4) — Lock the cold path, add retargeting.**

- Whichever of P1/P3 won Phase 1 becomes the cold path at $5–8k/mo.
- Add P2-lite nurture (4 emails over 10 days) for **demo no-shows and disqualified-but-fits**, ending in O6 Guarantee Trial re-offer.
- Do **not** run P2 as a cold path. Its $1,000+ CAC at $1k spend is structural, not fixable with better email copy.

**Phase 3 (months 4–6) — Build P4 only if expanding ICPs.**

- If staying HVAC+ROOF-only, skip P4 entirely. The quiz routing doesn't pay back its build cost at 2 segments.
- If expanding into Solar / Agent / Team (per `02` v2 expansion plan), build P4 as the new cold path; P3 becomes a single-segment fallback.

### 7.2 Why Not Just Pick #1 (P4)?

Three reasons P4 is _not_ the v1 recommendation despite winning the composite:

1. **Build cost vs. validation status.** P4 requires a 5–7 question quiz, 3 segmented offer pages, and routing logic. That's ~3 weeks of engineering against an unvalidated F15 assumption. P3 needs a script + a 7-min recorded VSL on top of the existing `/founding-cohort` page — ~1 week of work.
2. **Single-ICP redundancy.** P4's segmentation advantage collapses to one question ("HVAC or roofing?") at v1 ICP breadth. That question already lives as a form field on P1.
3. **Sales-team capacity at $5k+.** P4 produces 322 shows/mo at $5k. The current team almost certainly can't absorb that without quality decay on the calls.

### 7.3 The Hard Triggers

Switch the architecture when one of these fires:

| Trigger                                       | Action                                                                                                        |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| Phase 1 P1 CAC ≤ P3 CAC × 1.1                 | Drop P3; run P1 only at $8k/mo. F15 is confirmed high.                                                        |
| Phase 1 P3 CAC < P1 CAC × 0.8                 | Drop P1; run P3 only at $8k/mo. F15 is wrong — investigate landing-page friction across the rest of the site. |
| Sales team grows to ≥4 AEs                    | Begin P4 build regardless of ICP expansion. Volume capacity now justifies it.                                 |
| ICP expansion to ≥3 verticals committed       | Begin P4 build. Segmentation finally earns its keep.                                                          |
| Any path's CAC > $1,400 sustained for 14 days | Pause that path. Diagnose creative-fatigue or audience saturation before re-launching.                        |

---

## 8. Open Questions for the User (resolve before Phase 1 launch)

1. **Sales-team capacity.** How many AEs are bookable next 60 days? Determines whether P4 should even be on the roadmap.
2. **VSL asset readiness.** Is there a founder or top closer who can record a 7-min VSL inside 2 weeks? If no, P3 is gated on hiring/contracting a script + production resource.
3. **Existing nurture infrastructure.** Are the email/SMS sequences from `/lead-magnet` instrumented well enough to drop into P2-lite (re-offer flow)? If sequences are stale, build cost shifts.
4. **F15 validation budget.** Can the org commit $2.5k each to P1 and P3 in month 0 strictly for measurement, accepting that one of the two will be killed at end of month? If not, the recommendation collapses to "run P1, period" because P1 is the only path already live and instrumented.
5. **CAC target the board cares about.** This simulation uses F7 ($1,400). If a tighter board target exists (e.g., $600 for payback ≤6 months), P3 at $20k spend ($400 CAC) is the only path that hits it; P1 misses; P2 dies; P4 wins by even more.

---

**TL;DR.** P4 Quiz wins on paper. P3 VSL is the smarter v1 bet because it's faster to build, robust to the F15-friction-tolerance unknown, and doesn't require multi-ICP scope to pay back. Run a $5k 50/50 split of P1 vs P3 for 30 days to settle the friction-tolerance question; lock the winner; layer P2-lite _only_ for re-offer/retargeting; defer P4 until either the team or the ICP catalog grows.
