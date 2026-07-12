import { Card } from "@repo/ui/components/card";
import Link from "next/link";

// The four "What We Do" cards on the home page, each linking to its /services/<slug> pillar page.
const previews = [
  {
    href: "/services/commerce",
    title: "E-Commerce & Hosting",
    body: "Headless storefronts on Medusa and Next.js, built fast and hosted on our own infrastructure. Stripe Connect with a revenue-share model: you stay the merchant of record, and crypto settles straight to your own wallets.",
  },
  {
    href: "/services/games",
    title: "Custom App Development",
    body: "Cross-platform mobile and web apps built to spec. We handle architecture, deployment, and ongoing support so you can focus on your business.",
  },
  {
    href: "/services/crypto",
    title: "Crypto & Payment Integration",
    body: "Software and integration for multi-currency checkout and non-custodial crypto payments, in production since 2014. You or a licensed provider hold the funds; we never take custody.",
  },
  {
    href: "/services/education",
    title: "Nuclear & Radiation Education",
    body: "Training, talks, and open-source GEANT4 labs on radiation transport and semiconductor detectors, led by a PhD with a Lawrence Livermore background. Published methods and teaching.",
  },
];

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
        {previews.map((p) => (
          <Link key={p.href} href={p.href} className="group block h-full">
            <Card className="glass-card h-full hover:border-indigo-500/40 text-left transition-colors">
              <h3 className="text-xl font-bold mb-3">{p.title}</h3>
              <p className="text-base text-muted-foreground leading-relaxed">{p.body}</p>
              <span className="mt-3 inline-block text-sm font-medium text-foreground group-hover:underline">
                Learn more →
              </span>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
