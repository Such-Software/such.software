import { Header } from "@/components/layout/header";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Card } from "@repo/ui/components/card";
import Link from "next/link";
import Image from "next/image";
import { JsonLd, breadcrumbLd, faqLd } from "@/components/seo/json-ld";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "radiation.space: The Space Radiation Environment in 3D | Such Software",
  description:
    "radiation.space shows the particles and photons of space, from the heliosphere to low Earth orbit, with spectra, shielding and dose at any point. Every number traces to a paper, a standard or a dataset. Free, in the browser.",
  alternates: { canonical: "/products/radiation-space" },
  keywords: [
    "space radiation",
    "radiation belts",
    "ISS radiation dose",
    "galactic cosmic rays",
    "solar particle events",
    "South Atlantic Anomaly",
    "spacecraft shielding",
    "radiation.space",
  ],
  openGraph: {
    title: "radiation.space: The Space Radiation Environment in 3D",
    description:
      "Radiation belts, cosmic rays and solar storms in 3D, with spectra, shielding and dose at any point. Sourced, free, in the browser.",
    type: "website",
    url: "/products/radiation-space",
    images: [{ url: "/images/branding/OG_banner_v2_light.png", width: 1200, height: 630, alt: "Such Software" }],
  },
};

const SITE = "https://radiation.space";

