import Link from "next/link";
import { Mail, Phone, Calendar, Clock } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import BorderGlow from "@/components/ui/border-glow";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { ContactForm } from "@/components/sections/contact/contact-form";

// CONTACT-PLACEHOLDERS:
//   The phone number below is intentionally a placeholder — replace with the
//   real business line once provisioned. Do NOT swap in the calculator's fake
//   +1234567890 demo number; either show a real number or omit until ready.
const SUPPORT_EMAIL = "hello@prestyj.com";
const SUPPORT_PHONE_DISPLAY = "TBD — real number coming soon";
const SUPPORT_PHONE_HREF: string | null = null; // set to "tel:+1XXXXXXXXXX" once provisioned
const BUSINESS_HOURS = "Monday – Friday · 9am – 6pm ET";

export default function ContactPage(): React.ReactElement {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://prestyj.com" },
          { name: "Contact", url: "https://prestyj.com/contact" },
        ]}
      />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="mb-12 space-y-4 text-center">
            <div className="bg-primary/10 text-primary inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium">
              <Mail className="h-4 w-4" />
              We&apos;re here to help
            </div>
            <h1 className="font-heading text-4xl font-bold tracking-tighter sm:text-5xl">
              Contact <span className="text-primary">Prestyj</span>
            </h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
              Talk to us about AI agents for your marketing and sales.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-5">
            {/* Left: contact channels */}
            <aside className="space-y-6 lg:col-span-2">
              <BorderGlow borderRadius={12} innerClassName="p-6 space-y-5">
                <div>
                  <h2 className="font-heading text-xl font-bold">Talk to a human</h2>
                  <p className="text-muted-foreground mt-1 text-sm">
                    The fastest way to scope an AI agent for your business is a 30-minute call.
                  </p>
                </div>
                <Button asChild size="lg" className="w-full">
                  <Link href="/book-demo">
                    <Calendar className="h-4 w-4" />
                    Book a demo
                  </Link>
                </Button>
              </BorderGlow>

              <div className="space-y-5">
                <ContactChannel
                  icon={<Mail className="h-5 w-5" />}
                  label="Email"
                  value={SUPPORT_EMAIL}
                  href={`mailto:${SUPPORT_EMAIL}`}
                />
                <ContactChannel
                  icon={<Phone className="h-5 w-5" />}
                  label="Phone"
                  value={SUPPORT_PHONE_DISPLAY}
                  {...(SUPPORT_PHONE_HREF !== null && { href: SUPPORT_PHONE_HREF })}
                />
                <ContactChannel
                  icon={<Clock className="h-5 w-5" />}
                  label="Hours"
                  value={BUSINESS_HOURS}
                />
              </div>
            </aside>

            {/* Right: form */}
            <div className="lg:col-span-3">
              <BorderGlow borderRadius={12} innerClassName="p-6 sm:p-8">
                <div className="mb-6">
                  <h2 className="font-heading text-2xl font-bold">Send us a message</h2>
                  <p className="text-muted-foreground mt-1 text-sm">
                    Tell us about your business and what you&apos;re trying to fix. We&apos;ll reply
                    with a concrete next step.
                  </p>
                </div>
                <ContactForm />
              </BorderGlow>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function ContactChannel({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}): React.ReactElement {
  const inner = (
    <div className="flex items-start gap-4">
      <div className="bg-primary/10 text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-muted-foreground text-xs font-medium tracking-wide uppercase">{label}</p>
        <p className="text-foreground mt-0.5 text-base font-semibold break-words">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="hover:text-primary block transition-colors">
        {inner}
      </a>
    );
  }
  return inner;
}
