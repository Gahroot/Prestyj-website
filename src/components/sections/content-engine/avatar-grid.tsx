import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { socialAvatars, type SocialAvatar } from "@/lib/content-engine";

interface ContentEngineAvatarGridProps {
  /** Override the section heading. */
  headline?: string;
  /** Optional accent (rendered in the primary color). */
  headlineAccent?: string;
  /** Override the supporting copy. */
  subhead?: string;
  /** Override the avatar list (defaults to all social-content avatars). */
  avatars?: SocialAvatar[];
}

const DEFAULT_HEADLINE = "Built for every";
const DEFAULT_HEADLINE_ACCENT = "social-first business";
const DEFAULT_SUBHEAD =
  "Same AI agent, tuned to your niche. Pick the playbook that fits your business — every avatar runs on the same AI Content Department engine.";

/**
 * Renders a grid of every "Social Content for ___" avatar page in /best-for/.
 * Lives on the canonical /ai-content-department page to provide downward
 * cross-linking to each niche-specific avatar.
 */
export function ContentEngineAvatarGrid({
  headline = DEFAULT_HEADLINE,
  headlineAccent = DEFAULT_HEADLINE_ACCENT,
  subhead = DEFAULT_SUBHEAD,
  avatars = socialAvatars,
}: ContentEngineAvatarGridProps) {
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
          {avatars.map((avatar, index) => {
            const Icon = avatar.icon;
            return (
              <AnimateOnScroll key={avatar.slug} delay={index * 0.03}>
                <Link
                  href={`/best-for/${avatar.slug}`}
                  className="group focus-visible:ring-primary block h-full rounded-lg focus:outline-none focus-visible:ring-2"
                >
                  <Card className="group-hover:border-primary/40 h-full transition-colors">
                    <CardContent className="flex h-full flex-col p-5">
                      <div className="mb-3 flex items-start justify-between">
                        <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-lg">
                          <Icon className="text-primary h-5 w-5" />
                        </div>
                        <ArrowRight className="text-muted-foreground group-hover:text-primary h-4 w-4 transition-all group-hover:translate-x-0.5" />
                      </div>

                      <h3 className="font-heading text-foreground mb-1 text-base font-semibold">
                        {avatar.label}
                      </h3>

                      <p className="text-muted-foreground text-sm">{avatar.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              </AnimateOnScroll>
            );
          })}
        </div>

        <AnimateOnScroll className="mt-10 text-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/best-for">
              See every industry we serve
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
