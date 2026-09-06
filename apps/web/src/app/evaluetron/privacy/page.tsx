import { Header } from "@/components/layout/header";
import { MobileNav } from "@/components/layout/mobile-nav";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Evaluetron Privacy Policy | Such Software",
    description: "What Evaluetron stores, for how long, and who else sees it, including which prompts leave for upstream model providers.",
    path: "/evaluetron/privacy",
  }),
};

export default function EvaluetronPrivacyPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center bg-background text-foreground">
      <Header />
      <div id="main-content" className="z-10 w-full max-w-3xl mx-auto py-20 px-4 pb-24 md:pb-20">
        <h1 className="text-4xl font-bold mb-8">Evaluetron Privacy Policy</h1>

        <div className="prose dark:prose-invert max-w-none space-y-6">
          <p className="text-muted-foreground">Effective: August 30, 2026</p>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">The short version</h2>
            <p>
              Evaluetron stores who you are on the platform you arrive from, what you asked it to
              generate, and what it cost. Generated files are deleted after seven days. Prompts are
              kept. Some models run on our own hardware, and for those your prompt never leaves; other
              models are resold, and for those your prompt is sent to that provider. Nothing is sold
              or used for advertising. This policy covers Evaluetron specifically and takes precedence
              over the{" "}
              <a href="/privacy" className="text-blue-600 dark:text-blue-400 hover:underline">
                umbrella Such Software privacy policy
              </a>{" "}
              where the two differ.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. What is collected</h2>
            <p>
              Evaluetron is reached on the web and through chat platforms including Discord and
              Telegram. What is held depends on which you use.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>An account identifier.</strong> On a chat platform this is the numeric user id
                that platform assigns you, together with your username and display name as it reports
                them, and the time you were last seen. The username is recorded so an operator can
                grant credits to a person by name rather than by number.
              </li>
              <li>
                <strong>What you ask for.</strong> The prompt or text you submit, stored with the job
                it created, along with the model requested and what the job cost.
              </li>
              <li>
                <strong>What was produced.</strong> Generated files, stored so they can be delivered
                and re-fetched.
              </li>
              <li>
                <strong>Credit records.</strong> Purchases, operator adjustments, and the cost of each
                generation, as ledger entries. Card and crypto checkout is performed by the payment
                processor; we never hold card details.
              </li>
            </ul>
            <p className="mt-4">
              Ordinary conversation is not collected. On a chat platform the bot receives messages in
              rooms it has been added to, but a message that is not a command to it is discarded
              without being stored, logged, or sent anywhere.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. How long it is kept</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Generated files: seven days</strong>, after which they are deleted from
                storage automatically.
              </li>
              <li>
                <strong>Prompts and job records: kept indefinitely at present.</strong> They are not
                currently deleted on a schedule. This is stated plainly because it is what the service
                does today rather than what would be ideal, and it is the item most likely to change.
              </li>
              <li>
                <strong>Credit and payment records: kept</strong>, because they are the accounting
                record of money received and spent.
              </li>
              <li>
                <strong>Identity records: kept</strong> while the account exists.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Who else sees it</h2>
            <p>
              Some models run on hardware we own. For those, your prompt does not leave the service.
            </p>
            <p className="mt-4">
              Other models are resold from upstream providers. When you choose one of those, your
              prompt and its parameters are sent to that provider so it can perform the generation,
              and their handling of it is governed by their policy rather than this one. The model
              list in the service names what is currently offered; a model whose name is namespaced to
              an outside vendor is a resold one.
            </p>
            <p className="mt-4">
              Payment processors receive the amount and the invoice, and the chat platform you use
              necessarily sees the messages you send it. Nothing is sold, rented, or shared for
              advertising, and there is no third-party analytics or tracking.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Your requests</h2>
            <p>
              You can ask what is held about you, ask for it to be deleted, or ask for your account to
              be closed. Write to{" "}
              <a
                href="mailto:privacy@such.software"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                privacy@such.software
              </a>
              . Deleting an account removes its identity record, its prompts, and its generated files.
              Ledger entries are retained where they are needed as an accounting record, with the
              identity detached.
            </p>
            <p className="mt-4">
              Credits are not refundable and cannot be transferred, so closing an account forfeits any
              remaining balance. That is worth knowing before you ask.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Security</h2>
            <p>
              Generated files are stored outside the public web root and every read is authorised.
              Nothing about this service should be treated as suitable for confidential or sensitive
              material: it has not been independently audited, and a prompt you would not want
              retained should not be submitted.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Children</h2>
            <p>
              Evaluetron is not intended for anyone under 13, or under the minimum age required by the
              platform you reach it through, whichever is higher.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Changes</h2>
            <p>
              If this policy changes materially, the effective date above changes with it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Contact</h2>
            <p>
              Privacy questions:{" "}
              <a
                href="mailto:privacy@such.software"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                privacy@such.software
              </a>
              . See also the{" "}
              <a
                href="/evaluetron/terms"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Evaluetron terms of service
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
