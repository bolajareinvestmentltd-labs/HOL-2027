'use client';

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-800 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Admin Dashboard</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Stats Cards */}
          <StatCard label="Total Posts" value={0} color="blue" />
          <StatCard label="Flagged Content" value={0} color="red" />
          <StatCard label="Active Users" value={0} color="green" />
          <StatCard label="Events" value={0} color="amber" />
          <StatCard label="Comments" value={0} color="purple" />
          <StatCard label="Reports" value={0} color="orange" />
        </div>

        {/* Admin Sections */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <AdminSection title="Content Moderation" description="Review and manage flagged content across the platform" />
          <AdminSection title="User Management" description="Manage user accounts, roles, and permissions" />
          <AdminSection title="Events Management" description="Create and manage campaign events" />
          <AdminSection title="Reports & Analytics" description="View detailed analytics and reports" />
        </div>

        {/* Setup Notice */}
        <div className="mt-12 bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
          <h3 className="text-lg font-bold text-blue-900 mb-2">⚙️ Setup Incomplete</h3>
          <p className="text-blue-800">
            To enable full admin features, configure authentication (Clerk) in your environment variables.
            Dashboard will auto-populate with data once API routes are connected.
          </p>
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value, color }: { label: string; value: number; color: string }) {
  const colorClasses: Record<string, string> = {
    red: 'bg-red-100 text-red-800',
    orange: 'bg-orange-100 text-orange-800',
    blue: 'bg-blue-100 text-blue-800',
    green: 'bg-green-100 text-green-800',
    purple: 'bg-purple-100 text-purple-800',
    amber: 'bg-amber-100 text-amber-800',
  };

  return (
    <div className={`${colorClasses[color]} rounded-lg p-6 text-center`}>
      <div className="text-4xl font-bold">{value}</div>
      <div className="text-sm font-semibold mt-2">{label}</div>
    </div>
  );
}

function AdminSection({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-2xl font-bold text-blue-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <button className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded transition">
        Access →
      </button>
    </div>
  );
}
