import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import AdminLayout from '../../components/AdminLayout';
import axios from 'axios';

function AdminDashboard() {
  const router = useRouter();
  const [contacts, setContacts] = useState([]);
  const [stats, setStats] = useState({
    total: 0,
    new: 0,
    contacted: 0,
    completed: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedContact, setSelectedContact] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [wsConnected, setWsConnected] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
      return;
    }

    fetchContacts();
    setupWebSocket();
    const interval = setInterval(fetchContacts, 5000);
    return () => clearInterval(interval);
  }, []);

  const setupWebSocket = () => {
    try {
      const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
      const ws = new WebSocket(`${protocol}//${window.location.host}/api/ws`);

      ws.onopen = () => {
        setWsConnected(true);
      };

      ws.onmessage = (event) => {
        try {
          const message = JSON.parse(event.data);
          if (message.type === 'contact_update') {
            fetchContacts();
          }
        } catch (err) {
          console.error('Failed to parse WebSocket message:', err);
        }
      };

      ws.onerror = (err) => {
        console.error('WebSocket error:', err);
        setWsConnected(false);
      };

      ws.onclose = () => {
        setWsConnected(false);
        setTimeout(setupWebSocket, 3000);
      };

      return ws;
    } catch (err) {
      console.error('Failed to setup WebSocket:', err);
    }
  };

  const fetchContacts = async () => {
    try {
      const response = await axios.get('/api/contacts');
      const data = response.data || [];
      setContacts(data);

      const newCount = data.filter((c) => c.status === 'new').length;
      const contactedCount = data.filter((c) => c.status === 'contacted').length;
      const completedCount = data.filter((c) => c.status === 'completed').length;

      setStats({
        total: data.length,
        new: newCount,
        contacted: contactedCount,
        completed: completedCount,
      });

      setError('');
    } catch (err) {
      setError('Failed to fetch contacts');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      await axios.put(`/api/contacts/${id}`, { status: newStatus });
      fetchContacts();
    } catch (err) {
      setError('Failed to update contact status');
    }
  };

  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this contact?')) {
      try {
        await axios.delete(`/api/contacts/${id}`);
        fetchContacts();
      } catch (err) {
        setError('Failed to delete contact');
      }
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
        <title>Admin Dashboard - Luxury Construction</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <AdminLayout onLogout={handleLogout}>
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-white">Dashboard</h1>
              <p className="text-slate-400 mt-1">Manage customer inquiries and track leads</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                wsConnected 
                  ? 'bg-green-500/20 text-green-400' 
                  : 'bg-yellow-500/20 text-yellow-400'
              }`}>
                {wsConnected ? '🟢 Live' : '🟡 Polling'}
              </div>
              <button
                onClick={fetchContacts}
                className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-medium transition"
              >
                Refresh
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <StatCard label="Total Inquiries" value={stats.total} color="bg-blue-500" icon="📊" />
            <StatCard label="New Leads" value={stats.new} color="bg-green-500" icon="🆕" />
            <StatCard label="Contacted" value={stats.contacted} color="bg-yellow-500" icon="📞" />
            <StatCard label="Completed" value={stats.completed} color="bg-purple-500" icon="✅" />
          </div>

          {error && (
            <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg">
              <p className="text-red-400">{error}</p>
            </div>
          )}

          <div className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden">
            <div className="p-6 border-b border-slate-700">
              <h2 className="text-xl font-bold text-white">Recent Inquiries</h2>
            </div>

            {loading ? (
              <div className="p-8 text-center">
                <div className="inline-block animate-spin">⏳</div>
                <p className="text-slate-400 mt-2">Loading contacts...</p>
              </div>
            ) : contacts.length === 0 ? (
              <div className="p-8 text-center">
                <p className="text-slate-400">No inquiries yet</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-700/50 border-b border-slate-600">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-slate-300">Name</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-slate-300">Email</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-slate-300">Service</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-slate-300">Status</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-slate-300">Date</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-slate-300">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700">
                    {contacts.map((contact) => (
                      <tr key={contact.id} className="hover:bg-slate-700/50 transition">
                        <td className="px-6 py-4 text-sm text-white font-medium">{contact.name}</td>
                        <td className="px-6 py-4 text-sm text-slate-300">{contact.email}</td>
                        <td className="px-6 py-4 text-sm text-slate-300">{contact.service}</td>
                        <td className="px-6 py-4 text-sm">
                          <select
                            value={contact.status}
                            onChange={(e) => handleStatusChange(contact.id, e.target.value)}
                            className="px-3 py-1 bg-slate-700 border border-slate-600 rounded text-white text-xs focus:outline-none focus:border-amber-500"
                          >
                            <option value="new">New</option>
                            <option value="contacted">Contacted</option>
                            <option value="completed">Completed</option>
                          </select>
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-400">
                          {new Date(contact.created_at).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 text-sm space-x-2">
                          <button
                            onClick={() => {
                              setSelectedContact(contact);
                              setShowModal(true);
                            }}
                            className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded text-xs transition"
                          >
                            View
                          </button>
                          <button
                            onClick={() => handleDelete(contact.id)}
                            className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded text-xs transition"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        {showModal && selectedContact && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-slate-800 rounded-lg max-w-md w-full p-6 border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-4">Contact Details</h3>
              <div className="space-y-3 mb-6">
                <div>
                  <p className="text-sm text-slate-400">Name</p>
                  <p className="text-white font-medium">{selectedContact.name}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <p className="text-white font-medium">{selectedContact.email}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-400">Phone</p>
                  <p className="text-white font-medium">{selectedContact.phone}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-400">Service</p>
                  <p className="text-white font-medium">{selectedContact.service}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-400">Message</p>
                  <p className="text-white font-medium">{selectedContact.message}</p>
                </div>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="w-full px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </AdminLayout>
    </>
  );
}

function StatCard({ label, value, color, icon }) {
  return (
    <div className="bg-slate-800 rounded-lg border border-slate-700 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-slate-400 text-sm">{label}</p>
          <p className="text-3xl font-bold text-white mt-2">{value}</p>
        </div>
        <div className="text-4xl">{icon}</div>
      </div>
    </div>
  );
}

export default AdminDashboard;
