import Link from 'next/link';
import layoutData from '@/content/layout.json';

export default function Footer() {
  const { footer } = layoutData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 border-t border-neutral-800 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-3xl font-black text-white tracking-tighter mb-6 block">
              MBI<span className="text-mbi-red">.</span>
            </Link>
            <p className="text-gray-400 max-w-sm mb-8">
              {footer.description}
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              {footer.socials.map((social) => (
                <a 
                  key={social.platform} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-black border border-neutral-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-mbi-red transition-all"
                  aria-label={social.platform}
                >
                  <span className="sr-only">{social.platform}</span>
                  {/* Generic Social Icon (We can refine specific SVGs later) */}
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-gray-400 hover:text-mbi-red transition-colors">About Us</Link></li>
              <li><Link href="/brands" className="text-gray-400 hover:text-mbi-red transition-colors">Subsidiaries</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-mbi-red transition-colors">Services</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-mbi-red transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-4">
              {footer.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-mbi-red transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>&copy; {currentYear} Murphy Ben International. All rights reserved.</p>
          <p>Lagos • Nairobi • London</p>
        </div>
      </div>
    </footer>
  );
}
