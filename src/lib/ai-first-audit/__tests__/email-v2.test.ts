import { beforeEach, describe, expect, it, vi } from "vitest";
import { buildAuditEmailSequenceV2 } from "../email/templates";
import { sendAuditEmailsV2 } from "../email/send";
import { RESULT_V2_FIXTURE } from "./fixtures/results";

const mocks = vi.hoisted(() => ({
  send: vi.fn(),
}));

vi.mock("@/lib/resend", () => ({
  getResend: () => ({ emails: { send: mocks.send } }),
}));

beforeEach(() => {
  mocks.send.mockReset();
  mocks.send.mockResolvedValue({ data: { id: "email-id" }, error: null });
});

const context = {
  firstName: '<img src=x onerror="alert(1)">',
  result: {
    ...RESULT_V2_FIXTURE,
    topThree: [
      {
        ...RESULT_V2_FIXTURE.topThree[0]!,
        input: {
          ...RESULT_V2_FIXTURE.topThree[0]!.input,
          title: '<script>alert("workflow")</script>',
        },
      },
      ...RESULT_V2_FIXTURE.topThree.slice(1),
    ],
  },
  shareSlug: "safe-slug",
  unsubscribeToken: "safe-token",
  baseUrl: "https://prestyj.com",
} as const;

describe("version 2 audit emails", () => {
  it("renders four short messages and escapes contact and custom workflow HTML", () => {
    const messages = buildAuditEmailSequenceV2(context);
    expect(messages).toHaveLength(4);
    expect(messages[0]?.html).not.toContain("<script>");
    expect(messages[0]?.html).not.toContain("<img src=x");
    expect(messages[0]?.html).toContain("&lt;script&gt;");
    for (const message of messages) {
      expect(message.text.trim().split(/\s+/).length).toBeLessThan(120);
    }
  });

  it("sends only the requested report without follow-up consent", async () => {
    const output = await sendAuditEmailsV2({
      auditId: "audit-1",
      to: "jordan@example.com",
      firstName: "Jordan",
      result: RESULT_V2_FIXTURE,
      shareSlug: "safe-slug",
      unsubscribeToken: "safe-token",
      followupOptIn: false,
      now: new Date("2026-07-27T00:00:00.000Z"),
    });
    expect(mocks.send).toHaveBeenCalledTimes(1);
    expect(output.scheduledIds).toEqual([]);
  });

  it("schedules three follow-ups with one-click unsubscribe headers after consent", async () => {
    const output = await sendAuditEmailsV2({
      auditId: "audit-1",
      to: "jordan@example.com",
      firstName: "Jordan",
      result: RESULT_V2_FIXTURE,
      shareSlug: "safe-slug",
      unsubscribeToken: "safe-token",
      followupOptIn: true,
      now: new Date("2026-07-27T00:00:00.000Z"),
    });
    expect(mocks.send).toHaveBeenCalledTimes(4);
    expect(output.scheduledIds).toHaveLength(3);
    const followupPayload = mocks.send.mock.calls[1]?.[0];
    expect(followupPayload.scheduledAt).toBe("2026-07-28T00:00:00.000Z");
    expect(followupPayload.headers).toEqual({
      "List-Unsubscribe": "<https://prestyj.com/api/ai-first-audit/unsubscribe/safe-token>",
      "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
    });
  });
});
