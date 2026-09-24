import Link from "next/link";

import { EditorialShell } from "@/components/layout/editorial-shell";
import { EditorialPageHeader } from "@/components/layout/editorial-page-header";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <EditorialShell>
      <main id="main-content" className="editorial-rail editorial-inner min-h-[60vh] pt-10">
        <div>
          <p className="text-primary text-sm font-semibold">404</p>
          <EditorialPageHeader title="This page is not in the current site.">
            <p>The page may have moved. Start at home or explore our current field notes.</p>
          </EditorialPageHeader>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/">Home</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/research">Research</Link>
            </Button>
          </div>
        </div>
      </main>
    </EditorialShell>
  );
}
