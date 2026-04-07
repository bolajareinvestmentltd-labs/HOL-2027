export default function GalleryPage() {
  const categories = [
    { name: 'Party Elders', icon: '👴', count: 12 },
    { name: 'Crowd Moments', icon: '👥', count: 28 },
    { name: 'Community Work', icon: '🤝', count: 35 },
    { name: 'Family & Legacy', icon: '👨‍👩‍👧‍👦', count: 18 },
    { name: 'Media Events', icon: '📸', count: 42 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="bg-purple-700 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Photo Gallery</h1>
          <p className="text-xl text-purple-100">
            Moments from the campaign trail and community engagement
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Filter Categories */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-gray-900">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {categories.map((category) => (
              <a
                key={category.name}
                href={`#${category.name.toLowerCase().replace(/\s/g, '-')}`}
                className="bg-white border border-gray-300 rounded-lg p-6 text-center hover:shadow-lg hover:border-purple-400 transition cursor-pointer"
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="font-semibold text-gray-900">{category.name}</h3>
                <p className="text-sm text-gray-600 mt-2">{category.count} photos</p>
              </a>
            ))}
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-gray-900">Recent Photos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="aspect-square bg-gray-300 rounded-lg flex items-center justify-center text-4xl hover:opacity-80 transition cursor-pointer"
              >
                🖼️
              </div>
            ))}
          </div>
        </section>

        {/* Info */}
        <section className="text-center py-12 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">More Coming Soon</h2>
          <p className="text-gray-600">
            The gallery is being populated with verified campaign photos and community moments. Check back soon!
          </p>
        </section>
      </div>
    </div>
  );
}
