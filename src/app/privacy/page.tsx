import type { Metadata } from "next";

import { EditorialShell } from "@/components/layout/editorial-shell";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "How Prestyj collects, uses, shares, and protects information on prestyj.com.",
  alternates: { canonical: `${siteConfig.url}/privacy` },
};

const sections = [
  {
    title: "Information we collect",
    content: [
      "Information you provide, including your name, work email, phone number, firm name, message, workflow details, and scheduling information.",
      "Voice-demo information when you choose to speak with or request a call from an agent, including microphone audio, call metadata, transcript, consent state, and the details you provide during the interaction.",
      "Technical information needed to operate and protect the site, such as IP address, browser, device, requested pages, timestamps, and security logs.",
      "Marketing measurement data only after you grant marketing-tracking permission, unless a signal such as Global Privacy Control indicates that choice should be denied.",
    ],
  },
  {
    title: "How we use information",
    content: [
      "Respond to inquiries, qualify and route requests, schedule meetings, and communicate about the request you initiated.",
      "Operate, secure, debug, and improve the website and live agent demonstration.",
      "Measure marketing performance after permission is granted.",
      "Meet legal obligations, enforce terms, prevent abuse, and protect Prestyj, visitors, and partners.",
    ],
  },
  {
    title: "When information is shared",
    content: [
      "Service providers may process information for hosting, security, communications, customer-relationship management, scheduling, and site operations under their own contractual duties.",
      "Cal.com processes information when you load and use the scheduling interface after submitting an access request.",
      "Google Ads, Meta, and LinkedIn measurement scripts load only after marketing-tracking permission. Each provider may process data under its own privacy terms.",
      "Information may be disclosed when required by law, to protect rights or safety, or as part of a business transaction with appropriate safeguards.",
      "Prestyj does not sell contact-form or access-request details for money. Privacy laws may define some marketing disclosures more broadly than an ordinary sale; use Privacy choices in the footer to reject them.",
    ],
  },
  {
    title: "Retention",
    content: [
      "We retain inquiry and scheduling information only as long as reasonably necessary to respond, manage the relationship, maintain security records, resolve disputes, and meet legal obligations.",
      "Retention can differ for a paid engagement and will be described in the applicable agreement or data-processing terms.",
      "When information is no longer required, we delete it or de-identify it where reasonably possible, subject to backups and legal holds.",
    ],
  },
  {
    title: "Your choices and requests",
    content: [
      "Use Privacy choices in the footer to allow or reject marketing measurement. A recognized Global Privacy Control signal is treated as a rejection on this site.",
      "You may ask to access, correct, delete, or receive a copy of personal information associated with you. Rights and exceptions depend on where you live.",
      "To make a request, email privacy@prestyj.com. We may need to verify your identity and authority before completing it.",
      "You may unsubscribe from a marketing email using the link in that message. A form submission does not by itself opt you into marketing texts or automated calls.",
    ],
  },
  {
    title: "Security and international processing",
    content: [
      "We use administrative, technical, and organizational measures intended to protect information. No internet service can promise absolute security.",
      "Prestyj and its providers may process information in the United States and other locations. A paid engagement may include additional security, hosting, and transfer terms.",
    ],
  },
  {
    title: "Children",
    content: [
      "This site and its business services are not directed to people under 18. Do not submit information through the site if you are under 18.",
      "If you believe a minor submitted personal information, contact privacy@prestyj.com so we can review and remove it where appropriate.",
    ],
  },
] as const;

export default function PrivacyPage() {
  return (
    <EditorialShell>
      <main id="main-content" className="editorial-rail editorial-inner">
        <article className="editorial-reading">
          <header className="editorial-page-header border-b">
            <p className="text-primary text-sm font-semibold">Legal</p>
            <h1 className="font-heading mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Privacy policy
            </h1>
            <p className="text-muted-foreground mt-4">Last updated August 27, 2026</p>
            <p className="text-muted-foreground mt-6 leading-7">
              This policy explains how Prestyj handles personal information on prestyj.com and its
              public demonstrations. A paid engagement may include additional privacy and
              data-processing terms.
            </p>
          </header>

          <div className="divide-y">
            {sections.map((section) => (
              <section key={section.title} className="py-9">
                <h2 className="font-heading text-2xl font-bold">{section.title}</h2>
                <ul className="text-muted-foreground mt-5 list-disc space-y-3 pl-5 leading-7">
                  {section.content.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <section className="border-t pt-9">
            <h2 className="font-heading text-2xl font-bold">Contact</h2>
            <p className="text-muted-foreground mt-4 leading-7">
              Questions or privacy requests:{" "}
              <a className="text-primary hover:underline" href="mailto:privacy@prestyj.com">
                privacy@prestyj.com
              </a>
              .
            </p>
          </section>
        </article>
      </main>
    </EditorialShell>
  );
}
