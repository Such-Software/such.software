import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Footer } from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://such.software"),
  title: "Such Software | Digital Craftsmanship",
  description: "Next-generation web applications engineered for scale, compliance, and performance.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/images/branding/favicon_dark.svg", type: "image/svg+xml", media: "(prefers-color-scheme: dark)" },
      { url: "/images/branding/favicon_light.svg", type: "image/svg+xml", media: "(prefers-color-scheme: light)" },
      { url: "/images/branding/favicon_dark.png", sizes: "192x192", type: "image/png", media: "(prefers-color-scheme: dark)" },
      { url: "/images/branding/favicon_light.png", sizes: "192x192", type: "image/png", media: "(prefers-color-scheme: light)" },
    ],
    shortcut: "/images/branding/favicon_dark.svg",
    apple: [
      { url: "/images/branding/favicon_dark.png", sizes: "192x192", type: "image/png", media: "(prefers-color-scheme: dark)" },
      { url: "/images/branding/favicon_light.png", sizes: "192x192", type: "image/png", media: "(prefers-color-scheme: light)" },
    ],
  },
  manifest: "/manifest.json",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Such Software LLC",
  url: "https://such.software",
  logo: "https://such.software/images/branding/clean_dark_w_text.svg",
  description: "Next-generation web applications engineered for scale, compliance, and performance.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "110 E State St, Suite 300",
    addressLocality: "Kennett Square",
    addressRegion: "PA",
    postalCode: "19348",
    addressCountry: "US",
  },
  founder: {
    "@type": "Person",
    name: "John Winter Murphy",
    jobTitle: "Founder & Principal Engineer",
  },
  sameAs: [
    "https://github.com/suchsoftware",
    "https://linkedin.com/company/suchsoftware",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="relative z-10 flex flex-col min-h-screen">
               {children}
               <Footer />
            </div>
          </ThemeProvider>
      </body>
    </html>
  );
}