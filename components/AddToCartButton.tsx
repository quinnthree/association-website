"use client"

import { Button } from "@/components/ui/button"
import { useCart } from "@/contexts/CartContext"
import { useToast } from "@/components/ui/use-toast"

interface Product {
  id: string
  name: string
  price: number
}

export default function AddToCartButton({ product }: { product: Product }) {
  const { addToCart } = useCart()
  const { toast } = useToast()

  const handleAddToCart = () => {
    addToCart({ ...product, quantity: 1 })
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  return (
    <Button onClick={handleAddToCart} size="lg">
      Add to Cart
    </Button>
  )
}

