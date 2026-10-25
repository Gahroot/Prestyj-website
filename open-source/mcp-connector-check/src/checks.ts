import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { SSEClientTransport } from "@modelcontextprotocol/sdk/client/sse.js";
import { StreamableHTTPClientTransport } from "@modelcontextprotocol/sdk/client/streamableHttp.js";
import type { Tool } from "@modelcontextprotocol/sdk/types.js";
import {
  DEFAULT_TIMEOUT_MS,
  type SafeFetch,
  createSafeFetch,
  errorMessage,
  fetchJson,
  parseBearerChallenge,
  wellKnownUrl,
} from "./http.js";
import type { CheckOptions, CheckResult, CheckStatus, Report } from "./types.js";

export const INSTRUCTIONS_LIMIT = 2048;
export const MAX_TOOLS = 40;
export const TOOLS_PAYLOAD_LIMIT = 100_000;
export const MIN_DESCRIPTION = 20;
export const MAX_DESCRIPTION = 1024;
const MAX_TOOL_PAGES = 20;
const PROTOCOL_VERSION = "2025-06-18";
const WRITE_WORDS = [
  "create", "update", "delete", "remove", "send", "write", "post", "put", "patch", "insert",
  "drop", "destroy", "cancel", "pay", "transfer", "upload", "set", "add", "modify", "edit",
  "publish", "archive", "move", "submit", "approve", "revoke", "invite", "purge", "execute", "run",
];

const LOCAL_HOSTS = new Set(["localhost", "127.0.0.1", "[::1]", "::1"]);

type Ctx = { url: URL; token?: string; safeFetch: SafeFetch; checks: CheckResult[] };

function add(ctx: Ctx, id: string, title: string, status: CheckStatus, message: string, details?: string[]) {
  ctx.checks.push(details && details.length > 0 ? { id, title, status, message, details } : { id, title, status, message });
}

function isObject(v: unknown): v is Record<string, unknown> {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}

function stringArray(v: unknown): string[] | null {
  return Array.isArray(v) && v.every((x) => typeof x === "string") ? v : null;
}

export async function checkConnector(rawUrl: string, options: CheckOptions = {}): Promise<Report> {
  const now = options.now ?? (() => new Date());
  const checks: CheckResult[] = [];
  let url: URL;
  try {
    url = new URL(rawUrl);
    if (url.protocol !== "https:" && url.protocol !== "http:") throw new Error("not http(s)");
  } catch {
    checks.push({ id: "url", title: "Valid URL", status: "fail", message: `"${rawUrl}" is not a valid http(s) URL` });
    return finish(rawUrl, now, checks);
  }
  url.hash = "";
  const ctx: Ctx = {
    url,
    token: options.token,
    safeFetch: createSafeFetch({ timeoutMs: options.timeoutMs ?? DEFAULT_TIMEOUT_MS }),
    checks,
  };

  checkHttps(ctx);
  const probe = await probeUnauthenticated(ctx);
  if (!probe.reachable) return finish(url.toString(), now, checks);
  const asUrls = await checkProtectedResourceMetadata(ctx, probe.resourceMetadataUrl, probe.requiresAuth);
  await checkAuthServerMetadata(ctx, asUrls, probe.requiresAuth);
  await checkMcp(ctx, probe.requiresAuth);
  return finish(url.toString(), now, checks);
}

function finish(url: string, now: () => Date, checks: CheckResult[]): Report {
  const summary: Record<CheckStatus, number> = { pass: 0, warn: 0, fail: 0, skip: 0 };
  for (const c of checks) summary[c.status]++;
  const scored = summary.pass + summary.warn + summary.fail;
  const score = scored === 0 ? 0 : Math.round((100 * (summary.pass + summary.warn * 0.5)) / scored);
  return { url, checkedAt: now().toISOString(), score, summary, checks };
}

function checkHttps(ctx: Ctx) {
  const title = "HTTPS";
  if (ctx.url.protocol === "https:") {
    add(ctx, "https", title, "pass", "Endpoint uses HTTPS");
  } else if (LOCAL_HOSTS.has(ctx.url.hostname)) {
    add(ctx, "https", title, "warn", "Plain HTTP on localhost: fine for development, but remote connectors must use HTTPS");
  } else {
    add(ctx, "https", title, "fail", "Endpoint uses plain HTTP. Claude and ChatGPT require HTTPS for remote connectors, and tokens would travel in clear text");
  }
}

