# Creative Formats × Platforms — Predicted Performance & Test Plan

**Simulation:** 04
**Date:** 2026-05-18
**Inputs:** The 4 carried hooks from `03-hooks-headlines.md` §5 (P3-15, P2-12, P1-07, P3-02).
**Goal:** For each {format × platform} combo, predict thumb-stop, hold, CTR, and production cost; score on a rubric; recommend 3–5 combos to produce first.

---

## 0. Framing

### 0.1 Scope

**Formats (6):**

| Code     | Format                | One-line definition                                                                                                                                                                                                                                                           |
| -------- | --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **UGC**  | UGC testimonial       | Self-shot vertical phone video; operator (real or actor) speaking to camera in their truck/shop.                                                                                                                                                                              |
| **TH**   | Founder talking head  | Polished single-camera shot of Prestyj founder, lavalier mic, branded backdrop or B-roll cuts.                                                                                                                                                                                |
| **SR**   | Screen-recording demo | Cursor-led walkthrough of the calculator / dashboard / ad-generation product.                                                                                                                                                                                                 |
| **ANIM** | Animated explainer    | Motion-graphic text + simple illustration, no live action. Voiceover optional.                                                                                                                                                                                                |
| **B/A**  | Before / After        | Side-by-side or A→B transition — e.g., "shared lead inbox → exclusive booked install calendar."                                                                                                                                                                               |
| **PAS**  | Problem-Agitate-Solve | Scripted three-beat structure; can be shot UGC-style, TH-style, or animated. Treated here as the _script structure_ not a visual style — paired with a visual backbone (we score it as a self-contained format because the PAS beat-discipline materially changes hold rate). |

**Platforms (5 surfaces, grouped into 3 buyers):**

| Buyer       | Surface                                      | Notes                                                                |
| ----------- | -------------------------------------------- | -------------------------------------------------------------------- |
| **Meta**    | Reels (FB+IG, 9:16, ≤90s)                    | Sound-on, fast cut tolerance, UGC-native.                            |
| **Meta**    | Feed (FB+IG, 1:1 or 4:5, ≤60s)               | Sound-off default; first 1.5s must work muted.                       |
| **YouTube** | Shorts (9:16, ≤60s)                          | Verb-first, organic-feeling content out-performs.                    |
| **YouTube** | In-stream (16:9, 15–30s for skippable)       | 5s pre-skip is the only frame that matters for unskipped retention.  |
| **Google**  | Display / PMax (static + short video assets) | Mostly static creative; video assets ≤15s; minimal sound assumption. |

That's a 6 × 5 = **30-cell matrix**.

### 0.2 Scoring rubric

Each cell scored on 4 metrics + 1 cost axis, then composited.

| Axis                                           | Direction     | What it measures                                                                            |
| ---------------------------------------------- | ------------- | ------------------------------------------------------------------------------------------- |
| **TSR** Thumb-stop rate (3s view / impression) | higher better | How well the format's _first frame_ survives the swipe/skip on this surface.                |
| **HR15** Hold rate to 15s (of 3s viewers)      | higher better | How well the format's _middle_ sustains attention once stopped.                             |
| **CTR** Click-through (clicks / impressions)   | higher better | Net click pull; combines TSR×HR15 with the offer-clarity the format affords.                |
| **CPE** Cost / production effort               | lower better  | Inverted in the composite score. Captures $ + calendar days + dependency on outside talent. |

**Composite score** = `0.30·TSR + 0.30·HR15 + 0.30·CTR + 0.10·(11 − CPE)`. All axes on a 1–10 scale; CPE inverted so lower production cost contributes positively to the composite. Max 10.

The score deliberately weights audience-side metrics over cost — at the volumes Prestyj plans to spend in v1 (per sim 01), a $4K shoot that doubles CTR pays for itself in days.

### 0.3 Predicted-metric anchors

Numbers below are priors, not measurements. Anchored on:

