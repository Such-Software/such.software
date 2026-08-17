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
          <p className="text-muted-foreground">Last updated: July 26, 2026</p>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
            <p>
              Such Software LLC (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates the Vegan IQ mobile application (the &quot;App&quot;).
              This Privacy Policy explains what information the App collects, how we use it, and the choices you have.
              We collect as little as possible and we never sell your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Information We Collect</h2>

            <h3 className="text-xl font-medium mt-4 mb-2">Stored on your device</h3>
            <p>
              Your score history, streaks, preferences, and quiz progress are stored locally on your device.
              Most of your activity stays on the device and is never sent anywhere.
            </p>

            <h3 className="text-xl font-medium mt-4 mb-2">Usage analytics and crash diagnostics</h3>
            <p>
              We use Google Firebase Analytics to understand which features are used and how players progress, and Google Firebase
              Crashlytics to receive crash and error reports (device model, OS version, and a stack trace) so we can fix bugs.
              This information is pseudonymous and is not linked to your real-world identity.
            </p>

            <h3 className="text-xl font-medium mt-4 mb-2">Progress sync and the optional leaderboard</h3>
            <p>
              The App generates a random device identifier &mdash; not your Apple or Google account, name, or email &mdash; that it uses
              to sync your progress and to power the optional leaderboard. If you choose to join the leaderboard, the display name you
              pick is shown publicly on it; please do not use a name you would rather keep private. Leaving the leaderboard removes your
              name. This data is sent over an encrypted, cryptographically-signed connection to our backend.
            </p>

            <h3 className="text-xl font-medium mt-4 mb-2">Notifications</h3>
            <p>
              If you enable notifications, we use Google Firebase Cloud Messaging and store a push token so we can send you streak and
              daily-challenge reminders. You can turn notifications off at any time in your device settings.
            </p>

            <h3 className="text-xl font-medium mt-4 mb-2">In-app purchases</h3>
            <p>
              Vegan IQ offers optional tips and support purchases. These are processed entirely by Apple (via StoreKit) or Google (via
              Google Play Billing); we do not receive or store your payment details, only a confirmation that a purchase completed.
            </p>

            <h3 className="text-xl font-medium mt-4 mb-2">Advertising</h3>
            <p>
              <strong>The App does not currently display advertisements</strong> and does not use advertising identifiers such as the
              Android Advertising ID or iOS IDFA. If we introduce ads in the future, we will update this policy and, in regions that
              require it, ask for your consent through Google&apos;s User Messaging Platform before any ads are shown.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Save and sync your game progress, streaks, and preferences.</li>
              <li>Operate the optional public leaderboard (only if you opt in).</li>
              <li>Understand and improve how the App is used, and diagnose crashes.</li>
              <li>Send the reminders you have opted into.</li>
              <li>Process optional in-app tips and support purchases.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Third-Party Services</h2>
            <p>We rely on a small number of service providers to run the App:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Firebase</a> &mdash; analytics, crash reporting, and push notifications.</li>
              <li><a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Apple App Store</a> and <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Play</a> &mdash; in-app purchases.</li>
            </ul>
            <p className="mt-4">We do not sell your personal data.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Your Choices</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Turn notifications on or off at any time in your device settings.</li>
              <li>Leave the leaderboard to remove your public display name.</li>
              <li>Reset the App&apos;s data from within the App, or delete the App to remove local data.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Your Rights</h2>
            <p>
              Depending on where you live, you may have the right to know what data we hold, to request its deletion, and to
              non-discrimination for exercising these rights. Because progress and leaderboard data are tied to a random device
              identifier rather than your identity, you can remove the local copy by resetting or uninstalling the App; to delete
              leaderboard or sync data associated with your device from our backend, contact us and we will remove it.
            </p>
            <p className="mt-4">
              To exercise any of these rights, contact us at <a href="mailto:privacy@such.software" className="text-blue-600 hover:underline">privacy@such.software</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Children&apos;s Privacy</h2>
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
