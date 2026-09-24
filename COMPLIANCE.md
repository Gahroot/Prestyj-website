# Compliance Register

Snapshot: 27 August 2026 · Reviewed by: EZ Coder compliance-guard · **NOT LEGAL ADVICE**

Code state: uncommitted institutional website rewrite. Re-check against the final commit before relying on this register.

## 24 September 2026: scoped redesign follow-up

Base commit: `0e5eb36`, plus uncommitted public-site redesign. **Engineering guidance, not legal advice.** This is a scoped callback/accessibility follow-up, not a new full compliance or security audit. Earlier ledger entries not explicitly rechecked below are historical and must be reverified before release.

| ID      | Severity | Evidence                                                                                                                                                              | Current status and required action                                                                                                                                                                                                    |
| ------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CALL-01 | BLOCKER  | CODE: the public callback proxy has consent/phone validation, bounded requests and deadlines, but no verified distributed abuse control                               | Public callback release remains blocked. Verify upstream per-number/IP/account limits and spend/frequency controls with authorized service access. Duplicate prevention in the browser is not a rate limit.                           |
| CALL-02 | LAWYER   | CODE: an unchecked one-call consent box and persistent AI disclosure precede submission; RUNTIME: consent-free requests were rejected in tests                        | Recording behavior, spoken disclosures, consent evidence retention and jurisdiction-specific requirements remain unverified. Provider payload was preserved; local consent is not asserted to be a provider recording-consent record. |
| AI-01   | MEDIUM   | RUNTIME: phone-only form identifies the agent as AI before consent; accepted copy says request accepted, not connected                                                | Visible disclosure and local consent gate verified against a loopback stub. Actual delivery and call content were deliberately not exercised.                                                                                         |
| A11Y-01 | HIGH     | RUNTIME: 35 surfaces scanned with axe; keyboard navigation/forms/FAQ/calculator tested; literal contrast measured; privacy-panel focus obstruction fixed and retested | Partial verification only. Native screen-reader use, actual browser zoom, Safari/Firefox, physical devices and a complete per-criterion audit remain open. No accessibility certification is implied.                                 |
| PRIV-03 | MEDIUM   | RUNTIME: initial/denied browser captures attempted no external tracking requests; first-visit banner and footer re-entry remain available                             | This pass changed focus clearance only, not consent decisions. Prior granted-consent and GPC findings were not comprehensively reverified.                                                                                            |

Consent validation, payload bounds, safe error mapping and callback forwarding are covered by the existing Vitest runner (28 added tests). Real browser/component/API integration used a local stub; no real calls or messages were sent. Legal wording and dates in the public legal/accessibility pages were preserved. See `.ezcoder/redesign/verification.md` for scope, evidence, and remaining release gates.

## Assumed exposure profile

- **Confirmed:** Public website on `prestyj.com`, real contact and booking data, public AI voice demo.
- **Confirmed:** Google Ads, Meta, and LinkedIn marketing measurement; Cal.com scheduling; CRM forwarding.
- **Confirmed:** Hosted Stripe webhook remains for historical transactions; new public checkout is retired.
- **Assumed:** Reachable worldwide, so US and EU/UK privacy and accessibility duties may apply.
- **Assumed:** Visitors may include minors, but the business service is not directed to them.
- **Unknown:** Contracting legal entity, registered address, formal retention schedule, vendor DPAs, backup and incident procedures.

## Coverage ledger

### Security pre-deploy blockers

