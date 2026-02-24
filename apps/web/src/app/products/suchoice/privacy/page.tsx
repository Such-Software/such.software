import { Header } from "@/components/layout/header";
import { MobileNav } from "@/components/layout/mobile-nav";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Suchoice Privacy Policy | Such Software",
  description: "Privacy policy for the Suchoice application.",
  alternates: { canonical: "/products/suchoice/privacy" },
};

export default function SuchoicePrivacyPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center bg-background text-foreground">
      <Header />
      <div id="main-content" className="z-10 w-full max-w-3xl mx-auto py-20 px-4 pb-24 md:pb-20">
        <Link href="/products/suchoice" className="text-sm text-muted-foreground hover:text-foreground mb-8 inline-block">
          ← Back to Suchoice
        </Link>

        <h1 className="text-4xl font-bold mb-8">Privacy Policy for Suchoice</h1>
        
        <div className="prose dark:prose-invert max-w-none space-y-6">
          <p className="text-muted-foreground">Last updated: February 23, 2026</p>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
            <p>
              Such Software ("we", "our", or "us") operates the Suchoice mobile and web application (the "App"). 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our App.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
            <h3 className="text-xl font-medium mt-4 mb-2">Camera and Photos</h3>
            <p>
              Our App requires access to your device's camera and photo library to function. 
              When you take a picture of a menu or select one from your gallery, the image is sent to our secure backend servers for processing by AI to extract menu items. 
              <strong>We do not store these images.</strong> They are processed in memory and immediately discarded after the text is extracted.
            </p>

            <h3 className="text-xl font-medium mt-4 mb-2">Usage Data and Advertising</h3>
            <p>
              We use Google AdMob to display advertisements in the App. AdMob may collect and use data, including device identifiers (such as the Android Advertising ID or iOS IDFA), IP addresses, and usage data, to provide personalized advertising.
            </p>
            <p>
              You can learn more about how Google uses information from sites or apps that use their services by visiting: <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google's Privacy & Terms</a>.
            </p>

            <h3 className="text-xl font-medium mt-4 mb-2">In-App Purchases and Subscriptions</h3>
            <p>
              We use RevenueCat to manage in-app purchases and subscriptions. When you make a purchase, RevenueCat processes the transaction receipt provided by Apple or Google. RevenueCat may collect anonymous app user IDs and purchase history to validate subscriptions and provide analytics. We do not process or store your payment information (such as credit card numbers) directly; this is handled securely by Apple or Google.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide the core functionality of the App (extracting text from menu images).</li>
              <li>Serve advertisements to support the free version of the App.</li>
              <li>Process and manage your subscriptions and in-app purchases.</li>
              <li>Monitor and analyze usage and trends to improve your experience.</li>
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
              <li><a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">RevenueCat</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Children's Privacy</h2>
            <p>
              These Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contact Us</h2>
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
