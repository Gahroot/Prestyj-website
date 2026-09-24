import { afterEach, describe, expect, it, vi } from "vitest";
import {
  normalizeUsPhoneNumber,
  tribunalCallbackSchema,
  requestTribunalPhoneDemo,
} from "./tribunal-embed";

afterEach(() => vi.unstubAllGlobals());

describe("callback validation", () => {
  it.each(["2125550123", "(212) 555-0123", "+1 212 555 0123", "1-212-555-0123"])(
    "normalizes %s",
    (phone) => {
      expect(normalizeUsPhoneNumber(phone)).toMatchObject({
        ok: true,
        phoneNumber: "+12125550123",
      });
      expect(tribunalCallbackSchema.parse({ phone_number: phone, consent: true })).toEqual({
        phone_number: "+12125550123",
        consent: true,
      });
    },
  );
  it.each([
    "",
    "123",
    "0000000000",
    "2121550123",
    "call 2125550123",
    "+44 20 7946 0000",
    "2125550123 ext 1",
  ])("rejects %s", (phone) => {
    expect(tribunalCallbackSchema.safeParse({ phone_number: phone, consent: true }).success).toBe(
      false,
    );
  });
  it.each([false, undefined, "true", 1])("requires literal affirmative consent: %s", (consent) => {
    expect(tribunalCallbackSchema.safeParse({ phone_number: "2125550123", consent }).success).toBe(
      false,
    );
  });
  it("maps a rate limit without exposing provider text", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue(new Response("private provider details", { status: 429 })),
    );
    expect(
      await requestTribunalPhoneDemo({
        apiBase: "",
        publicId: "ag_L2rFuSnp",
        phoneNumber: "2125550123",
        consent: true,
      }),
    ).toEqual({ ok: false, reason: "rate-limited" });
  });
});
