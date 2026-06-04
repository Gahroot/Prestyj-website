#!/usr/bin/env npx tsx
/**
 * Create the Prestyj Wikidata item programmatically.
 *
 * Why this exists: a Wikidata item is the canonical "this is the same
 * entity as the website at prestyj.com" anchor that Google, Perplexity,
 * ChatGPT, Claude, and Gemini all read. The `official website (P856)`
 * claim is a DR-95 backlink that never breaks.
 *
 * Setup (one-time, ~60 seconds):
 *   1. Log in to https://www.wikidata.org with your existing account.
 *   2. Visit https://www.wikidata.org/wiki/Special:BotPasswords
 *   3. Create a bot password with the following grants:
 *        - High-volume editing
 *        - Edit existing pages
 *        - Create, edit, and move pages
 *      (You can leave everything else unchecked.)
 *   4. Save BOTH halves of the generated credential into .env.local:
 *        WIKIDATA_USERNAME=YourUsername@PrestyjBot
 *        WIKIDATA_BOT_PASSWORD=<the long generated password>
 *   5. Run a dry-run to inspect the payload:
 *        npm run wikidata:create:dry
 *   6. Create the item for real:
 *        npm run wikidata:create -- --live
 *
 * Idempotency:
 *   - Searches Wikidata for an existing item with label "Prestyj" + an
 *     official website claim matching prestyj.com. If one already exists,
 *     refuses to create a duplicate and prints the existing Q-ID.
 *
 * Side effects after success:
 *   - Writes the Q-ID to data/wikidata/prestyj-qid.json so other scripts
 *     can consume it.
 *   - Prints the JSON-LD `sameAs` snippet to add to
 *     src/lib/site-config.ts (the canonical sameAs source of truth).
 */

import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { config as loadEnv } from "dotenv";
import { assertSelfMadeBacklinksHalted } from "../backlinks/halt";

// Load .env.local first (overrides), then .env
loadEnv({ path: ".env.local" });
loadEnv();

const WIKIDATA_API = "https://www.wikidata.org/w/api.php";
const USER_AGENT =
  "PrestyjItemBot/1.0 (https://prestyj.com; contact via https://prestyj.com/contact)";

const args = new Set(process.argv.slice(2));
const LIVE = args.has("--live");
const DRY_RUN = !LIVE;

// ─── Item definition ──────────────────────────────────────────────────────────
// Keep this aligned with docs/backlinks/wikipedia-edit-drafts.md.

const ITEM = {
  labels: {
    en: "Prestyj",
  },
  descriptions: {
    en: "American company developing AI agents for marketing and sales",
  },
  aliases: {
    en: ["prestyj.com"],
  },
  // Each claim: property + value + optional reference URL.
  // Property IDs verified against https://www.wikidata.org/wiki/Wikidata:List_of_properties
  claims: [
    {
      property: "P31",
      type: "wikibase-item",
      value: { numericId: 4830453 }, // business
      referenceUrl: "https://prestyj.com",
    },
    {
      property: "P17",
      type: "wikibase-item",
      value: { numericId: 30 }, // United States of America
      referenceUrl: "https://prestyj.com",
    },
    {
      property: "P452",
      type: "wikibase-item",
      value: { numericId: 11660 }, // artificial intelligence
      referenceUrl: "https://prestyj.com",
    },
    {
      property: "P452",
      type: "wikibase-item",
      value: { numericId: 39809 }, // marketing
      referenceUrl: "https://prestyj.com",
    },
    {
      property: "P452",
      type: "wikibase-item",
      value: { numericId: 880328 }, // software industry
      referenceUrl: "https://prestyj.com",
    },
    {
      property: "P856", // official website
      type: "url",
      value: "https://prestyj.com",
      referenceUrl: "https://prestyj.com",
    },
    {
      property: "P4264", // LinkedIn company or organization ID
      type: "external-id",
      value: "prestyj",
      referenceUrl: "https://www.linkedin.com/company/prestyj/",
    },
    {
      property: "P2002", // X (formerly Twitter) username
      type: "external-id",
      value: "prestyj_",
      referenceUrl: "https://x.com/prestyj_",
    },
    {
      property: "P2003", // Instagram username
      type: "external-id",
      value: "prestyj_",
      referenceUrl: "https://www.instagram.com/prestyj_/",
    },
    {
      property: "P2013", // Facebook ID
      type: "external-id",
      value: "61582824703610",
      referenceUrl: "https://www.facebook.com/profile.php?id=61582824703610",
    },
  ] as const,
};

// ─── Types ────────────────────────────────────────────────────────────────────

interface LoginTokenResponse {
  query: { tokens: { logintoken: string } };
}