- Meta + YouTube benchmarks for B2B home-services advertisers (avg TSR ~25–35%, HR15 ~12–22%, CTR 0.8–2.5%).
- The hook-level CTR priors from sim 02 (P1: 1.6–2.5%, P2: 1.5–2.3%, P3: 1.4–2.1%).
- Format-fit research on UGC vs polished on Meta (UGC ~1.4× CTR), TH on YouTube in-stream (~1.2× hold), and screen-rec on calculator/demo offers (~1.3× CTR when the offer _is_ a tool).

### 0.4 What this simulation does _not_ do

- No ad-account data is used.
- Does not test multiple hook–format pairings inside one cell; assumes each carried hook is matched to the format whose voice it was written for (per §3 below).
- Does not split Reels vs Stories — Stories are treated as identical to Reels for v1 scoping.

---

## 1. Format × Platform Matrix (predicted metrics)

Each cell: **TSR / HR15 / CTR / CPE → composite**. TSR/HR15/CTR scored 1–10 against the anchors in §0.3; CPE scored 1–10 where 1 = cheapest (e.g., screen-rec at the desk) and 10 = most expensive (e.g., multi-day shoot with hired operator talent).

| Format ↓ \ Platform →     | Meta Reels               | Meta Feed                | YT Shorts                | YT In-stream             | Google Display/PMax      |
| ------------------------- | ------------------------ | ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| **UGC testimonial**       | 9 / 8 / 8 / 4 → **8.20** | 8 / 7 / 8 / 4 → **7.60** | 9 / 8 / 7 / 4 → **7.90** | 7 / 8 / 7 / 4 → **7.30** | 5 / 4 / 4 / 4 → **4.60** |
| **Founder talking head**  | 6 / 7 / 6 / 3 → **6.50** | 6 / 7 / 7 / 3 → **6.80** | 6 / 7 / 6 / 3 → **6.50** | 8 / 8 / 8 / 3 → **8.00** | 4 / 4 / 4 / 3 → **4.40** |
| **Screen-rec demo**       | 5 / 7 / 7 / 2 → **6.60** | 5 / 6 / 6 / 2 → **6.00** | 6 / 7 / 7 / 2 → **6.90** | 6 / 7 / 7 / 2 → **6.90** | 6 / 6 / 7 / 2 → **6.60** |
| **Animated explainer**    | 6 / 6 / 6 / 6 → **6.10** | 7 / 6 / 7 / 6 → **6.50** | 5 / 6 / 6 / 6 → **5.60** | 5 / 7 / 6 / 6 → **5.90** | 8 / 6 / 7 / 6 → **6.80** |
| **Before / After**        | 8 / 7 / 7 / 3 → **7.40** | 8 / 7 / 7 / 3 → **7.40** | 7 / 7 / 7 / 3 → **7.10** | 6 / 6 / 7 / 3 → **6.50** | 8 / 6 / 7 / 3 → **7.10** |
| **PAS (scripted 3-beat)** | 7 / 8 / 8 / 5 → **7.50** | 7 / 8 / 8 / 5 → **7.50** | 7 / 8 / 8 / 5 → **7.50** | 8 / 8 / 8 / 5 → **7.80** | 5 / 5 / 6 / 5 → **5.40** |

### 1.1 How to read the matrix

- **Top of every Meta column = UGC** (8.20 Reels, 7.60 Feed). Native-feeling testimonial beats polished founder content on social.
- **Top of YouTube In-stream column = Founder talking head** (8.00). Skippable pre-roll _rewards_ the polished-camera + clear-voice combination; UGC reads as unprofessional in the in-stream slot.
- **Top of Google Display/PMax column = Animated explainer** (6.80). Static-first surface; live-action is wasted; animated wins because it can run as both a video asset and source for static derivatives.
- **Screen-rec is the universally-mid format** — never the best on any surface but never below 6.0. Reason: the _offer_ in P2 (the ROI calculator) is a screen-rec by nature, so this format has a baked-in fit when the hook is P2-12.

