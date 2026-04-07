'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function AdminPage() {
  const [stats] = useState({
    totalFlags: 12,
    pendingReview: 8,
    totalUsers: 342,
    totalPosts: 156,
  });

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Admin Header */}
      <header className="bg-gray-900 text-white py-6 px-4 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-gray-300 mt-2">Campaign management and moderation center</p>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <StatCard label="Pending Flags" value={stats.pendingReview} color="red" />
          <StatCard label="Total Flags" value={stats.totalFlags} color="orange" />
          <StatCard label="Community Users" value={stats.totalUsers} color="blue" />
          <StatCard label="Total Posts" value={stats.totalPosts} color="green" />
        </div>

        {/* Admin Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Moderation */}
          <Link
            href="/admin/moderation"
            className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl hover:bg-gray-50 transition"
          >
            <div className="text-4xl mb-4">⚖️</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Moderation Dashboard</h2>
            <p className="text-gray-600">
              Review flagged content, manage user suspensions, and enforce community guidelines
            </p>
            <div className="mt-4 text-indigo-600 font-semibold">View Dashboard →</div>
          </Link>

          {/* Content Management */}
          <Link
            href="/admin/content"
            className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl hover:bg-gray-50 transition"
          >
            <div className="text-4xl mb-4">📝</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Content Management</h2>
            <p className="text-gray-600">
              Edit newsroom articles, legacy items, team bios, and site content
            </p>
            <div className="mt-4 text-indigo-600 font-semibold">Manage Content →</div>
          </Link>

          {/* Event Management */}
          <Link
            href="/admin/events"
            className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl hover:bg-gray-50 transition"
          >
            <div className="text-4xl mb-4">📅</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Event Management</h2>
            <p className="text-gray-600">
              Create events, manage RSVPs, and track attendance
            </p>
            <div className="mt-4 text-indigo-600 font-semibold">Manage Events →</div>
          </Link>

          {/* User Management */}
          <Link
            href="/admin/users"
            className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl hover:bg-gray-50 transition"
          >
            <div className="text-4xl mb-4">👥</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">User Management</h2>
            <p className="text-gray-600">
              Manage user roles, verify badges, and review registrations
            </p>
            <div className="mt-4 text-indigo-600 font-semibold">Manage Users →</div>
          </Link>

          {/* Analytics */}
          <Link
            href="/admin/analytics"
            className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl hover:bg-gray-50 transition"
          >
            <div className="text-4xl mb-4">📊</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Analytics & Reports</h2>
            <p className="text-gray-600">
              View site analytics, engagement metrics, and export reports
            </p>
            <div className="mt-4 text-indigo-600 font-semibold">View Analytics →</div>
          </Link>

          {/* Settings */}
          <Link
            href="/admin/settings"
            className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl hover:bg-gray-50 transition"
          >
            <div className="text-4xl mb-4">⚙️</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Settings</h2>
            <p className="text-gray-600">
              Configure site settings, moderation policies, and team members
            </p>
            <div className="mt-4 text-indigo-600 font-semibold">Go to Settings →</div>
          </Link>
        </div>

        {/* Audit Log Preview */}
        <section className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Activity</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-gray-600">
              <thead className="border-b border-gray-300">
                <tr>
                  <th className="pb-3 font-semibold">Action</th>
                  <th className="pb-3 font-semibold">Actor</th>
                  <th className="pb-3 font-semibold">Target</th>
                  <th className="pb-3 font-semibold">Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3">Post removed</td>
                  <td>Moderator</td>
                  <td>Post #145</td>
                  <td>2 hours ago</td>
                </tr>
                <tr>
                  <td className="py-3">Content edited</td>
                  <td>Editor</td>
                  <td>News item #8</td>
                  <td>Yesterday</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}

function StatCard({ label, value, color }: { label: string; value: number; color: string }) {
  const colorClasses = {
    red: 'bg-red-100 text-red-800',
    orange: 'bg-orange-100 text-orange-800',
    blue: 'bg-blue-100 text-blue-800',
    green: 'bg-green-100 text-green-800',
  };

  const bgClass = colorClasses[color as keyof typeof colorClasses];

  return (
    <div className={`${bgClass} rounded-lg p-6 text-center`}>
      <div className="text-4xl font-bold">{value}</div>
      <div className="text-sm font-semibold mt-2">{label}</div>
    </div>
  );
}

