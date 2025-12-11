import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

function AdminLayout({ children, onLogout }) {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const isActive = (path) => router.pathname === path;

  return (
    <div className="min-h-screen bg-slate-900">
      <div
        className={`fixed left-0 top-0 h-screen bg-slate-800 border-r border-slate-700 transition-all duration-300 z-40 ${
          sidebarOpen ? 'w-64' : 'w-20'
        }`}
      >
        <div className="h-16 flex items-center justify-between px-4 border-b border-slate-700">
          {sidebarOpen && (
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg">
                <img
                  src="https://res.cloudinary.com/dtr1tnutd/image/upload/v1765250127/logo_zo8ea0.png"
                  alt="Luxury Construction Logo"
                  className="h-7 w-7 object-contain"
                />
              </div>
              <h1 className="text-xl font-bold text-green-400">LuxuryAdmin</h1>
            </div>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-slate-700 rounded-lg transition"
          >
            {sidebarOpen ? '←' : '→'}
          </button>
        </div>

        <nav className="p-4 space-y-2">
          <NavLink
            href="/admin/dashboard"
            icon="📊"
            label="Dashboard"
            isActive={isActive('/admin/dashboard')}
            sidebarOpen={sidebarOpen}
          />
          <NavLink
            href="/admin/content"
            icon="📝"
            label="Content"
            isActive={isActive('/admin/content')}
            sidebarOpen={sidebarOpen}
          />
          <NavLink
            href="/admin/analytics"
            icon="📈"
            label="Analytics"
            isActive={isActive('/admin/analytics')}
            sidebarOpen={sidebarOpen}
          />
          <NavLink
            href="/admin/settings"
            icon="⚙️"
            label="Settings"
            isActive={isActive('/admin/settings')}
            sidebarOpen={sidebarOpen}
          />
        </nav>

        <div className="absolute bottom-4 left-4 right-4">
          <button
            onClick={onLogout}
            className="w-full px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium transition flex items-center justify-center space-x-2"
          >
            <span>🚪</span>
            {sidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </div>

      <div className={`transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-20'}`}>
        <div className="h-16 bg-slate-800 border-b border-slate-700 flex items-center justify-between px-6">
          <div className="flex items-center space-x-4">
            <h2 className="text-lg font-semibold text-white">
              {getPageTitle(router.pathname)}
            </h2>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold">
                A
              </div>
              <span className="text-sm text-slate-300">Admin</span>
            </div>
          </div>
        </div>

        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
}

function NavLink({ href, icon, label, isActive, sidebarOpen }) {
  return (
    <Link href={href} legacyBehavior>
      <a
        className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition ${
          isActive
            ? 'bg-amber-500/20 text-amber-500 border border-amber-500/50'
            : 'text-slate-400 hover:bg-slate-700 hover:text-slate-300'
        }`}
      >
        <span className="text-xl">{icon}</span>
        {sidebarOpen && <span className="font-medium">{label}</span>}
      </a>
    </Link>
  );
}

function getPageTitle(pathname) {
  const titles = {
    '/admin/dashboard': 'Dashboard',
    '/admin/content': 'Content Management',
    '/admin/analytics': 'Analytics',
    '/admin/settings': 'Settings',
  };
  return titles[pathname] || 'Admin Panel';
}

export default AdminLayout;