| #   | Checklist item                                    | Status                  | Evidence                                                                                       |
| --- | ------------------------------------------------- | ----------------------- | ---------------------------------------------------------------------------------------------- |
| 1   | Secrets absent from client/repo                   | unverified              | `.env*` ignored; history and deployed bundles not scanned in this pass                         |
| 2   | Row-level security on client-reachable tables     | n-a                     | Marketing site has no client database SDK                                                      |
| 3   | Service/admin key absent from browser             | pass                    | Public integrations use server routes or public identifiers                                    |
| 4   | Server-side object authorization                  | unverified              | Admin, affiliate, embed, and audit APIs were not fully reviewed in this positioning pass       |
| 4a  | Defaults do not grant access                      | unverified              | Database schemas were not fully reviewed                                                       |
| 4b  | Tenant identity not accepted from client          | unverified              | Operational product APIs need a separate authorization review                                  |
| 5   | No mass assignment                                | pass for changed forms  | Zod schemas and explicit CRM payloads are used                                                 |
| 6   | No string-built queries from input                | pass for changed forms  | Changed endpoints do not build queries                                                         |
| 7   | Internal endpoints authenticated; webhooks signed | partial                 | Stripe webhook verifies `stripe-signature`; all admin/internal routes need separate review     |
| 8   | Storage not publicly writable/listable            | n-a                     | No changed upload or storage flow                                                              |
| 9   | Expensive/abusable endpoints rate-limited         | unverified              | Earlier proxy-rate-limit claim is not evidence for the callback; see CALL-01 release blocker   |
| 10  | Password hashing                                  | n-a for public site     | No public account/password flow in canonical site                                              |
| 11  | Secure session cookies                            | unverified              | Admin/affiliate sessions outside rewrite scope                                                 |
| 12  | JWT verification                                  | unverified              | Operational APIs outside rewrite scope                                                         |
| 13  | Safe CORS                                         | pass for changed routes | No permissive credentialed CORS added                                                          |
| 14  | Card data does not touch origin                   | pass for new site       | Direct website checkout retired; historical Stripe webhook receives provider events only       |
| 14b | Financial/identity data encrypted                 | n-a for changed site    | No such fields added                                                                           |
| 15  | PII absent from logs                              | partial                 | Contact CRM response body logging removed; all legacy APIs need separate review                |
| 16  | HTTPS and HSTS                                    | partial                 | Production URL is HTTPS and CSP upgrades insecure requests; deployed HSTS not runtime-verified |
| 17  | No SSRF from user URLs                            | pass for changed site   | No user-supplied URL fetch added                                                               |
| 18  | Backups and restore tested                        | unverified              | External operational prerequisite                                                              |

### Universal public-site duties

| #   | Checklist item                               | Status                            | Evidence                                                                                   |
| --- | -------------------------------------------- | --------------------------------- | ------------------------------------------------------------------------------------------ |
| U1  | Privacy notice and request path              | implemented, not legally reviewed | `/privacy`, `privacy@prestyj.com`                                                          |
| U2  | Non-essential scripts blocked before consent | pass                              | RUNTIME: zero Google, Meta, or LinkedIn requests before choice; requests begin after grant |
| U3  | Tracking recipients disclosed                | implemented                       | Google Ads, Meta, LinkedIn, and Cal.com named in `/privacy`                                |
| U4  | Global Privacy Control honored               | pass                              | RUNTIME: `Sec-GPC: 1` disables grant action and produces zero marketing requests           |
| U5  | Contact form notice and retention            | partial                           | Notice and policy added; automated deletion schedule remains open                          |
| U6  | Legal entity identified                      | fail                              | Repository does not contain a confirmed contracting entity or address                      |
| U7  | Marketing email/SMS consent                  | partial                           | Changed forms trigger neither automated call nor text; legacy send systems need review     |

### Accessibility checks

| #   | Checklist item                    | Status                   | Evidence                                                                                      |
| --- | --------------------------------- | ------------------------ | --------------------------------------------------------------------------------------------- |
| A1  | Meaningful image alternatives     | pass in new canonical UI | New pages do not add unlabelled meaningful images                                             |
| A2  | Form labels and instructions      | pass in changed forms    | Visible `Label`, error text, and privacy notice                                               |
| A3  | Keyboard operation                | partial                  | Native links/buttons/Radix primitives used; complete manual pass pending                      |
| A4  | Color contrast                    | unverified               | Existing token palette retained; literal contrast was not measured across all states          |
| A5  | Visible focus                     | implemented              | New interactive elements use `focus-visible` rings                                            |
| A6  | Audio/video controls and captions | partial                  | Voice demo is user-triggered and disclosed; transcript/media equivalence needs runtime review |
| A7  | Page language                     | pass                     | Root `<html lang="en">`                                                                       |
| A8  | Zoom/reflow/mobile                | unverified               | Requires rendered 200% zoom and narrow viewport pass                                          |
| A9  | Reduced motion                    | partial                  | Autoplay marquee and global ambient animation removed; complete motion audit pending          |

