import { Card } from "@repo/ui/components/card";

export function ServicesPreview() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 mt-8 mb-16 relative z-10">
        <div className="text-left mb-8 section-container border-l-4 border-l-emerald-500">
            <h2 className="text-3xl font-bold mb-3 tracking-tight">What We Do</h2>
            <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">
                We build high-performance e-commerce stores, develop custom apps, and ship our own titles.
                Whether you need a storefront, a bespoke tool, or a full product build, we handle the engineering end to end.
            </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
            <Card className="glass-card hover:border-indigo-500/40 text-left">
                <h3 className="text-xl font-bold mb-3">E-Commerce Solutions</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                    Headless storefronts powered by Medusa and Next.js. 100/100 Core Web Vitals,
                    global payments, and infrastructure that scales with your business.
                </p>
            </Card>
            <Card className="glass-card hover:border-indigo-500/40 text-left">
                <h3 className="text-xl font-bold mb-3">Custom App Development</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                    Cross-platform mobile and web apps built to spec. We handle architecture,
                    deployment, and ongoing support so you can focus on your business.
                </p>
            </Card>
            <Card className="glass-card hover:border-indigo-500/40 text-left">
                <h3 className="text-xl font-bold mb-3">Crypto &amp; Payments</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                    Deep expertise in multi-currency checkout, fiat-to-crypto onboarding, and
                    secure payment architecture.
                </p>
            </Card>
        </div>
    </div>
  )
}
