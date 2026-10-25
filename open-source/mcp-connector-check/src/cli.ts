#!/usr/bin/env node
import { parseArgs } from "node:util";
import { checkConnector } from "./checks.js";
import { runStdioServer } from "./mcp-server.js";
import { formatReport } from "./report.js";
import { VERSION } from "./version.js";

const HELP = `mcp-connector-check ${VERSION}

Check a remote MCP server (custom Claude connector or ChatGPT app) for
production readiness and security. Read-only: never calls the server's tools.

Usage:
  mcp-connector-check <url> [--token <bearer>] [--json] [--timeout <ms>]
  mcp-connector-check --mcp          Run as an MCP server over stdio

Options:
  --token <bearer>   Bearer token for servers that require auth
                     (or set MCP_CONNECTOR_CHECK_TOKEN)
  --json             Print the report as JSON
  --timeout <ms>     Per-request timeout (default 15000)
  --mcp              Start the stdio MCP server exposing check_connector
  -v, --version      Print version
  -h, --help         Show this help

Exit codes: 0 no failures, 1 at least one check failed, 2 usage error.
`;

async function main(): Promise<number> {
  let parsed;
  try {
    parsed = parseArgs({
      allowPositionals: true,
      options: {
        token: { type: "string" },
        json: { type: "boolean" },
        timeout: { type: "string" },
        mcp: { type: "boolean" },
        help: { type: "boolean", short: "h" },
        version: { type: "boolean", short: "v" },
      },
    });
  } catch (err) {
    process.stderr.write(`${err instanceof Error ? err.message : String(err)}\n\n${HELP}`);
    return 2;
  }
  const { values, positionals } = parsed;
  if (values.help) {
    process.stdout.write(HELP);
    return 0;
  }
  if (values.version) {
    process.stdout.write(`${VERSION}\n`);
    return 0;
  }
  if (values.mcp) {
    await runStdioServer();
    return -1;
  }
  const url = positionals[0];
  if (!url || positionals.length > 1) {
    process.stderr.write(HELP);
    return 2;
  }
  const timeoutMs = values.timeout ? Number(values.timeout) : undefined;
  if (timeoutMs !== undefined && (!Number.isFinite(timeoutMs) || timeoutMs <= 0)) {
    process.stderr.write("--timeout must be a positive number of milliseconds\n");
    return 2;
  }
  const token = values.token ?? process.env.MCP_CONNECTOR_CHECK_TOKEN;
  const report = await checkConnector(url, { ...(token ? { token } : {}), ...(timeoutMs ? { timeoutMs } : {}) });
  process.stdout.write(
    values.json ? `${JSON.stringify(report, null, 2)}\n` : `${formatReport(report, { color: process.stdout.isTTY === true })}\n`,
  );
  return report.summary.fail > 0 ? 1 : 0;
}

main().then(
  (code) => {
    if (code >= 0) process.exit(code);
  },
  (err: unknown) => {
    process.stderr.write(`mcp-connector-check: ${err instanceof Error ? err.message : String(err)}\n`);
    process.exit(2);
  },
);
