import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (email === 'admin@luxury.com' && password === 'admin123') {
        localStorage.setItem('adminToken', 'true');
        localStorage.setItem('adminEmail', email);
        router.push('/admin/dashboard');
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Admin Login - Luxury Construction</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-white via-green-50 to-white flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* Logo/Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-8">
              <div className="relative group">
                {/* Circular Logo Container */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-2xl transform group-hover:scale-110 group-hover:shadow-green-500/50 transition-all duration-300 cursor-pointer">
                  <img
                    src="https://res.cloudinary.com/dtr1tnutd/image/upload/v1765250127/logo_zo8ea0.png"
                    alt="Luxury Construction Logo"
                    className="h-20 sm:h-24 md:h-28 w-20 sm:w-24 md:w-28 object-contain filter drop-shadow-lg"
                  />
                </div>
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2 transition-colors duration-300">Luxury Construction</h1>
            <p className="text-green-600 font-semibold text-base sm:text-lg md:text-xl">Admin Portal</p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8 border-2 border-green-100 hover:border-green-300 transition-colors duration-300">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Welcome Back</h2>

            {error && (
              <div className="mb-6 p-4 bg-red-50 border-2 border-red-200 rounded-lg">
                <p className="text-red-700 text-sm font-medium">{error}</p>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@luxury.com"
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition duration-200"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition duration-200"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 px-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold rounded-lg transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                {loading ? 'Signing in...' : 'Sign In'}
              </button>
            </form>

            <div className="mt-8 p-4 bg-green-50 rounded-lg border-2 border-green-200">
              <p className="text-xs font-semibold text-gray-700 mb-3">Demo Credentials:</p>
              <p className="text-xs text-gray-600 mb-1">Email: <span className="font-mono font-semibold text-green-700">admin@luxury.com</span></p>
              <p className="text-xs text-gray-600">Password: <span className="font-mono font-semibold text-green-700">admin123</span></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminLogin;
