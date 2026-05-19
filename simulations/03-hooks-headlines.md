# Hooks & Headlines — Top 3 Pairs

**Simulation:** 03
**Date:** 2026-05-18
**Inputs:** Top 3 angle/ICP/offer pairs from `02-angle-icp-matrix.md` §4 (the only three H-confidence cells with overall-top-5 rank that aren't mirrors of each other).
**Goal:** Generate 50–100 hook/headline variants, score on a 5-axis rubric, surface the top 10 per angle and top 5 overall, and recommend 3–5 to take into the creative-format simulation (04).

---

## 0. Framing

### 0.1 The three pairs in scope

Pulled directly from `02-angle-icp-matrix.md` §4 Top 5. Pairs #4 (O1 AUTH × HVAC) and #5 (O6 AUTH × HVAC) are explicitly called out as **mirrors** of #1 and #3 in the prior sim ("should run in parallel — these two are a paired launch"). Treating them as mirrors here keeps the scope at 3 _distinct_ angle × ICP × offer pairs, per the task.

| Code   | Offer                     | Angle | ICP                             | Predicted CTR / LP / LQ | Why we're hooking it                                                                   |
| ------ | ------------------------- | ----- | ------------------------------- | ----------------------- | -------------------------------------------------------------------------------------- |
| **P1** | O6 Guaranteed-Leads Trial | PAIN  | HVAC ($3M+ operators)           | 1.6–2.5% / 5–9% / 8     | Signature cell of the matrix. Pain + risk reversal stacked on the most pain-aware ICP. |
| **P2** | O2 ROI Calculator         | PAIN  | HVAC ($3M+ operators)           | 1.5–2.3% / 18–28% / 7   | Evergreen volume play. Calculator is purpose-built for missed-call pain.               |
| **P3** | O1 Founding Cohort        | AUTH  | ROOF ($3M+ residential roofing) | 1.4–2.1% / 7–12% / 9    | Highest LP in O1; roofing's peer-validation culture compounds case-study lift.         |

### 0.2 Scoring rubric

Each variant scored 1–10 on five axes, then weighted to a 0–10 total.

| Axis                     | Weight | What 10 looks like                                                                                          | What 1 looks like                               |
| ------------------------ | ------ | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| **SPEC** Specificity     | 0.25   | Hard numbers + timeframe + named outcome ("47 installs in 30 days")                                         | Vague ("more leads", "grow faster")             |
| **PI** Pattern interrupt | 0.15   | Stops the thumb — odd structure, broken expectation, visual word ("phone records", "graveyard")             | Generic feed wallpaper ("Get more leads today") |
| **CG** Curiosity gap     | 0.15   | Implies a specific reveal the reader can't predict ("the $184K hiding in your phone records")               | No mystery; full payload in the hook            |
| **ICP** ICP resonance    | 0.25   | Uses the ICP's exact vocabulary + felt pain ("August heat wave", "shared HomeAdvisor leads", "storm chase") | Generic SMB/agency language                     |
| **PF** Platform fit      | 0.20   | Lengths, tone, and trigger words match the platform the variant is tagged for                               | Meta voice on a Google headline (or vice-versa) |

**Weighted total** = `0.25·SPEC + 0.15·PI + 0.15·CG + 0.25·ICP + 0.20·PF`. Max 10. All totals in this doc were recomputed programmatically — no hand math.

### 0.3 Platform-fit cheat sheet

Used as the scoring anchor for the **PF** axis.

| Platform                                       | Slot                               | Format constraints                                                                                                        | Voice                                        |
| ---------------------------------------------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| **Meta** primary text                          | Top of feed ad                     | 1st line ≤ 80 chars before "See more". Conversational, 1st/2nd person. Emoji tolerated, ALL-CAPS hooks tolerated lightly. | "You / your truck / your August"             |
| **YouTube** hook (on-screen + spoken first 5s) | 6s pre-skip                        | ≤ 12 words spoken, ≤ 7 words on-screen overlay. Verb-first. Open with the contradiction or the number.                    | "I'll show you how…" / "$184K is hiding in…" |
| **Google** Search headline                     | RSA, 30-char hard cap per headline | Title case acceptable, no emoji, no exclamation overuse (Google strips), keyword present                                  | "HVAC Lead Gen — 20 Installs or Free"        |

### 0.4 Policy guardrails (Meta + Google ads)

Variants flagged ⚠️ violate at least one of:

- **Meta:** no personal-attribute callouts ("you're losing money" assumes financial state), no "guaranteed" income/outcomes phrased as a personal promise, no scare tactics about money/health.
- **Google:** no superlatives without proof ("#1", "best"), no first-person targeting ("are you losing…"), 30-char headline cap.
- **Both:** no testimonial-style claims in headline copy without disclaimer; no implied unrealistic earnings.

Flagged variants are kept in the list (with the violation called out) so the rationale is auditable, but **excluded from the top-10 and top-5 cuts**.

---

## 1. Pair P1 — O6 PAIN × HVAC (Guaranteed-Leads Trial)

**Core promise to hook around.** "20 booked installs in 30 days or you don't pay." The angle is pain (aggregator burnout, missed-call bleed, summer scramble); the offer is risk-reversed. Hook must (a) name the bleed in HVAC vocabulary, (b) make the risk-reversal feel real, (c) imply low effort to get in.

### 1.1 Full scored list (P1)

| #     | Platform | Variant                                                                                                               | SPEC | PI  | CG  | ICP | PF  | **Total** | Notes                                                                                                         |
| ----- | -------- | --------------------------------------------------------------------------------------------------------------------- | ---- | --- | --- | --- | --- | --------- | ------------------------------------------------------------------------------------------------------------- |
| P1-01 | Meta     | You burned $58K on shared HVAC leads last year. This August, you get 20 booked installs — or we eat the bill.         | 9    | 8   | 6   | 10  | 9   | **8.65**  | Bleed → reversal in one breath; uses "shared leads" vocab.                                                    |
| P1-02 | Meta     | 20 booked HVAC installs in 30 days or you pay $0. Five operators. August. That's the offer.                           | 10   | 8   | 6   | 9   | 9   | **8.65**  | Numbers, scarcity, season — all in 22 words.                                                                  |
| P1-03 | Meta     | Every HomeAdvisor lead is shared with 4 of your competitors. We don't share. We don't charge until you book 20.       | 8    | 9   | 7   | 10  | 8   | **8.50**  | Pain-comparison structure; risk-reversal as proof.                                                            |
| P1-04 | Meta     | Last August your phones rang 311 times and you booked 14 of them. We can fix that. 20 installs in 30 days or free.    | 10   | 9   | 7   | 10  | 8   | **9.00**  | Specificity is fictional-but-plausible — a strong feed-stop.                                                  |
| P1-05 | Meta     | Stop renting leads from HomeAdvisor. 20 exclusive booked installs in 30 days or your money back.                      | 8    | 7   | 5   | 10  | 9   | **8.10**  | Clean PAIN→solution; "rent" is the right ICP word.                                                            |
| P1-06 | Meta     | The five HVAC operators we picked this August get 20 booked installs — guaranteed — or we refund every dollar.        | 9    | 7   | 6   | 9   | 9   | **8.25**  | Scarcity + guarantee + season.                                                                                |
| P1-07 | Meta     | "I haven't paid a lead-gen site in 90 days." — $4.2M HVAC operator, Phoenix. Want the same deal? 20 installs or free. | 10   | 8   | 8   | 10  | 9   | **9.20**  | Testimonial → mechanism → offer. **Top tier.**                                                                |
| P1-08 | Meta     | ⚠️ Are you tired of losing $5,000/month to bad HVAC leads?                                                            | 7    | 5   | 4   | 8   | 4   | **5.90**  | **Meta policy flag:** "Are you tired of losing $X" is a personal-attribute money callout. Cut.                |
| P1-09 | Meta     | We only take five HVAC operators per quarter. The deal: 20 booked installs in 30 days or your invoice is $0.          | 9    | 7   | 6   | 9   | 9   | **8.25**  | Scarcity-led, then mechanism.                                                                                 |
| P1-10 | Meta     | If we don't book 20 HVAC installs for you in 30 days, you don't pay. That's it. That's the post.                      | 8    | 9   | 7   | 9   | 9   | **8.45**  | "That's the post" is a native Meta voice tic.                                                                 |
| P1-11 | YouTube  | I'll book 20 HVAC installs for you in 30 days — or you don't pay me.                                                  | 10   | 8   | 7   | 9   | 10  | **9.00**  | Verb-first, 14 words, full payload in 5s. **Top tier.**                                                       |
| P1-12 | YouTube  | Your August is about to break your truck count. Here's the fix.                                                       | 7    | 9   | 8   | 10  | 9   | **8.60**  | Heavy pattern-interrupt; "truck count" is HVAC native.                                                        |
| P1-13 | YouTube  | Twenty installs. Thirty days. Zero risk. One catch — we only do this for five operators.                              | 9    | 8   | 7   | 8   | 10  | **8.50**  | Cadenced; fits a 5-second cut.                                                                                |
| P1-14 | YouTube  | Stop paying for leads four of your competitors are also buying.                                                       | 7    | 8   | 6   | 10  | 9   | **8.15**  | Tight; reads cleanly aloud.                                                                                   |
| P1-15 | YouTube  | Watch what happens when an HVAC operator stops buying shared leads for 30 days.                                       | 7    | 9   | 9   | 9   | 9   | **8.50**  | Pure curiosity-gated proof promise.                                                                           |
| P1-16 | Google   | 20 HVAC Installs in 30 Days                                                                                           | 10   | 7   | 5   | 9   | 10  | **8.55**  | 27 chars. Specific, keyword-present, RSA-clean.                                                               |
| P1-17 | Google   | Booked Installs or You Pay $0                                                                                         | 9    | 8   | 6   | 8   | 10  | **8.35**  | 29 chars. Risk-reversal in the headline.                                                                      |
| P1-18 | Google   | HVAC Leads — No Share, No Junk                                                                                        | 8    | 7   | 5   | 9   | 10  | **8.05**  | 30 chars exact; "no share" maps to exclusive.                                                                 |
| P1-19 | Google   | 5 HVAC Operators · August Only                                                                                        | 8    | 7   | 6   | 8   | 10  | **7.95**  | Scarcity + season.                                                                                            |
| P1-20 | Google   | ⚠️ #1 HVAC Lead Guarantee in TX                                                                                       | 4    | 5   | 4   | 7   | 3   | **4.70**  | **Google policy flag:** unsupported "#1" + "Guarantee" superlative. Cut.                                      |
| P1-21 | Google   | Pay When We Book Your Installs                                                                                        | 9    | 8   | 6   | 9   | 10  | **8.60**  | 30 chars. Cleanest payment-model framing.                                                                     |
| P1-22 | Google   | ⚠️ Exclusive HVAC Leads, 30-Day Trial                                                                                 | 8    | 6   | 5   | 9   | 10  | **7.90**  | **Length flag:** 33 chars — over by 3. Trim to "Exclusive HVAC Leads · 30d Trial" (still 32). Rewrite or cut. |
| P1-23 | Meta     | We picked 5 HVAC owners in Texas. Each gets 20 installs in 30 days or full refund. Spots 3 of 5 left.                 | 10   | 8   | 7   | 10  | 9   | **9.05**  | Geography + scarcity + countdown. **Top tier.**                                                               |
| P1-24 | Meta     | "Shared leads" is the politest term for "the same lead sold to 4 of your competitors." We sell zero of them.          | 8    | 9   | 7   | 10  | 8   | **8.50**  | Reframe attack on the category.                                                                               |
| P1-25 | Meta     | August booked. September booked. October booked. All by Friday — or we refund.                                        | 9    | 9   | 7   | 9   | 9   | **8.70**  | Rhythmic; the cadence does the work.                                                                          |

### 1.2 Top 10 for P1 (PAIN × HVAC × O6)

| Rank | #     | Platform | Variant                                                                                                               | Total    | Why it ranks                                                                                       |
| ---- | ----- | -------- | --------------------------------------------------------------------------------------------------------------------- | -------- | -------------------------------------------------------------------------------------------------- |
| 1    | P1-07 | Meta     | "I haven't paid a lead-gen site in 90 days." — $4.2M HVAC operator, Phoenix. Want the same deal? 20 installs or free. | **9.20** | Testimonial-as-hook short-circuits the guarantee-credibility objection that kills most PAIN hooks. |
| 2    | P1-23 | Meta     | We picked 5 HVAC owners in Texas. Each gets 20 installs in 30 days or full refund. Spots 3 of 5 left.                 | **9.05** | Stacks geo + scarcity + countdown on the core offer — the strongest specificity score in the set.  |
| 3    | P1-04 | Meta     | Last August your phones rang 311 times and you booked 14 of them. We can fix that. 20 installs in 30 days or free.    | **9.00** | Anchors the bleed on a specific (plausible) August number — the season is the felt pain.           |
| 4    | P1-11 | YouTube  | I'll book 20 HVAC installs for you in 30 days — or you don't pay me.                                                  | **9.00** | Verb-first, 14 words, full payload deliverable inside YouTube's 5-second pre-skip.                 |
| 5    | P1-25 | Meta     | August booked. September booked. October booked. All by Friday — or we refund.                                        | **8.70** | Cadenced; the rhythm is the pattern-interrupt.                                                     |
| 6    | P1-01 | Meta     | You burned $58K on shared HVAC leads last year. This August, you get 20 booked installs — or we eat the bill.         | **8.65** | Bleed→reversal in one beat.                                                                        |
| 7    | P1-02 | Meta     | 20 booked HVAC installs in 30 days or you pay $0. Five operators. August. That's the offer.                           | **8.65** | Tied with P1-01. The stripped-down version of the same idea.                                       |
| 8    | P1-12 | YouTube  | Your August is about to break your truck count. Here's the fix.                                                       | **8.60** | Highest PI/ICP combination on YouTube; "truck count" is ICP-native.                                |
| 9    | P1-21 | Google   | Pay When We Book Your Installs                                                                                        | **8.60** | Best Google headline for P1 — payment-model framing as the headline itself.                        |
| 10   | P1-16 | Google   | 20 HVAC Installs in 30 Days                                                                                           | **8.55** | Cleanest specific Google headline. The reliable RSA workhorse.                                     |

---

## 2. Pair P2 — O2 PAIN × HVAC (ROI Calculator)

**Core promise to hook around.** "Find the missed-call revenue hiding in your phone records." Diagnostic, low-friction (no application; email gate after the result). Hook must (a) name a specific bleed type the operator already half-suspects, (b) imply a fast reveal, (c) keep the ask small.

### 2.1 Full scored list (P2)

| #     | Platform | Variant                                                                                                        | SPEC | PI  | CG  | ICP | PF  | **Total** | Notes                                                                                                                               |
| ----- | -------- | -------------------------------------------------------------------------------------------------------------- | ---- | --- | --- | --- | --- | --------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| P2-01 | Meta     | The average $3M HVAC shop missed $184K in revenue last summer. This 90-second calculator finds yours.          | 10   | 8   | 9   | 10  | 9   | **9.35**  | Number + timeframe + low-friction reveal. **Top tier.**                                                                             |
| P2-02 | Meta     | Pull your August call log. We'll tell you what every missed call cost you. Free, 90 seconds.                   | 9    | 9   | 8   | 10  | 9   | **9.10**  | Imperative + specific input + reveal. **Top tier.**                                                                                 |
| P2-03 | Meta     | Your phone records know exactly how much money you left on the table in 2025. The calculator shows the number. | 8    | 9   | 9   | 9   | 8   | **8.55**  | Strong CG; "phone records" is a great visual noun.                                                                                  |
| P2-04 | Meta     | If your shop does $3M+ and missed even 8% of August calls, the number on this calculator will ruin your week.  | 9    | 9   | 9   | 10  | 8   | **9.05**  | Specificity + curiosity + "ruin your week" pattern interrupt. **Top tier.**                                                         |
| P2-05 | Meta     | Three questions. Ninety seconds. One number you'll wish you'd seen in May.                                     | 8    | 9   | 9   | 8   | 9   | **8.50**  | Cadence-driven; light on ICP language.                                                                                              |
| P2-06 | Meta     | ⚠️ How much money are YOU losing to missed calls?                                                              | 5    | 4   | 5   | 7   | 4   | **5.15**  | **Meta policy flag:** personal-attribute money callout + ALL-CAPS targeting. Cut.                                                   |
| P2-07 | Meta     | A $4.2M Phoenix HVAC shop ran this calculator and found $217K in missed-call revenue. It takes 90 seconds.     | 10   | 7   | 8   | 10  | 9   | **9.05**  | AUTH-flavored PAIN hook — peer number does the lifting.                                                                             |
| P2-08 | Meta     | The number is almost always bigger than the operator thinks. That's why we built the calculator.               | 6    | 8   | 9   | 7   | 8   | **7.40**  | Pure CG; weak SPEC/ICP.                                                                                                             |
| P2-09 | Meta     | Your CSR misses 1 in 6 calls in August. At your ACV, that's a new truck a year. The calculator shows yours.    | 10   | 9   | 8   | 10  | 9   | **9.35**  | Tied #1. "A new truck a year" is the killer ICP image.                                                                              |
| P2-10 | Meta     | Most HVAC owners think they miss 5% of calls. The data says 22%. The calculator shows your number.             | 10   | 9   | 9   | 9   | 9   | **9.25**  | Expectation-gap + reveal — pure curiosity-gap mechanic.                                                                             |
| P2-11 | YouTube  | I'll show you how much money your phone missed last August. Ninety seconds.                                    | 8    | 8   | 9   | 9   | 10  | **8.80**  | Verb-first, fast, fits pre-skip.                                                                                                    |
| P2-12 | YouTube  | The average HVAC shop misses $184K a year and doesn't know it. Watch me find yours.                            | 10   | 8   | 9   | 10  | 10  | **9.55**  | Highest-scoring YouTube hook in the doc. **Top tier.**                                                                              |
| P2-13 | YouTube  | Open your call log. I'll do the math. You won't like it.                                                       | 7    | 10  | 9   | 9   | 10  | **8.85**  | "You won't like it" — peak pattern interrupt; risks Meta policy flag but YouTube-safe.                                              |
| P2-14 | YouTube  | This 90-second calculator finds the revenue your CSR fumbled.                                                  | 8    | 7   | 8   | 9   | 10  | **8.50**  | Clean, on-message.                                                                                                                  |
| P2-15 | YouTube  | Three numbers. One reveal. Most HVAC owners are off by six figures.                                            | 9    | 9   | 10  | 8   | 10  | **9.10**  | Strongest curiosity gap; cadence-led. **Top tier.**                                                                                 |
| P2-16 | Google   | HVAC Missed-Call Calculator                                                                                    | 8    | 6   | 7   | 10  | 10  | **8.45**  | 27 chars. Exact keyword.                                                                                                            |
| P2-17 | Google   | ⚠️ Find Your Missed Revenue · Free                                                                             | 8    | 7   | 7   | 8   | 10  | **8.10**  | **Length flag:** 31 chars — over by 1. Trim to "Find Your Missed Revenue — Free" (still 31); use "Find Missed Revenue · Free" (26). |
| P2-18 | Google   | 90-Second HVAC ROI Calculator                                                                                  | 9    | 7   | 6   | 10  | 10  | **8.70**  | 29 chars. Specificity + ICP.                                                                                                        |
| P2-19 | Google   | ⚠️ What August Cost Your HVAC Shop                                                                             | 9    | 9   | 9   | 10  | 10  | **9.45**  | **Length flag:** 31 chars — over by 1. Trim to "What August Cost Your Shop" (26). **Top tier post-trim.**                           |
| P2-20 | Google   | ⚠️ #1 ROI Calculator for HVAC                                                                                  | 4    | 5   | 4   | 8   | 3   | **4.95**  | **Google policy flag:** "#1" without substantiation. Cut.                                                                           |
| P2-21 | Google   | See Your Missed-Call Number                                                                                    | 8    | 8   | 8   | 8   | 10  | **8.40**  | 27 chars. Strong CG for a search headline.                                                                                          |
| P2-22 | Meta     | We ran 47 HVAC operators through this last quarter. The smallest missed-call number was $61K.                  | 10   | 8   | 8   | 9   | 9   | **8.95**  | "Smallest" reframe — strong below-the-fold pull.                                                                                    |
| P2-23 | Meta     | Three minutes with this calculator beat the last sales rep who tried to sell you "more leads."                 | 7    | 9   | 8   | 8   | 8   | **7.90**  | Contrarian-flavored PAIN; medium fit.                                                                                               |
| P2-24 | Meta     | If your August CSR coverage drops below 85%, the calculator's number will be in six figures.                   | 10   | 8   | 9   | 10  | 8   | **9.15**  | Conditional precision — feels operator-real.                                                                                        |
| P2-25 | Meta     | This is the calculator your bookkeeper wishes you'd run before signing the next HomeAdvisor invoice.           | 7    | 9   | 9   | 9   | 8   | **8.30**  | Strong PI/CG; light SPEC.                                                                                                           |

### 2.2 Top 10 for P2 (PAIN × HVAC × O2)

| Rank | #     | Platform | Variant                                                                                                       | Total    | Why it ranks                                                                               |
| ---- | ----- | -------- | ------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------ |
| 1    | P2-12 | YouTube  | The average HVAC shop misses $184K a year and doesn't know it. Watch me find yours.                           | **9.55** | Number + felt blindness + verb-first promise — the cleanest single hook in the doc.        |
| 2    | P2-19 | Google   | What August Cost Your HVAC Shop (post-trim: "What August Cost Your Shop", 26 chars)                           | **9.45** | After trim, a Google headline that _feels_ like a Meta hook — extraordinary CG for an RSA. |
| 3    | P2-01 | Meta     | The average $3M HVAC shop missed $184K in revenue last summer. This 90-second calculator finds yours.         | **9.35** | Specificity + timeframe + zero-friction reveal. The textbook P2 hook.                      |
| 4    | P2-09 | Meta     | Your CSR misses 1 in 6 calls in August. At your ACV, that's a new truck a year. The calculator shows yours.   | **9.35** | "New truck a year" is the killer concrete image — translates the abstract loss.            |
| 5    | P2-10 | Meta     | Most HVAC owners think they miss 5% of calls. The data says 22%. The calculator shows your number.            | **9.25** | Expectation-gap structure is the highest-converting calculator-hook frame.                 |
| 6    | P2-24 | Meta     | If your August CSR coverage drops below 85%, the calculator's number will be in six figures.                  | **9.15** | Operator-grade specificity — reads like internal ops language.                             |
| 7    | P2-02 | Meta     | Pull your August call log. We'll tell you what every missed call cost you. Free, 90 seconds.                  | **9.10** | Imperative opening — rare in feed.                                                         |
| 8    | P2-15 | YouTube  | Three numbers. One reveal. Most HVAC owners are off by six figures.                                           | **9.10** | Strongest CG on the YouTube side; cadence fits a 5s cut.                                   |
| 9    | P2-04 | Meta     | If your shop does $3M+ and missed even 8% of August calls, the number on this calculator will ruin your week. | **9.05** | Specific qualifier + "ruin your week" is loud without crossing policy.                     |
| 10   | P2-07 | Meta     | A $4.2M Phoenix HVAC shop ran this calculator and found $217K in missed-call revenue. It takes 90 seconds.    | **9.05** | AUTH-flavored PAIN; peer number carries the click.                                         |

---

## 3. Pair P3 — O1 AUTH × ROOF (Founding Cohort)

**Core promise to hook around.** "Watch a $3M+ roofer fill a quarter with 300 free vertical AI ads." Authority via same-segment peer. Hook must (a) place the peer in a recognizable shape/size, (b) make the case study's output measurable, (c) make "free" credible (it's a cohort, not a giveaway).

