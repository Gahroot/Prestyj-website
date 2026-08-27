"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import {
  navLinks,
  primaryCta,
  secondaryCta,
  solutionLinks,
  type DropdownLink,
} from "@/lib/nav-data";

function NavDropdown({ label, items }: { label: string; items: DropdownLink[] }) {
  return (
    <li className="group/navitem relative">
      <button
        type="button"
        aria-haspopup="menu"
        className="hover:text-primary focus-visible:ring-ring inline-flex items-center gap-1.5 px-3 py-2 text-sm whitespace-nowrap text-white/90 transition-colors focus-visible:ring-2 focus-visible:outline-none"
      >
        {label}
        <ChevronDown aria-hidden="true" className="h-3 w-3 opacity-60" />
      </button>
      <div className="invisible absolute bottom-0 left-0 w-max translate-y-full pt-2 opacity-0 transition-opacity group-focus-within/navitem:visible group-focus-within/navitem:opacity-100 group-hover/navitem:visible group-hover/navitem:opacity-100">
        <ul
          className="grid min-w-[42rem] grid-cols-2 border border-zinc-800 bg-zinc-950 p-2 shadow-xl"
          role="menu"
        >
          {items.map((item) => (
            <li key={item.href} role="none">
              <Link
                href={item.href}
                role="menuitem"
                className="focus-visible:ring-ring block border border-transparent p-4 transition-colors hover:border-zinc-700 hover:bg-zinc-900 focus-visible:ring-2 focus-visible:outline-none"
              >
                <span className="flex items-center gap-3">
                  <item.icon aria-hidden="true" className="text-primary h-4 w-4" />
                  <span className="text-sm font-medium text-white">{item.label}</span>
                </span>
                {item.description ? (
                  <span className="mt-2 block text-sm leading-5 text-zinc-400">
                    {item.description}
                  </span>
                ) : null}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

export function SolutionsDropdown({ label = "Capabilities" }: { label?: string }) {
  return <NavDropdown label={label} items={solutionLinks} />;
}

function MobileSection({
  title,
  items,
  onNavigate,
}: {
  title: string;
  items: DropdownLink[];
  onNavigate: () => void;
}) {
  return (
    <div className="mt-4">
      <p className="mb-2 text-xs font-semibold tracking-wider text-zinc-500 uppercase">{title}</p>
      <div className="flex flex-col border-t">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className="focus-visible:ring-ring flex items-start gap-3 border-b py-3 text-white/80 transition-colors hover:text-white focus-visible:ring-2 focus-visible:outline-none"
          >
            <item.icon aria-hidden="true" className="text-primary mt-0.5 h-4 w-4" />
            <span>
              <span className="block text-sm font-medium">{item.label}</span>
              {item.description ? (
                <span className="mt-1 block text-xs leading-5 text-zinc-500">
                  {item.description}
                </span>
              ) : null}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function NavbarMobile() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
          <Menu aria-hidden="true" className="h-5 w-5" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full border-zinc-800 bg-zinc-950 sm:max-w-sm">
        <SheetHeader>
          <SheetTitle className="text-white">PRESTYJ</SheetTitle>
          <p className="text-xs font-light tracking-wide text-white/60">
            Institutional real estate AI agents
          </p>
        </SheetHeader>
        <nav aria-label="Mobile" className="mt-8 flex flex-col gap-4">
          {navLinks.map((link) =>
            link.dropdown ? null : (
              <Link
                key={link.href}
                href={link.href}
                onClick={close}
                className="hover:text-primary focus-visible:ring-ring text-lg font-medium text-white transition-colors focus-visible:ring-2 focus-visible:outline-none"
              >
                {link.label}
              </Link>
            ),
          )}

          <MobileSection title="Capabilities" items={solutionLinks} onNavigate={close} />

          <div className="mt-8 flex flex-col gap-3">
            <Button asChild className="w-full">
              <Link href={primaryCta.href} onClick={close}>
                {primaryCta.label}
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full border-white/15 text-white">
              <Link href={secondaryCta.href} onClick={close}>
                {secondaryCta.label}
              </Link>
            </Button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
