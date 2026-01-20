import Image from 'next/image';

const FEATURED_VIDEOS = [
  { 
    id: 1, 
    title: "Don't Skip This New TRENDING MOVIE Of ADAKIRIKIRI", 
    views: "Trending Now", 
    brand: "Aforevo Cinema", 
    img: "https://img.youtube.com/vi/baoyWPnUpYU/maxresdefault.jpg", // Uses real YouTube thumbnail
    link: "https://www.youtube.com/watch?v=baoyWPnUpYU"
  },
  { id: 2, title: "Burna Boy - Live at Vybz FM", views: "850K Views", brand: "Vybz FM", img: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=800&auto=format&fit=crop", link: "https://vybzfm.com" },
  { id: 3, title: "Yorubahood: The Wedding Party", views: "2.4M Views", brand: "Yorubahood", img: "https://images.unsplash.com/photo-1517604931442-7105376f7e04?q=80&w=800&auto=format&fit=crop", link: "#" },
  { id: 4, title: "Tech Talk: DRM in Africa", views: "120K Views", brand: "MBI Tech", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop", link: "#" },
];

export default function FeaturedVideos() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-10">
           <div>
             <h2 className="text-3xl md:text-4xl font-black text-white mb-2">TRENDING NOW</h2>
             <p className="text-gray-400">Top performing content across the network.</p>
           </div>
           <button className="text-mbi-red font-bold uppercase text-sm tracking-widest hover:text-white transition-colors">
             View All Media
           </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_VIDEOS.map((video) => (
            <a key={video.id} href={video.link} target="_blank" rel="noopener noreferrer" className="group cursor-pointer">
              {/* Thumbnail Container */}
              <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 mb-4">
                <Image 
                  src={video.img} 
                  alt={video.title} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                   <div className="w-14 h-14 rounded-full bg-mbi-red/90 flex items-center justify-center backdrop-blur-sm shadow-lg transform group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                   </div>
                </div>
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-xs font-bold text-white border border-white/10">
                  {video.brand}
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-white group-hover:text-mbi-red transition-colors line-clamp-2">
                {video.title}
              </h3>
              <p className="text-sm text-gray-500 mt-1">{video.views}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
