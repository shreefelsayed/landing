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
        <div className="rounded-lg overflow-hidden relative">
          {/* Background gradient with pixel pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-blueGradient-start to-blueGradient-end">
            {/* Pixel pattern overlay */}
            <div className="absolute inset-0 opacity-10">
              <div className="grid grid-cols-20 grid-rows-20 h-full w-full">
                {Array(400)
                  .fill(0)
                  .map((_, i) => (
                    <div key={i} className={`${Math.random() > 0.8 ? "bg-white" : ""}`}></div>
                  ))}
              </div>
            </div>
          </div>

          <div className="relative z-10 p-8 md:p-10 flex flex-col md:flex-row items-center">
            {/* Left side - Image */}
            <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
              <div className="transform rotate-[-10deg]">
                <Image
                  src="/images/phone.png"
                  width={300}
                  height={600}
                  alt="POS Dashboard"
                  className="rounded-3xl border-8 border-black shadow-xl"
                />
              </div>
            </div>

            {/* Right side - Content */}
            <div className="md:w-1/2 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Maximize Sales Revenue</h3>
              <p className="mb-6">
                Add more point of sale payment methods to widen your revenue potential by allowing customers the choice
                to use their preferred payment method at your store : card payments, cash payments, digital wallets or
                even installments.
              </p>
              <button className="bg-white text-blue-500 px-5 py-2 rounded-md flex items-center gap-2 hover:bg-gray-100 transition-colors">
                Order your POS
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Card 2 - Exceptionally Easy Onboarding */}
        <div className="rounded-lg overflow-hidden relative">
          {/* Background gradient with pixel pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-blueGradient-start to-blueGradient-end">
            {/* Pixel pattern overlay */}
            <div className="absolute inset-0 opacity-10">
              <div className="grid grid-cols-20 grid-rows-20 h-full w-full">
                {Array(400)
                  .fill(0)
                  .map((_, i) => (
                    <div key={i} className={`${Math.random() > 0.8 ? "bg-white" : ""}`}></div>
                  ))}
              </div>
            </div>
          </div>

          <div className="relative z-10 p-8 md:p-10 flex flex-col md:flex-row items-center">
            {/* Left side - Content */}
            <div className="md:w-1/2 text-white mb-8 md:mb-0 order-2 md:order-1">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Exceptionally Easy Onboarding</h3>
              <p className="mb-6">
                Onboarding has never been easier. Order and receive your POS device immediately! Sign up and we will
                take care of the rest.
              </p>
              <button className="bg-white text-blue-500 px-5 py-2 rounded-md flex items-center gap-2 hover:bg-gray-100 transition-colors">
                Order your POS
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Right side - Image */}
            <div className="md:w-1/2 flex justify-center order-1 md:order-2">
              <div className="transform rotate-[10deg]">
                <Image
                  src="/images/phone.png"
                  width={300}
                  height={600}
                  alt="POS Dashboard"
                  className="rounded-3xl border-8 border-black shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 - Daily Settlement Guarantees */}
        <div className="rounded-lg overflow-hidden relative">
          {/* Background gradient with pixel pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-blueGradient-start to-blueGradient-end">
            {/* Pixel pattern overlay */}
            <div className="absolute inset-0 opacity-10">
              <div className="grid grid-cols-20 grid-rows-20 h-full w-full">
                {Array(400)
                  .fill(0)
                  .map((_, i) => (
                    <div key={i} className={`${Math.random() > 0.8 ? "bg-white" : ""}`}></div>
                  ))}
              </div>
            </div>
          </div>

          <div className="relative z-10 p-8 md:p-10 flex flex-col md:flex-row items-center">
            {/* Left side - Image */}
            <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
              <div className="transform rotate-[-10deg]">
                <Image
                  src="/images/phone.png"
                  width={300}
                  height={600}
                  alt="POS Dashboard"
                  className="rounded-3xl border-8 border-black shadow-xl"
                />
              </div>
            </div>

            {/* Right side - Content */}
            <div className="md:w-1/2 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Daily Settlement Guarantees</h3>
              <p className="mb-6">
                Receive your money right away and enjoy guaranteed daily settlements, never worry about cash flow delays
                again.
              </p>
              <button className="bg-white text-blue-500 px-5 py-2 rounded-md flex items-center gap-2 hover:bg-gray-100 transition-colors">
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
