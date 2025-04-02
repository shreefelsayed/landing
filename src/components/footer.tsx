import Image from "next/image"
import Link from "next/link"
import React from "react"
export function Footer() {
  return (
    <footer className="bg-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <Image src="/images/logo.png" alt="MADFOATECH" width={160} height={60} className="h-12 w-auto" />
            </div>
            <p className="text-sm text-gray-600 mb-4 max-w-xs">
              Data visualization, and expense management for your business.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-6">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  POS Solutions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Insights
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Our Partners
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Career
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-6">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                    Ebook & Guide
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-6">Follow Us</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                    YouTube
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t">
        <div className="container py-6 flex flex-wrap justify-between items-center">
          <div className="flex gap-6 mb-4 md:mb-0">
            <Link href="#" className="text-xs text-gray-600 hover:text-gray-900">
              Privacy Policy
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="#" className="text-xs text-gray-600 hover:text-gray-900">
              Terms & Conditions
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="#" className="text-xs text-gray-600 hover:text-gray-900">
              Cookie Policy
            </Link>
          </div>
          <div className="text-xs text-gray-600">© Madfoatech 2025</div>
        </div>
      </div>
    </footer>
  )
}