### 1.2 Predicted absolute metrics (sanity-check view)

The composite is comparison-friendly but doesn't show _expected_ numbers. Below: predicted ranges for the top-3 cells (composite ≥ 7.5) so we can sanity-check media budgets in sim 05.

| Cell                      | TSR % | HR15 % | CTR %   | Notes                                                                                      |
| ------------------------- | ----- | ------ | ------- | ------------------------------------------------------------------------------------------ |
| UGC × Meta Reels          | 32–42 | 18–26  | 1.6–2.4 | Anchor: native UGC out-performs polished by ~1.4× CTR on Reels.                            |
| UGC × YT Shorts           | 30–40 | 18–24  | 1.3–2.0 | Slightly lower CTR than Meta — Shorts viewers are less commercially-intent.                |
| Founder TH × YT In-stream | 28–36 | 22–30  | 1.5–2.2 | High HR15 is the in-stream signature — 5s pre-skip filters disinterested viewers up front. |
| PAS × YT In-stream        | 24–32 | 22–30  | 1.5–2.2 | Beat-discipline keeps mid-video drop-off shallow.                                          |
| B/A × Meta Reels          | 28–36 | 16–22  | 1.3–2.0 | Visual contrast does the thumb-stop work; CTR slightly under UGC.                          |
| B/A × Meta Feed           | 28–36 | 16–22  | 1.3–2.0 | Same shape works muted — feed-safe.                                                        |
| PAS × Meta Reels          | 25–32 | 20–28  | 1.5–2.2 | Best HR15 on Meta of any format; CTR tied with UGC.                                        |

These ranges should be treated as the **null hypothesis to disprove in week 1 of spend** — not as a forecast.

---

## 2. Production Effort Estimates

CPE score (1=cheapest, 10=most expensive) translated into concrete budget + time + dependencies. Costs assume the v1 production stack: internal Prestyj team for scripts/edit, one freelance shooter on-call, and the Prestyj Z-Image / vertical-AI pipeline for synthetic B-roll where applicable.

| Format                   | CPE | $ per asset (single hook) | Calendar days | External dependencies                                                                                                            | Re-use multiplier                                 |
| ------------------------ | --- | ------------------------- | ------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| **Screen-rec demo**      | 2   | $250–400                  | 1             | None — internal shoot at desk                                                                                                    | 1.0× (1 asset = 1 cut)                            |
| **Founder talking head** | 3   | $400–800                  | 1–2           | None if founder is available; lavalier + ring light owned                                                                        | 2.0× (1 shoot → 4–6 cuts)                         |
| **Before / After**       | 3   | $300–600                  | 1–2           | Stock or AI-generated "before" footage; "after" from screen-rec or product UI                                                    | 1.5×                                              |
| **UGC testimonial**      | 4   | $800–2,500                | 5–14          | Real cohort operator OR vetted UGC creator from Backstage/Billo. **Schedule is the bottleneck, not $.**                          | 1.2×                                              |
| **PAS (scripted)**       | 5   | $1,000–2,500              | 3–7           | Script review + voiceover (or founder/UGC delivery); the _structure_ costs in script-time, not shoot-time                        | 2.5× (PAS script repurposes well across surfaces) |
| **Animated explainer**   | 6   | $1,500–4,000              | 7–14          | External motion-graphic freelancer OR internal team trained on Rive/After Effects. **Highest fixed cost, lowest variable cost.** | 3.0× (one master animation → 5+ surface cuts)     |

### 2.1 Implications for the test plan

- **Screen-rec demo + Founder TH = same-day production**. Either can be in market within 48 hours of approval.
- **UGC testimonial schedule risk is real** — the bottleneck is finding a $3M+ HVAC operator or roofer willing to be on camera, not the $ cost. **Start this booking before you've made a single ad.**
- **Animated explainer's high re-use multiplier (3×)** means its true per-surface cost is ~$1,000–1,500. Underrated when planning for Google Display/PMax which _needs_ multiple variants.
- **PAS is a script type, not a shoot type.** Cost is in writing; once written, it can be filmed as UGC, TH, or animated. This is why PAS has the highest re-use multiplier of the live-action formats.

