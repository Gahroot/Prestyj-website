import Link from "next/link";
import { Instagram, Linkedin, Facebook, Twitter } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const socialLinks = [
  { href: "https://www.instagram.com/prestyj_/", label: "Instagram", icon: Instagram },
  { href: "https://www.linkedin.com/company/prestyj/", label: "LinkedIn", icon: Linkedin },
  { href: "https://www.facebook.com/profile.php?id=61582824703610", label: "Facebook", icon: Facebook },
  { href: "https://x.com/prestyj_", label: "X", icon: Twitter },
];

const footerLinks = {
  product: [
    { href: "#how-it-works", label: "How It Works" },
    { href: "/results", label: "Results" },
    { href: "#pricing", label: "Pricing" },
    { href: "#faq", label: "FAQ" },
  ],
  bestFor: [
    { href: "/best-for", label: "All Use Cases" },
    { href: "/best-for/hvac", label: "HVAC Companies" },
    { href: "/best-for/plumbing", label: "Plumbing" },
    { href: "/best-for/roofing", label: "Roofing" },
    { href: "/best-for/real-estate-teams", label: "Real Estate Teams" },
    { href: "/best-for/servicetitan-users", label: "ServiceTitan Users" },
    { href: "/best-for/jobber-users", label: "Jobber Users" },
    { href: "/best-for/follow-up-boss-users", label: "Follow Up Boss Users" },
  ],
  alternatives: [
    { href: "/alternatives", label: "All Alternatives" },
    { href: "/alternatives/ylopo", label: "Prestyj vs Ylopo" },
    { href: "/alternatives/human-isa", label: "Prestyj vs Human ISA" },
    { href: "/alternatives/internal-isa", label: "Prestyj vs Internal ISA" },
    { href: "/alternatives/retell", label: "Prestyj vs Retell AI" },
    { href: "/alternatives/vapi", label: "Prestyj vs Vapi" },
    { href: "/alternatives/structurely", label: "Prestyj vs Structurely" },
    { href: "/alternatives/conversica", label: "Prestyj vs Conversica" },
  ],
  resources: [
    { href: "/blog", label: "Blog" },
    { href: "/compare/prestyj-vs-answering-service", label: "AI vs Answering Service" },
    { href: "/compare/prestyj-vs-internal-isa-team", label: "AI vs Internal ISA" },
    { href: "/compare/prestyj-vs-offshore-isa", label: "AI vs Offshore ISA" },
    { href: "/compare/prestyj-vs-conversica", label: "Prestyj vs Conversica" },
    { href: "/compare/prestyj-vs-structurely", label: "Prestyj vs Structurely" },
  ],
  solutions: [
    { href: "/solutions/home-services", label: "Home Services" },
    { href: "/solutions/speed-to-lead", label: "Speed to Lead" },
    { href: "/solutions/lead-reactivation", label: "Lead Reactivation" },
    { href: "/solutions/roofing", label: "Roofing Contractors" },
    { href: "/platform", label: "Platform" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-7 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold font-heading text-primary">PRESTYJ</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              The AI Workforce for Service Businesses. Respond, qualify, and book 24/7.
            </p>
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

          {/* Product */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">Solutions</h3>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Best For */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">Best For</h3>
            <ul className="space-y-3">
              {footerLinks.bestFor.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Alternatives */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">Alternatives</h3>
            <ul className="space-y-3">
              {footerLinks.alternatives.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} PRESTYJ. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
