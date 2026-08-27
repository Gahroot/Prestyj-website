import type { FAQItem } from "@/lib/faq-data";

export const homepageFaqs: FAQItem[] = [
  {
    question: "What does Prestyj actually do?",
    answer:
      "Prestyj builds and runs AI agents that complete defined work inside an institutional real estate firm: diligence, quarter-end support, waterfall explanation, investor reporting, portfolio questions, origination coverage, and listing materials. You receive the reviewed work product, not a generic chatbot or seat license.",
  },
  {
    question: "Who is this for?",
    answer:
      "Real estate investment funds from roughly $500M AUM, commercial brokerages, and CRE owner-operators. The common trait is operating complexity large enough that recurring work now spans multiple systems, teams, and review gates.",
  },
  {
    question: "Does Prestyj replace our system of record?",
    answer:
      "No. Your ledger, property platform, VDR, CRM, and document systems remain authoritative. Prestyj sits above them, performs the defined work, preserves source lineage, and routes material conflicts to the person responsible for resolving them.",
  },
  {
    question: "Where does the data live, and who can see it?",
    answer:
      "Deployment boundaries are scoped per engagement. The systems we build enforce tenant, fund, client, and investor access below the interface, with access denied by default. We document the data flow and hosting model before any production record moves.",
  },
  {
    question: "How do you keep the AI from inventing an answer?",
    answer:
      "Material answers retain the source and effective date behind them. When sources disagree, the conflict enters a review queue rather than being silently averaged. Anything released to an investor, committee, or market has a named human owner.",
  },
  {
    question: "Do you integrate with Yardi, MRI, Argus, or DealCloud?",
    answer:
      "Prestyj is built to work with the systems an engagement requires, but a vendor name on this site does not mean a partnership or a prebuilt live connector. We verify access, API limits, export quality, and implementation scope before promising an integration.",
  },
  {
    question: "What does an engagement look like?",
    answer:
      "We begin with one recurring workflow, its source systems, current work product, and review owner. The first proof runs beside the existing process and reconciles differences before anything replaces or publishes from it.",
  },
  {
    question: "What does it cost?",
    answer:
      "Engagements are scoped around the workflow, source systems, volume, and controls required. Pricing follows the analyst work and operational risk retired, not the number of users. We give you the number after we see the process.",
  },
];
