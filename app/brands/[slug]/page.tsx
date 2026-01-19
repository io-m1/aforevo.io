import { notFound } from 'next/navigation';
import { getBrandsPageContent } from '@/lib/content';
import Link from 'next/link';
import { Metadata } from 'next';

// Generate static params for all known brands to enable SSG
export async function generateStaticParams() {
  const content = await getBrandsPageContent();
  return content.brands.map((brand) => ({
    slug: brand.id,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const content = await getBrandsPageContent();
  const brand = content.brands.find(b => b.id === params.slug);
  
  if (!brand) return { title: 'Brand Not Found' };
  
  return {
    title: `${brand.name} | MBI Brand Portfolio`,
    description: brand.description,
  };
}

export default async function BrandDetailPage({ params }: { params: { slug: string } }) {
  const content = await getBrandsPageContent();
  const brand = content.brands.find(b => b.id === params.slug);

  if (!brand) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Back Link */}
        <Link href="/brands" className="inline-flex items-center text-gray-400 hover:text-mbi-red mb-10 transition-colors">
          ← Back to Brands
        </Link>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Brand Visual */}
          <div className="lg:w-1/2">
            <div className="aspect-square bg-neutral-900 border border-neutral-800 rounded-2xl flex items-center justify-center relative overflow-hidden">
               <span className="text-4xl font-black text-neutral-800">{brand.name} Logo</span>
               {/* Phase 4: Replace with <Image src={brand.image} ... /> */}
            </div>
          </div>

          {/* Brand Info */}
          <div className="lg:w-1/2 space-y-8">
            <div>
               <h1 className="text-5xl md:text-7xl font-black mb-4">{brand.name}</h1>
               <p className="text-xl text-mbi-red font-medium tracking-wide">{brand.tagline}</p>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed border-l-2 border-neutral-800 pl-6">
              {brand.description}
            </p>

            <div>
              <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-4">Key Features</h3>
              <ul className="grid grid-cols-1 gap-3">
                {brand.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-mbi-red mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8">
              <Link 
                href={brand.ctaLink}
                className="inline-block w-full sm:w-auto text-center px-8 py-4 bg-white text-black font-bold hover:bg-gray-200 transition-colors rounded"
              >
                {brand.ctaText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
