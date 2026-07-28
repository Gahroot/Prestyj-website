# AI-First Audit Design

## Positioning

**Product:** AI-First Audit  
**Descriptor:** Cost and readiness audit  
**Promise:** Find the workflows costing you the most. See where an AI agent can help first.  
**Audience:** Busy owners and operators at service businesses and real estate teams.  
**Primary conversion:** Complete the audit, see the top result, then request the full report.  
**Secondary conversion:** Book a workflow review after the report has delivered useful guidance.

## Design read

- **Surface:** A direct marketing page that becomes a guided assessment and then a data-backed report.
- **Audience:** Owners and operators, often using a phone, who need plain language and fast decisions rather than technical detail.
- **Single job:** Identify the first costly workflow worth fixing with a done-for-you AI agent.
- **Task and risk:** Infrequent, roughly four-minute workflow with medium decision risk. Cost figures must be traceable to visitor inputs and clearly labeled as estimates.
- **Content:** Three to five workflows, long custom workflow names, currency totals, impact labels, readiness labels, recommendations, blockers, and a ranked top three.
- **Platform:** Next.js App Router on modern mobile and desktop browsers with keyboard, touch, pointer, reduced-motion, and forced-colors support.
- **Constraints:** Preserve the dark Prestyj system, Manrope and Inter, shared Navbar and Footer, semantic UI primitives, Lucide icons, and the existing report route.

## Evidence and thesis

The leading archetype is **application UI** because the audit is a focused decision workflow. The landing section borrows only the direct claim hierarchy of **marketing and brand**. `linear.app` and `superhuman` are useful structural references for stable controls and concise state recognition. `intercom` is the contrast: the audit must not become a tour or card-heavy marketing surface.

Use a **calm cost ledger** as the visual signature. The first glance is the estimated time cost. The second is readiness. The third is the next action. Purple is reserved for the primary action and current priority. Neutral surfaces, rules, typography, and stable columns do the remaining work.

The dark theme belongs because it is the established product environment, not because darkness implies quality. The category label belongs because it communicates that the page is a free audit. Decorative glow, glass, equal feature cards, generic icon tiles, hover lift, ambient motion, tint-on-tint status treatments, and unsupported proof do not belong.

## Reuse map

- **Page shell:** Navbar, Footer, and a shared `max-w-5xl` content rail with `px-4 sm:px-6 lg:px-8` gutters.
- **Typography:** Manrope for headings, Inter for body and controls.
- **Actions and fields:** Existing Button, Input, Label, and Progress components.
- **Icons:** Lucide only. Icons supplement visible labels and never replace them in the main flow.
- **Surfaces:** Existing background, card, border, foreground, muted, primary, destructive, success, and warning tokens.
- **Motion:** Short opacity and small continuity transitions. Named properties only. No resting motion and no generic hover movement.

## Flow and component plan

1. **Landing and profile:** The promise, trust line, business type, and loaded hourly cost are close together so the visitor can start immediately without contact details.
2. **Workflow picker:** Three to five relevant workflow choices plus a bounded custom option. Selection uses a neutral surface, strong border, check icon, and text count.
3. **Workflow questions:** One native radio group at a time with a persistent legend, visible Back action, workflow and question progress, and answer preservation.
4. **Instant preview:** The complete top result appears before contact collection, including estimated yearly time cost, impact, readiness, recommended AI agent, and why it ranked first.
5. **Report request:** First name and work email only. Optional three-email consent is unchecked. Pending, error, retry, delivery-warning, and success states preserve the completed assessment.
6. **Report:** Semantic summary, number one priority, ranked ledger, blockers, first fix plan, method, print action, and one booking action after the useful content.

## Responsive behavior

- **320 to 767 pixels:** One column, full-width 44-pixel controls, vertical workflow rows, no horizontal table requirement, and preserved DOM reading order.
- **768 to 1023 pixels:** Wider question and report cards while maintaining a single primary reading column.
- **1024 pixels and above:** The report ledger uses stable workflow, yearly time cost, impact, and readiness columns. The landing promise and starting control share the same rail.
- Long custom names wrap without truncation. Currency values use locale-aware formatting and do not control column width at the expense of labels.
- Text remains usable at 200% resize and under text-spacing overrides. Mobile controls do not autofocus and unexpectedly open the keyboard.

## Interaction and state rules

