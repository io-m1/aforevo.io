import Link from 'next/link';
import layoutData from '@/content/layout.json';

export default function Navbar() {
  const { navbar } = layoutData;

  return (
    <header className="fixed w-full top-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-white tracking-tighter">
          MBI<span className="text-red-600">.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navbar.links.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={navbar.cta.href}
            className="px-5 py-2 text-sm font-semibold text-black bg-white rounded-full hover:bg-gray-200 transition-colors"
          >
            {navbar.cta.label}
          </Link>
        </nav>

        {/* Mobile Menu Trigger (Placeholder for client-side interactivity) */}
        <button className="md:hidden text-white p-2">
          <span className="sr-only">Open menu</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
