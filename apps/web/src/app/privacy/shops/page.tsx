import { Header } from "@/components/layout/header";
import { MobileNav } from "@/components/layout/mobile-nav";
import Link from "next/link";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Privacy for Shop Customers | Such Software",
    description:
      "Buying from an independent shop on the Such Software commerce platform? Who the seller is, what the platform handles on the seller's behalf, and what it never does with your information.",
    path: "/privacy/shops",
  }),
};

const link = "text-blue-600 dark:text-blue-400 hover:underline";

export default function ShopPrivacyPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center bg-background text-foreground">
      <Header />
      <div id="main-content" className="z-10 w-full max-w-3xl mx-auto py-20 px-4 pb-24 md:pb-20">
        <h1 className="text-4xl font-bold mb-8">Privacy for Shop Customers</h1>

        <div className="prose dark:prose-invert max-w-none space-y-6 [&_a]:!text-emerald-800 dark:[&_a]:!text-emerald-300">
          <p className="text-muted-foreground">Effective: November 16, 2026</p>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">The short version</h2>
            <p>
              You are shopping at an independent store that runs on the Such Software commerce
              platform. The shop&apos;s owner is the seller: they sell you the products, take your
              payment, and look after your order. Such Software LLC runs the technology behind the
              shop on the seller&apos;s behalf.
            </p>
            <p>
              Your information belongs to the seller. We handle it only to keep their shop running.
              We never sell it, we never send you our own marketing, and we share it only where your
              order needs it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Who you are dealing with</h2>
            <h3 className="text-xl font-medium mt-4 mb-2">The seller</h3>
            <p>
              The business named on the shop is the seller of record for everything you buy there.
              Your purchase, refunds, returns, warranties and customer service are between you and
              the seller, and your card statement shows the seller&apos;s business name. The seller
              may publish its own privacy policy on its shop, which explains how the seller uses
              your information.
            </p>
            <h3 className="text-xl font-medium mt-4 mb-2">Such Software</h3>
            <p>
              Such Software LLC operates the platform the shop runs on. We act as a service provider
              to the seller and follow the seller&apos;s instructions. We are not a party to your
              purchase. This page explains the part we play.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. What the shop collects</h2>
            <p>When you shop, the store keeps the information it needs to fill your order:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>your name, email address, and billing and shipping addresses;</li>
              <li>your orders and order history;</li>
              <li>any notes you add to an order;</li>
              <li>whether you asked to receive the seller&apos;s promotional emails; and</li>
              <li>your sign-in details, if you choose to create an account.</li>
            </ul>
            <p>
              Card details are entered into a secure payment form provided by Stripe and go to
              Stripe. The shop and the platform never see your full card number.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. What we do on the seller&apos;s behalf</h2>
            <p>We use your information only to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>run the shop, including your cart, checkout, account and order history;</li>
              <li>send your order emails, such as order confirmations, shipping updates and password resets, from the seller&apos;s email address;</li>
              <li>show the seller summary sales figures in their dashboard; and</li>
              <li>meet legal obligations that apply to us.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. What we never do</h2>
            <p>Discretion is part of the job. We never:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>sell, rent, license or lease your information;</li>
              <li>send you marketing or promotions of our own;</li>
              <li>claim your information as ours or use it to make money for ourselves;</li>
              <li>share your information with anyone except as described in Section 5;</li>
              <li>add advertising trackers to the shop; or</li>
              <li>hold your money.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Who else helps with your order</h2>
            <p>Your information goes to other companies only when your order needs it:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Stripe</strong> processes card payments through the seller&apos;s own Stripe
                account, so your payment goes straight to the seller.{" "}
                <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className={link}>Stripe Privacy Policy</a>
              </li>
              <li>
                <strong>Cryptocurrency payments</strong>, where a shop accepts them, go straight to
                the seller&apos;s own wallet.
              </li>
              <li>
                <strong>Printful</strong> makes and ships print-on-demand items, so it receives
                the shipping details for those items.{" "}
                <a href="https://www.printful.com/policies/privacy" target="_blank" rel="noopener noreferrer" className={link}>Printful Privacy Policy</a>
              </li>
              <li>
                <strong>Resend</strong> delivers the seller&apos;s promotional emails if you asked
                to receive them. Order emails leave from our own mail server and are delivered through our email delivery provider.{" "}
                <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className={link}>Resend Privacy Policy</a>
              </li>
              <li>
                <strong>Our hosting provider</strong> runs the servers the shop lives on and stores
                the shop&apos;s data for us.
              </li>
              <li>
                <strong>The seller&apos;s own services.</strong> A seller that ships orders itself
                may use shipping services of its own choosing. Those are the seller&apos;s choice
                and fall under the seller&apos;s policies.
              </li>
            </ul>
            <p className="mt-4">
              We may also disclose information when the law requires it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Promotional emails</h2>
            <p>
              You receive the seller&apos;s promotional emails only if you tick the box at checkout.
              Every one includes an unsubscribe link.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Cookies and visitor statistics</h2>
            <p>
              The shop uses a few cookies to keep your cart and sign-in working, and it may remember
              items you recently viewed in your browser.
            </p>
            <p>
              Some shops use our self-hosted, cookieless visitor statistics to count page visits.
              They do not store your IP address, never record your name or email, and are switched
              off when your browser sends Do Not Track.
            </p>
            <p>
              If a seller embeds content from another service, such as a YouTube or Vimeo video,
              that service&apos;s own privacy policy applies to it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Your information, your requests</h2>
            <p>
              The seller decides how your information is used, and the seller can export your
              information or delete your customer record. To ask for a copy of your information, to
              have it deleted, or to use any other privacy right you have where you live, contact
              the seller.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">9. How to reach the right people</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Your order, refunds, returns or your information:</strong> contact the
                seller, using the contact details on their shop.
              </li>
              <li>
                <strong>The platform itself:</strong> email{" "}
                <a href="mailto:support@such.software" className={link}>support@such.software</a>{" "}
                or use our <Link href="/contact" className={link}>contact form</Link>.
              </li>
            </ul>
            <p className="mt-4">
              Such Software LLC<br />
              110 E State St, Suite 300<br />
              Kennett Square, PA 19348<br />
              USA
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">10. Shops run by Such Software</h2>
            <p>
              Some shops on the platform, such as the shops for our own apps, are run by Such
              Software itself. In those shops Such Software is the seller, and you can reach us
              directly at{" "}
              <a href="mailto:support@such.software" className={link}>support@such.software</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">11. Changes to this page</h2>
            <p>
              We may update this page from time to time. We will post any update here with a new
              effective date.
            </p>
          </section>
        </div>
      </div>
      <MobileNav />
    </main>
  );
}
