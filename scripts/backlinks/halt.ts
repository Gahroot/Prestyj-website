/**
 * Self-made backlink HALT guard.
 *
 * Policy (2026-06-04, revised): we have stopped MANUFACTURING our own backlinks.
 * More self-owned gist / GitHub Pages / npm / GitHub mirror copies of the
 * /stat/* dataset add crawl footprint, not authority, and concentrate
 * SpamBrain link-scheme risk. Those self-owned mirrors stay halted.
 *
 * What is NOT halted: pitching the dataset to REAL third parties — journalists,
 * researchers, and reputable, independently-operated dataset directories
 * (Zenodo, Figshare, Harvard Dataverse, Hugging Face, Kaggle, data.world,
 * OpenML, …). Those are editorial/earned channels: the third party chooses to
 * host, curate, and (for Zenodo/Figshare/Dataverse) mint a DOI that points back
 * to the canonical permalink. That is the opposite of a self-made mirror.
 *
 * Any script whose job is to CREATE, submit, or expand a SELF-OWNED placement
 * must call `assertSelfMadeBacklinksHalted()` at the top of its main(). The guard
 * refuses to run unless the operator explicitly overrides with a clear,
 * one-off escape hatch:
 *
 *   ALLOW_SELF_MADE_BACKLINKS=1 npm run <script>
 *
 * Measurement scripts (snapshot, track-referring-domains, verify*) and
 * third-party pitch scripts (dataset:pitch) are NOT gated — observing reality
 * and pitching real third parties is always allowed.
 */

const OVERRIDE_ENV = "ALLOW_SELF_MADE_BACKLINKS";

/**
 * Buckets where WE host or create the placement ourselves (self-made footprint).
 * Outreach/creation for these is halted. Editorial + earned buckets remain
 * allowed: press, podcast, haro, resource-page, researcher, and
 * `dataset-directory` (reputable, independently-operated dataset repositories
 * we submit to but do not own — they curate and host the copy themselves).
 */
export const SELF_MADE_BUCKETS: ReadonlySet<string> = new Set([
  "awesome-list",
  "directory",
  "self-owned-mirror",
  "wikipedia",
  "embed",
  "github-gist",
  "github-release-open-data",
  "github-release-package",
  "npm-package",
]);

/**
 * Reputable third-party dataset directories. Submitting the dataset here is an
 * EARNED channel, not a self-made mirror: the directory independently hosts,
 * curates, and (Zenodo/Figshare/Dataverse) mints a DOI. The canonical home
 * stays https://prestyj.com/data — the directory copy points back to it.
 */
export const THIRD_PARTY_DATASET_DIRECTORIES: ReadonlySet<string> = new Set([
  "dataset-directory",
  "redistribution",
]);

export function isSelfMadeBucket(bucket: string | undefined): boolean {
  return bucket !== undefined && SELF_MADE_BUCKETS.has(bucket);
}

export function isThirdPartyDatasetDirectory(bucket: string | undefined): boolean {
  return bucket !== undefined && THIRD_PARTY_DATASET_DIRECTORIES.has(bucket);
}

export function selfMadeBacklinksAllowed(): boolean {
  const v = process.env[OVERRIDE_ENV];
  return v === "1" || v === "true";
}

/**
 * Halt a self-made-backlink-creation script unless explicitly overridden.
 * Exits the process with code 0 (a deliberate no-op, not an error) so CI / npm
 * scripts treat the halt as success rather than a failure.
 */
export function assertSelfMadeBacklinksHalted(scriptLabel: string): void {
  if (selfMadeBacklinksAllowed()) {
    console.warn(
      `⚠️  ${OVERRIDE_ENV} override is set — running self-made backlink script "${scriptLabel}".`,
    );
    console.warn(
      "    This contradicts the current link policy. Prefer earning independent referring domains.",
    );
    return;
  }

  console.log(`\n${"━".repeat(64)}`);
  console.log(`🛑 HALTED: ${scriptLabel}`);
  console.log("━".repeat(64));
  console.log("Creation of new self-made backlinks is halted by policy.");
  console.log("");
  console.log("Self-owned gist / Pages / npm / directory / redistribution mirrors");
  console.log("add footprint and SpamBrain link-scheme risk, not authority.");
  console.log("");
  console.log("Target instead: 5–15 REAL, independent referring domains per month.");
  console.log("Track them with:  npm run backlinks:track");
  console.log("");
  console.log(`Override for a deliberate one-off:  ${OVERRIDE_ENV}=1 <command>`);
  console.log("━".repeat(64));
  process.exit(0);
}
