import { Metadata } from 'next';
import { getAboutPageContent } from '@/lib/content';

export async function generateMetadata(): Promise<Metadata> {
  const content = await getAboutPageContent();
  return {
    title: content.metadata.title,
    description: content.metadata.description,
  };
}

export default async function AboutPage() {
  const content = await getAboutPageContent();

  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-20">
      {/* Hero */}
      <section className="container mx-auto px-4 mb-20 text-center">
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
          {content.hero.heading}
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          {content.hero.subheading}
        </p>
      </section>

      {/* Narrative */}
      <section className="container mx-auto px-4 mb-24">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-mbi-red mb-8 border-b border-gray-800 pb-4">
            {content.narrative.heading}
          </h2>
          {content.narrative.content.map((paragraph, i) => (
            <p key={i} className="text-lg md:text-xl leading-relaxed text-gray-300">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Values Grid */}
      <section className="bg-neutral-900 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            {content.values.heading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {content.values.items.map((item, i) => (
              <div key={i} className="bg-black border border-neutral-800 p-8 rounded-xl hover:border-mbi-red transition-colors">
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
