#!/usr/bin/env tsx
/** Analyze preserved Bing-format exports. No network calls or inferred daily totals. */
import {
  constants,
  copyFileSync,
  existsSync,
  lstatSync,
  mkdirSync,
  readFileSync,
  renameSync,
  writeFileSync,
} from "node:fs";
import { createHash, randomUUID } from "node:crypto";
import path from "node:path";
import { format } from "prettier";
import { loadCitationSnapshots, renderCitationReport } from "./seo/ai-citation-report";
import { calendarDateSchema } from "./seo/institutional-ledger";
import { readBoundedText } from "./seo/check-institutional-content";

async function main(): Promise<void> {
  try {
    const asOf = calendarDateSchema.parse(process.argv[2] ?? new Date().toISOString().slice(0, 10));
    const root = path.join(process.cwd(), "data/ai-citations");
    const snapshots = loadCitationSnapshots(root); // Validate all inputs before any write.
    const report = await format(renderCitationReport(snapshots, asOf), {
      parser: "markdown",
      printWidth: 100,
    });
    const output = path.join(root, "latest-analysis.md");
    if (existsSync(output)) {
      const previous = readBoundedText(output);
      if (previous === report) {
        console.log("Citation report unchanged; no files written.");
        return;
      }
      const digest = createHash("sha256").update(previous).digest("hex");
      const directory = path.join(root, "archive");
      mkdirSync(directory, { recursive: true });
      if (lstatSync(directory).isSymbolicLink())
        throw new Error("Archive directory cannot be a symlink");
      const archive = path.join(directory, `derived-report-${digest}.md`);
      if (!existsSync(archive)) copyFileSync(output, archive, constants.COPYFILE_EXCL);
      if (readFileSync(archive, "utf8") !== previous)
        throw new Error("Archive verification failed; original report unchanged");
    }
    const temporary = path.join(root, `.analysis-${randomUUID()}.tmp`);
    writeFileSync(temporary, report, { flag: "wx" });
    renameSync(temporary, output);
    console.log(
      JSON.stringify({
        action: "citation-analysis",
        outcome: "written",
        snapshots: snapshots.length,
        asOf,
        source: "Bing-format; provenance varies by metadata",
        output: "data/ai-citations/latest-analysis.md",
      }),
    );
  } catch (error) {
    console.error(error instanceof Error ? error.message : "Citation analysis failed");
    process.exitCode = 1;
  }
}
void main();
