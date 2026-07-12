import { Card } from "@repo/ui/components/card";

// Founder science credentials, shown on the Education & Science pillar page.
export function EducationCredentials() {
  return (
    <Card className="glass-card border-amber-400/20 mt-6 !p-8">
      <h3 className="text-lg font-bold mb-4">Why us, on the science</h3>
      <ul className="space-y-2 text-base text-muted-foreground leading-relaxed">
        <li><span className="font-semibold text-foreground">PhD in radiation-detector materials</span>, UT-Dallas (2014)</li>
        <li><span className="font-semibold text-foreground">Lawrence Livermore National Laboratory</span> (2015-2021): detector systems, radioisotope battery program, MCNP5 publications</li>
        <li><span className="font-semibold text-foreground">Holtec International</span>: radiation shielding and spent-fuel-to-dry-cask optimization</li>
        <li><span className="font-semibold text-foreground">College-level instructor</span>: author of open-source GEANT4 radiation labs</li>
      </ul>
      <p className="text-xs text-muted-foreground/70 mt-5">
        This is education and published open-source methods, not for-hire controlled
        modeling. We are not a licensed professional-engineering (PE) firm and provide no
        stamped engineering deliverables.
      </p>
    </Card>
  );
}
