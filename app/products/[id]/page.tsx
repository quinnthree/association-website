"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { useAuth } from "@/contexts/AuthContext"

const products = [
  {
    id: "1",
    name: "Virtual Primary Care",
    price: 29.99,
    image: "/placeholder.svg",
    description: "Access primary care doctors online anytime, anywhere.",
  },
  {
    id: "2",
    name: "Short Term Medical Insurance",
    price: 99.99,
    image: "/placeholder.svg",
    description: "Temporary coverage for unexpected health events.",
  },
  {
    id: "3",
    name: "Pet Insurance",
    price: 19.99,
    image: "/placeholder.svg",
    description: "Comprehensive coverage for your beloved pets.",
  },
  {
    id: "4",
    name: "Travel Insurance",
    price: 49.99,
    image: "/placeholder.svg",
    description: "Stay protected on your adventures around the world.",
  },
]

export default function ProductPage({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<(typeof products)[0] | null>(null)
  const { user } = useAuth()
  const router = useRouter()
  const { toast } = useToast()

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === params.id)
    setProduct(foundProduct || null)
  }, [params.id])

  const handlePurchase = () => {
    if (!user) {
      toast({
        title: "Membership required",
        description: "Please join or log in to purchase this product.",
        variant: "destructive",
      })
      router.push("/join")
    } else {
      // In a real app, you would handle the purchase here
      toast({
        title: "Purchase successful",
        description: `You have successfully purchased ${product?.name}.`,
      })
    }
  }

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="md:w-1/2">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          width={600}
          height={400}
          className="w-full h-auto rounded-lg"
        />
      </div>
      <div className="md:w-1/2 space-y-4">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-2xl font-semibold">${product.price.toFixed(2)}/month</p>
        <p className="text-gray-600">{product.description}</p>
        <Button onClick={handlePurchase}>{user ? "Purchase" : "Join to Purchase"}</Button>
      </div>
    </div>
  )
}

