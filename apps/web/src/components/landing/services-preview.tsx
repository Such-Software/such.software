import { Card } from "@repo/ui/components/card";

export function ServicesPreview() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 mt-8 mb-16 relative z-10">
        <div className="text-left mb-8 section-container border-l-4 border-l-emerald-500">
            <h2 className="text-3xl font-bold mb-3 tracking-tight">What We Do</h2>
            <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">
                We build and host custom e-commerce stores, develop apps to spec, and ship our own
                titles and games. We handle your project end to end, from architecture to deployment.
            </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="glass-card hover:border-indigo-500/40 text-left">
                <h3 className="text-xl font-bold mb-3">E-Commerce &amp; Hosting</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                    Headless storefronts on Medusa and Next.js, built fast and hosted on our own
                    infrastructure. Stripe Connect with a revenue-share model: you stay the merchant
                    of record, and crypto settles straight to your own wallets.
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
                <h3 className="text-xl font-bold mb-3">Crypto &amp; Payment Integration</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                    Software and integration for multi-currency checkout and non-custodial crypto
                    payments, in production since 2014. You or a licensed provider hold the funds;
                    we never take custody.
                </p>
            </Card>
            <Card className="glass-card hover:border-indigo-500/40 text-left">
                <h3 className="text-xl font-bold mb-3">Nuclear &amp; Radiation Education</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                    Training, talks, and open-source GEANT4 labs on radiation transport and
                    semiconductor detectors, led by a PhD with a Lawrence Livermore background.
                    Published methods and teaching.
                </p>
            </Card>
        </div>
    </div>
  )
}
