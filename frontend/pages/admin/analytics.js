import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import AdminLayout from '../../components/AdminLayout';
import axios from 'axios';

export default function AdminAnalytics() {
  const router = useRouter();
  const [contacts, setContacts] = useState([]);
  const [analytics, setAnalytics] = useState({
    byService: {},
    byStatus: {},
    byDate: {},
    totalConversions: 0,
    conversionRate: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
      return;
    }

    fetchAnalytics();
    const interval = setInterval(fetchAnalytics, 10000);
    return () => clearInterval(interval);
  }, []);

  const fetchAnalytics = async () => {
    try {
      const response = await axios.get('/api/contacts');
      const data = response.data || [];
      setContacts(data);

      // Calculate analytics
      const byService = {};
      const byStatus = {};
      const byDate = {};

      data.forEach((contact) => {
        // By Service
        byService[contact.service] = (byService[contact.service] || 0) + 1;

        // By Status
        byStatus[contact.status] = (byStatus[contact.status] || 0) + 1;

        // By Date
        const date = new Date(contact.created_at).toLocaleDateString();
        byDate[date] = (byDate[date] || 0) + 1;
      });

      const completed = byStatus['completed'] || 0;
      const total = data.length;
      const conversionRate = total > 0 ? ((completed / total) * 100).toFixed(2) : 0;

      setAnalytics({
        byService,
        byStatus,
        byDate,
        totalConversions: completed,
        conversionRate,
      });

      setLoading(false);
    } catch (err) {
      console.error('Failed to fetch analytics', err);
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminEmail');
    router.push('/admin/login');
  };

  return (
    <>
      <Head>
        <title>Analytics - Luxury Construction</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <AdminLayout onLogout={handleLogout}>
        <div className="space-y-6">
          {/* Header */}
          <div>
            <h1 className="text-3xl font-bold text-white">Analytics</h1>
            <p className="text-slate-400 mt-1">Track inquiries and conversion metrics</p>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <p className="text-slate-400">Loading analytics...</p>
            </div>
          ) : (
            <>
              {/* Key Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <MetricCard
                  label="Total Inquiries"
                  value={contacts.length}
                  change="+12%"
                  icon="📊"
                />
                <MetricCard
                  label="Completed Conversions"
                  value={analytics.totalConversions}
                  change={`${analytics.conversionRate}%`}
                  icon="✅"
                />
                <MetricCard
                  label="Conversion Rate"
                  value={`${analytics.conversionRate}%`}
                  change="Last 30 days"
                  icon="📈"
                />
              </div>

              {/* Charts Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Inquiries by Service */}
                <div className="bg-slate-800 rounded-lg border border-slate-700 p-6">
                  <h2 className="text-xl font-bold text-white mb-4">
                    Inquiries by Service
                  </h2>
                  <div className="space-y-3">
                    {Object.entries(analytics.byService)
                      .sort(([, a], [, b]) => b - a)
                      .map(([service, count]) => (
                        <div key={service}>
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm text-slate-300">{service}</span>
                            <span className="text-sm font-bold text-white">
                              {count}
                            </span>
                          </div>
                          <div className="w-full bg-slate-700 rounded-full h-2">
                            <div
                              className="bg-amber-500 h-2 rounded-full transition-all"
                              style={{
                                width: `${
                                  (count / Math.max(...Object.values(analytics.byService))) *
                                  100
                                }%`,
                              }}
                            />
                          </div>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Status Distribution */}
                <div className="bg-slate-800 rounded-lg border border-slate-700 p-6">
                  <h2 className="text-xl font-bold text-white mb-4">
                    Status Distribution
                  </h2>
                  <div className="space-y-3">
                    {[
                      { status: 'new', color: 'bg-green-500', label: 'New' },
                      { status: 'contacted', color: 'bg-yellow-500', label: 'Contacted' },
                      { status: 'completed', color: 'bg-purple-500', label: 'Completed' },
                    ].map(({ status, color, label }) => (
                      <div key={status}>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm text-slate-300">{label}</span>
                          <span className="text-sm font-bold text-white">
                            {analytics.byStatus[status] || 0}
                          </span>
                        </div>
                        <div className="w-full bg-slate-700 rounded-full h-2">
                          <div
                            className={`${color} h-2 rounded-full transition-all`}
                            style={{
                              width: `${
                                (
                                  ((analytics.byStatus[status] || 0) /
                                    contacts.length) *
                                  100
                                ).toFixed(0)
                              }%`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-slate-800 rounded-lg border border-slate-700 p-6">
                <h2 className="text-xl font-bold text-white mb-4">Recent Activity</h2>
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {contacts.slice(0, 10).map((contact) => (
                    <div
                      key={contact.id}
                      className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg"
                    >
                      <div>
                        <p className="text-sm font-medium text-white">
                          {contact.name} inquired about {contact.service}
                        </p>
                        <p className="text-xs text-slate-400">
                          {new Date(contact.created_at).toLocaleString()}
                        </p>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          contact.status === 'new'
                            ? 'bg-green-500/20 text-green-400'
                            : contact.status === 'contacted'
                            ? 'bg-yellow-500/20 text-yellow-400'
                            : 'bg-purple-500/20 text-purple-400'
                        }`}
                      >
                        {contact.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </AdminLayout>
    </>
  );
}

function MetricCard({ label, value, change, icon }) {
  return (
    <div className="bg-slate-800 rounded-lg border border-slate-700 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-slate-400 text-sm">{label}</p>
          <p className="text-3xl font-bold text-white mt-2">{value}</p>
          <p className="text-xs text-slate-400 mt-2">{change}</p>
        </div>
        <div className="text-4xl">{icon}</div>
      </div>
    </div>
  );
}
