import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import p1 from '../assets/img/Products/p1.webp';
import p2 from '../assets/img/Products/p2.jpg';
import p3 from '../assets/img/Products/p3.avif';
import p4 from '../assets/img/Products/p4.jpg';
import p5 from '../assets/img/Products/p5.jpg';
import p6 from '../assets/img/Products/p6.jpg';
import p7 from '../assets/img/Products/p7.jpg';
import p8 from '../assets/img/Products/p8.jpg';

const products = [
    {
      id: 1,
      name: 'Brake Pads',
      price: 20,
      description: 'High-performance brake pads for safe and reliable braking.',
      image: p1,
    },
    {
      id: 2,
      name: 'Engine Oil 5W-30',
      price: 45,
      description: 'Premium synthetic engine oil ensuring smooth engine operation.',
      image: p2,
    },
    {
      id: 3,
      name: 'Air Filter',
      price: 15,
      description: 'Efficient air filtration to enhance engine performance and longevity.',
      image: p3,
    },
    {
      id: 4,
      name: 'Spark Plugs (Set of 4)',
      price: 25,
      description: 'Durable and high-performance spark plugs for better ignition efficiency.',
      image: p4,
    },
    {
      id: 5,
      name: 'Car Battery 12V',
      price: 120,
      description: 'Long-lasting car battery with reliable power output.',
      image: p5,
    },
    {
      id: 6,
      name: 'Windshield Wipers',
      price: 10,
      description: 'High-quality wipers for clear visibility in all weather conditions.',
      image: p6,
    },
    {
      id: 7,
      name: 'Fuel Injector Cleaner',
      price: 18,
      description: 'Improves fuel efficiency and reduces carbon buildup in injectors.',
      image: p7,
    },
    {
      id: 8,
      name: 'Transmission Fluid',
      price: 35,
      description: 'Ensures smooth gear shifts and prolongs transmission life.',
      image: p8,
    },
  ];  

const ShoppingPage = ({onCartCountChange}) => {
  const [cart, setCart] = useState(() => {
    // Load cart from localStorage or initialize as an empty array
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
  
    if (existingItem) {
      // Update quantity if the item is already in the cart
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      // Add the new product with a default quantity of 1
      const updatedCart = [...cart, { ...product, quantity: 1 }];
      setCart(updatedCart);
    }
  };
  

  // Update localStorage whenever the cart changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const uniqueItemCount = new Set(cart.map(item => item.id)).size;
    onCartCountChange(uniqueItemCount); 
  }, [cart]); 



  

  return (
    <div className="font-[sans-serif] bg-gray-100">
      <div className="p-4 mx-auto lg:max-w-7xl md:max-w-4xl sm:max-w-xl max-sm:max-w-sm">
        {/* first section*/}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4">Car Parts & Accessories</h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Browse our high-quality automotive spare parts and accessories to keep your vehicle running smoothly.
          </p>
        </div>
        {/*  producte */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} AddToCart={addToCart} />
          ))}
        </div>

        {/* section close*/}
        <div className="mt-8 text-center">
          <p className="text-gray-600 text-sm sm:text-base">
            Need assistance?{' '}
            <a href="/contact" className="text-[#28a745] font-semibold hover:text-[#218838]">
              Contact us
            </a>{' '}
            for expert recommendations and support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShoppingPage;
