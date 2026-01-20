import Image from 'next/image';
import networkData from '@/content/network.json';

export default function NetworkGrid() {
  return (
    <section className="py-24 bg-neutral-900 border-t border-white/5">
      <div className="container mx-auto px-4">
        
        {/* HEADER */}
        <div className="mb-20 text-center">
           <h2 className="text-fluid-h1 font-black text-white mb-6 tracking-tight">
             THE MBI NETWORK GIANTS
           </h2>
           <p className="text-gray-400 max-w-2xl mx-auto text-lg">
             We manage the infrastructure, monetization, and growth for Africa's most influential channels.
           </p>
        </div>

        {/* TIER 1: LEGENDS (Grade 5) */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-8">
             <div className="h-px bg-white/20 flex-1" />
             <span className="text-mbi-gold font-black uppercase tracking-[0.3em] text-sm">Legends in the Making</span>
             <div className="h-px bg-white/20 flex-1" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {networkData.legends.map((channel) => (
              <a 
                key={channel.id}
                href={`https://www.youtube.com/channel/${channel.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative h-80 rounded-2xl overflow-hidden border border-mbi-gold/30 bg-black hover:border-mbi-gold transition-all duration-500 hover:shadow-[0_0_50px_rgba(255,215,0,0.2)]"
              >
                {/* Simulated Channel Art Background */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-neutral-800 group-hover:scale-105 transition-transform duration-700" />
                
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                   <div className="w-16 h-16 rounded-full bg-mbi-gold flex items-center justify-center text-black font-black text-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform">
                      {channel.name.charAt(0)}
                   </div>
                   <h3 className="text-2xl font-black text-white mb-2 leading-none">{channel.name}</h3>
                   <div className="flex items-center gap-3">
                     <span className="px-3 py-1 bg-white/10 backdrop-blur rounded text-xs font-bold text-mbi-gold uppercase tracking-wider border border-mbi-gold/20">
                       Top Tier
                     </span>
                     <span className="text-gray-400 text-sm font-mono">{channel.watchtime} Watchtime</span>
                   </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* TIER 2: HIGH FLYERS (Grade 4) */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
             <span className="text-mbi-red font-bold uppercase tracking-widest text-xs">High Flyers (Grade 4)</span>
             <div className="h-px bg-white/10 flex-1" />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {networkData.highFlyers.map((channel) => (
              <a 
                key={channel.id}
                href={`https://www.youtube.com/channel/${channel.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-black/50 border border-white/5 rounded-lg p-5 hover:bg-neutral-800 hover:border-white/20 transition-all flex flex-col justify-between h-36"
              >
                <div>
                   <h3 className="text-sm font-bold text-white group-hover:text-mbi-red leading-tight mb-2 line-clamp-2">
                     {channel.name}
                   </h3>
                   <div className="w-8 h-1 bg-neutral-700 rounded-full group-hover:bg-mbi-red transition-colors" />
                </div>
                <div className="flex justify-between items-end mt-4">
                   <span className="text-[10px] text-gray-500 font-mono uppercase tracking-wider">Managed</span>
                   <span className="text-xs text-white font-bold">{channel.watchtime}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* TIER 3: THE ARMY (Rising Stars - Scrollable) */}
        <div>
          <div className="flex items-center gap-4 mb-8">
             <span className="text-gray-500 font-bold uppercase tracking-widest text-xs">Rising Stars & Starters (50+)</span>
             <div className="h-px bg-white/10 flex-1" />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-8 gap-3 opacity-60 hover:opacity-100 transition-opacity">
            {networkData.risingStars.map((channel) => (
              <a 
                key={channel.id}
                href={`https://www.youtube.com/channel/${channel.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 bg-black border border-white/5 rounded text-center hover:border-white/30 transition-colors"
              >
                <div className="w-8 h-8 mx-auto rounded-full bg-neutral-800 flex items-center justify-center text-[10px] text-gray-400 font-bold mb-2">
                   {channel.name.charAt(0)}
                </div>
                <h4 className="text-[10px] font-bold text-gray-300 truncate w-full">
                  {channel.name}
                </h4>
              </a>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}
