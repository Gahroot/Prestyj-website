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
  "Same swarm, tuned to your niche. Pick the playbook that fits your business — every avatar runs on the same Done-For-You Social Media engine.";

/**
 * Renders a grid of every "Social Content for ___" avatar page in /best-for/.
 * Lives on the canonical /done-for-you-social-media page and its variants
 * to provide downward cross-linking to each niche-specific avatar.
 */
export function ContentEngineAvatarGrid({
  headline = DEFAULT_HEADLINE,
  headlineAccent = DEFAULT_HEADLINE_ACCENT,
  subhead = DEFAULT_SUBHEAD,
  avatars = socialAvatars,
}: ContentEngineAvatarGridProps) {
  return (
    <section className="py-24 bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            {headline}{" "}
            {headlineAccent && (
              <span className="text-primary">{headlineAccent}</span>
            )}
            .
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {subhead}
          </p>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {avatars.map((avatar, index) => {
            const Icon = avatar.icon;
            return (
              <AnimateOnScroll key={avatar.slug} delay={index * 0.03}>
                <Link
                  href={`/best-for/${avatar.slug}`}
                  className="group block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
                >
                  <Card className="h-full transition-colors group-hover:border-primary/40">
                    <CardContent className="p-5 flex flex-col h-full">
                      <div className="flex items-start justify-between mb-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                      </div>

                      <h3 className="text-base font-heading font-semibold text-foreground mb-1">
                        {avatar.label}
                      </h3>

                      <p className="text-sm text-muted-foreground">
                        {avatar.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </AnimateOnScroll>
            );
          })}
        </div>

        <AnimateOnScroll className="text-center mt-10">
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