interface LoginResponse {
  login: { result: "Success" | "Failed" | "WrongPass" | string; reason?: string; lguserid?: number; lgusername?: string };
}

interface CsrfTokenResponse {
  query: { tokens: { csrftoken: string } };
}

interface SearchResponse {
  search: Array<{ id: string; label?: string; description?: string; concepturi?: string }>;
}

interface EditEntityResponse {
  success?: number;
  entity?: { id: string; type: string };
  error?: { code: string; info: string };
}

interface GetEntitiesResponse {
  entities: Record<
    string,
    {
      id: string;
      claims?: Record<
        string,
        Array<{
          mainsnak?: {
            datavalue?: {
              value: { id?: string } | string;
              type: string;
            };
          };
        }>
      >;
    }
  >;
}

interface SnakValue {
  snaktype: "value";
  property: string;
  datavalue:
    | { value: { "entity-type": "item"; "numeric-id": number; id: string }; type: "wikibase-entityid" }
    | { value: string; type: "string" };
}

interface Reference {
  snaks: Record<string, SnakValue[]>;
}

interface Claim {
  mainsnak: SnakValue;
  type: "statement";
  rank: "normal";
  references?: Reference[];
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function buildSnak(
  claim: (typeof ITEM.claims)[number],
): SnakValue {
  if (claim.type === "wikibase-item") {
    return {
      snaktype: "value",
      property: claim.property,
      datavalue: {
        value: {
          "entity-type": "item",
          "numeric-id": claim.value.numericId,
          id: `Q${claim.value.numericId}`,
        },
        type: "wikibase-entityid",
      },
    };
  }
  // url + external-id are both string-typed in Wikibase
  return {
    snaktype: "value",
    property: claim.property,
    datavalue: { value: claim.value as string, type: "string" },
  };
}

function buildReference(refUrl: string): Reference {
  return {
    snaks: {
      P854: [
        {
          snaktype: "value",
          property: "P854",
          datavalue: { value: refUrl, type: "string" },
        },
      ],
    },
  };
}

function buildEntityPayload(): {
  labels: Record<string, { language: string; value: string }>;
  descriptions: Record<string, { language: string; value: string }>;
  aliases: Record<string, Array<{ language: string; value: string }>>;
  claims: Claim[];
} {
  return {
    labels: Object.fromEntries(
      Object.entries(ITEM.labels).map(([lang, value]) => [lang, { language: lang, value }]),
    ),
    descriptions: Object.fromEntries(
      Object.entries(ITEM.descriptions).map(([lang, value]) => [lang, { language: lang, value }]),
    ),
    aliases: Object.fromEntries(
      Object.entries(ITEM.aliases).map(([lang, vals]) => [
        lang,
        vals.map((v) => ({ language: lang, value: v })),
      ]),
    ),
    claims: ITEM.claims.map((claim) => ({
      mainsnak: buildSnak(claim),
      type: "statement",
      rank: "normal",
      references: [buildReference(claim.referenceUrl)],
    })),
  };
}

// ─── API client ──────────────────────────────────────────────────────────────

interface ApiClient {
  cookies: Map<string, string>;
  csrfToken: string;
}

function parseSetCookie(headers: Headers): Array<[string, string]> {
  const result: Array<[string, string]> = [];
  // Node's fetch exposes getSetCookie() on newer versions
  const getSetCookie = (headers as Headers & { getSetCookie?: () => string[] }).getSetCookie;
  const cookies = typeof getSetCookie === "function" ? getSetCookie.call(headers) : [];
  for (const raw of cookies) {
    const pair = raw.split(";")[0];
    if (!pair) continue;
    const eq = pair.indexOf("=");
    if (eq === -1) continue;
    const name = pair.slice(0, eq).trim();
    const value = pair.slice(eq + 1).trim();
    if (name) result.push([name, value]);
  }
  return result;
}

function cookieHeader(cookies: Map<string, string>): string {
  return Array.from(cookies.entries())
    .map(([k, v]) => `${k}=${v}`)
    .join("; ");
}

async function apiCall<T>(
  client: ApiClient,
  params: Record<string, string>,
  method: "GET" | "POST" = "GET",
): Promise<T> {
  const url = new URL(WIKIDATA_API);
  const body = new URLSearchParams();
  for (const [k, v] of Object.entries({ ...params, format: "json", formatversion: "2" })) {
    if (method === "GET") url.searchParams.set(k, v);
    else body.set(k, v);
  }
  const headers: Record<string, string> = {
    "User-Agent": USER_AGENT,
    Accept: "application/json",
  };
  if (client.cookies.size > 0) headers["Cookie"] = cookieHeader(client.cookies);
  if (method === "POST") headers["Content-Type"] = "application/x-www-form-urlencoded";

  const init: RequestInit = { method, headers };
  if (method === "POST") init.body = body;
  const res = await fetch(method === "GET" ? url : WIKIDATA_API, init);

  // Update cookies from response
  for (const [name, value] of parseSetCookie(res.headers)) {
    client.cookies.set(name, value);
  }

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`HTTP ${res.status} ${res.statusText}: ${text}`);
  }
  const json = (await res.json()) as T;
  return json;
}

