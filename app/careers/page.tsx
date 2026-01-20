import { Metadata } from 'next';
import { CAREERS } from '@/content/careers';
import { Briefcase, ArrowRight, MapPin, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Careers | Join the Vanguard',
  description: 'Build the future of African digital media. We are hiring editors, strategists, and engineers.',
};

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-20">
      
      {/* 1. HEADER */}
      <div className="container mx-auto px-4 mb-20">
        <div className="max-w-4xl">
          <div className="flex items-center gap-2 mb-4 text-mbi-red font-bold uppercase tracking-[0.3em] text-xs">
            <Briefcase className="w-4 h-4" />
            Recruitment
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
            JOIN THE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mbi-red to-mbi-gold">
              VANGUARD.
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed border-l-4 border-mbi-red pl-6">
            We are not looking for employees. We are looking for builders, storytellers, and strategists who want to define the next era of African entertainment.
          </p>
        </div>
      </div>

      {/* 2. OPEN ROLES GRID */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-4">
          {CAREERS.map((job) => (
            <div 
              key={job.id}
              className="group p-8 border border-white/10 bg-neutral-900/30 hover:bg-neutral-900 hover:border-mbi-red/50 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-mbi-gold mb-2 block">
                  {job.department}
                </span>
                <h3 className="text-2xl font-black text-white mb-2">{job.title}</h3>
                <p className="text-gray-400 max-w-xl text-sm leading-relaxed mb-4">
                  {job.description}
                </p>
                
                <div className="flex items-center gap-6 text-xs font-bold text-gray-500 uppercase tracking-wider">
                  <span className="flex items-center gap-2">
                    <MapPin className="w-3 h-3" /> {job.location}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-3 h-3" /> {job.type}
                  </span>
                </div>
              </div>

              <button className="px-8 py-3 bg-white text-black font-black uppercase tracking-widest text-xs hover:bg-mbi-red hover:text-white transition-colors flex items-center gap-2 shrink-0">
                Apply Now <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* 3. CULTURE CTA */}
      <div className="container mx-auto px-4 mt-24">
        <div className="p-12 border border-white/10 bg-gradient-to-br from-neutral-900 to-black text-center">
          <h2 className="text-3xl font-black text-white mb-4">DON'T SEE YOUR ROLE?</h2>
          <p className="text-gray-400 mb-8">
            We are always scouting for elite talent. If you believe you belong here, force us to pay attention.
          </p>
          <a href="mailto:careers@mbi247.com" className="inline-block px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
            Email Your Portfolio
          </a>
        </div>
      </div>

    </main>
  );
}
