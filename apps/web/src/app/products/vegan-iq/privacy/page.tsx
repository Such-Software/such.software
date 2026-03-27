import { Header } from "@/components/layout/header";
import { MobileNav } from "@/components/layout/mobile-nav";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vegan IQ Privacy Policy | Such Software",
  description: "Privacy policy for the Vegan IQ application.",
  alternates: { canonical: "/products/vegan-iq/privacy" },
};

export default function VeganIqPrivacyPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center bg-background text-foreground">
      <Header />
      <div id="main-content" className="z-10 w-full max-w-3xl mx-auto py-20 px-4 pb-24 md:pb-20">
        <Link href="/products/vegan-iq" className="text-sm text-muted-foreground hover:text-foreground mb-8 inline-block">
          ← Back to Vegan IQ
        </Link>

        <h1 className="text-4xl font-bold mb-8">Privacy Policy for Vegan IQ</h1>

        <div className="prose dark:prose-invert max-w-none space-y-6">
          <p className="text-muted-foreground">Last updated: March 26, 2026</p>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
            <p>
              Such Software ("we", "our", or "us") operates the Vegan IQ mobile application (the "App").
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our App.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
            <h3 className="text-xl font-medium mt-4 mb-2">Local Data</h3>
            <p>
              Vegan IQ stores your score history, preferences, and game progress locally on your device using shared_preferences.
              <strong> This data never leaves your device.</strong> There are no user accounts, no server-side storage, and no leaderboards.
              We do not collect your name, email address, photos, location, or any other personal information.
            </p>

            <h3 className="text-xl font-medium mt-4 mb-2">Advertising</h3>
            <p>
              We use Google AdMob to display advertisements in the App. AdMob may collect and use data, including device identifiers (such as the Android Advertising ID or iOS IDFA), IP addresses, and usage data, to provide personalized advertising.
            </p>
            <p>
              You can learn more about how Google uses information from sites or apps that use their services by visiting: <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google's Privacy & Terms</a>.
            </p>

            <h3 className="text-xl font-medium mt-4 mb-2">In-App Purchases</h3>
            <p>
              Vegan IQ offers in-app purchases to remove ads. Purchases are processed entirely by Apple (via StoreKit) or Google (via Google Play Billing) depending on your platform.
              We do not process or store your payment information (such as credit card numbers) directly; this is handled securely by Apple or Google.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
            <p>We use the information described above to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Serve advertisements to support the free version of the App.</li>
              <li>Process in-app purchases to remove ads.</li>
              <li>Store your game progress and preferences locally on your device.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Third-Party Services</h2>
            <p>
              The App uses third-party services that may collect information used to identify you.
              Link to privacy policy of third party service providers used by the app:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Play Services</a></li>
              <li><a href="https://support.google.com/admob/answer/6128543?hl=en" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">AdMob</a></li>
              <li><a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Apple App Store</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Ad Consent & Opt-Out</h2>
            <p>
              When you first launch Vegan IQ, the app will display a consent dialog (powered by Google's User Messaging Platform) if you are located in a region that requires consent for personalized advertising (such as the European Economic Area under GDPR, or California under CCPA/CPRA).
            </p>
            <h3 className="text-xl font-medium mt-4 mb-2">For EU/EEA Users (GDPR)</h3>
            <p>
              You will be presented with a consent form before any ads are shown. You may choose to accept or decline personalized advertising. If you decline, you will still see ads, but they will not be personalized based on your activity. You can change your consent at any time by reinstalling the app or contacting us.
            </p>
            <h3 className="text-xl font-medium mt-4 mb-2">For California Users (CCPA/CPRA)</h3>
            <p>
              Under the California Consumer Privacy Act, you have the right to opt out of the "sale" or "sharing" of your personal information. Google AdMob's use of device identifiers for personalized advertising may constitute a "sale" or "sharing" under CCPA. You can opt out via the consent dialog shown on first launch, or by adjusting your device's ad tracking settings:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>iOS:</strong> Settings → Privacy & Security → Tracking → disable "Allow Apps to Request to Track"</li>
              <li><strong>Android:</strong> Settings → Privacy → Ads → enable "Opt out of Ads Personalization" (or "Delete advertising ID")</li>
            </ul>
            <h3 className="text-xl font-medium mt-4 mb-2">Remove Ads Entirely</h3>
            <p>
              You can purchase "Remove Ads" within the app to permanently disable all advertising. This eliminates all ad-related data collection.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Your Rights</h2>
            <p>Depending on your location, you may have the following rights regarding your data:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Right to know</strong> what personal data is collected and how it is used.</li>
              <li><strong>Right to delete</strong> your personal data. Since we store data only locally on your device, you can delete all app data by uninstalling the app or clearing app data in your device settings.</li>
              <li><strong>Right to opt out</strong> of personalized advertising (see Section 5 above).</li>
              <li><strong>Right to non-discrimination</strong> for exercising your privacy rights.</li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, contact us at <a href="mailto:privacy@such.software" className="text-blue-600 hover:underline">privacy@such.software</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Children's Privacy</h2>
            <p>
              These Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contact Us</h2>
            <p>
              If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at privacy@such.software.
            </p>
          </section>
        </div>
      </div>
      <MobileNav />
    </main>
  );
}
