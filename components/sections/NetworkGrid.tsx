import Link from 'next/link';

const TIERS = [
  {
    name: "LEGENDS",
    desc: "1M+ Subscribers",
    channels: ["Aforevo", "Mark Angel", "Yorubahood", "Real Nolly"]
  },
  {
    name: "HIGH FLYERS",
    desc: "500K - 1M Subscribers",
    channels: ["Nollywood Realn", "Nolly Romance", "Murphy Ben Intl"]
  },
  {
    name: "RISING STARS",
    desc: "Fastest Growing",
    channels: ["Aforevo Stage", "Aforevo Music", "Aforevo Shorts", "Vybz 94.5"]
  }
];

export default function NetworkGrid() {
  return (
    <section className="py-24 bg-white dark:bg-black border-y border-black/10 dark:border-white/10 transition-colors duration-300">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-xl">
             <span className="text-mbi-red font-bold uppercase tracking-widest text-xs">The Army</span>
             <h2 className="text-4xl md:text-5xl font-black text-black dark:text-white mt-2 mb-4">MBI NETWORK GIANTS</h2>
             <p className="text-gray-600 dark:text-gray-400 text-lg">
               250+ Channels. 10.4M+ Subscribers. We don&apos;t just participate in the algorithm; we dictate it.
             </p>
          </div>
          <Link href="/brands" className="px-6 py-3 border border-black/20 dark:border-white/20 text-black dark:text-white font-bold uppercase tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all text-xs">
            View All 250+ Channels
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TIERS.map((tier, i) => (
            <div key={i} className="p-8 border border-black/10 dark:border-white/10 bg-gray-50 dark:bg-neutral-900/30">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-black text-black dark:text-white">{tier.name}</h3>
                <span className="text-[10px] font-bold uppercase tracking-widest text-mbi-red dark:text-mbi-gold border border-mbi-red/20 dark:border-mbi-gold/20 px-2 py-1 rounded">
                  {tier.desc}
                </span>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {tier.channels.map((channel, j) => (
                  <span 
                    key={j} 
                    className="px-3 py-1 bg-black/5 dark:bg-white/5 text-gray-600 dark:text-gray-300 text-xs font-bold uppercase tracking-wide border border-black/5 dark:border-white/5 hover:border-black/20 dark:hover:border-white/20 hover:text-black dark:hover:text-white transition-colors cursor-default"
                  >
                    {channel}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
