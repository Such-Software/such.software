// Single source of truth for the Services pillars + the real products behind each.
// Consumed by the /services hub, the /services/[pillar] subpages, the home "What We Do"
// preview, and the sitemap, so the four pillars can never drift between those surfaces.

export type Pillar = {
  slug: "commerce" | "games" | "crypto" | "education";
  label: string; // short nav label
  accent: string; // tailwind colour stem, e.g. "blue"
  title: string; // on-page H1 / section heading
  lead: string; // the pillar's paragraph
  // Per-subpage SEO. Kept distinct so each /services/<slug> ranks for its own terms.
  metaTitle: string;
  metaDescription: string;
  // One line for the hub card, tighter than the lead.
  card: string;
};

export const pillars: Pillar[] = [
  {
    slug: "commerce",
    label: "Commerce & Web",
    accent: "blue",
    title: "Commerce & custom web",
    lead: "Proprietary, headless commerce and web apps that you own, built to your business logic instead of a template's limits. Often on revenue share: we build, host, and run it, and earn a share once you are live.",
    card: "Headless commerce and custom web apps you own, often on revenue share.",
    metaTitle: "Custom E-Commerce & Web App Development | Such Software",
    metaDescription:
      "Headless, proprietary commerce and web apps built to your business logic on Medusa and Next.js, hosted on our infrastructure, often on a revenue-share partnership. Kennett Square, PA.",
  },
  {
    slug: "games",
    label: "Games & Apps",
    accent: "purple",
    title: "Games & apps",
    lead: "We do not just consult on software, we ship it. A growing catalog of games and mobile apps built in-house across iOS, Android, web, and desktop, on Godot and Next.js.",
    card: "A growing catalog of games and mobile apps we build and ship in-house.",
    metaTitle: "Games & Mobile App Development | Such Software",
    metaDescription:
      "A studio that ships its own titles: games and cross-platform mobile apps built in-house on Godot and Next.js for iOS, Android, web, and desktop. Kennett Square, PA.",
  },
  {
    slug: "crypto",
    label: "Crypto & Payments",
    accent: "cyan",
    title: "Crypto & payments",
    lead: "Software and integration for payments and cryptocurrency. The client, a licensed processor, or the user's own wallet holds the funds; we build the system around it and never take custody.",
    card: "Payments and cryptocurrency integration. We never take custody of funds.",
    metaTitle: "Crypto & Payments Integration Software (Non-Custodial) | Such Software",
    metaDescription:
      "Non-custodial payments and cryptocurrency software: Stripe and multi-processor integration, Monero and on-chain checkout, in production since 2014. The processor or wallet holds the funds. Kennett Square, PA.",
  },
  {
    slug: "education",
    label: "Education & Science",
    accent: "amber",
    title: "Education & science",
    lead: "PhD-led radiation-science teaching, training, and speaking from years at a national lab, plus learning-through-play games that teach real science and math. We publish our methods open-source.",
    card: "PhD-led radiation-science teaching and games that teach real science.",
    metaTitle: "Nuclear & Radiation-Science Education, GEANT4 Training | Such Software",
    metaDescription:
      "PhD-led radiation-science education: Monte Carlo methods with GEANT4, shielding and detector physics, open-source labs, plus learning-through-play science and math games. Lawrence Livermore background.",
  },
];

export function pillarBySlug(slug: string): Pillar | undefined {
  return pillars.find((p) => p.slug === slug);
}

// ---- Proof items (real products behind each pillar) ---------------------

export type Proof = {
  title: string;
  blurb: string;
  img?: string; // /images/products/*
  href?: string; // internal detail page or external
  tag?: string; // status pill
};

const commerceProof: Proof[] = [
  { title: "Webshops", blurb: "Our multi-tenant commerce platform: fully-themed storefronts, print-on-demand, non-custodial crypto checkout, and automated tax, on revenue share.", img: "/images/products/occupy-wallets.png", href: "/products/webshops", tag: "Flagship" },
  { title: "Custom builds", blurb: "Real-time web apps, multiplayer experiences, and live dashboards on Next.js, Socket.io, and WebRTC.", img: "/images/products/custom-websites.svg", href: "/products/custom-websites", tag: "Live" },
  { title: "Grin BTCPay plugin", blurb: "An open-source BTCPay Server plugin we built to accept Grin (Mimblewimble) payments, including auto-Tor invoice exchange.", tag: "Open source" },
  { title: "Evaluetron", blurb: "A self-hostable AI-compute platform: one core that runs a personal image bot or a paid multi-customer service, with an append-only credit ledger and pricing built in.", tag: "Building" },
];

const gamesProof: Proof[] = [
  { title: "Suchoice", blurb: "Stop overthinking decisions: snap a photo, let AI read the options, spin the wheel. iOS and Android.", img: "/images/products/suchoice.png", href: "/products/suchoice", tag: "Live" },
  { title: "Vegan IQ", blurb: "1,000+ plant-based trivia questions across 8 categories, with a daily challenge and weekly quiz. iOS and Android.", img: "/images/products/vegan-iq.png", href: "/products/vegan-iq", tag: "Live" },
  { title: "Bloomword", blurb: "A daily word game where every word you find grows a living 3D typographic tree. Free at bloomword.earth, launching on mobile.", img: "/images/products/bloomword.svg", href: "/products/bloomword", tag: "Live" },
  { title: "Bauhaus Echo", blurb: "A visual memory puzzle game inspired by Bauhaus design. Android, iOS, and web.", img: "/images/products/bauhaus-echo.png", href: "/products/bauhaus-echo", tag: "Live" },
  { title: "Such Moon Launch", blurb: "Vry rocket, much landing, wow: a Wownero-themed pixel rocket arcade with 11 levels and tilt-to-steer. Everywhere.", img: "/images/products/such-moon-launch.png", href: "/products/such-moon-launch", tag: "Live" },
];