**Recursive caveat from §6 of sim 02:** the case study has to exist or be filmable from the cohort itself. Hooks below assume a same-segment peer asset.

### 3.1 Full scored list (P3)

| #     | Platform | Variant                                                                                                                | SPEC | PI  | CG  | ICP | PF  | **Total** | Notes                                                                                                       |
| ----- | -------- | ---------------------------------------------------------------------------------------------------------------------- | ---- | --- | --- | --- | --- | --------- | ----------------------------------------------------------------------------------------------------------- |
| P3-01 | Meta     | How a $4.8M Tampa roofer booked 63 inspections in 28 days off 300 free vertical ads.                                   | 10   | 8   | 8   | 10  | 9   | **9.20**  | Peer + city + numbers + mechanism. **Top tier.**                                                            |
| P3-02 | Meta     | He stopped buying storm leads in March. By June, his crews were 11 weeks out. Here's the playbook (and 300 free ads).  | 10   | 9   | 9   | 10  | 9   | **9.50**  | Narrative arc + scarcity payoff. **Top tier.**                                                              |
| P3-03 | Meta     | The Founding Cohort is 5 roofers. Three are taken. Each gets 300 vertical ads built around their crew, free.           | 9    | 7   | 7   | 10  | 9   | **8.65**  | Scarcity-led.                                                                                               |
| P3-04 | Meta     | $3M+ roofer, 9-truck crew, 47 booked inspections in 30 days. Free 300-ad batch. We need two more like him.             | 10   | 8   | 8   | 10  | 9   | **9.20**  | Crew-size detail is a strong roofer-identity hook.                                                          |
| P3-05 | Meta     | "We replaced HomeAdvisor with the ads they made us. Closed 22 retail re-roofs in 6 weeks." — Cohort #2.                | 10   | 9   | 8   | 10  | 9   | **9.35**  | Testimonial-as-hook; ICP-language perfect. **Top tier.**                                                    |
| P3-06 | Meta     | We're filming a roofing case study live. 300 free vertical ads in exchange for the testimonial when it works.          | 8    | 9   | 9   | 9   | 9   | **8.75**  | Reframes the offer as a transparent trade.                                                                  |
| P3-07 | Meta     | The five roofers in the cohort don't pay a dollar. They run the ads, post a Google review, and we keep the case study. | 8    | 9   | 8   | 10  | 8   | **8.65**  | Mechanism-as-honesty hook.                                                                                  |
| P3-08 | Meta     | ⚠️ Make $250K extra in 60 days as a roofer.                                                                            | 4    | 4   | 4   | 7   | 3   | **4.55**  | **Meta policy flag:** implied-earnings claim ("make $X in N days"). Cut.                                    |
| P3-09 | Meta     | A roofer doing $4.2M just ran 300 of our vertical ads in 30 days. Pipeline: 11 weeks. Cost to him: $0.                 | 10   | 8   | 8   | 10  | 9   | **9.20**  | Tight; the $0 lands hard at the end.                                                                        |
| P3-10 | Meta     | We give five roofers 300 vertical ads each, free. They give us the case study. The math has worked twice.              | 9    | 8   | 8   | 10  | 9   | **8.95**  | "Math has worked twice" is the right honesty register.                                                      |
| P3-11 | YouTube  | Watch a $4.8M roofer fill his August pipeline with 300 free vertical ads.                                              | 10   | 7   | 8   | 10  | 10  | **9.25**  | Verb-first, peer-anchored. **Top tier.**                                                                    |
| P3-12 | YouTube  | He fired HomeAdvisor in March. I'll show you what his calendar looked like in June.                                    | 8    | 9   | 10  | 10  | 10  | **9.35**  | Narrative + CG + verb-first. **Top tier.**                                                                  |
| P3-13 | YouTube  | Three hundred ads. Five roofers. Zero dollars. Here's what happens in the first week.                                  | 9    | 9   | 9   | 9   | 10  | **9.20**  | Cadence-led; fits a 5s cut.                                                                                 |
| P3-14 | YouTube  | The Founding Cohort is filming roofing case studies right now. Two spots left.                                         | 8    | 7   | 8   | 9   | 10  | **8.50**  | Scarcity + transparency; mid-tier on PI.                                                                    |
| P3-15 | YouTube  | I built 300 ads for a Tampa roofer in 14 days. His response: "Take down the ones with my receptionist."                | 9    | 10  | 10  | 10  | 10  | **9.75**  | Pattern-interrupt detail (the receptionist line) is the highest single-axis score in the doc. **Top tier.** |
| P3-16 | Google   | 300 Free Ads for $3M+ Roofers                                                                                          | 9    | 7   | 6   | 10  | 10  | **8.70**  | 29 chars. Specific, ICP-tight.                                                                              |
| P3-17 | Google   | Roofing Case Study · 300 Ads                                                                                           | 7    | 6   | 7   | 9   | 10  | **7.95**  | 29 chars. Solid but generic.                                                                                |
| P3-18 | Google   | Tampa Roofer · 63 Inspections                                                                                          | 10   | 8   | 7   | 9   | 10  | **9.00**  | 30 chars. Peer + outcome. Strong for AUTH.                                                                  |
| P3-19 | Google   | ⚠️ Founding Cohort — 5 Roofers Only                                                                                    | 8    | 7   | 6   | 9   | 10  | **8.20**  | **Length flag:** 32 chars — over by 2. Trim to "Founding Cohort — 5 Spots" (25).                            |
| P3-20 | Google   | ⚠️ Best Roofing Ads, Guaranteed                                                                                        | 3    | 4   | 4   | 7   | 3   | **4.30**  | **Google policy flag:** double superlative ("Best" + "Guaranteed") unsupported. Cut.                        |
| P3-21 | Google   | See the Roofing Cohort Results                                                                                         | 7    | 7   | 8   | 8   | 10  | **8.00**  | 30 chars exact.                                                                                             |
| P3-22 | Meta     | If you do $3M+ in roofing and you can post a Google review when it works, we'll build you 300 vertical ads. Free.      | 9    | 8   | 7   | 10  | 9   | **8.80**  | Qualifier-first; reads like an application, not an ad.                                                      |
| P3-23 | Meta     | The case study we're filming next is a $3M roofer in your state. We're picking one more. Want it to be you?            | 8    | 9   | 9   | 10  | 9   | **9.00**  | Geography ambiguity is a deliberate Meta engagement trick.                                                  |
| P3-24 | Meta     | He sent us his crew photos on a Tuesday. By the next Tuesday he had 300 ads and 19 booked inspections.                 | 10   | 9   | 9   | 10  | 9   | **9.50**  | Specific timeline + peer narrative. **Top tier.**                                                           |
| P3-25 | Meta     | We've shot two roofing case studies. We need three more. Each gets 300 free vertical ads.                              | 8    | 7   | 7   | 9   | 9   | **8.15**  | Transparency + scarcity; mid-tier.                                                                          |

