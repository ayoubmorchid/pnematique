import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/img/logo/logo.png';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Shop', href: '/shop' },
  { name: 'About', href: '/about' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
];

const Header = ({ cartCount }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem('token'));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="flex items-center space-x-2">
            <img src={logo} className="w-10" alt="GreenBag Logo" />
          </NavLink>

          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#32CD32] font-bold transition-colors'
                    : 'text-gray-600 hover:text-[#32CD32] transition-colors'
                }
              >
                {item.name}
              </NavLink>
            ))}

            {!isLoggedIn ? (
              <>
                <NavLink to="/login" className="text-gray-600 hover:text-[#32CD32] transition-colors font-medium">
                  Login
                </NavLink>
                <NavLink to="/signup" className="text-gray-600 hover:text-[#32CD32] transition-colors font-medium">
                  Sign up
                </NavLink>
              </>
            ) : (
              <button
                onClick={handleLogout}
                className="text-red-500 hover:text-red-600 transition-colors font-medium"
              >
                Logout
              </button>
            )}
          </div>

          <div className="flex items-center">
            <NavLink to="/cart" aria-label="View cart" className="relative">
              <ShoppingCart className="w-6 h-6 text-gray-600 hover:text-[#32CD32] transition-colors" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#32CD32] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </NavLink>

            <button
              className="md:hidden pl-4"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-gray-600" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden"
            >
              <div className="py-4 space-y-4">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={({ isActive }) =>
                      isActive
                        ? 'block text-[#32CD32] font-bold transition-colors'
                        : 'block text-gray-600 hover:text-[#32CD32] transition-colors'
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                ))}

                {!isLoggedIn ? (
                  <>
                    <NavLink to="/login" className="block text-gray-600 hover:text-[#32CD32] transition-colors">
                      Login
                    </NavLink>
                    <NavLink to="/signup" className="block text-gray-600 hover:text-[#32CD32] transition-colors">
                      Sign up
                    </NavLink>
                  </>
                ) : (
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsOpen(false);
                    }}
                    className="block text-red-500 hover:text-red-600 transition-colors"
                  >
                    Logout
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
