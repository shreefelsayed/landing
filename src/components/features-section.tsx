import Image from "next/image"
import React from "react"
export function FeaturesSection() {
  return (
    <section className="container py-12 md:py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">POS Solution Features</h2>
      <p className="text-center text-gray-600 mb-8 md:mb-12 max-w-3xl mx-auto px-4">
        As the cryptocurrency ecosystem continues to evolve, it's essential for users to stay informed, exercise
        caution,
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="border rounded-xl p-4 md:p-6 flex justify-center">
          <Image
            src="/images/wallet-app.png"
            width={350}
            height={700}
            alt="Wallet App Dashboard"
            className="rounded-xl"
          />
        </div>

        <div className="space-y-6 px-4 md:px-0">
          <div className="border rounded-xl p-4 md:p-6 relative">
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border bg-white flex items-center justify-center">
              <span className="font-semibold">1</span>
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2">Dashboard Management Tools</h3>
            <p className="text-gray-600 mb-4">
              Paymob's dashboard provides real-time transaction tracking and detailed history insights.
            </p>
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              <li>Need a quick glance at your daily sales figures?</li>
              <li>Looking to run a quick daily audit?</li>
            </ul>
          </div>

          <div className="border-l-2 border-dashed h-8 ml-4"></div>

          <div className="border rounded-xl p-4 md:p-6 relative">
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border bg-white flex items-center justify-center">
              <span className="font-semibold">2</span>
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2">High Performance Device</h3>
            <p className="text-gray-600">
              Paymob's Android POS device ensures fast, secure, and seamless payments with a smart touchscreen and easy
              checkout.
            </p>
          </div>

          <div className="border-l-2 border-dashed h-8 ml-4"></div>

          <div className="border rounded-xl p-4 md:p-6 relative">
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border bg-white flex items-center justify-center">
              <span className="font-semibold">3</span>
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2">Contactless (NFC Payments)</h3>
            <p className="text-gray-600">
              Let your customers pay by tapping their card on the POS using NFC technology. It's faster and easier than
              inserting cards and entering PIN numbers.
            </p>
          </div>

          <div className="border-l-2 border-dashed h-8 ml-4"></div>

          <div className="border rounded-xl p-4 md:p-6 relative">
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border bg-white flex items-center justify-center">
              <span className="font-semibold">4</span>
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2">Printed Receipt for All Transactions</h3>
            <p className="text-gray-600">
              Printed receipts for all types of transactions with your company's brand name.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

