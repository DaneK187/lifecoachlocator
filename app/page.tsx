import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center">
      <h1 className="text-4xl font-bold mb-6">
        Find Your Perfect Coach
      </h1>
      <p className="mb-8 text-lg max-w-xl">
        Take a 60-second quiz and get matched with expert coaches across mindset, business, relationships, and more.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/quiz"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Take the Quiz
        </Link>
        <Link
          href="/available-now"
          className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition"
        >
          See Who’s Available Now
        </Link>
      </div>
    </div>
  );
}
