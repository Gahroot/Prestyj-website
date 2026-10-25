# mcp-connector-check

Check a remote MCP server for production readiness and security before you ship it as a custom Claude connector or a ChatGPT app.

`mcp-connector-check` points at a Streamable HTTP (or legacy SSE) MCP endpoint and reports pass, warn, or fail for each check, plus a score. It runs as a CLI for you and your CI, and as an MCP server so Claude can audit connectors for you.

It is read-only. It fetches public metadata, initializes a session, and lists tools. It never calls a tool on the server it checks.

## Install

Requires Node.js 20 or newer. No install needed:

```bash
npx mcp-connector-check https://example.com/mcp
```

Or add it to a project:

```bash
npm install --save-dev mcp-connector-check
```

## CLI usage

```bash
mcp-connector-check <url> [--token <bearer>] [--json] [--timeout <ms>]
```

| Option | What it does |
| --- | --- |
| `--token <bearer>` | Bearer token for servers that require auth. You can also set `MCP_CONNECTOR_CHECK_TOKEN`. |
| `--json` | Print the report as JSON (handy in CI). |
| `--timeout <ms>` | Per-request timeout. Default 15000. |
| `--mcp` | Run as an MCP server over stdio. |

Exit codes: `0` when no check fails, `1` when at least one check fails, `2` on a usage error.

Without a token, a server that requires OAuth still gets its auth discovery audited; the session and tool checks are skipped until you pass `--token`.

Sample output:

```text
MCP connector check: https://example.com/mcp

[PASS] HTTPS: Endpoint uses HTTPS
[PASS] Endpoint reachable: Server responded with HTTP 401
[PASS] Rejects unauthenticated requests: 401 with WWW-Authenticate pointing to protected resource metadata
[PASS] OAuth protected resource metadata (RFC 9728): Discoverable and well formed
[PASS] Authorization server metadata (RFC 8414 / OIDC): Discoverable and well formed
[PASS] Transport (Streamable HTTP): Streamable HTTP session initialized
[PASS] Server info: example-server 1.4.0
[WARN] Server instructions: Instructions are 3000 characters; Claude Code truncates anything over 2048
[PASS] Tool count: 6 tools
[FAIL] Tool descriptions: 1 tool(s) without a description
       - missing: delete_record
[PASS] Tool input schemas: All parameters typed; required fields declared
[WARN] Tool annotations: 1 tool(s) without readOnlyHint or destructiveHint
[WARN] Write tools marked destructive: 1 write-looking tool(s) not clearly marked
       - delete_record: no destructiveHint
[PASS] tools/list payload size: 4.2 KB

Score: 82/100  (10 pass, 3 warn, 1 fail, 0 skipped)
```

## MCP server usage

Run `mcp-connector-check --mcp` to start a stdio MCP server with one tool:

- `check_connector`: input `url` (required) and `token` (optional). Returns the same report as text and as JSON.

### Claude Desktop

Add this to `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "mcp-connector-check": {
      "command": "npx",
      "args": ["-y", "mcp-connector-check", "--mcp"]
    }
  }
}
```

### Claude Code

```bash
claude mcp add mcp-connector-check -- npx -y mcp-connector-check --mcp
```

Then ask: "Check https://example.com/mcp for production readiness."

## Checks

| Check | Pass | Warn | Fail |
| --- | --- | --- | --- |
| HTTPS | HTTPS endpoint | Plain HTTP on localhost | Plain HTTP on a public host |
| Endpoint reachable | Any HTTP response | | Network error, timeout, or more than 3 redirects |
| Rejects unauthenticated requests | 401 with `WWW-Authenticate: Bearer resource_metadata=...` | Anonymous access allowed, 401 without `resource_metadata`, or 403 | 401 with no Bearer challenge |
| OAuth protected resource metadata (RFC 9728) | Found via the challenge or `/.well-known/oauth-protected-resource`, with a matching `resource` and `authorization_servers` | | Missing on an auth-protected server, or malformed |
| Authorization server metadata (RFC 8414 / OIDC) | `issuer`, endpoints, `code` response type, and PKCE `S256` | No Client ID Metadata Document or Dynamic Client Registration support | Missing, or missing required fields or `S256` |
| Transport | Streamable HTTP works | Only the deprecated HTTP+SSE transport works | Neither works (or the token is rejected) |
| Server info | `serverInfo` name and version | Missing | |
| Server instructions | Present, up to 2,048 characters | Missing, or longer than 2,048 characters (Claude Code truncates them) | |
| Tool count | 1 to 40 tools | 0 tools, or more than 40 | |
| Tool descriptions | Every tool has 20 to 1,024 characters | Some too short or too long | A tool has no description |
| Tool input schemas | Object schemas, typed parameters, `required` declared | Untyped parameters or no `required` list | |
| Tool annotations | Every tool sets `readOnlyHint` or `destructiveHint` | Some tools set neither | |
| Write tools marked destructive | Tools named like create, update, delete, send (and similar) set `destructiveHint` | A write-looking tool has no `destructiveHint`, or claims `readOnlyHint: true` | |
| tools/list payload size | Up to 100 KB | Over 100 KB | |

The score counts a pass as 1, a warn as 0.5, and a fail as 0, over all checks that were not skipped.

Checks follow the [MCP specification](https://modelcontextprotocol.io/specification), in particular the [authorization spec](https://modelcontextprotocol.io/specification/draft/basic/authorization).

## Safety

- Never calls a tool on the target server. Only `initialize` and `tools/list` are sent.
- Every request has a timeout, and at most 3 redirects are followed.
- Tokens are sent only to the URL you give it, as an `Authorization: Bearer` header, and are never printed.
- In MCP mode the tool fetches whatever URL the model passes it, so run it where outbound requests to your internal network are acceptable.

## Programmatic use

```ts
import { checkConnector, formatReport } from "mcp-connector-check";

const report = await checkConnector("https://example.com/mcp", { token: process.env.TOKEN });
console.log(formatReport(report));
```

## Development

```bash
npm install
npm run build
npm test
```

Tests start a well-behaved and a badly behaved fixture MCP server locally and check both.

## About

Built by Prestyj, which builds custom Claude connectors and MCP servers for businesses: https://prestyj.com/custom-mcp-servers

Read the full [MCP server security checklist](https://prestyj.com/connectors/mcp-server-security-checklist).

## License

MIT. Copyright (c) 2026 Prestyj.
