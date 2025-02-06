import { Button } from "@/components/ui/button"
import Link from "next/link"

const insurancePrograms = [
  { name: "Basic Liability", price: 500, coverage: ["General liability up to $1M", "Property damage"] },
  { name: "Professional Indemnity", price: 1000, coverage: ["Errors and omissions", "Legal defense costs"] },
  {
    name: "Comprehensive Package",
    price: 2000,
    coverage: ["General liability up to $2M", "Property damage", "Errors and omissions", "Cyber liability"],
  },
]

export default function InsurancePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Insurance Programs</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {insurancePrograms.map((program) => (
          <div key={program.name} className="border p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-2">{program.name}</h2>
            <p className="text-xl mb-4">${program.price}/year</p>
            <ul className="list-disc list-inside mb-4">
              {program.coverage.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Button asChild>
              <Link href={`/cart?type=insurance&program=${program.name}`}>Add to Cart</Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}

