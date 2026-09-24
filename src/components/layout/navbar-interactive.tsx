"use client";

import Link from "next/link";
import { useState, type ReactElement } from "react";
import { ChevronDown, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks, primaryCta, secondaryCta, solutionLinks } from "@/lib/nav-data";
import { cn } from "@/lib/utils";

type Appearance = "dark" | "editorial";

export function SolutionsDropdown({
  label = "Capabilities",
  appearance = "dark",
}: {
  label?: string;
  appearance?: Appearance;
}): ReactElement {
  const editorial = appearance === "editorial";

  return (
    <li>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <button
            type="button"
            className={cn(
              "focus-visible:ring-ring inline-flex min-h-11 items-center gap-1.5 px-3 py-2 text-xs whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:outline-none",
              editorial
                ? "text-foreground hover:text-muted-foreground"
                : "text-white/90 hover:text-white",
            )}
          >
            {label}
            <ChevronDown aria-hidden="true" className="h-3 w-3" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          sideOffset={12}
          className={cn(
            "grid w-[min(38rem,calc(100vw-2rem))] grid-cols-2 gap-1 rounded p-2 motion-reduce:animate-none",
            editorial && "editorial-theme",
          )}
        >
          {solutionLinks.map((item) => (
            <DropdownMenuItem key={item.href} asChild className="items-start rounded p-4">
              <Link href={item.href}>
                <item.icon aria-hidden="true" className="mt-0.5 size-4" />
                <span>
                  <span className="block text-sm font-medium">{item.label}</span>
                  <span className="text-muted-foreground mt-1.5 block text-xs leading-5">
                    {item.description}
                  </span>
                </span>
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </li>
  );
}

export function NavbarMobile({ appearance = "dark" }: { appearance?: Appearance }): ReactElement {
  const [open, setOpen] = useState(false);
  const editorial = appearance === "editorial";
  const close = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="lg:hidden">
        <Button
          variant="ghost"
          size="icon"
          className={cn("size-11", editorial ? "text-foreground" : "text-white hover:bg-white/10")}
        >
          <Menu aria-hidden="true" className="h-5 w-5" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className={cn(
          "w-full overflow-y-auto p-6 motion-reduce:animate-none sm:max-w-sm",
          editorial ? "editorial-theme" : "border-zinc-800 bg-zinc-950",
        )}
      >
        <SheetHeader className="p-0 pr-8">
          <SheetTitle>PRESTYJ</SheetTitle>
          <SheetDescription>AI agents for institutional real estate</SheetDescription>
        </SheetHeader>
        <nav aria-label="Mobile" className="mt-6 flex flex-col gap-1">
          {navLinks.map((link) =>
            link.dropdown ? null : (
              <Link
                key={link.href}
                href={link.href}
                onClick={close}
                className="text-foreground focus-visible:ring-ring py-3 text-base font-medium transition-colors hover:underline focus-visible:ring-2 focus-visible:outline-none"
              >
                {link.label}
              </Link>
            ),
          )}
          <div className="mt-4">
            <p className="text-muted-foreground mb-2 text-xs font-semibold tracking-wider uppercase">
              Capabilities
            </p>
            <div className="flex flex-col border-t">
              {solutionLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={close}
                  className="focus-visible:ring-ring flex items-center gap-3 border-b py-3 text-sm transition-colors hover:underline focus-visible:ring-2 focus-visible:outline-none"
                >
                  <item.icon aria-hidden="true" className="h-4 w-4" />
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-6 flex flex-col gap-3">
            <Button asChild className="w-full">
              <Link href={primaryCta.href} onClick={close}>
                {primaryCta.label}
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full">
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
