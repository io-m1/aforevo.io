import { Metadata } from 'next';
import { getServicesPageContent } from '@/lib/content';
import Link from 'next/link';

export async function generateMetadata(): Promise<Metadata> {
  const content = await getServicesPageContent();
  return {
    title: content.metadata.title,
    description: content.metadata.description,
  };
}

export default async function ServicesPage() {
  const content = await getServicesPageContent();

  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-20">
      <section className="container mx-auto px-4 mb-20 text-center">
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
          {content.hero.heading}
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          {content.hero.subheading}
        </p>
      </section>

      <div className="container mx-auto px-4 space-y-24">
        {content.categories.map((category, idx) => (
          <section key={idx}>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 border-b border-gray-800 pb-4">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">{category.title}</h2>
                <p className="text-mbi-gold font-medium">{category.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {category.items.map((item) => (
                <div key={item.id} className="bg-neutral-900/50 p-8 rounded-xl border border-neutral-800 hover:bg-neutral-900 transition-all">
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {item.description}
                  </p>
                  
                  {item.details && (
                    <ul className="space-y-2 mb-8">
                      {item.details.map((detail, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-500">
                          <span className="w-1.5 h-1.5 bg-mbi-red rounded-full mr-3" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  <Link 
                    href={item.link}
                    className="inline-flex items-center text-white font-bold hover:text-mbi-red transition-colors"
                  >
                    Learn More →
                  </Link>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
