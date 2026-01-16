import { DynamicBackground } from "@/components/landing/dynamic-background";
import { ThemeToggle } from "@/components/theme-toggle";
import { FounderSignature } from "@/components/about/founder-signature";
import Link from "next/link";
import { FaMapMarkerAlt, FaPhone, FaBuilding, FaExternalLinkAlt } from "react-icons/fa";

export default function AboutPage() {
  return (
    <main className="relative flex flex-col items-center overflow-hidden">
      
      <header className="z-50 w-full max-w-7xl mx-auto flex justify-between items-center p-6 bg-background/50 backdrop-blur-sm sticky top-0">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-2xl font-bold tracking-tighter">Such Software</Link>
          <nav className="hidden md:flex gap-4 text-sm font-medium">
             <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
             <Link href="/about" className="text-primary transition-colors">About</Link>
          </nav>
        </div>
        <ThemeToggle />
      </header>

      <div className="z-10 w-full max-w-4xl mx-auto py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center">About Us</h1>

        <div className="bg-card/80 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-xl border border-border/50">
          
          <div className="prose dark:prose-invert max-w-none mb-12">
            <p className="text-xl leading-relaxed">
              Founded in 2021 by John Winter Murphy in Chester County, PA, and operating in Kennett Square since July 2025, 
              we are a full-service software provider in the heart of Mushroom Country.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <FaBuilding className="text-primary" /> 
                Headquarters
              </h3>
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
                  <h3 className="text-lg font-semibold mb-2">Connect</h3>
                   <p className="text-sm text-muted-foreground mb-4">Find us on your favorite platforms</p>
                   {/* Social links are in the footer, but we can highlight them here or leave for footer */}
               </div>
            </div>
          </div>

          <div className="border-t border-border/50 pt-10">
            <h3 className="text-2xl font-bold mb-6 text-center">Leadership</h3>
            <FounderSignature />
          </div>

        </div>
      </div>
    </main>
  );
}
