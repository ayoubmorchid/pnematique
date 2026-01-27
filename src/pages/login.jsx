import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Login = () => {
  const { importPendingBook } = useContext(CartContext);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleValidation = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "username") {
      setErrors((prev) => ({
        ...prev,
        username: value.trim() === "" ? "Username is required" : "",
      }));
    }
    if (name === "password") {
      setErrors((prev) => ({
        ...prev,
        password: value.length < 6 ? "Password must be at least 6 characters" : "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!formData.username || errors.username || !formData.password || errors.password) {
      setErrors({
        username: !formData.username ? "Please provide a valid username." : errors.username,
        password: !formData.password ? "Please provide a valid password." : errors.password,
      });
      setIsLoading(false);
      return;
    }

    setTimeout(() => {
      if (formData.username === "admin" && formData.password === "123456") {
        localStorage.setItem("token", "logged_in");
        importPendingBook();
        const redirectPath = localStorage.getItem("redirectPath") || "/";
        localStorage.removeItem("redirectPath");
        setIsLoading(false);
        navigate(redirectPath);
      } else {
        setIsLoading(false);
        alert("Invalid username or password");
      }
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-green-50 relative overflow-hidden">
      <div className="absolute w-72 h-72 bg-green-200 rounded-full top-0 left-1/4 opacity-30 animate-pulse"></div>
      <div className="absolute w-72 h-72 bg-green-300 rounded-full bottom-0 right-1/4 opacity-30 animate-pulse"></div>

      <div className="bg-white p-8 rounded-xl shadow-xl z-10 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              onChange={handleValidation}
              className={`mt-1 block w-full px-4 py-2 border ${errors.username ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400`}
              required
            />
            {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleValidation}
              className={`mt-1 block w-full px-4 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400`}
              required
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
          >
            {isLoading ? <div className="w-5 h-5 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto"></div> : "Log In"}
          </button>
        </form>

        <div className="text-center mt-4">
          <Link to="/forget-password" className="text-sm text-green-500 hover:underline">
            Forgot your password?
          </Link>
        </div>

        <div className="text-center mt-6">
          <p className="text-gray-600 text-sm">Don't have an account?{' '}
            <Link to="/signup" className="text-green-600 font-semibold hover:underline">Sign up here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
