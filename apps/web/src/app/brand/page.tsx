import { Header } from "@/components/layout/header";
import { MobileNav } from "@/components/layout/mobile-nav";
import Link from "next/link";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/page-metadata";
import guide from "@/styles/brand-guide.json";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Brand: The Such Software Identity System | Such Software",
    description:
      "The Such Software mark, generated from one source pack: the four-colour SUCH monogram, its facet fields, the type and motion vocabulary, measured contrast and colour-vision separation, and the reasoning behind every decision.",
    path: "/brand",
    socialTitle: "The Such Software identity, and why it is the way it is",
  }),
};

/**
 * The brand book.
 *
 * Every value below is read from `styles/brand-guide.json`, which is a generated projection of
 * `packs/such-software/pack.json` in the such-graphics repository. Nothing on this page is typed
 * by hand, and the pack's gate refuses if this copy drifts from what the generator emits. If a
 * number here looks wrong, the fix is in the pack.
 */

const VISION_LABEL: Record<string, string> = {
  normal: "Normal vision",
  deuteranopia: "Deuteranopia (no green cone)",
  protanopia: "Protanopia (no red cone)",
  tritanopia: "Tritanopia (no blue cone)",
};

function Swatch({ hex, label, sub }: { hex: string; label: string; sub?: string }) {
  return (
    <div className="flex items-center gap-3">
      <span
        aria-hidden="true"
        className="h-10 w-10 shrink-0 rounded-lg border border-border/60"
        style={{ background: hex }}
      />
      <span className="min-w-0">
        <span className="block text-sm font-semibold">{label}</span>
        <span className="block font-mono text-xs text-muted-foreground">{hex}</span>
        {sub ? <span className="block text-xs text-muted-foreground">{sub}</span> : null}
      </span>
    </div>
  );
}

function Section({
  id,
  title,
  lead,
  accent,
  children,
}: {
  id: string;
  title: string;
  lead?: string;
  accent: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`section-container border-l-4 ${accent} mb-12`}>
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">{title}</h2>
      {lead ? <p className="text-muted-foreground mb-6 max-w-3xl">{lead}</p> : null}
      {children}
    </section>
  );
}

