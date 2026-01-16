import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Footer } from "@/components/layout/footer";
import { DynamicBackground } from "@/components/landing/dynamic-background";

const inter = Inter({ subsets: ["latin"] });

// ... (metadata omitted)

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
            <DynamicBackground />
            <div className="relative z-10 flex flex-col min-h-screen">
               {children}
               <Footer />
            </div>
          </ThemeProvider>
      </body>
    </html>
  );
}