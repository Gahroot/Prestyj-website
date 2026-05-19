# Angle × ICP Matrix — Top 3 Offers

**Simulation:** 02
**Date:** 2026-05-18
**Inputs:** Top 3 offers from `01-offer-tournament.md` (O1 Founding Cohort, O2 ROI Calculator, O6 Guaranteed-Leads Trial).
**Goal:** For each offer, simulate 5 angles × 5 ICPs (25 cells) and predict ad CTR, LP conversion, lead quality, and confidence. Surface the top 5 cells overall and the recommended pairs to seed Simulation 03 (Hook/Headline).

---

## 0. Framing — How to Read This Document

**The five angles.**

| Code     | Angle               | Core emotional driver   | Example copy seed                                                              |
| -------- | ------------------- | ----------------------- | ------------------------------------------------------------------------------ |
| **PAIN** | Pain / loss framing | Fear of continued bleed | "Stop wasting $5k/mo on bad leads" / "Your competitors are already doing this" |
| **ASP**  | Aspiration          | Future-state pull       | "Book 30 jobs/mo on autopilot"                                                 |
| **AUTH** | Authority / proof   | Trust via results       | "How a $4M HVAC operator closed 47 installs in 30 days"                        |
| **CUR**  | Curiosity           | Pattern-interrupt       | "The weird AI ad format closing roofers at 40%"                                |
| **CON**  | Contrarian          | Status / insider        | "Why Google Ads is dead for contractors"                                       |

**The five ICPs.**

| Code      | ICP                                  | Notes                                                                           |
| --------- | ------------------------------------ | ------------------------------------------------------------------------------- |
| **HVAC**  | $3M+ HVAC operators                  | Owner-operator, paid-ads literate, seasonal swings, missed-call pain very real. |
| **ROOF**  | $3M+ residential roofing             | Storm/retail mix, high ticket, lead aggregators have burned them.               |
| **SOLAR** | $3M+ residential solar               | Compressed margins post-NEM3, brutal lead costs, very paid-ads sophisticated.   |
| **AGENT** | Solo real-estate agents (GCI $250K+) | DIY-curious, smaller ad budget, more "marketing tactics" tolerant.              |
| **TEAM**  | Real-estate teams (GCI $1M+)         | Run paid, have ISAs, treat marketing more like contractors do.                  |

**Metrics per cell.**

- **CTR** — predicted cold paid-social CTR on the ad (range, %). Baseline A2 = 1.0–1.8%.
- **LP CVR** — landing-page primary-action conversion (range, %). Baselines: O1 application 4–9% (A6), O2 calculator 12–22% (A5), O6 trial application 4–9% (A6).
- **LQ** — Lead Quality score 1–10. 10 = matches $3M+ ICP, has budget, in-buying-window. 1 = tire-kicker.
- **Conf** — Confidence in the prediction, **L/M/H**. L = high model uncertainty (thin priors). M = moderate. H = backed by clear directional priors from the tournament + standard paid-social benchmarks.

**Why ranges.** Single-point predictions over-claim. Ranges force the next test plan to instrument actual lift bands.

**Anchoring.** All predictions sit inside the assumption ranges from Simulation 01 (A1–A11). When a cell predicts above-range, the per-cell reasoning calls out _why_ the angle compounds the baseline.

---

## 1. Offer O1 — Founding Cohort (free 300-ad batch, 5 spots)

**Offer mechanics.** Application-style flow at `/founding-cohort`. Requires testimonial + Google review + spend commitment. PV 9, FR 4, QP 9. Best for buyers who already believe in paid ads and want creative volume + risk-free entry.

### 1.1 Matrix

