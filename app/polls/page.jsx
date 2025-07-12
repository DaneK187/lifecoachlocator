import { pollQuestions } from '../data/polls';

export default function PollsPage() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-extrabold text-blue-800 mb-8 text-center">Life Coach Polls & Insights</h1>
      <p className="text-center text-blue-700 mb-10 text-lg">Real data from our community about life coaching experiences.</p>
      <div className="grid md:grid-cols-2 gap-8">
        {pollQuestions.map((poll, idx) => {
          const total = poll.responses.reduce((sum, r) => sum + r.count, 0);
          const top = poll.responses.reduce((a, b) => (a.count > b.count ? a : b));
          return (
            <div key={idx} className="bg-white rounded-xl shadow p-6 border-t-4 border-blue-400">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">{poll.question}</h2>
              <ul className="mb-2">
                {poll.responses.map((resp, i) => (
                  <li key={i} className={`flex justify-between items-center py-1 ${resp.answer === top.answer ? 'font-bold text-blue-700' : 'text-gray-700'}`}>
                    <span>{resp.answer}</span>
                    <span>{resp.count} responses</span>
                  </li>
                ))}
              </ul>
              <div className="text-sm text-blue-600 mt-2">Most popular: <span className="font-semibold">{top.answer}</span> ({top.count} votes, {Math.round((top.count/total)*100)}%)</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
