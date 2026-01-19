import Link from 'next/link';
import layoutData from '@/content/layout.json';

export default function Footer() {
  const { footer } = layoutData;

  return (
    <footer className="bg-mbi-black border-t border-white/10 pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Brand Column (Span 4) */}
          <div className="lg:col-span-4 space-y-8">
            <Link href="/" className="text-4xl font-black text-white tracking-tighter block">
              MBI<span className="text-mbi-red">.</span>
            </Link>
            <p className="text-gray-400 text-lg leading-relaxed max-w-sm border-l-2 border-mbi-red pl-4">
              {footer.brandDescription}
            </p>
            
            {/* Socials */}
            <div className="flex gap-4">
              {footer.socials.map((social) => (
                <a 
                  key={social.platform} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-mbi-red flex items-center justify-center text-white transition-all duration-300"
                  aria-label={social.platform}
                >
                  {/* Simple text fallback for icons until we add SVG library */}
                  <span className="text-xs font-bold">{social.platform[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Spacer (Span 1) */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Links Columns (Span 7) */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            {footer.columns.map((col) => (
              <div key={col.heading}>
                <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-6 text-mbi-gold">
                  {col.heading}
                </h3>
                <ul className="space-y-4">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link 
                        href={link.href} 
                        className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>{footer.copyright}</p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span>Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
