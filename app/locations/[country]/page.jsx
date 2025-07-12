import coaches from '../../data/coaches.json';
import countries from '../../data/countries.json';
import { notFound } from 'next/navigation';

const countryContent = {
  BR: 'Brazil is a vibrant country where life coaching is growing rapidly, helping people achieve personal and professional breakthroughs in a dynamic culture.',
  AR: 'Argentina values personal growth and transformation, and life coaches here support clients in navigating change and building resilience.',
  US: 'The United States has a thriving life coaching industry, with coaches specializing in everything from career to wellness and relationships.',
  CA: 'Canada’s life coaches are known for their holistic approach, supporting clients in both urban and natural settings.',
  GB: 'The UK is home to a diverse community of life coaches, helping people unlock their potential across all walks of life.',
  FR: 'France blends tradition and innovation in life coaching, empowering clients to pursue fulfillment and balance.',
  IN: 'India’s life coaching scene is booming, with a focus on self-discovery, mindfulness, and success in a fast-changing society.',
  AU: 'Australia’s life coaches help people thrive in a laid-back yet ambitious culture, from the Outback to the cities.',
  DE: 'Germany’s life coaches combine structure and empathy to help clients achieve clarity and progress.',
  JP: 'Japan’s life coaches support personal growth and harmony, blending modern techniques with cultural wisdom.',
  CN: 'China’s life coaching industry is expanding, helping people achieve balance and success in a rapidly changing society.',
  IT: 'Italy’s life coaches inspire clients to pursue passion, creativity, and well-being in all areas of life.',
  ES: 'Spain’s life coaches foster growth and resilience, supporting clients in both personal and professional journeys.'
};

export default function CountryCoachesPage({ params }) {
  const countryCode = params.country.toUpperCase();
  const country = countries.find(c => c.code === countryCode);
  if (!country) return notFound();
  const intro = countryContent[countryCode] || `Discover life coaching opportunities and experts in ${country.name}.`;
  // Show 6 demo coaches from the main list
  const demoCoaches = coaches.slice(0, 6);
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-extrabold mb-2 text-center text-blue-700">
        Life Coaches in {country.name}
      </h1>
      <p className="text-center text-blue-800 mb-8 text-lg">{intro}</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {demoCoaches.map(coach => (
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
      </div>
    </div>
  );
}
