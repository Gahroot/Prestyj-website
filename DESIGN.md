# Prestyj Design System

## Product direction

Prestyj is an institutional B2B marketing and research site for real estate investment funds from $500M AUM, commercial brokerages, and CRE owner-operators.

The site sells finished work products, not AI features or software seats. The primary conversion is **Get access** with one recurring workflow, its source systems, and its review owner.

## Design read

- **Audience:** Partners, COOs, CFOs, fund accounting, investor relations, deal teams, asset managers, and brokerage leaders.
- **Single job:** Make a senior operator recognize work they already carry, understand its controls, and request a scoped proof.
- **Decision risk:** High. Claims must be attributable, staged honestly, and explicit about human review.
- **Content:** Outcome first, then source, action, review gate, and delivered work product.
- **Platform:** Next.js App Router, responsive web, keyboard and touch, WCAG 2.2 AA as the engineering floor.

## Evidence

- The user supplied Hebbia Max as the positioning reference. The relevant pattern is work-language such as building models and shipping decks, not imitation of its visual treatment.
- Existing Prestyj typography, dark tokens, shadcn/Radix primitives, and Lucide icons are retained.
- Sanity-style platform hierarchy supports capability, system detail, and proof without becoming a feature catalog.
- Apple-style restraint supports one claim, one artifact, and one next action per section.

## Thesis

The shared visual device is an **evidence ledger**. Every capability can be read as:

1. source system;
2. agent action;
3. human review;
4. finished work product.

The layout resembles a controlled work record rather than a generic AI landing page. Borders, spacing, and typography carry hierarchy. Violet is reserved for citations, selected states, and primary actions.

## Tokens and craft

- Reuse `background`, `foreground`, `card`, `border`, `muted-foreground`, `primary`, `ring`, and existing status tokens from `globals.css`.
- Use Manrope for headings and Inter for body copy.
- Use violet only for primary actions, selected states, and evidence cues.
- Use the shared `max-w-7xl` rail with `px-4 sm:px-6 lg:px-8` on navigation, pages, and footer.
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

## Release checks

- Desktop and narrow screenshots for home, platform, capability, audience, research, access request, and privacy choices.
- Keyboard pass for navigation, dropdown, consent, accordions, forms, calculator, and voice-demo controls.
- 200% zoom and narrow reflow pass.
- Confirm zero Google, Meta, or LinkedIn network requests before consent.
- Confirm Global Privacy Control leaves marketing scripts disabled.
- Run project tests, typecheck, lint, and production build.
- Scan canonical rendered pages for banned legacy terms and obsolete prices.
