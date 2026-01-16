import { Card } from "@repo/ui/components/card";

export function ServicesPreview() {
  return (
        <div className="grid md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto px-4 mt-8 mb-16">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-indigo-500/20 hover:border-indigo-500/40 transition-colors text-left">
                <h3 className="text-xl font-bold mb-2">Unlimited Data Modeling</h3>
                <p className="text-sm text-muted-foreground">
                    Need a product with "DNA Sequence", "Artist Bio", and "Royalty Logic"? 
                    We model that natively in the database, not via hacky meta-fields.
                </p>
            </Card>
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-indigo-500/20 hover:border-indigo-500/40 transition-colors text-left">
                <h3 className="text-xl font-bold mb-2">Workflow Orchestration</h3>
                <p className="text-sm text-muted-foreground">
                     Automate complex business logic—like splitting an order between a print-on-demand provider 
                     and a local warehouse automatically using Medusa Workflows.
                </p>
            </Card>
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-indigo-500/20 hover:border-indigo-500/40 transition-colors text-left">
                <h3 className="text-xl font-bold mb-2">Headless Performance</h3>
                <p className="text-sm text-muted-foreground">
                    We couple the robust Medusa backend with a Next.js frontend, ensuring your shop 
                    scores 100/100 on Core Web Vitals and SEO.
                </p>
            </Card>
        </div>
  )
}
