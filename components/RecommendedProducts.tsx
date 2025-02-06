import ProductCard from "@/components/ProductCard"

const recommendedProducts = [
  { id: "4", name: "Leadership Workshop Series", price: 399, image: "/placeholder.svg" },
  { id: "5", name: "Industry Report 2023", price: 99, image: "/placeholder.svg" },
  { id: "6", name: "Networking Event Pass", price: 149, image: "/placeholder.svg" },
]

export default function RecommendedProducts() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Recommended Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recommendedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

