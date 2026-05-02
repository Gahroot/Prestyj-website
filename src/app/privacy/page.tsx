import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import BorderGlow from "@/components/ui/border-glow";

export const metadata = {
  title: "Privacy Policy - PRESTYJ",
  description: "Privacy Policy for PRESTYJ AI Sales Agents. Learn how we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-8">
            Privacy Policy
          </h1>
          <p className="text-sm text-muted-foreground mb-8">
            Last Updated: May 2, 2026
          </p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-4">
                Introduction
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                PRESTYJ (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered sales agent services, including our SMS/text messaging services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-4">
                Information We Collect
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may collect the following types of information:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li><strong className="text-foreground">Contact Information:</strong> Name, phone number, email address</li>
                <li><strong className="text-foreground">Communication Data:</strong> Content of text messages and conversations with our AI agent</li>
                <li><strong className="text-foreground">Lead Information:</strong> Property interests, scheduling preferences, and qualification details</li>
                <li><strong className="text-foreground">Technical Data:</strong> Device information, IP address, browser type, and usage patterns</li>
                <li><strong className="text-foreground">Business Information:</strong> For our clients, CRM integration data and appointment records</li>
              </ul>
            </section>

            <BorderGlow borderRadius={10} innerClassName="p-6">
            <section id="sms-privacy">
              <h2 className="text-xl font-heading font-semibold text-foreground mb-4">
                SMS/Text Messaging Privacy
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When you provide your phone number and consent to receive text messages from PRESTYJ or our clients:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Your phone number will be used solely for the purpose of sending you relevant communications about real estate inquiries, appointment scheduling, and follow-up information</li>
                <li>Message frequency varies based on your interactions and inquiries</li>
                <li>Message and data rates may apply depending on your mobile carrier plan</li>
                <li>We do not sell, rent, or share your phone number with third parties for their marketing purposes</li>
                <li>Your consent to receive SMS messages is not a condition of purchasing any goods or services</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Opt-Out:</strong> You can opt out of receiving text messages at any time by replying <strong className="text-primary">STOP</strong> to any message. You will receive a confirmation message and will no longer receive SMS communications from that campaign.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-2">
                <strong className="text-foreground">Help:</strong> For assistance, reply <strong className="text-primary">HELP</strong> to any message or contact us at the information provided below.
              </p>
            </section>
            </BorderGlow>

            <section>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-4">
                How We Use Your Information
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Facilitate communication between leads and real estate professionals</li>
                <li>Qualify leads and schedule appointments on behalf of our clients</li>
                <li>Provide and improve our AI sales agent services</li>
                <li>Send relevant follow-up communications via SMS or email</li>
                <li>Analyze usage patterns to enhance our service quality</li>
                <li>Comply with legal obligations and enforce our terms</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-4">
                Information Sharing
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may share your information with:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li><strong className="text-foreground">Our Clients:</strong> Real estate professionals who use our services to respond to their leads</li>
                <li><strong className="text-foreground">Service Providers:</strong> Third-party vendors who assist in providing our services (e.g., SMS delivery, CRM integrations)</li>
                <li><strong className="text-foreground">Legal Requirements:</strong> When required by law or to protect our rights</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                We do not sell your personal information to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-4">
                Data Security
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-4">
                Data Retention
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. SMS opt-out requests are processed immediately and your number will be added to our suppression list.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-4">
                Your Rights
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Depending on your location, you may have the right to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt out of certain data processing activities</li>
                <li>Withdraw consent for SMS communications at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-4">
                Children&apos;s Privacy
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-4">
                Changes to This Policy
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-4">
                Media Master Desktop Application
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Media Master is our desktop application for AI-powered creative generation and multi-platform social media publishing. The following applies specifically to Media Master users:
              </p>

              <h3 className="text-lg font-heading font-medium text-foreground mb-3 mt-4">
                Data Collection & Storage
              </h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li><strong className="text-foreground">Local Storage:</strong> All app data — including API keys, uploaded images, offer and character configurations, generated content, and publishing history — is stored locally on your device. No user content is sent to PRESTYJ servers.</li>
                <li><strong className="text-foreground">API Keys:</strong> Your fal.ai API key is stored locally and used only to communicate directly with fal.ai for image generation. PRESTYJ does not access or transmit your API key.</li>
                <li><strong className="text-foreground">Social Media Connections:</strong> OAuth tokens for connected social platforms (Facebook, Instagram, TikTok, LinkedIn, X, YouTube, Threads, Pinterest, Reddit) are stored locally on your device. You control what gets published and to which platforms. PRESTYJ does not access your social media accounts.</li>
                <li><strong className="text-foreground">Waitlist Signups:</strong> When you join the Media Master waitlist, your name and email address are sent to PRESTYJ&apos;s CRM for communication purposes.</li>
              </ul>

              <h3 className="text-lg font-heading font-medium text-foreground mb-3 mt-4">
                Third-Party Services
              </h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li><strong className="text-foreground">fal.ai:</strong> Image prompts and reference images are sent to fal.ai&apos;s API for AI image generation. fal.ai processes this data according to their own privacy policy.</li>
                <li><strong className="text-foreground">Social Platform APIs:</strong> When you publish content, it is sent directly from your device to the respective social media platform&apos;s API. Each platform processes data according to their own terms and privacy policies.</li>
              </ul>

              <h3 className="text-lg font-heading font-medium text-foreground mb-3 mt-4">
                Data Deletion
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You can request deletion of your personal data at any time:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li><strong className="text-foreground">CRM Data:</strong> To delete your waitlist signup information (name and email), email <a href="mailto:hello@prestyj.com" className="text-primary hover:underline">hello@prestyj.com</a> with the subject line &quot;Data Deletion Request.&quot; Requests are processed within 30 days and you will receive a confirmation email once complete.</li>
                <li><strong className="text-foreground">Local App Data:</strong> All Media Master application data stored on your device can be deleted by uninstalling the application or manually deleting the application data directory.</li>
                <li><strong className="text-foreground">Published Content:</strong> Content already published to social media platforms must be deleted directly on those platforms. PRESTYJ cannot remove content from third-party services on your behalf.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-4">
                Contact Us
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="mt-4 text-muted-foreground">
                <p><strong className="text-foreground">PRESTYJ</strong></p>
                <p>Email: privacy@prestyj.com</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
