import Link from "next/link"
import { ShoppingCart } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-primary text-primary-foreground">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Association Name
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/membership">Membership</Link>
          </li>
          <li>
            <Link href="/products">Product Bundles</Link>
          </li>
          <li>
            <Link href="/insurance">Insurance Programs</Link>
          </li>
          <li>
            <Link href="/cart">
              <ShoppingCart />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

