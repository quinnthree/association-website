import ProductCard from "@/components/ProductCard"

const featuredProducts = [
  { id: "1", name: "Premium Membership", price: 199, image: "/placeholder.svg" },
  { id: "2", name: "Professional Development Bundle", price: 299, image: "/placeholder.svg" },
  { id: "3", name: "Annual Conference Ticket", price: 499, image: "/placeholder.svg" },
]

export default function FeaturedProducts() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

