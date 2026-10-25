# Publishing mcp-connector-check

Run these steps in order from this folder (`open-source/mcp-connector-check/`). The names below assume the GitHub account or org is `prestyj`. If it is different, replace `prestyj` in `package.json` (`repository`, `bugs`, `mcpName`), `server.json` (`name`, `repository.url`), and the commands below before you start.

## 0. Check the build

```bash
npm install
npm run build
npm test
```

## 1. GitHub

The package lives in its own public repo so directories can link to it.

```bash
cp -R . /tmp/mcp-connector-check && cd /tmp/mcp-connector-check
rm -rf node_modules dist
git init -b main
git add .
git commit -m "Initial release v0.1.0"
gh repo create prestyj/mcp-connector-check --public --source . --push \
  --description "Check a remote MCP server or Claude connector for production readiness and security" \
  --homepage "https://prestyj.com/connectors/mcp-server-security-checklist"
gh repo edit prestyj/mcp-connector-check --add-topic mcp,model-context-protocol,mcp-server,claude,claude-connector,security,oauth
```

## 2. npm

`mcp-connector-check` was unclaimed on npm when this was written. Check again with `npm view mcp-connector-check` (a 404 means it is still free).

```bash
npm login
npm publish --access public
```

`prepublishOnly` builds and tests first. Check that it works: `npx -y mcp-connector-check --version`.

## 3. Official MCP registry

`package.json` has `"mcpName": "io.github.prestyj/mcp-connector-check"`, which the registry uses to confirm you own the npm package. It must match `name` in `server.json`, and the npm version must be published first.

Install the publisher CLI (macOS: `brew install mcp-publisher`, or download a binary from https://github.com/modelcontextprotocol/registry/releases), then:

```bash
mcp-publisher login github     # sign in as a member of the prestyj GitHub org/account
mcp-publisher publish
curl "https://registry.modelcontextprotocol.io/v0/servers?search=io.github.prestyj/mcp-connector-check"
```

To use a `com.prestyj/...` name instead, change `mcpName` and `server.json` `name`, then sign in with `mcp-publisher login dns --domain prestyj.com` (follow its prompt to add a TXT record).

For each new release: bump `version` in `package.json` and both `version` fields in `server.json`, `npm publish`, then `mcp-publisher publish`.

## 4. Directories

- **Smithery** (https://smithery.ai): sign in with GitHub, choose "Add server", and pick the `prestyj/mcp-connector-check` repo. It runs locally over stdio with `npx -y mcp-connector-check --mcp` and needs no config.
- **Glama** (https://glama.ai/mcp/servers): use "Add server" and submit the GitHub URL. Glama indexes repos automatically; claiming the listing lets you edit it.
- **PulseMCP** (https://www.pulsemcp.com/submit): submit the GitHub URL. PulseMCP also pulls from the official registry, so step 3 may list it automatically.
- **mcp.so** (https://mcp.so/submit): submit the name, the GitHub URL, and the short description.
- **Optional:** open a pull request adding a one-line entry to https://github.com/punkpeye/awesome-mcp-servers under a "Security" or "Developer tools" section.

Use this description everywhere: "Check a remote MCP server or Claude connector for production readiness and security: OAuth discovery, transport, tool descriptions, schemas and annotations. Read-only."

## 5. Link it from prestyj.com

Link the GitHub repo from https://prestyj.com/connectors/mcp-server-security-checklist and https://prestyj.com/custom-mcp-servers.
