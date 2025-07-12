'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation';

export default function Nav() {
  const router = useRouter();

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-400 shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-extrabold text-white tracking-wide drop-shadow">🏠 LifeCoachLocator</Link>
        <nav className="flex gap-4 text-base font-semibold">
          <Link href="/" className="hover:bg-white hover:text-blue-700 px-3 py-1 rounded transition">Home</Link>
          <Link href="/quiz" className="hover:bg-white hover:text-blue-700 px-3 py-1 rounded transition">Quiz</Link>
          <Link href="/coaches" className="hover:bg-white hover:text-blue-700 px-3 py-1 rounded transition">Search</Link>
          <Link href="/available-now" className="hover:bg-white hover:text-blue-700 px-3 py-1 rounded transition">Available Now</Link>
          <Link href="/polls" className="hover:bg-white hover:text-blue-700 px-3 py-1 rounded transition">Polls & Data</Link>
          <button
            type="button"
            className="hover:bg-white hover:text-blue-700 px-3 py-1 rounded transition text-black font-semibold bg-transparent focus:bg-white focus:text-blue-700"
            onClick={() => router.replace(`/locations?reset=${Date.now()}`)}
          >
            Locations
          </button>
        </nav>
      </div>
    </header>
  )
}

