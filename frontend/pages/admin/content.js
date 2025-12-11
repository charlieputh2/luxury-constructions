import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import AdminLayout from '../../components/AdminLayout';

export default function AdminContent() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('services');
  const [services, setServices] = useState([]);
  const [editingService, setEditingService] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
      return;
    }
    loadServices();
  }, []);

  const loadServices = () => {
    // Load services from localStorage or API
    const savedServices = localStorage.getItem('services');
    if (savedServices) {
      setServices(JSON.parse(savedServices));
    } else {
      setServices(DEFAULT_SERVICES);
    }
  };

  const handleSaveService = (service) => {
    let updatedServices;
    if (editingService?.id === service.id) {
      updatedServices = services.map((s) =>
        s.id === service.id ? service : s
      );
    } else {
      updatedServices = [...services, { ...service, id: Date.now() }];
    }
    setServices(updatedServices);
    localStorage.setItem('services', JSON.stringify(updatedServices));
    setEditingService(null);
    setShowModal(false);
  };

  const handleDeleteService = (id) => {
    if (confirm('Are you sure you want to delete this service?')) {
      const updatedServices = services.filter((s) => s.id !== id);
      setServices(updatedServices);
      localStorage.setItem('services', JSON.stringify(updatedServices));
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
        <title>Content Management - Luxury Construction</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <AdminLayout onLogout={handleLogout}>
        <div className="space-y-6">
          {/* Header */}
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-white">Content Management</h1>
              <p className="text-slate-400 mt-1">Manage services, images, and text</p>
            </div>
            <button
              onClick={() => {
                setEditingService(null);
                setShowModal(true);
              }}
              className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-medium transition"
            >
              + Add New Service
            </button>
          </div>

          {/* Tabs */}
          <div className="flex space-x-4 border-b border-slate-700">
            <button
              onClick={() => setActiveTab('services')}
              className={`px-4 py-2 font-medium transition ${
                activeTab === 'services'
                  ? 'text-amber-500 border-b-2 border-amber-500'
                  : 'text-slate-400 hover:text-slate-300'
              }`}
            >
              Services
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`px-4 py-2 font-medium transition ${
                activeTab === 'settings'
                  ? 'text-amber-500 border-b-2 border-amber-500'
                  : 'text-slate-400 hover:text-slate-300'
              }`}
            >
              Site Settings
            </button>
          </div>

          {/* Services Tab */}
          {activeTab === 'services' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden hover:border-amber-500/50 transition"
                >
                  {service.image && (
                    <div className="h-40 bg-slate-700 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-white mb-2">
                      {service.name}
                    </h3>
                    <p className="text-sm text-slate-400 mb-4 line-clamp-2">
                      {service.description}
                    </p>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => {
                          setEditingService(service);
                          setShowModal(true);
                        }}
                        className="flex-1 px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded text-sm font-medium transition"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteService(service.id)}
                        className="flex-1 px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded text-sm font-medium transition"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <div className="bg-slate-800 rounded-lg border border-slate-700 p-6 max-w-2xl">
              <h2 className="text-xl font-bold text-white mb-6">Site Settings</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Site Title
                  </label>
                  <input
                    type="text"
                    defaultValue="Luxury Construction"
                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Site Description
                  </label>
                  <textarea
                    defaultValue="Professional concrete and landscaping services"
                    rows="3"
                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
                <button className="px-6 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-medium transition">
                  Save Settings
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Service Modal */}
        {showModal && (
          <ServiceModal
            service={editingService}
            onSave={handleSaveService}
            onClose={() => {
              setShowModal(false);
              setEditingService(null);
            }}
          />
        )}
      </AdminLayout>
    </>
  );
}

function ServiceModal({ service, onSave, onClose }) {
  const [formData, setFormData] = useState(
    service || {
      name: '',
      description: '',
      image: '',
      category: 'concrete',
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setFormData((prev) => ({ ...prev, image: event.target.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-slate-800 rounded-lg max-w-md w-full p-6 border border-slate-700 max-h-[90vh] overflow-y-auto">
        <h3 className="text-xl font-bold text-white mb-4">
          {service ? 'Edit Service' : 'Add New Service'}
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Service Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g., Concrete Driveways"
              className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Service description..."
              rows="3"
              className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-amber-500"
            >
              <option value="concrete">Concrete Services</option>
              <option value="home">Home & Construction</option>
              <option value="landscaping">Landscaping</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Service Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-slate-300 focus:outline-none focus:border-amber-500"
            />
            {formData.image && (
              <div className="mt-2 h-32 bg-slate-700 rounded-lg overflow-hidden">
                <img
                  src={formData.image}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>

          <div className="flex space-x-2 pt-4">
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-medium transition"
            >
              Save Service
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

const DEFAULT_SERVICES = [
  {
    id: 1,
    name: 'Concrete Driveways',
    description: 'Professional concrete driveway installation and repair services',
    image: '/concrete_driveways.jpg',
    category: 'concrete',
  },
  {
    id: 2,
    name: 'Heated Driveway Systems',
    description: 'Advanced heated driveway systems for year-round safety',
    image: '/heated-driveways.jpg',
    category: 'concrete',
  },
  {
    id: 3,
    name: 'Decorative Concrete',
    description: 'Beautiful decorative concrete solutions for your property',
    image: '/decorative.jpg',
    category: 'concrete',
  },
];
