import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { checkInstitutionalContent } from "./check-institutional-content";
import { contentLedgerSchema } from "./institutional-ledger";
import { weeklyContentStatus } from "./institutional-weekly-status";
import { researchArticles } from "../../src/lib/institutional/research";

function ledger(): unknown {
  return JSON.parse(readFileSync("data/seo/institutional-content-backlog.json", "utf8"));
}
describe("institutional review gate", () => {
  it("validates all 18 complete artifacts without approving them", () => {
    expect(checkInstitutionalContent()).toEqual({
      errors: [],
      deliverables: 18,
      registered: researchArticles.length,
      pendingReviews: contentLedgerSchema
        .parse(ledger())
        .items.filter((item) => ["draft", "awaiting-review"].includes(item.state)).length,
    });
  });
  it("rejects approval without all required human review records", () => {
    const value = contentLedgerSchema.parse(ledger());
    const first = value.items[0];
    if (!first) throw new Error("Missing fixture");
    first.state = "approved";
    expect(contentLedgerSchema.safeParse(value).success).toBe(false);
  });
  it("rejects release claims while review is pending and stale approvals", () => {
    const value = contentLedgerSchema.parse(ledger());
    const first = value.items[0];
    if (!first) throw new Error("Missing fixture");
    first.state = "awaiting-review";
    first.liveVerifiedOn = "2026-09-24";
    expect(contentLedgerSchema.safeParse(value).success).toBe(false);
    first.liveVerifiedOn = null;
    first.reviews = [
      {
        role: "editorial",
        reviewer: "Test reviewer",
        date: "2026-09-01",
        evidence: "Test fixture",
      },
    ];
    expect(contentLedgerSchema.safeParse(value).success).toBe(false);
  });
  it("requires source evidence, not only dates, for live and measured states", () => {
    const value = contentLedgerSchema.parse(ledger());
    const first = value.items[0];
    if (!first) throw new Error("Missing fixture");
    first.reviews = first.reviewRequirements.map((role) => ({
      role,
      reviewer: "Test reviewer",
      date: "2026-09-24",
      evidence: "Test fixture only",
    }));
    first.state = "live-verified";
    first.releasePreparedOn = "2026-09-24";
    first.liveVerifiedOn = "2026-09-24";
    expect(contentLedgerSchema.safeParse(value).success).toBe(false);
    first.liveEvidence = {
      url: `https://prestyj.com/blog/${first.slug}`,
      deploymentId: "test-only",
      evidence: "Test fixture only",
    };
    expect(contentLedgerSchema.safeParse(value).success).toBe(true);
    first.state = "measured";
    first.measuredOn = "2026-09-24";
    expect(contentLedgerSchema.safeParse(value).success).toBe(false);
    first.measurementEvidence = {
      source: "Test fixture only",
      reportingStart: "2026-09-24",
      reportingEnd: "2026-09-24",
      evidence: "Test fixture only",
    };
    expect(contentLedgerSchema.safeParse(value).success).toBe(true);
    first.measurementEvidence.reportingEnd = "2026-09-25";
    expect(contentLedgerSchema.safeParse(value).success).toBe(false);
  });
  it("rejects duplicate IDs and impossible dates", () => {
    const value = contentLedgerSchema.parse(ledger());
    const first = value.items[0];
    const second = value.items[1];
    if (!first || !second) throw new Error("Missing fixture");
    second.id = first.id;
    expect(contentLedgerSchema.safeParse(value).success).toBe(false);
    second.id = "IG-02";
    second.targetDate = "2026-02-30";
    expect(contentLedgerSchema.safeParse(value).success).toBe(false);
  });
  it("reports overdue tasks and two upcoming slots without rescheduling", () => {
    const value = contentLedgerSchema.parse(ledger());
    const before = JSON.stringify(value);
    const report = weeklyContentStatus(value, "2026-10-02");
    expect(report.overdue).toHaveLength(2);
    expect(report.upcoming).toHaveLength(2);
    expect(report.upcoming[0]).toContain("2026-10-06");
    expect(JSON.stringify(value)).toBe(before);
  });
});
