import { existsSync, readdirSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import {
  contentLedgerSchema,
  calendarDateSchema,
  type ContentLedger,
} from "./institutional-ledger";
import { readBoundedText } from "./check-institutional-content";

export function weeklyContentStatus(
  ledger: ContentLedger,
  asOf: string,
): { overdue: string[]; upcoming: string[]; pendingReview: number } {
  calendarDateSchema.parse(asOf);
  const incomplete = ledger.items.filter(
    (item) => !["live-verified", "measured"].includes(item.state),
  );
  return {
    overdue: incomplete
      .filter((item) => item.targetDate < asOf)
      .map((item) => `${item.id}: ${item.targetDate} (${item.state})`),
    upcoming: incomplete
      .filter((item) => item.targetDate >= asOf)
      .sort((a, b) => a.targetDate.localeCompare(b.targetDate) || a.id.localeCompare(b.id))
      .slice(0, 2)
      .map((item) => `${item.targetDate}: ${item.id} ${item.topic} (${item.state})`),
    pendingReview: ledger.items.filter((item) => ["draft", "awaiting-review"].includes(item.state))
      .length,
  };
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  try {
    const asOf = calendarDateSchema.parse(process.argv[2] ?? new Date().toISOString().slice(0, 10));
    const ledger = contentLedgerSchema.parse(
      JSON.parse(readBoundedText("data/seo/institutional-content-backlog.json")),
    );
    const folders = readdirSync("data/ai-citations")
      .filter((name) => calendarDateSchema.safeParse(name).success)
      .sort();
    const last = folders.at(-1);
    const age = last ? Math.floor((Date.parse(asOf) - Date.parse(last)) / 86_400_000) : null;
    console.log(
      JSON.stringify(
        {
          mode: "read-only; targets unchanged; no generation or publication",
          asOf,
          ...weeklyContentStatus(ledger, asOf),
          citationFolder: last ?? null,
          folderAgeDays: age,
          citationWarning:
            "Folder age is not a reporting window. Historical window metadata is unknown; authenticated fresh exports required.",
          staleFolder: age === null || age > 35,
          institutionalBaselineFilePresent: existsSync("data/seo/institutional-baseline.json"),
          observationGate:
            "File presence does not mean a measured baseline; inspect null metrics and source dates.",
        },
        null,
        2,
      ),
    );
  } catch (error) {
    console.error(error instanceof Error ? error.message : "Status validation failed");
    process.exitCode = 1;
  }
}
