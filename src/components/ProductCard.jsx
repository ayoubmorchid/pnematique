const ProductCard = ({ product, AddToCart }) => {
  const handleAddToCart = () => {
    AddToCart(product);
  };

  return (
    <article className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:border-green-200 hover:shadow-md hover:-translate-y-1 transition-all relative">
      <div className="mb-4 bg-green-50/60 rounded-md p-3">
        <img src={product.image} alt={product.name} className="aspect-[4/3] w-full object-contain" />
      </div>

      <div className="flex h-full flex-col">
        <div className="flex items-start gap-3">
          <h3 className="text-base font-bold text-gray-800 leading-snug">{product.name}</h3>
          <p className="text-base text-emerald-700 font-bold ml-auto whitespace-nowrap">{product.price} MAD</p>
        </div>
        <p className="text-gray-500 text-sm mt-2 leading-relaxed">{product.description}</p>
        <div className="flex items-center gap-2 mt-4">
          <button
            type="button"
            className="text-sm px-3 h-10 font-semibold w-full bg-green-600 hover:bg-green-700 focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 text-white tracking-wide ml-auto outline-none border-none rounded-md"
            onClick={handleAddToCart}
          >
            Add to cart
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
