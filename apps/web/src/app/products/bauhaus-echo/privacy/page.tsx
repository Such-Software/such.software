import { Header } from "@/components/layout/header";
import { MobileNav } from "@/components/layout/mobile-nav";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Bauhaus Echo | Such Software",
  description: "Privacy policy for Bauhaus Echo mobile game.",
  alternates: { canonical: "/products/bauhaus-echo/privacy" },
};

export default function BauhausEchoPrivacyPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center bg-background text-foreground">
      <Header />
      <div id="main-content" className="z-10 w-full max-w-3xl mx-auto py-20 px-4 pb-24 md:pb-20">
        <Link href="/products/bauhaus-echo" className="text-sm text-muted-foreground hover:text-foreground mb-8 inline-block">
          ← Back to Bauhaus Echo
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy for Bauhaus Echo</h1>
        <p className="text-muted-foreground mb-8">Last Updated: January 31, 2026</p>

        <div className="prose dark:prose-invert max-w-none">
          <p>
            <strong>Such Software LLC</strong> (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the Bauhaus Echo mobile 
            application (the &quot;App&quot;). This page informs you of our policies regarding the collection, 
            use, and disclosure of personal data when you use our App.
          </p>

          <h2>Information We Collect</h2>

          <h3>Advertising Data</h3>
          <p>
            We use <strong>Google AdMob</strong> to display advertisements. AdMob may collect and use 
            data to show you personalized ads. This data may include:
          </p>
          <ul>
            <li>Device identifiers (Advertising ID)</li>
            <li>IP address</li>
            <li>General location (country/region)</li>
            <li>App usage data</li>
          </ul>
          <p>
            For more information on how Google uses data, visit:{" "}
            <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">
              How Google uses information from sites or apps that use our services
            </a>
          </p>
          <p>
            <strong>iOS Users:</strong> We will ask for your permission via App Tracking Transparency (ATT) 
            before collecting data for personalized advertising. You can deny this request and still use 
            the app with non-personalized ads.
          </p>

          <h3>In-App Purchases</h3>
          <p>
            If you purchase the &quot;Remove Ads&quot; upgrade, your transaction is processed by Google Play (Android) 
            or the Apple App Store (iOS). We do not have access to your payment information. We only receive 
            confirmation of your purchase status.
          </p>

          <h3>High Scores &amp; Leaderboards</h3>
          <p>If you submit scores to our online leaderboards, we collect:</p>
          <ul>
            <li>Your chosen display name (anonymous by default)</li>
            <li>Your game scores and statistics</li>
            <li>A randomly generated anonymous player ID</li>
          </ul>
          <p>
            We do <strong>not</strong> require or collect your real name, email, or any other personal 
            information to use leaderboards.
          </p>

          <h3>Locally Stored Data</h3>
          <p>The App stores the following data locally on your device:</p>
          <ul>
            <li>Game progress and high scores</li>
            <li>Settings preferences (sound, music, grid size)</li>
            <li>Premium purchase status</li>
          </ul>
          <p>This data is not transmitted to our servers unless you use the online leaderboard feature.</p>

          <h2>How We Use Your Information</h2>
          <p>We use collected data to:</p>
          <ul>
            <li>Display advertisements (unless you purchase &quot;Remove Ads&quot;)</li>
            <li>Process in-app purchases</li>
            <li>Maintain online leaderboards</li>
            <li>Improve the App experience</li>
          </ul>

          <h2>Third-Party Services</h2>
          <p>The App uses the following third-party services that may collect information:</p>
          <ul>
            <li><strong>Google AdMob</strong> — Advertising</li>
            <li><strong>Google Play Services</strong> — Android platform and billing</li>
            <li><strong>Apple StoreKit</strong> — iOS platform and billing</li>
          </ul>

          <h2>Children&apos;s Privacy</h2>
          <p>
            The App is intended for general audiences and does not knowingly collect personal information 
            from children under 13. If you believe we have collected data from a child under 13, please 
            contact us immediately.
          </p>

          <h2>Data Retention</h2>
          <ul>
            <li><strong>Advertising data</strong> is managed by Google per their retention policies</li>
            <li><strong>Leaderboard data</strong> is retained indefinitely but can be deleted upon request</li>
            <li><strong>Local data</strong> is stored on your device until you uninstall the App</li>
          </ul>

          <h2>Your Rights</h2>
          <p>You may:</p>
          <ul>
            <li>
              <strong>Opt out of personalized ads</strong> via your device settings (Android: Settings → Google → Ads; 
              iOS: Settings → Privacy → Tracking)
            </li>
            <li><strong>Request deletion</strong> of your leaderboard data by contacting us</li>
            <li><strong>Remove local data</strong> by uninstalling the App</li>
          </ul>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by 
            posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date.
          </p>

          <h2>Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us:</p>
          <p>
            <strong>Such Software LLC</strong><br />
            Email: apps@such.software<br />
            Website: https://such.software
          </p>

          <h2>Consent</h2>
          <p>By using Bauhaus Echo, you consent to this Privacy Policy.</p>
        </div>
      </div>
      <MobileNav />
    </main>
  );
}
