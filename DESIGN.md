# Prestyj Design System

## Product direction

Prestyj is an institutional B2B marketing and research site for real estate investment funds from $500M AUM, commercial brokerages, and CRE owner-operators.

The site sells finished work products, not AI features or software seats. The primary conversion is **Book a workflow demo** with one recurring workflow, its source systems, and its review owner.

## Design read

- **Audience:** Partners, COOs, CFOs, fund accounting, investor relations, deal teams, asset managers, and brokerage leaders.
- **Single job:** Make a senior operator recognize work they already carry, understand its controls, and request a scoped proof.
- **Decision risk:** High. Claims must be attributable, staged honestly, and explicit about human review.
- **Content:** Outcome first, then source, action, review gate, and delivered work product.
- **Platform:** Next.js App Router, responsive web, keyboard and touch, WCAG 2.2 AA as the engineering floor.

## Evidence

- The user supplied Hebbia Max as the positioning reference. The relevant pattern is work-language such as building models and shipping decks, not imitation of its visual treatment.
- The approved light homepage is the visual source of truth. Retain shadcn/Radix primitives and Lucide icons.
- Sanity-style platform hierarchy supports capability, system detail, and proof without becoming a feature catalog.
- Apple-style restraint supports one claim, one artifact, and one next action per section.

## Thesis

The shared visual device is an **evidence ledger**. Every capability can be read as:

1. source system;
2. agent action;
3. human review;
4. finished work product.

The layout resembles a controlled work record rather than a generic AI landing page. Borders, spacing, and typography carry hierarchy. Ink-filled primary actions lead; violet is reserved for evidence and interactive cues.

## Tokens and craft

- Reuse `background`, `foreground`, `card`, `border`, `muted-foreground`, `primary`, `ring`, and existing status tokens from `globals.css`.
- Use the existing Georgia display stack for editorial headings and Inter for UI/body copy. No new fonts.
- Warm paper `#faf9f6`, ink `#292a24`, white controls, quiet rules, and visible focus define the public default. Semantic tokens also cover portals and overscroll.
- Reuse `EditorialShell` once per page and its 76rem content rail and responsive gutters. Narrow reading measures sit inside that rail.
- Prefer square or lightly rounded bordered records over glass, glow, pills, and floating cards.
- No autoplay content. Motion is user-triggered and short, with reduced-motion behavior.
- No generated em dashes in interface copy.
- No emoji UI, mixed icon sets, fake terminals, invented metrics, or generic hover lift.

## Canonical components

- `DealHero`: left-aligned institutional position and qualification facts.
- `EvidenceLedger`: capability index in the buyer's vocabulary.
- `ControlledWork`: source to agent to review to work-product sequence.
- `ProofRecords`: anonymized, stage-labeled project evidence.
- `CapabilityPage`: asks, source systems, review boundary, and outputs.
- `AudiencePage`: recognized pain, outcomes, systems, and relevant capabilities.
- `TrackingConsent`: equal accept/reject controls and persistent privacy choices.

## Responsive behavior

- Wide layouts use two-column editorial compositions and ledger rows.
- Intermediate layouts preserve one shared content rail and readable line length.
- Narrow layouts stack terms above details without changing content order.
- Primary actions remain visible without covering content.
- No horizontal scrolling is required at 320 CSS pixels.

## Accessibility and trust

- Native links, buttons, labels, lists, headings, and landmarks are the default.
- Focus is shown with `focus-visible`, not sticky pointer focus.
- Interactive status uses text and `aria-live` where calculations or submissions update.
- AI voice interactions are labeled before microphone or call action.
- Public legal pages avoid certification or unsupported conformance claims.
- Vendor names describe possible systems and are not partnerships or prebuilt integration claims.

## Content authenticity

- Proof comes from the inspected repositories and carries an honest stage: In production, Live, or Reference architecture.
- Reference architecture never receives a live status indicator.
- No fabricated testimonials, customer logos, authors, ROI metrics, or scarcity.
- Archived SMB content remains in source for reversibility but cannot render on canonical public routes.

## Layout lab

`/layout-lab` is an unlinked prototype surface for comparing 24 complete homepage concepts without changing the production homepage. Shared `noindex, nofollow` metadata keeps it out of search results, but the route is not access control and contains no confidential material.

The concepts use six structural families: editorial, evidence ledger, workbench, proof first, narrative, and conversion. Every family exposes the same buyer decision through a different scan path: work to complete, source, agent action, human review, finished work product, and access request.

The lab reuses canonical positioning, outcomes, capabilities, proof records, dark tokens, Manrope and Inter, shadcn primitives, and Lucide icons. The contact sheet is intentionally dense because side-by-side comparison is its sole task; full prototypes load on separate static routes.

Observed references include Hebbia, Rogo, Dealpath, Juniper Square, Cherre, Northspyre, Vanta, Harvey, Palantir, Linear, Apple, and Sanity. Their names describe structural inspiration only. The lab does not copy source, wording, images, logos, trade dress, or interaction sequences, and does not claim affiliation or conversion performance.

A concept remains a prototype until it is explicitly selected. Promotion requires a separate focused change to `/`, a content and accessibility review, and the normal production release checks. The current homepage remains the rollback-safe source of truth during review.

## Approved public redesign inventory

The verified current surface is 34 URLs plus 404: 16 static routes in `src/lib/institutional/site-map.ts`, six capability routes, three audience routes, and nine allowed articles. The approved audit counted five capabilities; implementation preserved the existing sixth route, portfolio intelligence. That module remains the route/allowlist source of truth; legacy redirects and sitemap exclusions stay intact.

