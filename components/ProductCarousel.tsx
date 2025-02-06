"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const products = [
  { id: 1, name: "Virtual Primary Care", image: "/placeholder.svg", description: "Access primary care doctors online" },
  {
    id: 2,
    name: "Short Term Medical Insurance",
    image: "/placeholder.svg",
    description: "Temporary coverage for unexpected events",
  },
  { id: 3, name: "Pet Insurance", image: "/placeholder.svg", description: "Protect your furry friends" },
  {
    id: 4,
    name: "Travel Insurance",
    image: "/placeholder.svg",
    description: "Stay protected while you explore the world",
  },
]

export default function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length)
  }

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Additional Programs for Members</h2>
      <div className="relative">
        <div className="flex overflow-hidden">
          {products.map((product, index) => (
            <Card
              key={product.id}
              className={`w-full flex-shrink-0 transition-transform duration-300 ease-in-out ${
                index === currentIndex ? "translate-x-0" : "translate-x-full"
              }`}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              <CardHeader>
                <CardTitle>{product.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover mb-4"
                />
                <p>{product.description}</p>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <Link href={`/products/${product.id}`}>Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <Button variant="outline" className="absolute top-1/2 left-4 transform -translate-y-1/2" onClick={prevSlide}>
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button variant="outline" className="absolute top-1/2 right-4 transform -translate-y-1/2" onClick={nextSlide}>
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
    </section>
  )
}

