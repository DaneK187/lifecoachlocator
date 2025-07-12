'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import coaches from '../../data/coaches.json';

export default function CoachSearchPage() {
  useEffect(() => {
    // Debug: log the imported coaches array
    console.log('Imported coaches:', coaches);
  }, []);

  const allSpecialties = Array.from(
    new Set(coaches.flatMap(c => c.specialties))
  );
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState('');

  const filteredCoaches = coaches.filter(c => {
    const matchesSpecialty = selected ? c.specialties.includes(selected) : true;
    const matchesSearch =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.bio.toLowerCase().includes(search.toLowerCase());
    return matchesSpecialty && matchesSearch;
  });

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="bg-blue-50 rounded-xl shadow p-8 mb-10 flex flex-col items-center w-full max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-blue-700 mb-4">
          Tell us what's going on—we'll find your perfect coach right now.
        </h1>
        <p className="text-lg sm:text-xl text-center text-blue-900 mb-4 font-semibold max-w-2xl">
          No quizzes. No forms. Just speak or type what you're facing.<br />
          We'll instantly connect you with a real coach who's ready to help.
        </p>
        <div className="text-lg sm:text-xl font-bold text-green-700 bg-green-100 px-6 py-2 rounded-full shadow mt-2">
          Get 5 minutes free <span className="text-green-900 font-extrabold">NO COMMITMENT</span>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center items-center">
        <div>
          <label className="mr-2 font-semibold text-black">Specialty:</label>
          <select
            className="border px-2 py-1 rounded w-56 text-black placeholder-black/80 font-semibold bg-white/80 focus:bg-white focus:placeholder-black"
            value={selected || ''}
            onChange={e =>
              setSelected(e.target.value === '' ? null : e.target.value)
            }
          >
            <option value="">All</option>
            {allSpecialties.map(s => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <input
          type="text"
          placeholder="Search by name or bio..."
          className="border px-2 py-1 rounded w-56 text-black placeholder-black/80 font-semibold bg-white/80 focus:bg-white focus:placeholder-black"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      {/* Coach grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCoaches.map(coach => (
          <div
            key={coach.slug}
            className="border rounded-xl p-6 shadow-lg hover:shadow-2xl transition bg-white flex flex-col"
          >
            <img
              src={coach.profileImg && coach.profileImg.trim() !== ''
                ? coach.profileImg
                : `https://randomuser.me/api/portraits/lego/${
                    Math.abs(
                      Array.from(coach.slug || coach.name || '0').reduce((acc, c) => acc + c.charCodeAt(0), 0)
                    ) % 10
                  }.jpg`}
              alt={coach.name}
              className="rounded-full w-28 h-28 object-cover mx-auto mb-4 border-4 border-blue-100 shadow"
            />
            <h2 className="text-2xl font-bold text-center mb-1">
              {coach.name}
            </h2>
            <div className="flex flex-wrap gap-2 justify-center mb-2">
              {coach.specialties.map(tag => (
                <span
                  key={tag}
                  className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-blue-900 text-center mb-3 text-sm flex-1">
              {coach.bio}
            </p>
            <div className="flex flex-col gap-2 mt-2">
              <Link
                href={`/coaches/${encodeURIComponent(coach.slug)}`}
                className="text-center px-4 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
              >
                View Profile
              </Link>
              <a
                href={`https://calendly.com/${coach.referralCode}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center px-4 py-2 rounded bg-green-500 text-white font-semibold hover:bg-green-600 transition"
              >
                Book Now
              </a>
            </div>
            {coach.reviews && coach.reviews.length > 0 && (
              <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded">
                <div className="text-yellow-500 mb-1">
                  {'⭐'.repeat(coach.reviews[0].rating)}
                </div>
                <div className="italic text-xs text-gray-700">
                  {coach.reviews[0].text}
                </div>
              </div>
            )}
          </div>
        ))}
        {filteredCoaches.length === 0 && (
          <div className="col-span-full text-center text-blue-700 py-12 text-lg">
            No coaches found. Try a different search or filter.
          </div>
        )}
      </div>
    </div>
  );
}
