import { Suspense } from "react";
import countries from '../data/countries.json';
import cities from '../data/cities.json';
import Link from 'next/link';

function LocationsClientInner() {
  "use client";
  const { useState, useEffect } = require('react');
  const { usePathname, useRouter, useSearchParams } = require('next/navigation');

  const [selectedCountry, setSelectedCountry] = useState(null);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    if (pathname === '/locations' || searchParams.get('reset')) {
      setSelectedCountry(null);
    }
    const handleRouteChange = (url) => {
      if (url === '/locations') {
        setSelectedCountry(null);
      }
    };
    router.events?.on('routeChangeStart', handleRouteChange);
    return () => {
      router.events?.off('routeChangeStart', handleRouteChange);
    };
  }, [pathname, searchParams, router]);

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };

  const handleBack = () => {
    setSelectedCountry(null);
  };

  let content;
  if (!selectedCountry) {
    content = (
      <div>
        <h1 className="text-3xl font-extrabold text-center text-blue-800 mb-8 mt-6">Browse by Country</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {countries.map((country, idx) => (
            <Link
              key={country.code + '-' + idx}
              href={`/locations/${country.code.toLowerCase()}`}
              className="bg-white border border-blue-200 rounded-lg px-4 py-6 text-lg font-semibold text-blue-700 shadow hover:bg-blue-50 transition text-center block"
            >
              {country.name}
            </Link>
          ))}
        </div>
      </div>
    );
  } else {
    const filteredCities = cities.filter(
      (city) => city.country_code === selectedCountry.code && city.population >= 40000
    );
    content = (
      <div>
        <button
          onClick={handleBack}
          className="mb-6 text-blue-600 hover:underline flex items-center gap-1"
        >
          ← Back to countries
        </button>
        <h2 className="text-2xl font-bold text-blue-800 mb-4">
          Cities in {selectedCountry.name} (40,000+ population)
        </h2>
        {filteredCities.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredCities.map((city, idx) => (
              <div
                key={city.city + '-' + idx}
                className="bg-white border border-blue-100 rounded-lg px-4 py-4 text-blue-700 font-medium shadow"
              >
                {city.city} <span className="text-xs text-gray-500">({city.population.toLocaleString()})</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-gray-500">No cities with 40,000+ population found for this country.</div>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      {content}
    </div>
  );
}

export default function LocationsClient() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LocationsClientInner />
    </Suspense>
  );
}
