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
  /** Headline shown in the section */
  sectionTitle: string;
  /** Subtitle shown in the section */
  sectionDescription: string;
  /** CTA button label on the final contact step */
  ctaLabel: string;
  /** Message shown after successful submission */
  successMessage: string;
  /** Label for the contact step name field */
  contactPrompt: string;
  formSteps: FormStep[];
}

export const DEMO_AGENTS: DemoAgent[] = [
  {
    publicId: "ag_LXptHpWq",
    name: "Rachel",
    company: "Dobi Real Estate",
    description: "Southeast Michigan's premier real estate brokerage",
    color: "#2563eb",
    icon: "🏢",
    sectionTitle: "Find Your Dream Home in Southeast Michigan",
    sectionDescription:
      "Tell us what you're looking for and a Dobi agent will reach out to help you get started.",
    ctaLabel: "Connect With an Agent",
    successMessage: "A Dobi agent will be in touch shortly!",
    contactPrompt: "Let's get you connected with an agent",
    formSteps: [
      {
        id: "inquiry",
        question: "How can we help you today?",
        type: "select",
        options: [
          { value: "Join the brokerage", label: "Join the brokerage" },
          { value: "Speak to an agent", label: "Speak to an agent" },
          { value: "Property inquiry", label: "Property inquiry" },
          { value: "General question", label: "General question" },
        ],
      },
      {
        id: "area",
        question: "What area are you in?",
        type: "select",
        options: [
          { value: "Troy", label: "Troy" },
          { value: "Birmingham", label: "Birmingham" },
          { value: "Bloomfield Hills", label: "Bloomfield Hills" },
          { value: "Rochester", label: "Rochester" },
          { value: "Royal Oak", label: "Royal Oak" },
          { value: "Other SE Michigan", label: "Other SE Michigan" },
        ],
      },
    ],
  },
  {
    publicId: "ag_l28wHbyl",
    name: "Amy",
    company: "Marian Grout Real Estate",
    description: "Your trusted local real estate expert",
    color: "#7c3aed",
    icon: "🏠",
    sectionTitle: "Ready to Buy or Sell? Let's Talk",
    sectionDescription:
      "Answer a couple quick questions and we'll match you with the right support for your move.",
    ctaLabel: "Get Started",
    successMessage: "We'll be reaching out to you shortly!",
    contactPrompt: "Enter your details to get started",
    formSteps: [
      {
        id: "intent",
        question: "Are you looking to buy or sell?",
        type: "select",
        options: [
          { value: "Buy a home", label: "Buy a home" },
          { value: "Sell my home", label: "Sell my home" },
          { value: "Both", label: "Both" },
          { value: "Just exploring", label: "Just exploring" },
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
          { value: "Not sure yet", label: "Not sure yet" },
        ],
      },
    ],
  },
  {
    publicId: "ag_72ObhPOO",
    name: "Tina",
    company: "22 Title",
    description: "Fast, reliable title & closing services",
    color: "#059669",
    icon: "📋",
    sectionTitle: "Need Help With Your Title or Closing?",
    sectionDescription:
      "Whether you're placing a new order or checking on an existing one, we're here to help.",
    ctaLabel: "Request More Info",
    successMessage: "Our team will follow up with you shortly!",
    contactPrompt: "Let us know how to reach you",
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
    description: "Quality residential construction & remodeling",
    color: "#dc2626",
    icon: "🏗️",
    sectionTitle: "Get a Free Quote for Your Next Project",
    sectionDescription:
      "Tell us about your project and timeline — we'll put together a custom estimate for you.",
    ctaLabel: "Get My Quote",
    successMessage: "We're preparing your estimate — expect to hear from us soon!",
    contactPrompt: "Where should we send your quote?",
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
