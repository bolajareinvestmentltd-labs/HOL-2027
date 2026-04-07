
export default function EngagePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="bg-emerald-700 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Engage With Us</h1>
          <p className="text-xl text-emerald-100">
            Ask questions, share suggestions, and join the conversation
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Q&A Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Questions & Answers</h2>
          <p className="text-gray-600 mb-8">
            Have a question? Ask it here and Hakeem will respond to the most popular questions each week.
            All questions are moderated to keep the conversation respectful and constructive.
          </p>

          {/* Ask Question CTA */}
          <div className="bg-emerald-50 border-2 border-emerald-200 rounded-lg p-8 mb-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Ask Hakeem</h3>
            <p className="text-gray-700 mb-6">
              Submit your question and it may be featured in our weekly &quot;Ask Hakeem&quot; session
            </p>
            <button className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3 px-8 rounded-lg">
              Submit a Question
            </button>
          </div>

          {/* Recent Questions (Placeholder) */}
          <div className="space-y-6">
            <div className="border border-gray-300 rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-semibold text-gray-900">What is your plan for education in Kwara?</h3>
                <span className="text-emerald-600 font-bold">👍 24 upvotes</span>
              </div>
              <p className="text-gray-600 text-sm mb-3">Asked by Amina &bull; 2 days ago</p>
              <p className="text-gray-700">
                Response pending from Hakeem. Check back soon for his detailed answer.
              </p>
            </div>
          </div>
        </section>

        {/* Suggestion Box */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Suggestion Box</h2>
          <p className="text-gray-600 mb-8">
            What ideas do you have for Kwara&apos;s future? Share your suggestions and upvote the ones you support most.
          </p>

          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-8 mb-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Share Your Idea</h3>
            <p className="text-gray-700 mb-6">
              Help shape the future of Kwara by sharing your vision
            </p>
            <button className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg">
              Submit an Idea
            </button>
          </div>

          {/* Top Suggestions (Placeholder) */}
          <div className="space-y-4">
            <div className="border border-gray-300 rounded-lg p-6 flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900">Better Transportation Infrastructure</h3>
                <p className="text-gray-600 text-sm">By Toyin &bull; 1 week ago</p>
              </div>
              <span className="text-blue-600 font-bold text-lg">👍 47</span>
            </div>
          </div>
        </section>

        {/* Moderation Policy */}
        <section className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Community Guidelines</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-3">✓</span>
              <span>Be respectful. No hate speech, harassment, or threats.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-3">✓</span>
              <span>No false claims. Posts spreading misinformation will be removed.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-3">✓</span>
              <span>No spam. Commercial ads and unrelated content are prohibited.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-3">✓</span>
              <span>No doxxing. Sharing private personal information is forbidden.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-3">✓</span>
              <span>Constructive engagement encouraged! Civil debate and policy suggestions welcome.</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