---

## 3. Hook → Format → Platform Mapping

The 4 carried hooks from sim 03 each have a natural format-platform home. Locking these prevents the common test-plan mistake of running one hook in three formats just to check the box.

| Hook ID   | Hook (truncated)                                                                                                        | Native format                                                                            | Native platform                               | Why this match                                                                                                                                            |
| --------- | ----------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **P3-15** | "I built 300 ads for a Tampa roofer in 14 days. His response: 'Take down the ones with my receptionist.'"               | **UGC testimonial** (operator-shot) + **Animated explainer** (montage of "rejected" ads) | YT Shorts → Meta Reels cross-post             | The receptionist line implies a visual: a grid of rejected ad thumbnails. UGC delivery + animated B-roll is the only format combo that delivers the joke. |
| **P2-12** | "The average HVAC shop misses $184K a year and doesn't know it. Watch me find yours."                                   | **Screen-rec demo** (founder narrates calculator walkthrough)                            | YT Shorts → YT In-stream → Meta Reels         | "Watch me find yours" is a screen-rec promise. Format-hook fit is the highest of any pair in the doc.                                                     |
| **P1-07** | "'I haven't paid a lead-gen site in 90 days.' — $4.2M HVAC operator, Phoenix. Want the same deal? 20 installs or free." | **UGC testimonial** (the quoted operator on camera)                                      | Meta Feed (1:1 testimonial card) → Meta Reels | The hook _is_ a testimonial. Any format other than UGC undercuts its own credibility.                                                                     |
| **P3-02** | "He stopped buying storm leads in March. By June, his crews were 11 weeks out. Here's the playbook (and 300 free ads)." | **PAS script** (3-beat narrative) shot as **Founder TH** with B-roll                     | Meta Reels → YT In-stream                     | Three-beat narrative is PAS by construction. TH delivery preserves authority; B-roll of crew/calendar visualizes the time-shift.                          |

**Note on parallel testing.** Hook P3-02 + P3-15 are deliberately the same pair (AUTH × ROOF × O1) so sim 04 can compare _format lift inside one pair_ — UGC vs TH-with-PAS — without confounding by the hook content.

---

## 4. Composite Ranking of All 30 Cells

Top-down ranking by composite score, with the carried-hook tag where the cell is the natural home for one of the 4 hooks.

