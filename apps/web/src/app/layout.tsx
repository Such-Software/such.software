import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Footer } from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Such Software | Digital Craftsmanship",
  description: "Next-generation web applications engineered for scale, compliance, and performance.",
  icons: {
    icon: [
      { url: "/images/favicon.svg", type: "image/svg+xml" },
      { url: "/images/favicon_192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/images/favicon.svg",
    apple: [
      { url: "/images/favicon_192.png", sizes: "192x192", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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