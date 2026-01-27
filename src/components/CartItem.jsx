import React from 'react';
import { motion } from 'framer-motion';
import { Minus, Plus, X } from 'lucide-react';

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm"
    >
      <img
        src={item.image}
        alt={item.name}
        className="w-20 h-20 object-cover rounded-lg"
      />
      
      <div className="flex-1">
        <h3 className="font-semibold">{item.name}</h3>
        <p className="text-[#32CD32] font-bold">${item.price.toFixed(2)}</p>
      </div>
      
      <div className="flex items-center space-x-2">
        <button
          className="p-1 hover:bg-gray-100 rounded-full"
          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
          disabled={item.quantity <= 1}
        >
          <Minus className="w-4 h-4" />
        </button>
        <span className="w-8 text-center">{item.quantity}</span>
        <button
          className="p-1 hover:bg-gray-100 rounded-full"
          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
      
      <button
        className="p-2 hover:bg-gray-100 rounded-full"
        onClick={() => onRemove(item.id)}
      >
        <X className="w-5 h-5 text-gray-500" />
      </button>
    </motion.div>
  );
};

export default CartItem;