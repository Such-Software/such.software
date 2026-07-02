import { Header } from "@/components/layout/header";
import { MobileNav } from "@/components/layout/mobile-nav";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Such Software",
  description: "The default terms of service governing the such.software website and any Such Software LLC software, app, game, or wallet that does not have its own terms.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms of Service | Such Software",
    description: "The default terms of service governing the such.software website and any Such Software LLC software, app, game, or wallet that does not have its own terms.",
    type: "website",
  },
};

export default function TermsPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center bg-background text-foreground">
      <Header />
      <div id="main-content" className="z-10 w-full max-w-3xl mx-auto py-20 px-4 pb-24 md:pb-20">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

        <div className="prose dark:prose-invert max-w-none space-y-6">
          <p className="text-muted-foreground">Effective: July 2, 2026</p>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">The short version</h2>
            <p>
              These are the umbrella terms for Such Software LLC. They govern this website
              (such.software) and any Such Software app, game, wallet, or other software that
              does not ship with its own terms. Some of our products &mdash; like{" "}
              <a href="https://hash.boats/terms" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Hash Bags</a>{" "}
              and{" "}
              <a href="https://smirk.cash" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Smirk</a>{" "}
              &mdash; have their own terms, and those control for those products. Our software is
              provided &quot;as is.&quot; Disputes are governed by Pennsylvania law. These are the details.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Who we are and acceptance of these Terms</h2>
            <p>
              These Terms of Service (&quot;Terms&quot;) are a binding agreement between you (&quot;you&quot;) and{" "}
              <strong>Such Software LLC</strong>, a single-member limited liability company organized
              under the laws of the Commonwealth of Pennsylvania, United States (Chester County)
              (&quot;Such Software,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). They govern your access to and use of the
              such.software website and any Such Software software, application, game, wallet, or
              related service that does not have its own separate terms (together, the &quot;Services&quot;).
            </p>
            <p>
              By accessing or using the Services, you agree to these Terms and to our{" "}
              <Link href="/privacy" className="text-blue-600 dark:text-blue-400 hover:underline">Privacy Policy</Link>.
              If you do not agree, do not use the Services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Products with their own terms</h2>
            <p>
              Several of our products publish their own terms of service, and those product terms
              govern your use of that product instead of these umbrella Terms. This includes at least:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Hash Bags</strong> &mdash; governed by the terms at{" "}
                <a href="https://hash.boats/terms" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">hash.boats/terms</a>.
              </li>
              <li>
                <strong>Smirk</strong> &mdash; governed by the terms published at{" "}
                <a href="https://smirk.cash" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">smirk.cash</a>.
              </li>
              <li>
                <strong>Such Moon Launch</strong> &mdash; governed by its own{" "}
                <Link href="/products/such-moon-launch/terms" className="text-blue-600 dark:text-blue-400 hover:underline">Terms of Service</Link>.
              </li>
            </ul>
            <p>
              Where a product has its own terms, those terms control for that product to the extent
              they differ from these. These umbrella Terms apply to the website and to every other
              Such Software product that does not have its own terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Eligibility</h2>
            <p>
              You may use the Services only if you are able to form a binding contract with us and
              your use complies with all laws that apply to you. Except for our general-audience
              games, which are open to players of any age subject to any applicable platform and
              parental-control requirements, you must be at least 18 years old (or the age of majority
              in your jurisdiction, whichever is greater) to use the Services. By using the Services
              you represent that you meet the requirements that apply to you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Acceptable use</h2>
            <p>You agree to use the Services only for lawful purposes and in accordance with these Terms. You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>use the Services in any way that violates applicable laws or regulations, or for fraud or any other illegal activity;</li>
              <li>infringe the rights of others, or misuse another person&apos;s data or content;</li>
              <li>interfere with, attack, disrupt, or circumvent the security of the Services or any network or infrastructure they rely on;</li>
              <li>attempt to gain unauthorized access to any part of the Services;</li>
              <li>use automated tools to scrape, crawl, or extract data from the Services without permission; or</li>
              <li>reverse engineer, decompile, or disassemble any software provided as part of the Services, except to the extent this restriction is prohibited by applicable law or permitted by an applicable open-source license.</li>
            </ul>
            <p>
              We may suspend, restrict, or terminate your access to the Services (or particular
              features) if we reasonably believe you have violated these Terms or applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Third-party services and app stores</h2>
            <p>
              The Services may let you connect to, or may be distributed through, independent third
              parties &mdash; including the Apple App Store, Google Play, and other platforms, payment
              or advertising providers, and services you choose to use. Those third parties are
              operated by others, not by us. When you use one, you may be subject to and required to
              accept that provider&apos;s own terms and privacy policy, and you may be entering into a
              separate contract directly with that provider. We are not a party to those transactions,
              do not control those providers, and are not responsible for their acts, omissions,
              pricing, availability, or performance.
            </p>
            <p>
              Where a Service offers in-app purchases, those purchases are processed by the relevant
              app store (such as Apple or Google) and are subject to that store&apos;s terms and refund
              policies; we do not process or store your payment card information. Where a Service
              displays advertisements, ad delivery and any related data collection are governed by the
              ad provider&apos;s own policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Intellectual property and trademarks</h2>
            <p>
              All content, design, code, graphics, and other materials made available through the
              Services are the property of Such Software LLC or its licensors and are protected by
              copyright, trademark, and other intellectual property laws. Except where a Service is
              made available under an open-source license (in which case that license governs the
              corresponding code), you may not reproduce, distribute, modify, or create derivative
              works from any content on the Services without our prior written consent.
            </p>
            <p>
              To the extent any Service, or a component of it, is offered under an open-source license,
              that license governs your rights to the corresponding source code, and the applicable
              license text is provided with or linked from that Service. Our names, branding, and
              logos &mdash; including &quot;Such Software,&quot; &quot;Such Software LLC,&quot; and our product names and
              marks &mdash; are not covered by those open-source licenses, remain the exclusive property
              of Such Software LLC, and nothing here grants you a license to use them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Copyright and DMCA notice-and-takedown</h2>
            <p>
              We respect the intellectual property rights of others and expect users of the Services
              to do the same. If you believe that material accessible on or through the Services
              infringes your copyright, you may send a notice under the U.S. Digital Millennium
              Copyright Act (DMCA) to our registered designated agent.
            </p>
            <p>
              Such Software LLC maintains a DMCA designated agent registered with the U.S. Copyright
              Office (Registration No. <strong>DMCA-1073908</strong>). Send DMCA notices and
              counter-notices to{" "}
              <a href="mailto:support@such.software" className="text-blue-600 dark:text-blue-400 hover:underline">support@such.software</a>{" "}
              with &quot;DMCA&quot; in the subject line.
            </p>
            <p>Your notice should include:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>your physical or electronic signature;</li>
              <li>identification of the copyrighted work you claim has been infringed;</li>
              <li>identification of the material you claim is infringing, with enough detail for us to locate it;</li>
              <li>your contact information (address, telephone number, and email);</li>
              <li>a statement that you have a good-faith belief that the use is not authorized by the copyright owner, its agent, or the law; and</li>
              <li>a statement, made under penalty of perjury, that the information in your notice is accurate and that you are the copyright owner or authorized to act on the owner&apos;s behalf.</li>
            </ul>
            <p>
              We may remove or disable access to allegedly infringing material and, in appropriate
              circumstances, terminate the access of users who are repeat infringers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Disclaimer of warranties</h2>
            <p>
              THE SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE,&quot; WITH ALL FAULTS AND WITHOUT
              WARRANTY OF ANY KIND. TO THE MAXIMUM EXTENT PERMITTED BY LAW, SUCH SOFTWARE DISCLAIMS
              ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING THE IMPLIED WARRANTIES OF MERCHANTABILITY,
              FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE
              SERVICES WILL BE UNINTERRUPTED, TIMELY, SECURE, ERROR-FREE, OR FREE OF HARMFUL COMPONENTS,
              OR THAT ANY DATA OR INFORMATION MADE AVAILABLE THROUGH THE SERVICES IS ACCURATE, COMPLETE,
              OR CURRENT. ANY REFERENCE TO ACCESSIBILITY STANDARDS (SUCH AS WCAG) IN OUR MATERIALS
              DESCRIBES ENGINEERING TARGETS, NOT A WARRANTY OF COMPLIANCE.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">9. Limitation of liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, SUCH SOFTWARE AND ITS MEMBERS, MANAGERS,
              EMPLOYEES, AND AGENTS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
              CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, DATA, OR
              GOODWILL, ARISING FROM OR RELATED TO YOUR USE OF (OR INABILITY TO USE) THE SERVICES, EVEN
              IF ADVISED OF THE POSSIBILITY. TO THE MAXIMUM EXTENT PERMITTED BY LAW, OUR TOTAL
              AGGREGATE LIABILITY FOR ALL CLAIMS RELATING TO THE SERVICES WILL NOT EXCEED ONE HUNDRED
              U.S. DOLLARS (US$100). SOME JURISDICTIONS DO NOT ALLOW CERTAIN EXCLUSIONS OR LIMITATIONS,
              SO SOME OF THE ABOVE MAY NOT APPLY TO YOU; IN THAT CASE OUR LIABILITY IS LIMITED TO THE
              GREATEST EXTENT PERMITTED BY LAW.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">10. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Such Software and its members, managers,
              employees, and agents from any claims, losses, liabilities, and expenses (including
              reasonable legal fees) arising from your use of the Services, your violation of these
              Terms or applicable law, or your infringement of any third party&apos;s rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">11. Apple App Store and Google Play</h2>
            <p>
              If you obtained a Service from the Apple App Store, the following additional terms apply.
              These Terms are between you and Such Software only, not with Apple, and Apple is not
              responsible for the Service or its content. Apple has no obligation to provide maintenance
              or support for the Service. In the event of any failure of the Service to conform to any
              applicable warranty, you may notify Apple, and Apple will refund the purchase price (if
              any); to the maximum extent permitted by law, Apple has no other warranty obligation with
              respect to the Service. Such Software, not Apple, is responsible for addressing any claims
              relating to the Service, including product-liability, legal-compliance, and
              intellectual-property claims. You represent that you are not located in a country subject
              to a U.S. Government embargo or designated as a &quot;terrorist supporting&quot; country and that
              you are not on any U.S. Government list of prohibited or restricted parties. Apple and its
              subsidiaries are third-party beneficiaries of these Terms and may enforce them against
              you. If you obtained a Service from Google Play, your use is also subject to the Google
              Play Terms of Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">12. Governing law and disputes</h2>
            <p>
              These Terms are governed by the laws of the Commonwealth of Pennsylvania, without regard
              to its conflict-of-laws rules.
            </p>
            <p>
              <strong>Courts.</strong> Except as provided below, any dispute arising out of or relating
              to these Terms or the Services will be brought exclusively in the state or federal courts
              located in or serving Chester County, Pennsylvania, and you consent to the personal
              jurisdiction and venue of those courts. Either party may bring an individual claim in
              small-claims court, and either party may seek injunctive or equitable relief in any court
              of competent jurisdiction to protect its intellectual property or security.
            </p>
            <p>
              <strong>Jury-trial and class-action waiver.</strong> To the maximum extent permitted by
              law, you and Such Software each waive any right to a jury trial and agree that disputes
              will be brought only on an individual basis, and not as a plaintiff or class member in any
              class, collective, or representative proceeding.
            </p>
            <p>
              <strong>Optional arbitration.</strong> At our option, we may elect to resolve a given
              dispute through final and binding individual arbitration administered by the American
              Arbitration Association under its rules, applying Pennsylvania law. This does not change
              the individual-basis and jury/class-waiver terms above.
            </p>
            <p>
              <strong>30-day opt-out.</strong> You may opt out of the class-action waiver and the
              optional-arbitration provision by emailing{" "}
              <a href="mailto:support@such.software" className="text-blue-600 dark:text-blue-400 hover:underline">support@such.software</a>{" "}
              with the subject line &quot;Legal Opt-Out&quot; within 30 days of first accepting these Terms.
              Opting out will not affect any other part of these Terms.
            </p>
            <p>
              <strong>Time limit.</strong> Any claim relating to the Services must be brought within one
              (1) year after it arises, or it is permanently barred, except where a longer period is
              required by law.
            </p>
            <p>
              Nothing in these Terms limits any mandatory consumer-protection rights you have under the
              law of your country of residence that cannot be waived by agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">13. Changes to these Terms</h2>
            <p>
              We may update these Terms from time to time. When we do, we will revise the effective date
              above and post the updated Terms here; material changes may also be noted via{" "}
              <a href="https://x.com/such_software" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">@such_software</a>.
              Your continued use of the Services after an update means you accept the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">14. General</h2>
            <p>
              If any provision of these Terms is held unenforceable, the rest remain in effect and the
              unenforceable provision will be limited or removed to the minimum extent necessary. These
              Terms (with the Privacy Policy) are the entire agreement between you and Such Software
              regarding the Services and supersede any prior agreements on that subject. You may not
              assign these Terms without our consent; we may assign them to an affiliate or successor.
              Our failure to enforce a provision is not a waiver. We are not liable for delays or
              failures caused by events beyond our reasonable control. We may provide notices to you
              through the Services or this website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">15. Contact</h2>
            <p>
              Questions about these Terms:{" "}
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
