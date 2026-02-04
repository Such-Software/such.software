'use client';

import Link from "next/link";
import { SiteLogo } from "./site-logo";
import { FaXTwitter, FaTelegram, FaDiscord, FaPhone } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-12">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <SiteLogo />
            <p className="text-sm text-muted-foreground">
              Full-service software provider in the heart of Mushroom Country.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact</h3>
            <address className="text-sm text-muted-foreground not-italic space-y-2">
              <p>Such Software LLC</p>
              <p>110 E State St, Suite 300</p>
              <p>Kennett Square, PA 19348</p>
              <p>USA</p>
              <div className="pt-2 flex items-center gap-2">
                <FaPhone className="h-4 w-4" />
                <a href="tel:+14438779940" className="hover:text-primary transition-colors">+1 (443) 877-9940</a>
              </div>
            </address>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Links</h3>
            <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
              <Link href="/about" className="hover:text-primary transition-colors">About</Link>
              <a href="https://maps.app.goo.gl/JeGx1rHFcriMdngn9" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                Google Business
              </a>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Connect</h3>
            <div className="flex gap-4">
              <a href="https://x.com/such_software" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <FaXTwitter className="h-5 w-5" />
                <span className="sr-only">X (Twitter)</span>
              </a>
              <a href="https://t.me/j_winter_m" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <FaTelegram className="h-5 w-5" />
                <span className="sr-only">Telegram</span>
              </a>
              <a href="https://discord.com/users/392547150480932864" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <FaDiscord className="h-5 w-5" />
                <span className="sr-only">Discord</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Such Software LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
