import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";
import { afterAll, beforeAll, expect, it } from "vitest";
import { type Fixture, startBadServer } from "./fixtures.js";

let bad: Fixture;
beforeAll(async () => {
  bad = await startBadServer();
});
afterAll(() => bad.close());

it("exposes check_connector over stdio", async () => {
  const client = new Client({ name: "test", version: "0" });
  await client.connect(new StdioClientTransport({ command: "node", args: ["dist/cli.js", "--mcp"] }));
  try {
    const { tools } = await client.listTools();
    expect(tools.map((t) => t.name)).toEqual(["check_connector"]);
    expect(tools[0]?.annotations?.readOnlyHint).toBe(true);
    const res = await client.callTool({ name: "check_connector", arguments: { url: bad.url } });
    const text = (res.content as Array<{ type: string; text: string }>)[0]?.text ?? "";
    expect(text).toContain("[FAIL] Tool descriptions");
  } finally {
    await client.close();
  }
});
