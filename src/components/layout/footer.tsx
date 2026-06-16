import Link from "next/link";
import { Instagram, Linkedin, Facebook, Twitter } from "lucide-react";
import { Separator } from "@/components/ui/separator";

// Keep in sync with src/app/contact/page.tsx
const SUPPORT_EMAIL = "hello@prestyj.com";
const SUPPORT_PHONE_DISPLAY = "TBD, real number coming soon";
const SUPPORT_PHONE_HREF: string | null = null;

type FooterLink = { href: string; label: string; highlight?: boolean; external?: boolean };

const socialLinks = [
  { href: "https://www.instagram.com/prestyj_/", label: "Instagram", icon: Instagram },
  { href: "https://www.linkedin.com/company/prestyj/", label: "LinkedIn", icon: Linkedin },
  {
    href: "https://www.facebook.com/profile.php?id=61582824703610",
    label: "Facebook",
    icon: Facebook,
  },
  { href: "https://x.com/prestyj_", label: "X", icon: Twitter },
];

const footerLinks = {
  product: [
    { href: "/#ai-concierge", label: "Live AI Concierge", highlight: true },
    { href: "/done-for-you-ai-agents", label: "Done-For-You AI" },
    { href: "/ai-voice-agents", label: "AI Voice Agents" },
    { href: "/ai-receptionist", label: "AI Receptionist" },
    { href: "/ai-sales-agents", label: "AI Sales Agents" },
    { href: "/ai-marketing-agents", label: "AI Marketing Agents" },
  ],
  aiAgents: [
    { href: "/ai-content-department", label: "AI Content Department", highlight: true },
    { href: "/solutions/lead-reactivation", label: "Lead Reactivation" },
    { href: "/platform", label: "Platform" },
    { href: "/book-demo", label: "Book a Build Call" },
    { href: "/contact", label: "Contact" },
  ],
  proof: [
    { href: "/#proof", label: "Shipped Product Proof", highlight: true },
    {
      href: "https://website-three-eosin-0v0xmdepg0.vercel.app",
      label: "EZ Coder",
      external: true,
    },
    {
      href: "https://media-master-gilt.vercel.app/",
      label: "Media Master",
      external: true,
    },
    { href: "/results", label: "Results" },
    { href: "/statistics", label: "Statistics" },
  ],
  videoAds: [
    { href: "/batch-video-ads", label: "Batch Video Ads", highlight: true },
    { href: "/300-video-ads", label: "300 Video Ads" },
    { href: "/ad-creative-testing-service", label: "Creative Testing Service" },
    { href: "/batch-video-ad-roi-calculator", label: "ROI Calculator" },
    { href: "/cost-per-tested-ad-angle-calculator", label: "Cost Per Angle" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/llms.txt", label: "AI Citation Map" },
  ],
} satisfies Record<string, ReadonlyArray<FooterLink>>;

function FooterColumn({ title, links }: { title: string; links: ReadonlyArray<FooterLink> }) {
  return (
    <div>
      <h3 className="font-heading text-foreground mb-4 font-semibold">{title}</h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
              className={
                link.highlight
                  ? "text-primary hover:text-primary/80 text-sm font-semibold transition-colors"
                  : "text-muted-foreground hover:text-foreground text-sm transition-colors"
              }
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-card border-border border-t">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-8">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-heading text-primary text-xl font-bold">PRESTYJ</span>
            </Link>
            <p className="text-muted-foreground mt-4 max-w-sm text-sm">
              Prestyj builds custom AI agents, voice systems, automations, internal
              tools, and AI software for calls, lead follow-up, content, operations,
              and creative testing.
            </p>
            <dl className="text-muted-foreground mt-4 space-y-1 text-sm">
              <div className="flex flex-wrap gap-x-2">
                <dt className="text-foreground font-medium">Email:</dt>
                <dd>
                  <a
                    href={`mailto:${SUPPORT_EMAIL}`}
                    className="hover:text-foreground transition-colors"
                  >
                    {SUPPORT_EMAIL}
                  </a>
                </dd>
              </div>
              <div className="flex flex-wrap gap-x-2">
                <dt className="text-foreground font-medium">Phone:</dt>
                <dd>
                  {SUPPORT_PHONE_HREF !== null ? (
                    <a
                      href={SUPPORT_PHONE_HREF}
                      className="hover:text-foreground transition-colors"
                    >
                      {SUPPORT_PHONE_DISPLAY}
                    </a>
                  ) : (
                    <span>{SUPPORT_PHONE_DISPLAY}</span>
                  )}
                </dd>
              </div>
            </dl>
            <div className="mt-4 flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <FooterColumn title="AI Agents" links={footerLinks.product} />
          <FooterColumn title="Automation" links={footerLinks.aiAgents} />
          <FooterColumn title="Proof" links={footerLinks.proof} />
          <FooterColumn title="Video Ads" links={footerLinks.videoAds} />
          <FooterColumn title="Legal" links={footerLinks.legal} />
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} PRESTYJ. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
