import Image from "next/image"
import { ArrowRight } from "lucide-react"
import React from "react"
export function BenefitsSection() {
  return (
    <section className="container py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
        Reap the Benefits of Setting up a POS Solution
      </h2>

      {/* Benefit Cards */}
      <div className="space-y-6">
        {/* Card 1 - Maximize Sales Revenue */}
        <div className="bg-blue-500 rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center p-6 md:p-8">
            <div className="order-2 md:order-1">
              <Image
                src="/images/phone.png"
                width={400}
                height={300}
                alt="POS Dashboard"
                className="mx-auto transform -rotate-6"
              />
            </div>
            <div className="order-1 md:order-2 text-white mb-8 md:mb-0">
              <h3 className="text-xl md:text-2xl font-semibold mb-4">Maximize Sales Revenue</h3>
              <p className="mb-6">
                Add more point of sale payment methods to widen your revenue potential by allowing customers the choice
                to use their preferred payment method at your store : card payments, cash payments, digital wallets or
                even installments.
              </p>
              <button className="bg-white text-blue-500 px-4 py-2 rounded-md flex items-center gap-2 hover:bg-gray-100 transition-colors">
                Order your POS
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Card 2 - Exceptionally Easy Onboarding */}
        <div className="bg-blue-500 rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center p-6 md:p-8">
            <div className="text-white mb-8 md:mb-0">
              <h3 className="text-xl md:text-2xl font-semibold mb-4">Exceptionally Easy Onboarding</h3>
              <p className="mb-6">
                Onboarding has never been easier. Order and receive your POS device immediately! Sign up and we will
                take care of the rest.
              </p>
              <button className="bg-white text-blue-500 px-4 py-2 rounded-md flex items-center gap-2 hover:bg-gray-100 transition-colors">
                Order your POS
                <ArrowRight size={16} />
              </button>
            </div>
            <div>
              <Image
                src="/images/phone.png"
                width={400}
                height={300}
                alt="POS Dashboard"
                className="mx-auto transform rotate-6"
              />
            </div>
          </div>
        </div>

        {/* Card 3 - Daily Settlement Guarantees */}
        <div className="bg-blue-500 rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center p-6 md:p-8">
            <div className="order-2 md:order-1">
              <Image
                src="/images/phone.png"
                width={400}
                height={300}
                alt="POS Dashboard"
                className="mx-auto transform -rotate-6"
              />
            </div>
            <div className="order-1 md:order-2 text-white mb-8 md:mb-0">
              <h3 className="text-xl md:text-2xl font-semibold mb-4">Daily Settlement Guarantees</h3>
              <p className="mb-6">
                Receive your money right away and enjoy guaranteed daily settlements, never worry about cash flow delays
                again.
              </p>
              <button className="bg-white text-blue-500 px-4 py-2 rounded-md flex items-center gap-2 hover:bg-gray-100 transition-colors">
                Order your POS
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

