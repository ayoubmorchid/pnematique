import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ShoppingPage from './pages/ShoppingPage';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import FAQ from './pages/FAQ';
import Cart from './pages/Cart';
import Confirmation from './pages/Confirmation';
import Payment from './pages/Payment';
import Login from './pages/login';
import SignUpForm from './pages/register';
import ProtectedRoute from './components/ProtectedRoute';

const AppContent = () => {
  const [cartCount, setCartCount] = useState(0);
  const location = useLocation();

  const updateCartCount = (newCount) => {
    setCartCount(newCount);
  };

  const hideFooterPaths = ['/login', '/signup'];
  const shouldShowFooter = !hideFooterPaths.includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
      <Header cartCount={cartCount} />

      <main className="pt-16 flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<ShoppingPage onCartCountChange={updateCartCount} />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/faq" element={<FAQ />} />

          {/* ✅ صفحات محمية */}
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart onCartCountChange={updateCartCount} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/confirmation"
            element={
              <ProtectedRoute>
                <Confirmation />
              </ProtectedRoute>
            }
          />
          <Route
            path="/payment"
            element={
              <ProtectedRoute>
                <Payment />
              </ProtectedRoute>
            }
          />

          {/* ✅ صفحات عامة */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUpForm />} />
        </Routes>
      </main>

      {shouldShowFooter && <Footer />}
    </div>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
