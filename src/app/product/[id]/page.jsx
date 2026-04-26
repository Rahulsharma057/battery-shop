"use client";
import products from "@/data/products";
import { useCart } from "@/context/CardContext";

export default function ProductDetail({ params }) {
  const { addToCart } = useCart();

  const product = products.find((p) => p.id == params.id);

  if (!product) return <p>Product not found</p>;

  return (
    <div className="p-6">
      <img src={product.image} className="w-64" />

      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p>₹{product.price}</p>

      <button
        onClick={() => addToCart(product)}
        className="mt-4 bg-black text-white px-4 py-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
}