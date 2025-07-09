// app/coaches/[slug]/page.jsx
import coaches from '../../../data/coaches.json'
import Image from 'next/image'
import BookingButton from './BookingButton'    // client-only

// 1️⃣ Tell Next.js which slugs to pre-render
export function generateStaticParams() {
  return coaches.map(coach => ({ slug: coach.slug }))
}

// 2️⃣ Generate dynamic SEO metadata per coach
export async function generateMetadata({ params }) {
  const coach = coaches.find(c => c.slug === params.slug)
  if (!coach) {
    return {
      title: 'Coach Not Found',
      description: 'Sorry, we couldn’t find that coach.',
    }
  }
  return {
    title: `${coach.name} — Your Life Coach`,
    description: coach.bio,
    openGraph: {
      title: `${coach.name} — Life Coaching`,
      description: coach.bio,
      images: [
        {
          url: coach.profileImg,
          width: 300,
          height: 300,
        },
      ],
    },
  }
}

// 3️⃣ Render the page
export default async function CoachPage({ params }) {
  const coach = coaches.find(c => c.slug === params.slug)
  if (!coach) return <p>Coach not found</p>

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg space-y-6">
      {/* Header: photo + name/bio */}
      <div className="flex items-center space-x-6">
        <Image
          src={coach.profileImg}
          alt={coach.name}
          width={150}
          height={150}
          className="rounded-full flex-shrink-0"
          priority
        />
        <div>
          <h1 className="text-3xl font-bold">{coach.name}</h1>
          <p className="mt-2 text-gray-700">{coach.bio}</p>
        </div>
      </div>

      {/* Video embed */}
      <iframe
        src={coach.videoEmbed}
        className="w-full h-64 rounded-lg border mb-6"
        title={`${coach.name} video`}
      />

      {/* Reviews */}
      {coach.reviews.map((r, i) => (
        <div
          key={i}
          className="border-l-4 border-yellow-400 bg-yellow-50 p-4 my-2 rounded"
        >
          <strong className="block mb-1">{'⭐'.repeat(r.rating)}</strong>
          <p className="italic text-gray-800">{r.text}</p>
        </div>
      ))}

      {/* Client-only Booking Button */}
      <BookingButton />
    </div>
  )
}
