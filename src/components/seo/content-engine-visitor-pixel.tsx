"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { trackContentEngineVisitor } from "@/lib/meta-pixel";

/**
 * Fires the `ContentEngineVisitor` custom Meta Pixel event and the LinkedIn
 * Insight Tag conversion on mount, scoped to the canonical Content Engine
 * landing page and all of its variant pages. Renders nothing.
 *
 * Drop into any page (or a shared layout) that should populate the
 * "Content Engine Visitors" retargeting audience. The pathname is sent as the
 * `variant` parameter so Meta Ads Manager can build sub-audiences per
 * landing-page variant. See docs/retargeting-setup.md for the manager-side
 * setup steps.
 */
export function ContentEngineVisitorPixel() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) return;
    trackContentEngineVisitor(pathname);
  }, [pathname]);

  return null;
}
