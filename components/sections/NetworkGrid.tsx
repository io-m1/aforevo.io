import Image from 'next/image';

const MBI_CHANNELS = [
  { name: "AfricanMovies 247", id: "UCZPJTc9RCl2mJUAiTM8TZ0A", manager: "Rebecca Anawana", category: "Movies" },
  { name: "MANARI TV", id: "UCK6qSzNCRQn0Q7oG2F1yQMw", manager: "Isioma Batiwe", category: "Drama" },
  { name: "MNARODI TV SENEGAL", id: "UCbrGlcjjG-Z6hpPs-n_lE7w", manager: "Oparaugo Chioma", category: "French/Wolof" },
  { name: "BLACK MOVIES TV", id: "UCaoyvHOxmdmqa4Q99dNbmpA", manager: "Peter Joseph", category: "Movies" },
  { name: "NOLLY SCENT TV", id: "UC7mj73fZsuuRhcng_SRrvDg", manager: "Daniel Olise", category: "Nollywood" },
  { name: "AFRICAN PICTURE TV", id: "UCPlzDTuDKHUSE0eb3Th59ow", manager: "Okosa Chibuikem", category: "Entertainment" },
  { name: "YUMMY NOLLYWOOD", id: "UC1119YgSojL_Bx9xGJt2oOg", manager: "Catherine Madufor", category: "Lifestyle" },
  { name: "KODI TV", id: "UC_p_R0DlnrLDlsF4R2ib6tg", manager: "Chikaodiri Umeizudike", category: "Series" },
  { name: "IMAGE AFRICAINE", id: "UCxri7ruhy6vag0YqOFaV7MA", manager: "Esther Ibitoye", category: "French" },
  { name: "FamilyTies Cinema", id: "UCjLl-Mwc0VbgrdJiMnzi9Lg", manager: "Igwebuike Loveth", category: "Family" },
  { name: "African Tales Tv", id: "UCynV8t9QODIMB7ATaT0Blbg", manager: "David Joseph", category: "Folklore" },
  { name: "Home Of Trending Movies", id: "UCM53Fx8EWButmZ7YhmW2GxQ", manager: "Obi Maureen", category: "Trending" },
  { name: "Yoruba Styles", id: "UCDF1tRy_Y0j0vLHOoL9dndw", manager: "Matanmi Oluwabusayo", category: "Culture" },
  { name: "PureNolly Premium TV", id: "UCS3OsUcCA-vkr2HQVpppMfg", manager: "Godwin Otti", category: "Premium" },
  { name: "FILMS NOLLYWOOD5ETOILE", id: "UC3I5onUB4Hh9NumHGkBdNHg", manager: "Michael Chizoba", category: "French" },
  { name: "Movie Lane", id: "UC9tRJPypwfM63SZ5J6EWtWA", manager: "Esther Ochiaka", category: "Movies" }
];

export default function NetworkGrid() {
  return (
    <section className="py-20 border-t border-white/10 bg-neutral-900">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
           <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
             THE MBI NETWORK GIANTS
           </h2>
           <p className="text-gray-400 max-w-2xl mx-auto">
             A powerhouse of managed channels driving millions of daily views across the continent.
             <span className="block text-mbi-red font-bold mt-2 uppercase tracking-widest text-xs">
               Grade 4 (High Flyers) • Verified Management
             </span>
           </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {MBI_CHANNELS.map((channel, i) => (
            <a 
              key={channel.id}
              href={`https://www.youtube.com/channel/${channel.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-black border border-white/5 rounded-lg p-4 hover:border-mbi-red transition-all hover:bg-neutral-800 flex flex-col justify-between h-32"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] text-gray-500 font-mono uppercase">{channel.category}</span>
                </div>
                <h3 className="text-sm font-bold text-white group-hover:text-mbi-red line-clamp-2 leading-tight">
                  {channel.name}
                </h3>
              </div>
              
              <div className="flex items-center gap-2 mt-3">
                 <div className="w-6 h-6 rounded-full bg-neutral-700 flex items-center justify-center text-[10px] text-white font-bold">
                    {channel.name.charAt(0)}
                 </div>
                 <span className="text-[10px] text-gray-500 truncate">
                   Managed by MBI
                 </span>
              </div>
            </a>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://www.youtube.com/results?search_query=Murphy+Ben+International" 
            target="_blank"
            className="inline-flex items-center gap-2 text-white border-b border-mbi-red pb-1 hover:text-mbi-red transition-colors text-sm font-bold uppercase tracking-widest"
          >
            View Full Portfolio
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
