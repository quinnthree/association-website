import ProductCard from "@/components/ProductCard"

async function getProducts() {
  // In a real app, this would be an API call
  const mockProducts = [
    { id: "1", name: "Premium Membership", price: 199, image: "/placeholder.svg" },
    { id: "2", name: "Professional Development Bundle", price: 299, image: "/placeholder.svg" },
    { id: "3", name: "Annual Conference Ticket", price: 499, image: "/placeholder.svg" },
    { id: "4", name: "Leadership Workshop Series", price: 399, image: "/placeholder.svg" },
    { id: "5", name: "Industry Report 2023", price: 99, image: "/placeholder.svg" },
    { id: "6", name: "Networking Event Pass", price: 149, image: "/placeholder.svg" },
  ]
  return mockProducts
}

export default async function ProductGrid() {
  const products = await getProducts()

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