## Findings

| ID       | Severity | Trigger                                       | Evidence                                        | Obligation                                                       | Status                                              | Guard                                             |
| -------- | -------- | --------------------------------------------- | ----------------------------------------------- | ---------------------------------------------------------------- | --------------------------------------------------- | ------------------------------------------------- |
| PRIV-01  | BLOCKER  | Ad pixels previously loaded on first paint    | RUNTIME: zero marketing requests before choice  | Prior permission and easy rejection                              | Fixed and runtime verified                          | Keep the Playwright network probe                 |
| PRIV-02  | HIGH     | Global Privacy Control                        | RUNTIME: header test and disabled grant control | Keep marketing tracking off                                      | Fixed and runtime verified                          | Keep the Playwright GPC probe                     |
| DATA-01  | HIGH     | Contact and booking retention                 | DEDUCED: no deletion job or schedule found      | Delete CRM/form data on a defined schedule                       | Open                                                | Owner and CRM configuration required              |
| LEGAL-01 | LAWYER   | Contracting entity unknown                    | CODE: no confirmed entity/address in repo       | Identify contracting party in signed terms                       | Open                                                | Owner and counsel input required                  |
| A11Y-01  | HIGH     | Public interactive site                       | CODE: canonical pages and forms                 | Manual keyboard, zoom, contrast, and assistive-technology review | Open                                                | Release checklist; automated scan recommended     |
| AI-01    | MEDIUM   | User-facing voice agent                       | CODE: `/demo`                                   | Persistent AI disclosure and recording consent                   | Implemented; runtime pending                        | Verify disclosure before microphone/call action   |
| SMS-01   | HIGH     | Legacy voice/SMS systems exist                | CODE: repository APIs                           | One consent, suppression, quiet-hours, and frequency chokepoint  | Outside canonical rewrite; separate review required | Do not market automated outreach until reviewed   |
| OPS-01   | HIGH     | Operational admin/affiliate/embed APIs remain | CODE: `src/app/api`                             | Full auth, authorization, session, and tenant review             | Open                                                | Separate defensive review required                |
| CLAIM-01 | MEDIUM   | AI and production claims                      | CODE: institutional proof registry              | Keep dated evidence and honest stage labels                      | Implemented                                         | Central `proof.ts`; no reference card marked live |
| PAY-01   | MEDIUM   | Historical Stripe webhook remains             | CODE: signed webhook                            | Preserve signature verification; avoid unconsented ad disclosure | Meta CAPI removed; webhook retained                 | Existing signature check                          |

## Implemented in this pass

- Marketing scripts moved behind equal accept/reject controls.
- Global Privacy Control disables marketing measurement.
- Footer exposes Privacy choices at all times.
- Contact and booking notices state what happens to submitted details.
- New public checkout, founding-cohort, and lead-magnet endpoints return `410 Gone`.
- Server-side Meta purchase attribution was removed from the historical Stripe webhook.
- Privacy, website terms, and accessibility pages were rewritten without certification claims.
- Fabricated or irrelevant public testimonials, scarcity, pricing tiers, and author profiles are no longer on canonical routes.

## Open: owner action required

1. Confirm the legal entity name, registered address, and governing-law/counsel position for paid agreements.
2. Set and implement CRM, scheduling, voice-demo, log, and backup retention periods.
3. Confirm vendor agreements and data-processing terms for Cal.com, CRM/telephony, hosting, Google, Meta, and LinkedIn.
4. Commission a separate security review of admin, affiliate, embed, audit, and messaging APIs before representing enterprise readiness.

## Needs a lawyer

- Contracting entity, governing law, dispute terms, and paid-engagement templates.
- The privacy notice and data-transfer terms for actual customer jurisdictions and deployment model.
- Call recording, automated voice, and SMS consent rules for every state/country where the live agent will operate.
- Any use of AI output in investment, housing, screening, or other regulated decisions.

## Re-verify before relying

The legal reference snapshot is dated 11 August 2026. Re-verify current privacy, tracking, communications, AI-disclosure, accessibility, and state-law requirements with qualified counsel before launch.
