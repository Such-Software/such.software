import { Card } from "@repo/ui/components/card";
import Image from "next/image";

export const PortfolioGrid = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-4 auto-rows-[300px] gap-4 max-w-7xl mx-auto p-4 z-10 relative">
      {/* Hero Project: r/CryptoCurrency */}
      <Card className="md:col-span-2 md:row-span-2 relative group overflow-hidden border-0 bg-slate-900/70 backdrop-blur-sm">
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
          <h3 className="text-3xl font-bold text-white">r/CryptoCurrency</h3>
          <p className="text-gray-200">Governance dashboard for 10M+ members. Real-time DAO metrics.</p>
        </div>
        {/* Placeholder image since we don't have the assets yet */}
        <div className="absolute inset-0 bg-slate-800/50" />
      </Card>

      {/* Secondary: Occupy Wallets */}
      <Card className="md:col-span-2 relative group overflow-hidden bg-zinc-100/70 backdrop-blur-sm">
        <div className="absolute inset-0 z-10 p-6 flex flex-col justify-center items-center text-center">
          <h3 className="text-2xl font-bold text-zinc-900">Occupy Wallets</h3>
          <p className="text-zinc-600">High-fidelity gallery for fiscal graffiti.</p>
        </div>
      </Card>

      {/* Tertiary: Monerogue & Wowne.ro (Grouped) */}
      <Card className="md:col-span-1 relative group overflow-hidden bg-orange-50/70 dark:bg-orange-950/70 border-orange-500/20 backdrop-blur-sm">
        <div className="p-6">
          <h3 className="text-xl font-bold text-orange-700 dark:text-orange-400">Privacy Labs</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li className="flex items-center gap-2">Monerogue <span className="text-xs opacity-50">(Game)</span></li>
            <li className="flex items-center gap-2">Wowne.ro <span className="text-xs opacity-50">(WASM)</span></li>
          </ul>
        </div>
      </Card>

       {/* Quaternary: MoonPlace */}
      <Card className="md:col-span-1 relative group bg-indigo-50/70 dark:bg-indigo-950/70 border-indigo-500/20 backdrop-blur-sm">
         <div className="p-6">
          <h3 className="text-xl font-bold text-indigo-700 dark:text-indigo-400">MoonPlace</h3>
          <p className="text-sm mt-2">Collaborative pixel canvas engine.</p>
        </div>
      </Card>
    </section>
  );
};