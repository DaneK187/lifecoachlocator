import Link from 'next/link';
import coaches from '../data/coaches.json';
import cities from './data/coaches.json';

const homepageReviews = [
	{
		name: 'Tara',
		text: 'My coach helped me find clarity and confidence. The process was so easy and supportive!',
		avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
	},
	{
		name: 'Alex',
		text: 'I landed my dream job after just a few sessions. Highly recommend to anyone feeling stuck!',
		avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
	},
	{
		name: 'Priya',
		text: 'The wellness coaching changed my life. I feel healthier and happier than ever.',
		avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
	},
	{
		name: 'Marcus',
		text: 'My coach gave me the tools to manage stress and finally enjoy my work again.',
		avatar: 'https://randomuser.me/api/portraits/men/65.jpg',
	},
	{
		name: 'Sophie',
		text: 'I never thought I could be this confident. The support was incredible!',
		avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
	},
	{
		name: 'Diego',
		text: 'The relationship coaching helped me communicate better and build stronger connections.',
		avatar: 'https://randomuser.me/api/portraits/men/41.jpg',
	},
	{
		name: 'Mina',
		text: 'I loved the personalized approach. My coach really listened and understood my needs.',
		avatar: 'https://randomuser.me/api/portraits/women/23.jpg',
	},
	{
		name: 'James',
		text: 'From burnout to balance—my coach made all the difference.',
		avatar: 'https://randomuser.me/api/portraits/men/77.jpg',
	},
	{
		name: 'Lila',
		text: 'I feel empowered and motivated every day now. Thank you!',
		avatar: 'https://randomuser.me/api/portraits/women/36.jpg',
	},
	{
		name: 'Omar',
		text: 'The best investment I made in myself this year.',
		avatar: 'https://randomuser.me/api/portraits/men/19.jpg',
	},
	{
		name: 'Grace',
		text: 'I found my purpose and passion with the help of my coach.',
		avatar: 'https://randomuser.me/api/portraits/women/50.jpg',
	},
	{
		name: 'Ben',
		text: 'The process was seamless and the results were real.',
		avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
	},
];

const specialties = [
	{
		name: 'Confidence',
		image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
	},
	{
		name: 'Career Coaching',
		image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
	},
	{
		name: 'Relationships',
		image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
	},
	{
		name: 'Wellness',
		image: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80',
	},
	{
		name: 'Mindset',
		image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
	},
	{
		name: 'Productivity',
		image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80',
	},
	{
		name: 'Stress Management',
		image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80',
	},
	{
		name: 'Leadership',
		image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
	},
];

