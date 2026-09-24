import Link from "next/link";
import { Linkedin } from "lucide-react";
import type { ReactElement } from "react";

import { cn } from "@/lib/utils";

import { PrivacyChoicesButton } from "@/components/privacy/tracking-consent";
import { Separator } from "@/components/ui/separator";

const SUPPORT_EMAIL = "hello@prestyj.com";

type FooterLink = { href: string; label: string };

const footerLinks = {
  capabilities: [
    { href: "/capabilities/deal-diligence", label: "Deal diligence" },
    { href: "/capabilities/fund-operations", label: "Fund operations" },
    { href: "/capabilities/investor-reporting", label: "Investor reporting" },
    { href: "/capabilities/portfolio-intelligence", label: "Portfolio intelligence" },
    { href: "/capabilities/origination", label: "Origination" },
    { href: "/capabilities/listing-media", label: "Listing media" },
  ],
  audiences: [
    { href: "/for/investment-funds", label: "Investment funds" },
    { href: "/for/commercial-brokerages", label: "Commercial brokerages" },
    { href: "/for/owner-operators", label: "Owner-operators" },
  ],
  company: [
    { href: "/platform", label: "Platform" },
    { href: "/results", label: "Work" },
    { href: "/pricing", label: "Engagements" },
    { href: "/research", label: "Research" },
    { href: "/about", label: "About" },
    { href: "/book-demo", label: "Book a workflow demo" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
    { href: "/accessibility", label: "Accessibility" },
    { href: "/contact", label: "Contact" },
  ],
} satisfies Record<string, readonly FooterLink[]>;

function FooterColumn({ title, links }: { title: string; links: readonly FooterLink[] }) {
  return (
    <div>
      <h3 className="font-heading mb-4 font-semibold">{title}</h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-muted-foreground hover:text-foreground focus-visible:ring-ring text-sm transition-colors focus-visible:ring-2 focus-visible:outline-none"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer({
  appearance = "dark",
}: {
  appearance?: "dark" | "editorial";
}): ReactElement {
  return (
    <footer className={cn("border-t", appearance === "editorial" ? "bg-background" : "bg-card")}>
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_0.7fr]">
          <div>
            <Link href="/" className="font-heading text-primary text-xl font-bold">
              PRESTYJ
            </Link>
            <p className="text-muted-foreground mt-4 max-w-sm text-sm leading-6">
              AI agents built and run for real estate investment funds, commercial brokerages, and
              CRE owner-operators. Reviewed work product from the systems your firm already runs.
            </p>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="text-muted-foreground hover:text-foreground mt-4 inline-block text-sm transition-colors"
            >
              {SUPPORT_EMAIL}
            </a>
            <div className="mt-4">
              <a
                href="https://www.linkedin.com/company/prestyj/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Prestyj on LinkedIn"
                className="text-muted-foreground hover:text-foreground inline-flex transition-colors"
              >
                <Linkedin aria-hidden="true" className="h-5 w-5" />
              </a>
            </div>
          </div>
          <FooterColumn title="Capabilities" links={footerLinks.capabilities} />
          <FooterColumn title="For" links={footerLinks.audiences} />
          <FooterColumn title="Company" links={footerLinks.company} />
          <FooterColumn title="Legal" links={footerLinks.legal} />
        </div>

        <Separator className="my-8" />
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Prestyj. All rights reserved.
          </p>
          <PrivacyChoicesButton />
        </div>
      </div>
    </footer>
  );
}