async function probeUnauthenticated(
  ctx: Ctx,
): Promise<{ reachable: boolean; requiresAuth: boolean; resourceMetadataUrl?: string }> {
  const body = JSON.stringify({
    jsonrpc: "2.0",
    id: 1,
    method: "initialize",
    params: {
      protocolVersion: PROTOCOL_VERSION,
      capabilities: {},
      clientInfo: { name: "mcp-connector-check", version: "0.1.0" },
    },
  });
  let res: Response;
  try {
    res = await ctx.safeFetch(ctx.url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json, text/event-stream",
        "mcp-protocol-version": PROTOCOL_VERSION,
      },
      body,
    });
  } catch (err) {
    add(ctx, "reachable", "Endpoint reachable", "fail", `Could not reach ${ctx.url.toString()}: ${errorMessage(err)}`);
    return { reachable: false, requiresAuth: false };
  }
  await res.body?.cancel().catch(() => undefined);
  add(ctx, "reachable", "Endpoint reachable", "pass", `Server responded with HTTP ${res.status}`);

  const title = "Rejects unauthenticated requests";
  if (res.status === 401) {
    const header = res.headers.get("www-authenticate");
    const challenge = parseBearerChallenge(header);
    if (!challenge) {
      add(ctx, "auth-challenge", title, "fail",
        "401 returned without a Bearer WWW-Authenticate header. MCP clients use it to discover how to authorize");
      return { reachable: true, requiresAuth: true };
    }
    const rm = challenge.resource_metadata;
    if (!rm) {
      add(ctx, "auth-challenge", title, "warn",
        "401 with a Bearer challenge, but no resource_metadata parameter. Clients must fall back to well-known URL probing",
        [`WWW-Authenticate: ${header ?? ""}`]);
      return { reachable: true, requiresAuth: true };
    }
    add(ctx, "auth-challenge", title, "pass", "401 with WWW-Authenticate pointing to protected resource metadata",
      [`resource_metadata=${rm}`, ...(challenge.scope ? [`scope=${challenge.scope}`] : [])]);
    return { reachable: true, requiresAuth: true, resourceMetadataUrl: rm };
  }
  if (res.status === 403) {
    add(ctx, "auth-challenge", title, "warn", "403 without a 401 challenge. Clients cannot start the OAuth flow from a 403");
    return { reachable: true, requiresAuth: true };
  }
  if (res.status >= 200 && res.status < 300) {
    add(ctx, "auth-challenge", title, "warn",
      "Server accepts anonymous requests. Fine for public data, but anything tied to a user or business needs OAuth");
    return { reachable: true, requiresAuth: false };
  }
  add(ctx, "auth-challenge", title, "warn", `Unexpected HTTP ${res.status} to an unauthenticated initialize request`);
  return { reachable: true, requiresAuth: false };
}

async function checkProtectedResourceMetadata(
  ctx: Ctx,
  fromHeader: string | undefined,
  requiresAuth: boolean,
): Promise<string[]> {
  const id = "protected-resource-metadata";
  const title = "OAuth protected resource metadata (RFC 9728)";
  const candidates = fromHeader
    ? [fromHeader]
    : [...new Set([
        wellKnownUrl(ctx.url.toString(), "oauth-protected-resource", true),
        wellKnownUrl(ctx.url.toString(), "oauth-protected-resource", false),
      ])];
  const tried: string[] = [];
  for (const candidate of candidates) {
    const r = await fetchJson(ctx.safeFetch, candidate);
    if (!r.ok) {
      tried.push(`${candidate}: ${r.error}`);
      continue;
    }
    const doc = r.json;
    const problems: string[] = [];
    if (!isObject(doc)) {
      add(ctx, id, title, "fail", "Metadata document is not a JSON object", [candidate]);
      return [];
    }
    const resource = typeof doc.resource === "string" ? doc.resource : null;
    const servers = stringArray(doc.authorization_servers);
    if (!resource) problems.push('missing "resource"');
    else if (!resourceMatches(resource, ctx.url)) {
      problems.push(`"resource" (${resource}) does not match the server URL (${ctx.url.toString()})`);
    }
    if (!servers || servers.length === 0) problems.push('missing or empty "authorization_servers"');
    const httpServers = (servers ?? []).filter((s) => !s.startsWith("https://") && !isLocal(s));
    if (httpServers.length > 0) problems.push(`authorization server must use HTTPS: ${httpServers.join(", ")}`);
    if (problems.length > 0) {
      add(ctx, id, title, "fail", "Metadata found but malformed", [candidate, ...problems]);
    } else {
      add(ctx, id, title, "pass", "Discoverable and well formed", [
        candidate,
        `authorization_servers: ${(servers ?? []).join(", ")}`,
        ...(stringArray(doc.scopes_supported) ? [`scopes_supported: ${(doc.scopes_supported as string[]).join(" ")}`] : []),
      ]);
    }
    return servers ?? [];
  }
  if (requiresAuth) {
    add(ctx, id, title, "fail", "Server requires auth but publishes no protected resource metadata. MCP servers MUST implement RFC 9728", tried);
  } else {
    add(ctx, id, title, "skip", "No metadata (server allows anonymous access)");
  }
  return [];
}