const cryptoProof: Proof[] = [
  { title: "Payments consulting", blurb: "Stripe and multi-processor integrations, reconciliation tooling, Monero and on-chain integration. The processor or wallet moves the money; we wire it in.", tag: "Service" },
  { title: "Smirk Wallet", blurb: "A non-custodial multi-asset browser wallet: send, receive, and tip by username on Telegram and Discord. BTC, LTC, XMR, WOW, GRIN.", img: "/images/products/smirk-wallet.png", href: "/products/smirk-wallet", tag: "Live" },
  { title: "Hash Bags", blurb: "A mobile multi-chain wallet forked from Cake Wallet, tuned for the privacy-coin ecosystem.", tag: "Beta" },
  { title: "Evaluetron", blurb: "Pay-for-compute done right: an append-only credit ledger, a job queue, and an evaluator that lets on-demand work preempt opportunistic work. Customers can never self-credit.", tag: "Building" },
];

const educationProof: Proof[] = [
  { title: "Barns & Neutrons", blurb: "A cozy exploration-puzzle game across the real Chart of Nuclides: capture neutrons, coax decays, and learn honest nuclear physics. Our premiere visual work.", img: "/images/products/barns-and-neutrons.svg", href: "/products/barns-and-neutrons", tag: "Coming soon" },
  { title: "Nuclear consulting & training", blurb: "PhD-led radiation-science teaching: Monte Carlo methods with GEANT4, shielding and dose fundamentals, detector physics, and open-source labs.", href: "https://jwinterm.github.io/geant4-radiation-labs/", tag: "Service" },
  { title: "Numchangers", blurb: "A kids math game (ages 5-8) where numbers morph into dots, shapes, and 3D characters, so arithmetic becomes a visible action instead of a quiz. Godot, mobile-first.", tag: "Early" },
];

export function proofFor(slug: string): Proof[] {
  if (slug === "commerce") return commerceProof;
  if (slug === "games") return gamesProof;
  if (slug === "crypto") return cryptoProof;
  return educationProof;
}

// ---- FAQ, tagged by pillar so each subpage shows the relevant ones -------

export type Faq = { q: string; a: string; pillars: Pillar["slug"][] };

export const faqs: Faq[] = [
  { q: "What does Such Software build?", a: "Four things, from one small team: custom e-commerce and web apps on revenue share, games and mobile apps we ship ourselves, cryptocurrency and payments software (integration only, never custody), and PhD-led radiation-science education. The pillars below break each down with the products behind them.", pillars: ["commerce", "games", "crypto", "education"] },
  { q: "Do you take revenue-share work?", a: "Yes. For a limited number of partners we build and operate products (such as webshops) for a share of revenue instead of a large upfront fee, so our incentives line up with yours.", pillars: ["commerce"] },
  { q: "Do you build for accessibility?", a: "Yes. We engineer front-ends to meet WCAG 2.2 AA and audit against it, alongside Core Web Vitals, as part of every project.", pillars: ["commerce", "games"] },
  { q: "Do you offer nuclear and radiation education?", a: "Yes. Our founder holds a PhD in radiation-detector materials and spent six years at Lawrence Livermore National Laboratory, plus shielding and spent-fuel work at Holtec. We teach radiation-science fundamentals and Monte Carlo methods, run GEANT4 training, and speak on these topics. Our GEANT4 radiation labs are published open-source (MIT / CC-BY). This is education and published methods.", pillars: ["education"] },
  { q: "Where are you based?", a: "We are a software studio in Kennett Square, Pennsylvania, working with clients remotely across the US and beyond.", pillars: ["commerce", "games", "crypto", "education"] },
  { q: "How does a project start?", a: "Reach out through the contact form with what you need. We scope it, propose an approach, and from there it can run as a fixed project or a performance-based revenue-share partnership.", pillars: ["commerce", "crypto"] },
];

// ---- Shared colour maps (literal strings so Tailwind's JIT keeps them) ---

export const borderL: Record<string, string> = {
  blue: "border-l-blue-500",
  purple: "border-l-purple-500",
  cyan: "border-l-cyan-500",
  amber: "border-l-amber-500",
};
export const chipAccent: Record<string, string> = {
  blue: "bg-blue-500/15 text-blue-700 dark:text-blue-300",
  purple: "bg-purple-500/15 text-purple-700 dark:text-purple-300",
  cyan: "bg-cyan-500/15 text-cyan-700 dark:text-cyan-300",
  amber: "bg-amber-500/15 text-amber-700 dark:text-amber-300",
};
export const hoverBorder: Record<string, string> = {
  blue: "hover:border-blue-500/30",
  purple: "hover:border-purple-500/30",
  cyan: "hover:border-cyan-500/30",
  amber: "hover:border-amber-500/30",
};
export const tagStyle: Record<string, string> = {
  Flagship: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300",
  Live: "bg-green-500/15 text-green-700 dark:text-green-300",
  Service: "bg-sky-500/15 text-sky-700 dark:text-sky-300",
  "Open source": "bg-indigo-500/15 text-indigo-700 dark:text-indigo-300",
  Beta: "bg-amber-500/15 text-amber-700 dark:text-amber-300",
  Building: "bg-amber-500/15 text-amber-700 dark:text-amber-300",
  Early: "bg-fuchsia-500/15 text-fuchsia-700 dark:text-fuchsia-300",
  "Coming soon": "bg-fuchsia-500/15 text-fuchsia-700 dark:text-fuchsia-300",
};
