'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function AdminSettings() {
  const [activeSection, setActiveSection] = useState<'general' | 'moderation' | 'team'>('general');

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-gray-900 text-white py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <Link href="/admin" className="text-blue-400 hover:text-blue-300">
            ← Back to Admin
          </Link>
          <h1 className="text-3xl font-bold mt-2">Settings</h1>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Settings Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-20">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Settings</h2>
              <div className="space-y-2">
                {[
                  { id: 'general', label: 'General Settings' },
                  { id: 'moderation', label: 'Moderation Policy' },
                  { id: 'team', label: 'Team Configuration' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id as any)}
                    className={`w-full text-left px-4 py-2 rounded-lg font-semibold transition ${
                      activeSection === item.id
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Settings Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-lg p-8">
              {activeSection === 'general' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">General Settings</h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-gray-900 font-bold mb-2">Site Name</label>
                      <input
                        type="text"
                        defaultValue="HOL 2027"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-600"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-900 font-bold mb-2">Site Tagline</label>
                      <input
                        type="text"
                        defaultValue="Legacy of Service, Future for Kwara"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-600"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-900 font-bold mb-2">Contact Email</label>
                      <input
                        type="email"
                        defaultValue="contact@hol2027.ng"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-600"
                      />
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg">
                      Save Changes
                    </button>
                  </div>
                </div>
              )}

              {activeSection === 'moderation' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Moderation Policy</h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-gray-900 font-bold mb-2">Auto-Flag Keywords</label>
                      <textarea
                        defaultValue="hate, spam, abuse"
                        rows={4}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-600"
                      ></textarea>
                    </div>
                    <div>
                      <label className="flex items-center">
                        <input type="checkbox" defaultChecked className="w-4 h-4 mr-2" />
                        <span className="text-gray-900">Enable comment moderation</span>
                      </label>
                    </div>
                    <div>
                      <label className="flex items-center">
                        <input type="checkbox" defaultChecked className="w-4 h-4 mr-2" />
                        <span className="text-gray-900">Enable post approval queue</span>
                      </label>
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg">
                      Save Changes
                    </button>
                  </div>
                </div>
              )}

              {activeSection === 'team' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Team Roles & Permissions</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead className="border-b border-gray-300">
                        <tr>
                          <th className="pb-3 font-semibold">Role</th>
                          <th className="pb-3 font-semibold">Permissions</th>
                          <th className="pb-3 font-semibold">Members</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y border-gray-200">
                        <tr>
                          <td className="py-3">Admin</td>
                          <td className="py-3">Full access</td>
                          <td className="py-3">1</td>
                        </tr>
                        <tr>
                          <td className="py-3">Moderator</td>
                          <td className="py-3">Moderation, Content review</td>
                          <td className="py-3">3</td>
                        </tr>
                        <tr>
                          <td className="py-3">Volunteer</td>
                          <td className="py-3">Post, Comment, RSVP</td>
                          <td className="py-3">342</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg">
                    Manage Team Members
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
