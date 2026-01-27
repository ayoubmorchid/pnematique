import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      alert("Registered successfully!");
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-green-50 relative overflow-hidden">
      <div className="absolute w-72 h-72 bg-green-200 rounded-full top-0 left-1/4 opacity-30 animate-pulse"></div>
      <div className="absolute w-72 h-72 bg-green-300 rounded-full bottom-0 right-1/4 opacity-30 animate-pulse"></div>

      <div className="bg-white p-8 rounded-xl shadow-xl z-10 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Type your username or Email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Type your password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>

          <div>
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Confirm your password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
          >
            {isLoading ? <div className="w-5 h-5 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto"></div> : "Sign Up"}
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-gray-600 text-sm">Already have an account?{' '}
            <Link to="/login" className="text-green-600 font-semibold hover:underline">Log in here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
