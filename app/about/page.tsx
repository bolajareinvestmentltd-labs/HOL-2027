import AnimatedHeroBackground from '@/components/AnimatedHeroBackground';

// Placeholder images - user should replace with actual images
const heroImages = [
  'https://via.placeholder.com/1200x400?text=ALH+HAKEEM+1',
  'https://via.placeholder.com/1200x400?text=ALH+HAKEEM+2',
  'https://via.placeholder.com/1200x400?text=ALH+HAKEEM+3',
  'https://via.placeholder.com/1200x400?text=ALH+HAKEEM+4',
];

export default function About() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-12 px-4">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Animated Hero Background */}
        <AnimatedHeroBackground images={heroImages} />

        {/* Main Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8">
            Meet ALH HAKEEM OLADIMEJI LAWAL (HOL)
          </h1>

          <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
            <p className="text-lg font-semibold text-blue-900">
              An independent, soft-spoken and dedicated Kwaran with a vision for a greater Kwara State.
            </p>

            <p>
              ALH HAKEEM OLADIMEJI LAWAL is a visionary leader and accomplished professional with extensive experience 
              in finance, investment analysis, and organizational leadership. From Ilorin, Kwara State, HOL has built a 
              distinguished career leveraging global expertise and deep commitment to community development.
            </p>

            <p>
              Currently serving as Chairman of the Awliya Foundation and Chief Executive Officer of Heich and Heich, 
              he brings a wealth of practical business acumen and innovative thinking. His international exposure—having worked 
              as a Financial Analyst at MaxGavlin Consulting UK and Investment Analyst at Amlin Plc UK—combined with his 
              academic excellence, positions him uniquely to drive sustainable development in Kwara State.
            </p>

            <p>
              ALH HAKEEM's track record includes serving as former Chairman of the Finance Committee at the Federal Ministry 
              of Youth & Sports Development, Nigeria, demonstrating his commitment to public service and national development.
            </p>

            <p>
              A married professional who resides in Abuja while maintaining strong ties to his roots in Kwara, ALH HAKEEM 
              combines seasoned business expertise with genuine dedication to improving the lives of Kwarans.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Vision for Kwara</h3>
              <p className="text-lg text-blue-800">
                To build a prosperous, inclusive, and sustainable Kwara State where quality education, 
                economic opportunity, sound governance, and community development create pathways for all 
                citizens to achieve their full potential.
              </p>
            </div>
          </div>
        </div>

        {/* Professional Profile */}
        <section className="grid md:grid-cols-2 gap-8 my-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-amber-600 mb-4">Current Positions</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="mr-3 text-amber-500 font-bold">▪</span>
                <span><strong>Chairman</strong> at Awliya Foundation</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-amber-500 font-bold">▪</span>
                <span><strong>Chief Executive Officer</strong> at Heich and Heich</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-emerald-600 mb-4">Professional Experience</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="mr-3 text-emerald-500 font-bold">▪</span>
                <span>Former Chairman Finance Committee at Federal Ministry of Youth & Sports Development, Nigeria</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-emerald-500 font-bold">▪</span>
                <span>Former Financial Analyst at MaxGavlin Consulting UK</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-emerald-500 font-bold">▪</span>
                <span>Former Investment Analyst at Amlin Plc UK</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Education & Personal */}
        <section className="grid md:grid-cols-2 gap-8 my-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Education</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="mr-3 text-blue-500 font-bold">▪</span>
                <span><strong>MSc International Finance</strong> — University of Surrey</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-blue-500 font-bold">▪</span>
                <span><strong>BA (Hons) Economics</strong> — University of Portsmouth</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-blue-500 font-bold">▪</span>
                <span><strong>Royal Russell School</strong></span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-purple-600 mb-4">Personal</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="mr-3 text-purple-500 font-bold">▪</span>
                <span><strong>From:</strong> Ilorin, Kwara State</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-purple-500 font-bold">▪</span>
                <span><strong>Resides in:</strong> Abuja, Nigeria</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-purple-500 font-bold">▪</span>
                <span><strong>Family Status:</strong> Married</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Core Values */}
        <section className="bg-gradient-to-r from-blue-50 to-emerald-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">Core Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-500 mb-2">🤝</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Dedication</h3>
              <p className="text-gray-700">Committed to serving Kwara with integrity and excellence</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-500 mb-2">🌱</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Innovation</h3>
              <p className="text-gray-700">Combining global expertise with local insight for practical solutions</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-500 mb-2">💡</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Inclusivity</h3>
              <p className="text-gray-700">Ensuring every Kwaran has a voice in shaping our future</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
