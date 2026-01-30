"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { href: "#how-it-works", label: "How It Works" },
  { href: "/results", label: "Results" },
  { href: "#pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
];

const solutionLinks = [
  { href: "/solutions/lead-reactivation", label: "Dead Lead Reactivation" },
  { href: "/solutions/speed-to-lead", label: "Speed to Lead" },
];

const alternativeLinks = [
  { href: "/alternatives", label: "All Alternatives" },
  { href: "/alternatives/ylopo", label: "Prestyj vs Ylopo" },
  { href: "/alternatives/human-isa", label: "Prestyj vs Human ISA" },
  { href: "/alternatives/internal-isa", label: "Prestyj vs Internal ISA Team" },
  { href: "/alternatives/drift", label: "Prestyj vs Drift" },
  { href: "/alternatives/structurely", label: "Prestyj vs Structurely" },
  { href: "/alternatives/cinc", label: "Prestyj vs CINC" },
  { href: "/alternatives/conversica", label: "Prestyj vs Conversica" },
  { href: "/alternatives/real-geeks", label: "Prestyj vs Real Geeks" },
  { href: "/alternatives/follow-up-boss", label: "Prestyj + Follow Up Boss" },
];

const bestForLinks = [
  { href: "/best-for", label: "All Use Cases" },
  { href: "/best-for/real-estate-teams", label: "Real Estate Teams" },
  { href: "/best-for/real-estate-franchises", label: "Real Estate Franchises" },
  { href: "/best-for/regional-brokerage-networks", label: "Regional Brokerages" },
  { href: "/best-for/pe-backed-platforms", label: "PE-Backed Platforms" },
  { href: "/best-for/commercial-real-estate", label: "Commercial Real Estate" },
  { href: "/best-for/isa-replacement", label: "ISA Replacement" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-extrabold font-heading text-white">PRESTYJ</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors text-sm">
                Solutions <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {solutionLinks.map((link) => (
                  <DropdownMenuItem key={link.href} asChild>
                    <Link href={link.href}>{link.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors text-sm">
                Alternatives <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {alternativeLinks.map((link) => (
                  <DropdownMenuItem key={link.href} asChild>
                    <Link href={link.href}>{link.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors text-sm">
                Best For <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {bestForLinks.map((link) => (
                  <DropdownMenuItem key={link.href} asChild>
                    <Link href={link.href}>{link.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button asChild>
              <Link href="/book-demo">Book a Demo</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-card">
              <div className="flex flex-col space-y-6 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="space-y-3">
                  <span className="text-sm font-medium text-foreground">Solutions</span>
                  {solutionLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block text-muted-foreground hover:text-foreground transition-colors pl-4"
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                <div className="space-y-3">
                  <span className="text-sm font-medium text-foreground">Alternatives</span>
                  {alternativeLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block text-muted-foreground hover:text-foreground transition-colors pl-4"
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                <div className="space-y-3">
                  <span className="text-sm font-medium text-foreground">Best For</span>
                  {bestForLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block text-muted-foreground hover:text-foreground transition-colors pl-4"
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                <Button className="w-full mt-4" asChild>
                  <Link href="/book-demo" onClick={() => setOpen(false)}>Book a Demo</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