### 3.2 Top 10 for P3 (AUTH × ROOF × O1)

| Rank | #     | Platform | Variant                                                                                                               | Total    | Why it ranks                                                                                |
| ---- | ----- | -------- | --------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------- |
| 1    | P3-15 | YouTube  | I built 300 ads for a Tampa roofer in 14 days. His response: "Take down the ones with my receptionist."               | **9.75** | The receptionist line is the strongest pattern-interrupt single sentence in the entire sim. |
| 2    | P3-02 | Meta     | He stopped buying storm leads in March. By June, his crews were 11 weeks out. Here's the playbook (and 300 free ads). | **9.50** | Three-beat narrative + offer reveal. Highest Meta-side score for P3.                        |
| 3    | P3-24 | Meta     | He sent us his crew photos on a Tuesday. By the next Tuesday he had 300 ads and 19 booked inspections.                | **9.50** | Tied. Concrete-time-period storytelling at its tightest.                                    |
| 4    | P3-05 | Meta     | "We replaced HomeAdvisor with the ads they made us. Closed 22 retail re-roofs in 6 weeks." — Cohort #2.               | **9.35** | Testimonial format + retail-re-roof vocabulary (very on-ICP).                               |
| 5    | P3-12 | YouTube  | He fired HomeAdvisor in March. I'll show you what his calendar looked like in June.                                   | **9.35** | Aggregator-burnout pivot + CG payoff.                                                       |
| 6    | P3-11 | YouTube  | Watch a $4.8M roofer fill his August pipeline with 300 free vertical ads.                                             | **9.25** | Cleanest peer-anchored verb-first hook.                                                     |
| 7    | P3-01 | Meta     | How a $4.8M Tampa roofer booked 63 inspections in 28 days off 300 free vertical ads.                                  | **9.20** | Classic case-study headline structure.                                                      |
| 8    | P3-04 | Meta     | $3M+ roofer, 9-truck crew, 47 booked inspections in 30 days. Free 300-ad batch. We need two more like him.            | **9.20** | Crew-size detail is the under-used ICP-identity hook.                                       |
| 9    | P3-09 | Meta     | A roofer doing $4.2M just ran 300 of our vertical ads in 30 days. Pipeline: 11 weeks. Cost to him: $0.                | **9.20** | Pipeline length ("11 weeks out") is the felt-status metric for roofers.                     |
| 10   | P3-13 | YouTube  | Three hundred ads. Five roofers. Zero dollars. Here's what happens in the first week.                                 | **9.20** | Cadence-led; the three-beat opens the curiosity.                                            |