export default function HomePage() {
	// Pick 3 featured coaches
	const featuredCoaches = coaches.slice(0, 3);
	// Get 12 most populous cities for 'Popular Cities'
	const popularCities = cities
		.sort((a, b) => b.population - a.population)
		.slice(0, 12);

	const faqs = [
		{
			q: 'What is a life coach?',
			a: 'A life coach is a professional who helps you identify and achieve personal or professional goals through guidance, support, and accountability.',
		},
		{
			q: 'How do I choose the right life coach?',
			a: 'Browse profiles, read reviews, and look for specialties that match your needs. You can also book an intro call to see if it’s a good fit.',
		},
		{
			q: 'Is life coaching confidential?',
			a: 'Yes, all sessions are private and confidential between you and your coach.',
		},
		{
			q: 'How much does a life coach cost?',
			a: 'Prices vary by coach, experience, and session length. Many coaches offer free intro calls or packages.',
		},
		{
			q: 'Can I work with a coach online?',
			a: 'Absolutely! Most coaches offer virtual sessions via video or phone.',
		},
	];

	return (
		<main className="bg-gray-50 min-h-screen">
			{/* Hero Section */}
			<section className="bg-gradient-to-br from-blue-100 to-blue-300 py-20 px-4 text-center shadow-md">
				<h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 mb-6 tracking-tight drop-shadow-lg">
					Find a Life Coach Near You
				</h1>
				<p className="text-xl md:text-2xl text-blue-800 mb-10 max-w-2xl mx-auto">
					Get matched with top-rated life coaches to help you achieve your goals,
					improve your mindset, and live your best life.
				</p>
				<form className="flex flex-col md:flex-row gap-3 justify-center max-w-2xl mx-auto mb-4">
					<input
						type="text"
						placeholder="What do you need help with? (e.g. confidence, career, relationships)"
						className="px-4 py-4 rounded-lg border border-blue-200 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg shadow"
					/>
					<input
						type="text"
						placeholder="Your location (city or zip)"
						className="px-4 py-4 rounded-lg border border-blue-200 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg shadow"
					/>
					<Link
						href="/coaches"
						className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-4 rounded-lg transition shadow text-lg flex items-center justify-center"
					>
						Search
					</Link>
				</form>
				<div className="mt-4 text-blue-700 text-base">
					<span className="font-semibold">Popular:</span> Confidence, Career,
					Relationships, Wellness, Mindset
				</div>
			</section>

			{/* Popular Specialties Section */}
			<section className="max-w-7xl mx-auto py-10 px-4">
				<h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">
					Popular Life Coaching Specialties
				</h2>
				<div className="flex gap-6 overflow-x-auto pb-4 hide-scrollbar">
					{specialties.map((spec, i) => (
						<Link
							key={spec.name}
							href={{ pathname: '/coaches', query: { specialty: spec.name } }}
							className="min-w-[220px] max-w-[220px] h-48 rounded-xl shadow-lg bg-gradient-to-t from-blue-200 via-white to-gray-100 flex flex-col justify-end relative group border border-blue-100 hover:shadow-2xl transition overflow-hidden"
							style={{
								backgroundImage: `url(${spec.image})`,
								backgroundSize: 'cover',
								backgroundPosition: 'center',
							}}
						>
							<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl group-hover:from-blue-800/60 transition" />
							<span className="relative z-10 text-white text-lg font-semibold p-4 drop-shadow-lg">
								{spec.name}
							</span>
							{/* Decorative accent */}
							<div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-green-300 to-purple-400 opacity-80" />
							{i % 2 === 0 && (
								<div className="absolute top-2 right-2 w-3 h-3 bg-yellow-300 rounded-full shadow-lg" />
							)}
						</Link>
					))}
				</div>
			</section>

			{/* How it works */}
			<section className="max-w-5xl mx-auto py-16 px-4">
				<h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">
					How it works
				</h2>
				<div className="grid md:grid-cols-3 gap-10">
					<div className="bg-white rounded-xl shadow p-8 flex flex-col items-center border-t-4 border-blue-400">
						<div className="bg-blue-100 text-blue-700 rounded-full w-16 h-16 flex items-center justify-center text-3xl font-bold mb-4">
							1
						</div>
						<h3 className="font-semibold text-xl mb-2">
							Tell us what you need
						</h3>
						<p className="text-gray-600 text-center">
							Answer a few quick questions about your goals and preferences.
						</p>
					</div>
					<div className="bg-white rounded-xl shadow p-8 flex flex-col items-center border-t-4 border-blue-400">
						<div className="bg-blue-100 text-blue-700 rounded-full w-16 h-16 flex items-center justify-center text-3xl font-bold mb-4">
							2
						</div>
						<h3 className="font-semibold text-xl mb-2">
							Get matched instantly
						</h3>
						<p className="text-gray-600 text-center">
							We’ll connect you with top life coaches who fit your needs.
						</p>
					</div>
					<div className="bg-white rounded-xl shadow p-8 flex flex-col items-center border-t-4 border-blue-400">
						<div className="bg-blue-100 text-blue-700 rounded-full w-16 h-16 flex items-center justify-center text-3xl font-bold mb-4">
							3
						</div>
						<h3 className="font-semibold text-xl mb-2">Start your journey</h3>
						<p className="text-gray-600 text-center">
							Message, book, and begin working with your chosen coach.
						</p>
					</div>
				</div>
			</section>

			{/* Featured Coaches */}
			<section className="max-w-6xl mx-auto py-16 px-4">
				<h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">
					Featured Life Coaches
				</h2>
				<div className="grid md:grid-cols-3 gap-10">
					{featuredCoaches.map((coach, idx) => (
						<div
							key={coach.slug}
							className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center border-t-4 border-blue-400"
						>
							<img
								src={
									coach.profileImg ||
									`https://randomuser.me/api/portraits/${
										idx % 2 === 0 ? 'women' : 'men'
									}/${20 + idx}.jpg`
								}
								alt={coach.name}
								className="rounded-full w-28 h-28 object-cover mb-4 border-4 border-blue-100 shadow bg-gray-100"
							/>
							<h3 className="text-2xl font-bold text-blue-800 mb-1">
								{coach.name}
							</h3>
							<div className="flex flex-wrap gap-2 justify-center mb-2">
								{coach.specialties.map((tag) => (
									<span
										key={tag}
										className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
									>
										{tag}
									</span>
								))}
							</div>
							<p className="text-gray-700 text-center text-base mb-3">
								{coach.bio.slice(0, 90)}...
							</p>
							<div className="flex gap-2 mt-auto">
								<Link
									href={`/coaches/${coach.slug}`}
									className="px-4 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition text-sm"
								>
									View Profile
								</Link>
								<a
									href={coach.bookingLink || `https://calendly.com/${coach.slug}`}
									target="_blank"
									rel="noopener noreferrer"
									className="px-4 py-2 rounded bg-green-500 text-white font-semibold hover:bg-green-600 transition text-sm"
								>
									Book Now
								</a>
							</div>
							{coach.reviews && coach.reviews.length > 0 && (
								<div className="mt-3 text-yellow-500 text-sm">
									{'⭐'.repeat(coach.reviews[0].rating)}
									<span className="text-gray-500 ml-2">
										"{coach.reviews[0].text.slice(0, 40)}..."
									</span>
								</div>
							)}
						</div>
					))}
				</div>
				<div className="text-center mt-10">
					<Link
						href="/coaches"
						className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-bold px-10 py-4 rounded-lg transition shadow text-lg"
					>
						Browse All Coaches
					</Link>
				</div>
			</section>

			{/* CTA Section */}
			<section className="bg-blue-700 py-16 px-4 text-center mt-8">
				<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
					Get quotes from Life Coaches near you
				</h2>
				<p className="text-blue-100 text-lg mb-8">
					Start your journey to a better you. It only takes a minute!
				</p>
				<Link
					href="/coaches"
					className="bg-white text-blue-700 font-bold px-10 py-4 rounded-lg text-lg shadow hover:bg-blue-100 transition"
				>
					Get Started
				</Link>
			</section>

			{/* Popular Cities Section */}
			<section className="max-w-6xl mx-auto py-16 px-4">
				<h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-blue-900">
					Popular Cities
				</h2>
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
					{popularCities.map((city) => (
						<div
							key={city.city + city.country_code}
							className="bg-white border border-blue-100 rounded-lg px-6 py-6 text-blue-700 font-semibold text-lg shadow flex flex-col items-center"
						>
							<span>{city.city}</span>
							<span className="text-xs text-gray-500 mt-1">
								{city.country_code}
							</span>
						</div>
					))}
				</div>
			</section>

			{/* FAQ Section */}
			<section className="bg-white py-16 px-4 border-t">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-10">
						Frequently Asked Questions
					</h2>
					<div className="grid md:grid-cols-2 gap-8 text-left">
						{faqs.map((faq, i) => (
							<div key={i} className="mb-6">
								<div className="font-semibold text-blue-800 mb-2">
									{faq.q}
								</div>
								<div className="text-gray-700 text-base">{faq.a}</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Trust/Testimonials Section */}
			<section className="bg-white py-16 px-4 border-t">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-10">
						Why Choose Us?
					</h2>
					<div className="grid md:grid-cols-3 gap-10">
						<div>
							<div className="text-blue-700 text-5xl mb-3">★</div>
							<h3 className="font-semibold mb-2 text-lg">Vetted Coaches</h3>
							<p className="text-gray-600 text-base">
								All coaches are carefully screened and reviewed for quality and
								professionalism.
							</p>
						</div>
						<div>
							<div className="text-blue-700 text-5xl mb-3">🔒</div>
							<h3 className="font-semibold mb-2 text-lg">Safe & Secure</h3>
							<p className="text-gray-600 text-base">
								Your information is protected and your journey is confidential.
							</p>
						</div>
						<div>
							<div className="text-blue-700 text-5xl mb-3">💬</div>
							<h3 className="font-semibold mb-2 text-lg">Real Results</h3>
							<p className="text-gray-600 text-base">
								Thousands have found clarity, confidence, and success with our
								coaches.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Reviews Section */}
			<section className="bg-gray-50 py-20 px-4">
				<div className="max-w-3xl mx-auto text-center">
					<div className="flex justify-center items-end mb-10 gap-4 flex-wrap relative min-h-[120px]">
						{homepageReviews.map((review, i) => (
							<img
								key={review.avatar}
								src={review.avatar}
								alt={review.name}
								className={`rounded-full object-cover shadow-md border-2 border-white transition-all duration-300 ${
									i === 5 ? 'w-28 h-28 z-10' : 'w-16 h-16'
								} ${i % 2 === 0 ? 'mb-6' : 'mb-0'}`}
								style={{
									left: 0,
									top: 0,
									position: 'relative',
									marginLeft: i === 0 ? 0 : -16,
									marginRight:
										i === homepageReviews.length - 1 ? 0 : -16,
								}}
							/>
						))}
					</div>
					<div className="relative">
						{/* Simple carousel dots and review text */}
						<div className="text-2xl md:text-3xl font-semibold text-blue-900 mb-6 min-h-[80px]">
							“{homepageReviews[0].text}”
						</div>
						<div className="text-blue-700 font-bold mb-4">
							{homepageReviews[0].name}
						</div>
						<div className="flex justify-center gap-2 mt-2">
							{homepageReviews.map((_, i) => (
								<span
									key={i}
									className={`inline-block w-3 h-3 rounded-full ${
										i === 0 ? 'bg-blue-600' : 'bg-blue-200'
									}`}
								></span>
							))}
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}