function isLocal(u: string): boolean {
  try {
    return LOCAL_HOSTS.has(new URL(u).hostname);
  } catch {
    return false;
  }
}

function resourceMatches(resource: string, url: URL): boolean {
  const norm = (s: string) => s.replace(/\/+$/, "").toLowerCase();
  try {
    const r = new URL(resource);
    const full = norm(`${url.origin}${url.pathname}`);
    return norm(r.toString()) === full || full.startsWith(`${norm(r.toString())}/`) || norm(r.toString()) === norm(url.origin);
  } catch {
    return false;
  }
}

async function checkAuthServerMetadata(ctx: Ctx, asUrls: string[], requiresAuth: boolean) {
  const id = "authorization-server-metadata";
  const title = "Authorization server metadata (RFC 8414 / OIDC)";
  const issuer = asUrls[0];
  if (!issuer) {
    add(ctx, id, title, "skip", requiresAuth ? "No authorization server to inspect" : "Not applicable (anonymous access)");
    return;
  }
  const candidates = [...new Set([
    wellKnownUrl(issuer, "oauth-authorization-server", true),
    wellKnownUrl(issuer, "openid-configuration", true),
    `${issuer.replace(/\/+$/, "")}/.well-known/openid-configuration`,
  ])];
  const tried: string[] = [];
  for (const candidate of candidates) {
    const r = await fetchJson(ctx.safeFetch, candidate);
    if (!r.ok) {
      tried.push(`${candidate}: ${r.error}`);
      continue;
    }
    const doc = r.json;
    if (!isObject(doc)) {
      add(ctx, id, title, "fail", "Metadata document is not a JSON object", [candidate]);
      return;
    }
    const fails: string[] = [];
    const warns: string[] = [];
    for (const field of ["issuer", "authorization_endpoint", "token_endpoint"]) {
      if (typeof doc[field] !== "string") fails.push(`missing "${field}"`);
    }
    if (typeof doc.issuer === "string" && doc.issuer.replace(/\/+$/, "") !== issuer.replace(/\/+$/, "")) {
      fails.push(`"issuer" (${doc.issuer}) does not match ${issuer}`);
    }
    const rts = stringArray(doc.response_types_supported);
    if (!rts?.includes("code")) fails.push('"response_types_supported" must include "code"');
    const pkce = stringArray(doc.code_challenge_methods_supported);
    if (!pkce?.includes("S256")) {
      fails.push('"code_challenge_methods_supported" must include "S256" (MCP clients refuse to proceed without PKCE support)');
    }
    if (typeof doc.registration_endpoint !== "string" && doc.client_id_metadata_document_supported !== true) {
      warns.push("No client registration path: neither Client ID Metadata Documents nor Dynamic Client Registration is advertised, so users must paste a client ID by hand");
    }
    const status: CheckStatus = fails.length > 0 ? "fail" : warns.length > 0 ? "warn" : "pass";
    const message = status === "pass" ? "Discoverable and well formed" : status === "warn" ? "Usable, with gaps" : "Metadata found but malformed";
    add(ctx, id, title, status, message, [candidate, ...fails, ...warns]);
    return;
  }
  add(ctx, id, title, "fail", `No authorization server metadata found for ${issuer}`, tried);
}

async function connect(ctx: Ctx): Promise<{ client: Client; transport: "streamable-http" | "sse" } | { error: string }> {
  const requestInit: RequestInit = ctx.token ? { headers: { authorization: `Bearer ${ctx.token}` } } : {};
  const clientInfo = { name: "mcp-connector-check", version: "0.1.0" };
  const errors: string[] = [];
  const streamable = new Client(clientInfo);
  try {
    await streamable.connect(new StreamableHTTPClientTransport(ctx.url, { requestInit, fetch: ctx.safeFetch }));
    return { client: streamable, transport: "streamable-http" };
  } catch (err) {
    errors.push(`Streamable HTTP: ${errorMessage(err)}`);
    await streamable.close().catch(() => undefined);
  }
  const sse = new Client(clientInfo);
  try {
    await sse.connect(new SSEClientTransport(ctx.url, { requestInit, fetch: ctx.safeFetch }));
    return { client: sse, transport: "sse" };
  } catch (err) {
    errors.push(`SSE: ${errorMessage(err)}`);
    await sse.close().catch(() => undefined);
  }
  return { error: errors.join("; ") };
}

