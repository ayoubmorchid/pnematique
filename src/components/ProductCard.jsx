import React from 'react';

const ProductCard = ({ product, AddToCart }) => {
  
  const handleAddToCart = () => {
    AddToCart(product);
  };

  return (
    <div className="bg-white rounded p-4 cursor-pointer hover:-translate-y-1 transition-all relative ">
      <div className="mb-4 bg-gray-100 rounded p-2">
        <img src={product.image} alt={product.name} className="aspect-[33/35] w-full object-contain" />
      </div>

      <div>
        <div className="flex gap-2">
          <h5 className="text-base font-bold text-gray-800">{product.name}</h5>
          <h6 className="text-base text-gray-800 font-bold ml-auto">{product.price}dh</h6>
        </div>
        <p className="text-gray-500 text-[13px] mt-2">{product.description}</p>
        <div className="flex items-center gap-2 mt-4">
          <button
            type="button"
            className="text-sm px-2 h-9 font-semibold w-full bg-green-600 hover:bg-green-700 text-white tracking-wide ml-auto outline-none border-none rounded"
            onClick={handleAddToCart}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
