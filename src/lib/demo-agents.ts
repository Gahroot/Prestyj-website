export interface DemoAgent {
  publicId: string;
  name: string;
  company: string;
  description: string;
  color: string;
  icon: string;
}

export const DEMO_AGENTS: DemoAgent[] = [
  {
    publicId: "ag_LXptHpWq",
    name: "Rachel",
    company: "Dobi Real Estate",
    description:
      "Brokerage receptionist — qualifies buyers & sellers, routes to agents",
    color: "#2563eb",
    icon: "🏢",
  },
  {
    publicId: "ag_l28wHbyl",
    name: "Amy",
    company: "Marian Grout Real Estate",
    description:
      "Personal realtor assistant — schedules showings, takes messages",
    color: "#7c3aed",
    icon: "🏠",
  },
  {
    publicId: "ag_72ObhPOO",
    name: "Tina",
    company: "22 Title",
    description:
      "Title company receptionist — checks order status, answers closing questions",
    color: "#059669",
    icon: "📋",
  },
  {
    publicId: "ag_g0bjj8NZ",
    name: "Mike",
    company: "Rhino Building Company",
    description:
      "Residential construction lead handler — qualifies projects & budgets",
    color: "#dc2626",
    icon: "🏗️",
  },
];
