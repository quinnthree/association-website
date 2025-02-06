import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Toaster } from "@/components/ui/toaster"
import { AuthProvider } from "@/contexts/AuthContext"
import { CartProvider } from "@/contexts/CartContext"
import type React from "react"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Association Marketplace",
  description: "Your one-stop shop for association memberships, products, and services",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="/_next/static/css/app/globals.css" />
      </head>
      <body className={`${poppins.className} min-h-screen bg-background`}>
        <AuthProvider>
          <CartProvider>
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">
                <div className="container mx-auto px-4 py-8">{children}</div>
              </main>
              <Footer />
            </div>
            <Toaster />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  )
}