---

## 4. Top 5 Overall (cross-pair)

Ranked by weighted total. Ties broken by (a) confidence of the underlying pair (all three pairs are H — equal), then (b) platform diversity, then (c) lowest policy risk.

| Rank | #     | Pair           | Platform | Variant                                                                                                               | Total    |
| ---- | ----- | -------------- | -------- | --------------------------------------------------------------------------------------------------------------------- | -------- |
| 🥇 1 | P3-15 | P3 AUTH × ROOF | YouTube  | I built 300 ads for a Tampa roofer in 14 days. His response: "Take down the ones with my receptionist."               | **9.75** |
| 🥈 2 | P2-12 | P2 PAIN × HVAC | YouTube  | The average HVAC shop misses $184K a year and doesn't know it. Watch me find yours.                                   | **9.55** |
| 🥉 3 | P3-02 | P3 AUTH × ROOF | Meta     | He stopped buying storm leads in March. By June, his crews were 11 weeks out. Here's the playbook (and 300 free ads). | **9.50** |
| 🥉 3 | P3-24 | P3 AUTH × ROOF | Meta     | He sent us his crew photos on a Tuesday. By the next Tuesday he had 300 ads and 19 booked inspections.                | **9.50** |
| 5    | P2-19 | P2 PAIN × HVAC | Google   | "What August Cost Your Shop" (post-trim, 26 chars)                                                                    | **9.45** |

