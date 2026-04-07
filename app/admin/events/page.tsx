'use client';

import Link from 'next/link';

export default function EventManagement() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-gray-900 text-white py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <Link href="/admin" className="text-blue-400 hover:text-blue-300">
            ← Back to Admin
          </Link>
          <h1 className="text-3xl font-bold mt-2">Event Management</h1>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Events List */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Upcoming Events</h2>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
                + Create Event
              </button>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: 'Town Hall Meeting - Ilorin',
                  date: 'April 15, 2026',
                  location: 'Ilorin Central',
                  rsvps: 245,
                },
                {
                  title: 'Community Forum - Kwara North',
                  date: 'April 20, 2026',
                  location: 'Kwara North LGA',
                  rsvps: 128,
                },
              ].map((event, idx) => (
                <div key={idx} className="border border-gray-300 rounded-lg p-4 hover:bg-gray-50 transition">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg">{event.title}</h3>
                      <p className="text-gray-600 text-sm mt-1">📅 {event.date}</p>
                      <p className="text-gray-600 text-sm">📍 {event.location}</p>
                      <p className="text-blue-600 font-semibold mt-2">{event.rsvps} RSVPs</p>
                    </div>
                    <div className="flex gap-2">
                      <button className="text-blue-600 hover:text-blue-800 font-semibold">Edit</button>
                      <button className="text-green-600 hover:text-green-800 font-semibold">View RSVPs</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="lg:col-span-1 bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
            <div className="space-y-3">
              <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition">
                + New Event
              </button>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition">
                Export RSVPs
              </button>
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-lg transition">
                Analytics
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
