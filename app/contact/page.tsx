'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formType, setFormType] = useState<'general' | 'media'>('general');

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="bg-indigo-700 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-indigo-100">
            Get in touch with the campaign
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Get in Touch</h2>

            <div className="space-y-8">
              <div className="border-l-4 border-indigo-600 pl-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Media Inquiries</h3>
                <p className="text-gray-700 mb-2">For press releases and media coverage:</p>
                <p className="text-indigo-600 font-semibold">media@hol2027.ng</p>
              </div>

              <div className="border-l-4 border-green-600 pl-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">General Inquiries</h3>
                <p className="text-gray-700 mb-2">For campaign information:</p>
                <p className="text-green-600 font-semibold">contact@hol2027.ng</p>
              </div>

              <div className="border-l-4 border-amber-600 pl-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Volunteer Coordination</h3>
                <p className="text-gray-700 mb-2">To get involved:</p>
                <p className="text-amber-600 font-semibold">volunteers@hol2027.ng</p>
              </div>

              <div className="border-l-4 border-purple-600 pl-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Follow Us</h3>
                <div className="flex gap-4 mt-3">
                  <a href="#" className="text-purple-600 hover:text-purple-800 font-semibold">
                    Twitter
                  </a>
                  <a href="#" className="text-purple-600 hover:text-purple-800 font-semibold">
                    Facebook
                  </a>
                  <a href="#" className="text-purple-600 hover:text-purple-800 font-semibold">
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Send us a Message</h2>

            {/* Form Type Tabs */}
            <div className="flex gap-4 mb-8">
              <button
                onClick={() => setFormType('general')}
                className={`px-6 py-2 rounded-lg font-semibold transition ${
                  formType === 'general'
                    ? 'bg-indigo-700 text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                General
              </button>
              <button
                onClick={() => setFormType('media')}
                className={`px-6 py-2 rounded-lg font-semibold transition ${
                  formType === 'media'
                    ? 'bg-indigo-700 text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                Media
              </button>
            </div>

            {/* Form */}
            <form className="space-y-6">
              <div>
                <label className="block text-gray-900 font-bold mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-indigo-600"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-gray-900 font-bold mb-2">Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-indigo-600"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-gray-900 font-bold mb-2">Message</label>
                <textarea
                  rows={6}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-indigo-600"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-3 rounded-lg transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
