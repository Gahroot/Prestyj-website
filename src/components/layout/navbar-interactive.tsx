"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import {
  navLinks,
  solutionLinks,
  type DropdownLink,
} from "@/lib/nav-data";

function NavDropdown({ label, items }: { label: string; items: DropdownLink[] }) {
  return (
    <li className="group/navitem relative">
      <button
        type="button"
        className="inline-flex items-center gap-1.5 whitespace-nowrap px-3 py-2 text-sm text-white/90 transition-colors hover:text-primary"
      >
        {label}
        <ChevronDown className="h-3 w-3 opacity-60 transition-transform duration-200 group-hover/navitem:rotate-180" />
      </button>
      <div className="invisible absolute bottom-0 left-0 w-max translate-y-full pt-2 opacity-0 transition-all duration-200 group-hover/navitem:visible group-hover/navitem:opacity-100">
        <ul className="flex min-w-[320px] flex-col gap-0.5 rounded-xl border border-zinc-800 bg-zinc-900/95 p-2 shadow-[0px_14px_20px_rgba(0,0,0,0.5)] backdrop-blur-sm">
          {items.map((item) => (
            <li key={item.href} className="group/subitem">
              <Link
                href={item.href}
                className="flex items-center gap-3 rounded-xl p-2.5 transition-colors hover:bg-zinc-800/80"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-800/50">
                  <item.icon className="h-4 w-4 text-zinc-400" />
                </span>
                <span className="flex flex-1 flex-col">
                  <span className="text-sm font-medium leading-tight text-white">{item.label}</span>
                  {item.description && (
                    <span className="mt-0.5 text-sm font-light leading-tight text-zinc-500">
                      {item.description}
                    </span>
                  )}
                </span>
                <ChevronRight className="h-4 w-4 -rotate-90 text-zinc-600 opacity-0 transition-opacity duration-200 group-hover/subitem:opacity-100" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

export function NavbarDropdowns() {
  return <NavDropdown label="Platform" items={solutionLinks} />;
}

function MobileSection({ title, items, onNavigate }: { title: string; items: DropdownLink[]; onNavigate: () => void }) {
  return (
    <div className="mt-4">
      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">{title}</p>
      <div className="flex flex-col gap-2">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className="flex items-center gap-3 rounded-lg p-2 text-white/80 transition-colors hover:bg-zinc-900 hover:text-white"
          >
            <item.icon className="h-5 w-5 text-primary" />
            <div>
              <p className="text-sm font-medium">{item.label}</p>
              {item.description && <p className="text-xs text-zinc-500">{item.description}</p>}
            </div>
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
          <Menu className="h-5 w-5" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full border-zinc-800 bg-zinc-950 sm:max-w-sm">
        <SheetHeader>
          <SheetTitle className="text-white">PRESTYJ</SheetTitle>
        </SheetHeader>
        <nav className="mt-8 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={close}
              className={
                link.highlight
                  ? "text-lg font-semibold text-primary transition-colors hover:text-primary/80"
                  : "text-lg font-medium text-white transition-colors hover:text-primary"
              }
            >
              {link.label}
            </Link>
          ))}

          <MobileSection title="Platform" items={solutionLinks} onNavigate={close} />

          <div className="mt-8 flex flex-col gap-3">
            <Button asChild variant="outline" className="w-full border-zinc-700 bg-transparent text-white hover:bg-zinc-900 hover:text-white">
              <Link href="/lead-magnet" onClick={close}>Free Playbook</Link>
            </Button>
            <Button asChild className="w-full">
              <Link href="/book-demo" onClick={close}>Book a Demo</Link>
            </Button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
