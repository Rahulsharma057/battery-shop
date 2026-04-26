import products from "@/data/products";
import ProductCard from "@/comonent/ProductCard";

export default function ProductsPage() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">All Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}