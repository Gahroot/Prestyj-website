export const INDUSTRY_STATS = {
  BUYER_FIRST_RESPONSE: {
    stat: "78%",
    description: "of buyers work with the first agent to respond",
  },
  LEADS_GO_COLD: {
    stat: "80%",
    description: "of leads go cold due to slow response times",
  },
  ISA_COST_MONTHLY: {
    stat: "$4k+/mo",
    description: "average cost of an ISA plus commission",
  },
  DEAD_LEAD_REACTIVATION: {
    stat: "23%",
    description: "of dead leads reactivate with proper outreach",
  },
  PRESTYJ_RESPONSE_TIME: {
    stat: "47 sec",
    description: "average Prestyj response time",
  },
} as const;

export const STANDARD_INDUSTRY_STATS = [
  INDUSTRY_STATS.BUYER_FIRST_RESPONSE,
  INDUSTRY_STATS.LEADS_GO_COLD,
  INDUSTRY_STATS.ISA_COST_MONTHLY,
];

export const REACTIVATION_STATS = [
  INDUSTRY_STATS.PRESTYJ_RESPONSE_TIME,
  INDUSTRY_STATS.DEAD_LEAD_REACTIVATION,
  INDUSTRY_STATS.LEADS_GO_COLD,
];
