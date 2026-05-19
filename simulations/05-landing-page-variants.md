# Landing-Page Variants — Per Winning Angle

**Simulation:** 05
**Date:** 2026-05-18
**Inputs:** Top 5 winning cells + 3 exploration cells from `02-angle-icp-matrix.md` §4–5. Existing page templates surveyed across `src/app/free-ads/**`, `src/app/lead-magnet/**`, `src/app/*-calculator*/`.
**Goal:** For each winning angle/ICP/offer, generate a variant matrix across 5 structural dimensions, predict CVR / time-on-page / lead quality, and map each recommended variant to a concrete Prestyj template to clone. Output ranked LP build order (top 3 to ship first).

---

## 0. Framing — How to Read This Document

### 0.1 The five variant dimensions

Each angle/ICP/offer pair is simulated across the same five structural dimensions, holding copy/offer/ICP constant:

| Dim                           | A side                                                      | B side                                           | What it actually changes                                                                                            |
| ----------------------------- | ----------------------------------------------------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------- |
| **D1 Length**                 | Long-form (8–12 sections, ~2,000 words)                     | Short-form (3–5 sections, < 500 words)           | Comprehension depth vs scroll friction. Long-form moves un-pre-sold cold traffic; short-form converts warm/branded. |
| **D2 Hero asset**             | Video-first (autoplay hero, ≥30s, transcripts/captions)     | Headline-first (large H1 + sub + bullet bullets) | Time-to-trust mechanism. Video = parasocial authority; headline = scannability.                                     |
| **D3 Conversion mechanic**    | Calculator-embed (input → personalized reveal → email gate) | Form-only (single application or PDF gate)       | Self-qualification engagement vs application friction.                                                              |
| **D4 Social-proof placement** | Above-fold (logos/numbers within first 600px)               | Below-fold (after problem framing)               | Authority injection point. Above = trust-first; below = pain-first.                                                 |
| **D5 CTA architecture**       | Single CTA (one button, repeated)                           | Multi-step (typeform-style, 4–7 micro-yeses)     | Decision tax. Single = lowest cog load for high-intent; multi-step = highest qualification + LQ.                    |

### 0.2 Metrics predicted per variant

- **LP CVR %** — primary conversion-action range. Sits inside the offer's tournament baseline (O1 4–9%, O2 12–22%, O6 4–9%), with structural lift/drag from the variant dimensions applied multiplicatively.
- **Time-on-page (TOP)** — median seconds, predicted band. Used as a secondary intent signal; long TOP + low CVR = wrong CTA, low TOP + low CVR = wrong hook.
- **LQ** — Lead Quality 1–10, carried from the parent cell in §2 of the angle-ICP matrix, then adjusted by structural friction (more friction → higher LQ, lower CVR; less friction → lower LQ, higher CVR).
- **Conf** — H/M/L. Confidence is **inherited from the parent cell**, then downgraded one tier if the variant introduces dimensions Prestyj hasn't tested (e.g. multi-step typeform).

### 0.3 Lift math (heuristic, not measured)

Variant lifts/drags are applied to the parent cell's mid-CVR using these constants. They are **priors**, not measurements — designed to be overwritten after 80–150 leads/variant.

| Dimension       | A side multiplier                                        | B side multiplier                | Cold-traffic skew                                                                       |
| --------------- | -------------------------------------------------------- | -------------------------------- | --------------------------------------------------------------------------------------- |
| D1 Length       | Long ×1.05 (cold), ×0.90 (warm)                          | Short ×0.85 (cold), ×1.10 (warm) | Cold favors long.                                                                       |
| D2 Hero         | Video ×1.15 cold, ×1.05 warm                             | Headline ×0.95 cold, ×1.10 warm  | Cold favors video.                                                                      |
| D3 Mechanic     | Calculator ×2.0 (vs application baseline), ×1.0 (vs PDF) | Form-only ×1.0 baseline          | Calculator dominates O2-class offers; flat for O1/O6 because the mechanic is the offer. |
| D4 Social proof | Above-fold ×1.10 cold                                    | Below-fold ×0.95 cold            | Cold traffic underweights logos placed after 1,500px.                                   |
| D5 CTA          | Single ×1.15 CVR, ×0.85 LQ                               | Multi-step ×0.80 CVR, ×1.20 LQ   | Multi-step trades CVR for LQ.                                                           |

