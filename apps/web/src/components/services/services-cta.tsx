import { Button } from "@repo/ui/components/button";
import Link from "next/link";

// Shared closing CTA for the services hub and every pillar subpage.
export function ServicesCta({
  title = "Let's build together",
  blurb = "We take on a limited number of revenue-share build partners. Tell us what you're building and we'll run a scope review.",
}: {
  title?: string;
  blurb?: string;
}) {
  return (
    <div className="p-12 md:p-16 rounded-[2.5rem] bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 text-white text-center shadow-2xl relative overflow-hidden group border-2 border-white/5">
      <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10 tracking-tight">{title}</h2>
      <p className="mb-10 text-slate-300 text-lg max-w-2xl mx-auto relative z-10 leading-relaxed font-medium">
        {blurb}
      </p>
      <Link href="/contact" className="relative z-10">
        <Button size="lg" variant="secondary" className="rounded-2xl px-12 py-8 text-xl font-bold hover:scale-105 transition-transform bg-white text-slate-900 hover:bg-slate-100">
          Request a Consultation
        </Button>
      </Link>
    </div>
  );
}
