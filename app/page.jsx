"use client";

import { useState } from 'react';
import coaches from '../data/coaches.json';
import cities from './data/cities.json';
import ChatWidget from "./components/ChatWidget";

const featuredCoaches = coaches.slice(0, 3);
const popularCities = cities
	.sort((a, b) => b.population - a.population)
	.slice(0, 12);

// ...existing code...

function SimulatedAIMatchSection({ coaches }) {
	const [input, setInput] = useState("");
	const [result, setResult] = useState(null);
	const [loading, setLoading] = useState(false);

	function handleMatch() {
		setLoading(true);
		setTimeout(() => {
			// Simulate NLP: match keywords to specialties
			const text = input.toLowerCase();
			const tags = [];
			if (text.includes("burnout")) tags.push("Burnout Recovery");
			if (text.includes("motivation")) tags.push("Motivation");
			if (text.includes("career")) tags.push("Career Direction");
			if (text.includes("relationship")) tags.push("Relationships");
			if (text.includes("wellness")) tags.push("Wellness");
			if (text.includes("stress")) tags.push("Stress Management");
			if (text.includes("leadership")) tags.push("Leadership");
			if (text.includes("productivity")) tags.push("Productivity");
			if (text.includes("mindset")) tags.push("Mindset");
			// Fallback
			if (tags.length === 0) tags.push("Motivation");
			// Find coaches with any of these specialties
			const matched = coaches.filter(c => c.specialties.some(s => tags.includes(s)));
			setResult({ tags, matched: matched.slice(0, 3) });
			setLoading(false);
		}, 1200);
	}

	return (
		<section className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 mt-12 mb-16 text-center border-t-4 border-blue-400">
			<h2 className="text-3xl font-bold text-blue-900 mb-2 flex items-center justify-center gap-2">
				Say what’s been on your mind — we’ll find your person.
			</h2>
			<p className="text-blue-700 mb-6 text-lg">
				No quizzes. No filters. Just speak or type in your own words. Whether you're stuck, overwhelmed, or just ready for a change — we’ll match you with the one coach who’s guided people through exactly what you’re facing. The more real you are, the better your match.
			</p>
			<div className="flex flex-col sm:flex-row gap-3 items-center justify-center mb-2">
				<textarea
					className="border border-blue-200 rounded-lg px-4 py-3 w-full sm:w-96 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
					rows={2}
					placeholder="e.g. “I feel stuck in my career. I’ve lost motivation and don’t know what direction to take.” (The more you share, the better your match.)"
					value={input}
					onChange={e => setInput(e.target.value)}
				/>
				<button
					className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-lg transition shadow text-lg flex items-center justify-center"
					onClick={handleMatch}
					disabled={loading || !input.trim()}
				>
					{loading ? 'Matching...' : 'Find My Best Coach'}
				</button>
			</div>
			<div className="text-gray-600 text-sm mb-4 mt-2">
				We don’t save any of this. This isn’t a form — it’s a shortcut to the one coach on LifeCoachConnector.com who truly gets you.
			</div>
			{result && (
				<div className="mt-6 text-left">
					<div className="text-blue-800 font-semibold mb-2">
						Matched Focus Areas: {result.tags.join(' · ')}
					</div>
					<div className="grid sm:grid-cols-2 gap-4">
						{result.matched.map(coach => (
							<div key={coach.slug} className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex gap-4 items-center">
								<img src={coach.profileImg || `https://randomuser.me/api/portraits/lego/${Math.abs(Array.from(coach.slug || coach.name || '0').reduce((acc, c) => acc + c.charCodeAt(0), 0)) % 10}.jpg`} alt={coach.name} className="w-16 h-16 rounded-full object-cover border-2 border-blue-100" />
								<div>
									<div className="font-bold text-blue-900">{coach.name}</div>
									<div className="text-xs text-blue-700 mb-1">{coach.specialties.join(', ')}</div>
									<div className="text-gray-700 text-sm line-clamp-2">{coach.bio}</div>
								</div>
							</div>
						))}
						{result.matched.length === 0 && <div className="text-gray-500 col-span-2">No coaches found for your needs.</div>}
					</div>
				</div>
			)}
		</section>
	);
}

