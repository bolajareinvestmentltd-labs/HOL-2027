'use client';

import Link from 'next/link';

export default function Analytics() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-gray-900 text-white py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <Link href="/admin" className="text-blue-400 hover:text-blue-300">
            ← Back to Admin
          </Link>
          <h1 className="text-3xl font-bold mt-2">Analytics & Reports</h1>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'Page Views', value: '12,543', icon: '📊' },
            { label: 'Unique Visitors', value: '3,421', icon: '👥' },
            { label: 'Conversions', value: '342', icon: '✅' },
            { label: 'Bounce Rate', value: '32.1%', icon: '📉' },
          ].map((metric, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-3xl mb-2">{metric.icon}</div>
              <p className="text-gray-600 text-sm">{metric.label}</p>
              <p className="text-3xl font-bold text-gray-900">{metric.value}</p>
            </div>
          ))}
        </div>

        {/* Reports Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Page Performance */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Top Pages</h2>
            <div className="space-y-4">
              {[
                { page: 'Home', views: 4523, bounceRate: '28%' },
                { page: 'About', views: 2341, bounceRate: '35%' },
                { page: 'Engage', views: 1823, bounceRate: '42%' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between border-b border-gray-200 pb-3">
                  <span className="text-gray-900">{item.page}</span>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">{item.views}</p>
                    <p className="text-sm text-gray-600">{item.bounceRate}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Engagement Metrics */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Engagement</h2>
            <div className="space-y-4">
              {[
                { metric: 'Total Posts', value: 156 },
                { metric: 'Total Comments', value: 412 },
                { metric: 'Average Upvotes/Post', value: 8.3 },
                { metric: 'Active Users This Week', value: 284 },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between border-b border-gray-200 pb-3">
                  <span className="text-gray-900">{item.metric}</span>
                  <span className="font-semibold text-gray-900">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Export Section */}
        <div className="mt-12 bg-blue-50 border border-blue-300 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Export Reports</h2>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg">
              📥 Download CSV
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg">
              📊 Generate PDF Report
            </button>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg">
              📧 Email Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
