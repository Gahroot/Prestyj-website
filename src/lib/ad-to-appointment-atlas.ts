export type FunnelBaselineInput = {
  adSpend: number;
  leads: number;
  conversations: number;
  bookedAppointments: number;
  keptAppointments: number;
  attributedRevenue: number;
};

export type FunnelBaseline = {
  costPerLead: number | null;
  leadToConversationRate: number | null;
  conversationToCalendarRate: number | null;
  keptAppointmentRate: number | null;
  costPerKeptAppointment: number | null;
  revenuePerLead: number | null;
};

export type FunnelBaselineValidation = {
  isValid: boolean;
  errors: string[];
};

function safeDivide(numerator: number, denominator: number): number | null {
  return denominator > 0 ? numerator / denominator : null;
}

export function calculateFunnelBaseline(input: FunnelBaselineInput): FunnelBaseline {
  return {
    costPerLead: safeDivide(input.adSpend, input.leads),
    leadToConversationRate: safeDivide(input.conversations, input.leads),
    conversationToCalendarRate: safeDivide(input.bookedAppointments, input.conversations),
    keptAppointmentRate: safeDivide(input.keptAppointments, input.bookedAppointments),
    costPerKeptAppointment: safeDivide(input.adSpend, input.keptAppointments),
    revenuePerLead: safeDivide(input.attributedRevenue, input.leads),
  };
}

export function validateFunnelBaseline(input: FunnelBaselineInput): FunnelBaselineValidation {
  const values = Object.values(input);
  const errors: string[] = [];

  if (values.some((value) => !Number.isFinite(value) || value < 0)) {
    errors.push("Enter zero or a positive number in every field.");
  }

  const countValues = [
    input.leads,
    input.conversations,
    input.bookedAppointments,
    input.keptAppointments,
  ];

  if (countValues.some((value) => !Number.isInteger(value))) {
    errors.push("Lead, conversation and appointment counts must be whole numbers.");
  }

  if (input.conversations > input.leads) {
    errors.push("Conversations cannot exceed leads.");
  }

  if (input.bookedAppointments > input.conversations) {
    errors.push("Booked appointments cannot exceed conversations.");
  }

  if (input.keptAppointments > input.bookedAppointments) {
    errors.push("Kept appointments cannot exceed booked appointments.");
  }

  return { isValid: errors.length === 0, errors };
}
