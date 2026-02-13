import { FounderSignature } from "@/components/about/founder-signature";
import { ContactForm } from "@/components/contact/contact-form";
import { Header } from "@/components/layout/header";
import { MobileNav } from "@/components/layout/mobile-nav";
import { FaMapMarkerAlt, FaPhone, FaBuilding, FaExternalLinkAlt } from "react-icons/fa";
import { FaXTwitter, FaTelegram, FaDiscord } from "react-icons/fa6";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Such Software",
  description: "Full-service software provider in Kennett Square, PA. Founded by John Winter Murphy, specializing in accessible web engineering and WCAG 2.2 compliance.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About | Such Software",
    description: "Full-service software provider in Kennett Square, PA. Founded by John Winter Murphy.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main className="relative flex flex-col items-center overflow-hidden">
      <Header />

      <div id="main-content" className="z-10 w-full max-w-6xl mx-auto py-20 px-4 pb-24 md:pb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center">About Us</h1>

        <div className="section-container">

          <div className="prose dark:prose-invert max-w-none mb-12">
            <p className="text-xl leading-relaxed">
              Founded in 2021 by <a href="https://jwinterm.com">John Winter Murphy</a> in Chester County, PA, and operating in Kennett Square since July 2025, 
              we are a full-service software provider in the heart of Mushroom Country.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 mb-12">
            <div>
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <FaBuilding className="text-primary" />
                Headquarters
              </h2>
              <address className="not-italic text-muted-foreground space-y-1 pl-7 border-l-2 border-border ml-2">
                <p>Such Software LLC</p>
                <p>110 E State St</p>
                <p>Suite 300</p>
                <p>Kennett Square, PA 19348</p>
                <p>USA</p>
              </address>
              
              <div className="mt-6 flex flex-col gap-3 ml-2">
                 <a 
                   href="https://maps.app.goo.gl/JeGx1rHFcriMdngn9" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex items-center gap-3 text-primary hover:underline hover:text-primary/80 transition-colors"
                 >
                   <FaMapMarkerAlt /> View on Google Maps <FaExternalLinkAlt className="w-3 h-3" />
                 </a>
                 <a 
                    href="tel:+14438779940"
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                 >
                    <FaPhone /> +1 (443) 877-9940
                 </a>
              </div>
            </div>
            
            <div className="flex flex-col justify-center items-center bg-muted/30 rounded-xl p-6">
               <div className="text-center">
                  <h2 className="text-lg font-semibold mb-2">Connect</h2>
                  <p className="text-sm text-muted-foreground mb-4">Find us on your favorite platforms</p>
                  <div className="flex gap-6 justify-center">
                    <a href="https://x.com/such_software" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <FaXTwitter className="h-6 w-6" />
                      <span className="sr-only">X (Twitter)</span>
                    </a>
                    <a href="https://t.me/j_winter_m" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <FaTelegram className="h-6 w-6" />
                      <span className="sr-only">Telegram</span>
                    </a>
                    <a href="https://discord.com/users/392547150480932864" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <FaDiscord className="h-6 w-6" />
                      <span className="sr-only">Discord</span>
                    </a>
                  </div>
               </div>
            </div>
          </div>

          <div className="border-t border-border/50 pt-10">
            <h2 className="text-2xl font-bold mb-6 text-center">Leadership</h2>
            <FounderSignature />
          </div>

        </div>

        <div id="contact" className="mt-16 border-t border-border/50 pt-16">
          <h2 className="text-3xl font-bold mb-3 tracking-tight">Get in Touch</h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
            Have a project in mind? We'd love to hear about it.
          </p>
          <ContactForm />
        </div>
      </div>
      <MobileNav />
    </main>
  );
}
