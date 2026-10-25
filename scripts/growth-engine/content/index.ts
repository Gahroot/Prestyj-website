import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { raiseException } from "../shared/alert";
import {
  CONTENT_LOG_FILE,
  OPPORTUNITIES_FILE,
  type ContentLogEntry,
  type Opportunity,
} from "../shared/contracts";
import { loadContentConfig, type ContentConfig } from "./config";
import { defaultFetcher, factCheck, type Fetcher } from "./factcheck";
import {
  commandRepoGates,
  originalityGate,
  runContentGates,
  type GateResult,
  type RepoGates,
} from "./gates";
import {
  BudgetExceededError,
  LlmAuthError,
  MeteredLlm,
  createAnthropicLlm,
  type ContentLlm,
} from "./llm";
import { findOverlap, readArticleFingerprints } from "./dedupe";
import { FileTransaction, registerArticle, syncLedgerRevision, writeArticle } from "./register";
import { mergeOpportunities, researchDue, researchTopics, seedFromPrompts } from "./research-queue";
import {
  CAPABILITY_SLUGS,
  TOPIC_VALUES,
  allowedInternalPaths,
  articleFile,
  ledgerSlugs,
  readArticle,
  readRegistry,
} from "./site";
import {
  appendContentLog,
  capUsage,
  readContentLog,
  readOpportunities,
  writeOpportunities,
} from "./store";
import { renderMdx, writeNewArticle, writeRefresh, type Draft } from "./write";

export type { ContentLogEntry } from "../shared/contracts";

export type ContentCycleResult = {
  changedFiles: string[];
  publishedPaths: string[];
  refreshedPaths: string[];
  log: ContentLogEntry[];
};

export type ContentCycleDeps = {
  llm?: ContentLlm;
  fetcher?: Fetcher;
  repoGates?: RepoGates;
  config?: ContentConfig;
  raise?: typeof raiseException;
  /** Streams progress lines (gate results etc.). */
  onProgress?: (line: string) => void;
};

type ItemOutcome = {
  entry: ContentLogEntry;
  files: string[];
  status: Opportunity["status"];
  gates: GateResult[];
};

const EMPTY: ContentCycleResult = {
  changedFiles: [],
  publishedPaths: [],
  refreshedPaths: [],
  log: [],
};