**Observations.**

- **AUTH × ROOF (P3) dominates the top 5** — 3 of 5 slots. Story-structured hooks (peer + time + reveal) out-score every direct-claim hook. Matches the §1.2 P3 reasoning in sim 02: roofers benchmark obsessively against same-segment peers.
- **YouTube hooks over-perform their share** — 2 of 5 slots from ~20% of the variants. Verb-first language with hard numbers is uniquely suited to the 5s pre-skip slot.
- **P1 (Guaranteed Trial) doesn't make the top 5** despite being the matrix's #1 cell. The angle's strength is in the _offer_, not the _hook_ — risk-reversal sells itself once the click happens. The top P1 hook (P1-07, 9.20) still belongs in the carry-forward set as the primary cold ad.

---

## 5. Recommendation — 3–5 Hooks Into Simulation 04 (Creative Format)

Pick **4 hooks**, one per dimension being tested:

| #   | Hook ID   | Pair             | Platform anchor                      | Why this one carries forward                                                                                                                                                                                 |
| --- | --------- | ---------------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1   | **P3-15** | AUTH × ROOF × O1 | YouTube (15–30s case-study cut)      | Highest score in the doc. The receptionist line is a creative-format prompt by itself — it implies a montage of rejected ads, which is a format we haven't tested.                                           |
| 2   | **P2-12** | PAIN × HVAC × O2 | YouTube → Meta cross-cut             | The cleanest verb-first calculator promise; should drive the highest top-of-funnel volume of the four. Pairs naturally with the existing `/ai-call-handling-calculator` LP.                                  |
| 3   | **P1-07** | PAIN × HVAC × O6 | Meta (1:1 testimonial card)          | Best P1 hook; the testimonial-as-hook short-circuits the guarantee-credibility objection identified in §3.2 of sim 02. Forces a creative format we don't currently produce (operator-to-operator UGC-style). |
| 4   | **P3-02** | AUTH × ROOF × O1 | Meta (story-arc carousel or 45s VSL) | Three-beat narrative — pairs with **P3-15** as a parallel Meta-side test for the same pair, so sim 04 can compare hook-driven vs format-driven lift inside one pair.                                         |

