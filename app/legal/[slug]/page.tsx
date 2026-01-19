import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return [{ slug: 'privacy' }, { slug: 'terms' }];
}

export default function LegalPage({ params }: { params: { slug: string } }) {
  const title = params.slug === 'privacy' ? 'Privacy Policy' : 'Terms of Service';

  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold mb-8">{title}</h1>
        <div className="prose prose-invert prose-lg">
          <p className="text-gray-400">
            Last Updated: January 2026
          </p>
          <p>
            This is a placeholder for the {title}. For the MVP launch, please contact legal@mbi247.com for full documentation.
          </p>
          <hr className="border-neutral-800 my-8"/>
          <p className="text-sm text-gray-500">
            Murphy Ben International<br/>
            Lagos, Nigeria
          </p>
        </div>
      </div>
    </main>
  );
}
