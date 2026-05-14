import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import BorderGlow from "@/components/ui/border-glow";

export const metadata = {
  title: "Terms of Service - PRESTYJ",
  description:
    "Terms of Service for PRESTYJ AI Sales Agents. Read our terms and conditions for using our services.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-foreground mb-8 text-3xl font-bold sm:text-4xl">
            Terms of Service
          </h1>
          <p className="text-muted-foreground mb-8 text-sm">Last Updated: May 2, 2026</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="font-heading text-foreground mb-4 text-xl font-semibold">
                Business Entity
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms are a contract between you and{" "}
                <strong className="text-foreground">
                  [Legal Entity Name, a Delaware LLC, registered at [address]]
                </strong>{" "}
                (&quot;PRESTYJ,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
              </p>
              <p className="text-muted-foreground mt-2 text-xs italic">
                {/* TODO(owner): Replace the bracketed placeholder above with the registered
                business entity name and address before publishing. */}
                Note: registered entity name and address pending — to be completed by the owner.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-foreground mb-4 text-xl font-semibold">
                Agreement to Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using PRESTYJ&apos;s services, including our AI-powered sales agent
                platform and SMS/text messaging services, you agree to be bound by these Terms of
                Service (&quot;Terms&quot;). If you do not agree to these Terms, please do not use
                our services.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-foreground mb-4 text-xl font-semibold">
                Description of Services
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                PRESTYJ provides AI agents and automation services for businesses, including AI
                sales agents, AI marketing agents, AI lead response, AI appointment booking, and
                related communication and content services. Our AI agents engage with leads on
                behalf of our clients to facilitate sales and service bookings on behalf of
                clients.
              </p>
            </section>

            <BorderGlow borderRadius={10} innerClassName="p-6">
              <section id="sms-terms">
                <h2 className="font-heading text-foreground mb-4 text-xl font-semibold">
                  SMS/Text Messaging Terms
                </h2>

                <h3 className="font-heading text-foreground mt-4 mb-3 text-lg font-medium">
                  Consent to Receive Messages
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  By providing your phone number and opting in to receive text messages, you
                  expressly consent to receive automated and AI-generated text messages from PRESTYJ
                  and/or our clients at the phone number you provided. This consent includes
                  messages sent using an automatic telephone dialing system.
                </p>

                <h3 className="font-heading text-foreground mb-3 text-lg font-medium">
                  Message Frequency & Charges
                </h3>
                <ul className="text-muted-foreground mb-4 list-inside list-disc space-y-2">
                  <li>
                    Message frequency varies based on your interactions and the nature of your
                    inquiry
                  </li>
                  <li>Message and data rates may apply based on your mobile carrier plan</li>
                  <li>You are responsible for any charges from your mobile carrier</li>
                  <li>PRESTYJ is not responsible for delayed or undelivered messages</li>
                </ul>

                <h3 className="font-heading text-foreground mb-3 text-lg font-medium">
                  Opt-Out Instructions
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  You may opt out of receiving text messages at any time by replying{" "}
                  <strong className="text-primary">STOP</strong> to any message you receive from us.
                  After opting out, you will receive a final confirmation message, and no further
                  messages will be sent unless you re-opt in.
                </p>

                <h3 className="font-heading text-foreground mb-3 text-lg font-medium">
                  Help & Support
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  For help or information about our SMS program, reply{" "}
                  <strong className="text-primary">HELP</strong> to any message or contact us at
                  support@prestyj.com.
                </p>

                <h3 className="font-heading text-foreground mb-3 text-lg font-medium">
                  Supported Carriers
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our SMS services are compatible with major U.S. carriers including AT&T, Verizon,
                  T-Mobile, Sprint, and most regional carriers. Carrier participation may vary.
                </p>
              </section>
            </BorderGlow>

            <section>
              <h2 className="font-heading text-foreground mb-4 text-xl font-semibold">
                User Responsibilities
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                When using our services, you agree to:
              </p>
              <ul className="text-muted-foreground list-inside list-disc space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Use the services only for lawful purposes</li>
                <li>Not attempt to interfere with or disrupt our services</li>
                <li>Not impersonate any person or entity</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-foreground mb-4 text-xl font-semibold">
                Client Responsibilities (For Business Users)
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                If you are a business client using Prestyj services, you additionally agree to:
              </p>
              <ul className="text-muted-foreground list-inside list-disc space-y-2">
                <li>Ensure all leads you upload have provided proper consent to be contacted</li>
                <li>
                  Comply with all applicable federal and state regulations, including the Telephone
                  Consumer Protection Act (TCPA) and state telemarketing laws
                </li>
                <li>Maintain accurate records of consent for all contacts</li>
                <li>Honor all opt-out requests promptly</li>
                <li>Use our services only for legitimate business purposes</li>
                <li>Not use our services to send spam, fraudulent, or misleading messages</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-foreground mb-4 text-xl font-semibold">
                AI-Generated Communications
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                You acknowledge that communications from PRESTYJ may be generated by artificial
                intelligence. While we strive for accuracy, AI-generated content may occasionally
                contain errors. Our AI agent operates under the supervision of our clients and is
                designed to facilitate, not replace, human interaction in the client&apos;s sales
                process.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-foreground mb-4 text-xl font-semibold">
                Intellectual Property
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                All content, features, and functionality of our services, including but not limited
                to text, graphics, logos, and software, are owned by PRESTYJ and are protected by
                copyright, trademark, and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-foreground mb-4 text-xl font-semibold">
                Disclaimer of Warranties
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our services are provided &quot;as is&quot; and &quot;as available&quot; without
                warranties of any kind, either express or implied. We do not guarantee that our
                services will be uninterrupted, error-free, or secure. We are not responsible for
                the outcome of any transactions or bookings facilitated through our platform.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-foreground mb-4 text-xl font-semibold">
                Limitation of Liability
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                To the fullest extent permitted by law, PRESTYJ shall not be liable for any
                indirect, incidental, special, consequential, or punitive damages arising from your
                use of our services, including but not limited to lost profits, lost data, or
                business interruption.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-foreground mb-4 text-xl font-semibold">
                Indemnification
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree to indemnify and hold harmless PRESTYJ, its officers, directors,
                employees, and agents from any claims, damages, losses, or expenses arising from
                your use of our services or violation of these Terms.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-foreground mb-4 text-xl font-semibold">
                Dispute Resolution
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Any disputes arising from these Terms or your use of our services shall be resolved
                through binding arbitration in accordance with the rules of the American Arbitration
                Association. You agree to waive any right to participate in a class action lawsuit
                or class-wide arbitration.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-foreground mb-4 text-xl font-semibold">
                Cancellation &amp; Refunds
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                After onboarding is complete, PRESTYJ service plans run month-to-month with no
                long-term commitment. You may cancel at any time by emailing{" "}
                <a
                  href="mailto:support@prestyj.com"
                  className="text-primary hover:underline"
                >
                  support@prestyj.com
                </a>{" "}
                with at least <strong className="text-foreground">14 days&apos; notice</strong> before
                your next monthly billing date. Cancellation stops future monthly charges; fees
                already paid for the current billing period are non-refundable, and you retain
                access through the end of the period you paid for.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                <strong className="text-foreground">Setup fees</strong> are charged once at the
                start of onboarding and are generally non-refundable, except where a specific
                written guarantee (for example, a documented go-live SLA in your signed
                agreement) entitles you to a setup-fee refund. The applicable terms of any such
                guarantee are governed by your signed order form or service agreement, which
                controls in the event of any conflict with these Terms.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                PRESTYJ does not offer a general money-back guarantee on monthly subscription
                fees. Any refund outside of a written guarantee is granted at PRESTYJ&apos;s sole
                discretion. To request a refund or raise a billing dispute, contact{" "}
                <a
                  href="mailto:support@prestyj.com"
                  className="text-primary hover:underline"
                >
                  support@prestyj.com
                </a>{" "}
                within 30 days of the charge in question.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-foreground mb-4 text-xl font-semibold">
                Termination
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to terminate or suspend your access to our services at any
                time, with or without cause, and with or without notice. Upon termination, your
                right to use our services will immediately cease.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-foreground mb-4 text-xl font-semibold">
                Changes to Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We may modify these Terms at any time. We will notify you of material changes by
                posting the updated Terms on our website. Your continued use of our services after
                such changes constitutes acceptance of the new Terms.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-foreground mb-4 text-xl font-semibold">
                Governing Law
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the
                United States and the State of Delaware, without regard to conflict of law
                principles.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-foreground mb-4 text-xl font-semibold">
                Media Master Desktop Application
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                The following terms apply to users of Media Master, our desktop application for
                AI-powered creative generation and multi-platform publishing:
              </p>

              <h3 className="font-heading text-foreground mt-4 mb-3 text-lg font-medium">
                User Responsibilities
              </h3>
              <ul className="text-muted-foreground mb-4 list-inside list-disc space-y-2">
                <li>
                  You are responsible for maintaining your own API keys and third-party service
                  accounts (e.g., fal.ai)
                </li>
                <li>You retain full ownership of all content generated using Media Master</li>
                <li>
                  You are responsible for ensuring that published content complies with each social
                  media platform&apos;s terms of service and community guidelines
                </li>
                <li>
                  You must not use Media Master to generate misleading, deceptive, defamatory, or
                  harmful content
                </li>
                <li>
                  You must not use Media Master to spam, impersonate, or harass any individual or
                  organization
                </li>
                <li>
                  You are responsible for any content published through your connected social media
                  accounts
                </li>
              </ul>

              <h3 className="font-heading text-foreground mt-4 mb-3 text-lg font-medium">
                Third-Party Services
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Media Master integrates with third-party services including fal.ai and various
                social media platforms. These services are governed by their own terms of service
                and privacy policies. PRESTYJ does not guarantee the availability, accuracy, or
                performance of any third-party API or service.
              </p>

              <h3 className="font-heading text-foreground mt-4 mb-3 text-lg font-medium">
                Content Ownership & Licensing
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                You retain all rights to content you create using Media Master. By using the
                application, you acknowledge that AI-generated content may be subject to varying
                intellectual property protections depending on your jurisdiction. PRESTYJ makes no
                claims to ownership of your generated content.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-foreground mb-4 text-xl font-semibold">
                Contact Information
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms, please contact us at:
              </p>
              <div className="text-muted-foreground mt-4">
                <p>
                  <strong className="text-foreground">PRESTYJ</strong>
                </p>
                <p>Email: legal@prestyj.com</p>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-foreground mb-4 text-xl font-semibold">
                Privacy Policy
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Your use of our services is also governed by our{" "}
                <Link href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
                , which is incorporated into these Terms by reference.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
