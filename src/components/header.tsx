"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, Globe } from "lucide-react"
import { CustomButton } from "./ui/custom-button"
import React from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import { translations } from "@/lib/translations"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage } = useLanguage()
  const t = translations[language]

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en')
  }

  return (
    <header className="container flex items-center justify-between py-4">
      <div className="flex items-center gap-2">
        <Link href="/">
          <Image src="/images/logo.png" alt="MADFOATECH" width={160} height={60} className="h-12 w-auto" />
        </Link>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        <Link href="#" className="text-sm font-medium text-blue-500 border-b-2 border-blue-500 pb-1">
          {t.nav.posSolution}
        </Link>
        <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
          {t.nav.developers}
        </Link>
        <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
          {t.nav.company}
        </Link>
        <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
          {t.nav.pricing}
        </Link>
        <Link
          href="/contact-sales"
          className="text-lg text-blue-500 hover:text-blue-600"
          onClick={() => setIsOpen(false)}
        >
          {t.nav.contactSales}
        </Link>
      </nav>

      <div className="flex items-center gap-4">
        <button
          onClick={toggleLanguage}
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
        >
          <Globe size={16} />
          <span>{language === 'en' ? 'العربية' : 'English'}</span>
        </button>

        <CustomButton className="hidden md:block" variant="primary">
          {t.nav.signIn}
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
                  {t.nav.posSolution}
                </Link>
                <Link href="#" className="text-lg text-gray-600 hover:text-gray-900" onClick={() => setIsOpen(false)}>
                  {t.nav.developers}
                </Link>
                <Link href="#" className="text-lg text-gray-600 hover:text-gray-900" onClick={() => setIsOpen(false)}>
                  {t.nav.company}
                </Link>
                <Link href="#" className="text-lg text-gray-600 hover:text-gray-900" onClick={() => setIsOpen(false)}>
                  {t.nav.pricing}
                </Link>
                <Link
                  href="/contact-sales"
                  className="text-lg text-blue-500 hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  {t.nav.contactSales}
                </Link>
                <button
                  onClick={toggleLanguage}
                  className="flex items-center gap-2 text-lg text-gray-600 hover:text-gray-900"
                >
                  <Globe size={16} />
                  <span>{language === 'en' ? 'العربية' : 'English'}</span>
                </button>
                <CustomButton className="mt-4" variant="primary" onClick={() => setIsOpen(false)}>
                  {t.nav.signIn}
                </CustomButton>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

