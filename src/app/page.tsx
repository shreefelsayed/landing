import React from "react"
import { Header } from "../components/header"
import { HeroSection } from "../components/hero-section"
import { BenefitsSection } from "../components/benefits-section"
import { FeaturesSection } from "../components/features-section"
import { PaymentOptionsSection } from "../components/payment-options-section"
import { CTASection } from "../components/cta-section"
import { FAQSection } from "../components/faq-section"
import { Footer } from "../components/footer"

export default function Home() {
  return (
    <div className="">
      <Header />

      <main className="flex-1">
        <HeroSection />
        <BenefitsSection />
        <FeaturesSection />
        <PaymentOptionsSection />
        <CTASection />
        <FAQSection />
      </main>

      <Footer />
    </div>
  )
}

