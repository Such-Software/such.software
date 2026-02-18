import { ContactForm } from "@/components/contact/contact-form";
import { Header } from "@/components/layout/header";
import { MobileNav } from "@/components/layout/mobile-nav";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support | Such Software",
  description: "Get help with Bauhaus Echo or any Such Software product. Report bugs, request features, or send feedback.",
  alternates: { canonical: "/support" },
};

export default function SupportPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center bg-background text-foreground">
      <Header />
      <div id="main-content" className="z-10 w-full max-w-6xl mx-auto py-20 px-4 pb-24 md:pb-20">
        <Link href="/" className="text-sm text-muted-foreground hover:text-foreground mb-8 inline-block transition-colors">
          &larr; Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">Support &amp; Feedback</h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl text-balance">
          Having trouble with one of our apps? Want to suggest a feature? We&apos;d love to hear from you.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="section-container border-l-4 border-blue-500">
            <h3 className="font-bold mb-2">Bug Reports</h3>
            <p className="text-sm text-muted-foreground">
              Something not working right? Let us know what happened, your device, and OS version — we&apos;ll investigate.
            </p>
          </div>
          <div className="section-container border-l-4 border-emerald-500">
            <h3 className="font-bold mb-2">Feature Requests</h3>
            <p className="text-sm text-muted-foreground">
              Have an idea to make the game better? We&apos;re always looking for ways to improve.
            </p>
          </div>
          <div className="section-container border-l-4 border-amber-500">
            <h3 className="font-bold mb-2">General Feedback</h3>
            <p className="text-sm text-muted-foreground">
              Enjoying the game? Hate something? All feedback is welcome and helps us prioritize.
            </p>
          </div>
        </div>

        <ContactForm source="support" />

        <div className="mt-16 text-center text-sm text-muted-foreground space-y-2">
          <p>
            You can also reach us directly at{" "}
            <a href="mailto:apps@such.software" className="text-primary hover:underline">
              apps@such.software
            </a>
          </p>
          <p>
            <Link href="/products/bauhaus-echo/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
      <MobileNav />
    </main>
  );
}