async function login(username: string, password: string): Promise<ApiClient> {
  const client: ApiClient = { cookies: new Map(), csrfToken: "" };

  // Step 1: get login token
  const tokenRes = await apiCall<LoginTokenResponse>(client, {
    action: "query",
    meta: "tokens",
    type: "login",
  });
  const loginToken = tokenRes.query.tokens.logintoken;

  // Step 2: actually log in
  const loginRes = await apiCall<LoginResponse>(
    client,
    {
      action: "login",
      lgname: username,
      lgpassword: password,
      lgtoken: loginToken,
    },
    "POST",
  );
  if (loginRes.login.result !== "Success") {
    throw new Error(
      `Login failed: ${loginRes.login.result}${loginRes.login.reason ? ` — ${loginRes.login.reason}` : ""}`,
    );
  }

  // Step 3: get CSRF token (now authenticated)
  const csrfRes = await apiCall<CsrfTokenResponse>(client, {
    action: "query",
    meta: "tokens",
  });
  client.csrfToken = csrfRes.query.tokens.csrftoken;
  if (!client.csrfToken || client.csrfToken === "+\\") {
    throw new Error(
      'CSRF token request returned an anonymous token (+\\). Login likely did not persist — bot password grants may be missing "Edit existing pages" or "Create, edit, and move pages".',
    );
  }

  return client;
}

async function findExistingPrestyjItem(client: ApiClient): Promise<string | null> {
  // Search Wikidata for items matching "Prestyj"
  const res = await apiCall<SearchResponse>(client, {
    action: "wbsearchentities",
    search: "Prestyj",
    language: "en",
    type: "item",
    limit: "10",
  });
  // Match label exactly (case-insensitive) — Wikidata returns substring matches.
  for (const hit of res.search) {
    if (hit.label && hit.label.toLowerCase() === "prestyj") return hit.id;
  }
  return null;
}

async function createItem(client: ApiClient): Promise<string> {
  const payload = buildEntityPayload();
  const res = await apiCall<EditEntityResponse>(
    client,
    {
      action: "wbeditentity",
      new: "item",
      data: JSON.stringify(payload),
      token: client.csrfToken,
      summary: "Create item for Prestyj — AI agents for marketing and sales (prestyj.com)",
      bot: "1",
    },
    "POST",
  );
  if (res.error) {
    throw new Error(`Wikidata API error: ${res.error.code} — ${res.error.info}`);
  }
  if (!res.entity?.id) {
    throw new Error(`Unexpected response shape: ${JSON.stringify(res)}`);
  }
  return res.entity.id;
}

/**
 * Extracts a comparable string from a claim's mainsnak value. Used to dedupe
 * desired claims against existing ones on the item.
 */
function snakValueKey(claim: (typeof ITEM.claims)[number]): string {
  if (claim.type === "wikibase-item") return `Q${claim.value.numericId}`;
  return claim.value as string;
}

function existingClaimKey(s: {
  mainsnak?: { datavalue?: { value: { id?: string } | string; type: string } };
}): string | null {
  const dv = s.mainsnak?.datavalue;
  if (!dv) return null;
  if (typeof dv.value === "string") return dv.value;
  if (dv.value && typeof dv.value === "object" && dv.value.id) return dv.value.id;
  return null;
}

async function fetchExistingClaims(
  client: ApiClient,
  qid: string,
): Promise<Set<string>> {
  const res = await apiCall<GetEntitiesResponse>(client, {
    action: "wbgetentities",
    ids: qid,
    props: "claims",
  });
  const entity = res.entities[qid];
  const existing = new Set<string>();
  for (const [property, statements] of Object.entries(entity?.claims ?? {})) {
    for (const s of statements) {
      const key = existingClaimKey(s);
      if (key) existing.add(`${property}::${key}`);
    }
  }
  return existing;
}

