# Institutional, product-led redesign

## Objective and scope

Replace the text-heavy homepage with an editorial, product-led experience for institutional real estate buyers. Primary outcome: qualified workflow-demo requests. Secondary outcome: inspection of a source-linked sample. Preserve the existing layout lab and all pre-existing work. This change covers `/`, `/book-demo`, shared navigation/footer variants, and privacy-panel presentation. Other pages retain their current dark design. No deployment, database changes, new packages, automated calls, or new voice provider.

## Reference decision

- Lead: Harvey's editorial headline, clear demo action, and large product presentation (https://www.harvey.ai/).
- Product craft: Attio's restrained framing, readable interface, and precise alignment (https://attio.com/).
- Audience: Rogo's institutional context (https://rogo.com/).
- Demonstration: ElevenLabs' scenario-first product experience (https://elevenlabs.io/agents).
- Conversion: Refero ElevenLabs sales form `a35d8b75-14ba-4570-9953-6447d936fcae` and Synthesia demo page `8aa14376-85d3-47b2-88fa-b2b4c424e983`.

These are structural references, not evidence of conversion performance. Use original code, copy, imagery, and Prestyj's existing proof records; no third-party trademarks, customer claims, or interface screenshots.

## Step-by-step implementation

1. **Preserve and establish boundaries.** Keep `/layout-lab`, its styles, and existing proxy/security edits untouched. Use a scoped editorial theme for the new routes so dark pages and prototypes do not inherit incompatible colors.
2. **Create the visual foundation.** Reuse Inter, Lucide, Button, Radix dropdown/sheet primitives, and the established content rail. Add a self-hosted-through-Next editorial serif. Warm ivory canvas, graphite text/actions, restrained violet evidence links, readable muted text. 4px control corners, slightly larger product-frame corners, and a shared spacing rhythm.
3. **Create one original architectural visual.** Generate a fictional limestone office courtyard as atmosphere, not a claimed client property. Compress to WebP with explicit dimensions; use responsive Next Image. Document provenance. No autoplay, video, or decorative perpetual animation.
4. **Build the hero and sample workbench.** Pair a large editorial promise with specific audience and output language. Primary CTA: Book a workflow demo. Secondary CTA: Explore sample work. Show a large interactive work sample over the architectural image.
5. **Make the sample inspectable.** Three local synthetic fixtures: deal diligence, fund reporting, brokerage origination. Native selection buttons update output, exception, and cited source together. Citation controls reveal the relevant excerpt. Every view is clearly labeled illustrative, not live/client work. No uploads, model calls, or fake approval actions.
6. **Build the complete homepage narrative.** Audience strip; outcome-led workflow sections; source/review/output control sequence; a substantive case study drawn from the existing production-stage proof record; links for each audience; a restrained link to the existing voice demo; FAQ and closing CTA. Do not invent testimonials, client logos, ROI, or certification claims.
7. **Unify navigation and footer.** Add an editorial variant to existing components. Preserve destination links, legal links, and privacy choices. Ensure click/touch/keyboard dropdown opening, Escape dismissal, mobile close-on-navigation, and consistent CTA naming. Keep legacy dark variants working.
8. **Improve the booking experience.** Use the same visual system. Explain the meeting outcome and what to bring beside the existing form. Preserve its schema, lead API, explicit no-call/no-text flags, and consent-gated analytics. Improve labels, error associations, error focus, submission state, and reduced-motion behavior. Preserve scheduler loading only after successful submission; offer a human email fallback.
9. **Reduce consent-panel interference.** Keep the existing tracking gate and Global Privacy Control behavior. Use a compact, readable panel with equally prominent allow/reject controls and a privacy-policy link. Test first visit, rejection, reopening, and narrow viewports. Do not hide required information or pre-enable tracking.
10. **Verify and critique.** Run typecheck, lint, unit tests, formatting on changed files, and production build. Capture desktop, tablet, and mobile; test samples/citations, dropdown and mobile menu, FAQ, form validation and preserved input after error, consent rejection/reopening, reduced motion, 320px reflow, and text contrast. Do not submit test leads or place real calls. Record external-service or assistive-technology checks not performed.

## Acceptance criteria

- A visitor can identify audience, deliverable, and next step in the opening composition.
- The work itself occupies the main visual, not a stock robot, glowing orb, or invented dashboard.
- All sample information remains labeled synthetic and all displayed citations resolve to matching fixture excerpts.
- No horizontal page overflow at 320px; mobile retains the core work sample and action.
- Keyboard interaction and visible focus for every new control, with semantic labels and status.
- No marketing requests before consent or after initial rejection; no scheduler before form completion.
- Existing proof stages, canonical routes, schema metadata, archived redirects, and layout lab remain intact.
- Required project checks pass before the work is considered verified. Any blocker is recorded explicitly and prevents a completion claim.

## Measurement after launch (not implemented here)

Compare qualified attended demos and opportunities, not just clicks. Test visible sample versus the prior hero, specific booking language versus Get access, and optional voice demo on brokerage pages. No conversion lift is promised. A release requires separate deployment authorization.

## Execution evidence

### Implemented in source

- Editorial shell, Newsreader headline font, scoped light tokens, aligned content rails, mobile layouts, reduced-motion and forced-color treatments.
- Homepage hero, three inspectable sample workflows, work categories, control model, existing production-stage project record, voice-demo link, native FAQ, and closing booking action.
- Shared light/dark navigation and footer; Radix desktop menu and mobile sheet; consistent booking CTA.
- Booking expectations, linked validation errors, invalid-field focus, pending/error states, retained form data, lazy light-themed calendar, email fallback, and preserved no-call/no-text submission flags.
- Compact consent presentation with equally prominent choices, policy link, and focus return on reopening. Existing tracking gate and GPC logic retained.
- Four fixture-integrity tests added to the existing Vitest suite.

