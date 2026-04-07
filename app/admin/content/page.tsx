'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function ContentManagement() {
  const [contentType, setContentType] = useState<'newsroom' | 'legacy' | 'team'>('newsroom');

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-gray-900 text-white py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <Link href="/admin" className="text-blue-400 hover:text-blue-300">
            ← Back to Admin
          </Link>
          <h1 className="text-3xl font-bold mt-2">Content Management</h1>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Content Type Tabs */}
        <div className="flex gap-4 mb-8 flex-wrap">
          {[
            { id: 'newsroom', label: '📰 Newsroom' },
            { id: 'legacy', label: '📜 Legacy' },
            { id: 'team', label: '👥 Team Members' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setContentType(tab.id as any)}
              className={`px-6 py-3 rounded-lg font-semibold transition ${
                contentType === tab.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-800 hover:bg-gray-50 border border-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Content List */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                {contentType === 'newsroom'
                  ? 'Newsroom'
                  : contentType === 'legacy'
                    ? 'Legacy Items'
                    : 'Team Members'}
              </h2>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
                + New
              </button>
            </div>

            <div className="space-y-4">
              {contentType === 'newsroom' && (
                <>
                  <ContentItem title="Economic Development Initiative" date="Apr 5, 2026" />
                  <ContentItem title="Major Endorsement from Business Leaders" date="Apr 1, 2026" />
                </>
              )}
              {contentType === 'legacy' && (
                <>
                  <ContentItem title="Biography of Rear Admiral Lawal" date="Updated" />
                  <ContentItem title="Historical Speeches" date="Archived" />
                </>
              )}
              {contentType === 'team' && (
                <>
                  <ContentItem title="Hakeem Lawal - Campaign Lead" date="Profile" />
                  <ContentItem title="Aisha Bello - Campaign Director" date="Profile" />
                </>
              )}
            </div>
          </div>

          {/* Action Panel */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
              <div className="space-y-3">
                <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition">
                  + Add New Content
                </button>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition">
                  Import Content
                </button>
                <button className="w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 rounded-lg transition">
                  View Published
                </button>
              </div>

              <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-300">
                <p className="text-sm text-blue-800">
                  <strong>Tip:</strong> All content changes are saved to the database and can be reverted from the audit log.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContentItem({ title, date }: { title: string; date: string }) {
  return (
    <div className="border border-gray-300 rounded-lg p-4 hover:bg-gray-50 transition cursor-pointer">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-600">{date}</p>
        </div>
        <div className="flex gap-2">
          <button className="text-blue-600 hover:text-blue-800 font-semibold">Edit</button>
          <button className="text-red-600 hover:text-red-800 font-semibold">Delete</button>
        </div>
      </div>
    </div>
  );
}
