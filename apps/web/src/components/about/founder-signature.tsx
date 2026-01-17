import { Card } from "@repo/ui/components/card";
import Image from "next/image";

export const FounderSignature = () => {
  return (
    <div className="grid md:grid-cols-[1fr,440px] gap-12 lg:gap-20 items-center">
      {/* Left Column: Bio */}
      <div className="space-y-8 text-left section-container">
        <div className="flex items-center gap-6 relative z-10">
           <div className="relative w-16 h-16 flex items-center justify-center">
              <Image
                src="/images/logo_dark.svg"
                alt="Such Software Icon"
                width={56}
                height={56}
                className="hidden dark:block object-contain"
              />
              <Image
                src="/images/logo_light.svg"
                alt="Such Software Icon"
                width={56}
                height={56}
                className="block dark:hidden object-contain"
              />
           </div>
           <div>
              <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary/80 mb-1">Founder & Principal Engineer</p>
              <h3 className="text-3xl font-bold tracking-tight">John Winter Murphy</h3>
           </div>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <p className="text-muted-foreground leading-relaxed italic border-l-4 border-primary/20 pl-6 text-lg">
            "During my three years at <span className="text-foreground font-semibold">Cecil College</span>, I didn't just teach engineering: I re-engineered how it was taught.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-6">
            Transitioning the curriculum from PDFs and Powerpoints to web-based content, I focused on transforming complex technical lessons into highly accessible HTML using <span className="text-foreground font-semibold underline decoration-primary/50">Quarto markdown</span>. This allowed us to consistently generate semantic content including accessible equations and guaranteed descriptive alt text for every visual asset.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4 italic border-l-4 border-primary/20 pl-6 text-lg">
            This wasn't just theory; it was a methodical implementation of semantic architecture, ARIA compliance, and cognitive load management. Today, I bring that same technical rigor to Such Software’s commercial projects. We don't retroactively fix accessibility; we architect for it from line one."
          </p>
        </div>
      </div>

      {/* Right Column: Cards 01, 02, 03 */}
      <div className="space-y-6">
        <Card className="glass-card hover:border-purple-500/30">
          <h4 className="text-base font-bold mb-3 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center text-white text-[10px] font-bold" aria-hidden="true">01</span>
            A11y First Architecture
          </h4>
          <p className="text-muted-foreground text-sm leading-relaxed font-medium">
            Semantic HTML, ARIA patterns, and keyboard navigation aren't afterthoughts—they are the foundation of our build process.
          </p>
        </Card>

        <Card className="glass-card hover:border-blue-500/30">
          <h4 className="text-base font-bold mb-3 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white text-[10px] font-bold" aria-hidden="true">02</span>
            Edge Performance
          </h4>
          <p className="text-muted-foreground text-sm leading-relaxed font-medium">
            By leveraging edge computing and static generation, we ensure your site is usable even on 3G connections and older hardware.
          </p>
        </Card>

        <Card className="glass-card hover:border-emerald-500/30 border-dashed">
          <h4 className="text-base font-bold mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-emerald-700 flex items-center justify-center text-white text-[10px] font-bold" aria-hidden="true">03</span>
            Core Competencies
          </h4>
          <ul className="grid grid-cols-1 gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
            <li className="flex items-center gap-2">
              <span className="text-emerald-600 dark:text-emerald-400" aria-hidden="true">✓</span> WCAG 2.2 AA Compliance
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-600 dark:text-emerald-400" aria-hidden="true">✓</span> Section 508 & ADA
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-600 dark:text-emerald-400" aria-hidden="true">✓</span> Semantic HTML5 Architecture
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-600 dark:text-emerald-400" aria-hidden="true">✓</span> Playwright A11y Automation
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
};