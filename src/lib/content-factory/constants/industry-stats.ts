// Stats are industry-neutral by default — these strings ship on dozens of
// pages spanning real estate, home services, agencies, and B2B. If a page
// needs vertical-specific phrasing, pass an explicit array instead of
// reusing these constants.
export const INDUSTRY_STATS = {
  FIRST_RESPONDER_WINS: {
    stat: "78%",
    description: "of customers buy from the company that responds first",
  },
  LEADS_GO_COLD: {
    stat: "80%",
    description: "of leads go cold due to slow response times",
  },
  HUMAN_REP_COST_MONTHLY: {
    stat: "$4k+/mo",
    description: "average loaded cost of a single inside sales rep",
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
  INDUSTRY_STATS.FIRST_RESPONDER_WINS,
  INDUSTRY_STATS.LEADS_GO_COLD,
  INDUSTRY_STATS.HUMAN_REP_COST_MONTHLY,
];

export const REACTIVATION_STATS = [
  INDUSTRY_STATS.PRESTYJ_RESPONSE_TIME,
  INDUSTRY_STATS.DEAD_LEAD_REACTIVATION,
  INDUSTRY_STATS.LEADS_GO_COLD,
];
