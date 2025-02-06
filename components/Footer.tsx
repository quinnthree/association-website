import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-2">About Us</h3>
            <p>We are dedicated to serving our members and providing valuable resources and benefits.</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products">Products</Link>
              </li>
              <li>
                <Link href="/memberships">Memberships</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Contact</h3>
            <p>Email: info@association.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Follow Us</h3>
            <p>Stay connected on social media</p>
            {/* Add social media icons/links here */}
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Association Marketplace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

