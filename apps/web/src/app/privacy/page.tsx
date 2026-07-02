import { Header } from "@/components/layout/header";
import { MobileNav } from "@/components/layout/mobile-nav";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Such Software",
  description: "The umbrella privacy policy for the such.software website and Such Software LLC. Individual apps and games may have their own privacy policies.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy | Such Software",
    description: "The umbrella privacy policy for the such.software website and Such Software LLC. Individual apps and games may have their own privacy policies.",
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
          <p className="text-muted-foreground">Effective: July 2, 2026</p>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">The short version</h2>
            <p>
              Such Software LLC builds software, and we try to collect as little about you as possible.
              This umbrella policy covers our website at such.software and any Such Software product that
              does not have its own privacy policy. We do not run accounts on this website, we do not sell
              your data, and our website analytics are cookieless and self-hosted. Several of our products
              have their own privacy policies &mdash; those control for those products, and we link them below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Who we are and what this covers</h2>
            <p>
              Such Software LLC (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is a single-member LLC organized under the laws of
              the Commonwealth of Pennsylvania, United States (Chester County). This policy covers our
              website at such.software and its subdomains (the &quot;Site&quot;) and any Such Software app, game,
              wallet, or other software that does not have its own privacy policy.
            </p>
            <p>
              Some of our products publish their own privacy policies, and those policies govern those
              products instead of this one:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Hash Bags</strong> &mdash;{" "}
                <a href="https://hash.boats/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">hash.boats/privacy</a>
              </li>
              <li>
                <strong>Smirk</strong> &mdash;{" "}
                <a href="https://smirk.cash" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">smirk.cash</a>
              </li>
              <li><Link href="/products/vegan-iq/privacy" className="text-blue-600 dark:text-blue-400 hover:underline">Vegan IQ Privacy Policy</Link></li>
              <li><Link href="/products/bauhaus-echo/privacy" className="text-blue-600 dark:text-blue-400 hover:underline">Bauhaus Echo Privacy Policy</Link></li>
              <li><Link href="/products/suchoice/privacy" className="text-blue-600 dark:text-blue-400 hover:underline">Suchoice Privacy Policy</Link></li>
              <li><Link href="/products/such-moon-launch/privacy" className="text-blue-600 dark:text-blue-400 hover:underline">Such Moon Launch Privacy Policy</Link></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Information we collect on the Site</h2>

            <h3 className="text-xl font-medium mt-4 mb-2">Contact form submissions</h3>
            <p>
              If you use the contact form on the Site, we collect the information you provide: your name,
              email address, and message. We use this only to respond to your inquiry. We do not add you to
              marketing lists or share your contact information with third parties for marketing purposes.
            </p>

            <h3 className="text-xl font-medium mt-4 mb-2">Analytics</h3>
            <p>
              We use <strong>Umami</strong>, a privacy-respecting, self-hosted web analytics tool, to
              understand aggregate traffic to the Site (such as which pages are visited and where visitors
              arrive from). Umami is <strong>cookieless</strong> and runs on our own infrastructure &mdash;
              your data is not sent to a third-party analytics provider or data broker. It does{" "}
              <strong>not</strong> store your IP address, set tracking cookies, build cross-site profiles,
              or collect personally identifiable information. We honor the <strong>Do Not Track</strong> and{" "}
              <strong>Global Privacy Control</strong> browser signals: if either is enabled, no analytics are
              collected from your visit. We do not use Google Analytics, advertising pixels, or similar
              third-party tracking tools on the Site.
            </p>

            <h3 className="text-xl font-medium mt-4 mb-2">Server logs</h3>
            <p>
              Our infrastructure may record standard server logs (including IP addresses, browser type, and
              pages visited) for security and performance purposes. These logs are not used to identify or
              profile individual visitors and are retained only as long as needed for operational security.
            </p>

            <h3 className="text-xl font-medium mt-4 mb-2">Cookies and local storage</h3>
            <p>
              The Site uses <strong>localStorage</strong> (not cookies) to remember your theme preference
              (light or dark mode). This is a functional preference stored only in your browser and is never
              transmitted to our servers. Our contact form uses Cloudflare Turnstile for bot protection,
              which may set a strictly necessary security cookie; this cookie is exempt from consent
              requirements because it is necessary for the form to function. We do not set advertising,
              analytics, or tracking cookies on the Site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. How we use information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To respond to contact form inquiries.</li>
              <li>To maintain and improve the security and performance of the Site.</li>
              <li>To remember your theme preference via localStorage.</li>
            </ul>
            <p className="mt-4">We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Third-party services</h2>
            <p>The Site uses the following third-party service:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Cloudflare Turnstile</strong> &mdash; bot protection on the contact form.{" "}
                <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Privacy Policy</a>
              </li>
            </ul>
            <p className="mt-4">
              Our website analytics (Umami) and hosting are self-hosted on our own infrastructure and are
              therefore not third-party services. Our individual apps and games may use their own third-party
              services (such as app-store platforms, advertising, or payment providers); those are described
              in each product&apos;s own privacy policy, linked in Section 1.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Data retention</h2>
            <p>
              Contact form submissions are retained only as long as necessary to respond to your inquiry and
              keep a reasonable record of it. Server logs are retained only as long as needed for operational
              security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Your rights</h2>
            <p>
              Because we do not run accounts and store very little personal data through the Site, there is
              generally little for us to delete or export on request. To the extent we act as a controller of
              any personal data about you (for example, a contact-form message or support email you choose to
              send us), you may have rights depending on where you live, including the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Access</strong> the personal data we hold about you.</li>
              <li><strong>Request deletion</strong> or correction of that data.</li>
              <li><strong>Object to or restrict</strong> our processing of it, and, where applicable, request portability.</li>
              <li><strong>Opt out</strong> of any sale or sharing of personal information (we do not sell or share personal information).</li>
            </ul>
            <p className="mt-4">
              Residents of the EU/UK (including rights under GDPR Articles 15&ndash;22) and residents of
              California (under the CCPA/CPRA), among others, may exercise the rights available to them by
              contacting{" "}
              <a href="mailto:support@such.software" className="text-blue-600 dark:text-blue-400 hover:underline">support@such.software</a>.
              We will not discriminate against you for exercising these rights. For data held by a specific
              app or game, please use the contact in that product&apos;s own privacy policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Children&apos;s privacy</h2>
            <p>
              The Site is not directed to children under 13, and we do not knowingly collect personal
              information from children under 13 through the Site. Some of our products are general-audience
              games that may be enjoyed by children; where a product is directed to children, its own privacy
              policy describes how it handles children&apos;s data in accordance with applicable law (such as
              COPPA). If you believe a child has provided us with personal information through the Site,
              please contact us and we will promptly delete it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Changes to this policy</h2>
            <p>
              We may update this policy from time to time. We will post any update on this page with a new
              effective date. Material changes may also be announced via{" "}
              <a href="https://x.com/such_software" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">@such_software</a>.
              Your continued use of the Site after a change indicates acceptance of the revised policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contact</h2>
            <p>
              Privacy questions:{" "}
              <a href="mailto:support@such.software" className="text-blue-600 dark:text-blue-400 hover:underline">support@such.software</a>.
            </p>
            <p className="mt-2">
              Such Software LLC<br />
              110 E State St, Suite 300<br />
              Kennett Square, PA 19348<br />
              USA
            </p>
          </section>
        </div>
      </div>
      <MobileNav />
    </main>
  );
}
