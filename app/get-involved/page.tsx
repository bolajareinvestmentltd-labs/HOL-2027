import VolunteerForm from '@/components/VolunteerForm';

export default function GetInvolved() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-blue-900">
            Be Part of the Movement
          </h1>
          <p className="text-xl text-gray-600">
            Join others who want to contribute their time, skills, and voice toward a better Kwara.
          </p>
        </div>

        {/* How to Get Involved */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Volunteer</h3>
            <p className="text-gray-700 mb-4">
              Dedicate your time and energy to grassroots activities, community engagement, and support.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Community mobilization</li>
              <li>• Event organization</li>
              <li>• Grassroots advocacy</li>
            </ul>
          </div>

          <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
            <h3 className="text-2xl font-bold text-amber-900 mb-4">Mobilization</h3>
            <p className="text-gray-700 mb-4">
              Lead in your community to build awareness, gather support, and coordinate activities.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Community leadership</li>
              <li>• Message amplification</li>
              <li>• Coalition building</li>
            </ul>
          </div>

          <div className="bg-emerald-50 p-6 rounded-lg border-l-4 border-emerald-500">
            <h3 className="text-2xl font-bold text-emerald-900 mb-4">Professional Support</h3>
            <p className="text-gray-700 mb-4">
              Share your expertise in engineering, business, policy, health, education, or other fields.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Technical expertise</li>
              <li>• Strategic advice</li>
              <li>• Policy development</li>
            </ul>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
            <h3 className="text-2xl font-bold text-purple-900 mb-4">Media & Content</h3>
            <p className="text-gray-700 mb-4">
              Help tell our story through photography, videography, writing, social media, or design.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Content creation</li>
              <li>• Social media management</li>
              <li>• Storytelling</li>
            </ul>
          </div>
        </section>

        {/* Volunteer Form */}
        <section className="bg-white p-8 rounded-lg shadow-lg space-y-6">
          <h2 className="text-3xl font-bold text-blue-900">
            Join Our Team
          </h2>
          <p className="text-gray-600">
            Fill out the form below to let us know how you'd like to be part of Kwara Ti Wa Ni.
          </p>
          <VolunteerForm />
        </section>

        {/* Benefits */}
        <section className="bg-gradient-to-r from-blue-50 to-emerald-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Why Join Us?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Make a Difference</h3>
              <p className="text-gray-700">Be part of meaningful change in Kwara State</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Build Connections</h3>
              <p className="text-gray-700">Network with like-minded leaders and professionals</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Grow Your Skills</h3>
              <p className="text-gray-700">Develop leadership and professional capabilities</p>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <div className="bg-blue-900 text-white p-8 rounded-lg text-center space-y-4">
          <h3 className="text-2xl font-bold">Have Questions?</h3>
          <p className="text-lg">
            Reach out to our team for more information about getting involved.
          </p>
          <div className="space-y-2">
            <p>Email: <span className="font-semibold">info@kwaratiwani.com</span></p>
            <p>Phone: <span className="font-semibold">+234 XXX XXX XXXX</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}