function HomePage() {
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

// ...existing code...

	return (
		<div className="relative">
			{/* Hero/Intro Section */}
			<section className="py-10 px-2 w-full max-w-7xl mx-auto text-center">
				<div className="bg-blue-50 rounded-2xl shadow-lg p-12 flex flex-col items-center w-full">
					<h1 className="text-5xl sm:text-6xl font-extrabold text-center text-blue-700 mb-6">
						Tell us what's going on—we'll find your perfect coach right now.
					</h1>
					<p className="text-2xl sm:text-3xl text-center text-blue-900 mb-6 font-semibold max-w-5xl w-full">
						No quizzes. No forms. Just speak or type what you're facing.<br />
						We'll instantly connect you with a real coach who's ready to help.
					</p>
					<div className="text-2xl sm:text-3xl font-bold text-green-700 bg-green-100 px-8 py-4 rounded-full shadow mt-2">
						Get 5 minutes free <span className="text-green-900 font-extrabold">NO COMMITMENT</span>
					</div>
				</div>
			</section>

			{/* Instant Chat Match Section (anchor for CTA) */}
			<section id="live-chat" className="py-12 px-4 max-w-3xl mx-auto">
				<div className="bg-white rounded-2xl shadow-lg p-8">
					<h2 className="text-2xl font-bold mb-2 text-blue-700 text-center">Instant Live Chat Match</h2>
					<p className="text-center text-gray-700 mb-4">Type your issue below and get matched instantly with a real coach.</p>
					{/* The floating chat widget will always be available, but you can also add a static chat entry here if desired. */}
					<div className="text-center text-gray-400 italic">(Use the chat bubble at bottom right to start your session!)</div>
				</div>
			</section>

			<SimulatedAIMatchSection coaches={coaches} />
			{/* Featured Coaches Section */}
			<section className="py-12 px-4 max-w-5xl mx-auto">
				<h2 className="text-3xl font-semibold text-center mb-8">Featured Coaches</h2>
				<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
					{/* Example featured coaches, static for now */}
					<div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
						<img src="https://randomuser.me/api/portraits/women/1.jpg" alt="Jane Doe" className="w-24 h-24 rounded-full mb-3 border-4 border-blue-100 shadow" />
						<div className="font-bold text-lg mb-1">Jane Doe</div>
						<div className="text-blue-700 text-sm mb-2">Career, Wellness, Relationships</div>
						<div className="text-gray-700 text-center text-sm">Empowering clients to achieve their goals and live their best lives.</div>
					</div>
					<div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
						<img src="https://randomuser.me/api/portraits/men/2.jpg" alt="John Smith" className="w-24 h-24 rounded-full mb-3 border-4 border-blue-100 shadow" />
						<div className="font-bold text-lg mb-1">John Smith</div>
						<div className="text-blue-700 text-sm mb-2">Mindset, Productivity, Leadership</div>
						<div className="text-gray-700 text-center text-sm">Certified life coach with a passion for personal growth and transformation.</div>
					</div>
					<div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
						<img src="https://randomuser.me/api/portraits/women/3.jpg" alt="Emma Wilson" className="w-24 h-24 rounded-full mb-3 border-4 border-blue-100 shadow" />
						<div className="font-bold text-lg mb-1">Emma Wilson</div>
						<div className="text-blue-700 text-sm mb-2">Happiness, Confidence, Stress</div>
						<div className="text-gray-700 text-center text-sm">Helping you unlock your full potential and achieve lasting happiness.</div>
					</div>
				</div>
			</section>

			{/* Popular Chat Topics Section */}
			<section className="py-12 px-4 max-w-4xl mx-auto">
				<h2 className="text-3xl font-semibold text-center mb-6">Popular Chat Topics</h2>
				<div className="flex flex-wrap justify-center gap-3">
					{['Confidence', 'Anxiety', 'Life Direction', 'Burnout', 'Motivation', 'Relationships', 'Career Change', 'Stress', 'Work-Life Balance', 'Goal Setting'].map(topic => (
						<span key={topic} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold text-sm shadow">{topic}</span>
					))}
				</div>
			</section>

			{/* Interactive Poll Section */}
			<section className="py-12 px-4 max-w-2xl mx-auto">
				<h2 className="text-2xl font-semibold text-center mb-4">What's your biggest coaching need?</h2>
				<div className="flex flex-col gap-3">
					<button className="bg-white border border-blue-200 rounded-lg px-6 py-3 text-blue-700 font-semibold hover:bg-blue-50 transition">Finding direction in life</button>
					<button className="bg-white border border-blue-200 rounded-lg px-6 py-3 text-blue-700 font-semibold hover:bg-blue-50 transition">Building confidence</button>
					<button className="bg-white border border-blue-200 rounded-lg px-6 py-3 text-blue-700 font-semibold hover:bg-blue-50 transition">Managing stress or anxiety</button>
					<button className="bg-white border border-blue-200 rounded-lg px-6 py-3 text-blue-700 font-semibold hover:bg-blue-50 transition">Improving relationships</button>
				</div>
				<div className="text-center text-gray-400 text-xs mt-2">(Poll is for demo only)</div>
			</section>

			{/* Available Now Section */}
			<section className="py-12 px-4 max-w-4xl mx-auto">
				<h2 className="text-2xl font-semibold text-center mb-6">Available Now</h2>
				<div className="flex flex-wrap justify-center gap-6">
					<div className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-full px-5 py-2 shadow">
						<span className="w-4 h-4 bg-green-400 rounded-full inline-block"></span>
						<img src="https://randomuser.me/api/portraits/women/1.jpg" alt="Jane Doe" className="w-8 h-8 rounded-full border-2 border-white" />
						<span className="font-semibold text-green-800">Jane Doe</span>
						<span className="text-xs text-green-700">Online now</span>
					</div>
					<div className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-full px-5 py-2 shadow">
						<span className="w-4 h-4 bg-green-400 rounded-full inline-block"></span>
						<img src="https://randomuser.me/api/portraits/men/2.jpg" alt="John Smith" className="w-8 h-8 rounded-full border-2 border-white" />
						<span className="font-semibold text-green-800">John Smith</span>
						<span className="text-xs text-green-700">Online now</span>
					</div>
				</div>
			</section>

			{/* Testimonials Section */}
			<section className="py-12 px-4 max-w-3xl mx-auto">
				<h2 className="text-2xl font-semibold text-center mb-6">What Our Users Say</h2>
				<div className="flex flex-col gap-6">
					<div className="bg-white rounded-xl shadow p-6">
						<div className="text-gray-800 mb-2">"Jane's coaching transformed my career!"</div>
						<div className="text-sm text-gray-500">– Sarah, NY</div>
					</div>
					<div className="bg-white rounded-xl shadow p-6">
						<div className="text-gray-800 mb-2">"John helped me regain my confidence and find direction."</div>
						<div className="text-sm text-gray-500">– Alex, CA</div>
					</div>
					<div className="bg-white rounded-xl shadow p-6">
						<div className="text-gray-800 mb-2">"Emma is so supportive and insightful!"</div>
						<div className="text-sm text-gray-500">– Priya, TX</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="py-8 px-4 text-center text-gray-500 text-sm bg-gray-50 mt-12">
				&copy; {new Date().getFullYear()} LifeCoachConnector. All rights reserved.
			</footer>

			{/* Floating Chat Widget */}
			<ChatWidget />
		</div>
	);
}

export default HomePage;