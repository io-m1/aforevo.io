import Link from 'next/link';
import layoutData from '@/content/layout.json';

export default function Footer() {
  const { footer } = layoutData;

  return (
    <footer className="bg-black border-t border-gray-900 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="text-2xl font-bold text-white tracking-tighter block mb-6">
              MBI<span className="text-red-600">.</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm leading-relaxed">
              {footer.brandDescription}
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              {footer.address.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
              <p className="pt-2 text-white">{footer.contact.phone}</p>
              <p className="text-white">{footer.contact.email}</p>
            </div>
          </div>

          {/* Links Columns */}
          {footer.columns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-white font-semibold mb-6">{col.heading}</h3>
              <ul className="space-y-4">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href} 
                      className="text-gray-400 hover:text-red-500 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">{footer.copyright}</p>
          <div className="flex gap-6">
            {footer.socials.map((social) => (
              <a 
                key={social.platform} 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-white transition-colors text-sm"
              >
                {social.platform}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