**Why not 5.** Adding a fifth hook would force a redundant pair (a second P2 or P1 variant). Keeping the carry-forward set to 4 means sim 04 tests **three distinct pairs across two platforms**, which gives the cleanest read.

**What sim 04 needs from this:**

- Each carried hook → 2–3 creative formats (e.g., UGC selfie / animated text-on-bg / case-study cut).
- Hold the hook line constant; vary only the format. The CTR delta isolates format lift from hook lift.
- Track which hooks generalize across formats (a sign of true ICP resonance) vs. which collapse outside their native platform.

---

## 6. Policy-Flagged Variants — Audit Trail

Kept here for completeness; **excluded from all top-10 and top-5 cuts.**

### Content policy violations (cut)

| #     | Variant                                                   | Violation                                                                   | Suggested reframe                                                                              |
| ----- | --------------------------------------------------------- | --------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| P1-08 | "Are you tired of losing $5,000/month to bad HVAC leads?" | Meta personal-attribute callout (financial state).                          | "Most HVAC owners lose $5K+/mo to shared leads. Here's the fix." (observational, not personal) |
| P1-20 | "#1 HVAC Lead Guarantee in TX"                            | Google superlative ("#1") without substantiation + unsupported "Guarantee". | Drop superlative: "HVAC Lead Trial · 30 Days TX" (28 chars).                                   |
| P2-06 | "How much money are YOU losing to missed calls?"          | Meta personal-attribute callout + ALL-CAPS targeting "YOU".                 | "The number most HVAC owners don't know: missed-call $."                                       |
| P2-20 | "#1 ROI Calculator for HVAC"                              | Google superlative "#1" without proof.                                      | "HVAC ROI Calculator · 90 Sec" (28 chars).                                                     |
| P3-08 | "Make $250K extra in 60 days as a roofer."                | Meta implied-earnings claim.                                                | "One roofer booked $250K in 60 days on 300 free ads." (attributes to a case, not the reader).  |
| P3-20 | "Best Roofing Ads, Guaranteed"                            | Google double superlative ("Best" + "Guaranteed") without proof.            | "Roofing Ads · 300 in 14 Days" (28 chars).                                                     |

