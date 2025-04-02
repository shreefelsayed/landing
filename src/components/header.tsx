"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { CustomButton } from "@/components/ui/custom-button"
import React from "react"
export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="container flex items-center justify-between py-4">
      <div className="flex items-center gap-2">
        <Image src="/images/logo.png" alt="MADFOATECH" width={160} height={60} className="h-12 w-auto" />
      </div>

      <nav className="hidden md:flex items-center gap-8">
        <Link href="#" className="text-sm font-medium text-blue-500 border-b-2 border-blue-500 pb-1">
          POS Solution
        </Link>
        <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
          Developers
        </Link>
        <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
          Company
        </Link>
        <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
          Pricing
        </Link>
      </nav>

      <div className="flex items-center gap-4">
        <CustomButton className="hidden md:block" variant="primary">
          Sign in
        </CustomButton>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-600 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Menu Overlay */}
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
                <CustomButton className="mt-4" variant="primary" onClick={() => setIsOpen(false)}>
                  Sign in
                </CustomButton>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