export async function runContentCycle(
  opts: { root: string; dryRun: boolean; now?: Date },
  deps: ContentCycleDeps = {},
): Promise<ContentCycleResult> {
  const root = path.resolve(opts.root);
  const now = opts.now ?? new Date();
  const raise = dryRunAware(deps.raise ?? raiseException, opts.dryRun);
  const progress = deps.onProgress ?? (() => undefined);
  const critical = (component: string, message: string) =>
    raise({ severity: "critical", component, message }, root);

  let config: ContentConfig;
  try {
    config = deps.config ?? loadContentConfig();
  } catch (error) {
    await critical("content.config", `config.yml invalid: ${errorText(error)}`);
    return EMPTY;
  }
  const apiKey = process.env.ANTHROPIC_API_KEY?.trim();
  const inner = deps.llm ?? (apiKey ? createAnthropicLlm(apiKey, config) : null);
  if (!inner) {
    await critical("content.llm", "ANTHROPIC_API_KEY is not set; content cycle skipped.");
    return EMPTY;
  }
  const llm = new MeteredLlm(inner, config);
  const log: ContentLogEntry[] = [];
  const at = now.toISOString();
  const skip = (title: string, reasons: string[], opportunityId: string | null = null): void => {
    log.push({
      at,
      action: "skip",
      slug: "-",
      path: null,
      title,
      opportunityId,
      reasons,
      sourcesChecked: 0,
      costUsd: 0,
    });
  };

  // 1. RESEARCH
  let opportunities = mergeOpportunities(
    readOpportunities(root),
    seedFromPrompts(root, config, now),
  );
  if (researchDue(opportunities, config, now)) {
    try {
      const research = await researchTopics(root, llm, config, now);
      opportunities = mergeOpportunities(opportunities, research.items);
      progress(`research: ${research.items.length} items ($${research.costUsd.toFixed(3)})`);
    } catch (error) {
      if (error instanceof LlmAuthError) {
        await critical("content.llm", error.message);
        return EMPTY;
      }
      if (error instanceof BudgetExceededError) skip("research", [error.message]);
      else {
        await raise(
          { severity: "warning", component: "content.research", message: errorText(error) },
          root,
        );
        skip("research", [`research failed: ${errorText(error)}`]);
      }
    }
  }

  // 2. PICK
  const usage = capUsage(readContentLog(root), now);
  const registry = readRegistry(root);
  const registered = new Set(registry.map((entry) => entry.slug));
  const open = opportunities
    .filter((item) => item.status === "open")
    .sort((a, b) => b.score - a.score || a.id.localeCompare(b.id));
  const picks: Opportunity[] = [];
  const newRoom = Math.min(config.caps.maxNewPerRun, config.caps.maxNewPerWeek - usage.newThisWeek);
  const refreshRoom = Math.min(
    config.caps.maxRefreshPerRun,
    config.caps.maxRefreshPerWeek - usage.refreshThisWeek,
  );
  const statuses = new Map<string, Opportunity["status"]>();
  if (newRoom > 0) {
    // Skip candidates that certainly duplicate a live or ledger-reserved article before
    // any money is spent writing them.
    const fingerprints = [
      ...readArticleFingerprints(root),
      ...ledgerSlugs(root).map((item) => ({
        slug: item.slug,
        title: item.topic,
        text: item.topic,
      })),
    ];
    for (const item of open.filter((candidate) => candidate.kind === "new-topic")) {
      if (picks.length >= newRoom) break;
      const overlap = findOverlap(item.queries[0] ?? "", fingerprints);
      if (!overlap) {
        picks.push(item);
        continue;
      }
      const reason = `duplicates /blog/${overlap.slug} (${overlap.reason}); candidate for a refresh of that article instead`;
      progress(`skip ${item.id}: ${reason}`);
      skip(item.queries[0] ?? item.id, [reason], item.id);
      statuses.set(item.id, "rejected");
    }
  } else
    skip("new article", [
      `cap reached: ${usage.newThisWeek}/${config.caps.maxNewPerWeek} new in 7 days`,
    ]);
  if (refreshRoom > 0)
    picks.push(
      ...open
        .filter(
          (item) =>
            item.kind.startsWith("refresh-") && registered.has(slugFromPath(item.path) ?? ""),
        )
        .slice(0, refreshRoom),
    );
  else
    skip("refresh", [
      `cap reached: ${usage.refreshThisWeek}/${config.caps.maxRefreshPerWeek} refreshes in 7 days`,
    ]);

  // 3–6. WRITE / FACT-CHECK / GATES / REGISTER, one item at a time with full rollback.
  const changed = new Set<string>();
  const publishedPaths: string[] = [];
  const refreshedPaths: string[] = [];
  for (const opportunity of picks) {
    const before = llm.spentUsd;
    let outcome: ItemOutcome;
    try {
      outcome = await processItem(opportunity, {
        root,
        now,
        config,
        llm,
        deps,
        dryRun: opts.dryRun,
      });
    } catch (error) {
      if (error instanceof LlmAuthError) {
        await critical("content.llm", error.message);
        break;
      }
      if (error instanceof BudgetExceededError) {
        skip(opportunity.queries[0] ?? opportunity.id, [error.message], opportunity.id);
        break;
      }
      await raise(
        { severity: "warning", component: "content.item", message: errorText(error) },
        root,
      );
      outcome = {
        entry: {
          at,
          action: "reject",
          slug: slugFromPath(opportunity.path) ?? "-",
          path: opportunity.path,
          title: opportunity.queries[0] ?? opportunity.id,
          opportunityId: opportunity.id,
          reasons: [`item failed: ${errorText(error)}`],
          sourcesChecked: 0,
          costUsd: 0,
        },
        files: [],
        status: "rejected",
        gates: [],
      };
    }
    outcome.entry.costUsd = round(llm.spentUsd - before);
    for (const gate of outcome.gates)
      progress(
        `gate ${gate.name}: ${gate.passed ? "PASS" : "FAIL"}${gate.details.length ? ` — ${gate.details.join("; ")}` : ""}`,
      );
    progress(
      `${outcome.entry.action} ${outcome.entry.slug} ($${outcome.entry.costUsd.toFixed(3)})`,
    );
    log.push(outcome.entry);
    statuses.set(opportunity.id, outcome.status);
    if (!opts.dryRun) {
      outcome.files.forEach((file) => changed.add(path.relative(root, file)));
      if (outcome.entry.action === "publish" && outcome.entry.path)
        publishedPaths.push(outcome.entry.path);
      if (outcome.entry.action === "refresh" && outcome.entry.path)
        refreshedPaths.push(outcome.entry.path);
    }
  }

  // 7. LOG + opportunity statuses
  if (opts.dryRun) {
    log.forEach((entry) => (entry.reasons = ["[dry-run, nothing kept]", ...entry.reasons]));
    return { changedFiles: [], publishedPaths: [], refreshedPaths: [], log };
  }
  writeOpportunities(
    root,
    opportunities.map((item) => ({ ...item, status: statuses.get(item.id) ?? item.status })),
  );
  appendContentLog(root, log);
  changed.add(OPPORTUNITIES_FILE);
  changed.add(CONTENT_LOG_FILE);
  return { changedFiles: [...changed].sort(), publishedPaths, refreshedPaths, log };
}

