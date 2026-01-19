import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar"; 
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // Base URL is required for OpenGraph images to work
  metadataBase: new URL('https://www.mbi247.com'), 
  title: {
    default: "Murphy Ben International | Global African Entertainment",
    template: "%s | Murphy Ben International"
  },
  description: "Africa's Leading Content Aggregator & Digital Distributor. Powering Nollywood and Afrobeatz globally.",
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    siteName: 'Murphy Ben International',
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
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
