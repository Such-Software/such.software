import { Header } from "@/components/layout/header";
import { MobileNav } from "@/components/layout/mobile-nav";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Such Software",
  description: "Privacy policy for Such Software LLC and its websites and applications.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy | Such Software",
    description: "Privacy policy for Such Software LLC and its websites and applications.",
    type: "website",
  },
};

export default function PrivacyPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center bg-background text-foreground">
      <Header />
      <div id="main-content" className="z-10 w-full max-w-3xl mx-auto py-20 px-4 pb-24 md:pb-20">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

        <div className="prose dark:prose-invert max-w-none space-y-6">
          <p className="text-muted-foreground">Last updated: April 9, 2026</p>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Who We Are</h2>
            <p>
              Such Software LLC (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is a software studio based in Kennett Square, Pennsylvania, USA.
              This policy covers our website at such.software and all subdomains (collectively, the &quot;Site&quot;).
            </p>
            <p>
              For privacy policies specific to our mobile applications, see:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><Link href="/products/vegan-iq/privacy" className="text-blue-600 dark:text-blue-400 hover:underline">Vegan IQ Privacy Policy</Link></li>
              <li><Link href="/products/bauhaus-echo/privacy" className="text-blue-600 dark:text-blue-400 hover:underline">Bauhaus Echo Privacy Policy</Link></li>
              <li><Link href="/products/suchoice/privacy" className="text-blue-600 dark:text-blue-400 hover:underline">Suchoice Privacy Policy</Link></li>
              <li><Link href="/products/wownero-moon-launch/privacy" className="text-blue-600 dark:text-blue-400 hover:underline">Wownero Moon Launch Privacy Policy</Link></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Information We Collect</h2>

            <h3 className="text-xl font-medium mt-4 mb-2">Contact Form Submissions</h3>
            <p>
              If you use the contact form on our Site, we collect the information you provide: your name, email address, and message.
              This information is used solely to respond to your inquiry. We do not add you to marketing lists or share your contact
              information with third parties.
            </p>

            <h3 className="text-xl font-medium mt-4 mb-2">Automatically Collected Information</h3>
            <p>
              Our Site does not use analytics services, tracking pixels, or advertising cookies.
              We do not use Google Analytics, Facebook Pixel, or similar tracking tools on this website.
            </p>
            <p>
              Our hosting infrastructure (Vercel) may collect standard server logs including IP addresses, browser type,
              and pages visited. This data is used for security and performance purposes and is subject to{" "}
              <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                Vercel&apos;s Privacy Policy
              </a>.
            </p>

            <h3 className="text-xl font-medium mt-4 mb-2">Cookies and Local Storage</h3>
            <p>
              Our Site uses <strong>localStorage</strong> (not cookies) to store your theme preference (light or dark mode).
              This is a functional preference stored only in your browser and is never transmitted to our servers.
            </p>
            <p>
              Our contact form uses Cloudflare Turnstile for bot protection, which may set a strictly necessary security cookie.
              This cookie is exempt from consent requirements under GDPR as it is necessary for the legitimate function of the form.
            </p>
            <p>
              We do not set any advertising, analytics, or tracking cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To respond to contact form inquiries.</li>
              <li>To maintain and improve the security and performance of the Site.</li>
              <li>To remember your theme preference via localStorage.</li>
            </ul>
            <p className="mt-4">We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Third-Party Services</h2>
            <p>The Site uses the following third-party services:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Vercel</strong> — hosting and deployment.{" "}
                <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Privacy Policy</a>
              </li>
              <li>
                <strong>Cloudflare Turnstile</strong> — bot protection on the contact form.{" "}
                <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Privacy Policy</a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Data Retention</h2>
            <p>
              Contact form submissions are retained only as long as necessary to respond to your inquiry.
              Server logs maintained by our hosting provider are subject to their own retention policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Your Rights</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Access</strong> the personal data we hold about you.</li>
              <li><strong>Request deletion</strong> of your personal data.</li>
              <li><strong>Opt out</strong> of any data processing (though we perform minimal processing as described above).</li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, contact us at{" "}
              <a href="mailto:privacy@such.software" className="text-blue-600 dark:text-blue-400 hover:underline">privacy@such.software</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Children&apos;s Privacy</h2>
            <p>
              Our Site is not directed at children under the age of 13. We do not knowingly collect personal
              information from children under 13. If you believe a child has provided us with personal information,
              please contact us and we will promptly delete it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated
              &quot;Last updated&quot; date. Your continued use of the Site after any changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contact Us</h2>
            <p>
              Such Software LLC<br />
              110 E State St, Suite 300<br />
              Kennett Square, PA 19348<br />
              USA
            </p>
            <p className="mt-2">
              Email: <a href="mailto:privacy@such.software" className="text-blue-600 dark:text-blue-400 hover:underline">privacy@such.software</a>
            </p>
          </section>
        </div>
      </div>
      <MobileNav />
    </main>
  );
}
