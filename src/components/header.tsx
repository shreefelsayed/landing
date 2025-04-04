"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, Globe } from "lucide-react"
import { CustomButton } from "./ui/custom-button"
import React from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import { translations } from "@/lib/translations"
import { usePathname } from "next/navigation"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage } = useLanguage()
  const pathname = usePathname()
  const t = translations[language]
  const isRTL = language === 'ar'

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en')
  }

  const isActive = (path: string) => pathname === path

  const headerClasses = `container flex items-center justify-between py-4 ${isRTL ? 'flex-row-reverse' : ''}`
  const logoContainerClasses = `flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`
  const navClasses = `hidden md:flex items-center gap-8 ${isRTL ? 'flex-row-reverse' : ''}`
  const actionsClasses = `flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`

  return (
    <header className={headerClasses}>
      <div className={logoContainerClasses}>
        <Link href="/">
          <Image src="/images/logo.png" alt="MADFOATECH" width={160} height={60} className="h-12 w-auto" />
        </Link>
      </div>

      <nav className={navClasses}>
        <Link 
          href="/" 
          className={`text-sm font-medium ${isActive('/') ? 'text-blue-500 border-b-2 border-blue-500 pb-1' : 'text-gray-600 hover:text-gray-900'}`}
        >
          {t.nav.posSolution}
        </Link>
        <Link 
          href="/developers" 
          className={`text-sm ${isActive('/developers') ? 'text-blue-500 border-b-2 border-blue-500 pb-1' : 'text-gray-600 hover:text-gray-900'}`}
        >
          {t.nav.developers}
        </Link>
        <Link 
          href="/company" 
          className={`text-sm ${isActive('/company') ? 'text-blue-500 border-b-2 border-blue-500 pb-1' : 'text-gray-600 hover:text-gray-900'}`}
        >
          {t.nav.company}
        </Link>
        <Link 
          href="/pricing" 
          className={`text-sm ${isActive('/pricing') ? 'text-blue-500 border-b-2 border-blue-500 pb-1' : 'text-gray-600 hover:text-gray-900'}`}
        >
          {t.nav.pricing}
        </Link>
        <Link
          href="/contact-sales"
          className={`text-lg ${isActive('/contact-sales') ? 'text-blue-500 border-b-2 border-blue-500 pb-1' : 'text-gray-600 hover:text-gray-900'}`}
          onClick={() => setIsOpen(false)}
        >
          {t.nav.contactSales}
        </Link>
      </nav>

      <div className={actionsClasses}>
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
              <div className={`flex ${isRTL ? 'justify-start' : 'justify-end'} p-4`}>
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
                  href="/"
                  className={`text-lg font-medium ${isActive('/') ? 'text-blue-500 border-b-2 border-blue-500 pb-1' : 'text-gray-600 hover:text-gray-900'}`}
                  onClick={() => setIsOpen(false)}
                >
                  {t.nav.posSolution}
                </Link>
                <Link 
                  href="/developers" 
                  className={`text-lg ${isActive('/developers') ? 'text-blue-500 border-b-2 border-blue-500 pb-1' : 'text-gray-600 hover:text-gray-900'}`} 
                  onClick={() => setIsOpen(false)}
                >
                  {t.nav.developers}
                </Link>
                <Link 
                  href="/company" 
                  className={`text-lg ${isActive('/company') ? 'text-blue-500 border-b-2 border-blue-500 pb-1' : 'text-gray-600 hover:text-gray-900'}`} 
                  onClick={() => setIsOpen(false)}
                >
                  {t.nav.company}
                </Link>
                <Link 
                  href="/pricing" 
                  className={`text-lg ${isActive('/pricing') ? 'text-blue-500 border-b-2 border-blue-500 pb-1' : 'text-gray-600 hover:text-gray-900'}`} 
                  onClick={() => setIsOpen(false)}
                >
                  {t.nav.pricing}
                </Link>
                <Link
                  href="/contact-sales"
                  className={`text-lg ${isActive('/contact-sales') ? 'text-blue-500 border-b-2 border-blue-500 pb-1' : 'text-gray-600 hover:text-gray-900'}`}
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
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