**Why these numbers.** Pulled from public LP benchmark studies (Unbounce ≈ 5–11% across SaaS, Klientboost calculator post-mortems on 1.5–2.5× lift, multi-step Typeform reports of 0.75–0.85× CVR with 1.15–1.30× LQ proxies). Treat as direction, not magnitude.

### 0.4 What this simulation does NOT do

- Does not test copy variants (handled in `03-hooks-headlines.md`).
- Does not test creative formats (handled in `04-creative-formats.md`).
- Does not predict cost or media-plan impact (out of scope).
- Does not generate code. Mapping column points at the template to clone; build is downstream.

---

## 1. Template Inventory (Prestyj existing pages)

Reference catalog used by every "Clone From" cell below. Components live under `src/components/free-ads/**`, `src/components/lead-magnet/**`, and `src/components/sections/calculator/**`.

| Template ID            | Path                                                                                                 | Pattern shape                                                                                                          | Best for                                                                                                                      |
| ---------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| **T-FREEADS-GENERIC**  | `src/app/free-ads/page.tsx`                                                                          | `HeroVideo → SocialProof → StatsSection → LiveProof → OfferBreakdown → ComparisonSection → LeadForm → FAQ`             | Long-form, video-first, above-fold social proof, single CTA repeated. Cold-traffic workhorse.                                 |
| **T-FREEADS-INDUSTRY** | `src/app/free-ads/hvac/page.tsx` (also `roofers/`, `plumbers/`, `contractors/`)                      | `IndustryHero → IndustryPainPoints → SocialProof → OfferBreakdown → LeadForm → FAQ`                                    | Medium-length, headline-first with industry-specific pain section, below-fold social proof, single CTA. ICP-localized clones. |
| **T-LEADMAGNET-PDF**   | `src/app/lead-magnet/brokerage-playbook/page.tsx` (also `qualvol-`, `roofing-playbook`)              | Long-form hero + inline form (name/email/company + 2 qualifier fields) → PDF download. Uses `BorderGlow`, motion.      | PDF/playbook gate. Multi-field form ≈ light multi-step. Single CTA.                                                           |
| **T-LEADMAGNET-LIVE**  | `src/app/lead-magnet/reactivate-leads/page.tsx`                                                      | Live-demo hero → phone-capture form → triggers outbound AI call within 60s.                                            | Highest-friction, highest-LQ. Phone gate + consent. Functions as a real demo, not a download.                                 |
| **T-CALC-AICALL**      | `src/app/ai-call-handling-calculator/page.tsx` + `components/sections/calculator/roi-calculator.tsx` | Slim hero → embedded multi-step calculator → email-gated personalized report. Results page at `ai-calculator-results`. | HVAC/contractor pain-frame calculator. The strongest O2 asset.                                                                |
| **T-CALC-REAL-ESTATE** | `src/app/real-estate-roi-calculator/page.tsx`                                                        | Same pattern as T-CALC-AICALL but ad-spend + commission inputs, team-shaped.                                           | Team/agent ICPs. ROI math, not missed-call math.                                                                              |
| **T-CALC-TEAM-COMM**   | `src/app/team-commission-calculator/page.tsx` + `components/lead-magnet/team-calculator-form.tsx`    | Hero with trust stats → typeform-style calculator → personalized commission-loss reveal.                               | Real-estate team aspiration calculator. The native fit for the §5 exploration cell #8.                                        |

---

## 2. Variant Matrix — Core Winning Cells

Eight cells from `02-angle-icp-matrix.md` §5 are simulated below: top 5 core + 3 exploration. Each section has:

