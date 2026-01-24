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

const compareLinks = [
  { href: "/compare/prestyj-vs-ylopo", label: "Prestyj vs Ylopo" },
  { href: "/compare/prestyj-vs-isa", label: "Prestyj vs Human ISA" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold font-heading text-primary">PRESTYJ</span>
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
                Compare <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {compareLinks.map((link) => (
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
                  <span className="text-sm font-medium text-foreground">Compare</span>
                  {compareLinks.map((link) => (
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
