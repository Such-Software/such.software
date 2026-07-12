import { DataGrid } from "@repo/ui/procedural/data-grid";
import { Header } from "@/components/layout/header";
import { MobileNav } from "@/components/layout/mobile-nav";
import { ScrollReveal } from "@/components/scroll-reveal";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { JsonLd, breadcrumbLd, faqLd } from "@/components/seo/json-ld";
import { ProofCard } from "@/components/services/proof-card";
import { PillarCards } from "@/components/services/pillar-cards";
import { ServicesCta } from "@/components/services/services-cta";
import { EducationCredentials } from "@/components/services/education-credentials";
import { pillars, pillarBySlug, proofFor, faqs, borderL } from "@/lib/services";

type Props = { params: Promise<{ pillar: string }> };

// Prebuild the four pillar pages at build time (static); anything else is a static 404
// rather than an on-demand render.
export const dynamicParams = false;
export function generateStaticParams() {
  return pillars.map((p) => ({ pillar: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { pillar: slug } = await params;
  const pillar = pillarBySlug(slug);
  if (!pillar) return {};
  return {
    title: pillar.metaTitle,
    description: pillar.metaDescription,
    alternates: { canonical: `/services/${pillar.slug}` },
    openGraph: { title: pillar.metaTitle, description: pillar.metaDescription, type: "website" },
  };
}

export default async function PillarPage({ params }: Props) {
  const { pillar: slug } = await params;
  const pillar = pillarBySlug(slug);
  if (!pillar) notFound();

  const proof = proofFor(pillar.slug);
  const pillarFaqs = faqs.filter((f) => f.pillars.includes(pillar.slug));

  return (
    <main className="relative min-h-screen flex flex-col items-center bg-background text-foreground overflow-hidden">
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: pillar.label, path: `/services/${pillar.slug}` },
        ])}
      />
      {pillarFaqs.length > 0 && <JsonLd data={faqLd(pillarFaqs.map(({ q, a }) => ({ q, a })))} />}
      <DataGrid />
      <Header />

      <div id="main-content" className="z-10 w-full max-w-5xl mx-auto py-20 px-4">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground">
          <Link href="/services" className="hover:text-foreground transition-colors">Services</Link>
          <span className="mx-2" aria-hidden="true">/</span>
          <span className="text-foreground">{pillar.label}</span>
        </nav>

        {/* Pillar header */}
        <ScrollReveal className="mb-14">
          <div className={`text-left section-container border-l-4 ${borderL[pillar.accent]}`}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{pillar.title}</h1>
            <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">{pillar.lead}</p>
          </div>
        </ScrollReveal>

        {/* The products behind this pillar */}
        <ScrollReveal className="mb-16">
          <div className="grid md:grid-cols-2 gap-6">
            {proof.map((p) => (
              <ProofCard key={p.title} p={p} accent={pillar.accent} />
            ))}
          </div>
          {pillar.slug === "education" && <EducationCredentials />}
        </ScrollReveal>

        {/* Pillar-specific FAQ */}
        {pillarFaqs.length > 0 && (
          <ScrollReveal className="mb-16">
            <div className="section-container border-l-4 border-l-indigo-500">
              <h2 className="text-2xl font-bold mb-6 tracking-tight">Questions</h2>
              <div className="space-y-6">
                {pillarFaqs.map((f) => (
                  <div key={f.q}>
                    <h3 className="text-lg font-bold mb-1">{f.q}</h3>
                    <p className="text-muted-foreground leading-relaxed max-w-3xl">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Explore the other pillars */}
        <ScrollReveal className="mb-20">
          <PillarCards exclude={pillar.slug} heading="The other pillars" />
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal>
          <ServicesCta />
        </ScrollReveal>
      </div>
      <MobileNav />
    </main>
  );
}
