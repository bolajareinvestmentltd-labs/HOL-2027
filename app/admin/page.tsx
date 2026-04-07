'use client';

import { useState, useEffect } from 'react';

interface Submission {
  id: number;
  full_name?: string;
  name?: string;
  lga: string;
  created_at: string;
  [key: string]: any;
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'volunteers' | 'ideas'>('volunteers');
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [authToken, setAuthToken] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    // Simple authentication - in production, use proper auth
    const token = prompt('Enter admin token:');
    if (token) {
      setAuthToken(token);
      setIsAuthenticated(true);
    }
  };

  useEffect(() => {
    if (isAuthenticated && authToken) {
      fetchSubmissions();
    }
  }, [activeTab, isAuthenticated, authToken]);

  const fetchSubmissions = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(
        `/api/admin/submissions?type=${activeTab}`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setSubmissions(data);
      } else if (response.status === 401) {
        setError('Unauthorized. Invalid token.');
        setIsAuthenticated(false);
      } else {
        setError('Failed to fetch submissions');
      }
    } catch (err) {
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
