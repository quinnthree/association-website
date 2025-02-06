import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="text-center py-20 bg-primary text-primary-foreground">
      <h1 className="text-5xl font-bold mb-6">Welcome to Our Association</h1>
      <p className="text-xl mb-8 max-w-2xl mx-auto">
        Join our community of professionals and enjoy exclusive benefits designed to support your health, lifestyle, and
        career.
      </p>
      <Button asChild size="lg" variant="secondary">
        <Link href="/membership">Join Now for $19.95/month</Link>
      </Button>
    </section>
  )
}

