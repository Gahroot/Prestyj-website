import { createBestForPage } from "@/lib/content-factory";
import type { IconName } from "@/lib/content-factory";
import type { BestForPageContent } from "./types";

export const veterinaryClinics: BestForPageContent = createBestForPage({
  slug: "veterinary-clinics",
  niche: {
    name: "Veterinary Clinics",
    shortName: "Veterinary Clinics",
    description:
      "Veterinary practices seeking AI voice receptionist for 24/7 emergency call triage, appointment scheduling, and pet owner support",
  },
  meta: {
    title: "Veterinary AI Receptionist | Vet Clinic AI Answering Service | Prestyj",
    description:
      "AI voice receptionist for veterinary clinics. Handle 24/7 emergency call triage, schedule appointments, detect pet emergencies, and support multi-lingual clients. Never miss an emergency call, reduce staffing costs, and provide better care for pet owners.",
    keywords: [
      "veterinary AI receptionist",
      "vet clinic AI answering service",
      "veterinary phone system",
      "animal hospital AI receptionist",
      "veterinary call triage",
      "24/7 vet answering service",
      "vet clinic automation",
      "veterinary appointment scheduling AI",
      "pet emergency detection",
      "veterinary practice management",
    ],
  },
  hero: {
    badge: "Veterinary Practice AI",
    headlineAccent: "Veterinary Clinics",
    subheadline:
      "Pet emergencies don't follow business hours. AI voice receptionist handles every call 24/7, triages symptoms to detect true emergencies, schedules appointments, and supports pet owners in multiple languages. Never miss an emergency call again while reducing overhead and freeing staff for patient care.",
    pattern: "AI_AGENTS_BUILT_FOR",
  },
  whyBestFor: [
    {
      icon: "Phone" as IconName,
      title: "24/7 Emergency Call Triage",
      description:
        "Pet emergencies happen at 2 AM, weekends, holidays. AI answers every call immediately, asks targeted questions about symptoms, behavior changes, and timing. Detects true emergencies (GDV, trauma, respiratory distress, poisoning) and routes to on-call vet. Non-emergencies scheduled for next available. Pet owners get immediate response instead of voicemail.",
    },
    {
      icon: "Heart" as IconName,
      title: "Smart Emergency Detection",
      description:
        "AI trained on veterinary triage protocols identifies red flags: unproductive vomiting (potential GDV), difficulty breathing, toxin ingestion, seizure activity, hit-by-car trauma, collapse/syncope. Critical cases flagged for immediate vet contact. Reduces emergency room overflow while catching true emergencies fast.",
    },
    {
      icon: "Calendar" as IconName,
      title: "Appointment Scheduling & Reminders",
      description:
        "AI handles appointment booking, rescheduling, and confirmation calls. Sends multi-touch reminders 48 hours and 24 hours before visits via voice and text. Pet owners can confirm, reschedule, or cancel instantly. No-show rates drop from 18-22% to 6-10%. Vaccine reminders and wellness exam scheduling automated.",
    },
    {
      icon: "Globe" as IconName,
      title: "Multi-Lingual Pet Owner Support",
      description:
        "Veterinary clinics serve diverse communities. AI supports Spanish, Mandarin, Vietnamese, Tagalog, and more—explaining treatment options, post-procedure care, and medication instructions in pet owners' preferred language. No more language barriers affecting compliance or emergency assessment.",
    },
    {
      icon: "DollarSign" as IconName,
      title: "Cost Savings vs Hiring Staff",
      description:
        "Adding 24/7 reception staff costs $80K-120K annually per position. AI provides round-the-clock coverage for a fraction of the cost—essentially adding 2-3 full-time staff. Small practices and emergency clinics alike save money while improving response times.",
    },
    {
      icon: "Clock" as IconName,
      title: "Staff Productivity Gains",
      description:
        "Eliminates manual phone screening, appointment confirmation calls, prescription refill coordination, and intake paperwork. Veterinary technicians and front desk regain 15-20 hours per week to focus on in-clinic patient care, client education, and medical procedures.",
    },
  ],
  painPoints: [
    {
      problem: "Emergency calls coming in after hours with no one to answer",
      solution:
        "AI answers every call 24/7, identifies true emergencies (GDV signs, trauma, respiratory distress, toxin ingestion), and routes immediately to on-call veterinarian. Non-emergency after-hours calls are triaged and scheduled for next available appointment. Pet owners get immediate response instead of voicemail or being directed to emergency hospital unnecessarily.",
    },
    {
      problem: "Phone volume overwhelming front desk during peak hours",
      solution:
        "Busy veterinary practices receive 150-300+ calls daily. AI handles 80-90% automatically: appointment scheduling, prescription refill requests, vaccine reminders, general inquiries, and post-op follow-up questions. Front desk focuses on in-clinic clients, check-in/check-out, and payment processing.",
    },
    {
      problem: "Difficulty distinguishing true emergencies from routine concerns",
      solution:
        "AI asks veterinary-specific triage questions: duration of symptoms, behavior changes, gum color, respiratory rate, vomiting frequency, toxin exposure timing. Red flags trigger immediate escalation. Non-urgent cases scheduled appropriately. Reduces unnecessary emergency hospital referrals while catching true emergencies faster.",
    },
    {
      problem: "Language barriers affecting pet care compliance",
      solution:
        "Multi-lingual AI support explains discharge instructions, medication dosing, post-operative care, and follow-up recommendations in pet owners' preferred language. Better understanding improves compliance and outcomes. No more relying on family members to translate complex medical information.",
    },
    {
      problem: "Appointment no-shows wasting valuable appointment slots",
      solution:
        "AI sends multi-touch appointment confirmations and reminders 48 hours and 24 hours before visits via voice and text. Pet owners can confirm, reschedule, or cancel instantly—freeing up slots for waitlist patients. No-show rates drop from 18-22% to 6-10%.",
    },
    {
      problem: "Prescription refill requests and food orders creating phone backlog",
      solution:
        "AI processes prescription refill requests: confirms patient identity, medication details, pharmacy contact. Coordinates food and prescription diet orders. Forwards to veterinary team for approval when needed. Eliminates repetitive staff phone calls and reduces processing time by 70%.",
    },
    {
      problem: "New client intake taking 15-20 minutes per appointment",
      solution:
        "AI completes new client intake prior to arrival: pet history, previous vaccinations, current medications, diet information, behavioral history, emergency contacts. Clients answer questions once in natural conversation. Front desk receives complete intake form before first visit—check-in takes minutes instead of nearly 20 minutes.",
    },
    {
      problem: "Emergency clinics overwhelmed with non-emergency after-hours calls",
      solution:
        "AI triages after-hours calls to determine true urgency. Emergency cases (GDV, fractures, respiratory distress, dystocia) routed immediately. Non-emergencies (ear infections, skin allergies, mild vomiting) scheduled for regular business hours. Emergency clinic staff focus on critical cases instead of phone triage.",
    },
    {
      problem: "Post-operative care instructions not being followed at home",
      solution:
        "AI delivers clear, consistent post-operative instructions: activity restrictions, incision care, medication timing, red flag symptoms to watch for. Available 24/7 to answer follow-up questions. Clients can call anytime to clarify care instructions—reducing complications and emergency visits.",
    },
    {
      problem: "High cost of staffing for 24/7 phone coverage",
      solution:
        "Adding overnight or weekend reception staff costs $80K-120K annually per position. AI provides round-the-clock coverage for a fraction of the cost. Small practices get enterprise-level answering service without the overhead. Emergency clinics reduce triage staff requirements.",
    },
  ],
  comparison: {
    headers: ["Factor", "Prestyj AI Receptionist", "Traditional Approach"],
    rows: [
      {
        feature: "Call Coverage Hours",
        prestyj: "24/7/365",
        others: "Business hours only",
      },
      {
        feature: "Emergency Triage Speed",
        prestyj: "Immediate (under 60 seconds)",
        others: "Staff dependent or voicemail",
      },
      {
        feature: "New Client Intake Time",
        prestyj: "Completed pre-arrival",
        others: "15-20 minutes at check-in",
      },
      {
        feature: "Appointment No-Show Rate",
        prestyj: "6-10% (with reminders)",
        others: "18-22% industry average",
      },
      {
        feature: "Staff Hours Saved Per Week",
        prestyj: "15-20 hours (front desk/tech)",
        others: "0 (current baseline)",
      },
      {
        feature: "Prescription Refill Processing",
        prestyj: "Automated intake, approval queued",
        others: "Staff handles 3-5 min per call",
      },
      {
        feature: "Multi-Lingual Support",
        prestyj: "Spanish, Mandarin, Vietnamese, more",
        others: "English only (usually)",
      },
      {
        feature: "Emergency Call Routing",
        prestyj: "AI triage, immediate escalation",
        others: "Voicemail or transfer to ER",
      },
      {
        feature: "Annual Cost for 24/7 Coverage",
        prestyj: "Fraction of staffing cost",
        others: "$80K-120K+ per additional staff",
      },
    ],
    includeCommonRows: false,
  },
  faq: [
    {
      question: "Can AI accurately triage veterinary emergencies?",
      answer:
        "Yes. AI is trained on veterinary triage protocols and asks targeted questions about symptoms, timing, and severity. Identifies red flags: unproductive vomiting with restlessness (GDV), difficulty breathing, toxin ingestion, trauma, seizure activity, collapse. Critical cases route immediately to on-call veterinarian. AI supplements—not replaces—veterinary judgment. Complex cases always escalate to clinical staff.",
    },
    {
      question: "How does AI handle emergency calls after hours?",
      answer:
        "After-hours calls trigger immediate triage protocols. AI gathers key information: symptoms, timing, patient status. True emergencies (GDV signs, respiratory distress, active bleeding, dystocia, collapse) route directly to on-call veterinarian within 60 seconds. Non-emergencies scheduled appropriately. Pet owners get immediate response instead of voicemail or being told to go to emergency hospital unnecessarily.",
    },
    {
      question: "What about exotic pets and specialty species?",
      answer:
        "AI supports triage for common exotic species: birds, reptiles, small mammals, rabbits. Asks species-specific questions about behavior, appetite, environment, housing conditions. Unusual or complex cases route to exotic pet specialists on staff. Referral patterns configurable for your practice's specialty capabilities.",
    },
    {
      question: "Can pet owners speak to a human if needed?",
      answer:
        "Always. Pet owners can request human transfer at any time ('I want to speak to a veterinarian'). AI transfers immediately with full conversation context. For hearing-impaired clients, AI offers text-based communication. For non-English speakers, AI provides multi-lingual support or escalation to bilingual staff when available.",
    },
    {
      question: "How does AI integrate with veterinary practice management software?",
      answer:
        "Prestyj integrates with major PMS systems: Avimark, Cornerstone, eVet, ImproMed, Patterson, and others. Appointments sync automatically. Patient information pre-populates calls. Intake data flows directly into medical records. Conversation summaries appear in note templates. Zero manual data entry required.",
    },
    {
      question: "What happens with prescription refill requests?",
      answer:
        "AI validates prescription refill requests: confirms patient identity, medication details (name, strength, last fill date), pharmacy contact information. Request forwards to veterinary team for clinical review and approval. AI notifies pet owner and processes refill. Reduces staff phone time by 70% and speeds up prescription processing.",
    },
    {
      question: "Can AI handle vaccine reminders and wellness scheduling?",
      answer:
        "Completely. AI tracks vaccination schedules and sends reminders when vaccines are due. Schedules wellness exams, puppy/kitten vaccine series, senior wellness panels, and dental cleanings. Handles reminder calls and text messages. Pet owners can book directly. Increases compliance and recall revenue.",
    },
    {
      question: "How does multi-lingual support work?",
      answer:
        "AI communicates in multiple languages: Spanish, Mandarin, Vietnamese, Tagalog, and more. Explains treatment options, post-procedure care, medication instructions, and home care recommendations in pet owner's preferred language. Better understanding improves compliance and outcomes. No language barriers affecting emergency assessment either.",
    },
    {
      question: "What client information is stored, and where?",
      answer:
        "Only necessary information is retained: appointment confirmations, brief call summaries, prescription refill requests, vaccination reminders. No voice recordings are retained after transcription. Data stored in secure, encrypted infrastructure. Access logged for audit. Retention policies comply with veterinary record requirements.",
    },
    {
      question: "How does this help small veterinary practices vs emergency clinics?",
      answer:
        "Small practices can't afford 24/7 staffing. AI provides around-the-clock coverage for emergency triage, appointment scheduling, and client communication—costing far less than hiring additional staff. Emergency clinics benefit from reduced non-emergency call volume, better triage, and freed staff for critical cases. Both improve client service and reduce overhead.",
    },
    {
      question: "Can AI handle payment processing and deposits?",
      answer:
        "Yes. AI can collect payment information, process deposits for emergency visits, and explain treatment costs and payment options. Collects credit card information securely. Explains financing options when available. Reduces front desk time spent on payment discussions and speeds up check-in for scheduled appointments.",
    },
  ],
  cta: {
    headline: "Never Miss an Emergency Call Again With Veterinary AI Receptionist",
    subheadline:
      "Pet emergencies don't follow business hours. AI handles every call 24/7, triages symptoms to detect true emergencies, schedules appointments, and supports pet owners in multiple languages. Reduce overhead while providing better care. Book a demo to see veterinary triage in action.",
    buttonText: "Schedule Your Demo",
    footnote:
      "Integrates with all major PMS systems. Multi-lingual support included. Setup takes less than 24 hours.",
  },
});
