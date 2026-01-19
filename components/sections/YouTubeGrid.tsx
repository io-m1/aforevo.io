interface Channel {
  name: string;
  handle: string;
  subs: string;
  views: string;
}

interface YouTubeGridProps {
  heading: string;
  channels: Channel[];
}

export default function YouTubeGrid({ heading, channels }: YouTubeGridProps) {
  return (
    <section className="py-20 bg-black border-t border-neutral-900">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter">
            {heading}
          </h2>
          <div className="hidden md:flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            <span className="text-sm font-bold text-red-600 uppercase tracking-widest">
              Live Network Data
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {channels.map((channel, idx) => (
            <a 
              key={idx}
              href={`https://youtube.com/${channel.handle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-neutral-900 border border-neutral-800 p-6 rounded-xl hover:bg-neutral-800 transition-colors"
            >
              {/* Channel Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white font-bold text-xl">
                  {channel.name[0]}
                </div>
                <svg className="w-6 h-6 text-gray-500 group-hover:text-red-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </div>

              {/* Metrics */}
              <h3 className="text-xl font-bold text-white mb-1">{channel.name}</h3>
              <p className="text-sm text-gray-400 mb-6">{channel.handle}</p>

              <div className="grid grid-cols-2 gap-4 border-t border-neutral-800 pt-4">
                <div>
                  <span className="block text-2xl font-bold text-white">{channel.subs}</span>
                  <span className="text-xs font-bold text-gray-500 uppercase">Subscribers</span>
                </div>
                <div>
                  <span className="block text-2xl font-bold text-white">{channel.views}</span>
                  <span className="text-xs font-bold text-gray-500 uppercase">Views</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
