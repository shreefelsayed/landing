import { FAQAccordion } from "@/components/faq-accordion"
import React from "react"
export function FAQSection() {
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
    <section className="container py-12 md:py-16 bg-gray-50">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">In case you missed anything.</h2>

      <div className="max-w-3xl mx-auto px-4 md:px-0">
        <FAQAccordion items={faqItems} />
      </div>
    </section>
  )
}