function SubmissionsManager() {
      setError('Error fetching submissions');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const exportAsCSV = async () => {
    try {
      const response = await fetch(
        `/api/admin/submissions?type=${activeTab}&format=csv`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${activeTab}_${new Date().toISOString()}.csv`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      }
    } catch (err) {
      console.error('Error exporting CSV:', err);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-800 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full">
          <h1 className="text-3xl font-bold text-blue-900 mb-6 text-center">Admin Dashboard</h1>
          <p className="text-gray-600 mb-6 text-center">
            Enter your admin token to access the dashboard.
          </p>
          <button
            onClick={handleLogin}
            className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 rounded-lg transition"
          >
            Login
          </button>
          <p className="text-xs text-gray-500 mt-4 text-center">
            Token should be provided by the administrator.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-blue-900">Admin Dashboard</h1>
          <button
            onClick={() => {
              setIsAuthenticated(false);
              setAuthToken('');
            }}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>

        {/* Tabs */}
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setActiveTab('volunteers')}
            className={`px-6 py-2 rounded font-semibold transition ${
              activeTab === 'volunteers'
                ? 'bg-blue-900 text-white'
                : 'bg-white text-blue-900 border border-blue-900'
            }`}
          >
            Volunteers ({submissions.filter((s) => 'support_type' in s).length})
          </button>
          <button
            onClick={() => setActiveTab('ideas')}
            className={`px-6 py-2 rounded font-semibold transition ${
              activeTab === 'ideas'
                ? 'bg-blue-900 text-white'
                : 'bg-white text-blue-900 border border-blue-900'
            }`}
          >
            Ideas ({submissions.filter((s) => 'question_suggestion' in s).length})
          </button>
        </div>

        {/* Export Button */}
        <div className="mb-6">
          <button
            onClick={exportAsCSV}
            disabled={submissions.length === 0}
            className="bg-emerald-500 hover:bg-emerald-600 disabled:bg-gray-400 text-white font-bold py-2 px-6 rounded transition"
          >
            Export as CSV
          </button>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}

        {/* Loading */}
        {loading && (
          <div className="text-center py-8">
            <p className="text-gray-600">Loading submissions...</p>
          </div>
        )}

        {/* Submissions Table */}
        {!loading && submissions.length > 0 && (
          <div className="bg-white rounded-lg shadow overflow-x-auto">
            <table className="w-full">
              <thead className="bg-blue-900 text-white">
                <tr>
                  {activeTab === 'volunteers' ? (
                    <>
                      <th className="px-6 py-3 text-left text-sm font-semibold">ID</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold">Full Name</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold">LGA</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold">Email</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold">Support Type</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold">Date</th>
                    </>
                  ) : (
                    <>
                      <th className="px-6 py-3 text-left text-sm font-semibold">ID</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold">Name</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold">LGA</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold">Question/Suggestion</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold">Date</th>
                    </>
                  )}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {submissions.map((submission, index) => (
                  <tr key={submission.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    {activeTab === 'volunteers' ? (
                      <>
                        <td className="px-6 py-4 text-sm text-gray-700">{submission.id}</td>
                        <td className="px-6 py-4 text-sm text-gray-700">{submission.full_name}</td>
                        <td className="px-6 py-4 text-sm text-gray-700">{submission.lga}</td>
                        <td className="px-6 py-4 text-sm text-gray-700">{submission.email_address}</td>
                        <td className="px-6 py-4 text-sm text-gray-700">{submission.support_type}</td>
                        <td className="px-6 py-4 text-sm text-gray-700">
                          {new Date(submission.created_at).toLocaleDateString()}
                        </td>
                      </>
                    ) : (
                      <>
                        <td className="px-6 py-4 text-sm text-gray-700">{submission.id}</td>
                        <td className="px-6 py-4 text-sm text-gray-700">{submission.name || 'Anonymous'}</td>
                        <td className="px-6 py-4 text-sm text-gray-700">{submission.lga}</td>
                        <td className="px-6 py-4 text-sm text-gray-700 truncate">
                          {submission.question_suggestion}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">
                          {new Date(submission.created_at).toLocaleDateString()}
                        </td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Empty State */}
        {!loading && submissions.length === 0 && (
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <p className="text-gray-600">No submissions yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
