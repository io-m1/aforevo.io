import Image from 'next/image';

// REAL PROPRIETARY DATA SEEDING
const FEATURED_CHANNELS = [
  { 
    id: 1, 
    title: "Aforevo Stage", 
    subtitle: "2.6M+ Subscribers • Premium Nollywood", 
    brand: "Flagship", 
    img: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=800", // Cinematic placeholder until dynamic fetch
    link: "https://www.youtube.com/@AforevoStage" // CONFIRMED LINK
  },
  { 
    id: 2, 
    title: "Yorubahood", 
    subtitle: "1.3M+ Subscribers • Yoruba Culture", 
    brand: "Partner", 
    img: "https://images.unsplash.com/photo-1517604931442-7105376f7e04?q=80&w=800",
    link: "https://www.youtube.com/@yorubahoodTV" // CONFIRMED LINK
  },
  { 
    id: 3, 
    title: "Aforevo Cinema", 
    subtitle: "24K+ Subscribers • New Releases", 
    brand: "Trending", 
    img: "https://img.youtube.com/vi/baoyWPnUpYU/maxresdefault.jpg", // Real Video Thumb
    link: "https://www.youtube.com/@aforevocinema" // CONFIRMED LINK
  },
  { 
    id: 4, 
    title: "Vybz 94.5 FM", 
    subtitle: "Lagos' #1 Afrobeatz Station", 
    brand: "Radio", 
    img: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=800",
    link: "https://www.youtube.com/@vybz945fmlagos" // CONFIRMED LINK
  },
];

export default function FeaturedVideos() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-10">
           <div>
             <h2 className="text-3xl md:text-5xl font-black text-white mb-2 tracking-tight">
               TRENDING ON NETWORK
             </h2>
             <p className="text-gray-400 text-sm md:text-base">
               Top performing channels and content live now.
             </p>
           </div>
           <a 
             href="https://www.youtube.com/@AforevoStage" 
             target="_blank"
             className="hidden md:block text-mbi-red font-bold uppercase text-xs tracking-widest hover:text-white transition-colors"
           >
             View All Channels
           </a>
        </div>
        
        {/* Netflix-Style Horizontal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_CHANNELS.map((item) => (
            <a 
              key={item.id} 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group cursor-pointer relative block"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10 mb-3 bg-neutral-900 shadow-xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:border-white/30">
                <Image 
                  src={item.img} 
                  alt={item.title} 
                  fill 
                  className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                />
                
                {/* Play Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors flex items-center justify-center">
                   <div className="w-12 h-12 rounded-full bg-mbi-red/90 flex items-center justify-center backdrop-blur-md shadow-lg transform scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                      <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                   </div>
                </div>

                {/* Badge */}
                <div className="absolute top-2 left-2 bg-black/80 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-bold text-white border border-white/10 uppercase tracking-wider">
                  {item.brand}
                </div>
              </div>
              
              {/* Meta Info */}
              <h3 className="text-lg font-bold text-white group-hover:text-mbi-red transition-colors truncate">
                {item.title}
              </h3>
              <p className="text-xs text-gray-500 font-mono mt-0.5">{item.subtitle}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
