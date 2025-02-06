export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold mb-2">About Us</h3>
            <p>We are dedicated to serving our members and providing valuable resources and benefits.</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Contact</h3>
            <p>Email: info@association.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Follow Us</h3>
            <p>Stay connected on social media</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 Association Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

