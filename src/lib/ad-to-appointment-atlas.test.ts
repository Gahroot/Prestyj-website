import { describe, expect, it } from "vitest";

import { calculateFunnelBaseline, validateFunnelBaseline } from "@/lib/ad-to-appointment-atlas";

describe("calculateFunnelBaseline", () => {
  it("calculates each funnel metric from the supplied values", () => {
    expect(
      calculateFunnelBaseline({
        adSpend: 5_000,
        leads: 100,
        conversations: 60,
        bookedAppointments: 30,
        keptAppointments: 24,
        attributedRevenue: 18_000,
      }),
    ).toEqual({
      costPerLead: 50,
      leadToConversationRate: 0.6,
      conversationToCalendarRate: 0.5,
      keptAppointmentRate: 0.8,
      costPerKeptAppointment: 5000 / 24,
      revenuePerLead: 180,
    });
  });

  it("returns null when a metric has no denominator", () => {
    expect(
      calculateFunnelBaseline({
        adSpend: 0,
        leads: 0,
        conversations: 0,
        bookedAppointments: 0,
        keptAppointments: 0,
        attributedRevenue: 0,
      }),
    ).toEqual({
      costPerLead: null,
      leadToConversationRate: null,
      conversationToCalendarRate: null,
      keptAppointmentRate: null,
      costPerKeptAppointment: null,
      revenuePerLead: null,
    });
  });
});

describe("validateFunnelBaseline", () => {
  it("accepts an ordered non-negative funnel", () => {
    expect(
      validateFunnelBaseline({
        adSpend: 1_000,
        leads: 20,
        conversations: 15,
        bookedAppointments: 8,
        keptAppointments: 6,
        attributedRevenue: 4_000,
      }),
    ).toEqual({ isValid: true, errors: [] });
  });

  it("rejects fractional funnel counts", () => {
    const result = validateFunnelBaseline({
      adSpend: 1_000,
      leads: 10.5,
      conversations: 8,
      bookedAppointments: 4,
      keptAppointments: 3,
      attributedRevenue: 4_000,
    });

    expect(result.isValid).toBe(false);
    expect(result.errors).toContain(
      "Lead, conversation and appointment counts must be whole numbers.",
    );
  });

  it("reports impossible stage ordering", () => {
    const result = validateFunnelBaseline({
      adSpend: 1_000,
      leads: 10,
      conversations: 12,
      bookedAppointments: 13,
      keptAppointments: 14,
      attributedRevenue: 4_000,
    });

    expect(result.isValid).toBe(false);
    expect(result.errors).toHaveLength(3);
  });
});
