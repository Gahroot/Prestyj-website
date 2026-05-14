import Link from "next/link";
import { Button } from "@/components/ui/button";
import { navLinks, primaryCta } from "@/lib/nav-data";
import { NavbarMobile, SolutionsDropdown } from "@/components/layout/navbar-interactive";

export function Navbar() {
  return (
    <header className="absolute top-0 right-0 left-0 z-40 h-16 bg-transparent">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 transition-opacity hover:opacity-80"
        >
          <span className="font-heading text-lg font-extrabold tracking-wide text-white">
            PRESTYJ
          </span>
          <span
            aria-hidden="true"
            className="hidden h-4 w-px bg-white/20 lg:block"
          />
          <span className="hidden text-xs font-light tracking-wide text-white/60 lg:block">
            AI agents for marketing &amp; sales
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center">
            {navLinks.map((link) =>
              link.dropdown ? (
                <SolutionsDropdown key={link.label} label={link.label} />
              ) : (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-primary inline-flex px-3 py-2 text-sm whitespace-nowrap text-white/90 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <Button asChild size="sm" className="h-8 px-4 text-xs font-bold tracking-wide uppercase">
            <Link href={primaryCta.href}>{primaryCta.label}</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <NavbarMobile />
      </div>
    </header>
  );
}
