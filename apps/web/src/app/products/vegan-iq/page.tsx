import { Header } from "@/components/layout/header";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Card } from "@repo/ui/components/card";
import { StoreButtons } from "@/components/store-buttons";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vegan IQ | Such Software",
  description: "Test your plant-based knowledge with 1000+ trivia questions across 8 categories. Swipe and tap gameplay with verified data. Android and iOS.",
  alternates: { canonical: "/products/vegan-iq" },
  openGraph: {
    title: "Vegan IQ | Such Software",
    description: "Test your plant-based knowledge with 1000+ trivia questions across 8 categories. Swipe and tap gameplay with verified data. Android and iOS.",
    type: "website",
  },
};

const features = [
  { name: "1000+ Questions", description: "Curated trivia questions backed by verified data from USDA, Poore & Nemecek, NIH, and FAOSTAT. No AI-generated content." },
  { name: "8 Categories", description: "Nutrition, environment, ingredients, food history, animal welfare, health, cooking, and culture." },
  { name: "Swipe & Tap", description: "Swipe right for true, left for false. Tap your answer for multiple choice. Fast, intuitive gameplay." },
  { name: "Dark & Light Mode", description: "Play in whichever theme you prefer. Automatic or manual switching." },
  { name: "SFX & Haptics", description: "Satisfying sound effects and haptic feedback on correct and incorrect answers." },
  { name: "Share Facts", description: "Found an interesting fact? Share it with friends directly from the app." },
];

export default function VeganIqPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center bg-background text-foreground">
      <Header />
      <div id="main-content" className="z-10 w-full max-w-4xl mx-auto py-20 px-4 pb-24 md:pb-20">
        <Link href="/products" className="text-sm text-muted-foreground hover:text-foreground mb-8 inline-block">
          ← Back to Products
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-green-600 dark:text-green-400">
          Vegan IQ
        </h1>

        <div className="prose dark:prose-invert max-w-none mb-12">
          <p className="text-xl text-muted-foreground leading-relaxed">
            Think you know your vegan facts? Vegan IQ puts your plant-based knowledge to the test with over 1000 trivia questions across 8 categories.
            Every question is backed by verified data from sources like the USDA, Poore & Nemecek (2018), NIH, and FAOSTAT.
          </p>
        </div>

        <div className="mb-12">
          <StoreButtons links={[
            { platform: "google", href: "https://play.google.com/store/apps/details?id=com.veganiq.vegan_iq" },
            { platform: "apple", href: "https://apps.apple.com/us/app/vegan-iq-plant-based-trivia/id6761139580" },
          ]} />
        </div>

        <h2 className="text-2xl font-bold mb-6">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {features.map((feature) => (
            <Card key={feature.name} className="glass-card border-green-500/20">
              <h3 className="text-xl font-bold mb-2">{feature.name}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Data Sources</h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              Every question in Vegan IQ is grounded in real data. We do not use LLMs to generate question content. Our sources include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
              <li><strong>USDA FoodData Central</strong> — nutritional composition of plant-based foods</li>
              <li><strong>Poore & Nemecek, Science (2018)</strong> — environmental impact data for food production</li>
              <li><strong>National Institutes of Health (NIH)</strong> — health and dietary reference data</li>
              <li><strong>FAOSTAT</strong> — global food production and agricultural statistics from the UN FAO</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <h2 className="text-2xl font-bold mb-4">Legal</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/products/vegan-iq/privacy" className="text-blue-600 dark:text-blue-400 hover:underline">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <MobileNav />
    </main>
  );
}
