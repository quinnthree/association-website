import { CheckCircle } from "lucide-react"

const benefits = [
  "Telemedicine services",
  "Health and lifestyle discount programs",
  "$5,000 Accidental Death & Dismemberment (AD&D) coverage",
]

export default function MembershipBenefits() {
  return (
    <section className="bg-secondary py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary">Membership Benefits</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="text-primary mr-2 flex-shrink-0 mt-1" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