- The parent cell summary (carried verbatim).
- A 5-row variant matrix (one row per dimension's recommended choice + key alternative).
- Predicted LP CVR / TOP / LQ / Conf.
- The recommended winning variant (✅).
- The Prestyj template to clone.

### 2.1 Cell #1 — O6 Trial · PAIN · HVAC 🥇

**Parent cell:** CTR 1.6–2.5% · LP 5–9% · LQ 8 · H. _"You've burned $60K/yr on lead-gen sites. We deliver 20 booked installs or you don't pay."_ Highest-leverage hook in the matrix.

| #     | D1 Length | D2 Hero        | D3 Mechanic                                                  | D4 Social proof | D5 CTA                         | LP CVR   | TOP      | LQ    | Conf |
| ----- | --------- | -------------- | ------------------------------------------------------------ | --------------- | ------------------------------ | -------- | -------- | ----- | ---- |
| V1 ✅ | Long      | Video-first    | Application form (form-only)                                 | Above-fold      | Multi-step (5 micro-questions) | **5–9%** | 180–260s | **9** | H    |
| V2    | Long      | Video-first    | Form-only                                                    | Above-fold      | Single CTA                     | 6–11%    | 140–200s | 7     | H    |
| V3    | Short     | Headline-first | Form-only                                                    | Above-fold      | Single CTA                     | 4–8%     | 50–90s   | 6     | M    |
| V4    | Long      | Headline-first | Calculator-embed (light, "what's your spend?") → application | Above-fold      | Multi-step                     | 7–12%    | 200–280s | 8     | M    |
| V5    | Long      | Video-first    | Form-only                                                    | Below-fold      | Multi-step                     | 4–7%     | 170–240s | 9     | M    |

**Why V1 wins.** Guarantee offers need to feel under-promise/over-deliver. Multi-step friction is _the_ qualification lever — it filters tire-kickers while signalling the offer is serious. Video-first establishes risk-reversal credibility (founder on camera saying "we don't get paid unless you do"). Above-fold social proof (logos + a single $4M-operator number) primes trust before the pain salvo. The simulation's signature cell deserves the LQ-maximizing variant, not the CVR-maximizing one.

**V4 is the contender** if first-30-day data shows LQ holding above 7 even without multi-step — calculator pre-frames the pain better than a static section.

**Clone from:** **T-FREEADS-INDUSTRY** (`src/app/free-ads/hvac/page.tsx`) for the shell; swap the application form to a typeform-style multi-step (lift the field set from `T-LEADMAGNET-PDF`). New route: `/guaranteed-leads/hvac`.

---

### 2.2 Cell #2 — O2 Calculator · PAIN · HVAC 🥈

**Parent cell:** CTR 1.5–2.3% · LP 18–28% · LQ 7 · H. _"Find out how much missed-call revenue you lost last August."_ Calculator purpose-built for ICP.

| #     | D1 Length | D2 Hero        | D3 Mechanic                      | D4 Social proof | D5 CTA                            | LP CVR     | TOP      | LQ  | Conf |
| ----- | --------- | -------------- | -------------------------------- | --------------- | --------------------------------- | ---------- | -------- | --- | ---- |
| V1 ✅ | Short     | Headline-first | Calculator-embed (existing)      | Above-fold      | Single CTA (email gate at reveal) | **20–28%** | 110–170s | 7   | H    |
| V2    | Long      | Video-first    | Calculator-embed                 | Above-fold      | Single CTA                        | 16–24%     | 180–260s | 7   | M    |
| V3    | Short     | Headline-first | Calculator + form-only follow-up | Below-fold      | Single CTA                        | 18–25%     | 100–150s | 6   | M    |
| V4    | Short     | Headline-first | Calculator-embed                 | Above-fold      | Multi-step pre-calc qualifier     | 14–20%     | 130–180s | 8   | M    |
| V5    | Long      | Headline-first | Calculator-embed                 | Above-fold      | Single CTA                        | 18–25%     | 160–220s | 7   | M    |

**Why V1 wins.** Calculators _are_ the multi-step. Adding length, video, or extra CTAs adds friction to an already-engaged tool. The asset already exists; ship it warm, not warm-and-renovated. Hero should be 1–2 lines of headline + sub, then drop straight into inputs — anything between the hook and the first input wastes the diagnostic urgency the hook just created.

**V4 is the contender** when running paid retargeting against people who already engaged the calculator once — extra qualifier pre-step keeps LQ in the 8 range for sales hand-off.

**Clone from:** **T-CALC-AICALL** (`src/app/ai-call-handling-calculator/page.tsx`). Already operational for this exact angle/ICP. **No clone required** — A/B test hero copy against the existing live page is the v1 move. If a roof-localized variant is needed, clone the route to `/ai-call-handling-calculator/hvac` and tighten the input defaults to HVAC ranges.

---

### 2.3 Cell #3 — O1 Cohort · AUTH · ROOF 🥉

**Parent cell:** CTR 1.4–2.1% · LP 7–12% · LQ 9 · H. _"Watch how a $4.2M Phoenix roofer filled August with 300 fresh creatives."_ Peer case study from a same-segment roofer.

| #     | D1 Length | D2 Hero                                      | D3 Mechanic                    | D4 Social proof         | D5 CTA     | LP CVR    | TOP      | LQ    | Conf |
| ----- | --------- | -------------------------------------------- | ------------------------------ | ----------------------- | ---------- | --------- | -------- | ----- | ---- |
| V1 ✅ | Long      | Video-first (case-study video as hero, ≥60s) | Application (multi-step)       | Above-fold (peer logos) | Multi-step | **8–12%** | 240–340s | **9** | H    |
| V2    | Long      | Headline-first                               | Application multi-step         | Above-fold              | Multi-step | 6–10%     | 180–260s | 9     | M    |
| V3    | Short     | Video-first                                  | Form-only                      | Below-fold              | Single CTA | 5–9%      | 80–130s  | 7     | M    |
| V4    | Long      | Video-first                                  | Calculator-embed → application | Above-fold              | Multi-step | 9–13%     | 280–380s | 8     | M    |
| V5    | Long      | Video-first                                  | Application single CTA         | Above-fold              | Single CTA | 10–14%    | 200–280s | 7     | H    |

**Why V1 wins.** AUTH angle is _carried by the video_ — a same-segment roofer narrating their own results is the actual asset. Headline-first throws the asset away. Multi-step application matches the "5 spots, founders only" scarcity framing — easy applications cheapen the cohort.

**V5 is the contender** if first-week data shows application drop-off at step 3+ above 60% — a single-CTA application with stronger qualifier copy can rescue CVR without leaking too much LQ.

**Critical asset gap (carried from §6.3 of the angle-ICP matrix):** _V1 requires a real roof case-study video to exist_. If not, V1's "Conf" downgrades to L and V5 becomes the launch variant with text + photo testimonial in lieu of video.

**Clone from:** **T-FREEADS-GENERIC** (`src/app/free-ads/page.tsx`) for the shell — already has `HeroVideo + SocialProof + LiveProof + OfferBreakdown + LeadForm` in correct order. Replace `HeroVideo` content with the roof case study, swap `LeadForm` for a multi-step application. New route: `/founding-cohort/roofing`.

---

### 2.4 Cell #4 — O1 Cohort · AUTH · HVAC (paired with #3)

**Parent cell:** CTR 1.3–2.0% · LP 7–11% · LQ 9 · H. Mirror of #3 on the other top ICP.

Variant matrix is **identical structure to §2.3** — same dimensions win. Numbers shift slightly:

| #              | D1   | D2                                 | D3                     | D4         | D5         | LP CVR    | TOP      | LQ    | Conf |
| -------------- | ---- | ---------------------------------- | ---------------------- | ---------- | ---------- | --------- | -------- | ----- | ---- |
| V1 ✅          | Long | Video-first (HVAC peer case study) | Application multi-step | Above-fold | Multi-step | **7–11%** | 230–320s | **9** | H    |
| V5 (contender) | Long | Video-first                        | Application single CTA | Above-fold | Single CTA | 9–13%     | 190–270s | 7     | H    |

**Asset gap:** Same as §2.3 — an HVAC peer case study is required for V1 confidence.

**Clone from:** **T-FREEADS-INDUSTRY** (`src/app/free-ads/hvac/page.tsx`). Replace `IndustryHero` with case-study video hero, replace `LeadForm` with multi-step application. New route: `/founding-cohort/hvac`.

**Pairing note.** §2.3 and §2.4 should ship together — same template variant, swap ICP. Side-by-side spend with the same offer mechanic and structure is exactly the kind of two-cell test the angle-ICP matrix recommends as v1.

---

### 2.5 Cell #5 — O6 Trial · AUTH · HVAC

**Parent cell:** CTR 1.4–2.1% · LP 6–10% · LQ 9 · H. _"How Mesa Plumbing & HVAC got 47 installs in 30 days under our guarantee."_ Retargeting closer for #1.

| #     | D1 Length | D2 Hero                  | D3 Mechanic                    | D4 Social proof | D5 CTA     | LP CVR    | TOP      | LQ    | Conf |
| ----- | --------- | ------------------------ | ------------------------------ | --------------- | ---------- | --------- | -------- | ----- | ---- |
| V1 ✅ | Long      | Video-first (case study) | Application multi-step         | Above-fold      | Multi-step | **6–10%** | 220–310s | **9** | H    |
| V2    | Long      | Video-first              | Application                    | Above-fold      | Single CTA | 7–11%     | 180–250s | 7     | H    |
| V3    | Long      | Video-first              | Calculator-embed → application | Above-fold      | Multi-step | 8–12%     | 260–360s | 8     | M    |
| V4    | Short     | Video-first              | Form-only                      | Above-fold      | Single CTA | 5–9%      | 90–140s  | 6     | M    |

**Why V1 wins.** This page exists to _close_ people who already saw the PAIN × HVAC ad and didn't apply. The job is to dismantle one objection: "is the guarantee real?" — and the answer is a peer-validation video + scarcity-shaped application. Same V1 logic as §2.1, with the video swapped from founder-on-camera to operator-on-camera.

**Clone from:** Same shell as §2.4 (`/founding-cohort/hvac`) — but **distinct route** `/guaranteed-leads/hvac/case-study` so the retargeting audience is isolated. Reuse `T-FREEADS-INDUSTRY`. Inherits the multi-step application from §2.1.

---

## 3. Variant Matrix — Exploration Cells

These three cells are deliberate "explore" picks from §5 of the angle-ICP matrix — smaller spend, higher uncertainty, asymmetric upside. Variant matrices are compressed because the goal is "find one variant cheap enough to validate the cell."

### 3.1 Cell #6 — O2 Calculator · CON · SOLAR

**Parent cell:** CTR 1.8–2.6% · LP 16–25% · LQ 7 · M. _"Why your $700 CPL is the symptom, not the disease."_

| #     | D1    | D2                                 | D3               | D4                                | D5         | LP CVR     | TOP      | LQ  | Conf |
| ----- | ----- | ---------------------------------- | ---------------- | --------------------------------- | ---------- | ---------- | -------- | --- | ---- |
| V1 ✅ | Short | Headline-first (contrarian H1)     | Calculator-embed | Above-fold (solar-specific logos) | Single CTA | **17–25%** | 120–180s | 7   | M    |
| V2    | Long  | Video-first (founder thesis video) | Calculator-embed | Below-fold                        | Single CTA | 14–22%     | 200–280s | 7   | M    |

**Why V1 wins.** Contrarian needs the _thesis_ visible before any input — a calculator that buries the contrarian framing in a video undercuts the whole angle. Solar operators don't watch hero videos from unknown vendors; they scan for the thesis, then engage if it's heretical enough.

**Clone from:** **T-CALC-AICALL** with a copy/input pass to swap missed-call vocabulary for CPL/blended-cost vocabulary. New route: `/cpl-disease-calculator` (or merge into `/ai-call-handling-calculator/solar`).

---

### 3.2 Cell #7 — O1 Cohort · CON · SOLAR

**Parent cell:** CTR 1.9–2.8% · LP 6–9% · LQ 8 · H. _"Why every lead-gen channel for solar is broken — and what 5 operators are doing instead."_ Tests whether solar will apply, not just engage.

| #     | D1   | D2                                           | D3                     | D4         | D5         | LP CVR   | TOP      | LQ  | Conf |
| ----- | ---- | -------------------------------------------- | ---------------------- | ---------- | ---------- | -------- | -------- | --- | ---- |
| V1 ✅ | Long | Video-first (founder contrarian thesis, 90s) | Application multi-step | Above-fold | Multi-step | **6–9%** | 250–340s | 8   | M    |
| V2    | Long | Headline-first                               | Application single CTA | Above-fold | Single CTA | 7–10%    | 190–260s | 6   | M    |

**Why V1 wins.** Contrarian + cohort = "join the heretics" identity play. Video carries the thesis; multi-step application matches the cohort's "founders only" framing.

**Clone from:** **T-FREEADS-GENERIC** with a contrarian copy pass and a solar-localized case section. New route: `/founding-cohort/solar`. **Asset gap is severe** — requires solar peer footage to exist; without it, V1 confidence drops to L and V2 becomes the launch variant.

---

### 3.3 Cell #8 — O2 Calculator · ASP · TEAM

**Parent cell:** CTR 1.3–2.0% · LP 14–22% · LQ 6 · M. Aspiration on team-GCI growth ("add a $200K agent's worth of pipeline without hiring").

| #     | D1    | D2                                  | D3                          | D4         | D5         | LP CVR     | TOP      | LQ  | Conf |
| ----- | ----- | ----------------------------------- | --------------------------- | ---------- | ---------- | ---------- | -------- | --- | ---- |
| V1 ✅ | Short | Headline-first (aspirational H1)    | Calculator-embed (existing) | Above-fold | Single CTA | **16–22%** | 110–160s | 6   | M    |
| V2    | Long  | Video-first (team-lead testimonial) | Calculator-embed            | Above-fold | Multi-step | 13–19%     | 180–250s | 7   | M    |

**Why V1 wins.** The asset already exists (`/team-commission-calculator`) and matches both the ICP and the angle. Adding length/video where a working calculator already lives is over-engineering.

**Clone from:** **T-CALC-TEAM-COMM** (`src/app/team-commission-calculator/page.tsx`). **No clone required** — A/B-test hero copy on the existing route. If a per-segment variant is needed, clone to `/team-commission-calculator/large-team`.

---

## 4. Cross-Cell Patterns

Patterns that recur across §2 and §3:

1. **Video-first wins every cohort/trial page, headline-first wins every calculator.** The asset's job is different — cohort/trial pages must build trust before the ask (video), calculators must minimize friction before the input (headline). Don't mix.
2. **Above-fold social proof wins in 8/8 winning variants.** Cold traffic underweights below-fold logos. The exception is when social proof _is_ the page (case-study format) — then it's no longer "proof," it's the offer.
3. **Multi-step CTA wins on application offers (O1, O6); single CTA wins on calculators (O2).** Aligns with the dim-5 lift math: multi-step trades CVR for LQ, and O1/O6 are LQ-bound while O2 is CVR-bound.
4. **Length tracks intent.** Cold = long. Warm/retargeting = short. The retargeting closer (§2.5) is the exception that proves the rule — it's "warm" by audience but "cold" by skepticism (the guarantee objection), so it stays long.
5. **No variant uses both calculator-embed AND application form on the same page.** Stacking two mechanics doubles friction without doubling commitment. The calculator should _route to_ an application on a separate page, not embed within it.

---

## 5. Recommended LP Build Order (Top 3 to Ship First)

Ranked by **leverage** = (winning-variant CVR × parent-cell LQ × asset-readiness × angle-ICP rank). "Asset-readiness" weights existing routes/components above new builds.

### 🥇 LP #1 — `/ai-call-handling-calculator` (refresh, not rebuild)

- **Cell:** §2.2 (O2 PAIN × HVAC, simulation rank #2).
- **Variant:** V1 — short, headline-first, calculator-embed, above-fold social proof, single CTA.
- **Action:** A/B-test the hero copy against the angle-ICP matrix winning hook from `03-hooks-headlines.md`. Tighten the input defaults to HVAC ranges. Confirm above-fold social proof is in the visible viewport on mobile (≤ 600px from top).
- **Why first:** zero clone cost, asset is live, parent cell has H confidence, highest expected CVR ceiling of any cell (28%). Ships in days, not weeks.

### 🥈 LP #2 — `/guaranteed-leads/hvac` (new clone)

- **Cell:** §2.1 (O6 PAIN × HVAC, simulation rank #1).
- **Variant:** V1 — long, video-first, multi-step application, above-fold social proof.
- **Clone source:** `T-FREEADS-INDUSTRY` (`src/app/free-ads/hvac/page.tsx`).
- **Action:** Clone the route. Replace the `IndustryHero` with a founder-on-camera risk-reversal video. Keep `IndustryPainPoints` (already HVAC-tuned). Replace `LeadForm` with a multi-step application that mirrors the brokerage-playbook field set (name/email/company/team-size/spend) plus a payment-hold qualifier. Inherit `SocialProof`, `OfferBreakdown`, `FreeAdsFAQ`.
- **Why second:** highest-leverage hook in the entire matrix; needs a real new build but template inheritance is heavy. Single biggest revenue mover if it lands. Schedule the founder video shoot in parallel.

### 🥉 LP #3 — `/founding-cohort/hvac` + `/founding-cohort/roofing` (paired clone)

- **Cells:** §2.3 + §2.4 (O1 AUTH × ROOF and × HVAC, simulation ranks #3 + #4).
- **Variant:** V1 (both) — long, video-first (case study), multi-step application, above-fold social proof.
- **Clone source:** `T-FREEADS-INDUSTRY` (HVAC) and `T-FREEADS-GENERIC` (roofing).
- **Action:** Build both as a paired launch so paid spend can A/B the ICP holding angle/offer constant. **Blocked on asset:** requires same-segment peer case-study videos. If the videos aren't producible in <14 days, defer this slot and promote LP #4 (see below).
- **Why third:** highest-LQ winning variants in the matrix (LQ 9). Critical for the founding cohort itself to seed the AUTH asset for v2. Recursive value: shipping these pages without case-study videos defeats the variant — wait for the asset.

### Backup — LP #4 (promote if LP #3 is asset-blocked)

- **Cell:** §2.5 (O6 AUTH × HVAC, simulation rank #5).
- **Variant:** V1 — same shell as LP #2, distinct route `/guaranteed-leads/hvac/case-study`.
- **Why backup:** depends on the same peer case-study asset as LP #3 — so if that asset is unblocked, LP #3 produces more value (two ICPs vs one) for similar effort. If only HVAC video is producible, LP #4 ships standalone as the retargeting closer for LP #2.

### Explicitly deferred (do **not** ship in v1)

- All AGENT cells — economics ceiling (carried from §5 of the angle-ICP matrix).
- All CUR-only cells — high-CTR, low-CVR; don't justify a dedicated LP build.
- Solar exploration cells (§3.1, §3.2) — wait for HVAC/Roof data to reprice before allocating LP build time.

---

## 6. Caveats & What Would Change This

1. **Lift math is heuristic.** The dim-multipliers in §0.3 are public-benchmark priors, not Prestyj data. First 30 days of LP traffic against any variant overwrite these constants for that LP.
2. **Confidence inherits from the parent cell, not the variant.** A "H" cell with an untested multi-step CTA still ships at M conf on the CTA dimension specifically. If multi-step drop-off looks pathological week 1, swap to single CTA.
3. **Case-study video is a dependency, not a deliverable.** LPs #3, #4 and exploration cells §3.2 all assume same-segment peer footage exists. If it doesn't, the AUTH variants collapse to PAIN variants until the asset is produced. **Recursive dependency carried from §6.3 of the angle-ICP matrix.**
4. **Mobile-first.** Above-fold rules in §0.3 assume a 390×844 viewport. Tablet/desktop social-proof placement is more forgiving; mobile is the binding constraint for D4 wins.
5. **Replace this matrix once 80–150 sessions/variant exist.** Predicted CVR ranges are placeholders for evidence.
6. **Sequencing assumes parallel ad budget.** If only one LP can be staffed at a time, ship in the order above. If two can ship in parallel, LP #1 + LP #2 is the right pair (different offers, different funnel positions, no asset conflict).

---

## 7. Hand-off

This document feeds two downstream artifacts:

- **Engineering ticket spec.** Build order in §5 maps 1:1 to ticket scope. Each ticket should reference the template ID (§1) and the winning variant (§2/§3) it instantiates.
- **Simulation 06 (Ad-Set Targeting / Media Plan).** Each shipped LP becomes a destination URL the media plan optimizes toward. CVR ranges from this doc become the threshold bands for ad-set kill/keep decisions.
