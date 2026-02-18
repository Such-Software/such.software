import { Header } from "@/components/layout/header";
import { MobileNav } from "@/components/layout/mobile-nav";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Bauhaus Echo | Such Software",
  description: "Privacy policy for Bauhaus Echo mobile game. GDPR and CPRA compliant.",
  alternates: { canonical: "/products/bauhaus-echo/privacy" },
};

export default function BauhausEchoPrivacyPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center bg-background text-foreground">
      <Header />
      <div id="main-content" className="z-10 w-full max-w-4xl mx-auto py-20 px-4 pb-24 md:pb-20">
        <Link href="/products/bauhaus-echo" className="text-sm text-muted-foreground hover:text-emerald-600 dark:hover:text-emerald-400 mb-8 inline-flex items-center gap-2 transition-colors">
          ← Back to Bauhaus Echo
        </Link>

        <div className="glass-card mt-6">
          <header className="mb-8 pb-6 border-b border-border">
            <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy for Bauhaus Echo</h1>
            <p className="text-muted-foreground mt-2">Last Updated: February 18, 2026</p>
          </header>

          <div className="prose dark:prose-invert max-w-none">
            <p>
              <strong>Such Software LLC</strong> (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the Bauhaus Echo mobile 
              application (the &quot;App&quot;). This page informs you of our policies regarding the collection, 
              use, and disclosure of personal data when you use our App.
            </p>

            <hr />

            <h2>Your Privacy Choices (GDPR/CPRA)</h2>
            <p>
              <strong>We respect your privacy.</strong> When you first open the App, you may see a consent 
            dialog depending on your location:
          </p>
          <ul>
            <li><strong>EU/UK Users (GDPR):</strong> You will be asked to consent before we show personalized ads. You can accept, decline, or manage your preferences.</li>
            <li><strong>California/US Users (CPRA):</strong> You will have the option to opt out of the sale or sharing of your personal information.</li>
          </ul>
          <p><strong>Your choices:</strong></p>
          <ul>
            <li>If you <strong>decline</strong> consent, we will show non-personalized ads instead</li>
            <li>If you <strong>accept</strong>, ads may be personalized based on your interests</li>
            <li>You can <strong>change your choice</strong> at any time in the App settings</li>
          </ul>
          <p>
            <strong>Premium Users:</strong> If you purchase &quot;Remove Ads,&quot; no advertising data is collected and no consent is required.
          </p>

          <hr />

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
          <p>If you purchase the &quot;Remove Ads&quot; upgrade, your transaction is processed by:</p>
          <ul>
            <li><strong>Google Play</strong> (Android) — <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Play Privacy Policy</a></li>
            <li><strong>Apple App Store</strong> (iOS) — <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">Apple Privacy Policy</a></li>
          </ul>
          <p>
            We do not have access to your payment information. We only receive confirmation of your purchase status.
          </p>

          <h3>High Scores &amp; Leaderboards</h3>
          <p>
            If you submit scores to our online leaderboards, we collect:
          </p>
          <ul>
            <li>Your chosen display name (anonymous by default)</li>
            <li>Your game scores and statistics</li>
            <li>A randomly generated anonymous player ID</li>
          </ul>
          <p>
            We do <strong>not</strong> require or collect your real name, email, or any other
            personal information to use leaderboards.
          </p>

          <h3>Locally Stored Data</h3>
          <p>The App stores the following data locally on your device:</p>
          <ul>
            <li>Game progress and high scores</li>
            <li>Settings preferences (sound, music, grid size)</li>
            <li>Premium purchase status</li>
          </ul>
          <p>This data is not transmitted to our servers unless you use the online leaderboard feature.</p>

          <hr />

          <h2>How We Use Your Information</h2>
          <p>We use collected data to:</p>
          <ul>
            <li>Display advertisements (unless you purchase &quot;Remove Ads&quot;)</li>
            <li>Process in-app purchases</li>
            <li>Maintain online leaderboards</li>
            <li>Improve the App experience</li>
          </ul>

          <hr />

          <h2>Third-Party Services</h2>
          <p>The App uses the following third-party services that may collect information:</p>
          
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Service</th>
                  <th>Purpose</th>
                  <th>Privacy Policy</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Google AdMob</td>
                  <td>Advertising</td>
                  <td><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Link</a></td>
                </tr>
                <tr>
                  <td>Google UMP SDK</td>
                  <td>Consent management</td>
                  <td><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Link</a></td>
                </tr>
                <tr>
                  <td>Google Play Services</td>
                  <td>Android platform, billing</td>
                  <td><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Link</a></td>
                </tr>
                <tr>
                  <td>Apple StoreKit</td>
                  <td>iOS platform, billing</td>
                  <td><a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">Link</a></td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Google AdMob Data Collection</h3>
          <p>When ads are shown, Google AdMob may collect:</p>
          <ul>
            <li>Device advertising identifier</li>
            <li>IP address (for approximate location)</li>
            <li>Device information (model, OS version)</li>
            <li>App usage information</li>
          </ul>
          <p>This data is used to:</p>
          <ul>
            <li>Show relevant advertisements</li>
            <li>Measure ad performance</li>
            <li>Prevent fraud</li>
          </ul>
          <p>
            If you decline consent (EU/UK) or opt out (US), AdMob will show non-personalized ads and limit data collection.
          </p>

          <hr />

          <h2>Children&apos;s Privacy</h2>
          <p>
            The App is intended for general audiences and does not knowingly collect personal information 
            from children under 13. If you believe we have collected data from a child under 13, please 
            contact us immediately.
          </p>

          <hr />

          <h2>Data Retention</h2>
          <ul>
            <li><strong>Advertising data</strong> is managed by Google per their retention policies</li>
            <li><strong>Leaderboard data</strong> is retained indefinitely but can be deleted upon request</li>
            <li><strong>Local data</strong> is stored on your device until you uninstall the App</li>
          </ul>

          <hr />

          <h2>Your Rights</h2>
          <p>You may:</p>
          <ul>
            <li><strong>Control your consent</strong> via the in-app consent dialog (shown on first launch)</li>
            <li><strong>Change your privacy choices</strong> at any time via App settings (if available in your region)</li>
            <li>
              <strong>Opt out of personalized ads</strong> via your device settings:
              <ul>
                <li>Android: Settings → Google → Ads → Opt out of Ads Personalization</li>
                <li>iOS: Settings → Privacy → Tracking → Disable tracking for Bauhaus Echo</li>
              </ul>
            </li>
            <li><strong>Request deletion</strong> of your leaderboard data by contacting us</li>
            <li><strong>Remove local data</strong> by uninstalling the App</li>
          </ul>

          <h3>For EU/UK Residents (GDPR)</h3>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Rectify inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to processing</li>
            <li>Data portability</li>
          </ul>
          <p>To exercise these rights, contact us at the email below.</p>

          <h3>For California Residents (CPRA)</h3>
          <p>You have the right to:</p>
          <ul>
            <li>Know what personal information is collected</li>
            <li>Delete your personal information</li>
            <li>Opt out of the sale or sharing of personal information</li>
            <li>Non-discrimination for exercising your rights</li>
          </ul>
          <p>To opt out, use the consent dialog shown in the App or contact us.</p>

          <hr />

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by 
            posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date.
          </p>

          <hr />

          <h2>Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us:</p>
          <p>
            <strong>Such Software LLC</strong><br />
            Email: apps@such.software<br />
            Website:{" "}
            <a href="https://bauhaus.such.software" target="_blank" rel="noopener noreferrer">
              https://bauhaus.such.software
            </a>
          </p>

            <hr />

            <h2>Consent</h2>
            <p>By using Bauhaus Echo, you consent to this Privacy Policy.</p>
          </div>
        </div>
      </div>
      <MobileNav />
    </main>
  );
}
