import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';

const Cart = ({ onCartCountChange }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const handleUpdateQuantity = (id, quantity) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
    setCartItems(updatedCart);
  };

  const handleRemove = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    if (onCartCountChange) {
      const uniqueItemCount = new Set(cartItems.map((item) => item.id)).size;
      onCartCountChange(uniqueItemCount);
    }
  }, [cartItems, onCartCountChange]);

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 5.99;
  const total = subtotal + shipping;

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.h1
            className="text-4xl font-bold text-center mb-16 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            🛒 Your Cart
          </motion.h1>

          {cartItems.length === 0 && (
            <div className="text-center space-y-6 py-12">
              <p className="text-gray-600 text-xl">Your cart is empty.</p>
              <p className="text-gray-500 text-lg">Browse our products and add items to your cart.</p>
              <motion.a
                href="/shop"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition text-lg"
              >
                Continue Shopping
              </motion.a>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {cartItems.length > 0 &&
                cartItems.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onUpdateQuantity={handleUpdateQuantity}
                    onRemove={handleRemove}
                  />
                ))}
            </div>

            {cartItems.length > 0 && (
              <div className="bg-white p-6 rounded-2xl shadow-xl h-fit sticky top-32">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">🧾 Order Summary</h2>
                <div className="space-y-2 text-gray-700 mb-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-4 mt-4 font-bold text-lg flex justify-between text-gray-900">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <Link
                  to="/payment"
                  onClick={() => localStorage.setItem('invoice', JSON.stringify(cartItems))}
                  className="mt-6 block text-center bg-[#32CD32] text-white py-3 rounded-lg font-semibold hover:bg-[#28a428] transition-colors"
                >
                  💳 Proceed to Payment
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
