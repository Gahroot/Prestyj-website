import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";

export const metadata = {
  title: "Terms of Service - PRESTYJ",
  description: "Terms of Service for PRESTYJ AI Sales Agents. Read our terms and conditions for using our services.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-8">
            Terms of Service
          </h1>
          <p className="text-sm text-muted-foreground mb-8">
            Last Updated: January 19, 2026
          </p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-4">
                Agreement to Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using PRESTYJ&apos;s services, including our AI-powered sales agent platform and SMS/text messaging services, you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-4">
                Description of Services
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                PRESTYJ provides AI-powered sales agent services for real estate professionals. Our services include automated lead response, lead qualification, appointment scheduling, and follow-up communications via SMS/text messaging and other channels. Our AI agent engages with leads on behalf of our clients to facilitate real estate transactions.
              </p>
            </section>

            <section id="sms-terms" className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-xl font-heading font-semibold text-foreground mb-4">
                SMS/Text Messaging Terms
              </h2>

              <h3 className="text-lg font-heading font-medium text-foreground mb-3 mt-4">
                Consent to Receive Messages
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                By providing your phone number and opting in to receive text messages, you expressly consent to receive automated and AI-generated text messages from PRESTYJ and/or our clients at the phone number you provided. This consent includes messages sent using an automatic telephone dialing system.
              </p>

              <h3 className="text-lg font-heading font-medium text-foreground mb-3">
                Message Frequency & Charges
              </h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Message frequency varies based on your interactions and the nature of your inquiry</li>
                <li>Message and data rates may apply based on your mobile carrier plan</li>
                <li>You are responsible for any charges from your mobile carrier</li>
                <li>PRESTYJ is not responsible for delayed or undelivered messages</li>
              </ul>

              <h3 className="text-lg font-heading font-medium text-foreground mb-3">
                Opt-Out Instructions
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You may opt out of receiving text messages at any time by replying <strong className="text-primary">STOP</strong> to any message you receive from us. After opting out, you will receive a final confirmation message, and no further messages will be sent unless you re-opt in.
              </p>

              <h3 className="text-lg font-heading font-medium text-foreground mb-3">
                Help & Support
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For help or information about our SMS program, reply <strong className="text-primary">HELP</strong> to any message or contact us at support@prestyj.com.
              </p>

              <h3 className="text-lg font-heading font-medium text-foreground mb-3">
                Supported Carriers
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Our SMS services are compatible with major U.S. carriers including AT&T, Verizon, T-Mobile, Sprint, and most regional carriers. Carrier participation may vary.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-4">
                User Responsibilities
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When using our services, you agree to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Use the services only for lawful purposes</li>
                <li>Not attempt to interfere with or disrupt our services</li>
                <li>Not impersonate any person or entity</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-4">
                Client Responsibilities (For Business Users)
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you are a real estate professional using PRESTYJ services, you additionally agree to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Ensure all leads you upload have provided proper consent to be contacted</li>
                <li>Comply with all applicable federal and state regulations, including the Telephone Consumer Protection Act (TCPA) and state telemarketing laws</li>
                <li>Maintain accurate records of consent for all contacts</li>
                <li>Honor all opt-out requests promptly</li>
                <li>Use our services only for legitimate real estate business purposes</li>
                <li>Not use our services to send spam, fraudulent, or misleading messages</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-4">
                AI-Generated Communications
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                You acknowledge that communications from PRESTYJ may be generated by artificial intelligence. While we strive for accuracy, AI-generated content may occasionally contain errors. Our AI agent operates under the supervision of our clients and is designed to facilitate, not replace, human interaction in the real estate process.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-4">
                Intellectual Property
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                All content, features, and functionality of our services, including but not limited to text, graphics, logos, and software, are owned by PRESTYJ and are protected by copyright, trademark, and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-4">
                Disclaimer of Warranties
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our services are provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express or implied. We do not guarantee that our services will be uninterrupted, error-free, or secure. We are not responsible for the outcome of any real estate transactions facilitated through our platform.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-4">
                Limitation of Liability
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                To the fullest extent permitted by law, PRESTYJ shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services, including but not limited to lost profits, lost data, or business interruption.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-4">
                Indemnification
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree to indemnify and hold harmless PRESTYJ, its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from your use of our services or violation of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-4">
                Dispute Resolution
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Any disputes arising from these Terms or your use of our services shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association. You agree to waive any right to participate in a class action lawsuit or class-wide arbitration.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-4">
                Termination
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to terminate or suspend your access to our services at any time, with or without cause, and with or without notice. Upon termination, your right to use our services will immediately cease.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-4">
                Changes to Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We may modify these Terms at any time. We will notify you of material changes by posting the updated Terms on our website. Your continued use of our services after such changes constitutes acceptance of the new Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-4">
                Governing Law
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the United States and the State of Delaware, without regard to conflict of law principles.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-4">
                Contact Information
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms, please contact us at:
              </p>
              <div className="mt-4 text-muted-foreground">
                <p><strong className="text-foreground">PRESTYJ</strong></p>
                <p>Email: legal@prestyj.com</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-4">
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
