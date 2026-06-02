#!/usr/bin/env npx tsx
/**
 * Safe/free backlink outreach wave helper.
 *
 * Uses only explicitly public recipient emails already present in local docs or
 * verified official pages, supports dry-run/limit, and appends a JSONL audit log.
 */

import { appendFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";
import { createHash } from "node:crypto";
import { config as loadEnv } from "dotenv";
import { Resend } from "resend";

loadEnv({ path: ".env.local" });
loadEnv();

type Status = "sent" | "blocked" | "dry-run" | "skipped";

interface Target {
  id: string;
  targetName: string;
  targetUrl: string;
  domain: string;
  toEmail: string;
  sourceEvidenceUrl: string;
  artifactPath: string;
  subject: string;
  body: string;
}

interface InventoryItem {
  id: string;
  bucket: string;
  target_url: string;
  status: string;
  first_seen?: string;
  artifact_path?: string;
  notes?: string;
}

interface Inventory {
  items: InventoryItem[];
}

const OUTREACH_LOG = "data/backlinks/placements/free-100-outreach-2026-05-26.jsonl";
const INVENTORY_PATH = "data/backlinks/inventory.json";
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? "Nolan Grout <nolan@prestyj.com>";
const TODAY = "2026-05-26";

const TARGETS: Target[] = [
  {
    id: "resend-housingwire-free100-2026-05-26",
    targetName: "HousingWire",
    targetUrl: "https://www.housingwire.com",
    domain: "housingwire.com",
    toEmail: "editor@housingwire.com",
    sourceEvidenceUrl: "docs/backlinks/opportunities.md:196; docs/backlinks/free-100-targets.md:118",
    artifactPath: "docs/backlinks/pitch-drafts/press/housingwire-tech.md",
    subject: "Real estate lead response data for HousingWire",
    body:
      "Hi HousingWire team,\n\nSharing a free, source-linked dataset that may help with future real estate technology and lead-response coverage: https://prestyj.com/data\n\nIt includes CSV/JSON access, CC BY 4.0 reuse terms, schema.org Dataset markup, and real-estate-relevant benchmarks on speed-to-lead, AI sales agents, and lead follow-up. A few useful stats: only 0.1% of inbound leads get a 5-minute response, 77% never get any response, and companies responding in 5 minutes are 21x more likely to qualify a lead than those waiting 30 minutes.\n\nIf it is useful for a future article or resource page, attribution to the dataset URL is appreciated.\n\nThanks,\nNolan Grout\nPrestyj\nhttps://prestyj.com\n",
  },
  {
    id: "resend-inman-free100-2026-05-26",
    targetName: "Inman",
    targetUrl: "https://www.inman.com",
    domain: "inman.com",
    toEmail: "tips@inman.com",
    sourceEvidenceUrl: "docs/backlinks/opportunities.md:198; docs/backlinks/free-100-targets.md:119",
    artifactPath: "docs/backlinks/pitch-drafts/press/inman-tips.md",
    subject: "Tip: open real estate lead-response benchmark dataset",
    body:
      "Hi Inman team,\n\nA quick data tip for future brokerage tech / lead-response coverage: Prestyj published an open benchmark dataset at https://prestyj.com/data\n\nThe dataset is free to cite and reuse under CC BY 4.0, with CSV/JSON downloads and source notes per row. It includes real-estate-relevant benchmarks such as 0.1% of inbound leads receiving a 5-minute response, 77% receiving no response, and the 21x qualification lift associated with 5-minute follow-up versus 30-minute follow-up.\n\nIf useful for a story or resource, attribution to https://prestyj.com/data is appreciated.\n\nThanks,\nNolan Grout\nPrestyj\nhttps://prestyj.com\n",
  },
];

function parseArgs() {
  const args = process.argv.slice(2);
  return {
    dryRun: args.includes("--dry-run"),
    limit: Number(args.find((arg) => arg.startsWith("--limit="))?.split("=")[1] ?? TARGETS.length),
  };
}

function emailHash(email: string) {
  return createHash("sha256").update(email.toLowerCase()).digest("hex").slice(0, 16);
}

function appendLog(entry: Record<string, unknown>) {
  mkdirSync(dirname(OUTREACH_LOG), { recursive: true });
  appendFileSync(OUTREACH_LOG, `${JSON.stringify(entry)}\n`);
}

function loadInventory(): Inventory {
  return JSON.parse(readFileSync(INVENTORY_PATH, "utf8")) as Inventory;
}

function saveInventory(inventory: Inventory) {
  writeFileSync(INVENTORY_PATH, `${JSON.stringify(inventory, null, 2)}\n`);
}

function markInventory(target: Target, status: Status, resendId?: string) {
  const inventory = loadInventory();
  const existing = inventory.items.find((item) => item.id === target.id);
  const notes = `${status === "sent" ? "Sent" : "Prepared"} via safe/free outreach wave using public recipient ${target.toEmail} from ${FROM_EMAIL}; expected backlink if covered/cited: ${target.targetUrl}; artifact: ${target.artifactPath}; log: ${OUTREACH_LOG}${resendId ? `; resend_id: ${resendId}` : ""}.`;
  if (existing) {
    existing.status = status === "sent" ? "sent" : existing.status;
    existing.notes = notes;
    existing.artifact_path = target.artifactPath;
  } else {
    inventory.items.push({
      id: target.id,
      bucket: "press",
      target_url: target.targetUrl,
      status: status === "sent" ? "sent" : "drafted",
      first_seen: TODAY,
      artifact_path: target.artifactPath,
      notes,
    });
  }
  saveInventory(inventory);
}

async function main() {
  const { dryRun, limit } = parseArgs();
  const key = process.env.RESEND_API_KEY;
  const selected = TARGETS.slice(0, Math.max(0, limit));
  const resend = key && !dryRun ? new Resend(key) : null;

  for (const target of selected) {
    if (!existsSync(target.artifactPath)) {
      appendLog({ date: TODAY, target: target.targetName, recipient_domain: target.domain, email_hash: emailHash(target.toEmail), status: "blocked", reason: "missing artifact", artifact_path: target.artifactPath });
      continue;
    }

    if (!resend) {
      appendLog({ date: TODAY, target: target.targetName, recipient_domain: target.domain, public_address: target.toEmail, email_hash: emailHash(target.toEmail), status: dryRun ? "dry-run" : "blocked", reason: dryRun ? "dry run" : "RESEND_API_KEY missing", artifact_path: target.artifactPath, subject: target.subject });
      markInventory(target, dryRun ? "dry-run" : "blocked");
      continue;
    }

    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: target.toEmail,
      subject: target.subject,
      text: target.body,
    });

    if (error) {
      appendLog({ date: TODAY, target: target.targetName, recipient_domain: target.domain, public_address: target.toEmail, email_hash: emailHash(target.toEmail), status: "blocked", reason: error.message, artifact_path: target.artifactPath, subject: target.subject });
      markInventory(target, "blocked");
      continue;
    }

    appendLog({ date: TODAY, target: target.targetName, target_url: target.targetUrl, recipient_domain: target.domain, public_address: target.toEmail, email_hash: emailHash(target.toEmail), status: "sent", resend_id: data?.id, artifact_path: target.artifactPath, source_evidence_url: target.sourceEvidenceUrl, subject: target.subject });
    markInventory(target, "sent", data?.id);
  }
}

void main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