- Native inputs remain in the accessibility tree and expose checked, required, invalid, and disabled states.
- Selected state and keyboard focus are visually distinct. Pointer activation does not leave a false focus treatment.
- Touch targets are at least 44 by 44 pixels where layout permits.
- Step headings receive programmatic focus after navigation. A single named progress indicator reports the current value.
- Validation and request statuses use appropriate live regions. Errors identify the field or choice and explain recovery.
- Browser Back, Forward, refresh, validation failure, network failure, and duplicate submission preserve non-contact answers.
- Session storage contains only versioned non-contact draft data and is cleared after successful report creation.
- Reduced motion removes spatial travel while keeping immediate color, border, and text feedback.
- Forced colors retain borders, native control state, focus visibility, and non-color status text.

## Accessibility scope

The changed scope includes `/ai-first-audit`, the complete wizard, `/ai-first-audit/r/[slug]`, report print behavior, request errors and delivery warnings, and version-aware metadata. The HTML report is primary. Legacy version 1 PDF output remains available but is not represented as accessible.

Release evidence must cover applicable WCAG 2.2 Level A and AA criteria, keyboard completion, visible and unobscured focus, semantic names and status, 320-pixel reflow, 200% text, long content, no-hover input, reduced motion, forced colors, dark-theme contrast, VoiceOver with Safari, desktop and mobile screenshots, and Back, Forward, refresh, retry, duplicate, email-failure, and malformed-result states. Unavailable manual checks are recorded as unverified rather than passed.

## Content and trust rules

- Every dollar figure is an **estimated yearly time cost** calculated only from weekly-hour and hourly-cost inputs.
- No result is described as guaranteed savings or recovered revenue.
- Contact details, custom workflow titles, and dollar amounts never enter analytics labels.
- Follow-up consent is clear, optional, revocable, and unchecked by default.
- User-facing audit copy has no em dashes and avoids the banned technical terms defined in the approved plan.
- No testimonials, customer counts, logos, case-study claims, tool brands, or unsupported proof are added.

---

# Ad-to-Appointment Atlas Design

## Design read

- **Surface:** An editorial research page with one embedded, data-dense calculator.
- **Audience:** Service-business and real-estate operators who buy ads and need to understand where leads disappear after capture.
- **Single job:** Establish a trustworthy measurement protocol and help a visitor calculate a private full-funnel baseline.
- **Task and risk:** The protocol is read occasionally; the calculator is used during campaign review. Decision cost is medium because inconsistent cohorts can produce misleading business conclusions.
- **Content:** A five-stage measurement chain, four metric definitions, six visitor inputs, six calculated metrics, a four-stage retention view, and a versioned research protocol.
- **Platform:** Next.js App Router in modern mobile and desktop browsers with keyboard, pointer, touch, 320-pixel reflow, forced-colors, and reduced-motion support.
- **Constraints:** Preserve Prestyj's dark theme, Manrope and Inter type roles, max-width page rail, Lucide icons, Navbar, Footer, Button, Input, and Label.

## Evidence and thesis

The leading archetype is **editorial and content**, with **dashboards and data-dense tools** as the secondary archetype for the calculator. `wired` supports deliberate editorial interruption and reading rhythm; `airtable` supports stable row alignment and explicit units. `miro` is the contrast because this page should not become a freeform canvas or decorative metric wall.

Use a **traceable lead ledger** as the page signature. The first glance is the missing measurement claim, the second is the five-stage chain, and the action is to calculate a private baseline. Numbered rows, rules, formulas, timestamps, and bounded retention bars make the subject recognizable without the Prestyj logo or accent color.

The dark theme belongs because it is the established product environment. The research labels belong because they communicate real document status, version, and taxonomy. Equal metric rows belong because the four formulas are peer definitions in a glossary, not generic feature marketing. Decorative glow, invented benchmark figures, fake charts, glass surfaces, icon medallions, hover lift, ambient motion, ubiquitous pills, and tint-on-tint status treatments do not belong.

## Reuse and craft system

- **Rail:** Navbar, hero, calculator, methodology, CTA, and Footer align to `max-w-7xl` with `px-4 sm:px-6 lg:px-8` gutters where the shared components permit it.
- **Typography:** Manrope carries research titles and hierarchy; Inter carries prose, controls, formulas, and data labels.
- **Material:** Background and card tokens create one flat canvas plus one contained calculator surface. Rules organize evidence; shadow and blur are unnecessary.
- **Color:** Purple marks the primary action and measurement sequence. Foreground and muted colors carry hierarchy. Bars repeat the product accent without implying a benchmark status.
- **Icons:** Lucide only, used beside visible actions; decorative document cues are omitted.
- **Motion:** The page rests still. Existing controls use named color, border, and shadow transitions; the data bars update without decorative travel.

