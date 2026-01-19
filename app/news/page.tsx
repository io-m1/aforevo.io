
import Link from 'next/link';

export default function ConstructionPage() {
  return (
    <main className='min-h-screen bg-black flex items-center justify-center text-center px-4'>
      <div className='space-y-6'>
        <div className='w-16 h-1 bg-mbi-red mx-auto rounded-full' />
        <h1 className='text-4xl font-bold text-white'>Coming Soon</h1>
        <p className='text-gray-400 max-w-md mx-auto'>
          We are currently expanding this section of our digital ecosystem. Check back shortly.
        </p>
        <Link href='/' className='text-mbi-gold hover:text-white transition-colors underline underline-offset-4'>
          Back to Home
        </Link>
      </div>
    </main>
  );
}

