import Image from 'next/image';

interface MediaItem {
  id: string;
  title: string;
  image: string;
  genre?: string;
  artist?: string;
  year: string;
}

interface MediaRowProps {
  heading: string;
  items: MediaItem[];
  type: 'movie' | 'music';
}

export default function MediaRow({ heading, items, type }: MediaRowProps) {
  const isMovie = type === 'movie';
  
  return (
    <section className="py-10 bg-black border-t border-white/5">
      <div className="container mx-auto px-4 mb-6 flex items-end justify-between">
        <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
          {heading}
        </h3>
        <span className="text-sm font-bold text-mbi-red uppercase tracking-widest cursor-pointer hover:text-white transition-colors">
          View All
        </span>
      </div>
      
      {/* Scroll Container */}
      <div className="flex overflow-x-auto gap-4 px-4 pb-8 scrollbar-hide snap-x">
        {items.map((item) => (
          <div 
            key={item.id} 
            className={`relative flex-shrink-0 group cursor-pointer snap-start transition-all duration-300 ${
              isMovie ? 'w-[200px] h-[300px]' : 'w-[200px] h-[200px]'
            }`}
          >
            {/* Poster Image */}
            <div className="relative w-full h-full rounded-md overflow-hidden border border-white/10 group-hover:border-mbi-red transition-colors">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-mbi-red flex items-center justify-center shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-75">
                  <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Metadata */}
            <div className="mt-3">
              <h4 className="text-white font-bold text-sm truncate">{item.title}</h4>
              <p className="text-gray-500 text-xs mt-1 flex items-center gap-2">
                <span>{item.year}</span>
                <span className="w-1 h-1 rounded-full bg-gray-600" />
                <span>{isMovie ? item.genre : item.artist}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
