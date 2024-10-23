import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-blue-800 mb-6">Login</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500" />
              <span className="ml-2 text-sm text-gray-600">Remember Me</span> 
            </label>
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Sign In
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <a href="#" className="text-blue-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
