import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  product: [
    { href: "#how-it-works", label: "How It Works" },
    { href: "/results", label: "Results" },
    { href: "#pricing", label: "Pricing" },
    { href: "#faq", label: "FAQ" },
  ],
  bestFor: [
    { href: "/best-for", label: "All Use Cases" },
    { href: "/best-for/real-estate-teams", label: "Real Estate Teams" },
    { href: "/best-for/isa-replacement", label: "ISA Replacement" },
  ],
  alternatives: [
    { href: "/alternatives", label: "All Alternatives" },
    { href: "/alternatives/ylopo", label: "Prestyj vs Ylopo" },
    { href: "/alternatives/human-isa", label: "Prestyj vs Human ISA" },
    { href: "/alternatives/structurely", label: "Prestyj vs Structurely" },
    { href: "/alternatives/cinc", label: "Prestyj vs CINC" },
    { href: "/alternatives/real-geeks", label: "Prestyj vs Real Geeks" },
    { href: "/alternatives/conversica", label: "Prestyj vs Conversica" },
  ],
  resources: [
    { href: "/blog", label: "Blog" },
    { href: "/blog/why-leads-go-cold", label: "Why Leads Go Cold" },
    { href: "/blog/speed-to-lead", label: "Speed-to-Lead Guide" },
    { href: "/compare/prestyj-vs-isa", label: "Prestyj vs ISA" },
    { href: "/compare/prestyj-vs-ylopo", label: "Prestyj vs Ylopo" },
    { href: "/compare/prestyj-vs-structurely", label: "Prestyj vs Structurely" },
    { href: "/compare/prestyj-vs-conversica", label: "Prestyj vs Conversica" },
  ],
  solutions: [
    { href: "/solutions/speed-to-lead", label: "Speed to Lead" },
    { href: "/solutions/lead-reactivation", label: "Lead Reactivation" },
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
              AI Sales Agents that respond, qualify, and book appointments 24/7.
            </p>
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
