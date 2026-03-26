export interface FormStep {
  id: string;
  question: string;
  type: "select" | "text";
  options?: { value: string; label: string }[];
  placeholder?: string;
}

export interface DemoAgent {
  publicId: string;
  name: string;
  company: string;
  description: string;
  color: string;
  icon: string;
  formSteps: FormStep[];
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
    formSteps: [
      {
        id: "intent",
        question: "Are you looking to buy or sell?",
        type: "select",
        options: [
          { value: "buy", label: "Buy a property" },
          { value: "sell", label: "Sell my property" },
          { value: "both", label: "Both — buy and sell" },
          { value: "invest", label: "Investment property" },
        ],
      },
      {
        id: "area",
        question: "What area are you interested in?",
        type: "select",
        options: [
          { value: "Troy", label: "Troy" },
          { value: "Birmingham", label: "Birmingham" },
          { value: "Bloomfield Hills", label: "Bloomfield Hills" },
          { value: "Rochester", label: "Rochester" },
          { value: "Royal Oak", label: "Royal Oak" },
          { value: "Novi", label: "Novi" },
          { value: "West Bloomfield", label: "West Bloomfield" },
          { value: "Other SE Michigan", label: "Other SE Michigan" },
        ],
      },
    ],
  },
  {
    publicId: "ag_l28wHbyl",
    name: "Amy",
    company: "Marian Grout Real Estate",
    description:
      "Personal realtor assistant — schedules showings, takes messages",
    color: "#7c3aed",
    icon: "🏠",
    formSteps: [
      {
        id: "propertyType",
        question: "What type of property?",
        type: "select",
        options: [
          { value: "Single family home", label: "Single Family Home" },
          { value: "Condo", label: "Condo" },
          { value: "Townhome", label: "Townhome" },
          { value: "Multi-family", label: "Multi-Family" },
        ],
      },
      {
        id: "timeline",
        question: "What's your timeline?",
        type: "select",
        options: [
          { value: "ASAP", label: "ASAP" },
          { value: "1-3 months", label: "1–3 months" },
          { value: "3-6 months", label: "3–6 months" },
          { value: "Just exploring", label: "Just exploring" },
        ],
      },
    ],
  },
  {
    publicId: "ag_72ObhPOO",
    name: "Tina",
    company: "22 Title",
    description:
      "Title company receptionist — checks order status, answers closing questions",
    color: "#059669",
    icon: "📋",
    formSteps: [
      {
        id: "reason",
        question: "What can we help with?",
        type: "select",
        options: [
          { value: "New title order", label: "Place a new title order" },
          { value: "Check order status", label: "Check on an existing order" },
          { value: "Closing questions", label: "Questions about my closing" },
          { value: "General inquiry", label: "General inquiry" },
        ],
      },
      {
        id: "address",
        question: "Property address (if applicable)",
        type: "text",
        placeholder: "e.g. 123 Main St, Troy, MI",
      },
    ],
  },
  {
    publicId: "ag_g0bjj8NZ",
    name: "Mike",
    company: "Rhino Building Company",
    description:
      "Residential construction lead handler — qualifies projects & budgets",
    color: "#dc2626",
    icon: "🏗️",
    formSteps: [
      {
        id: "projectType",
        question: "What kind of project?",
        type: "select",
        options: [
          { value: "Kitchen remodel", label: "Kitchen Remodel" },
          { value: "Bathroom remodel", label: "Bathroom Remodel" },
          { value: "Basement finish", label: "Basement Finish" },
          { value: "Addition", label: "Home Addition" },
          { value: "New construction", label: "New Construction" },
          { value: "Whole home renovation", label: "Whole Home Renovation" },
          { value: "Other", label: "Other" },
        ],
      },
      {
        id: "timeline",
        question: "When are you looking to start?",
        type: "select",
        options: [
          { value: "ASAP", label: "ASAP" },
          { value: "1-3 months", label: "1–3 months" },
          { value: "3-6 months", label: "3–6 months" },
          { value: "Just getting estimates", label: "Just getting estimates" },
        ],
      },
    ],
  },
];
