import { Metadata } from 'next';
import { getContactPageContent } from '@/lib/content';
import ContactForm from '@/components/sections/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | Murphy Ben International',
  description: 'Get in touch with the MBI team in Lagos.',
};

export default async function ContactPage() {
  const content = await getContactPageContent();

  return (
    <main className="min-h-screen bg-black pt-24 pb-20">
      <div className="container mx-auto px-4 text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {content.heading}
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          {content.subheading}
        </p>
      </div>

      <ContactForm content={content} />
    </main>
  );
}
