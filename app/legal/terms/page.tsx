import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Murphy Ben International',
  description: 'Legal terms and conditions for using MBI services and platforms.',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-black mb-8 text-white">Terms & Conditions</h1>
        <p className="text-gray-400 mb-12">Last Updated: January 2026</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
            <p>Welcome to Murphy Ben International ("MBI"). By accessing our websites, services, or visiting our physical locations, you agree to be bound by these Terms and Conditions.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Intellectual Property</h2>
            <p>All content distributed by MBI, including but not limited to movies, music, broadcasts on Vybz 94.5 FM, and Revo+ content, is the exclusive property of MBI or its licensors. Unauthorized reproduction or distribution is strictly prohibited.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. User Conduct</h2>
            <p>Users of our digital platforms (Aforevo YouTube, Social Media pages) are expected to maintain respectful behavior. MBI reserves the right to block or ban users violating community guidelines.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Services</h2>
            <p>Services provided by MBI Production, MBI Distribution, and Aforevo MCN are subject to specific service agreements signed by the respective parties.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Contact</h2>
            <p>For legal inquiries, please contact us at legal@mbi247.com or visit our headquarters in Lagos, Nigeria.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
