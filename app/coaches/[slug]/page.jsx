// app/coaches/[slug]/page.jsx
import coaches from '../../../data/coaches.json';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import BookingSection from './BookingSection'; // 👈 NEW
import CoachMap from './CoachMap';

export function generateStaticParams() {
  // Ensure all slugs are lowercased and trimmed for static generation
  return coaches.map(coach => ({ slug: (coach.slug || '').toLowerCase().trim() }));
}

export async function generateMetadata({ params }) {
  const coach = coaches.find((c) => c.slug === params.slug);
  if (!coach) {
    return {
      title: 'Coach Not Found',
      description: 'Sorry, we couldn’t find that coach.',
    };
  }
  return {
    title: `${coach.name} — Your Life Coach`,
    description: coach.bio,
  };
}

export default function CoachPage({ params }) {
  // Robust slug lookup: case-insensitive, trimmed
  const paramSlug = (params.slug || '').toLowerCase().trim();
  const coach = coaches.find(c => (c.slug || '').toLowerCase().trim() === paramSlug);
  if (!coach) return notFound();

  // Example enhancements
  const availableNow = Math.random() > 0.5; // Simulate availability
  const fallbackImg = `https://randomuser.me/api/portraits/lego/${
    Math.abs(Array.from(coach.slug || coach.name || '0').reduce((acc, c) => acc + c.charCodeAt(0), 0)) % 10
  }.jpg`;

  // Use fallback image if profileImg is missing/empty
  const profileImg = coach.profileImg && coach.profileImg.trim() !== '' ? coach.profileImg : fallbackImg;
  const location = coach.location || 'Location not specified';
  const videoEmbed = coach.videoEmbed || '';

  // Dummy content for sections
  const bioContent = `Jane Doe is a passionate life coach dedicated to helping individuals unlock their full potential. With a background in psychology and years of hands-on coaching, Jane has guided hundreds of clients through personal and professional transformations. Her approach is rooted in empathy, active listening, and a deep belief in the power of positive change. Jane’s mission is to empower her clients to overcome obstacles, set meaningful goals, and create lasting habits that lead to a fulfilling life. She believes that everyone has the capacity for growth and strives to provide the tools and support needed for each client’s unique journey. In her free time, Jane enjoys hiking, reading, and volunteering at local community centers. She is committed to lifelong learning and regularly attends workshops and seminars to stay at the forefront of coaching methodologies. Jane’s warm, approachable style makes her a trusted partner for anyone seeking to make real, sustainable changes in their life.`;

  const experienceContent = `With over a decade of experience in the coaching industry, Jane has worked with clients from all walks of life, including executives, entrepreneurs, students, and parents. She holds certifications in cognitive behavioral coaching, mindfulness, and leadership development. Jane has designed and delivered workshops on productivity, stress management, and personal growth for organizations and community groups. Her expertise includes one-on-one coaching, group facilitation, and online course creation. Jane’s clients consistently praise her ability to inspire action and provide practical strategies that deliver results. She has been featured in several podcasts and has contributed articles to leading personal development blogs. Jane’s professional journey is marked by a commitment to excellence, continuous improvement, and a genuine desire to see her clients succeed.`;

  const specialtiesContent = `Jane specializes in productivity, mindset, and habit formation. She helps clients identify limiting beliefs, develop growth-oriented thinking, and implement daily routines that drive progress. Jane’s coaching style is highly personalized, focusing on each client’s strengths and values. She uses evidence-based techniques to help clients set clear goals, track their progress, and celebrate their achievements. Jane also offers support in areas such as work-life balance, confidence building, and career transitions. Her specialties make her an ideal coach for anyone looking to boost their motivation, enhance their performance, and achieve lasting change.`;

  return (
    <div className="w-full min-h-screen p-0 m-0 bg-white">
      <div className="max-w-7xl mx-auto p-0 md:p-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center md:space-x-8 space-y-4 md:space-y-0">
          <Image
            src={profileImg}
            alt={coach.name}
            width={200}
            height={200}
            className="rounded-full border-4 border-blue-200 shadow-lg"
          />
          <div className="flex-1">
            <h1 className="text-4xl font-extrabold text-blue-700 mb-1">{coach.name}</h1>
            <div className="flex flex-wrap gap-2 mb-2">
              {coach.specialties.map(tag => (
                <span key={tag} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">{tag}</span>
              ))}
            </div>
            <div className="flex items-center gap-3 mb-2">
              <span className={availableNow ? 'text-green-600 font-semibold' : 'text-gray-400'}>
                {availableNow ? '● Available Now' : '● Unavailable'}
              </span>
              <span className="text-gray-500 text-xs">{location}</span>
            </div>
          </div>
        </div>

        <CoachMap location={location} />

        <div className="grid md:grid-cols-3 gap-8 mt-8">
          <section className="bg-blue-50 rounded-lg p-6 shadow">
            <h2 className="text-2xl font-bold mb-2 text-blue-700">Bio</h2>
            <p className="text-gray-700 text-sm whitespace-pre-line">{bioContent}</p>
          </section>
          <section className="bg-green-50 rounded-lg p-6 shadow">
            <h2 className="text-2xl font-bold mb-2 text-green-700">Experience</h2>
            <p className="text-gray-700 text-sm whitespace-pre-line">{experienceContent}</p>
          </section>
          <section className="bg-yellow-50 rounded-lg p-6 shadow">
            <h2 className="text-2xl font-bold mb-2 text-yellow-700">Specialties</h2>
            <p className="text-gray-700 text-sm whitespace-pre-line">{specialtiesContent}</p>
          </section>
        </div>

        {videoEmbed && (
          <iframe
            src={videoEmbed}
            className="w-full h-64 rounded-lg border"
            title={`${coach.name} video`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}

        <div className="space-y-2">
          {coach.reviews?.map((r, i) => (
            <div
              key={i}
              className="border-l-4 border-yellow-400 bg-yellow-50 p-4 rounded"
            >
              <div className="text-yellow-500 mb-1">{'⭐'.repeat(r.rating)}</div>
              <div className="italic text-gray-700">{r.text}</div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <BookingSection url={`https://calendly.com/${coach.referralCode}`} />
        </div>
      </div>
    </div>
  );
}



