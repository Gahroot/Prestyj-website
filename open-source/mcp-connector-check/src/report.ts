import type { CheckStatus, Report } from "./types.js";

const ICON: Record<CheckStatus, string> = { pass: "PASS", warn: "WARN", fail: "FAIL", skip: "SKIP" };

export function formatReport(report: Report, opts: { color?: boolean } = {}): string {
  const paint = (status: CheckStatus, s: string) => {
    if (!opts.color) return s;
    const code = { pass: 32, warn: 33, fail: 31, skip: 90 }[status];
    return `\u001b[${code}m${s}\u001b[0m`;
  };
  const lines = [`MCP connector check: ${report.url}`, ""];
  for (const c of report.checks) {
    lines.push(`${paint(c.status, `[${ICON[c.status]}]`)} ${c.title}: ${c.message}`);
    for (const d of c.details ?? []) lines.push(`       - ${d}`);
  }
  const s = report.summary;
  lines.push(
    "",
    `Score: ${report.score}/100  (${s.pass} pass, ${s.warn} warn, ${s.fail} fail, ${s.skip} skipped)`,
    "",
    "Checklist: https://prestyj.com/connectors/mcp-server-security-checklist",
  );
  return lines.join("\n");
}
