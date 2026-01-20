import { Play } from 'lucide-react';

const FEATURED = [
  {
    title: "STILL YOURS",
    category: "PREMIERE",
    views: "Trending Now",
    image: "https://img.youtube.com/vi/AeA6JyJmD9Y/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=AeA6JyJmD9Y"
  },
  {
    title: "TREASURE BOX (EP 468)",
    category: "MARK ANGEL COMEDY",
    views: "1.5M+ Views",
    image: "https://img.youtube.com/vi/wEU3KYkpVMM/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=wEU3KYkpVMM"
  },
  {
    title: "CE FILM D'AMOUR (FRANÇAIS)",
    category: "AFOREVO DUBBING",
    views: "Global Hit",
    image: "https://img.youtube.com/vi/vxlTM0r8swk/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=vxlTM0r8swk"
  }
];

export default function FeaturedVideos() {
  return (
    <section className="py-24 bg-neutral-950 border-t border-white/5">
      <div className="container mx-auto px-4">
        {/* HEADER */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-mbi-red font-bold uppercase tracking-widest text-xs">Trending Now</span>
            <h2 className="text-4xl font-black text-white mt-2 uppercase">Top Picks For You</h2>
          </div>
          <a 
            href="https://www.youtube.com/@AforevoStage" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors"
          >
            View Full Library <ArrowRightIcon />
          </a>
        </div>

        {/* GRID (Real Data) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURED.map((video, i) => (
            <a 
              key={i} 
              href={video.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group cursor-pointer block"
            >
              <div className="relative aspect-video bg-neutral-900 mb-4 overflow-hidden border border-white/5 group-hover:border-mbi-gold/50 transition-all">
                {/* Image Placeholder */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${video.image})` }}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-all" />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-mbi-red/90 rounded-full flex items-center justify-center shadow-lg transform scale-50 group-hover:scale-100 transition-transform">
                    <Play className="w-6 h-6 text-white fill-current" />
                  </div>
                </div>
                
                {/* Badge */}
                <div className="absolute top-4 left-4 px-2 py-1 bg-black/80 text-[10px] font-bold uppercase tracking-widest text-white border-l-2 border-mbi-red">
                  {video.category}
                </div>
              </div>
              
              <h3 className="text-xl font-black text-white mb-1 group-hover:text-mbi-gold transition-colors line-clamp-1">{video.title}</h3>
              <div className="flex items-center gap-2 text-sm font-mono text-gray-500">
                <span className="w-2 h-2 rounded-full bg-mbi-red animate-pulse" />
                {video.views}
              </div>
            </a>
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
