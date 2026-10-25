/** CLI: `npm run growth:measure [-- --dry-run]` — prints aggregates only. */
import { collectPerformance } from "./index";

async function main(): Promise<void> {
  const dryRun = process.argv.includes("--dry-run");
  const s = await collectPerformance({ root: process.cwd(), dryRun });
  const sum = (k: "gscClicks" | "gscImpressions") => s.pages.reduce((n, p) => n + p[k], 0);
  console.log(
    JSON.stringify(
      {
        window: s.window,
        sources: s.sources,
        totals: s.totals,
        livePages: s.pages.length,
        livePagesWithImpressions: s.pages.filter((p) => p.gscImpressions > 0).length,
        gscClicksLive: sum("gscClicks"),
        gscImpressionsLive: sum("gscImpressions"),
        queriesBySource: s.queries.reduce<Record<string, number>>(
          (a, q) => ({ ...a, [q.source]: (a[q.source] ?? 0) + 1 }),
          {},
        ),
        dryRun,
      },
      null,
      2,
    ),
  );
}

main().catch((e: unknown) => {
  console.error(`growth:measure failed: ${e instanceof Error ? e.message : "unknown"}`);
  process.exit(1);
});
