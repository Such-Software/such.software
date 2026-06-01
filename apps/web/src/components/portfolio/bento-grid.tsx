import { Card } from "@repo/ui/components/card";
import Image from "next/image";
import Link from "next/link";

export const PortfolioGrid = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-4 auto-rows-[300px] gap-6 w-full max-w-7xl mx-auto p-4 z-10 relative">
      {/* Row 1: Wownerogue (2x1) */}
      <Link href="/products/wownerogue" className="bento-item md:col-span-2" style={{ animationDelay: "0ms" }}>
        <Card className="h-full glass-card group min-h-[300px] rounded-[2.5rem] !bg-orange-50/95 dark:!bg-orange-950/95 !border-orange-500/20 cursor-pointer">
          <div className="absolute inset-x-0 top-0 z-20 p-6 bg-gradient-to-b from-background/95 to-transparent pointer-events-none">
            <h3 className="text-xl font-bold text-orange-700 dark:text-orange-400">Wownerogue</h3>
            <p className="text-sm mt-1 text-foreground font-semibold">Provably-fair multiplayer roguelike, synced to Monero and Wownero blocks.</p>
          </div>
          <div className="absolute inset-x-4 bottom-4 top-24 rounded-lg overflow-hidden z-10 bg-black/5 dark:bg-white/5 border border-orange-500/10 shadow-inner">
            <Image
              src="/images/products/privacy-labs.png"
              alt="Screenshot of the Wownerogue and Monerogue roguelike dungeon-crawler game"
              fill
              className="object-contain p-2 opacity-60 transition-transform duration-1000 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </Card>
      </Link>

      {/* Row 1: Smirk Wallet (2x1) */}
      <Link href="https://smirk.cash" target="_blank" rel="noopener noreferrer" className="bento-item md:col-span-2" style={{ animationDelay: "75ms" }}>
        <Card className="h-full glass-card group min-h-[300px] rounded-[2.5rem] !bg-amber-50/95 dark:!bg-amber-950/95 !border-amber-500/20 cursor-pointer">
          <div className="absolute inset-x-0 top-0 z-20 p-6 bg-gradient-to-b from-background/95 to-transparent pointer-events-none">
            <h3 className="text-xl font-bold text-amber-700 dark:text-amber-400">Smirk Wallet</h3>
            <p className="text-sm mt-1 text-foreground font-semibold">Non-custodial browser wallet with encrypted social tipping.</p>
          </div>
          <div className="absolute inset-x-4 bottom-4 top-24 rounded-lg overflow-hidden z-10 bg-black/5 dark:bg-white/5 border border-amber-500/10 shadow-inner flex items-center justify-center">
            <Image
              src="/images/products/smirk-wallet.png"
              alt="Screenshot of Smirk Wallet browser extension showing multi-currency support for BTC, LTC, XMR, WOW, and GRIN"
              fill
              className="object-contain p-4 opacity-60 transition-transform duration-1000 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </Card>
      </Link>

      {/* Row 2: Neroswap (2x1) */}
      <Link href="https://neroswap.com" target="_blank" rel="noopener noreferrer" className="bento-item md:col-span-2" style={{ animationDelay: "150ms" }}>
        <Card className="h-full glass-card group min-h-[300px] rounded-[2.5rem] !bg-yellow-50/95 dark:!bg-yellow-950/95 !border-yellow-500/20 cursor-pointer">
          <div className="absolute inset-x-0 top-0 z-20 p-6 bg-gradient-to-b from-background/95 to-transparent pointer-events-none">
            <h3 className="text-xl font-bold text-yellow-700 dark:text-yellow-400">Neroswap</h3>
            <p className="text-sm mt-1 text-foreground font-semibold">DEX &amp; CEX orderbook aggregator.</p>
          </div>
          <div className="absolute inset-x-4 bottom-4 top-24 rounded-lg overflow-hidden z-10 bg-black/5 dark:bg-white/5 border border-yellow-500/10 shadow-inner">
            <Image
              src="/images/products/neroswap.png"
              alt="Screenshot of Neroswap DEX and CEX orderbook aggregator interface"
              fill
              className="object-cover opacity-50 transition-transform duration-1000 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </Card>
      </Link>

      {/* Row 2: Bauhaus Echo (1x1) */}
      <Link href="/products/bauhaus-echo" className="bento-item md:col-span-1" style={{ animationDelay: "225ms" }}>
        <Card className="h-full glass-card group min-h-[300px] rounded-[2.5rem] !bg-blue-50/95 dark:!bg-blue-950/95 !border-blue-500/20 cursor-pointer">
          <div className="absolute inset-x-0 top-0 z-20 p-6 bg-gradient-to-b from-background/95 to-transparent pointer-events-none">
            <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400">Bauhaus Echo</h3>
            <p className="text-sm mt-1 text-foreground font-semibold">Visual memory puzzle game.</p>
          </div>
          <div className="absolute inset-x-4 bottom-4 top-24 rounded-lg overflow-hidden z-10 bg-black/5 dark:bg-white/5 border border-blue-500/10 shadow-inner">
            <Image
              src="/images/products/bauhaus-echo.png"
              alt="Screenshot of Bauhaus Echo visual memory puzzle game with geometric tiles"
              fill
              className="object-contain p-2 opacity-50 transition-transform duration-1000 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
          </div>
        </Card>
      </Link>

      {/* Row 2: Occupy Wallets (1x1) */}
      <Link href="https://occupywallets.art" target="_blank" rel="noopener noreferrer" className="bento-item md:col-span-1" style={{ animationDelay: "300ms" }}>
        <Card className="h-full glass-card group min-h-[300px] rounded-[2.5rem] cursor-pointer">
          <div className="absolute inset-0 z-20 p-6 flex flex-col justify-center items-center text-center pointer-events-none">
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white drop-shadow-sm bg-white/60 dark:bg-black/60 backdrop-blur-3xl rounded-xl px-6 py-2">Occupy Wallets</h3>
            <p className="text-zinc-900 dark:text-zinc-200 font-bold drop-shadow-sm bg-white/60 dark:bg-black/60 backdrop-blur-3xl rounded-xl px-4 py-2 mt-4 text-sm">High-fidelity gallery for fiscal graffiti.</p>
          </div>
          <div className="absolute inset-4 rounded-xl overflow-hidden z-10 bg-zinc-200/50 dark:bg-zinc-800/50">
            <Image
              src="/images/products/occupy-wallets.png"
              alt="Screenshot of Occupy Wallets gallery displaying illustrated artwork with political and economic commentary"
              fill
              className="object-contain p-4 opacity-60 transition-transform duration-1000 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
          </div>
        </Card>
      </Link>
    </section>
  );
};
