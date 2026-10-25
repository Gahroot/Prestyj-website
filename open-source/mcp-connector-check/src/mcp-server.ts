import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { checkConnector } from "./checks.js";
import { formatReport } from "./report.js";
import { VERSION } from "./version.js";

export function createCheckerServer(): McpServer {
  const server = new McpServer(
    { name: "mcp-connector-check", version: VERSION },
    {
      instructions:
        "Use check_connector to audit a remote MCP server URL (a custom Claude connector or ChatGPT app endpoint) for production readiness and security. It only reads metadata, initializes a session and lists tools; it never calls the target's tools.",
    },
  );
  server.registerTool(
    "check_connector",
    {
      title: "Check MCP connector",
      description:
        "Inspect a remote MCP server for production readiness and security: HTTPS, transport, OAuth discovery (RFC 9728 / RFC 8414), server instructions, tool descriptions, input schemas, annotations and tools/list size. Read-only: never calls the target's tools. Returns a pass/warn/fail report with a score.",
      inputSchema: {
        url: z.string().url().describe("Full URL of the MCP endpoint, e.g. https://example.com/mcp"),
        token: z.string().optional().describe("Optional bearer token, to inspect a server that requires auth"),
      },
      annotations: { readOnlyHint: true, destructiveHint: false, idempotentHint: true, openWorldHint: true },
    },
    async ({ url, token }) => {
      const report = await checkConnector(url, token ? { token } : {});
      return {
        content: [
          { type: "text", text: formatReport(report) },
          { type: "text", text: JSON.stringify(report, null, 2) },
        ],
        isError: false,
      };
    },
  );
  return server;
}

export async function runStdioServer(): Promise<void> {
  await createCheckerServer().connect(new StdioServerTransport());
}
