import Link from "next/link";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/nav-data";
import { NavbarDropdowns, NavbarMobile } from "@/components/layout/navbar-interactive";

export function Navbar() {
  return (
    <header className="absolute left-0 right-0 top-0 z-40 h-16 bg-transparent">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <span className="text-lg font-extrabold font-heading tracking-wide text-white">PRESTYJ</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={
                    link.highlight
                      ? "inline-flex whitespace-nowrap px-3 py-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                      : "inline-flex whitespace-nowrap px-3 py-2 text-sm text-white/90 transition-colors hover:text-primary"
                  }
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <NavbarDropdowns />
          </ul>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <Button asChild variant="ghost" size="sm" className="h-8 px-4 text-xs font-bold uppercase tracking-wide text-white hover:bg-white/10 hover:text-white">
            <Link href="/lead-magnet">Free Playbook</Link>
          </Button>
          <Button asChild size="sm" className="h-8 px-4 text-xs font-bold uppercase tracking-wide">
            <Link href="/book-demo">Book a Demo</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <NavbarMobile />
      </div>
    </header>
  );
}
