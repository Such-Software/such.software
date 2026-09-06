import { Header } from "@/components/layout/header";
import { MobileNav } from "@/components/layout/mobile-nav";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Evaluetron Terms of Service | Such Software",
    description: "The terms governing Evaluetron, the generation service reached on the web and through chat platforms including Discord and Telegram.",
    path: "/evaluetron/terms",
  }),
};

export default function EvaluetronTermsPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center bg-background text-foreground">
      <Header />
      <div id="main-content" className="z-10 w-full max-w-3xl mx-auto py-20 px-4 pb-24 md:pb-20">
        <h1 className="text-4xl font-bold mb-8">Evaluetron Terms of Service</h1>

        <div className="prose dark:prose-invert max-w-none space-y-6">
          <p className="text-muted-foreground">Effective: August 30, 2026</p>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">The short version</h2>
            <p>
              Evaluetron generates text, images, audio and video on request. You buy credits, each
              generation spends some, and the credits are only good here: they cannot be cashed out,
              moved to another account, or refunded. Some models run on our own hardware and some are
              resold from other providers, which means your prompt sometimes leaves for them. It is
              provided as is. These terms control for Evaluetron; the{" "}
              <a href="/terms" className="text-blue-600 dark:text-blue-400 hover:underline">
                umbrella Such Software terms
              </a>{" "}
              cover anything they do not.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Credits</h2>
            <p>
              The service is paid for with credits. Credits are <strong>prepaid service credits, not
              money</strong>. They are denominated in a currency for convenience only, and they buy
              generations on this service and nothing else.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Credits <strong>cannot be redeemed for cash</strong> or withdrawn.</li>
              <li>Credits <strong>cannot be transferred</strong> between accounts.</li>
              <li>Credits are <strong>not refundable</strong>, including on account closure.</li>
              <li>Credits are not a deposit, not an investment, and earn nothing.</li>
            </ul>
            <p className="mt-4">
              Each generation reserves an amount before it runs and settles at what the work actually
              cost, which is usually less. A generation that fails is not charged for. Prices are set
              by us and can change; the reserve for each capability is shown in the service itself.
            </p>
            <p className="mt-4">
              A shared group pool holds credits for a group rather than a person. Anyone in that group
              can spend from it, and whoever funded it cannot get it back.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Acceptable use</h2>
            <p>You may not use Evaluetron to produce or attempt to produce:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>sexual content involving minors, or anything that sexualises a minor;</li>
              <li>
                content depicting a real, identifiable person in a sexual or intimate manner without
                their consent;
              </li>
              <li>
                material intended to defraud, to impersonate a real person or organisation, or to
                pass generated output off as an authentic record;
              </li>
              <li>
                content that incites violence against a person or group, or that is intended to
                harass a specific person;
              </li>
              <li>anything unlawful where you are, or where this service operates.</li>
            </ul>
            <p className="mt-4">
              You are also bound by the rules of whatever platform you reach the service through. On
              Discord and Telegram that includes their terms and community guidelines, and a use that
              breaches those breaches these.
            </p>
            <p className="mt-4">
              Do not attempt to exhaust, overload, or circumvent the service&apos;s rate limits, credit
              accounting, or access controls.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Moderation</h2>
            <p>
              Prompts are screened before a job runs. Models resold from upstream providers apply
              their own content policies as well, which can refuse a request independently of
              anything we decide. What a model produces is not currently inspected by us before it is
              delivered.
            </p>
            <p className="mt-4">
              We may refuse, rate-limit, or block any account, with or without explanation. An account
              blocked for abuse forfeits its remaining credits.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Your content and the output</h2>
            <p>
              You keep whatever rights you have in the prompts you submit. You are responsible for
              having the right to submit them, and for what you do with what comes back.
            </p>
            <p className="mt-4">
              We claim no ownership of generated output. Whether generated output can be owned at all
              varies by jurisdiction, and that is not something we can promise you either way. Where a
              resold model&apos;s provider imposes licence terms on output, those apply as well.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. No warranty</h2>
            <p>
              Evaluetron is provided &quot;as is&quot;, without warranty of any kind. It is a small
              independently operated service: it can be slow, unavailable, or produce output that is
              wrong, offensive, or useless. Model output is not advice, and must not be relied on for
              medical, legal, financial, or safety decisions.
            </p>
            <p className="mt-4">
              To the extent the law allows, our total liability for any claim arising from this
              service is limited to the credits you spent on the generation the claim concerns.
              Disputes are governed by Pennsylvania law, as set out in the{" "}
              <a href="/terms" className="text-blue-600 dark:text-blue-400 hover:underline">
                umbrella terms
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Changes and termination</h2>
            <p>
              These terms can change; the effective date above changes with them, and continuing to
              use the service means accepting the current version. We may suspend or discontinue the
              service at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contact</h2>
            <p>
              Questions about these terms:{" "}
              <a
                href="mailto:support@such.software"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                support@such.software
              </a>
              . See also the{" "}
              <a
                href="/evaluetron/privacy"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Evaluetron privacy policy
              </a>
              .
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
