import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

const categories = [
  { name: "Memberships", icon: "🎫", link: "/memberships" },
  { name: "Professional Development", icon: "📚", link: "/products/category/professional-development" },
  { name: "Events", icon: "🎉", link: "/products/category/events" },
  { name: "Insurance", icon: "🛡️", link: "/services/insurance" },
]

export default function CategoryGrid() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Browse Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category) => (
          <Link key={category.name} href={category.link}>
            <Card>
              <CardContent className="flex flex-col items-center justify-center h-32">
                <span className="text-4xl mb-2">{category.icon}</span>
                <span className="text-center">{category.name}</span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}