- Static: `/`, `/platform`, `/results`, `/pricing`, `/about`, `/book-demo`, `/contact`, `/faq`, `/demo`, `/blog`, `/research`, `/pilot`, `/privacy`, `/terms`, `/accessibility`, `/commercial-real-estate-commission-calculator`.
- Product/audience: workflow-led rows showing delivered work, sources, and review requirements, not repeated feature cards.
- Work/company: stage-labeled proof records, operating principles, scoped pricing drivers, and a sequential pilot.
- Forms: concise context beside the form; preserve booking and contact integrations. The phone-only agent form is visible immediately, with unchecked consent and one Call me action.
- Research: quiet ruled article rows; articles and legal pages use a readable prose measure without changing substantive content.
- Calculator: assumptions beside the estimate, stacked on mobile; formulas and disclaimer unchanged.
- Recovery: 404 uses the same shell with useful current destinations.

### Selected Refero evidence

Research inspected two full style references (Claude `5369aa4f-1813-4e6d-949e-32a75ff7d920`, Anthropic `72140292-15fd-4052-bf1b-ecfa9eda9d9a`) and eight rendered screens. These are layout observations, not conversion claims or reusable proprietary assets.

| Screen             | Reference                              | Application                                |
| ------------------ | -------------------------------------- | ------------------------------------------ |
| Intercom contact   | `fcf7e4cc-8b90-4ad4-92b1-4910c8cfb8a2` | Dominant form beside brief context         |
| Anthropic contact  | `5da39bbd-4399-4d06-b4f8-a716a9da93e5` | Paper surface, labeled fields, calm rhythm |
| Airtable finance   | `03c2dab1-dd39-47e7-9853-579689aa58da` | Concrete workflow and work product         |
| Anthropic research | `91285208-9ba3-4a4d-990e-0f1c957ca83a` | Ruled editorial rows                       |
| Anthropic privacy  | `7f3d23d8-2028-497e-bc98-3ff19e9bbbbd` | Narrow reading measure                     |
| Mercury calculator | `39edb610-efa3-48de-a48c-2b1259e9fea7` | Working calculator before promotion        |
| Stripe pricing     | `8cae768b-6693-455e-a79f-8e7897862216` | Clear scope and cost drivers               |
| Cohere pricing/FAQ | `c67cd36e-92b6-4a0c-a05f-f5bfc7aec364` | Ruled disclosures                          |

Reference URLs: `https://refero.design/pages/<screen-id>`. Reject dark bands, gradients, invented dashboards, logo walls, floating decoration, and consumer pricing tiers. The memorable element is source-backed work, not an orb or animated illustration.

### Callback and verification contract

The agent page requests a phone call through the existing proxy, not browser audio. Show config loading, ready, validation, submitting, accepted, unavailable, rate-limit, and recoverable failure states. Preserve numbers on errors; announce status; prevent duplicates; never automatically retry a timed-out call. Accepted does not mean connected. No inbound agent number is verified.

Validate affirmative consent and normalized phone numbers both client-side and at the proxy. Bound request size and external waits, cancel on unmount, and never log phone numbers/provider bodies. Upstream abuse controls, recording/disclosures, and real delivery remain release gates until verified with authorized access.

Verify all current routes and changed families at desktop/mobile, 320px, 768px, 200% zoom, keyboard, reduced motion, forced colors, and first-visit privacy state. Capture evidence and record limitations, including unavailable assistive-technology checks; no accessibility/legal certification is implied.

## Local implementation evidence (24 September 2026)

- All 34 current URLs and the 404 render one light shell, one main landmark, and one page title. Chromium route scans found no automated WCAG-tagged violations after correcting legal-link styling. This is not a conformance claim.
- Desktop/mobile screenshots cover 20 page families. Additional checks cover 320px, 768px, a 720px layout viewport equivalent to 200% browser zoom on a 1440px window, and 200% root text size across all 35 surfaces. Native browser zoom and assistive-technology testing remain unverified.
- Callback form + local API + loopback stub exercised accepted, invalid, missing-consent, rate-limited, unavailable, config failure/retry, upstream failure, and timeout paths. Network rejection is also covered by proxy unit tests. No real calls, messages, emails, or bookings were sent.
- Contact and booking delivery were intercepted. The real read-only Cal.com scheduler rendered in light mode. Actual booking completion and call delivery remain unverified.
- The visual revision fixed first-visit privacy-banner focus obstruction and portaled-menu keyboard focus, retained button boundaries in forced colors, reduced excess form-header spacing, and removed a decorative shield icon. Final rendered rubric: 21/24; accessibility remains partial pending real assistive-technology/cross-browser review.
- Evidence and local harnesses: `.ezcoder/redesign/`. Full handoff: `.ezcoder/redesign/verification.md`. These generated artifacts are intentionally ignored by git.
- Public callback release is blocked until upstream abuse protection and recording/disclosure behavior are verified. Client duplicate prevention is not a rate limit.

## Release checks

- Desktop and narrow screenshots for home, platform, capability, audience, research, access request, and privacy choices.
- Keyboard pass for navigation, dropdown, consent, accordions, forms, calculator, and voice-demo controls.
- 200% zoom and narrow reflow pass.
- Confirm zero Google, Meta, or LinkedIn network requests before consent.
- Confirm Global Privacy Control leaves marketing scripts disabled.
- Run project tests, typecheck, lint, and production build.
- Scan canonical rendered pages for banned legacy terms and obsolete prices.