| Angle ↓ / ICP → | HVAC                                   | ROOF                                   | SOLAR                                 | AGENT                                 | TEAM                                  |
| --------------- | -------------------------------------- | -------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| **PAIN**        | CTR 1.4–2.2% · LP 6–10% · LQ 8 · **H** | CTR 1.6–2.4% · LP 6–10% · LQ 8 · **H** | CTR 1.5–2.2% · LP 5–8% · LQ 7 · **M** | CTR 1.0–1.6% · LP 3–6% · LQ 4 · **M** | CTR 1.2–1.8% · LP 4–7% · LQ 6 · **M** |
| **ASP**         | CTR 1.2–1.9% · LP 5–9% · LQ 7 · **H**  | CTR 1.3–2.0% · LP 5–9% · LQ 7 · **H**  | CTR 1.0–1.6% · LP 4–7% · LQ 6 · **M** | CTR 1.3–2.0% · LP 4–7% · LQ 5 · **M** | CTR 1.2–1.8% · LP 5–8% · LQ 7 · **M** |
| **AUTH**        | CTR 1.3–2.0% · LP 7–11% · LQ 9 · **H** | CTR 1.4–2.1% · LP 7–12% · LQ 9 · **H** | CTR 1.2–1.8% · LP 5–9% · LQ 8 · **M** | CTR 0.9–1.4% · LP 3–5% · LQ 5 · **L** | CTR 1.1–1.7% · LP 5–8% · LQ 7 · **M** |
| **CUR**         | CTR 1.8–2.8% · LP 4–7% · LQ 6 · **M**  | CTR 2.0–3.0% · LP 5–8% · LQ 7 · **M**  | CTR 1.7–2.5% · LP 4–7% · LQ 6 · **M** | CTR 1.6–2.4% · LP 3–6% · LQ 4 · **M** | CTR 1.5–2.2% · LP 4–6% · LQ 5 · **M** |
| **CON**         | CTR 1.7–2.6% · LP 5–8% · LQ 7 · **M**  | CTR 1.8–2.6% · LP 5–9% · LQ 7 · **M**  | CTR 1.9–2.8% · LP 6–9% · LQ 8 · **H** | CTR 1.4–2.1% · LP 4–6% · LQ 5 · **L** | CTR 1.3–2.0% · LP 4–7% · LQ 6 · **M** |

### 1.2 Per-cell reasoning (O1)

**PAIN × HVAC.** Bad-lead fatigue is the dominant emotion in this ICP; the "I'm done paying for shared HomeAdvisor leads" pain is universal. Application-style LP converts above A6 baseline because the pain → free batch logic is clean. _Why it lands:_ concrete dollar bleed they recognize on their P&L this quarter.

**PAIN × ROOF.** Storm-chasing + aggregator burnout = even higher resonance than HVAC. "Stop paying $80 for shared leads" reads almost literal. _Why it lands:_ roofers have been burned hardest by lead-gen marketplaces; risk-reversed creative offer is unusually credible to them.

