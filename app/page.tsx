import Link from "next/link"
import { Button } from "@/components/ui/button"
import HeroSection from "@/components/HeroSection"
import MembershipBenefits from "@/components/MembershipBenefits"
import ProductCarousel from "@/components/ProductCarousel"

export default function Home() {
  return (
    <div className="space-y-16">
      <HeroSection />
      <MembershipBenefits />
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Association Today!</h2>
        <p className="text-xl mb-6">Get access to exclusive benefits for just $19.95</p>
        <Button asChild size="lg">
          <Link href="/join">Become a Member</Link>
        </Button>
      </section>
      <ProductCarousel />
    </div>
  )
}

