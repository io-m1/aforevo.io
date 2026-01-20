'use client';

import { Play } from 'lucide-react';

const TRENDING_VIDEOS = [
  // MOCK DATA - Ideally this comes from YouTube API
  { title: "Lagos Heist: Official Trailer", views: "2.4M", duration: "2:30", img: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=800" },
  { title: "Yorubahood: The Wedding Party", views: "1.8M", duration: "1:45", img: "https://images.unsplash.com/photo-1517604931442-71053e3e2c28?q=80&w=800" },
  { title: "Vybz FM: Burna Boy Interview", views: "800K", duration: "15:00", img: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=800" },
  { title: "Aforevo Music: Top 10 Hits", views: "4.5M", duration: "8:20", img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800" },
  { title: "Behind The Scenes: Nollywood", views: "500K", duration: "5:12", img: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=800" },
  { title: "Comedy Skits Compilation", views: "3.2M", duration: "10:00", img: "https://images.unsplash.com/photo-1527224857830-43a7acc85260?q=80&w=800" },
  { title: "Action Movie: The Cartel", views: "1.2M", duration: "1:55", img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=800" },
  { title: "Documentary: Rise of Afrobeats", views: "900K", duration: "45:00", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800" }
];

export default function FeaturedVideos() {
  return (
    <section className="py-12 bg-black border-y border-white/5 relative z-20">
      <div className="container mx-auto px-4 mb-8 flex justify-between items-end">
        <div>
          <span className="text-mbi-red font-bold uppercase tracking-widest text-xs block mb-2">Trending Now</span>
          <h2 className="text-3xl font-black text-white tracking-tight">TOP PICKS FOR YOU</h2>
        </div>
        <button className="hidden md:flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-white transition-colors uppercase tracking-wider">
          View All Library <Play className="w-3 h-3" />
        </button>
      </div>

      {/* INFINITY RAIL (Horizontal Scroll) */}
      <div className="flex overflow-x-auto pb-8 px-4 gap-4 snap-x snap-mandatory scrollbar-hide -mx-4 md:mx-0">
        {[...TRENDING_VIDEOS, ...TRENDING_VIDEOS].map((video, i) => (
          <div 
            key={i} 
            className="snap-start shrink-0 w-[280px] md:w-[350px] group cursor-pointer relative"
          >
            {/* Thumbnail */}
            <div className="aspect-video bg-neutral-800 rounded-lg overflow-hidden relative mb-3 border border-white/10 group-hover:border-mbi-red transition-colors">
              <img src={video.img} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 bg-mbi-red rounded-full flex items-center justify-center shadow-lg scale-0 group-hover:scale-100 transition-transform">
                  <Play className="w-5 h-5 text-white fill-current" />
                </div>
              </div>

              {/* Duration Badge */}
              <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-0.5 rounded text-[10px] font-bold text-white">
                {video.duration}
              </div>
            </div>

            {/* Meta */}
            <h3 className="text-white font-bold leading-tight mb-1 group-hover:text-mbi-red transition-colors line-clamp-1">
              {video.title}
            </h3>
            <div className="flex items-center gap-2 text-xs text-gray-500 font-mono">
              <span>{video.views} Views</span>
              <span>•</span>
              <span>2 hours ago</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