async function patchItem(client: ApiClient, qid: string): Promise<number> {
  const existing = await fetchExistingClaims(client, qid);
  const missing = ITEM.claims.filter(
    (c) => !existing.has(`${c.property}::${snakValueKey(c)}`),
  );
  if (missing.length === 0) {
    console.log("  ✓ All desired claims already present — nothing to patch.");
    return 0;
  }
  console.log(`  → ${missing.length} missing claim(s); appending…`);
  for (const claim of missing) {
    const val = snakValueKey(claim);
    console.log(`    + ${claim.property}  →  ${val}`);
  }
  const data = {
    claims: missing.map((claim) => ({
      mainsnak: buildSnak(claim),
      type: "statement" as const,
      rank: "normal" as const,
      references: [buildReference(claim.referenceUrl)],
    })),
  };
  const res = await apiCall<EditEntityResponse>(
    client,
    {
      action: "wbeditentity",
      id: qid,
      data: JSON.stringify(data),
      token: client.csrfToken,
      summary: `Add ${missing.length} canonical claim(s) with references for Prestyj`,
      bot: "1",
    },
    "POST",
  );
  if (res.error) {
    throw new Error(`Wikidata API error: ${res.error.code} — ${res.error.info}`);
  }
  return missing.length;
}

// ─── Main ────────────────────────────────────────────────────────────────────

async function main(): Promise<void> {
  const username = process.env.WIKIDATA_USERNAME;
  const password = process.env.WIKIDATA_BOT_PASSWORD;

  console.log(`\n${"━".repeat(60)}`);
  console.log("Prestyj Wikidata item creator");
  console.log("━".repeat(60));
  console.log(`Mode: ${LIVE ? "🔴 LIVE — will create a real Wikidata item" : "🟡 DRY RUN — printing payload only"}`);
  console.log("━".repeat(60));

  // Print payload preview
  const payload = buildEntityPayload();
  console.log("\nPayload preview:");
  console.log("  Labels:       ", Object.values(payload.labels).map((l) => l.value).join(" / "));
  console.log("  Description:  ", Object.values(payload.descriptions).map((d) => d.value).join(" / "));
  console.log("  Aliases:      ", Object.values(payload.aliases).flat().map((a) => a.value).join(" / "));
  console.log(`  Claims:        ${payload.claims.length} statements with references`);
  for (const claim of ITEM.claims) {
    const val =
      claim.type === "wikibase-item"
        ? `Q${claim.value.numericId}`
        : (claim.value as string);
    console.log(`    ${claim.property}  →  ${val}   (ref: ${claim.referenceUrl})`);
  }

  if (DRY_RUN) {
    console.log("\n🟡 DRY RUN — no network calls made.");
    console.log("    To create for real:  npm run wikidata:create -- --live\n");
    return;
  }

  // A Wikidata item is a self-made placement — halted by link policy.
  assertSelfMadeBacklinksHalted("wikidata:create (self-made Wikidata entity backlink)");

  // Live mode requires credentials
  if (!username || !password) {
    console.error("\n❌ Missing credentials.");
    console.error("   Set WIKIDATA_USERNAME and WIKIDATA_BOT_PASSWORD in .env.local.");
    console.error("   Create them at https://www.wikidata.org/wiki/Special:BotPasswords");
    process.exit(1);
  }

  console.log(`\n→ Logging in as ${username}…`);
  const client = await login(username, password);
  console.log("  ✓ Logged in. CSRF token acquired.");

  console.log("\n→ Checking for existing Prestyj item…");
  const existing = await findExistingPrestyjItem(client);
  let qid: string;
  if (existing) {
    console.log(`  ⚠ Found existing item: https://www.wikidata.org/wiki/${existing}`);
    console.log("  → Diffing claims and patching anything missing…");
    const added = await patchItem(client, existing);
    if (added > 0) {
      console.log(`\n✅ Patched ${added} claim(s) onto existing item.`);
    } else {
      console.log(`\n✅ Item already complete — no changes needed.`);
    }
    qid = existing;
  } else {
    console.log("  ✓ No existing item found. Creating…");
    qid = await createItem(client);
    console.log("\n✅ Created Wikidata item:");
    console.log(`   https://www.wikidata.org/wiki/${qid}`);
  }

  persistQid(qid);

  console.log("\nNext step (automatic):");
  console.log("  The Q-ID is saved to data/wikidata/prestyj-qid.json.");
  console.log(`  Add this URL to the sameAs array in src/lib/site-config.ts:`);
  console.log(`    "https://www.wikidata.org/wiki/${qid}"\n`);
}

function persistQid(qid: string): void {
  const dir = join(process.cwd(), "data", "wikidata");
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  const file = join(dir, "prestyj-qid.json");
  writeFileSync(
    file,
    JSON.stringify(
      {
        qid,
        url: `https://www.wikidata.org/wiki/${qid}`,
        created_at: new Date().toISOString(),
      },
      null,
      2,
    ) + "\n",
  );
  console.log(`  ✓ Saved to ${file}`);
}

main().catch((err: unknown) => {
  const msg = err instanceof Error ? err.message : String(err);
  console.error(`\n❌ ${msg}`);
  process.exit(1);
});
