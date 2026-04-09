import { Header } from "@/components/layout/header";
import { MobileNav } from "@/components/layout/mobile-nav";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Such Software",
  description: "Terms of service for Such Software LLC websites and applications.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center bg-background text-foreground">
      <Header />
      <div id="main-content" className="z-10 w-full max-w-3xl mx-auto py-20 px-4 pb-24 md:pb-20">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

        <div className="prose dark:prose-invert max-w-none space-y-6">
          <p className="text-muted-foreground">Last updated: April 9, 2026</p>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the websites and applications operated by Such Software LLC (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;),
              including such.software and all subdomains (collectively, the &quot;Services&quot;), you agree to be bound by these Terms of Service.
              If you do not agree to these terms, do not use the Services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Description of Services</h2>
            <p>
              Such Software LLC develops and operates software products including mobile applications, web applications,
              and browser-based games. Our Services include but are not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Vegan IQ</strong> — a plant-based trivia application for iOS and Android</li>
              <li><strong>Bauhaus Echo</strong> — a visual memory puzzle game for iOS, Android, web, and desktop</li>
              <li><strong>Suchoice</strong> — an AI-powered decision-making application for iOS and Android</li>
              <li><strong>such.software</strong> — our company website and portfolio</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Use of Services</h2>
            <p>You agree to use the Services only for lawful purposes and in accordance with these Terms. You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the Services in any way that violates applicable laws or regulations.</li>
              <li>Attempt to interfere with or disrupt the Services or their underlying infrastructure.</li>
              <li>Attempt to gain unauthorized access to any part of the Services.</li>
              <li>Use automated tools to scrape, crawl, or extract data from the Services without permission.</li>
              <li>Reverse engineer, decompile, or disassemble any software provided as part of the Services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Intellectual Property</h2>
            <p>
              All content, design, code, graphics, and other materials available through the Services are the property of
              Such Software LLC or its licensors and are protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p>
              You may not reproduce, distribute, modify, or create derivative works from any content on the Services without
              our prior written consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. In-App Purchases</h2>
            <p>
              Some of our mobile applications offer in-app purchases. All purchases are processed by Apple (App Store) or
              Google (Google Play) and are subject to their respective terms and refund policies. We do not process or store
              payment information directly.
            </p>
            <p>
              In-app purchases are non-transferable and may only be used within the application for which they were purchased.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Advertising</h2>
            <p>
              Some of our mobile applications display advertisements provided by Google AdMob. By using these applications,
              you acknowledge that advertisements may be displayed and that ad-related data collection is governed by
              Google&apos;s privacy policies. You may remove advertisements by purchasing the &quot;Remove Ads&quot; option where available.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Data and Content Accuracy</h2>
            <p>
              Our applications, including Vegan IQ, present information sourced from publicly available datasets (USDA, NIH,
              FAOSTAT, peer-reviewed research). While we make reasonable efforts to ensure accuracy, we do not guarantee that
              all information is complete, current, or error-free. The content in our applications is for educational and
              entertainment purposes and should not be used as a substitute for professional dietary, medical, or environmental advice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Disclaimer of Warranties</h2>
            <p>
              The Services are provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express or implied,
              including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
            </p>
            <p>
              We do not warrant that the Services will be uninterrupted, error-free, or free of viruses or other harmful components.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">9. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Such Software LLC shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages, including but not limited to loss of profits, data, or use, arising out of or
              related to your use of the Services, whether based on warranty, contract, tort, or any other legal theory.
            </p>
            <p>
              Our total liability for any claim arising from the Services shall not exceed the amount you paid us, if any,
              for the specific Service giving rise to the claim during the twelve months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">10. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the Commonwealth of Pennsylvania,
              United States, without regard to its conflict of law provisions. Any legal action arising from these Terms shall
              be brought exclusively in the courts located in Chester County, Pennsylvania.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">11. Changes to These Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Changes will be posted on this page with an updated
              &quot;Last updated&quot; date. Your continued use of the Services after any changes constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">12. Contact Us</h2>
            <p>
              If you have questions about these Terms, contact us at:
            </p>
            <p className="mt-2">
              Such Software LLC<br />
              110 E State St, Suite 300<br />
              Kennett Square, PA 19348<br />
              USA
            </p>
            <p className="mt-2">
              Email: <a href="mailto:legal@such.software" className="text-blue-600 dark:text-blue-400 hover:underline">legal@such.software</a>
            </p>
          </section>
        </div>
      </div>
      <MobileNav />
    </main>
  );
}
