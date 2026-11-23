function ProductCard({ product, addToCart }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition">

      <img
        src={product.image}
        alt={product.name}
        className="w-full h-56 object-cover"
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">
          {product.name}
        </h3>

        <p className="text-gray-500 text-sm mt-2">
          {product.description}
        </p>

        <p className="text-xl font-bold text-gray-900 mt-4">
          KSh {product.price}
        </p>

        <button
          onClick={() => addToCart(product)}
          className="w-full mt-4 bg-black text-white py-3 rounded-md hover:bg-orange-600 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;