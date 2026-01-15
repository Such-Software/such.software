import { Card } from "@repo/ui/components/card";

export const FounderSignature = () => {
  return (
    <section className="w-full max-w-4xl mx-auto py-20 px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">Accessibility as Architecture</h2>
          <div className="prose dark:prose-invert">
            <p className="text-muted-foreground leading-relaxed">
              "During my three years at <span className="text-foreground font-semibold">Cecil College</span>, I didn't just teach web design—I re-engineered how it was taught.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Transitioning the curriculum toward 'Digital Arts and Media Design,' I embedded inclusive design principles into the foundation of every course. I taught students that a website isn't truly 'live' until it is accessible to everyone. 
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              This wasn't just academic theory; it was a rigorous discipline of semantic HTML, ARIA compliance, and cognitive load management. Today, I bring that same academic rigor to Such Software’s commercial projects. We don't retroactively fix accessibility; we architect for it from line one."
            </p>
          </div>
          <div className="pt-4 border-t border-border">
            <p className="font-mono text-sm uppercase tracking-widest text-primary">Founder & Principle Engineer</p>
          </div>
        </div>
        
        <Card className="relative p-8 bg-muted/30 border-dashed">
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl" />
          
          <h3 className="tex-lg font-semibold mb-4">Core Competencies</h3>
          <ul className="space-y-3 font-mono text-sm">
             <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> WCAG 2.2 AA Compliance
             </li>
             <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Section 508 & ADA
             </li>
             <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Semantic HTML5 Architecture
             </li>
             <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Playwright A11y Automation
             </li>
          </ul>
        </Card>
      </div>
    </section>
  );
};