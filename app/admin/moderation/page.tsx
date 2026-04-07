'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function ModerationDashboard() {
  const [selectedFlag, setSelectedFlag] = useState<number | null>(null);
  const [action, setAction] = useState<string>('');

  const flags = [
    {
      id: 1,
      type: 'Post',
      reason: 'False claims',
      reporter: 'anon_user_45',
      content: 'Misleading statement about opponent',
      status: 'open',
      created: '2 hours ago',
    },
    {
      id: 2,
      type: 'Comment',
      reason: 'Harassment',
      reporter: 'verified_user',
      content: 'Personal attack on team member',
      status: 'open',
      created: '4 hours ago',
    },
    {
      id: 3,
      type: 'Post',
      reason: 'Spam',
      reporter: 'system',
      content: 'Repeated promotional links',
      status: 'investigating',
      created: '1 day ago',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-gray-900 text-white py-6 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <Link href="/admin" className="text-blue-400 hover:text-blue-300">
              ← Back to Admin
            </Link>
            <h1 className="text-3xl font-bold mt-2">Moderation Dashboard</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Flags List */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Flagged Content</h2>
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full font-semibold">
                  {flags.length} flags
                </span>
              </div>

              {/* Filter Buttons */}
              <div className="flex gap-2 mb-6 flex-wrap">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">
                  All
                </button>
                <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg font-semibold hover:bg-gray-300">
                  Open
                </button>
                <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg font-semibold hover:bg-gray-300">
                  Investigating
                </button>
                <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg font-semibold hover:bg-gray-300">
                  Resolved
                </button>
              </div>

              {/* Flags */}
              <div className="space-y-4">
                {flags.map((flag) => (
                  <div
                    key={flag.id}
                    onClick={() => setSelectedFlag(flag.id)}
                    className={`border-2 rounded-lg p-4 cursor-pointer transition ${
                      selectedFlag === flag.id
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <span className="inline-block bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-bold mr-2">
                          {flag.type}
                        </span>
                        <span className="inline-block bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-bold">
                          {flag.reason}
                        </span>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        flag.status === 'open'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {flag.status}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-2">{flag.content}</p>
                    <p className="text-gray-500 text-sm">
                      Reported by {flag.reporter} • {flag.created}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Panel */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Moderation Action</h2>

              {selectedFlag ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-900 font-bold mb-3">Select Action:</label>
                    <div className="space-y-2">
                      {[
                        { value: 'no_action', label: 'No Action', color: 'green' },
                        { value: 'warning', label: 'Send Warning', color: 'yellow' },
                        { value: 'edit', label: 'Edit Content', color: 'blue' },
                        { value: 'remove', label: 'Remove Content', color: 'orange' },
                        { value: 'suspend', label: 'Suspend User (24-72h)', color: 'red' },
                        { value: 'ban', label: 'Ban User', color: 'darkred' },
                      ].map((opt) => (
                        <button
                          key={opt.value}
                          onClick={() => setAction(opt.value)}
                          className={`w-full text-left px-4 py-3 rounded-lg font-semibold transition ${
                            action === opt.value
                              ? 'bg-gray-900 text-white'
                              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {action && (
                    <div className="mt-6 pt-6 border-t border-gray-300">
                      <label className="block text-gray-900 font-bold mb-3">Reason/Notes:</label>
                      <textarea
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-600"
                        rows={4}
                        placeholder="Document your moderation decision..."
                      ></textarea>
                      <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition">
                        Submit Action
                      </button>
                    </div>
                  )}

                  {!action && (
                    <div className="bg-blue-50 border border-blue-300 rounded-lg p-4 text-sm text-blue-800">
                      Select an action above to moderate this content
                    </div>
                  )}
                </div>
              ) : (
                <div className="bg-gray-100 border border-gray-300 rounded-lg p-4 text-center text-gray-600">
                  Select a flagged item to take action
                </div>
              )}
            </div>

            {/* Moderation Policy */}
            <div className="bg-gray-50 rounded-lg p-6 mt-6">
              <h3 className="font-bold text-gray-900 mb-3">Moderation SOP</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ Review within 24 hours</li>
                <li>✓ Document all actions</li>
                <li>✓ Escalate legal issues</li>
                <li>✓ Maintain user privacy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
