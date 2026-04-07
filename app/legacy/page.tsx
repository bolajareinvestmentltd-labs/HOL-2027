import Link from 'next/link';

export default function LegacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="bg-blue-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">The Legacy of Rear Admiral Mohammed Alabi Lawal</h1>
          <p className="text-xl text-blue-100">
            Decades of service, leadership, and dedication to Kwara state and Nigeria
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Biography Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Biography</h2>
          <div className="prose prose-lg max-w-4xl text-gray-700">
            <p>
              Rear Admiral Mohammed Alabi Lawal was a distinguished military officer and public servant who dedicated his life to national service.
              His legacy encompasses military leadership, public administration, and commitment to the development of Kwara state.
            </p>
            <p className="mt-4">
              More content will be added here. This page serves as the comprehensive repository for the late Rear Admiral&apos;s biography, achievements, and historical documentation.
            </p>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Timeline of Service</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-blue-500 pl-6 pb-6">
              <h3 className="text-xl font-semibold text-gray-900">Military Career Highlights</h3>
              <p className="text-gray-600 mt-2">Key milestones and achievements will be documented here with verified dates and sources.</p>
            </div>
            <div className="border-l-4 border-green-500 pl-6 pb-6">
              <h3 className="text-xl font-semibold text-gray-900">Public Service</h3>
              <p className="text-gray-600 mt-2">Administrative roles and public service contributions documented with sources.</p>
            </div>
            <div className="border-l-4 border-amber-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900">Community Impact</h3>
              <p className="text-gray-600 mt-2">Community development initiatives and lasting contributions to Kwara.</p>
            </div>
          </div>
        </section>

        {/* Documents Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Scanned Documents & Speeches</h2>
          <p className="text-gray-600 mb-6">
            Historical documents, speeches, and official records will be made available here with proper permissions and archival care.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-300 rounded-lg p-6">
              <div className="text-4xl mb-3">📄</div>
              <h3 className="font-semibold text-gray-900">Documents</h3>
              <p className="text-gray-600 text-sm mt-2">Scanned official records and correspondences</p>
            </div>
            <div className="border border-gray-300 rounded-lg p-6">
              <div className="text-4xl mb-3">🎙️</div>
              <h3 className="font-semibold text-gray-900">Speeches</h3>
              <p className="text-gray-600 text-sm mt-2">Public addresses and important remarks</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Learn More About Our Candidate</h2>
          <Link
            href="/about"
            className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg inline-block"
          >
            Meet Hakeem Lawal
          </Link>
        </section>
      </div>
    </div>
  );
}
