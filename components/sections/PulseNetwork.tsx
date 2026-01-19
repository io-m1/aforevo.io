'use client';

import { useState } from 'react';

export interface PulseItem {
  id: string;
  category: string;
  message: string;
  timestamp: string;
  location: string;
  stats?: string;
}

interface PulseNetworkProps {
  data: {
    heading: string;
    subheading: string;
    items: PulseItem[];
  };
  liveStats?: {
    totalSubs: string;
    totalViews: string;
  };
}

export default function PulseNetwork({ data, liveStats }: PulseNetworkProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleShare = (item: PulseItem) => {
    const text = `${item.category}: ${item.message} - via MBI Network`;
    navigator.clipboard.writeText(text);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section className="bg-neutral-900 border-t border-neutral-800 py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header with "Live" Indicator */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
               <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-xs font-bold text-green-500 tracking-widest uppercase">System Operational</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter">
              {data.heading}
            </h2>
            <p className="text-gray-400 mt-2">{data.subheading}</p>
          </div>
          
          {/* Live Server Stats */}
          <div className="flex gap-4 text-sm font-mono text-gray-500 border border-neutral-800 p-2 rounded bg-black/50">
             <span>SERVER: LAG-01</span>
             <span className="text-neutral-700">|</span>
             <span>UPTIME: 99.99%</span>
             {liveStats && (
               <>
                 <span className="text-neutral-700">|</span>
                 <span className="text-white">LIVE SUBS: {liveStats.totalSubs}</span>
               </>
             )}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* LEFT: The Pulse Feed */}
          <div className="lg:w-1/2 space-y-6">
            {data.items.map((item) => (
              <div 
                key={item.id} 
                className="group relative pl-8 border-l border-neutral-800 hover:border-mbi-red transition-colors duration-300"
              >
                <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-neutral-800 group-hover:bg-mbi-red transition-colors" />
                
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-mbi-red uppercase tracking-wider">
                    {item.category}
                  </span>
                  <span className="text-xs font-mono text-gray-500">
                    {item.timestamp}
                  </span>
                </div>
                
                <p className="text-white font-medium text-lg leading-snug mb-2 group-hover:text-gray-200">
                  {item.message}
                </p>
                
                <div className="flex items-center gap-4">
                  {item.stats && (
                    <span className="text-xs font-bold text-mbi-gold bg-mbi-gold/10 px-2 py-1 rounded">
                      {item.stats}
                    </span>
                  )}
                  <span className="text-xs text-gray-600 flex items-center gap-1">
                    {item.location}
                  </span>
                  
                  <button 
                    onClick={() => handleShare(item)}
                    className="text-xs text-gray-500 hover:text-white flex items-center gap-1 ml-auto transition-colors"
                  >
                    {copiedId === item.id ? (
                      <span className="text-green-500 font-bold">Copied!</span>
                    ) : (
                      <span>Share</span>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT: Global Footprint Map */}
          <div className="lg:w-1/2 relative min-h-[400px] bg-black border border-neutral-800 rounded-2xl overflow-hidden flex items-center justify-center">
             <div className="absolute inset-0 opacity-20" 
                  style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
             />
             
             <div className="relative z-10 w-full h-full p-8 flex flex-col items-center justify-center text-center">
                {/* Radar Animation */}
                <div className="w-64 h-64 rounded-full border border-mbi-red/30 flex items-center justify-center animate-[spin_10s_linear_infinite]">
                  <div className="w-48 h-48 rounded-full border border-mbi-red/50 border-dashed" />
                </div>
                
                {/* Central Stat: Uses Live Data if available, else static footprint */}
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="space-y-2 bg-black/80 backdrop-blur-sm p-6 rounded-xl border border-neutral-800">
                      <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">
                        {liveStats ? 'Network Velocity' : 'Active Footprint'}
                      </p>
                      <p className="text-4xl font-black text-white">
                        {liveStats ? liveStats.totalViews : '150+'}
                      </p>
                      <p className="text-sm text-gray-400">
                        {liveStats ? 'Monthly Views' : 'Countries Reached'}
                      </p>
                   </div>
                </div>

                <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-mbi-red rounded-full animate-ping" />
                <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-mbi-gold rounded-full animate-ping delay-75" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
