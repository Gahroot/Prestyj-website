import Link from "next/link";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-[70vh] pt-36 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-primary text-sm font-semibold">404</p>
          <h1 className="font-heading mt-5 max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
            This record is not in the current site.
          </h1>
          <p className="text-muted-foreground mt-6 max-w-xl text-lg leading-8">
            The page may have moved during the institutional rewrite. Start with the current work
            and audience pages below.
          </p>
          <div className="mt-8 flex gap-3">
            <Button asChild>
              <Link href="/">Home</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/research">Research</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