async function processItem(
  opportunity: Opportunity,
  ctx: {
    root: string;
    now: Date;
    config: ContentConfig;
    llm: MeteredLlm;
    deps: ContentCycleDeps;
    dryRun: boolean;
  },
): Promise<ItemOutcome> {
  const { root, config, llm, deps } = ctx;
  const today = ctx.now.toISOString().slice(0, 10);
  const registry = readRegistry(root);
  const allowed = allowedInternalPaths(root);
  const writeCtx = { llm, config, registry, allowed: [...allowed].sort() };
  const isNew = opportunity.kind === "new-topic";
  const refreshSlug = slugFromPath(opportunity.path);
  const previous = !isNew && refreshSlug ? readArticle(root, refreshSlug) : null;
  if (!isNew && (!refreshSlug || !previous))
    throw new Error(`refresh target missing: ${opportunity.path}`);

  const draft: Draft = isNew
    ? await writeNewArticle(opportunity, writeCtx)
    : await writeRefresh(
        opportunity,
        refreshSlug ?? "",
        previous ?? { metadata: {}, body: "" },
        writeCtx,
      );
  const { meta } = draft;
  // Optional local debugging aid; point it outside the repo (e.g. /tmp/prestyj-content).
  const debugDir = process.env.CONTENT_DEBUG_DIR;
  if (debugDir) {
    mkdirSync(debugDir, { recursive: true });
    writeFileSync(
      path.join(debugDir, `${meta.slug}.draft.md`),
      `${JSON.stringify(meta, null, 2)}\n\n${draft.body}`,
    );
  }
  const publicPath = `/blog/${meta.slug}`;
  const reject = (reasons: string[], gates: GateResult[], sourcesChecked = 0): ItemOutcome => ({
    entry: {
      at: ctx.now.toISOString(),
      action: "reject",
      slug: meta.slug,
      path: isNew ? null : publicPath,
      title: meta.title,
      opportunityId: opportunity.id,
      reasons,
      sourcesChecked,
      costUsd: 0,
    },
    files: [],
    status: "rejected",
    gates,
  });

  const metaErrors: string[] = [];
  for (const capability of meta.capabilities)
    if (!CAPABILITY_SLUGS.includes(capability))
      metaErrors.push(`invalid capability: ${capability}`);
  for (const topic of meta.topics)
    if (!(TOPIC_VALUES as readonly string[]).includes(topic))
      metaErrors.push(`invalid topic: ${topic}`);
  if (isNew) {
    if (registry.some((entry) => entry.slug === meta.slug))
      metaErrors.push(`slug already live: ${meta.slug}`);
    if (ledgerSlugs(root).some((item) => item.slug === meta.slug))
      metaErrors.push(`slug reserved by review ledger: ${meta.slug}`);
    if (readArticle(root, meta.slug))
      metaErrors.push(`content/blog/${meta.slug}.mdx already exists (legacy)`);
  }
  const metaGate: GateResult = {
    name: "metadata",
    passed: metaErrors.length === 0,
    details: metaErrors,
  };
  if (!metaGate.passed) return reject(metaErrors, [metaGate]);

  // 4. FACT-CHECK (separate model + prompt, against fetched sources)
  const fc = await factCheck(draft.body, {
    llm,
    config,
    fetcher: deps.fetcher ?? defaultFetcher,
    topic: opportunity.queries[0] ?? meta.title,
  });
  const fcGate: GateResult = {
    name: "fact-check",
    passed: fc.passed,
    details: [
      `${fc.claims} claims, ${fc.failed} unsupported, ${fc.sourcesChecked} sources fetched`,
      ...fc.reasons,
    ],
  };
  if (!fc.passed) return reject(fcGate.details, [metaGate, fcGate], fc.sourcesChecked);

  // 5a. Content gates (no files written yet)
  const contentGates = runContentGates(
    {
      root,
      slug: meta.slug,
      title: meta.title,
      description: meta.description,
      body: fc.body,
      mode: isNew ? "new" : "refresh",
      allowed,
      previous: previous
        ? { body: previous.body, title: String(previous.metadata.title ?? "") }
        : undefined,
    },
    config,
  );
  contentGates.push(originalityGate(fc.body, fc.sourceTexts ?? [], config.gates.maxCopiedWords));
  const gates = [metaGate, fcGate, ...contentGates];
  if (contentGates.some((gate) => !gate.passed))
    return reject(failures(contentGates), gates, fc.sourcesChecked);

  // 6. Write + register, then repository gates; any failure rolls the item back completely.
  const tx = new FileTransaction();
  try {
    if (isNew) {
      writeArticle(
        root,
        meta.slug,
        renderMdx(
          {
            title: meta.title,
            description: meta.description,
            date: today,
            author: config.author,
            keywords: meta.keywords,
          },
          fc.body,
        ),
        tx,
      );
      registerArticle(root, meta, tx);
    } else {
      const metadata = previous?.metadata ?? {};
      const keywords = [
        ...new Set([
          ...(Array.isArray(metadata.keywords) ? metadata.keywords.map(String) : []),
          ...meta.keywords,
        ]),
      ].slice(0, 8);
      const date = String(metadata.date ?? today);
      writeArticle(
        root,
        meta.slug,
        renderMdx(
          {
            ...metadata,
            title: meta.title,
            description: meta.description,
            date,
            updated: today >= date ? today : date,
            keywords,
          },
          fc.body,
        ),
        tx,
      );
      syncLedgerRevision(root, meta.slug, today, tx);
    }
    const repoGates = deps.repoGates ?? commandRepoGates;
    const changedFiles = tx.files();
    const repoResults = [
      await repoGates.typecheck(root, changedFiles),
      await repoGates.institutionalCheck(root),
      await repoGates.registryTests(root),
    ];
    gates.push(...repoResults);
    if (repoResults.some((gate) => !gate.passed)) {
      tx.rollback();
      return reject(failures(repoResults), gates, fc.sourcesChecked);
    }
    if (ctx.dryRun) tx.rollback();
    return {
      entry: {
        at: ctx.now.toISOString(),
        action: isNew ? "publish" : "refresh",
        slug: meta.slug,
        path: publicPath,
        title: meta.title,
        opportunityId: opportunity.id,
        reasons: [
          meta.changeSummary || (isNew ? "new article" : `${opportunity.kind} refresh`),
          `fact-check: ${fc.claims} claims, ${fc.failed} fixed/removed`,
          `files: ${changedFiles.map((file) => path.relative(root, file)).join(", ")}`,
        ],
        sourcesChecked: fc.sourcesChecked,
        costUsd: 0,
      },
      files: ctx.dryRun ? [] : changedFiles,
      status: "done",
      gates,
    };
  } catch (error) {
    tx.rollback();
    throw error;
  }
}

/** In a dry run, exceptions are only printed; nothing is written to data/growth or emailed. */
function dryRunAware(raise: typeof raiseException, dryRun: boolean): typeof raiseException {
  if (!dryRun) return raise;
  return async (input) => {
    const raisedAt = new Date().toISOString();
    console[input.severity === "info" ? "log" : "warn"](
      `[dry-run exception:${input.severity}] ${input.component}: ${input.message}`,
    );
    return { ...input, id: `dry-run-${input.component}`, raisedAt, resolvedAt: null };
  };
}

export function slugFromPath(value: string | null): string | null {
  const match = /^\/blog\/([a-z0-9-]+)\/?$/.exec(value ?? "");
  return match?.[1] ?? null;
}

const failures = (gates: GateResult[]): string[] =>
  gates
    .filter((gate) => !gate.passed)
    .flatMap((gate) =>
      (gate.details.length ? gate.details : ["failed"]).map((d) => `${gate.name}: ${d}`),
    );
const errorText = (error: unknown): string =>
  error instanceof Error ? error.message : String(error);
const round = (value: number): number => Math.round(value * 10_000) / 10_000;

export { articleFile };
