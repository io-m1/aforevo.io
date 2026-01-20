import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import GlobalLayout from "@/components/layout/GlobalLayout";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const bebas = Bebas_Neue({ 
  weight: "400", 
  subsets: ["latin"], 
  variable: "--font-bebas" 
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mbi247.com'),
  title: {
    template: '%s | Murphy Ben International',
    default: 'Murphy Ben International | Africa\'s Largest Content Aggregator',
  },
  description: 'The media powerhouse behind Aforevo, Vybz FM, and Revo+.',
  openGraph: { type: 'website', siteName: 'Murphy Ben International' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${bebas.variable} font-sans antialiased bg-black text-white`}>
        <GlobalLayout>
          {children}
        </GlobalLayout>
      </body>
    </html>
  );
}
