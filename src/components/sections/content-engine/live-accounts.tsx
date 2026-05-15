import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { defaultContentEngineConfig, type LiveAccountsConfig } from "@/lib/content-engine";

interface ContentEngineLiveAccountsProps {
  config?: LiveAccountsConfig;
}

export function ContentEngineLiveAccounts({
  config = defaultContentEngineConfig.liveAccounts,
}: ContentEngineLiveAccountsProps) {
  const { headline, headlineAccent, subhead, accounts } = config;

  return (
    <section className="bg-muted/20 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="mb-12 text-center">
          <h2 className="font-heading text-foreground mb-4 text-3xl font-bold sm:text-4xl">
            {headline} {headlineAccent && <span className="text-primary">{headlineAccent}</span>}.
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">{subhead}</p>
        </AnimateOnScroll>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {accounts.map((account, index) => (
            <AnimateOnScroll key={account.platform} delay={index * 0.05}>
              <div className="group bg-card border-border hover:border-primary/40 h-full rounded-lg border p-5 transition-colors">
                <div className="mb-3 flex items-start justify-between">
                  <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-lg">
                    <account.icon className="text-primary h-5 w-5" />
                  </div>
                  <ExternalLink className="text-muted-foreground group-hover:text-primary h-4 w-4 transition-colors" />
                </div>

                <h3 className="font-heading text-foreground mb-1 text-base font-semibold">
                  {account.platform}
                </h3>

                <p className="text-muted-foreground mb-4 text-sm">{account.description}</p>

                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href={account.url} target="_blank" rel="noopener noreferrer">
                    {account.handle}
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
