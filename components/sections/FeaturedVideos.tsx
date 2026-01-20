import { Play } from 'lucide-react';

const FEATURED = [
  {
    title: "ADAKIRIKIRI",
    category: "BLOCKBUSTER PREMIERE",
    views: "1.2M Views",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=800"
  },
  {
    title: "MARK ANGEL: THE INTERVIEW",
    category: "EXCLUSIVE",
    views: "850K Views",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800"
  },
  {
    title: "LAGOS VIBES 2026",
    category: "DOCUMENTARY",
    views: "450K Views",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=800"
  }
];

export default function FeaturedVideos() {
  return (
    <section className="py-24 bg-neutral-950">
      <div className="container mx-auto px-4">
        {/* HEADER */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-mbi-red font-bold uppercase tracking-widest text-xs">Trending Now</span>
            <h2 className="text-4xl font-black text-white mt-2 uppercase">Top Picks For You</h2>
          </div>
          <button className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">
            View Full Library <ArrowRightIcon />
          </button>
        </div>

        {/* GRID (No Duplicates) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURED.map((video, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative aspect-video bg-neutral-900 mb-4 overflow-hidden border border-white/5 group-hover:border-mbi-gold/50 transition-all">
                {/* Image Placeholder */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${video.image})` }}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-mbi-red rounded-full flex items-center justify-center shadow-lg transform scale-50 group-hover:scale-100 transition-transform">
                    <Play className="w-6 h-6 text-white fill-current" />
                  </div>
                </div>
                
                {/* Badge */}
                <div className="absolute top-4 left-4 px-2 py-1 bg-black/80 text-[10px] font-bold uppercase tracking-widest text-white">
                  {video.category}
                </div>
              </div>
              
              <h3 className="text-xl font-black text-white mb-1 group-hover:text-mbi-gold transition-colors">{video.title}</h3>
              <p className="text-sm font-mono text-gray-500">{video.views} • 2 Days Ago</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArrowRightIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
  )
}
