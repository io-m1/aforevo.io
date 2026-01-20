import Image from 'next/image';
import networkData from '@/content/network.json';
import { getBatchChannelDetails } from '@/lib/youtube';

export default async function NetworkGrid() {
  // 1. Collect ALL IDs from your JSON data
  const allIds = [
    ...networkData.legends.map(c => c.id),
    ...networkData.highFlyers.map(c => c.id),
    ...networkData.risingStars.map(c => c.id)
  ];

  // 2. Fetch Real Images (Server-Side)
  // This runs once on the server and is cached. Fast & Safe.
  const channelImages = await getBatchChannelDetails(allIds);

  return (
    <section className="py-24 bg-neutral-900 border-t border-white/5">
      <div className="container mx-auto px-4">
        
        {/* HEADER */}
        <div className="mb-20 text-center">
           <h2 className="text-fluid-h1 font-black text-white mb-6 tracking-tight">
             THE MBI NETWORK GIANTS
           </h2>
           <p className="text-gray-400 max-w-2xl mx-auto text-lg">
             We manage the infrastructure, monetization, and growth for Africa&apos;s most influential channels.
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
                {/* Real Channel Image Background (Blurred) */}
                {channelImages[channel.id] && (
                  <Image 
                    src={channelImages[channel.id]} 
                    alt={channel.name}
                    fill
                    className="object-cover opacity-20 group-hover:opacity-40 transition-opacity blur-sm scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                   {/* Real Channel Logo (Sharp) */}
                   <div className="relative w-20 h-20 rounded-full border-2 border-mbi-gold overflow-hidden mb-4 shadow-2xl group-hover:scale-110 transition-transform">
                     {channelImages[channel.id] ? (
                       <Image 
                         src={channelImages[channel.id]} 
                         alt={channel.name} 
                         fill 
                         className="object-cover" 
                       />
                     ) : (
                       <div className="w-full h-full bg-mbi-gold flex items-center justify-center text-black font-black text-2xl">
                         {channel.name.charAt(0)}
                       </div>
                     )}
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
                className="group bg-neutral-900/50 border border-white/5 rounded-lg p-5 hover:bg-neutral-800 hover:border-white/20 transition-all flex flex-col items-center text-center h-48 justify-center gap-4"
              >
                <div className="relative w-16 h-16 rounded-full overflow-hidden border border-white/10 group-hover:border-mbi-red transition-colors shadow-lg">
                   {channelImages[channel.id] ? (
                     <Image src={channelImages[channel.id]} alt={channel.name} fill className="object-cover" />
                   ) : (
                     <div className="w-full h-full bg-neutral-800 flex items-center justify-center text-gray-500 font-bold">
                       {channel.name.charAt(0)}
                     </div>
                   )}
                </div>
                <div>
                   <h3 className="text-sm font-bold text-white group-hover:text-mbi-red leading-tight line-clamp-2">
                     {channel.name}
                   </h3>
                   <div className="text-[10px] text-gray-500 mt-1 uppercase tracking-wider font-mono">
                     {channel.watchtime}
                   </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* TIER 3: THE ARMY (Rising Stars) */}
        <div>
          <div className="flex items-center gap-4 mb-8">
             <span className="text-gray-500 font-bold uppercase tracking-widest text-xs">Rising Stars & Starters (50+)</span>
             <div className="h-px bg-white/10 flex-1" />
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-10 gap-2">
            {networkData.risingStars.map((channel) => (
              <a 
                key={channel.id}
                href={`https://www.youtube.com/channel/${channel.id}`}
                target="_blank"
                rel="noopener noreferrer"
                title={channel.name}
                className="relative aspect-square rounded-full overflow-hidden border border-white/5 hover:border-white hover:scale-110 transition-all cursor-pointer bg-neutral-900"
              >
                {channelImages[channel.id] ? (
                  <Image src={channelImages[channel.id]} alt={channel.name} fill className="object-cover" />
                ) : (
                   <div className="w-full h-full flex items-center justify-center text-[8px] text-gray-600 font-bold">
                     {channel.name.substring(0, 2)}
                   </div>
                )}
              </a>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}
