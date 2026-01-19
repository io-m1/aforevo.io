'use client';

import { useState } from 'react';

interface PulseItem {
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
}

export default function PulseNetwork({ data }: PulseNetworkProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleShare = (item: PulseItem) => {
    // Simulate sharing/copying logic
    const text = `${item.category}: ${item.message} - via MBI Network`;
    navigator.clipboard.writeText(text);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section className="bg-neutral-900 border-t border-neutral-800 py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
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
          
          <div className="flex gap-4 text-sm font-mono text-gray-500">
             <span>SERVER: LAG-01</span>
             <span>•</span>
             <span>UPTIME: 99.99%</span>
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
                {/* Timeline Dot */}
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
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    {item.location}
                  </span>
                  
                  {/* Share Action */}
                  <button 
                    onClick={() => handleShare(item)}
                    className="text-xs text-gray-500 hover:text-white flex items-center gap-1 ml-auto transition-colors"
                  >
                    {copiedId === item.id ? (
                      <span className="text-green-500 font-bold">Copied!</span>
                    ) : (
                      <>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
                        Share
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT: Global Footprint (Visual Abstraction) */}
          <div className="lg:w-1/2 relative min-h-[400px] bg-black border border-neutral-800 rounded-2xl overflow-hidden flex items-center justify-center">
             {/* Background Grid */}
             <div className="absolute inset-0 opacity-20" 
                  style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
             />
             
             {/* Map Abstraction */}
             <div className="relative z-10 w-full h-full p-8 flex flex-col items-center justify-center text-center">
                <div className="w-64 h-64 rounded-full border border-mbi-red/30 flex items-center justify-center animate-[spin_10s_linear_infinite]">
                  <div className="w-48 h-48 rounded-full border border-mbi-red/50 border-dashed" />
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="space-y-2 bg-black/80 backdrop-blur-sm p-6 rounded-xl border border-neutral-800">
                      <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">Active Footprint</p>
                      <p className="text-4xl font-black text-white">150+</p>
                      <p className="text-sm text-gray-400">Countries Reached</p>
                   </div>
                </div>

                {/* Pulsing Nodes */}
                <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-mbi-red rounded-full animate-ping" />
                <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-mbi-gold rounded-full animate-ping delay-75" />
                <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-blue-500 rounded-full animate-ping delay-150" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
