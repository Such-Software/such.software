import { Card } from "@repo/ui/components/card";
import Image from "next/image";

export const PortfolioGrid = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-4 auto-rows-[300px] gap-6 w-full max-w-7xl mx-auto p-4 z-10 relative">
      {/* Hero Project: r/CryptoCurrency */}
      <Card className="md:col-span-2 md:row-span-2 relative group overflow-hidden border-0 bg-slate-900/70 backdrop-blur-sm min-h-[300px]">
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 flex flex-col justify-end pointer-events-none">
          <h3 className="text-3xl font-bold text-white shadow-black drop-shadow-xl">r/CryptoCurrency</h3>
          <p className="text-gray-200 shadow-black drop-shadow-md max-w-sm mt-2 font-medium">Governance dashboard for 10M+ members. Real-time DAO metrics.</p>
        </div>
        <div className="absolute inset-x-4 inset-y-4 rounded-lg overflow-hidden z-10">
            <Image 
              src="/images/r-cryptocurrency.png" 
              alt="r/CryptoCurrency" 
              fill 
              className="object-cover object-top opacity-60 transition-transform duration-1000 group-hover:scale-110" 
              sizes="(max-width: 768px) 100vw, 50vw"
            />
        </div>
      </Card>

      {/* Secondary: Occupy Wallets */}
      <Card className="md:col-span-2 relative group overflow-hidden bg-zinc-100/70 backdrop-blur-sm border-0 min-h-[300px]">
        <div className="absolute inset-0 z-20 p-8 flex flex-col justify-center items-center text-center pointer-events-none">
          <h3 className="text-2xl font-bold text-zinc-900 drop-shadow-sm bg-white/60 backdrop-blur-md rounded-xl px-6 py-2">Occupy Wallets</h3>
          <p className="text-zinc-900 font-bold drop-shadow-sm bg-white/60 backdrop-blur-md rounded-xl px-6 py-2 mt-4">High-fidelity gallery for fiscal graffiti.</p>
        </div>
        <div className="absolute inset-x-4 inset-y-4 rounded-lg overflow-hidden z-10">
             <Image 
              src="/images/occupy-wallets.png" 
              alt="Occupy Wallets" 
              fill 
              className="object-cover object-top opacity-50 transition-transform duration-1000 group-hover:scale-110" 
              sizes="(max-width: 768px) 100vw, 50vw"
            />
        </div>
      </Card>

      {/* Tertiary: Monerogue & Wowne.ro (Grouped) */}
      <Card className="md:col-span-1 relative group overflow-hidden bg-orange-50/70 dark:bg-orange-950/70 border-orange-500/20 backdrop-blur-sm min-h-[300px]">
        <div className="absolute inset-x-0 top-0 z-20 p-6 bg-gradient-to-b from-background/95 to-transparent pointer-events-none">
          <h3 className="text-xl font-bold text-orange-700 dark:text-orange-400">Privacy Labs</h3>
          <ul className="mt-2 space-y-1 text-sm text-foreground font-semibold">
            <li className="flex items-center gap-2">Monerogue <span className="text-xs opacity-60">(Game)</span></li>
            <li className="flex items-center gap-2">Wowne.ro <span className="text-xs opacity-60">(WASM)</span></li>
          </ul>
        </div>
         <div className="absolute inset-x-4 bottom-4 top-24 rounded-lg overflow-hidden z-10 border border-orange-500/20 shadow-lg">
            <Image 
              src="/images/privacy-labs.png" 
              alt="Privacy Labs" 
              fill 
              className="object-cover object-top opacity-40 transition-transform duration-1000 group-hover:scale-110" 
              sizes="(max-width: 768px) 100vw, 25vw"
            />
         </div>
      </Card>

       {/* Quaternary: MoonPlace */}
      <Card className="md:col-span-1 relative group overflow-hidden bg-indigo-50/70 dark:bg-indigo-950/70 border-indigo-500/20 backdrop-blur-sm min-h-[300px]">
         <div className="absolute inset-x-0 top-0 z-20 p-6 bg-gradient-to-b from-background/95 to-transparent pointer-events-none">
          <h3 className="text-xl font-bold text-indigo-700 dark:text-indigo-400">MoonPlace</h3>
          <p className="text-sm mt-1 text-foreground font-semibold">Collaborative pixel canvas engine.</p>
        </div>
         <div className="absolute inset-x-4 bottom-4 top-24 rounded-lg overflow-hidden z-10 border border-indigo-500/20 shadow-lg">
             <Image 
              src="/images/moonplace.png" 
              alt="MoonPlace" 
              fill 
              className="object-cover object-top opacity-40 transition-transform duration-1000 group-hover:scale-110" 
              sizes="(max-width: 768px) 100vw, 25vw"
            />
         </div>
      </Card>
    </section>
  );
};
    </section>
  );
};