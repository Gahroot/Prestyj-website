"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/meta-pixel";

type TrackedLinkProps = {
  eventName: string;
  eventLabel: string;
  children: React.ReactNode;
  className?: string;
  href: string;
};

export function TrackedLink({
  eventName,
  eventLabel,
  children,
  className,
  href,
}: TrackedLinkProps) {
  const handleClick = () => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", eventName, { eventLabel });
    }
  };

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}
