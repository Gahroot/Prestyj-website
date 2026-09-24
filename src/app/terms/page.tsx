import type { Metadata } from "next";
import Link from "next/link";

import { EditorialShell } from "@/components/layout/editorial-shell";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Website terms",
  description: "Terms governing use of prestyj.com and its public demonstrations.",
  alternates: { canonical: `${siteConfig.url}/terms` },
};

const sections = [
  {
    title: "Scope of these terms",
    paragraphs: [
      "These terms govern your use of prestyj.com, its public calculators, articles, forms, and demonstrations. They do not replace a signed order form, master services agreement, data-processing agreement, or other contract for paid work. The signed agreement controls if it conflicts with these website terms.",
      "Prestyj means the operator of prestyj.com. The contracting legal entity for paid work will be identified in the applicable signed agreement before services begin.",
    ],
  },
  {
    title: "Who may use the site",
    paragraphs: [
      "You must be at least 18 and able to enter a binding agreement to submit a request or use an interactive demonstration. You may use the site only for lawful business purposes.",
    ],
  },
  {
    title: "Public demonstrations and calculators",
    paragraphs: [
      "Demonstrations may use automated voice, text, or AI-generated responses. Follow the disclosure and consent instructions shown in the experience. Do not submit confidential, privileged, regulated, or production data to a public demonstration.",
      "Calculator outputs are mechanical estimates based on the assumptions you enter. They are not forecasts or legal, tax, accounting, investment, or financial advice. You are responsible for reviewing every assumption and result.",
    ],
  },
  {
    title: "Acceptable use",
    paragraphs: [
      "Do not attempt unauthorized access, interfere with site operation, probe another user's data, submit malware, evade limits, scrape the site in violation of applicable rules, impersonate another person, or use a demonstration for harassment, fraud, unlawful surveillance, spam, or deceptive content.",
      "We may restrict access to protect the site, its providers, visitors, and partners.",
    ],
  },
  {
    title: "Intellectual property",
    paragraphs: [
      "The site, brand, design, and original materials belong to Prestyj or its licensors and are protected by applicable law. You may link to public pages and quote short portions with attribution. You may not copy the site wholesale, remove notices, or imply endorsement or partnership.",
      "You retain rights in information you submit. You grant Prestyj the limited permission needed to process it, respond to your request, and operate the feature you chose to use.",
    ],
  },
  {
    title: "Third-party services",
    paragraphs: [
      "The site may use third-party scheduling, communications, hosting, analytics, advertising, and integration providers. Their services may have separate terms and privacy practices. Prestyj does not control their availability or independent conduct.",
    ],
  },
  {
    title: "No warranty",
    paragraphs: [
      "The public site and demonstrations are provided as available. To the extent permitted by law, Prestyj disclaims implied warranties for the public site. We do not promise that a demonstration will be uninterrupted, error-free, suitable for a particular workflow, or safe to use without professional review.",
    ],
  },
  {
    title: "Limitation for website use",
    paragraphs: [
      "To the extent permitted by law, Prestyj is not liable for indirect, incidental, special, consequential, or punitive damages arising from use of the public site. Some jurisdictions do not allow every limitation, so this language applies only where permitted. Liability for paid services is governed by the signed agreement.",
    ],
  },
  {
    title: "Changes",
    paragraphs: [
      "We may update the site and these terms. The updated date will change when revisions are posted. Material changes to a paid engagement are governed by the applicable signed agreement, not by silently changing this page.",
    ],
  },
] as const;

export default function TermsPage() {
  return (
    <EditorialShell>
      <main id="main-content" className="editorial-rail editorial-inner">
        <article className="editorial-reading">
          <header className="editorial-page-header border-b">
            <p className="text-primary text-sm font-semibold">Legal</p>
            <h1 className="font-heading mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Website terms
            </h1>
            <p className="text-muted-foreground mt-4">Last updated August 27, 2026</p>
          </header>

          <div className="divide-y">
            {sections.map((section) => (
              <section key={section.title} className="py-9">
                <h2 className="font-heading text-2xl font-bold">{section.title}</h2>
                <div className="text-muted-foreground mt-5 space-y-4 leading-7">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <section className="border-t pt-9">
            <h2 className="font-heading text-2xl font-bold">Contact and privacy</h2>
            <p className="text-muted-foreground mt-4 leading-7">
              Questions:{" "}
              <a className="text-primary hover:underline" href="mailto:legal@prestyj.com">
                legal@prestyj.com
              </a>
              . See the{" "}
              <Link href="/privacy" className="text-primary hover:underline">
                privacy policy
              </Link>{" "}
              for information practices.
            </p>
          </section>
        </article>
      </main>
    </EditorialShell>
  );
}
