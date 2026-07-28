import { beforeEach, describe, expect, it, vi } from "vitest";
import { NextRequest } from "next/server";

const mocks = vi.hoisted(() => ({
  findUnique: vi.fn(),
  update: vi.fn(),
  cancel: vi.fn(),
}));

vi.mock("@/lib/prisma", () => ({
  prisma: {
    aiFirstAudit: {
      findUnique: mocks.findUnique,
      update: mocks.update,
    },
  },
}));

vi.mock("@/lib/resend", () => ({
  getResend: () => ({ emails: { cancel: mocks.cancel } }),
}));

import { POST } from "@/app/api/ai-first-audit/unsubscribe/[token]/route";

beforeEach(() => {
  vi.clearAllMocks();
  mocks.findUnique.mockResolvedValue({
    id: "audit-1",
    scheduledEmailIds: ["scheduled-1", "scheduled-2", 42, ""],
  });
  mocks.update.mockResolvedValue({ id: "audit-1" });
  mocks.cancel.mockResolvedValue({ data: { id: "cancelled" }, error: null });
});

describe("AI-First Audit unsubscribe", () => {
  it("records the opt-out and cancels every valid scheduled message", async () => {
    const request = new NextRequest(
      "https://prestyj.com/api/ai-first-audit/unsubscribe/abcdefghijklmnopqrstuvwxyz123456",
      { method: "POST" },
    );
    const response = await POST(request, {
      params: Promise.resolve({ token: "abcdefghijklmnopqrstuvwxyz123456" }),
    });

    expect(response.status).toBe(200);
    expect(mocks.update).toHaveBeenCalledWith({
      where: { id: "audit-1" },
      data: {
        unsubscribedAt: expect.any(Date),
        scheduledEmailIds: [],
        emailsScheduled: false,
      },
    });
    expect(mocks.cancel).toHaveBeenCalledTimes(2);
    expect(mocks.cancel).toHaveBeenNthCalledWith(1, "scheduled-1");
    expect(mocks.cancel).toHaveBeenNthCalledWith(2, "scheduled-2");
  });

  it("does not query the database for a malformed token", async () => {
    const request = new NextRequest(
      "https://prestyj.com/api/ai-first-audit/unsubscribe/bad",
      { method: "POST" },
    );
    const response = await POST(request, { params: Promise.resolve({ token: "bad" }) });

    expect(response.status).toBe(404);
    expect(mocks.findUnique).not.toHaveBeenCalled();
    expect(mocks.cancel).not.toHaveBeenCalled();
  });
});