### Original image provenance

`public/images/institutional/limestone-courtyard.webp`: original fictional commercial courtyard generated using the user-authorized GPT Image 2.5 Flare tool. Converted with an already-installed image utility to WebP: 1916 × 821, 236,326 bytes. No third-party photo or customer property is depicted. The case-study placement is visibly labeled AI-generated architectural illustration. Responsive Next Image rendering was inspected in local desktop and mobile browser captures. The case study uses a separate, locally cropped `limestone-detail.webp` (700 × 800, 103,672 bytes) from the same original image. It stays lazy-loaded; the hero remains prioritized.

### Verification completed after installation authorization

The user authorized installation and verification. `npm ci --no-fund` restored 756 packages from the existing lockfile and generated the Prisma client. No dependency versions or lockfile contents were changed. The existing Playwright tool's Chromium headless runtime was also restored to run the browser checks.

| Check                                      | Result                                                                     |
| ------------------------------------------ | -------------------------------------------------------------------------- |
| `npm run typecheck`                        | Passed                                                                     |
| `npm run lint`                             | Passed, no warnings                                                        |
| `npm run test`                             | Passed: 16 files, 68 tests                                                 |
| `npm run build`                            | Passed: 606 generated pages                                                |
| Prettier check covering all redesign files | Passed                                                                     |
| `npm run format:check`                     | Failed only on 14 pre-existing layout-lab/security-test files listed below |
| Chromium browser regression harness        | Passed: 17 checks                                                          |
| `npm audit --omit=dev`                     | No production dependency advisories reported                               |
| `npm audit`                                | Three moderate development-tool findings; versions left unchanged          |

### Browser evidence

Harness: `/tmp/prestyj-redesign-browser-check.cjs`. Results and screenshots: `/tmp/prestyj-browser-evidence/`. These are local verification artifacts, not committed files.

The actual Next.js site was exercised at `http://127.0.0.1:3100`:

- No marketing requests before consent, after rejection, or with Global Privacy Control.
- Privacy reopening focuses the panel; rejecting returns focus to the originating control.
- Keyboard skip link, desktop menu click/keyboard opening, Escape, focus return, and outside dismissal.
- All three sample workflows, citation selection, source reset, and keyboard activation.
- Native FAQ opening and closing by pointer and keyboard.
- No horizontal page overflow at 1440, 1024, 768, 390, and 320 CSS pixels on the homepage; booking checked at 1440, 768, 390, and 320.
- Mobile menu dismissal and navigation into an existing dark-theme fund page.
- Four-field invalid booking state, first-error focus, failure recovery with retained input, disabled pending state, successful-response transition, and focus on the scheduler heading.
- Form payloads preserve `trigger_call: false`, `trigger_text: false`, and normalized phone numbers.
- Scheduler does not load before a successful response; email fallback remains available afterward.
- Reduced-motion and forced-colors checks, representative linked-route HTTP checks, and zero browser JavaScript exceptions in the exercised flows.

Lead responses and third-party scripts were intercepted. No real leads, marketing events, calls, or bookings were sent. The confirmed-success booking check proves the frontend transition, not live CRM delivery or Cal.com availability.

### Defect found and corrected

The browser test initially found that component-specific transitions overrode the reduced-motion selector. All custom editorial transitions now use a shared `--editorial-motion-duration` token, set to zero under the reduced-motion preference, including portal content. The same assertion was rerun and passed, along with the complete 17-check browser harness. Typecheck, lint, unit tests, and production build were rerun afterward.

A final server-log check also found a Next.js image-loading warning. Runtime inspection showed the prioritized hero and lazy case-study image shared the same optimized URL at mobile widths; Next's development image registry associated the lazy metadata with the hero. A smaller portrait crop now gives the case-study placement its own appropriately sized asset and preserves lazy loading rather than eagerly loading below-fold media. The browser harness additionally checks for console warnings.

Desktop and mobile screenshots were inspected. The primary homepage action remains visible above the consent panel at 390px; source evidence is retained in the narrow layout. Booking fields, actions, and footer remain within the shared rail.

Selected literal color checks remain: body 14.25:1, muted text 5.77:1, evidence links 6.04:1, dark-section text 8.73:1, input borders 3.47:1, source-control borders 3.43:1, errors 6.57:1. These are selected token pairs, not a claim of full WCAG conformance.

### Existing findings left untouched

The repository-wide formatting failure is confined to pre-existing work:

- `src/app/layout-lab/[slug]/page.tsx` and `src/app/layout-lab/layout.tsx`
- Six files under `src/components/layout-lab/families/`: conversion, editorial, ledger, narrative, proof, and workbench layouts
- `src/components/layout-lab/lab-navigation.tsx`, `layout-gallery.tsx`, `layout-thumbnail.tsx`, and `prototype-primitives.tsx`
- `src/lib/layout-lab/layouts.ts`
- `src/proxy.test.ts`

The development dependency audit flags `@humanfs/node`, `@vitest/mocker`, and its parent `vitest`. The reported Vitest fix requires a breaking major-version upgrade; no forced upgrade was attempted. The production-only audit reports zero advisories. This is an audit snapshot, not a security certification.

### Remaining limits and release status

Not exercised: real CRM submission, actual Cal.com booking, microphone/voice calls, marketing opt-in delivery, screen-reader use, Safari/Firefox, physical mobile devices, field performance, or conversion uplift. Accessibility observations are engineering evidence, not a legal compliance claim.

The redesign has passed the listed code and browser checks but has not been committed, pushed, or deployed. The local preview is left running. Existing layout-lab files, `DESIGN.md`, global stylesheet edits, and proxy/security edits remain untouched by this implementation.
