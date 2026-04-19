import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/img/logo/logo.png';
import { isAuthenticated, logoutUser } from '../utils/auth';

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
  const location = useLocation();

  useEffect(() => {
    const syncAuthState = () => setIsLoggedIn(isAuthenticated());

    syncAuthState();
    window.addEventListener('auth-change', syncAuthState);
    window.addEventListener('storage', syncAuthState);

    return () => {
      window.removeEventListener('auth-change', syncAuthState);
      window.removeEventListener('storage', syncAuthState);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const handleLogout = () => {
    logoutUser();
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-emerald-200 bg-gradient-to-r from-emerald-950 via-green-800 to-lime-700 shadow-lg shadow-green-900/10">
      <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-2" aria-label="Go to home page">
            <span className="rounded-full bg-white p-1 shadow-sm">
              <img src={logo} className="h-9 w-9 object-contain" alt="Pneumatique logo" />
            </span>
            <span className="hidden sm:inline text-lg font-bold text-white">Pneumatique</span>
          </NavLink>

          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  isActive
                    ? 'rounded-full bg-white px-4 py-2 font-bold text-green-800 shadow-sm transition-colors'
                    : 'rounded-full px-4 py-2 text-green-50 transition-colors hover:bg-white/15 hover:text-white'
                }
              >
                {item.name}
              </NavLink>
            ))}

            {!isLoggedIn ? (
              <>
                <NavLink to="/login" className="font-medium text-green-50 transition-colors hover:text-white">
                  Login
                </NavLink>
                <NavLink to="/signup" className="rounded-full bg-white px-4 py-2 font-semibold text-green-800 shadow-sm transition-colors hover:bg-green-50">
                  Sign up
                </NavLink>
              </>
            ) : (
              <>
                <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    isActive
                      ? 'rounded-full bg-white px-4 py-2 font-bold text-green-800 shadow-sm transition-colors'
                      : 'rounded-full px-4 py-2 font-medium text-green-50 transition-colors hover:bg-white/15 hover:text-white'
                  }
                >
                  Profile
                </NavLink>
                <button
                  onClick={handleLogout}
                  className="rounded-full border border-white/40 px-4 py-2 font-medium text-white transition-colors hover:bg-white hover:text-red-600"
                >
                  Logout
                </button>
              </>
            )}
          </div>

          <div className="flex items-center">
            <NavLink to="/cart" aria-label="View cart" className="relative rounded-full bg-white/15 p-2 transition-colors hover:bg-white">
              <ShoppingCart className="h-5 w-5 text-white transition-colors hover:text-green-800" />
              {cartCount > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-lime-300 text-xs font-bold text-green-950 shadow-sm">
                  {cartCount}
                </span>
              )}
            </NavLink>

            <button
              className="md:hidden pl-4"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
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
              id="mobile-navigation"
            >
              <div className="mt-3 space-y-3 border-t border-white/20 py-4">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={({ isActive }) =>
                      isActive
                        ? 'block rounded-md bg-white px-4 py-2 font-bold text-green-800 transition-colors'
                        : 'block rounded-md px-4 py-2 text-green-50 transition-colors hover:bg-white/15 hover:text-white'
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}

                {!isLoggedIn ? (
                  <>
                    <NavLink to="/login" className="block rounded-md px-4 py-2 text-green-50 transition-colors hover:bg-white/15 hover:text-white">
                      Login
                    </NavLink>
                    <NavLink to="/signup" className="block rounded-md bg-white px-4 py-2 font-semibold text-green-800 transition-colors hover:bg-green-50">
                      Sign up
                    </NavLink>
                  </>
                ) : (
                  <>
                    <NavLink
                      to="/profile"
                      className={({ isActive }) =>
                        isActive
                          ? 'block rounded-md bg-white px-4 py-2 font-bold text-green-800 transition-colors'
                          : 'block rounded-md px-4 py-2 text-green-50 transition-colors hover:bg-white/15 hover:text-white'
                      }
                    >
                      Profile
                    </NavLink>
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsOpen(false);
                      }}
                      className="block rounded-md px-4 py-2 text-left font-medium text-red-100 transition-colors hover:bg-white hover:text-red-600"
                    >
                      Logout
                    </button>
                  </>
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
