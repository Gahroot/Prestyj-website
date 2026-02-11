import Link from "next/link";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/nav-data";
import { NavbarDropdowns, NavbarMobile } from "@/components/layout/navbar-interactive";

export function Navbar() {
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
            <NavbarDropdowns />
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button asChild>
              <Link href="/book-demo">Book a Demo</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <NavbarMobile />
        </div>
      </div>
    </nav>
  );
}
