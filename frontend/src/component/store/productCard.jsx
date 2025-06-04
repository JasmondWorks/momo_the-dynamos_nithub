import React from "react";

function ProductCard({ product, onBuy }) {
  return (
    <div className="bg-[#8E44AD] text-white text-center p-4 rounded-lg shadow">
      <div className="text-4xl text-center mb-2">🎁</div>
      <h3 className="text-xl font-bold">{product.name}</h3>
      <p className="mt-2">Cost: {product.cost} coins</p>
      <button
        onClick={() => onBuy(product)}
        className="mt-4 bg-white w-full text-purple-600 px-4 py-2 rounded hover:bg-purple-100 cursor-pointer"
      >
        Buy
      </button>
    </div>
  );
}

export default ProductCard;
