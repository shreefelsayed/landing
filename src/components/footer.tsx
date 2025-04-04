"use client"

import Image from "next/image"
import Link from "next/link"
import { Globe } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import { translations } from "@/lib/translations"

export function Footer() {
  const { language, setLanguage } = useLanguage()
  const t = translations[language]
  const isRTL = language === 'ar'

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en')
  }

  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className={`grid grid-cols-1 md:grid-cols-4 gap-8 ${isRTL ? 'text-right' : 'text-left'}`}>
          <div>
            <div className="mb-4">
              <Image src="/images/logo.png" alt="MADFOATECH" width={160} height={60} className="h-12 w-auto" />
            </div>
            <p className="text-sm text-gray-600 mb-4 max-w-xs">
              {t.footer.description}
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-6">{t.footer.product}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  {t.footer.posSolutions}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  {t.footer.insights}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-6">{t.footer.company}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  {t.footer.aboutUs}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  {t.footer.ourPartners}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  {t.footer.career}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  {t.footer.contactUs}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-6">{t.footer.resources}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  {t.footer.blog}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  {t.footer.pricing}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  {t.footer.faq}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  {t.footer.ebookGuide}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12">
          <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-wrap justify-between items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
            <div className={`flex gap-6 mb-4 md:mb-0 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <Link href="#" className="text-xs text-gray-600 hover:text-gray-900">
                {t.footer.privacyPolicy}
              </Link>
              <span className="text-gray-300">|</span>
              <Link href="#" className="text-xs text-gray-600 hover:text-gray-900">
                {t.footer.termsConditions}
              </Link>
              <span className="text-gray-300">|</span>
              <Link href="#" className="text-xs text-gray-600 hover:text-gray-900">
                {t.footer.cookiePolicy}
              </Link>
            </div>
            <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 text-xs text-gray-600 hover:text-gray-900"
              >
                <Globe size={14} />
                <span>{language === 'en' ? 'العربية' : 'English'}</span>
              </button>
              <div className="text-xs text-gray-600">{t.footer.copyright}</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

