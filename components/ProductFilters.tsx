"use client"

import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

const categories = ["Memberships", "Professional Development", "Events", "Publications"]

export default function ProductFilters() {
  const [priceRange, setPriceRange] = useState([0, 1000])

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-2">Categories</h3>
        {categories.map((category) => (
          <div key={category} className="flex items-center space-x-2 mb-2">
            <Checkbox id={category} />
            <Label htmlFor={category}>{category}</Label>
          </div>
        ))}
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Price Range</h3>
        <Slider min={0} max={1000} step={10} value={priceRange} onValueChange={setPriceRange} />
        <div className="flex justify-between mt-2">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>
    </div>
  )
}