## Components and states

1. **Measurement chain:** An ordered list from ad promise to attributed revenue. Each row has a stage number, title, and fields captured.
2. **Metric glossary:** A definition list pairing each proprietary metric with its exact formula and decision question.
3. **Private baseline calculator:** Six persistent labels and instructions, non-negative number inputs, impossible-order validation, reset action, empty state, valid results, and text equivalents for every visual bar.
4. **Protocol:** Version, publication date, sample threshold, cohort window, exclusions, privacy, and correction rules.
5. **Founding dataset CTA:** One direct link to book a call, with explicit private-baseline and written-permission language.

## Responsive and accessibility behavior

- At 320 to 767 pixels, all page regions use one column, calculator metrics use two columns, retention values wrap, and every control remains at least 44 pixels high where layout permits.
- At 768 to 1023 pixels, form fields use two columns while results remain below or adjacent only when space supports readable measures.
- At 1024 pixels and above, editorial copy and evidence ledgers use asymmetric two-column compositions on one shared rail.
- Every information relationship uses headings, ordered lists, definition lists, labels, descriptions, or time semantics. Bars are decorative duplicates of visible counts and percentages.
- Error text names impossible funnel ordering and is announced. Invalid fields retain values. Reset is explicit and reversible.
- No field data is submitted, persisted, placed in a URL, or sent to analytics. The CSV template contains headers only and no personal data.
- The changed scope is `/ad-to-appointment-atlas`, its calculator states, the CSV download, shared navigation link, footer link, and sitemap entry. Release evidence covers keyboard use, visible focus, 320-pixel reflow, desktop/mobile rendering, project accessibility tooling, and honest manual-check limitations.

## Release evidence and critique

- **Rendered evidence:** `.ezcoder/screenshots/ad-to-appointment-atlas-desktop-final.png`, `ad-to-appointment-atlas-mobile-final.png`, `ad-to-appointment-atlas-320.png`, `ad-to-appointment-atlas-200-percent-text-final.png`, `ad-to-appointment-atlas-forced-colors.png`, and `ad-to-appointment-atlas-invalid-state.png`.
- **Functional evidence:** Five Vitest cases cover correct formulas, zero denominators, valid ordering, fractional counts, and impossible stage ordering. Keyboard-only Chromium testing reached the skip link first, activated `#main-content`, traversed every calculator input and action without a trap, and produced the calculated baseline from keyboard-entered values.
- **Accessibility evidence:** Lighthouse accessibility scored 100 after contrast and definition-list corrections. Chromium's accessibility tree exposed one main landmark, navigation, contentinfo, ordered heading levels, six named and described spinbuttons, and the reset button. Forced colors and reduced motion were active together with no horizontal overflow. A 320-pixel viewport at 200% root text measured 320 pixels of document width.
- **Resilience evidence:** Empty, calculated, impossible-order error, reset, direct anchor, CSV download, 320-pixel, 390-pixel, desktop, reduced-motion, and forced-colors states were exercised. Loading, async retry, offline mutation, disabled submission, destructive, and success-message states do not apply because the calculator is local and synchronous.
- **Verification commands:** `npm test -- src/lib/ad-to-appointment-atlas.test.ts`, `npm run typecheck`, `npm run lint`, and `npm run build` pass. Lighthouse SEO scored 92 in development; its only SEO failure was the existing development `robots.txt` 500 response. Production field Core Web Vitals remain unverified.
- **Assistive technology limitation:** Automated accessibility and Chromium accessibility-tree output pass. A manual Safari plus VoiceOver session remains unverified, so no WCAG-conformance or ADA-compliance claim is made.
- **Inventory and support:** The route adds no media, embeds, authentication, storage, or external data requests. Existing global analytics scripts remain inherited. The public accessibility-feedback path is `/contact` and `hello@prestyj.com`. Automated browser evidence covers Chromium 151 on desktop and mobile emulation; Safari and Firefox manual checks remain unverified.

## Final quality score

**23/24.** Specificity 2, hierarchy 2, composition 2, consistency 2, typography 2, material logic 2, state completeness 2, responsive behavior 2, accessibility 1, motion 2, content authenticity 2, visual distinctiveness 2. Accessibility is held at 1 only because a manual screen-reader session is not available.

The first critique identified low-contrast purple utility text, invalid nested definition-list markup, and 200% text overflow from implicit grid tracks. Those failures were corrected. The decorative document icon was removed from the measurement ledger; the page remains specific through its numbered trace, formulas, protocol record, and retention view.
