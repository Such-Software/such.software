import { Card } from "@repo/ui/components/card";
import Image from "next/image";

export const PortfolioGrid = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-4 auto-rows-[300px] gap-6 w-full max-w-7xl mx-auto p-4 z-10 relative">
      {/* Hero Project: r/CryptoCurrency */}
      <Card className="md:col-span-2 md:row-span-2 glass-card group min-h-[300px] rounded-[2.5rem] !bg-slate-950/90">
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/95 via-black/20 to-transparent p-12 flex flex-col justify-end items-center text-center pointer-events-none pb-20">
          <h3 className="text-4xl font-bold text-white shadow-black drop-shadow-xl tracking-tight">r/CryptoCurrency</h3>
          <p className="text-gray-200 shadow-black drop-shadow-md max-w-md mt-3 font-medium text-lg leading-relaxed">
            Governance dashboard for 10M+ members. Real-time DAO metrics.
          </p>
        </div>
        <div className="absolute inset-x-10 top-10 bottom-48 rounded-2xl overflow-hidden z-10 bg-slate-800/30">
            <Image 
              src="/images/r-cryptocurrency.png" 
              alt="r/CryptoCurrency" 
              fill 
              className="object-contain p-8 opacity-80 transition-transform duration-1000 group-hover:scale-105" 
              sizes="(max-width: 768px) 100vw, 50vw"
            />
        </div>
      </Card>

      {/* Secondary: Occupy Wallets */}
      <Card className="md:col-span-2 glass-card group min-h-[300px] rounded-[2.5rem]">
        <div className="absolute inset-0 z-20 p-8 flex flex-col justify-center items-center text-center pointer-events-none">
          <h3 className="text-2xl font-bold text-zinc-900 dark:text-white drop-shadow-sm bg-white/60 dark:bg-black/60 backdrop-blur-3xl rounded-xl px-6 py-2">Occupy Wallets</h3>
          <p className="text-zinc-900 dark:text-zinc-200 font-bold drop-shadow-sm bg-white/60 dark:bg-black/60 backdrop-blur-3xl rounded-xl px-6 py-2 mt-4">High-fidelity gallery for fiscal graffiti.</p>
        </div>
        <div className="absolute inset-4 rounded-xl overflow-hidden z-10 bg-zinc-200/50 dark:bg-zinc-800/50">
             <Image 
              src="/images/occupy-wallets.png" 
              alt="Occupy Wallets" 
              fill 
              className="object-contain p-4 opacity-60 transition-transform duration-1000 group-hover:scale-105" 
              sizes="(max-width: 768px) 100vw, 50vw"
            />
        </div>
      </Card>

      {/* Tertiary: Monerogue & Wowne.ro (Grouped) */}
      <Card className="md:col-span-1 glass-card group min-h-[300px] rounded-[2.5rem] !bg-orange-50/95 dark:!bg-orange-950/95 !border-orange-500/20">
        <div className="absolute inset-x-0 top-0 z-20 p-6 bg-gradient-to-b from-background/95 to-transparent pointer-events-none">
          <h3 className="text-xl font-bold text-orange-700 dark:text-orange-400">Privacy Labs</h3>
          <ul className="mt-2 space-y-1 text-sm text-foreground font-semibold">
            <li className="flex items-center gap-2">Monerogue <span className="text-xs opacity-60">(Game)</span></li>
            <li className="flex items-center gap-2">Wowne.ro <span className="text-xs opacity-60">(WASM)</span></li>
          </ul>
        </div>
         <div className="absolute inset-x-4 bottom-4 top-24 rounded-lg overflow-hidden z-10 bg-black/5 dark:bg-white/5 border border-orange-500/10 shadow-inner">
            <Image 
              src="/images/privacy-labs.png" 
              alt="Privacy Labs" 
              fill 
              className="object-contain p-2 opacity-50 transition-transform duration-1000 group-hover:scale-110" 
              sizes="(max-width: 768px) 100vw, 25vw"
            />
         </div>
      </Card>

       {/* Quaternary: MoonPlace */}
      <Card className="md:col-span-1 glass-card group min-h-[300px] rounded-[2.5rem] !bg-indigo-50/95 dark:!bg-indigo-950/95 !border-indigo-500/20">
         <div className="absolute inset-x-0 top-0 z-20 p-6 bg-gradient-to-b from-background/95 to-transparent pointer-events-none">
          <h3 className="text-xl font-bold text-indigo-700 dark:text-indigo-400">MoonPlace</h3>
          <p className="text-sm mt-1 text-foreground font-semibold">Collaborative pixel canvas engine.</p>
        </div>
         <div className="absolute inset-x-4 bottom-4 top-24 rounded-lg overflow-hidden z-10 bg-black/5 dark:bg-white/5 border border-indigo-500/10 shadow-inner">
             <Image 
              src="/images/moonplace.png" 
              alt="MoonPlace" 
              fill 
              className="object-contain p-2 opacity-50 transition-transform duration-1000 group-hover:scale-110" 
              sizes="(max-width: 768px) 100vw, 25vw"
            />
         </div>
      </Card>
    </section>
  );
};