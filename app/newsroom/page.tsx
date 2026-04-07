export default function NewsroomPage() {
  const newsItems = [
    {
      id: 1,
      title: 'Hakeem Lawal Announces Economic Development Initiative',
      excerpt: 'Comprehensive plan to boost SME growth and create 10,000 jobs in Kwara',
      date: 'April 5, 2026',
      tags: ['Economy', 'Jobs'],
      category: 'Press Release',
    },
    {
      id: 2,
      title: 'Major Endorsement from Kwara Business Leaders',
      excerpt: 'Over 50 business leaders and entrepreneurs pledge support for the campaign',
      date: 'April 1, 2026',
      tags: ['Endorsement', 'Community'],
      category: 'News',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="bg-red-700 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Newsroom</h1>
          <p className="text-xl text-red-100">
            Press releases, media updates, and news coverage
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Media Kit CTA */}
        <div className="bg-blue-50 border border-blue-300 rounded-lg p-8 mb-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Media Kit Available</h2>
          <p className="text-gray-700 mb-6">
            Download high-resolution photos, fact sheets, and campaign materials
          </p>
          <button className="bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-8 rounded-lg">
            Download Media Kit
          </button>
        </div>

        {/* News Items */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Latest News</h2>
          <div className="space-y-8">
            {newsItems.map((item) => (
              <article
                key={item.id}
                className="border border-gray-300 rounded-lg p-8 hover:shadow-lg transition"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="inline-block bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                      {item.category}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                  </div>
                </div>

                <p className="text-gray-700 text-lg mb-4">{item.excerpt}</p>

                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-gray-500 text-sm">{item.date}</span>
                </div>

                <button className="mt-6 text-red-700 hover:text-red-800 font-bold">
                  Read Full Story →
                </button>
              </article>
            ))}
          </div>
        </section>

        {/* Archive */}
        <section className="text-center py-12 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Press Archive</h2>
          <p className="text-gray-600 mb-6">
            Browse all press releases and news articles
          </p>
          <button className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-bold py-3 px-8 rounded-lg transition">
            View Full Archive
          </button>
        </section>
      </div>
    </div>
  );
}