const MCP_CHECKS: Array<[string, string]> = [
  ["server-info", "Server info"],
  ["instructions", "Server instructions"],
  ["tools-count", "Tool count"],
  ["tool-descriptions", "Tool descriptions"],
  ["tool-input-schemas", "Tool input schemas"],
  ["tool-annotations", "Tool annotations"],
  ["write-tools-destructive-hint", "Write tools marked destructive"],
  ["tools-payload-size", "tools/list payload size"],
];

function skipMcpChecks(ctx: Ctx, reason: string) {
  for (const [id, title] of MCP_CHECKS) add(ctx, id, title, "skip", reason);
}

async function checkMcp(ctx: Ctx, requiresAuth: boolean) {
  const title = "Transport (Streamable HTTP)";
  if (requiresAuth && !ctx.token) {
    add(ctx, "transport", title, "skip", "Server requires auth. Pass --token <bearer> to inspect the MCP session");
    skipMcpChecks(ctx, "Needs an authenticated session (--token)");
    return;
  }
  const conn = await connect(ctx);
  if ("error" in conn) {
    add(ctx, "transport", title, "fail", "Could not open an MCP session over Streamable HTTP or SSE", [conn.error]);
    skipMcpChecks(ctx, "No MCP session");
    return;
  }
  const { client } = conn;
  try {
    if (conn.transport === "streamable-http") {
      add(ctx, "transport", title, "pass", "Streamable HTTP session initialized");
    } else {
      add(ctx, "transport", title, "warn", "Only the deprecated HTTP+SSE transport works. Move to Streamable HTTP");
    }
    const version = client.getServerVersion();
    if (version?.name && version.version) {
      add(ctx, "server-info", "Server info", "pass", `${version.name} ${version.version}`);
    } else {
      add(ctx, "server-info", "Server info", "warn", "Server did not report a name and version in serverInfo");
    }
    const instructions = client.getInstructions();
    if (!instructions) {
      add(ctx, "instructions", "Server instructions", "warn", "No instructions. A short instructions string helps the model pick the right tools");
    } else if (instructions.length > INSTRUCTIONS_LIMIT) {
      add(ctx, "instructions", "Server instructions", "warn",
        `Instructions are ${instructions.length} characters; Claude Code truncates anything over ${INSTRUCTIONS_LIMIT}`);
    } else {
      add(ctx, "instructions", "Server instructions", "pass", `${instructions.length} characters`);
    }
    if (!client.getServerCapabilities()?.tools) {
      add(ctx, "tools-count", "Tool count", "warn", "Server does not advertise the tools capability");
      for (const [id, t] of MCP_CHECKS.slice(3)) add(ctx, id, t, "skip", "No tools");
      return;
    }
    const tools: Tool[] = [];
    let cursor: string | undefined;
    for (let page = 0; page < MAX_TOOL_PAGES; page++) {
      const res = await client.listTools(cursor ? { cursor } : undefined);
      tools.push(...res.tools);
      cursor = res.nextCursor;
      if (!cursor) break;
    }
    checkTools(ctx, tools);
  } catch (err) {
    add(ctx, "tools-count", "Tool count", "fail", `tools/list failed: ${errorMessage(err)}`);
  } finally {
    await client.close().catch(() => undefined);
  }
}

function looksLikeWrite(name: string): boolean {
  const words = name
    .replace(/([a-z0-9])([A-Z])/g, "$1_$2")
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter(Boolean);
  return words.some((w) => WRITE_WORDS.includes(w));
}

