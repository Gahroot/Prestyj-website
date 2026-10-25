import { type IncomingMessage, type ServerResponse, createServer } from "node:http";
import type { AddressInfo } from "node:net";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import { z } from "zod";

export const GOOD_TOKEN = "good-token";

export type Fixture = { base: string; url: string; close: () => Promise<void> };

function goodMcp(): McpServer {
  const s = new McpServer(
    { name: "good-fixture", version: "1.0.0" },
    { instructions: "Use search_deals to find deals and create_note to add a note to a deal." },
  );
  s.registerTool(
    "search_deals",
    {
      description: "Search deals in the CRM by keyword and return matching deal summaries.",
      inputSchema: { query: z.string(), limit: z.number().int().optional() },
      annotations: { readOnlyHint: true },
    },
    async () => ({ content: [{ type: "text", text: "never called" }] }),
  );
  s.registerTool(
    "create_note",
    {
      description: "Create a note on a deal. Adds a new record; does not change existing data.",
      inputSchema: { dealId: z.string(), body: z.string() },
      annotations: { readOnlyHint: false, destructiveHint: false },
    },
    async () => ({ content: [{ type: "text", text: "never called" }] }),
  );
  return s;
}

function badMcp(): McpServer {
  const s = new McpServer({ name: "bad-fixture", version: "0.0.1" }, { instructions: "x".repeat(3000) });
  s.registerTool("delete_record", { inputSchema: { id: z.string() } }, async () => ({
    content: [{ type: "text", text: "never called" }],
  }));
  s.registerTool(
    "sendEmail",
    { description: "Send", inputSchema: { to: z.string() }, annotations: { readOnlyHint: true } },
    async () => ({ content: [{ type: "text", text: "never called" }] }),
  );
  return s;
}

async function readBody(req: IncomingMessage): Promise<unknown> {
  const chunks: Buffer[] = [];
  for await (const c of req) chunks.push(c as Buffer);
  const text = Buffer.concat(chunks).toString("utf8");
  return text ? JSON.parse(text) : undefined;
}

async function serveMcp(make: () => McpServer, req: IncomingMessage, res: ServerResponse) {
  const server = make();
  const transport = new StreamableHTTPServerTransport({ sessionIdGenerator: undefined, enableJsonResponse: true });
  res.on("close", () => {
    void transport.close();
    void server.close();
  });
  await server.connect(transport);
  await transport.handleRequest(req, res, req.method === "POST" ? await readBody(req) : undefined);
}

function json(res: ServerResponse, body: unknown) {
  res.writeHead(200, { "content-type": "application/json" }).end(JSON.stringify(body));
}

async function listen(handler: (base: string, req: IncomingMessage, res: ServerResponse) => Promise<void>): Promise<Fixture> {
  let base = "";
  const http = createServer((req, res) => {
    handler(base, req, res).catch((err: unknown) => {
      if (!res.headersSent) res.writeHead(500).end(String(err));
    });
  });
  await new Promise<void>((r) => http.listen(0, "127.0.0.1", r));
  base = `http://127.0.0.1:${(http.address() as AddressInfo).port}`;
  return {
    base,
    url: `${base}/mcp`,
    close: () => new Promise<void>((r) => { http.closeAllConnections(); http.close(() => r()); }),
  };
}

export function startGoodServer(): Promise<Fixture> {
  return listen(async (base, req, res) => {
    const path = new URL(req.url ?? "/", base).pathname;
    if (path === "/.well-known/oauth-protected-resource/mcp") {
      return json(res, { resource: `${base}/mcp`, authorization_servers: [base], scopes_supported: ["deals:read"] });
    }
    if (path === "/.well-known/oauth-authorization-server") {
      return json(res, {
        issuer: base,
        authorization_endpoint: `${base}/authorize`,
        token_endpoint: `${base}/token`,
        registration_endpoint: `${base}/register`,
        response_types_supported: ["code"],
        code_challenge_methods_supported: ["S256"],
      });
    }
    if (path === "/mcp") {
      if (req.headers.authorization !== `Bearer ${GOOD_TOKEN}`) {
        res.writeHead(401, {
          "www-authenticate": `Bearer resource_metadata="${base}/.well-known/oauth-protected-resource/mcp", scope="deals:read"`,
        }).end();
        return;
      }
      return serveMcp(goodMcp, req, res);
    }
    res.writeHead(404).end();
  });
}

export function startBadServer(): Promise<Fixture> {
  return listen(async (base, req, res) => {
    const path = new URL(req.url ?? "/", base).pathname;
    if (path === "/mcp") return serveMcp(badMcp, req, res);
    res.writeHead(404).end();
  });
}

/** Redirects forever, to prove the redirect budget holds. */
export function startRedirectLoop(): Promise<Fixture> {
  return listen(async (base, _req, res) => {
    res.writeHead(307, { location: `${base}/mcp` }).end();
  });
}
