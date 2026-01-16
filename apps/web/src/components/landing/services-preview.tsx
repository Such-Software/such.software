import { Card } from "@repo/ui/components/card";

export function ServicesPreview() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 mt-8 mb-16 relative z-10">
        <div className="text-left mb-8 section-container border-l-4 border-l-emerald-500">
            <h3 className="text-3xl font-bold mb-3 tracking-tight">High-Performance Webshops</h3>
            <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">
                We build commerce infrastructure that scales with you. From complex supply chains 
                to global payments, we handle the technical heavy lifting so you can focus on your brand.
            </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
            <Card className="glass-card hover:border-indigo-500/40 text-left">
                <h3 className="text-xl font-bold mb-3">Native Crypto & Payments</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                    Deep expertise in multi-currency checkout, fiat-to-crypto onboarding, and 
                    DeFi integration. We build payments that work everywhere, for everyone.
                </p>
            </Card>
            <Card className="glass-card hover:border-indigo-500/40 text-left">
                <h3 className="text-xl font-bold mb-3">Zero Capital Upfront</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                     We operate on a "Toast" style partnership model. No massive setup fees or 
                     stiff monthly subscriptions—we only win when you're making sales.
                </p>
            </Card>
            <Card className="glass-card hover:border-indigo-500/40 text-left">
                <h3 className="text-xl font-bold mb-3">Headless Performance</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                    We couple the robust Medusa backend with a Next.js frontend, ensuring your shop 
                    scores 100/100 on Core Web Vitals and SEO.
                </p>
            </Card>
        </div>
    </div>
  )
}
