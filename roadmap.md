# Institutional roadmap

This roadmap is the durable reference for Prestyj's positioning, proof standards, cleanup decisions, and release gates. It reflects the repository on August 27, 2026.

## Positioning

Prestyj builds and operates AI agents for real estate investment funds from roughly $500M AUM, commercial brokerages, and CRE owner-operators.

The offer is reviewed work product across deal, fund, investor, portfolio, origination, and listing-media workflows. Work starts from systems the firm already runs and returns sources, review gates, and visible exception queues. The system of record remains authoritative.

Prestyj is not residential realtor software, home-services automation, generic AI consulting, low-ticket SaaS, or a batch-video subscription.

## Vocabulary

Use:

- AI agents for institutional real estate
- Reviewed or finished work product
- Source attached
- Controlled by your review rules
- System of record
- Review gate
- Exception queue
- Deal, fund, investor, portfolio, origination, and listing-media work

Avoid:

- Realtor software
- Service-business automation
- Custom AI or generic AI consulting
- Internal tools or coding agents
- Commodity monthly plans
- Batch-video subscription

## Current state

- The public site presents institutional real-estate positioning and access-request flows.
- Canonical language lives in `src/lib/positioning.ts`, `src/lib/institutional/`, `CLAUDE.md`, and `DESIGN.md`.
- Historical SMB, realtor, location, free-ad, lead-magnet, comparison, and blog sources remain for reversibility.
- Legacy sources must remain redirected, absent from navigation and sitemap, and unavailable as current proof.
- Existing systems, source attribution, human review, and exception handling remain explicit trust boundaries.
- Fixture and reference work must be labeled as such; neither is production evidence.

## Next 30 days

1. Strengthen institutional proof for one defined workflow with inputs, outputs, sources, reviewer decisions, and exceptions visible.
2. Audit every public proof claim and label it as fixture, reference, pilot, anonymized result, or production result.
3. Define one measurable workflow baseline: cycle time, review load, exception rate, accuracy, and completed output volume.
4. Map the minimum source-system integration needed for that workflow without replacing its system of record.
5. Complete legal, privacy, and security gap inventories before expanding access.

## Next 60 days

1. Run a controlled pilot with named owners, permission boundaries, review gates, rollback criteria, and an exception queue.
2. Measure workflow outcomes against the recorded baseline and retain evidence for every published result.
3. Document integration behavior for retries, stale data, unavailable sources, conflicting records, and failed writes.
4. Produce an institutional case narrative that separates observed results from modeled or illustrative outcomes.
5. Resolve release-blocking legal and security gaps for the pilot's actual data and systems.

## Next 90 days

1. Convert a proven pilot into a repeatable operating playbook with explicit controls and support ownership.
2. Add a second workflow only when the first meets its evidence, reliability, and review-load gates.
3. Publish measured outcomes only after customer authorization and claim-level evidence review.
4. Establish controlled integration patterns for permissions, auditability, reconciliation, and incident response.
5. Reassess deferred legacy surfaces using dependency evidence rather than visual or naming similarity.

## Proof requirements

Every public example or result must identify its stage:

- **Fixture:** synthetic data used to demonstrate behavior.
- **Reference:** representative work with no production claim.
- **Pilot:** observed in a bounded evaluation; scope and dates stated.
- **Production:** observed in live operations; customer authorization and measurement method recorded.

Claims must link to retained evidence, name the measurement window, separate observed from modeled numbers, and state material limitations. A screenshot, fixture, or arithmetic scenario cannot be presented as a customer result.

## Trust boundaries

- The customer's system of record stays authoritative.
- Agents receive only the permissions required for the defined workflow.
- Material actions stop at configured review gates.
- Sources accompany material answers and completed work.
- Missing, stale, or conflicting evidence enters a visible exception queue.
- Failed writes are reported and reconciled; they are not silently treated as complete.
- Human reviewers retain approval and escalation ownership.

## Deferred cleanup inventory

These categories require human approval and dependency evidence before deletion.

| Category                                                                                         | Why it appears stale                                                                  | What may still depend on it                                                                                     | Evidence required before deletion                                                                                                     |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Legacy MDX articles                                                                              | Many describe retired SMB, realtor, lead-response, or batch-video offers.             | Search traffic, external links, citations, redirects, and internal links.                                       | URL inventory, traffic and backlink export, redirect map, inbound-reference search, and approved retention policy.                    |
| Non-canonical route trees and supporting components/data                                         | Their names and copy align with retired offers rather than institutional positioning. | Redirect behavior, sitemap exclusions, shared components, metadata, tests, and campaign links.                  | Route-level dependency graph, production request data, redirect tests, sitemap check, and replacement decision.                       |
| Legacy APIs, Stripe, affiliate, admin, Prisma, unsubscribe, report-download, and tombstone paths | They support offers or operations outside the current core lane.                      | Persisted records, billing, customer links, compliance duties, integrations, and historical workflows.          | Data-owner confirmation, caller inventory, retention requirements, production logs, migration or export plan, and rollback procedure. |
| Public images, datasets, verification files, raw media, screenshots, and CSV exports             | Much of the material supports retired campaigns or publishing surfaces.               | Search verification, social previews, live URLs, external citations, customer deliverables, and source records. | Public-reference crawl, manifest and code search, ownership check, retention classification, and archived copy where required.        |
| SEO automation and script-only dependencies                                                      | Current positioning no longer uses much of the retired programmatic-content pipeline. | Scheduled jobs, IndexNow, citation analysis, reporting, and package scripts.                                    | Job inventory, invocation logs, package-script references, owner confirmation, and successful removal rehearsal.                      |
| Existing uncommitted tracked changes in legacy content, data, docs, or report JSON               | Their purpose and owner cannot be inferred safely from file age or positioning.       | Work in progress, pending reviews, generated state, and unpublished corrections.                                | Human owner decision, diff review, and either commit, archive, or explicit discard instruction.                                       |

## Release gates

A workflow or proof surface does not ship until all applicable gates pass:

- **Positioning:** It serves the institutional audience and stays inside the defined workflow.
- **Evidence:** Every claim has a stage label, source, measurement window, and review owner.
- **Controls:** Permissions, review gates, exception handling, and rollback behavior are documented and tested.
- **Integration:** The system of record remains authoritative; retry and reconciliation behavior is verified.
- **Legal:** Contract, privacy, data-use, marketing, and sector-specific obligations are reviewed for the actual deployment.
- **Security:** Access control, secret handling, logging, incident response, and vendor boundaries are reviewed.
- **Quality:** Tests, type checks, lint, formatting, build, and dependency audit complete without unexplained regressions.
- **Operations:** Ownership, monitoring, escalation, support, and measurable workflow outcomes are defined.

Future work prioritizes stronger institutional proof, controlled integrations, legal and security readiness, and measurable workflow outcomes.
