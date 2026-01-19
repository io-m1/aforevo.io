import { Metadata } from 'next';
import { getAboutPageContent } from '@/lib/content';
import StatsRow from '@/components/sections/StatsRow';

export const metadata: Metadata = {
  title: 'About Us | Murphy Ben International',
  description: 'The story of MBI, Aforevo, and our mission to digitize African entertainment.',
};

export default async function AboutPage() {
  const content = await getAboutPageContent();

  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          {content.hero.heading}
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          {content.hero.subheading}
        </p>
      </section>

      {/* Stats Section */}
      <StatsRow stats={content.stats} />

      {/* Mission Section */}
      <section className="container mx-auto px-4 py-24 flex flex-col md:flex-row gap-16 items-center">
        <div className="md:w-1/2">
           <h2 className="text-3xl font-bold mb-6 text-white border-l-4 border-red-600 pl-4">
             {content.mission.heading}
           </h2>
           <p className="text-lg text-gray-300 leading-relaxed">
             {content.mission.body}
           </p>
        </div>
        <div className="md:w-1/2 h-64 md:h-80 w-full bg-gray-900 rounded-xl border border-gray-800 flex items-center justify-center">
           {/* Placeholder for Mission Image */}
           <span className="text-gray-600 font-bold">Mission Visual</span>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-gray-900/30 py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-10 text-center">{content.story.heading}</h2>
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            {content.story.paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