export default function BrandPage() {
  const light = guide.colour_vision.find((c) => c.theme === "light");
  const dark = guide.colour_vision.find((c) => c.theme === "dark");

  return (
    <main className="relative min-h-screen flex flex-col items-center bg-background text-foreground">
      <Header />
      <div id="main-content" className="z-10 w-full max-w-5xl mx-auto py-20 px-4 pb-24 md:pb-20">
        <Link
          href="/"
          className="text-sm text-muted-foreground hover:text-foreground mb-8 inline-block transition-colors"
        >
          &larr; Home
        </Link>

        <div className="flex items-center gap-5 mb-6">
          {/* The static lockup, so a plain <img> is right: there is no animation to keep alive
              and next/image has nothing to optimise on an SVG. Both themes ship because the
              lockup is drawn in two palettes, not recoloured by CSS. */}
          <img
            src="/images/branding/clean_dark_w_text.svg"
            alt="The Such Software monogram and wordmark"
            className="h-16 w-auto hidden dark:block"
          />
          <img
            src="/images/branding/clean_light_w_text.svg"
            alt="The Such Software monogram and wordmark"
            className="h-16 w-auto dark:hidden"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">The identity</h1>
        <p className="text-xl text-muted-foreground mb-4 max-w-3xl text-balance">{guide.description}</p>
        <p className="text-sm text-muted-foreground mb-14 max-w-3xl">
          Pack <span className="font-mono">{guide.pack}</span> version{" "}
          <span className="font-mono">{guide.version}</span>. Every value on this page is
          generated from one source file. Nothing here is typed by hand, and a gate refuses if
          this page drifts from the pack that produced it.
        </p>

        <Section
          id="colour"
          title="Colour"
          accent="border-l-emerald-500"
          lead="Four colours, one per letter of the monogram. They are the categorical palette: the colour is carrying the meaning, not decorating it."
        >
          <div className="grid sm:grid-cols-2 gap-8">
            {[light, dark].map((theme) =>
              theme ? (
                <div key={theme.theme}>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-4">
                    {theme.theme} theme, on{" "}
                    <span className="font-mono normal-case">{theme.ground}</span>
                  </h3>
                  <div className="space-y-3">
                    {theme.glyphs.map((g) => (
                      <Swatch
                        key={g.letter}
                        hex={g.hex}
                        label={g.letter}
                        sub={`${g.contrast_on_ground}:1 against the ground`}
                      />
                    ))}
                  </div>
                </div>
              ) : null,
            )}
          </div>
        </Section>

        <Section
          id="colour-vision"
          title="What the palette measures"
          accent="border-l-cyan-500"
          lead="A categorical palette is only as good as its closest pair, so the number that matters is the smallest perceptual distance in the set, measured in CIEDE2000 and then measured again through each kind of colour-vision deficiency. The pair that binds moves between them, which is why we check all four rather than the common one."
        >
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left border-b border-border">
                  <th className="py-2 pr-4 font-semibold">Vision</th>
                  <th className="py-2 pr-4 font-semibold">Light: closest pair</th>
                  <th className="py-2 pr-4 font-semibold">Dark: closest pair</th>
                </tr>
              </thead>
              <tbody className="font-mono text-xs">
                {(light?.separation ?? []).map((row, i) => {
                  const d = dark?.separation?.[i];
                  return (
                    <tr key={row.vision} className="border-b border-border/40">
                      <td className="py-2 pr-4 font-sans">
                        {VISION_LABEL[row.vision] ?? row.vision}
                      </td>
                      <td className="py-2 pr-4">
                        {row.binding_pair.join("/")} at dE {row.min_separation}
                      </td>
                      <td className="py-2 pr-4">
                        {d ? `${d.binding_pair.join("/")} at dE ${d.min_separation}` : "-"}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-4 max-w-3xl">
            These are reported, not graded. In the full monogram each letter also has a distinct
            shape, so identity survives where hue does not; the measurement matters most on the
            reductions where colour is the only signal left.
          </p>
        </Section>

        <Section
          id="text"
          title="Text roles"
          accent="border-l-blue-500"
          lead="Each role resolves its own colour per theme, so the contrast quoted is against the ground the text is actually painted on."
        >
          <div className="grid sm:grid-cols-2 gap-6">
            {Object.entries(guide.palette.roles).map(([role, spec]) => (
              <div key={role} className="text-sm">
                <div className="font-semibold mb-1">
                  {role}{" "}
                  <span className="font-mono text-xs text-muted-foreground">
                    {spec.role_colour_key}
                  </span>
                </div>
                {Object.entries(spec.themes).map(([theme, t]) => (
                  <div key={theme} className="font-mono text-xs text-muted-foreground">
                    {theme}: {t.colour} on {t.ground} = {t.contrast}:1{" "}
                    <span className={t.meets_aa ? "text-emerald-600 dark:text-emerald-400" : "text-amber-600 dark:text-amber-400"}>
                      {t.meets_aa ? "meets AA" : `below AA (${spec.wcag_aa_needs}:1)`}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="type"
          title="Type"
          accent="border-l-purple-500"
          lead="One family, used at a declared scale. The wordmark is the only place a weight is pinned."
        >
          <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-sm">
            {Object.entries(guide.type.families).map(([k, v]) => (
              <div key={k} className="contents">
                <dt className="font-semibold">{k}</dt>
                <dd className="font-mono text-xs text-muted-foreground truncate">{v}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 font-mono text-xs text-muted-foreground">
            {Object.entries(guide.type.scale).map(([k, v]) => (
              <span key={k}>
                {k} {String(v)}px
              </span>
            ))}
          </div>
        </Section>

        <Section
          id="motion"
          title="Motion"
          accent="border-l-amber-500"
          lead="Named durations and easings, so an animation's timing is a value in the pack rather than a number somebody measured once by hand."
        >
          <div className="flex flex-wrap gap-x-8 gap-y-2 font-mono text-xs text-muted-foreground">
            {Object.entries(guide.motion).map(([name, spec]) => (
              <span key={name}>
                {name} {spec.ms}ms {spec.curve}
              </span>
            ))}
          </div>
        </Section>

        <Section
          id="facets"
          title="Facets"
          accent="border-l-rose-500"
          lead="The only part of the mark that varies. A facet may add a field, a wordmark or a travelling signal; it may not redraw a letter. That constraint is the difference between one system and several logos."
        >
          <div className="space-y-6">
            {guide.facets.map((f) => (
              <div key={f.name}>
                <h3 className="font-semibold mb-1">
                  {f.name}{" "}
                  <span className="font-mono text-xs font-normal text-muted-foreground">
                    {f.nodes} nodes, {f.branches} {f.branches === 1 ? "route" : "branches"}
                    {f.depth !== f.length ? `, depth ${f.depth} of ${f.length} total` : ""}
                  </span>
                </h3>
                {f.note ? (
                  <p className="text-sm text-muted-foreground max-w-3xl">{f.note}</p>
                ) : null}
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="decisions"
          title="Why it is the way it is"
          accent="border-l-teal-500"
          lead="The reasoning behind the mark, kept in the pack next to the values it argues for. It is here because a guideline nobody can question is a rule, and a decision with its reasoning attached is a design."
        >
          <div className="space-y-8">
            {guide.decisions.map((d) => (
              <article key={d.path}>
                <h3 className="font-semibold mb-1">{d.heading}</h3>
                <p className="font-mono text-xs text-muted-foreground mb-2">{d.path}</p>
                <p className="text-sm leading-relaxed text-muted-foreground max-w-3xl">{d.text}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="not-stated"
          title="What this guide does not say"
          accent="border-l-slate-500"
          lead="A guide that fills a gap with a plausible number is worse than one that names the gap."
        >
          <ul className="space-y-3">
            {guide.not_stated.map((n) => (
              <li key={n.topic} className="text-sm">
                <span className="font-semibold">{n.topic}: </span>
                <span className="text-muted-foreground">{n.why}</span>
              </li>
            ))}
          </ul>
        </Section>
      </div>
      <MobileNav />
    </main>
  );
}
