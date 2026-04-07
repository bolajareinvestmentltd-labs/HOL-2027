'use client';

import Link from 'next/link';

export default function UserManagement() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-gray-900 text-white py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <Link href="/admin" className="text-blue-400 hover:text-blue-300">
            ← Back to Admin
          </Link>
          <h1 className="text-3xl font-bold mt-2">User Management</h1>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Registered Users</h2>
            <input
              type="text"
              placeholder="Search users..."
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-600"
            />
          </div>

          {/* User Filters */}
          <div className="flex gap-2 mb-6 flex-wrap">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold">All</button>
            <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg font-semibold hover:bg-gray-300">
              Verified
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg font-semibold hover:bg-gray-300">
              Suspended
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg font-semibold hover:bg-gray-300">
              Moderators
            </button>
          </div>

          {/* Users Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="border-b border-gray-300 bg-gray-50">
                <tr>
                  <th className="px-4 py-3 font-semibold text-gray-900">Name</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">Email</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">Role</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">Status</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  { name: 'Amina Lawal', email: 'amina@example.com', role: 'Volunteer', status: 'Active' },
                  { name: 'Toyin Okafor', email: 'toyin@example.com', role: 'Moderator', status: 'Active' },
                  {
                    name: 'Sadiq Hassan',
                    email: 'sadiq@example.com',
                    role: 'Volunteer',
                    status: 'Suspended',
                  },
                ].map((user, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-gray-900">{user.name}</td>
                    <td className="px-4 py-3 text-gray-600">{user.email}</td>
                    <td className="px-4 py-3">
                      <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-semibold">
                        {user.role}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-block px-2 py-1 rounded text-sm font-semibold ${
                          user.status === 'Active'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <button className="text-blue-600 hover:text-blue-800 font-semibold mr-3">Edit</button>
                      <button className="text-red-600 hover:text-red-800 font-semibold">Ban</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
