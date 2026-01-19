import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar"; 
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";

const manrope = Manrope({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mbi247.com'), 
  title: {
    default: "Murphy Ben International | Africa's Digital Media Powerhouse",
    template: "%s | Murphy Ben International"
  },
  description: "The engine behind Aforevo, Vybz FM, and Africa's largest YouTube network. We distribute, monetize, and protect content for the global diaspora.",
  keywords: ["Nollywood", "African Music", "Digital Distribution", "Aforevo", "YouTube MCN", "Vybz FM"],
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    siteName: 'Murphy Ben International',
    images: [
      {
        url: '/images/og-default.jpg', // We will map this to a real asset
        width: 1200,
        height: 630,
        alt: 'MBI Digital Ecosystem',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@mbi247',
    creator: '@mbi247',
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <JsonLd />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
