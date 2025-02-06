"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ShoppingCart, User, Search, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useAuth } from "@/contexts/AuthContext"
import { useCart } from "@/contexts/CartContext"

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()
  const { user, logout } = useAuth()
  const { cartItems } = useCart()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
  }

  return (
    <header className="bg-primary text-primary-foreground sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            Association Marketplace
          </Link>
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 mx-4">
            <Input
              type="search"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full"
            />
            <Button type="submit" variant="secondary" className="ml-2">
              <Search className="h-4 w-4" />
            </Button>
          </form>
          <nav className="hidden md:flex items-center space-x-4">
            <Link href="/membership">Membership</Link>
            <Link href="/products">Products</Link>
            <Link href="/services">Services</Link>
            {user ? (
              <>
                <Link href="/account">
                  <User className="h-6 w-6" />
                </Link>
                <Button onClick={logout} variant="ghost">
                  Logout
                </Button>
              </>
            ) : (
              <Link href="/membership">Join</Link>
            )}
            <Link href="/cart" className="relative">
              <ShoppingCart className="h-6 w-6" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col space-y-4">
                <Link href="/membership">Membership</Link>
                <Link href="/products">Products</Link>
                <Link href="/services">Services</Link>
                {user ? (
                  <>
                    <Link href="/account">My Account</Link>
                    <Button onClick={logout} variant="ghost">
                      Logout
                    </Button>
                  </>
                ) : (
                  <Link href="/membership">Join</Link>
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