export function checkTools(ctx: Pick<Ctx, "checks">, tools: Tool[]) {
  const c = ctx as Ctx;
  const n = tools.length;
  if (n === 0) add(c, "tools-count", "Tool count", "warn", "Server exposes no tools");
  else if (n > MAX_TOOLS) add(c, "tools-count", "Tool count", "warn", `${n} tools. More than ${MAX_TOOLS} crowds the model's context and hurts tool selection`);
  else add(c, "tools-count", "Tool count", "pass", `${n} tool${n === 1 ? "" : "s"}`);

  const missing: string[] = [];
  const short: string[] = [];
  const long: string[] = [];
  for (const t of tools) {
    const d = t.description?.trim() ?? "";
    if (!d) missing.push(t.name);
    else if (d.length < MIN_DESCRIPTION) short.push(`${t.name} (${d.length} chars)`);
    else if (d.length > MAX_DESCRIPTION) long.push(`${t.name} (${d.length} chars)`);
  }
  if (missing.length > 0) {
    add(c, "tool-descriptions", "Tool descriptions", "fail", `${missing.length} tool(s) without a description`, [
      ...missing.map((m) => `missing: ${m}`), ...short.map((s) => `too short: ${s}`), ...long.map((l) => `too long: ${l}`)]);
  } else if (short.length + long.length > 0) {
    add(c, "tool-descriptions", "Tool descriptions", "warn",
      `${short.length + long.length} description(s) outside ${MIN_DESCRIPTION}-${MAX_DESCRIPTION} characters`,
      [...short.map((s) => `too short: ${s}`), ...long.map((l) => `too long: ${l}`)]);
  } else if (n > 0) {
    add(c, "tool-descriptions", "Tool descriptions", "pass", "Every tool has a description of reasonable length");
  } else {
    add(c, "tool-descriptions", "Tool descriptions", "skip", "No tools");
  }

  const schemaIssues: string[] = [];
  for (const t of tools) {
    const schema = t.inputSchema as Record<string, unknown>;
    if (schema.type !== "object") {
      schemaIssues.push(`${t.name}: inputSchema.type is not "object"`);
      continue;
    }
    const props = isObject(schema.properties) ? schema.properties : {};
    const keys = Object.keys(props).sort();
    for (const k of keys) {
      const p = props[k];
      if (!isObject(p) || !("type" in p || "anyOf" in p || "oneOf" in p || "allOf" in p || "$ref" in p || "enum" in p || "const" in p)) {
        schemaIssues.push(`${t.name}.${k}: no type`);
      }
    }
    if (keys.length > 0 && !Array.isArray(schema.required)) schemaIssues.push(`${t.name}: no "required" list`);
  }
  if (n === 0) add(c, "tool-input-schemas", "Tool input schemas", "skip", "No tools");
  else if (schemaIssues.length > 0) add(c, "tool-input-schemas", "Tool input schemas", "warn", `${schemaIssues.length} schema issue(s)`, schemaIssues);
  else add(c, "tool-input-schemas", "Tool input schemas", "pass", "All parameters typed; required fields declared");

  const unannotated = tools
    .filter((t) => t.annotations?.readOnlyHint === undefined && t.annotations?.destructiveHint === undefined)
    .map((t) => t.name);
  if (n === 0) add(c, "tool-annotations", "Tool annotations", "skip", "No tools");
  else if (unannotated.length > 0) {
    add(c, "tool-annotations", "Tool annotations", "warn",
      `${unannotated.length} tool(s) without readOnlyHint or destructiveHint. Clients use these to decide when to ask for confirmation`, unannotated);
  } else add(c, "tool-annotations", "Tool annotations", "pass", "Every tool declares readOnlyHint or destructiveHint");

  const writeTools = tools.filter((t) => looksLikeWrite(t.name));
  const lying = writeTools.filter((t) => t.annotations?.readOnlyHint === true).map((t) => `${t.name}: write-looking name but readOnlyHint: true`);
  const unmarked = writeTools
    .filter((t) => t.annotations?.readOnlyHint !== true && t.annotations?.destructiveHint === undefined)
    .map((t) => `${t.name}: no destructiveHint`);
  if (writeTools.length === 0) add(c, "write-tools-destructive-hint", "Write tools marked destructive", "pass", "No write-looking tools");
  else if (lying.length > 0 || unmarked.length > 0) {
    add(c, "write-tools-destructive-hint", "Write tools marked destructive", "warn",
      `${lying.length + unmarked.length} write-looking tool(s) not clearly marked. Set destructiveHint (true, or false for additive writes)`, [...lying, ...unmarked]);
  } else add(c, "write-tools-destructive-hint", "Write tools marked destructive", "pass", `${writeTools.length} write-looking tool(s), all annotated`);

  const bytes = Buffer.byteLength(JSON.stringify({ tools }), "utf8");
  if (bytes > TOOLS_PAYLOAD_LIMIT) {
    add(c, "tools-payload-size", "tools/list payload size", "warn",
      `${Math.round(bytes / 1024)} KB. Large tool lists eat the model's context on every turn`);
  } else add(c, "tools-payload-size", "tools/list payload size", "pass", `${(bytes / 1024).toFixed(1)} KB`);
}
