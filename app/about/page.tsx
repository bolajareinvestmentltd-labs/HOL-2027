import AnimatedHeroBackground from '@/components/AnimatedHeroBackground';

// Placeholder images - user should replace with actual images
const heroImages = [
  'https://via.placeholder.com/1200x400?text=Engr+Olufemi+1',
  'https://via.placeholder.com/1200x400?text=Engr+Olufemi+2',
  'https://via.placeholder.com/1200x400?text=Engr+Olufemi+3',
  'https://via.placeholder.com/1200x400?text=Engr+Olufemi+4',
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
            The Man Behind "Kwara Ti Wa Ni"
          </h1>

          <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
            <p>
              Engr. Olufemi Sanni, FNICE, FNSE — widely known as ARABA — is a seasoned civil engineer, 
              entrepreneur, and community-minded leader with over 37 years of experience spanning 
              engineering, business management, media, energy, insurance, telecommunications, and sports development.
            </p>

            <p>
              A COREN-registered engineer and Fellow of the Nigerian Institution of Civil Engineers, 
              he holds a B.Eng. in Civil Engineering from the University of Ilorin.
            </p>

            <p>
              Before deepening his footprint in Nigeria, he established business roots in Canada through 
              TECHNOplus Communications Inc. in Toronto, gaining global exposure that continues to influence 
              his development approach.
            </p>

            <p>
              Across sectors and communities, his work has consistently focused on empowering people, 
              strengthening systems, and building sustainable platforms for growth.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Vision Statement</h3>
              <p className="text-lg text-blue-800">
                To build a Kwara State where every citizen has access to quality education, meaningful 
                employment, reliable infrastructure, and secure communities — a state that thrives on 
                innovation, inclusivity, and sustainable development.
              </p>
            </div>
          </div>
        </div>

        {/* Experience Highlights */}
        <section className="grid md:grid-cols-2 gap-8 my-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-amber-600 mb-4">Professional Background</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="mr-3 text-amber-500 font-bold">•</span>
                <span>Civil Engineer (37+ years experience)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-amber-500 font-bold">•</span>
                <span>COREN Registered Engineer</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-amber-500 font-bold">•</span>
                <span>Fellow of Nigerian Institution of Civil Engineers</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-amber-500 font-bold">•</span>
                <span>Entrepreneur & Business Manager</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-amber-500 font-bold">•</span>
                <span>International Business Experience (Canada)</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-emerald-600 mb-4">Areas of Expertise</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="mr-3 text-emerald-500 font-bold">•</span>
                <span>Infrastructure Development</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-emerald-500 font-bold">•</span>
                <span>Project Management</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-emerald-500 font-bold">•</span>
                <span>Energy & Utilities</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-emerald-500 font-bold">•</span>
                <span>Telecommunications</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-emerald-500 font-bold">•</span>
                <span>Community Development & Sports</span>
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
              <h3 className="text-xl font-bold text-gray-800 mb-2">People First</h3>
              <p className="text-gray-700">Every policy and decision is centered on improving lives</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-500 mb-2">🌱</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Sustainability</h3>
              <p className="text-gray-700">Building systems that endure and create lasting impact</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-500 mb-2">💡</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Innovation</h3>
              <p className="text-gray-700">Leveraging technology and fresh ideas for progress</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
