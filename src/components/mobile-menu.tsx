"use client"
import React from "react"
import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-600 focus:outline-none"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-gray-600 focus:outline-none"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col items-center gap-6 p-8">
            <Link
              href="#"
              className="text-lg font-medium text-blue-500 border-b-2 border-blue-500 pb-1"
              onClick={() => setIsOpen(false)}
            >
              POS Solution
            </Link>
            <Link href="#" className="text-lg text-gray-600 hover:text-gray-900" onClick={() => setIsOpen(false)}>
              Developers
            </Link>
            <Link href="#" className="text-lg text-gray-600 hover:text-gray-900" onClick={() => setIsOpen(false)}>
              Company
            </Link>
            <Link href="#" className="text-lg text-gray-600 hover:text-gray-900" onClick={() => setIsOpen(false)}>
              Pricing
            </Link>
            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md">Sign in</button>
          </nav>
        </div>
      )}
    </div>
  )
}

