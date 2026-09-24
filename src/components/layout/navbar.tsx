import Link from "next/link";
import type { ReactElement } from "react";

import { NavbarMobile, SolutionsDropdown } from "@/components/layout/navbar-interactive";
import { Button } from "@/components/ui/button";
import { navLinks, primaryCta, secondaryCta } from "@/lib/nav-data";
import { cn } from "@/lib/utils";

export function Navbar({
  appearance = "dark",
}: {
  appearance?: "dark" | "editorial";
}): ReactElement {
  const editorial = appearance === "editorial";

  return (
    <header
      className={cn(
        "inset-x-0 top-0 z-40",
        editorial ? "relative h-20 border-b" : "absolute h-16 bg-transparent",
      )}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          aria-label="Prestyj home"
          className="focus-visible:ring-ring flex items-center gap-3 transition-opacity hover:opacity-80 focus-visible:ring-2 focus-visible:outline-none"
        >
          <span
            className={cn(
              "font-heading text-lg font-extrabold tracking-wide",
              editorial ? "text-foreground" : "text-white",
            )}
          >
            PRESTYJ
          </span>
          {!editorial ? (
            <>
              <span aria-hidden="true" className="hidden h-4 w-px bg-white/20 xl:block" />
              <span className="hidden text-xs font-light tracking-wide text-white/60 xl:block">
                Institutional real estate AI agents
              </span>
            </>
          ) : null}
        </Link>
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center">
            {navLinks.map((link) =>
              link.dropdown ? (
                <SolutionsDropdown key={link.label} label={link.label} appearance={appearance} />
              ) : (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "hover:text-primary focus-visible:ring-ring inline-flex min-h-11 items-center px-3 py-2 text-xs whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:outline-none",
                      editorial ? "text-foreground" : "text-white/90",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          {!editorial ? (
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="h-11 px-3 text-xs text-white hover:bg-white/10 hover:text-white"
            >
              <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
            </Button>
          ) : null}
          <Button asChild size="sm" className="h-11 px-4 text-xs">
            <Link href={primaryCta.href}>{primaryCta.label}</Link>
          </Button>
        </div>
        <NavbarMobile appearance={appearance} />
      </div>
    </header>
  );
}
