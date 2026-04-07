import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold">
            Legacy of Service, Future for Kwara — HOL 2027
          </h1>
          <p className="text-2xl md:text-3xl text-blue-100">
            For decades Hakeem Lawal has stood for steady leadership and service. Now he brings that experience back to build a stronger, fairer Kwara for everyone.
          </p>
          <p className="text-xl text-amber-300 font-semibold">
            ALH HAKEEM OLADIMEJI LAWAL — HOL 2027
          </p>

          {/* CTA Buttons - From strategies */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Link
              href="/get-involved"
              className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-lg transition inline-block"
            >
              Join the Movement
            </Link>
            <Link
              href="/legacy"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-lg transition inline-block"
            >
              Explore the Legacy
            </Link>
            <Link
              href="/engage"
              className="border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-3 px-8 rounded-lg transition"
            >
              Share Your Ideas
            </Link>
          </div>
        </div>
      </section>

      {/* Image Carousel Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Our Vision in Action
            </h2>
            <p className="text-lg text-gray-600">
              Discover the key focus areas driving Kwara Ti Wa Ni forward.
            </p>
          </div>
          <div className="w-full h-96 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-lg flex items-center justify-center text-white text-2xl font-bold">
            Campaign Vision Gallery - Add Your Images Here
          </div>
        </div>
      </section>

      {/* Key Programs Section */}
      <section className="bg-blue-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-900 text-center mb-12">
            Key Focus Areas
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <ProgramCard
              title="Jobs & Enterprise"
              description="Creating an enabling environment for businesses, startups, and entrepreneurs."
              color="blue"
            />
            <ProgramCard
              title="Education & Skills"
              description="Improving access to quality education and practical skills."
              color="amber"
            />
            <ProgramCard
              title="Infrastructure"
              description="Developing organized, functional public systems and urban order."
              color="emerald"
            />
            <ProgramCard
              title="Security & Trust"
              description="Advocating effective and collaborative security structures."
              color="red"
            />
            <ProgramCard
              title="Youth & Innovation"
              description="Supporting creativity, technology, and digital innovation."
              color="purple"
            />
            <ProgramCard
              title="Inclusive Governance"
              description="Ensuring every voice and community matters in decision-making."
              color="indigo"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-amber-500 to-amber-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-bold">
            Be Part of the Movement
          </h2>
          <p className="text-xl">
            Join thousands of Kwarans committed to building a better future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-involved"
              className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg transition"
            >
              Get Involved Today
            </Link>
            <Link
              href="/share-ideas"
              className="border-2 border-white hover:bg-white hover:text-amber-600 text-white font-bold py-3 px-8 rounded-lg transition"
            >
              Share Your Thoughts
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProgramCard({ title, description, color }: { title: string; description: string; color: string }) {
  let colorClasses = '';
  
  if (color === 'blue') colorClasses = 'bg-blue-100 border-blue-500 text-blue-900';
  else if (color === 'amber') colorClasses = 'bg-amber-100 border-amber-500 text-amber-900';
  else if (color === 'emerald') colorClasses = 'bg-emerald-100 border-emerald-500 text-emerald-900';
  else if (color === 'red') colorClasses = 'bg-red-100 border-red-500 text-red-900';
  else if (color === 'purple') colorClasses = 'bg-purple-100 border-purple-500 text-purple-900';
  else if (color === 'indigo') colorClasses = 'bg-indigo-100 border-indigo-500 text-indigo-900';

  return (
    <div className={`border-l-4 p-6 rounded-lg ${colorClasses} shadow-lg hover:shadow-xl transition`}>
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-base">{description}</p>
    </div>
  );
}