| Rank | Cell                        | Composite | Carried hook            | Notes                                                                                          |
| ---- | --------------------------- | --------- | ----------------------- | ---------------------------------------------------------------------------------------------- |
| 1    | UGC × Meta Reels            | **8.20**  | P1-07, P3-15            | Universal top. Highest TSR of any cell.                                                        |
| 2    | Founder TH × YT In-stream   | **8.00**  | (P3-02 possible)        | Best HR15 of any cell.                                                                         |
| 3    | UGC × YT Shorts             | **7.90**  | P3-15                   | Cross-post target for the receptionist hook.                                                   |
| 4    | PAS × YT In-stream          | **7.80**  | P3-02                   | Beat-discipline rewarded by skippable pre-roll.                                                |
| 5    | UGC × Meta Feed             | **7.60**  | P1-07                   | Square crop of the Reels asset; near-free derivative.                                          |
| 6    | PAS × Meta Reels            | **7.50**  | P3-02                   | Tied with PAS × Meta Feed.                                                                     |
| 6    | PAS × Meta Feed             | **7.50**  | P3-02                   |                                                                                                |
| 6    | PAS × YT Shorts             | **7.50**  | (P3-02 possible)        |                                                                                                |
| 9    | B/A × Meta Reels            | **7.40**  | —                       | Native fit for a B/A "shared inbox → exclusive calendar" cut; would carry a 5th hook if added. |
| 9    | B/A × Meta Feed             | **7.40**  | —                       |                                                                                                |
| 11   | UGC × YT In-stream          | **7.30**  | —                       | UGC under-performs in-stream — keep the carried UGC hooks (P1-07, P3-15) out of this slot.     |
| 12   | B/A × YT Shorts             | **7.10**  | —                       |                                                                                                |
| 12   | B/A × Google Display        | **7.10**  | —                       | Strongest live-action-derived format for Display.                                              |
| 14   | Screen-rec × YT Shorts      | **6.90**  | P2-12                   |                                                                                                |
| 14   | Screen-rec × YT In-stream   | **6.90**  | P2-12                   |                                                                                                |
| 16   | Animated × Google Display   | **6.80**  | —                       | The Display surface's natural home; 3× re-use multiplier dominates.                            |
| 16   | Founder TH × Meta Feed      | **6.80**  | —                       |                                                                                                |
| 18   | Screen-rec × Meta Reels     | **6.60**  | P2-12                   |                                                                                                |
| 18   | Screen-rec × Google Display | **6.60**  | —                       |                                                                                                |
| 20   | B/A × YT In-stream          | **6.50**  | —                       |                                                                                                |
| 20   | Founder TH × Meta Reels     | **6.50**  | —                       |                                                                                                |
| 20   | Founder TH × YT Shorts      | **6.50**  | —                       |                                                                                                |
| 20   | Animated × Meta Feed        | **6.50**  | —                       |                                                                                                |
| 24   | Animated × Meta Reels       | **6.10**  | —                       |                                                                                                |
| 25   | Screen-rec × Meta Feed      | **6.00**  | P2-12 (lowest priority) |                                                                                                |
| 26   | Animated × YT In-stream     | **5.90**  | —                       |                                                                                                |
| 27   | Animated × YT Shorts        | **5.60**  | —                       |                                                                                                |
| 28   | UGC × Google Display        | **4.60**  | —                       | Live-action wastes the surface; cut.                                                           |
| 29   | Founder TH × Google Display | **4.40**  | —                       | Same; cut.                                                                                     |
| 30   | PAS × Google Display        | **5.40**  | —                       | Display surface penalizes long-form structure.                                                 |

---

## 5. Recommended Creative Test Plan — First 4 Combos to Produce

Pick **4 production tickets**, ordered by start date. Each ticket = (hook × format × platform pair). Designed so:

1. Every carried hook ships in its native format.
2. Two platform buyers are covered in week 1 (Meta + YouTube). Google waits for derivatives in week 2.
3. Production-bottleneck assets (UGC) start booking before fast assets are shot, so the launch sequence runs in parallel.
4. The plan resolves a real format-vs-hook question by week 3 (P3-15 UGC vs P3-02 TH-PAS, same pair, different format).

| #   | Ticket                                       | Hook  | Format                                            | Platforms (in order of cut priority) | Composite          | Start                                               | Why this slot                                                                                                                                                      |
| --- | -------------------------------------------- | ----- | ------------------------------------------------- | ------------------------------------ | ------------------ | --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1   | **T1 — Calculator screen-rec**               | P2-12 | Screen-rec demo                                   | YT Shorts, YT In-stream, Meta Reels  | 6.90 / 6.90 / 6.60 | Day 0                                               | Cheapest, fastest, highest hook-format fit. Ships within 48h and provides the _baseline_ CPL the other tickets are measured against.                               |
| 2   | **T2 — Founder PAS narrative**               | P3-02 | Founder TH with PAS script + B-roll               | Meta Reels, YT In-stream             | 7.50 / 7.80        | Day 1                                               | Same-day-ish shoot once script lands. Tests whether AUTH × ROOF wins on _narrative structure_ alone.                                                               |
| 3   | **T3 — Operator UGC testimonial**            | P1-07 | UGC testimonial (real or vetted-creator operator) | Meta Reels, Meta Feed                | 8.20 / 7.60        | Day 0 (booking starts immediately) → shoot day 7–10 | Highest composite cell in the doc. **Booking starts day 0 even though shoot is week 2** — the operator schedule is the path-critical dependency.                   |
| 4   | **T4 — Receptionist UGC + animated montage** | P3-15 | UGC testimonial + animated B-roll insert          | YT Shorts, Meta Reels                | 7.90 / 8.20        | Day 1 (script + storyboard) → shoot day 10–14       | The receptionist line needs two production tracks (UGC delivery + animated "rejected ads" montage). Highest creative-risk ticket — also highest predicted ceiling. |

