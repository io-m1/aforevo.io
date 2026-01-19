import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mbi247.com"),
  title: {
    default: "Murphy Ben International | Africa's Largest Content Aggregator",
    template: "%s | MBI247",
  },
  description: "Africa's leading media powerhouse: Nollywood streaming, Afrobeatz radio, dubbing services, production, distribution, and talent management.",
  keywords: ["Nollywood streaming", "Afrobeatz radio", "African content aggregator", "African dubbing services", "Murphy Ben International"],
  openGraph: {
    type: "website",
    siteName: "Murphy Ben International",
    title: "Murphy Ben International | Africa's Largest Content Aggregator",
    description: "Promoting African storytelling through innovative media production and distribution.",
    images: "/og-image.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Murphy Ben International",
    description: "Africa's largest content aggregator and media powerhouse.",
    images: "/twitter-image.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${bebas.variable} dark`}>
      <body className="antialiased bg-[#0A0A0A] text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