### Length violations (Google 30-char cap — trim, not cut)

| #     | Variant                              | Current | Trim to                           |
| ----- | ------------------------------------ | ------- | --------------------------------- |
| P1-22 | "Exclusive HVAC Leads, 30-Day Trial" | 34      | "Exclusive HVAC Leads · 30d" (26) |
| P2-17 | "Find Your Missed Revenue · Free"    | 31      | "Find Missed Revenue · Free" (26) |
| P2-19 | "What August Cost Your HVAC Shop"    | 31      | "What August Cost Your Shop" (26) |
| P3-19 | "Founding Cohort — 5 Roofers Only"   | 32      | "Founding Cohort — 5 Spots" (25)  |

---

## 7. Caveats

1. **All scores are priors.** No live ad data was used. First 7 days of spend on the carried-forward hooks should overwrite every score in §1.1, §2.1, §3.1.
2. **The "specificity" axis rewards plausible-but-fictional numbers.** Several top-scoring hooks (e.g., P1-04's "311 calls / 14 booked", P3-15's Tampa receptionist) **must be replaced with real cohort numbers before launch**, or rewritten with hedging ("a recent operator…").
3. **P3's peer-asset dependency is unresolved.** Per sim 02 §6.3, the AUTH × ROOF cell assumes a same-segment case study exists. If the asset doesn't, the top 3 P3 hooks are aspirational — the cohort itself has to produce them.
4. **Scoring rubric weights are uncalibrated.** SPEC and ICP at 0.25 each reflect the prior-stage finding that LQ is the binding constraint on this funnel. If sim 04/05 shows volume (CTR/LP) is the binding constraint instead, re-weight PI and CG upward and re-rank.
5. **Platform-fit axis ignores Google Display and TikTok.** Both are out-of-scope per current channel mix; if either is added later, every variant needs a re-score on PF only.
6. **75 variants, not 50–100.** Sits inside the requested band. Distribution: 25 per pair, ~12 Meta / ~5 YouTube / ~6 Google per pair. Heavier Meta count reflects Meta's higher v1 spend share from sim 01.
