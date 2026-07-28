import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { NextRequest } from "next/server";
import { RESULT_V2_FIXTURE } from "./fixtures/results";

const mocks = vi.hoisted(() => ({
  findUnique: vi.fn(),
  auditUpdate: vi.fn(),
  transaction: vi.fn(),
  leadFindFirst: vi.fn(),
  leadCreate: vi.fn(),
  leadUpdate: vi.fn(),
  auditCreate: vi.fn(),
  sendAuditEmails: vi.fn(),
}));

vi.mock("@/lib/prisma", () => ({
  prisma: {
    aiFirstAudit: {
      findUnique: mocks.findUnique,
      update: mocks.auditUpdate,
    },
    $transaction: mocks.transaction,
  },
}));

vi.mock("@/lib/ai-first-audit/email/send", () => ({
  sendAuditEmailsV2: mocks.sendAuditEmails,
}));

import { POST } from "@/app/api/ai-first-audit/complete/route";

const submissionKey = "a38b04c6-778f-42bb-a8e5-90cd187869d2";
const workflows = [
  RESULT_V2_FIXTURE.workflows[0]!.input,
  RESULT_V2_FIXTURE.workflows[1]!.input,
  RESULT_V2_FIXTURE.workflows[2]!.input,
];

function request(): NextRequest {
  return new NextRequest("https://prestyj.com/api/ai-first-audit/complete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      profile: RESULT_V2_FIXTURE.profile,
      workflows,
      contact: { firstName: "Jordan", workEmail: "jordan@example.com" },
      consent: { followupOptIn: false },
      submissionKey,
      companyWebsite: "",
      completionTimeMs: 60_000,
    }),
  });
}

const existingAudit = {
  id: "audit-1",
  shareSlug: "same-report",
  unsubscribeToken: "abcdefghijklmnopqrstuvwxyz123456",
  resultJson: RESULT_V2_FIXTURE,
  lead: { email: "jordan@example.com", firstName: "Jordan" },
};

beforeEach(() => {
  vi.clearAllMocks();
  vi.stubGlobal("fetch", vi.fn().mockResolvedValue(new Response(null, { status: 200 })));
  mocks.findUnique.mockResolvedValueOnce(null).mockResolvedValue(existingAudit);
  mocks.leadFindFirst.mockResolvedValue(null);
  mocks.leadCreate.mockResolvedValue({ id: "lead-1" });
  mocks.auditCreate.mockResolvedValue({ id: "audit-1", shareSlug: "same-report" });
  mocks.auditUpdate.mockResolvedValue({ id: "audit-1" });
  mocks.sendAuditEmails.mockResolvedValue({ reportSent: true, scheduledIds: [] });
  mocks.transaction.mockImplementation(async (callback: (transaction: unknown) => unknown) =>
    callback({
      leadMagnetLead: {
        findFirst: mocks.leadFindFirst,
        create: mocks.leadCreate,
        update: mocks.leadUpdate,
      },
      aiFirstAudit: { create: mocks.auditCreate },
    }),
  );
});

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("AI-First Audit completion idempotency", () => {
  it("returns the same report and creates one audit for a repeated submission key", async () => {
    const firstResponse = await POST(request());
    const secondResponse = await POST(request());
    const firstBody = (await firstResponse.json()) as { reportUrl: string };
    const secondBody = (await secondResponse.json()) as { reportUrl: string };

    expect(firstResponse.status).toBe(200);
    expect(secondResponse.status).toBe(200);
    expect(firstBody.reportUrl).toBe("/ai-first-audit/r/same-report");
    expect(secondBody.reportUrl).toBe(firstBody.reportUrl);
    expect(mocks.transaction).toHaveBeenCalledTimes(1);
    expect(mocks.auditCreate).toHaveBeenCalledTimes(1);
    expect(mocks.auditCreate.mock.calls[0]?.[0].data.submissionKey).toBe(submissionKey);
  });
});