**PAIN × SOLAR.** Post-NEM3 pain is real but more about close rate / appointment quality than ad creative. Free ads helps but isn't the primary felt pain. _Why it lands less:_ solar's pain is downstream of creative (it's policy + setter quality), so the offer is one step removed from the wound.

**PAIN × AGENT.** Solo agents rarely frame their problem as "bad leads costing me $5k/mo" — they frame it as "I need more buyers." Application friction is a wall. _Why it doesn't land:_ mismatch on both budget identity ($5K/mo is unrealistic for most solos) and ad-savviness.

**PAIN × TEAM.** Teams behave more like contractors — they do feel CPL pain. But the "300 ads" deliverable is still mostly a contractor-shaped solution; teams want ISA flows, not creative volume. _Why it half-lands:_ pain is right, deliverable is partially wrong.

**ASP × HVAC.** "Book 30 installs/mo on autopilot" is the right shape, but HVAC operators are spreadsheet-skeptical of "autopilot" promises. CTR solid, LP slightly under PAIN. _Why it lands but caps:_ aspiration framing competes with their natural skepticism on application step.

**ASP × ROOF.** Same as HVAC, with a small bump because roofers chase storm-driven upside more aggressively. _Why it lands:_ peak-season FOMO compounds the aspiration message.

**ASP × SOLAR.** Solar's "autopilot pipeline" promise is exactly what every competitor claims; aspiration is the saturated angle here. _Why it lands less:_ category-level claim fatigue.

**ASP × AGENT.** Agents _love_ aspiration messaging ("close 4 more deals/mo") but the cohort's $1,997/mo + spend commitment kills LP CVR. _Why it half-lands:_ great hook, wrong economic shape for the audience.

**ASP × TEAM.** Aspiration tied to team-GCI growth ("add a $200K agent's worth of pipeline without hiring") fits well. _Why it lands:_ teams already think in production-multiplier language.

**AUTH × HVAC.** "Watch how a $4.2M Phoenix HVAC operator filled August with 300 fresh creatives" — peer proof from a same-sized peer is the highest-converting flavor for this ICP. _Why it lands:_ $3M+ HVAC owners benchmark obsessively against same-segment peers; identity match drives both CTR and LP CVR above range.

**AUTH × ROOF.** Same dynamic as HVAC, slightly higher because roofers consume case studies on Facebook groups voraciously. _Why it lands:_ peer benchmarking is louder in roofing community than almost any other trade.

**AUTH × SOLAR.** Authority works but solar operators discount case studies aggressively (they've seen too many faked screenshots). _Why it lands less:_ trust ceiling on third-party claims is lower here.

**AUTH × AGENT.** Case studies from "another agent" don't move solo agents the way they move contractors — they read as competitive threat, not aspiration. _Why it doesn't land:_ identity dynamics invert (peers = competition, not validation).

**AUTH × TEAM.** Teams respond to authority better than solos (they think operationally) but a contractor-flavored case study mis-targets. A team-specific case study would push to H confidence. _Why it half-lands:_ angle is right, asset doesn't exist yet.

**CUR × HVAC.** Curiosity gets the highest CTR (pattern interrupt > everything in feed) but LP CVR sags because the application is a big ask after a "weird AI" promise. _Why it half-lands:_ CTR/LP trade — common pattern for curiosity hooks.

**CUR × ROOF.** Same pattern as HVAC with slightly higher CTR — roofers scroll more on FB and are more curiosity-bait susceptible. _Why it half-lands:_ gets the click, loses the application.

**CUR × SOLAR.** Solar buyers (operators) are jaded on "weird new format" angles; they've seen 10 of them this year. _Why it half-lands:_ curiosity fatigue in category.

**CUR × AGENT.** Agents love the curiosity hook (it matches their content-consumption pattern) but mismatch on the application. _Why it half-lands:_ great top of funnel, dies at LP.

**CUR × TEAM.** Curiosity drops a notch for teams who optimize for known-quantity vendors. _Why it half-lands:_ operational buyer = lower curiosity premium.

**CON × HVAC.** "Why Facebook beats Google for HVAC in 2026" works — contrarian angles flatter the owner's sense of being early. _Why it lands:_ contrarian framing pairs naturally with the "founding cohort" identity.

**CON × ROOF.** Same logic. Roofers love being "ahead of the other guys in town." _Why it lands:_ contrarian + scarcity ("5 spots") double-stacks status pull.

**CON × SOLAR.** Solar is the strongest contrarian fit in the matrix — operators are already sour on the dominant lead-gen channels and ready to hear a heretical pitch. _Why it lands hardest:_ pre-existing channel cynicism = contrarian premium.

**CON × AGENT.** Contrarian on "Zillow leads are dead" gets clicks but agents lack the budget to act. _Why it half-lands:_ hook works, economics don't.

**CON × TEAM.** Teams have already heard every "Zillow is dead" pitch; contrarian fatigue. _Why it half-lands:_ category claim saturation.

### 1.3 O1 winning cells (offer-level top 3)

1. **AUTH × ROOF** — LP 7–12%, LQ 9, H. Peer case study from a same-segment roofer is the cleanest match.
2. **AUTH × HVAC** — LP 7–11%, LQ 9, H. Same dynamic; slightly lower CTR ceiling than roofing.
3. **PAIN × ROOF** — LP 6–10%, LQ 8, H. Aggregator-burnout pain is uniquely strong in roofing.

---

## 2. Offer O2 — ROI Calculator → personalized report

**Offer mechanics.** Multi-step calculator (`/ai-call-handling-calculator`, `/real-estate-roi-calculator`). Email gate to see full result. PV 7, FR 7, QP 6. Best for buyers who aren't ready to apply but want to quantify pain. LP baseline 12–22%.

### 2.1 Matrix

| Angle ↓ / ICP → | HVAC                                    | ROOF                                    | SOLAR                                   | AGENT                                   | TEAM                                    |
| --------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| **PAIN**        | CTR 1.5–2.3% · LP 18–28% · LQ 7 · **H** | CTR 1.5–2.3% · LP 16–25% · LQ 7 · **H** | CTR 1.4–2.1% · LP 14–22% · LQ 6 · **M** | CTR 1.2–1.9% · LP 12–20% · LQ 4 · **M** | CTR 1.3–2.0% · LP 14–22% · LQ 6 · **M** |
| **ASP**         | CTR 1.2–1.9% · LP 14–22% · LQ 6 · **H** | CTR 1.2–1.9% · LP 13–20% · LQ 6 · **M** | CTR 1.0–1.6% · LP 11–18% · LQ 5 · **M** | CTR 1.3–2.0% · LP 13–20% · LQ 4 · **M** | CTR 1.3–2.0% · LP 14–22% · LQ 6 · **M** |
| **AUTH**        | CTR 1.2–1.9% · LP 15–24% · LQ 7 · **M** | CTR 1.3–2.0% · LP 14–22% · LQ 7 · **M** | CTR 1.1–1.7% · LP 12–20% · LQ 6 · **M** | CTR 0.9–1.4% · LP 10–17% · LQ 4 · **L** | CTR 1.1–1.7% · LP 13–20% · LQ 6 · **M** |
| **CUR**         | CTR 1.9–2.8% · LP 16–26% · LQ 6 · **M** | CTR 2.0–2.9% · LP 16–25% · LQ 6 · **M** | CTR 1.7–2.5% · LP 13–22% · LQ 5 · **M** | CTR 1.7–2.5% · LP 14–22% · LQ 4 · **M** | CTR 1.5–2.2% · LP 13–20% · LQ 5 · **M** |
| **CON**         | CTR 1.6–2.4% · LP 14–22% · LQ 6 · **M** | CTR 1.7–2.5% · LP 14–22% · LQ 6 · **M** | CTR 1.8–2.6% · LP 16–25% · LQ 7 · **M** | CTR 1.4–2.1% · LP 12–20% · LQ 4 · **L** | CTR 1.3–2.0% · LP 13–20% · LQ 5 · **M** |

### 2.2 Per-cell reasoning (O2)

**PAIN × HVAC.** "Find out how much missed-call revenue you lost last August" is a perfect calculator promise for HVAC — they know they miss calls during heat waves. _Why it lands hardest in the matrix:_ the calculator's existing AI-call-handling angle is purpose-built for this ICP. Above-range LP.

**PAIN × ROOF.** Same pain (missed calls during storms) but the existing calculator copy is HVAC-flavored; LP suffers slightly until copy is roof-localized. _Why it lands:_ pain is real; asset is 80% right.

**PAIN × SOLAR.** Missed-call pain is real but secondary to setter cost. _Why it half-lands:_ calculator answers a question they're not primarily asking.

**PAIN × AGENT.** Pain framing on "leads you didn't follow up on" works at hook level; LQ collapses because solo agents won't fund the implied solution. _Why it half-lands:_ leaky-bucket framing fits, economics don't.

**PAIN × TEAM.** Teams have the operations vocabulary to engage with a "missed lead = $X" calculator. Real Estate ROI Calculator at `/real-estate-roi-calculator` already targets this. _Why it lands:_ purpose-built asset exists.

**ASP × HVAC.** Aspirational framing on a calculator is weaker than pain framing (calculators are diagnostic tools — they live in the pain frame). _Why it half-lands:_ angle/asset mismatch.

**ASP × ROOF.** Same as HVAC. _Why it half-lands:_ same reason.

**ASP × SOLAR.** Aspiration on a calculator double-discounts (saturated category + diagnostic-tool mismatch). _Why it doesn't land:_ compounded mismatches.

**ASP × AGENT.** Agents engage with "what could your year look like" calculators (Commission Calculator at `/team-commission-calculator` proves this). CTR holds, LQ stays low. _Why it half-lands:_ engagement is fine, qualification fails.

**ASP × TEAM.** Teams using the commission calculator with "what if your team did $5M GCI" framing — clean fit. _Why it lands:_ asset and frame both purpose-built.

**AUTH × HVAC.** "The exact calculator a $4M HVAC operator used to find $184K in recovered revenue" — authority on a calculator works as social proof for the _output_, not the tool. _Why it lands:_ social proof for the number, not the method.

**AUTH × ROOF.** Same dynamic. _Why it lands:_ peer-validation of the number.

**AUTH × SOLAR.** Authority on a calculator is muted for solar (they discount case-study numbers). _Why it half-lands:_ trust ceiling.

**AUTH × AGENT.** Authority story from another agent reads as competitive, not validating. _Why it doesn't land:_ identity inversion.

**AUTH × TEAM.** Authority case from a peer team is the strongest authority cell for teams. _Why it lands:_ operational identity match.

**CUR × HVAC.** "The 90-second calculator that just found $184K hiding in your phone records" — curiosity + diagnostic promise is the highest CTR pattern for O2. _Why it lands:_ curiosity perfectly serves the calculator's reveal mechanic.

**CUR × ROOF.** Same pattern as HVAC. Slightly higher CTR. _Why it lands:_ same dynamic plus roofing's higher feed engagement.

**CUR × SOLAR.** Solar's curiosity fatigue holds. _Why it half-lands:_ category jadedness.

**CUR × AGENT.** Agents love curiosity hooks and tolerate calculators (commission calculators are native to their world). CTR strong; LQ stays low. _Why it half-lands:_ engagement without budget.

**CUR × TEAM.** Curiosity premium for teams is lower (operational buyers). _Why it half-lands:_ limited curiosity premium.

**CON × HVAC.** "Why missed calls are a bigger leak than your ad budget" — contrarian + calculator works as a thesis reveal. _Why it lands:_ contrarian framing primes the calculator reveal.

**CON × ROOF.** Same pattern. _Why it lands:_ same dynamic.

**CON × SOLAR.** **Strongest contrarian cell in O2.** Solar's channel cynicism + diagnostic calculator = high engagement on a "your $700 CPL is the symptom, here's the disease" framing. _Why it lands hardest:_ pre-built cynicism feeds the contrarian + diagnostic combo.

**CON × AGENT.** Contrarian on "Zillow leads are a tax" pulls clicks; LQ floor remains. _Why it half-lands:_ same economics ceiling.

**CON × TEAM.** Contrarian fatigue in real estate. _Why it half-lands:_ category saturation.

### 2.3 O2 winning cells (offer-level top 3)

1. **PAIN × HVAC** — LP 18–28%, LQ 7, H. The native fit for the existing AI-call-handling calculator.
2. **CUR × ROOF** — CTR 2.0–2.9%, LP 16–25%, LQ 6, M. Curiosity + reveal mechanic = highest combined funnel volume.
3. **CON × SOLAR** — CTR 1.8–2.6%, LP 16–25%, LQ 7, M. The only ICP where contrarian outperforms pain.

---

## 3. Offer O6 — Guaranteed-Leads Trial (hypothetical)

**Offer mechanics.** "X qualified leads in 30 days or you don't pay." Application + payment hold + scoping call. PV 9, FR 4, QP 8. Highest DB rate, worst margin variance. Tournament guidance: launch HVAC-only first.

### 3.1 Matrix

| Angle ↓ / ICP → | HVAC                                   | ROOF                                   | SOLAR                                 | AGENT                                 | TEAM                                  |
| --------------- | -------------------------------------- | -------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| **PAIN**        | CTR 1.6–2.5% · LP 5–9% · LQ 8 · **H**  | CTR 1.7–2.6% · LP 5–9% · LQ 8 · **H**  | CTR 1.6–2.4% · LP 4–8% · LQ 7 · **M** | CTR 1.1–1.7% · LP 2–5% · LQ 4 · **L** | CTR 1.3–2.0% · LP 4–7% · LQ 6 · **M** |
| **ASP**         | CTR 1.3–2.0% · LP 5–8% · LQ 7 · **M**  | CTR 1.4–2.1% · LP 5–9% · LQ 7 · **M**  | CTR 1.1–1.7% · LP 3–6% · LQ 6 · **M** | CTR 1.3–2.0% · LP 3–6% · LQ 4 · **L** | CTR 1.2–1.8% · LP 4–7% · LQ 6 · **M** |
| **AUTH**        | CTR 1.4–2.1% · LP 6–10% · LQ 9 · **H** | CTR 1.5–2.2% · LP 6–10% · LQ 9 · **H** | CTR 1.2–1.9% · LP 4–7% · LQ 7 · **M** | CTR 0.9–1.4% · LP 2–4% · LQ 4 · **L** | CTR 1.1–1.7% · LP 4–7% · LQ 6 · **M** |
| **CUR**         | CTR 1.7–2.6% · LP 4–7% · LQ 6 · **M**  | CTR 1.8–2.7% · LP 4–7% · LQ 6 · **M**  | CTR 1.6–2.3% · LP 3–6% · LQ 5 · **M** | CTR 1.5–2.2% · LP 2–4% · LQ 3 · **L** | CTR 1.4–2.0% · LP 3–6% · LQ 5 · **L** |
| **CON**         | CTR 1.7–2.5% · LP 5–8% · LQ 7 · **M**  | CTR 1.8–2.6% · LP 5–8% · LQ 7 · **M**  | CTR 1.9–2.8% · LP 5–9% · LQ 8 · **M** | CTR 1.3–2.0% · LP 3–5% · LQ 4 · **L** | CTR 1.3–1.9% · LP 4–6% · LQ 5 · **L** |

### 3.2 Per-cell reasoning (O6)

**PAIN × HVAC.** "You've burned $60K/yr on lead-gen sites. We deliver 20 booked installs or you don't pay." This is the **single most natural angle/ICP/offer combo in the entire simulation** — it's why O6 made the top 3. _Why it lands hardest:_ pain + risk reversal stacked on the most pain-aware ICP.

**PAIN × ROOF.** Same dynamic, slightly stronger CTR (roof copywriting density is higher in feed). _Why it lands:_ aggregator burnout = highest risk-reversal credibility.

**PAIN × SOLAR.** Pain is real; guarantee framing competes with solar operators' deep skepticism of guarantees specifically (they've all heard "guaranteed appointments" lies). _Why it half-lands:_ guarantee credibility ceiling.

**PAIN × AGENT.** Solo agents can't fund the implied minimum. _Why it doesn't land:_ economics mismatch + guarantee credibility low.

**PAIN × TEAM.** Teams take guarantees more seriously than solos but real-estate-flavored "guaranteed leads" is heavily burned by Opcity/Zillow-style products. _Why it half-lands:_ category guarantee fatigue.

**ASP × HVAC.** "Add a truck this season — guaranteed pipeline or refund" — aspiration + guarantee is solid but pain is simply stronger for this offer. _Why it half-lands:_ PAIN dominates.

**ASP × ROOF.** Same. _Why it half-lands:_ PAIN dominates.

**ASP × SOLAR.** Solar's aspiration claims are saturated. _Why it doesn't land:_ category fatigue.

**ASP × AGENT.** Aspiration hooks well but economics fail. _Why it doesn't land:_ economics ceiling.

**ASP × TEAM.** Aspiration on team-GCI works mildly. _Why it half-lands:_ fine but not best-in-row.

**AUTH × HVAC.** "How Mesa Plumbing & HVAC got 47 installs in 30 days under our guarantee" — peer case study + guarantee is the highest-LQ cell for O6. _Why it lands hardest:_ authority validates the guarantee (the natural objection) AND matches ICP identity.

**AUTH × ROOF.** Same. _Why it lands:_ same dynamic.

**AUTH × SOLAR.** Authority is muted (skepticism). _Why it half-lands:_ trust ceiling.

**AUTH × AGENT.** Identity inversion + economics fail. _Why it doesn't land:_ compounded misfit.

**AUTH × TEAM.** Team case study would land; asset doesn't exist. _Why it half-lands:_ angle right, asset missing.

**CUR × HVAC.** Curiosity is the wrong frame for a guarantee — buyers want clarity, not mystery, before staking on a payment hold. _Why it half-lands:_ frame mismatch (curiosity dilutes the guarantee's clarity).

**CUR × ROOF.** Same. _Why it half-lands:_ frame mismatch.

**CUR × SOLAR.** Same. _Why it half-lands:_ frame mismatch.

**CUR × AGENT.** Curiosity helps the click; nothing else holds. _Why it doesn't land:_ nothing after the click works.

**CUR × TEAM.** Same. _Why it half-lands:_ frame mismatch.

**CON × HVAC.** "Why every 'pay-per-lead' service is a scam (and what we do instead)" — contrarian pairs well with guarantee mechanics. _Why it lands:_ contrarian + guarantee both attack the same incumbent (aggregators).

**CON × ROOF.** Same. _Why it lands:_ same dynamic.

**CON × SOLAR.** **Strongest contrarian cell in O6.** Solar's incumbent cynicism gets fully validated by "we'll prove it or we don't get paid." _Why it lands hardest in O6 outside HVAC:_ contrarian + guarantee is the antidote to their exact prior burns.

**CON × AGENT.** Economics ceiling. _Why it doesn't land:_ economics.

**CON × TEAM.** Category fatigue. _Why it half-lands:_ category saturation.

### 3.3 O6 winning cells (offer-level top 3)

1. **PAIN × HVAC** — LP 5–9%, LQ 8, H. The signature cell of the simulation.
2. **AUTH × HVAC** — LP 6–10%, LQ 9, H. Highest-LQ cell for O6; validates the guarantee.
3. **AUTH × ROOF** — LP 6–10%, LQ 9, H. Same dynamic, second ICP.

---

## 4. Top 5 Winning Cells Overall

Ranked by **expected qualified-demo yield** per 1,000 cold impressions, then tie-broken by confidence. Math sketch per cell:
`qualified_leads ≈ 1000 × CTR_mid × LP_mid × (LQ/10)` and `expected_demos = qualified_leads × DB_rate` (where DB rate uses the offer's tournament A6/A8 mid). Reported as the ranked order; raw numbers omitted to avoid false precision.

| Rank | Cell               | Why it wins                                                                                                                | Predicted CTR / LP / LQ / Conf |
| ---- | ------------------ | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| 🥇 1 | **O6 PAIN × HVAC** | Highest pain salience × most natural risk-reversal × highest-LQ live ICP. The single highest-leverage hook in the matrix.  | 1.6–2.5% / 5–9% / 8 / H        |
| 🥈 2 | **O2 PAIN × HVAC** | Best evergreen play. Calculator is purpose-built for this ICP and angle; LP CVR ceiling is 28%. Volume + low CAC carry it. | 1.5–2.3% / 18–28% / 7 / H      |
| 🥉 3 | **O1 AUTH × ROOF** | Highest LP CVR in O1 (7–12%) with LQ 9. Roofing's peer-validation culture compounds the cohort case-study.                 | 1.4–2.1% / 7–12% / 9 / H       |
| 4    | **O1 AUTH × HVAC** | Mirror of #3 on the other top ICP. Should run in parallel — these two are a paired launch.                                 | 1.3–2.0% / 7–11% / 9 / H       |
| 5    | **O6 AUTH × HVAC** | Validates the guarantee with peer proof. Use as the closer for paid traffic that bounced from PAIN × HVAC.                 | 1.4–2.1% / 6–10% / 9 / H       |

**Pattern recognition.**

- **HVAC and ROOF dominate the top 5** (5 of 5 slots). Solar, Agent, and Team don't appear — they belong in a v2 expansion, not v1 spend.
- **PAIN and AUTH are the only angles in the top 5.** Curiosity gets clicks but loses on LQ; aspiration is mid; contrarian wins only inside Solar.
- **All top 5 are H confidence.** This is by design — top picks should anchor on the strongest priors.

---

## 5. Recommended Angle / ICP / Offer Pairs → Simulation 03 (Hook/Headline)

Carry **8 pairs** into the hook simulation. The first 5 are the top cells above; the remaining 3 are deliberate "exploration" picks to probe non-obvious combinations.

### Core (top 5 — exploit)

| #   | Offer         | Angle | ICP  | Role in v1 spend                                                        |
| --- | ------------- | ----- | ---- | ----------------------------------------------------------------------- |
| 1   | O6 Trial      | PAIN  | HVAC | Primary cold-traffic hook for the trial offer.                          |
| 2   | O2 Calculator | PAIN  | HVAC | Evergreen warm-funnel feeder; pairs with #1 as retargeting fork.        |
| 3   | O1 Cohort     | AUTH  | ROOF | Cold hero hook for roofing cohort applications.                         |
| 4   | O1 Cohort     | AUTH  | HVAC | Cold hero hook for HVAC cohort applications. Mirror of #3.              |
| 5   | O6 Trial      | AUTH  | HVAC | Retargeting closer for #1 — solves the guarantee-credibility objection. |

### Exploration (3 deliberate probes — explore)

| #   | Offer         | Angle                                          | ICP   | Why it's worth a small test                                                                                               |
| --- | ------------- | ---------------------------------------------- | ----- | ------------------------------------------------------------------------------------------------------------------------- |
| 6   | O2 Calculator | CON                                            | SOLAR | The only matrix cell where contrarian beats pain. If it lands, it unlocks the solar segment cheaply via O2 (lowest CAC).  |
| 7   | O1 Cohort     | CON                                            | SOLAR | Pair with #6 — same insight, different funnel position. Tests whether solar will _apply_ or just _engage_.                |
| 8   | O2 Calculator | ASP × TEAM (via `/team-commission-calculator`) | TEAM  | Tests the one real-estate angle/asset combo that has purpose-built infrastructure. Cheap to run; expands ICP if it works. |

### Explicitly de-prioritized

- **Any AGENT cell** — economics ceiling makes every cell uneconomical at the implied price ($1,997/mo). Revisit only if Prestyj launches a sub-$500/mo solo-agent SKU.
- **Any CUR cell on O6** — frame mismatch (curiosity dilutes guarantee clarity).
- **Any AUTH × AGENT cell** — identity inversion (peer agents = competition, not validation).

---

## 6. Caveats & What Would Change This

1. **These are priors, not measurements.** No Prestyj funnel data was used. First 30 days of spend on pairs #1–#5 should overwrite every CTR/LP estimate here.
2. **Confidence tiers reflect modelling certainty, not predicted lift.** An "H" cell can still flop on creative-execution failure; an "L" cell can surprise with a great hook.
3. **Asset gap on O1 AUTH × ROOF/HVAC.** The recommended winners assume a same-segment peer case study exists or will be produced from the Founding Cohort itself. **Recursive dependency:** O1's best angle requires O1 to have already run once.
4. **Solar's contrarian opening is the highest-upside long-shot.** If pairs #6/#7 hit, the matrix re-runs with solar promoted alongside HVAC/ROOF.
5. **Real-estate Team economics are unverified.** A11 (ACV) was derived for contractors; if RE Team ACV is materially different, pair #8 re-prices.
6. **Replace this matrix once 80–150 leads/cell (A12) exist.** Predictions are placeholders for evidence.

---

## 7. Hand-off to Simulation 03

Simulation 03 (Hook/Headline) should generate **6–10 hook variants per core pair (#1–#5)** and **3–5 per exploration pair (#6–#8)**. Total: ~40–60 hooks to score on (a) feed-stop power, (b) ICP-language fidelity, (c) angle integrity, (d) LP promise consistency.

Inputs Simulation 03 inherits from this doc:

- Offer, angle, ICP (the pair).
- Predicted CTR/LP/LQ ranges (as success thresholds for hook A/B selection).
- Per-cell reasoning (as the _why_ — every hook variant must clearly serve the reasoning, not just the angle label).
