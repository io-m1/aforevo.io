import Link from 'next/link';
import Logo from '@/components/ui/Logo';
import { Twitter, Instagram, Linkedin, Youtube, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 border-t border-white/10 pt-20 pb-10 text-sm">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          
          {/* COLUMN 1: BRAND */}
          <div className="space-y-6">
            <Logo className="text-2xl" />
            <p className="text-gray-500 leading-relaxed max-w-xs">
              Africa&apos;s leading digital media and entertainment conglomerate. 
              Defining the narrative since 2009.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={<Youtube className="w-5 h-5" />} href="https://youtube.com/@Aforevo" />
              <SocialIcon icon={<Linkedin className="w-5 h-5" />} href="https://linkedin.com/company/murphy-ben-international" />
              <SocialIcon icon={<Instagram className="w-5 h-5" />} href="#" />
              <SocialIcon icon={<Twitter className="w-5 h-5" />} href="#" />
            </div>
          </div>

          {/* COLUMN 2: NETWORK */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-widest mb-6">The Network</h4>
            <ul className="space-y-4 text-gray-500">
              <FooterLink href="/brands">Aforevo YouTube</FooterLink>
              <FooterLink href="/brands">Aforevo Dubbing</FooterLink>
              <FooterLink href="/brands">Vybz 94.5 FM</FooterLink>
              <FooterLink href="/brands">MBI Music</FooterLink>
              <FooterLink href="/services">Global Syndication</FooterLink>
            </ul>
          </div>

          {/* COLUMN 3: CORPORATE */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-widest mb-6">Corporate</h4>
            <ul className="space-y-4 text-gray-500">
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/careers">Careers (Hiring)</FooterLink>
              <FooterLink href="/services">Our Services</FooterLink>
              <FooterLink href="mailto:partners@mbi247.com">Investor Relations</FooterLink>
              <FooterLink href="mailto:press@mbi247.com">Press & Media</FooterLink>
            </ul>
          </div>

          {/* COLUMN 4: LOCATIONS */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-widest mb-6">Global HQ</h4>
            <ul className="space-y-6 text-gray-500">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-mbi-red shrink-0" />
                <span>
                  <strong className="block text-white mb-1">Lagos (Global HQ)</strong>
                  No. 22 Osolo Way, Ajao Estate,<br />Lagos, Nigeria
                </span>
              </li>
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-gray-600 shrink-0" />
                <span>
                  <strong className="block text-white mb-1">London</strong>
                  Operations & Licensing Office<br />United Kingdom
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 text-xs">
          <p>&copy; {currentYear} Murphy Ben International. All Rights Reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

function SocialIcon({ icon, href }: { icon: React.ReactNode, href: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-mbi-red hover:text-white transition-all"
    >
      {icon}
    </a>
  );
}

function FooterLink({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="hover:text-mbi-gold transition-colors flex items-center gap-2">
        {children}
      </Link>
    </li>
  );
}