const faqs = [
  {
    q: "What is radiation.space?",
    a: "A free, browser-based explorer of the space radiation environment: the solar wind, galactic and anomalous cosmic rays, Jovian electrons, the Van Allen belts, albedo neutrons and solar particle events. Pick a planet, an orbit or a point in space and it gives the particle spectra there, what a spacecraft wall does to them, and the dose to a person and to a silicon chip.",
  },
  {
    q: "Where do the numbers come from?",
    a: "From published models and measurements: AP8/AE8 and IRBEM for the belts, the Badhwar-O'Neill 2014 cosmic-ray model, measured solar events, and Geant4 transport for shielding. Each model, table and constant cites its source in the wiki, and the results are compared against measurements such as MSL/RAD in transit to Mars and the DOSIS dosimeters on the ISS.",
  },
  {
    q: "How accurate is it?",
    a: "It is built for learning and early trade studies, and is good to a factor of two to three. It is not a substitute for a mission radiation analysis, and nothing on it is medical advice.",
  },
  {
    q: "Does it track me?",
    a: "It uses one cookieless, self-hosted analytics script that honors Do Not Track. There are no ads and no third-party trackers.",
  },
  {
    q: "Will there be an app?",
    a: "The site is built as a plain folder of files that runs offline, so the same code can ship as iOS and Android apps. Those are planned after the web version.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "radiation.space",
  url: SITE,
  description:
    "An interactive 3D explorer of the space radiation environment, with sourced spectra, shielding and dose.",
  applicationCategory: "EducationalApplication",
  operatingSystem: "Any (web browser)",
  isAccessibleForFree: true,
  author: { "@type": "Organization", name: "Such Software" },
  publisher: { "@type": "Organization", name: "Such Software" },
};

const features = [
  {
    title: "From the Sun to low Earth orbit",
    body: "One scene covers the heliosphere, the planets, Earth's magnetosphere and the orbits of real spacecraft classes: LEO, GPS, geostationary, Molniya and transfer orbits.",
  },
  {
    title: "Dose you can read",
    body: "Pick an orbit and see its daily dose next to the measurement, where one exists. Open the dose panel for a person on a spacewalk, a person inside, and a silicon chip, each by particle type.",
  },
  {
    title: "Real shielding",
    body: "Spectra are folded through Geant4 responses of aluminum walls from 0.3 to 100 g/cm², and the ISS through its as-built distribution of shielding depths.",
  },
  {
    title: "Solar storms, replayed",
    body: "Start a measured solar particle event and watch flare photons, neutrons and protons leave the Sun at their real speeds and arrive along the interplanetary magnetic field.",
  },
  {
    title: "Cited and checked",
    body: "A companion wiki documents each model, its assumptions, its limits and its sources, and compares the results with spacecraft measurements.",
  },
  {
    title: "Fast and private",
    body: "Runs in any modern browser, on a phone too, with no login, no ads and no third-party trackers. One-file offline copies are available.",
  },
];

export default function RadiationSpacePage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center bg-background text-foreground">
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
          { name: "radiation.space", path: "/products/radiation-space" },
        ])}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <JsonLd data={faqLd(faqs)} />
      <Header />
      <div id="main-content" className="z-10 w-full max-w-4xl mx-auto py-20 px-4 pb-24 md:pb-20">
        <Link href="/products" className="text-sm text-muted-foreground hover:text-foreground mb-8 inline-block">
          ← Back to Products
        </Link>

        <div className="flex items-center gap-4 mb-2">
          <Image src="/images/products/radiation-space.svg" alt="radiation.space icon" width={64} height={64} className="rounded-[22%]" />
          <div>
            <span className="inline-flex items-center rounded-full bg-cyan-400/15 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400 mb-1">
              Live
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-cyan-600 dark:text-cyan-400 leading-none">radiation.space</h1>
          </div>
        </div>
        <p className="text-base text-muted-foreground mb-6">The space radiation environment in 3D, with every number traced to its source.</p>

        <div className="prose dark:prose-invert max-w-none mb-8">
          <p className="text-xl text-muted-foreground leading-relaxed">
            Radiation is the hard limit on long crewed missions and a leading cause of spacecraft failures, but
            the tools that estimate it are written for specialists. radiation.space puts the same physics in
            a 3D scene anyone can explore: the radiation belts, cosmic rays and solar storms, the spectra at
            any point, what a spacecraft wall does to them, and the resulting dose.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-12">
          <a
            href={SITE}
            className="inline-flex items-center rounded-lg bg-cyan-600 px-5 py-2.5 font-semibold text-white hover:bg-cyan-500 transition-colors"
          >
            Open radiation.space
          </a>
          <a
            href={`${SITE}/wiki/`}
            className="inline-flex items-center rounded-lg border border-cyan-500/40 px-5 py-2.5 font-semibold text-cyan-700 dark:text-cyan-300 hover:border-cyan-500 transition-colors"
          >
            Read the wiki
          </a>
        </div>

        <h2 className="text-2xl font-bold mb-6">What it does</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {features.map((f) => (
            <Card key={f.title} className="glass-card border-cyan-400/20">
              <h3 className="text-lg font-bold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.body}</p>
            </Card>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-6">Under the Hood</h2>
        <div className="section-container border-l-4 border-cyan-400 mb-12">
          <ul className="space-y-2 text-muted-foreground">
            <li>
              <strong>Reference engine:</strong> Python, with IRBEM through SpacePy for the trapped belts and
              Geant4 11.4 for shielding.
            </li>
            <li>
              <strong>Browser model:</strong> a dependency-free JavaScript port, tested against the reference
              engine.
            </li>
            <li>
              <strong>Data:</strong> every precomputed table carries a recorded hash and its provenance.
            </li>
            <li>
              <strong>Front end:</strong> three.js and plain static files, so it runs offline and inside a
              mobile app shell.
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mb-6">FAQ</h2>
        <div className="space-y-6 mb-12">
          {faqs.map((f) => (
            <div key={f.q}>
              <h3 className="font-bold mb-1 text-cyan-600 dark:text-cyan-400">{f.q}</h3>
              <p className="text-muted-foreground">{f.a}</p>
            </div>
          ))}
        </div>

        <p className="text-muted-foreground mb-12">
          Like the physics? Our game{" "}
          <Link href="/products/barns-and-neutrons" className="text-cyan-600 dark:text-cyan-400 hover:underline">
            Barns &amp; Neutrons
          </Link>{" "}
          teaches the nuclear side of it, and our{" "}
          <Link href="/services" className="text-cyan-600 dark:text-cyan-400 hover:underline">
            nuclear &amp; radiation modeling
          </Link>{" "}
          work is available for hire.
        </p>

        <div className="flex items-center gap-4 text-sm text-muted-foreground flex-wrap">
          <Link href="/products" className="hover:text-foreground transition-colors">
            All Products
          </Link>
          <span>•</span>
          <Link href="/support" className="hover:text-foreground transition-colors">
            Feedback
          </Link>
          <span>•</span>
          <span>Contact: apps@such.software</span>
        </div>
      </div>
      <MobileNav />
    </main>
  );
}
