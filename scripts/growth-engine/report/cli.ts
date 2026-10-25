/** CLI: `npm run growth:report [-- --dry-run] [-- --promote-cta]`. */
import { promoteCtaWinners, sendWeeklyReport } from "./index";

async function main(): Promise<void> {
  const dryRun = process.argv.includes("--dry-run");
  const root = process.cwd();
  if (process.argv.includes("--promote-cta")) {
    console.log(JSON.stringify(await promoteCtaWinners({ root, dryRun })));
    return;
  }
  const res = await sendWeeklyReport({ root, dryRun });
  console.log(JSON.stringify({ markdownPath: res.markdownPath, emailed: res.emailed, dryRun }));
}

main().catch((e: unknown) => {
  console.error(`growth:report failed: ${e instanceof Error ? e.message : "unknown"}`);
  process.exit(1);
});
