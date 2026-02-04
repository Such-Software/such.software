import { Card } from "@repo/ui/components/card";
import Image from "next/image";
import Link from "next/link";

export const PortfolioGrid = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-4 auto-rows-[300px] gap-6 w-full max-w-7xl mx-auto p-4 z-10 relative">
      {/* Row 1: r/CryptoCurrency (2x1) */}
      <Link href="https://rcryptocurrency.com" target="_blank" rel="noopener noreferrer" className="md:col-span-2">
        <Card className="h-full glass-card group min-h-[300px] rounded-[2.5rem] !bg-slate-950/90 cursor-pointer">
          <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/95 via-black/40 to-transparent p-8 flex flex-col justify-end items-center text-center pointer-events-none">
            <h3 className="text-3xl font-bold text-white shadow-black drop-shadow-xl tracking-tight">r/CryptoCurrency</h3>
            <p className="text-gray-200 shadow-black drop-shadow-md max-w-md mt-2 font-medium text-base leading-relaxed">
              Governance dashboard for 10M+ members. Real-time DAO metrics.
            </p>
          </div>
          <div className="absolute inset-6 bottom-24 rounded-2xl overflow-hidden z-10 bg-slate-800/30">
              <Image
                src="/images/r-cryptocurrency.png"
                alt="Screenshot of r/CryptoCurrency subreddit homepage showing over 10 million subscribers, community links, and a cartoon moon mascot"
                fill
                className="object-contain p-4 opacity-80 transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
          </div>
        </Card>
      </Link>

      {/* Row 1: MoonPlace (1x1) */}
      <Link href="https://moonplace.io" target="_blank" rel="noopener noreferrer" className="md:col-span-1">
        <Card className="h-full glass-card group min-h-[300px] rounded-[2.5rem] !bg-indigo-50/95 dark:!bg-indigo-950/95 !border-indigo-500/20 cursor-pointer">
           <div className="absolute inset-x-0 top-0 z-20 p-6 bg-gradient-to-b from-background/95 to-transparent pointer-events-none">
            <h3 className="text-xl font-bold text-indigo-700 dark:text-indigo-400">MoonPlace</h3>
            <p className="text-sm mt-1 text-foreground font-semibold">Collaborative pixel canvas engine.</p>
          </div>
           <div className="absolute inset-x-4 bottom-4 top-24 rounded-lg overflow-hidden z-10 bg-black/5 dark:bg-white/5 border border-indigo-500/10 shadow-inner">
               <Image
                src="/images/moonplace.png"
                alt="Screenshot of MoonPlace collaborative pixel art canvas showing colorful community-created artwork"
                fill
                className="object-contain p-2 opacity-50 transition-transform duration-1000 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
           </div>
        </Card>
      </Link>

      {/* Row 1-2: Smirk Wallet (1x2 tall, far right) */}
      <Link href="https://smirk.cash" target="_blank" rel="noopener noreferrer" className="md:col-span-1 md:row-span-2">
        <Card className="h-full glass-card group min-h-[300px] rounded-[2.5rem] !bg-amber-50/95 dark:!bg-amber-950/95 !border-amber-500/20 cursor-pointer">
           <div className="absolute inset-x-0 top-0 z-20 p-6 bg-gradient-to-b from-background/95 to-transparent pointer-events-none">
            <h3 className="text-xl font-bold text-amber-700 dark:text-amber-400">Smirk Wallet</h3>
            <p className="text-sm mt-1 text-foreground font-semibold">Non-custodial browser wallet with encrypted social tipping.</p>
          </div>
           <div className="absolute inset-x-4 bottom-4 top-28 rounded-lg overflow-hidden z-10 bg-black/5 dark:bg-white/5 border border-amber-500/10 shadow-inner flex items-center justify-center">
               <Image
                src="/images/smirk-wallet.png"
                alt="Screenshot of Smirk Wallet browser extension showing multi-currency support for BTC, LTC, XMR, WOW, and GRIN"
                fill
                className="object-contain p-4 opacity-60 transition-transform duration-1000 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
           </div>
        </Card>
      </Link>

      {/* Row 2: Privacy Labs (1x1) */}
      <Link href="https://play.wowne.ro" target="_blank" rel="noopener noreferrer" className="md:col-span-1">
        <Card className="h-full glass-card group min-h-[300px] rounded-[2.5rem] !bg-orange-50/95 dark:!bg-orange-950/95 !border-orange-500/20 cursor-pointer">
          <div className="absolute inset-x-0 top-0 z-20 p-6 bg-gradient-to-b from-background/95 to-transparent pointer-events-none">
            <h3 className="text-xl font-bold text-orange-700 dark:text-orange-400">Privacy Labs</h3>
            <ul className="mt-2 space-y-1 text-sm text-foreground font-semibold">
              <li className="flex items-center gap-2">Monerogue / Wownerogue</li>
              <li className="flex items-center gap-2"><span className="text-xs opacity-60">(Blockchain Gaming)</span></li>
            </ul>
          </div>
           <div className="absolute inset-x-4 bottom-4 top-24 rounded-lg overflow-hidden z-10 bg-black/5 dark:bg-white/5 border border-orange-500/10 shadow-inner">
              <Image
                src="/images/privacy-labs.png"
                alt="Screenshots of Monerogue roguelike game and Wowne.ro WebAssembly wallet interface"
                fill
                className="object-contain p-2 opacity-50 transition-transform duration-1000 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
           </div>
        </Card>
      </Link>

      {/* Row 2: Occupy Wallets (2x1, center) */}
      <Link href="https://occupywallets.art" target="_blank" rel="noopener noreferrer" className="md:col-span-2">
        <Card className="h-full glass-card group min-h-[300px] rounded-[2.5rem] cursor-pointer">
          <div className="absolute inset-0 z-20 p-8 flex flex-col justify-center items-center text-center pointer-events-none">
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white drop-shadow-sm bg-white/60 dark:bg-black/60 backdrop-blur-3xl rounded-xl px-6 py-2">Occupy Wallets</h3>
            <p className="text-zinc-900 dark:text-zinc-200 font-bold drop-shadow-sm bg-white/60 dark:bg-black/60 backdrop-blur-3xl rounded-xl px-6 py-2 mt-4">High-fidelity gallery for fiscal graffiti.</p>
          </div>
          <div className="absolute inset-4 rounded-xl overflow-hidden z-10 bg-zinc-200/50 dark:bg-zinc-800/50">
               <Image
                src="/images/occupy-wallets.png"
                alt="Screenshot of Occupy Wallets gallery displaying illustrated artwork with political and economic commentary"
                fill
                className="object-contain p-4 opacity-60 transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
          </div>
        </Card>
      </Link>
    </section>
  );
};