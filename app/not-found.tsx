import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center text-center px-4">
      <div className="space-y-6">
        <h1 className="text-9xl font-black text-neutral-900">404</h1>
        <h2 className="text-3xl font-bold text-white">Page Not Found</h2>
        <p className="text-gray-400 max-w-md mx-auto">
          The page you are looking for might have been moved or is currently under construction in our new digital architecture.
        </p>
        <div className="pt-4">
          <Link 
            href="/"
            className="inline-flex items-center justify-center px-8 py-3 bg-mbi-red hover:bg-red-700 text-white font-bold rounded transition-colors"
          >
            Return Home
          </Link>
        </div>
      </div>
    </main>
  );
}
