import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Facebook, Send } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white pt-20 pb-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Pnematique</h3>
              <p className="text-gray-600 mb-6">
                Join our mission to create a more sustainable future, 
                one bag at a time.
              </p>
              <div className="flex space-x-4">
                 <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  className="text-[#32CD32] hover:text-[#28a428]"
                >
                  <Instagram />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  className="text-[#32CD32] hover:text-[#28a428]"
                >
                  <Twitter />
                </motion.a> 
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  className="text-[#32CD32] hover:text-[#28a428]"
                >
                  <Facebook />
                </motion.a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-600 mb-4">
                Stay updated with our latest products and initiatives.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-l-full border border-gray-300 focus:outline-none focus:border-[#32CD32]"
                />
                <motion.button
                  className="bg-[#32CD32] text-white px-6 py-2 rounded-r-full"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-8 text-center text-gray-600">
            <p>&copy; 2024 Pneumatique. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
};

export default Footer;