### 5.1 Why not 5

A 5th ticket (B/A × Meta Reels for a P1 variant, composite 7.40) would be a strong addition but would force adding a 5th hook, which sim 03 §5 explicitly resisted. **Park as T5** for week 3 if T1–T4 leave any pair under-tested.

### 5.2 Derivative cuts (week 2, near-zero marginal cost)

Once T1–T4 are in market, the following derivative cuts unlock with under a half-day of edit time each. These are not new tickets — they're re-cuts of existing footage.

| Source                         | Derivative                                   | Surface                                                    | Marginal effort |
| ------------------------------ | -------------------------------------------- | ---------------------------------------------------------- | --------------- |
| T1 (screen-rec)                | 1:1 crop with caption-burn                   | Meta Feed                                                  | 1 hour          |
| T2 (founder TH)                | Vertical re-frame with hard-cut B-roll       | YT Shorts                                                  | 2 hours         |
| T2 (founder TH)                | 15s pre-skip cut (just beats 1+3 of the PAS) | YT In-stream (we already had this; this is the alt-length) | 2 hours         |
| T3 (UGC)                       | Static frame + quote pull → image ad         | Meta Feed, Google Display                                  | 1 hour          |
| T4 (animated montage isolated) | Standalone 15s animation                     | Google Display, PMax                                       | 3 hours         |

### 5.3 Decision gates

After **7 days of spend per ticket** (~$2K/ticket), proceed to sim 05 only if:

- At least 2 of 4 tickets clear the **TSR floor of 25%** on their primary surface.
- At least 1 ticket clears the **CTR floor of 1.2%** (the lower bound of the sim 02 prior for all three pairs).
- The P3-02 vs P3-15 comparison shows a CTR delta ≥ 0.3% in either direction (otherwise the format-lift signal is noise and the pair needs a third format to break the tie — likely B/A on the same pair).

Tickets that miss the floor get **one re-cut attempt** (new hook line, same footage) before being killed.

---

## 6. Caveats

1. **Composite weights are uncalibrated.** TSR/HR15/CTR each at 0.30 reflects a v1-stage bias toward volume signal. If sim 02's LQ-binding finding holds in production, re-weight toward CTR (which best predicts intent quality) and re-rank.
2. **All metric ranges are priors.** No live data feeds this sim. First 7 days of spend should overwrite every cell in §1.
3. **UGC sourcing risk is the single largest schedule risk.** Two of the four tickets (T3, T4) depend on it. If no real operator agrees within 10 days, T3 has to fall back to a vetted UGC-creator-as-actor (lower credibility, lower predicted CTR by ~15%).
4. **The CPE → $ mapping assumes Prestyj's existing freelance shooter network.** A cold-start agency would see ~2× costs across all formats.
5. **Google PMax cell scores are coarse.** PMax auto-mixes creative across surfaces; the score here reflects the _asset library_ fit, not the campaign-level CPL. A standalone sim 06 should reconsider Google as a buyer.
6. **TikTok is excluded** per sim 03 §7. Adding TikTok later would change UGC × Reels economics (assets cross-post for free) and likely reshuffle the top of the ranking.
7. **The "PAS-as-format" treatment is a deliberate simplification.** In production, PAS scripts will be shot as either UGC or TH — the score for PAS × Surface should be read as "best-case PAS-structured asset on that surface." If a UGC-PAS hybrid is produced, score it against the higher of the two parent cells.
