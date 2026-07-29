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
      <div
        id="main-content"
        className="z-10 w-full max-w-3xl mx-auto py-20 px-4 pb-24 md:pb-20"
      >
        <Link
          href="/products/vegan-iq"
          className="text-sm text-muted-foreground hover:text-foreground mb-8 inline-block"
        >
          ← Back to Vegan IQ
        </Link>

        <h1 className="text-4xl font-bold mb-8">Privacy Policy for Vegan IQ</h1>

        <div className="prose dark:prose-invert max-w-none space-y-6">
          <p className="text-muted-foreground">Last updated: July 29, 2026</p>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Scope</h2>
            <p>
              Such Software (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;)
              operates the Vegan IQ mobile application (the &quot;App&quot;).
              This policy describes the data used by the current iOS and Android
              releases, why it is used, and the choices available to you. Vegan
              IQ does not require an account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">
              2. Data on your device
            </h2>
            <p>
              The App stores quiz progress, scores, streaks, achievements,
              question-feedback choices, notification state, leaderboard
              choices, purchase entitlements, sound and haptic settings, theme,
              onboarding state, and downloaded question content locally. You can
              remove this local data by clearing the App&apos;s storage or
              uninstalling it. Some of the same gameplay events or results are
              also processed as described below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">
              3. Data we process
            </h2>
            <h3 className="text-xl font-medium mt-4 mb-2">
              Anonymous installation identifier
            </h3>
            <p>
              On first launch, the App creates a random identifier for that
              installation. We use it to associate analytics events and, when
              you use the relevant features, challenge answers, weekly results,
              question feedback, or opt-in leaderboard statistics. It is not an
              advertising identifier and is not connected to a Vegan IQ account.
              If you choose a public leaderboard display name, that name is
              connected to this identifier.
            </p>

            <h3 className="text-xl font-medium mt-4 mb-2">
              App use and gameplay
            </h3>
            <p>
              We use Firebase Analytics to understand app launches, screens and
              tabs viewed, quiz and challenge interactions, answers, scores,
              streaks, achievements, shares, prompts, and purchase-funnel
              events. Related data can include app version, session information,
              locale, device model, operating-system version, product
              identifiers, transaction identifiers, value, and currency.
              Firebase may also receive an app-instance identifier, IP address,
              and coarse region inferred from network information.
            </p>

            <h3 className="text-xl font-medium mt-4 mb-2">Diagnostics</h3>
            <p>
              Firebase Crashlytics processes crash reports, non-fatal errors,
              stack traces, app and device state, app version, installation
              identifiers, and analytics breadcrumbs so we can diagnose
              reliability problems.
            </p>

            <h3 className="text-xl font-medium mt-4 mb-2">
              Challenges, feedback, and leaderboards
            </h3>
            <p>
              Our API stores the random installation identifier with
              daily-challenge answers, weekly-quiz scores, and question ratings.
              Leaderboards are off by default. If you opt in, we store a
              statistics snapshot and either no name (statistics-only mode) or
              the public display name you choose. Public boards can show that
              display name and score or streak. We do not ask for your legal
              name.
            </p>

            <h3 className="text-xl font-medium mt-4 mb-2">Notifications</h3>
            <p>
              If you opt in to notifications, Firebase Cloud Messaging and Apple
              Push Notification service or Google Play Services process a push
              token and device delivery information. Our API stores that token
              with platform and app version so it can deliver challenge and quiz
              reminders. The App also schedules some reminders locally on your
              device.
            </p>

            <h3 className="text-xl font-medium mt-4 mb-2">App integrity</h3>
            <p>
              Firebase App Check uses Apple DeviceCheck on iOS and Play
              Integrity on Android to produce short-lived app-attestation
              tokens. Our API verifies those tokens to reduce automated abuse.
              Apple, Google, and Firebase may process device or integrity
              signals to provide this service; our server receives the resulting
              token and claims, not the underlying hardware signals.
            </p>

            <h3 className="text-xl font-medium mt-4 mb-2">Purchases</h3>
            <p>
              Apple or Google processes payments and purchase history for
              optional tips and entitlements. We do not receive or store your
              full payment-card details. The App receives product and
              transaction information needed to deliver and restore the
              purchase.
            </p>

            <h3 className="text-xl font-medium mt-4 mb-2">
              What we do not collect
            </h3>
            <p>
              The App does not ask for an account, email address, phone number,
              contacts, photos, precise location, health data, or payment-card
              number. The current 1.4 release does not initialize, request, or
              display ads and does not request permission to track. Older
              versions that displayed ads may have used Google AdMob and its
              consent tools; update the App to the current release.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">
              4. Why we use data
            </h2>
            <p>We use the data above to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                provide quizzes, content updates, streaks, leaderboards,
                purchases, and notifications;
              </li>
              <li>protect the API and maintain the security of the App;</li>
              <li>measure feature use and improve content and usability;</li>
              <li>diagnose crashes, errors, and performance problems; and</li>
              <li>comply with legal obligations and enforce our terms.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">
              5. Service providers and disclosure
            </h2>
            <p>
              We disclose data only as needed to operate the App, to comply with
              law, or to protect rights and safety. Our principal providers are
              Google Firebase (Analytics, Crashlytics, Cloud Messaging, and App
              Check), Google Play, Apple App Store and Apple device services,
              and infrastructure providers that host our API. Their processing
              is governed by their terms and privacy policies.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <a
                  href="https://firebase.google.com/support/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Firebase privacy and security
                </a>
              </li>
              <li>
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Google Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://www.apple.com/legal/privacy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Apple Privacy Policy
                </a>
              </li>
            </ul>
            <p>
              We do not sell personal information, share it for cross-context
              behavioral advertising, or track your activity across other
              companies&apos; apps or websites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">
              6. Retention and your choices
            </h2>
            <p>
              Custom-backend records are retained while needed to provide the
              related feature or until you delete them. Notification tokens
              remain until disabled or deleted. Firebase and store data follows
              the retention configured for, or controlled by, those services;
              some diagnostics and aggregate reporting may be retained after
              identifiers are removed.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Notifications:</strong> turn them off in Vegan IQ
                Settings or device settings.
              </li>
              <li>
                <strong>Leaderboards:</strong> leave the boards in Settings to
                delete your leaderboard row and statistics.
              </li>
              <li>
                <strong>Custom server data:</strong> choose Settings → Anonymous
                data → Delete server data to remove challenge answers, weekly
                results, question feedback, leaderboard records, and the
                registered push token for that installation.
              </li>
              <li>
                <strong>Local data:</strong> clear App storage or uninstall the
                App.
              </li>
            </ul>
            <p>
              Depending on where you live, you may also have rights to access,
              correct, delete, restrict, or object to processing, to receive a
              portable copy, and to appeal or complain to a regulator. We will
              not discriminate against you for exercising a privacy right. The
              App can copy your anonymous installation ID from Settings to help
              us locate a request. Contact{" "}
              <a
                href="mailto:privacy@such.software"
                className="text-blue-600 hover:underline"
              >
                privacy@such.software
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Children</h2>
            <p>
              Vegan IQ is a general-audience trivia app and is not directed to
              children under 13. We do not knowingly collect personal
              information from a child under 13. If you believe a child provided
              such information, contact us so we can investigate and delete it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">
              8. Security and international processing
            </h2>
            <p>
              We use technical and organizational safeguards appropriate to the
              data, including encrypted transport and app attestation. No system
              is completely secure. We and our providers may process data in the
              United States and other countries where safeguards and legal
              rights may differ from those in your country.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">
              9. Changes and contact
            </h2>
            <p>
              We may update this policy as the App changes. We will post the
              revised policy here and update the date above. Material changes
              will be communicated where required. For questions or privacy
              requests, email{" "}
              <a
                href="mailto:privacy@such.software"
                className="text-blue-600 hover:underline"
              >
                privacy@such.software
              </a>
              .
            </p>
          </section>
        </div>
      </div>
      <MobileNav />
    </main>
  );
}
