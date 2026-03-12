import { Header } from "@/components/layout/header";
import { MobileNav } from "@/components/layout/mobile-nav";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Wownero Moon Launch | Such Software",
  description: "Terms of service for Wownero Moon Launch mobile game.",
  alternates: { canonical: "/products/wownero-moon-launch/terms" },
};

export default function WowneroMoonLaunchTermsPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center bg-background text-foreground">
      <Header />
      <div id="main-content" className="z-10 w-full max-w-4xl mx-auto py-20 px-4 pb-24 md:pb-20">
        <Link href="/products/wownero-moon-launch" className="text-sm text-muted-foreground hover:text-foreground mb-8 inline-flex items-center gap-2 transition-colors">
          ← Back to Wownero Moon Launch
        </Link>

        <div className="glass-card mt-6">
          <header className="mb-8 pb-6 border-b border-border">
            <h1 className="text-3xl md:text-4xl font-bold">Terms of Service for Wownero Moon Launch</h1>
            <p className="text-muted-foreground mt-2">Last Updated: March 12, 2026</p>
          </header>

          <div className="prose dark:prose-invert max-w-none">
            <p>
              These Terms of Service (&quot;Terms&quot;) govern your use of the Wownero Moon Launch application
              (the &quot;App&quot;) operated by <strong>Such Software LLC</strong> (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
              By downloading, installing, or using the App, you agree to be bound by these Terms.
            </p>

            <hr />

            <h2>1. Use of the App</h2>
            <p>
              Wownero Moon Launch is a video game provided for entertainment purposes. You may use the App
              on any supported device for personal, non-commercial use.
            </p>
            <p>You agree not to:</p>
            <ul>
              <li>Reverse engineer, decompile, or disassemble the App</li>
              <li>Modify, adapt, or create derivative works based on the App</li>
              <li>Use the App for any illegal or unauthorized purpose</li>
              <li>Attempt to gain unauthorized access to our servers or backend systems</li>
              <li>Manipulate leaderboard scores or exploit bugs to gain unfair advantage</li>
              <li>Use automated tools, bots, or scripts to interact with the App</li>
            </ul>

            <hr />

            <h2>2. Accounts and User Content</h2>
            <p>
              The App does not require an account to play. A randomly generated anonymous device ID
              is used for leaderboard and cloud save features. You may set a display name (nickname)
              that is visible on public leaderboards.
            </p>
            <p>
              You are responsible for any content you submit, including display names. We reserve
              the right to remove or modify any display name that is offensive, misleading, or
              violates these Terms.
            </p>
            <p>
              On Android, the App may sign you into Google Play Games Services automatically for
              achievement tracking. This is governed by Google&apos;s Terms of Service.
            </p>

            <hr />

            <h2>3. In-Game Currency</h2>
            <p>
              The App contains virtual in-game currency (&quot;Moonrocks&quot;) earned through gameplay.
              Moonrocks have no real-world monetary value and cannot be exchanged, sold, or
              transferred outside the App. The crypto-themed collectibles (WOW, XMR, BTC, DOGE)
              are purely virtual game items and do not represent real cryptocurrency.
            </p>

            <hr />

            <h2>4. In-App Purchases</h2>
            <p>
              The App may offer in-app purchases (such as &quot;Remove Ads&quot;) through the Apple App Store
              or Google Play Store. All purchases are processed by the respective platform and are
              subject to their terms and refund policies.
            </p>
            <ul>
              <li>All purchases are final unless required otherwise by applicable law or platform policy</li>
              <li>Purchase of &quot;Remove Ads&quot; permanently removes all advertisements from the App on that device</li>
              <li>We do not process or store your payment information</li>
            </ul>

            <hr />

            <h2>5. Advertisements</h2>
            <p>
              The mobile and web versions of the App display advertisements provided by Google AdMob
              and Google AdSense. Desktop versions (Windows, macOS, Linux) are ad-free.
            </p>
            <p>
              You may remove ads by purchasing the &quot;Remove Ads&quot; upgrade within the App.
              Ad display is subject to our{" "}
              <Link href="/products/wownero-moon-launch/privacy">Privacy Policy</Link>.
            </p>

            <hr />

            <h2>6. Leaderboards and Cloud Save</h2>
            <p>
              The App provides online leaderboards and cloud save functionality through our backend
              servers. We make reasonable efforts to maintain these services but do not guarantee
              uninterrupted availability.
            </p>
            <ul>
              <li>Leaderboard scores are publicly visible with your chosen display name</li>
              <li>We reserve the right to remove scores that appear to be fraudulent or manipulated</li>
              <li>Cloud save data may be lost in the event of server failure; we recommend keeping local saves</li>
              <li>We may discontinue online services with reasonable notice</li>
            </ul>

            <hr />

            <h2>7. Intellectual Property</h2>
            <p>
              The App, including its code, art, music, sound effects, and design, is the property
              of Such Software LLC and is protected by copyright and other intellectual property laws.
            </p>
            <p>
              &quot;Wownero,&quot; &quot;Monero,&quot; &quot;Bitcoin,&quot; and other cryptocurrency names and logos used
              in the App are trademarks of their respective owners and are used under fair use
              for thematic purposes only. The App is not affiliated with or endorsed by any
              cryptocurrency project.
            </p>

            <hr />

            <h2>8. Disclaimer of Warranties</h2>
            <p>
              THE APP IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND,
              EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
            <p>
              We do not warrant that the App will be uninterrupted, error-free, or free of
              harmful components. You use the App at your own risk.
            </p>

            <hr />

            <h2>9. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, SUCH SOFTWARE LLC SHALL NOT BE
              LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES,
              OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR
              ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
            </p>
            <ul>
              <li>Your use or inability to use the App</li>
              <li>Any unauthorized access to or use of our servers</li>
              <li>Any loss of game progress, leaderboard data, or cloud save data</li>
              <li>Any bugs, viruses, or other harmful code transmitted through the App</li>
            </ul>

            <hr />

            <h2>10. Termination</h2>
            <p>
              We may terminate or suspend your access to the App at any time, without prior notice,
              for conduct that we believe violates these Terms or is harmful to other users, us,
              or third parties.
            </p>

            <hr />

            <h2>11. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the
              State of Delaware, United States, without regard to its conflict of law provisions.
            </p>

            <hr />

            <h2>12. Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. We will notify you of any changes by
              posting the new Terms on this page and updating the &quot;Last Updated&quot; date. Your continued
              use of the App after changes are posted constitutes acceptance of the revised Terms.
            </p>

            <hr />

            <h2>13. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us:</p>
            <p>
              <strong>Such Software LLC</strong><br />
              Email: apps@such.software<br />
              Website:{" "}
              <a href="https://such.software" target="_blank" rel="noopener noreferrer">
                https://such.software
              </a>
            </p>
          </div>
        </div>
      </div>
      <MobileNav />
    </main>
  );
}
