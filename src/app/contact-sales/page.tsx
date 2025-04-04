"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChevronDown, Phone, Mail, MapPin, Camera, Facebook, Instagram } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import { translations } from "@/lib/translations"
import { patternCells } from "@/lib/background-pattern"

export default function ContactSales() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const { language } = useLanguage()
  const t = translations[language]

  const toggleFaq = (index: number) => {
    if (openFaq === index) {
      setOpenFaq(null)
    } else {
      setOpenFaq(index)
    }
  }

  const faqItems = [
    {
      question: "How do payments work?",
      answer:
        "Our payment system securely processes transactions through our POS device, supporting various payment methods including credit/debit cards, digital wallets, and cash. Funds are settled to your account daily.",
    },
    {
      question: "How long does it take to set up?",
      answer:
        "Most merchants can complete the setup process in under 30 minutes. Our intuitive interface guides you through each step, and our support team is available if you need assistance.",
    },
    {
      question: "Can I teach my existing students on the platform?",
      answer:
        "Yes, you can easily migrate your existing customer base to our platform. We provide tools to import customer data and transaction history.",
    },
    {
      question: "How do I determine when I am available to teach?",
      answer:
        "Our system allows you to set your business hours and availability. You can manage your schedule through the dashboard and make adjustments as needed.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <div className="">
        <Header />
      </div>

      <main className="flex-1">
        {/* Hero Banner */}
        <section className="w-full bg-blue-500 relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-20 grid-rows-20 h-full w-full">
              {Array(400)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className={`${Math.random() > 0.8 ? "bg-white" : ""}`}></div>
                ))}
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t.sales.title}
            </h1>
            <p className="text-white text-lg max-w-2xl mx-auto">
              {t.sales.subtitle}
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-lg shadow-sm border p-8 mb-12">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    {t.sales.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="full name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    {t.sales.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="email@example.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  {t.sales.form.phone}
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="phone"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="business-name" className="block text-sm font-medium text-gray-700 mb-1">
                    {t.sales.form.businessName}
                  </label>
                  <input
                    type="text"
                    id="business-name"
                    placeholder="phone"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="business-industry" className="block text-sm font-medium text-gray-700 mb-1">
                    {t.sales.form.businessIndustry}
                  </label>
                  <input
                    type="text"
                    id="business-industry"
                    placeholder="phone"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="payment-volume" className="block text-sm font-medium text-gray-700 mb-1">
                    {t.sales.form.paymentVolume}
                  </label>
                  <input
                    type="text"
                    id="payment-volume"
                    placeholder="phone"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="devices" className="block text-sm font-medium text-gray-700 mb-1">
                    {t.sales.form.devices}
                  </label>
                  <input
                    type="text"
                    id="devices"
                    placeholder="number of devices you need"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
                  {t.sales.form.website}
                </label>
                <input
                  type="url"
                  id="website"
                  placeholder="phone"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-1">
                  {t.sales.form.comments}
                </label>
                <textarea
                  id="comments"
                  rows={5}
                  placeholder="Leave us a message..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="privacy"
                  className="h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300 rounded"
                  required
                />
                <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
                  {t.sales.form.privacyPolicy}
                </label>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-md w-full md:w-48"
                >
                  {t.sales.form.send}
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-white rounded-lg shadow-sm border p-8 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <Phone className="text-gray-500" size={20} />
                <span className="text-gray-700">{t.sales.contactInfo.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-gray-500" size={20} />
                <span className="text-gray-700">{t.sales.contactInfo.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-gray-500" size={20} />
                <span className="text-gray-700">{t.sales.contactInfo.address}</span>
              </div>
            </div>
            <div className="flex justify-end mt-6 gap-4">
              <Link href="#" className="text-gray-500 hover:text-gray-700">
                <Camera size={20} />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-700">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-700">
                <Instagram size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
          <h2 className="text-3xl font-bold text-center mb-12">{t.faq.title}</h2>
          <div className="max-w-3xl mx-auto">
            {t.faq.items.map((item, index) => (
              <div key={index} className="border-b border-gray-200">
                <button
                  className="w-full py-4 flex justify-between items-center text-left"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-lg font-medium">{item.question}</span>
                  <ChevronDown
                    className={`transition-transform duration-200 ${openFaq === index ? "transform rotate-180" : ""}`}
                    size={24}
                  />
                </button>
                {openFaq === index && (
                  <div className="pb-4 text-gray-600">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

