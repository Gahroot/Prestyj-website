import { afterEach, describe, expect, it, vi } from "vitest";
import { trackAuditEvent } from "@/lib/meta-pixel";

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("AI-First Audit analytics", () => {
  it("mirrors a custom event with only allowlisted funnel dimensions", () => {
    const fbq = vi.fn();
    const fetchMock = vi.fn().mockResolvedValue(new Response(null, { status: 200 }));
    vi.stubGlobal("window", {
      fbq,
      location: { href: "https://prestyj.com/ai-first-audit?step=preview" },
    });
    vi.stubGlobal("fetch", fetchMock);

    trackAuditEvent("AuditPreviewViewed", {
      businessType: "home-services",
      selectedWorkflowCount: 4,
      stepName: "preview",
      readinessBand: "Ready now",
    });

    const expectedData = {
      business_type: "home-services",
      selected_workflow_count: "4",
      step_name: "preview",
      result_readiness_band: "Ready now",
    };
    expect(fbq).toHaveBeenCalledWith(
      "trackCustom",
      "AuditPreviewViewed",
      expectedData,
      expect.objectContaining({ eventID: expect.any(String) }),
    );
    const capiBody = JSON.parse(fetchMock.mock.calls[0]?.[1]?.body as string) as {
      customData: Record<string, string>;
    };
    expect(capiBody.customData).toEqual(expectedData);
    expect(capiBody).not.toHaveProperty("email");
    expect(capiBody).not.toHaveProperty("firstName");
    expect(capiBody.customData).not.toHaveProperty("workflow_title");
    expect(capiBody.customData).not.toHaveProperty("annual_time_cost");
  });
});
