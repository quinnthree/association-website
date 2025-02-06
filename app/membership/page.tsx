"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"

const membershipOptions = [
  { id: "basic", name: "Basic Membership", price: 19.95, description: "Access to all basic benefits" },
  { id: "premium", name: "Premium Membership", price: 29.95, description: "Basic benefits plus premium features" },
  { id: "vip", name: "VIP Membership", price: 49.95, description: "All benefits plus exclusive VIP perks" },
]

export default function MembershipPage() {
  const [selectedMembership, setSelectedMembership] = useState("basic")
  const router = useRouter()
  const { toast } = useToast()

  const handleJoin = () => {
    // In a real app, you would handle the subscription process here
    toast({
      title: "Membership Activated",
      description: `You've successfully joined with the ${selectedMembership} plan.`,
    })
    router.push("/account")
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Choose Your Membership</h1>
      <RadioGroup
        value={selectedMembership}
        onValueChange={setSelectedMembership}
        className="grid gap-6 grid-cols-1 md:grid-cols-3"
      >
        {membershipOptions.map((option) => (
          <div key={option.id}>
            <RadioGroupItem value={option.id} id={option.id} className="peer sr-only" />
            <Label
              htmlFor={option.id}
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              <CardHeader>
                <CardTitle>{option.name}</CardTitle>
                <CardDescription>${option.price.toFixed(2)}/month</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p>{option.description}</p>
              </CardContent>
            </Label>
          </div>
        ))}
      </RadioGroup>
      <div className="mt-8 text-center">
        <Button onClick={handleJoin} size="lg">
          Join Now
        </Button>
      </div>
    </div>
  )
}

