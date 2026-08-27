import Link from "next/link";

import { NavbarMobile, SolutionsDropdown } from "@/components/layout/navbar-interactive";
import { Button } from "@/components/ui/button";
import { navLinks, primaryCta, secondaryCta } from "@/lib/nav-data";

export function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-40 h-16 bg-transparent">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="focus-visible:ring-ring flex items-center gap-3 transition-opacity hover:opacity-80 focus-visible:ring-2 focus-visible:outline-none"
        >
          <span className="font-heading text-lg font-extrabold tracking-wide text-white">
            PRESTYJ
          </span>
          <span aria-hidden="true" className="hidden h-4 w-px bg-white/20 lg:block" />
          <span className="hidden text-xs font-light tracking-wide text-white/60 lg:block">
            Institutional real estate AI agents
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center">
            {navLinks.map((link) =>
              link.dropdown ? (
                <SolutionsDropdown key={link.label} label={link.label} />
              ) : (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-primary focus-visible:ring-ring inline-flex px-3 py-2 text-sm whitespace-nowrap text-white/90 transition-colors focus-visible:ring-2 focus-visible:outline-none"
                  >
                    {link.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="h-8 px-3 text-xs text-white hover:bg-white/10 hover:text-white"
          >
            <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
          </Button>
          <Button asChild size="sm" className="h-8 px-4 text-xs font-bold uppercase">
            <Link href={primaryCta.href}>{primaryCta.label}</Link>
          </Button>
        </div>

        <NavbarMobile />
      </div>
    </header>
  );
}
