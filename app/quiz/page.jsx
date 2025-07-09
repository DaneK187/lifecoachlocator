'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import coaches from '../../data/coaches.json'

export default function QuizPage() {
  const router = useRouter()
  const questions = [
    'Productivity',
    'Mindset',
    'Career Transition',
    'Leadership',
    'Wellness'
  ]
  const [answers, setAnswers] = useState({})

  const handleChange = (e) => {
    setAnswers(prev => ({ ...prev, [e.target.name]: e.target.checked }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const scores = coaches.map(c => ({
      slug: c.slug,
      score: c.specialties.filter(tag => answers[tag]).length
    }))
    const best = scores.sort((a, b) => b.score - a.score)[0]
    router.push(`/coaches/${best.slug}`)
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white shadow-lg rounded-2xl p-8 space-y-6"
      >
        <h1 className="text-3xl font-bold text-center">Find Your Ideal Coach</h1>
        <p className="text-center text-gray-600">Check all that apply:</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {questions.map((q) => (
            <label key={q} className="flex items-center space-x-3">
              <input
                type="checkbox"
                name={q}
                checked={!!answers[q]}
                onChange={handleChange}
                className="h-5 w-5 text-blue-600 border-gray-300 rounded"
              />
              <span className="text-lg text-gray-800">{q}</span>
            </label>
          ))}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          See My Match
        </button>
      </form>
    </div>
  )
}
