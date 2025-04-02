import Image from "next/image"
import { ArrowRight, CreditCard, DollarSign, Wallet } from "lucide-react"
import React from "react"
export function PaymentOptionsSection() {
  return (
    <section className="container py-12 md:py-16 bg-blue-500 rounded-lg relative overflow-hidden">
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

      <div className="relative z-10 px-4 md:px-0">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-0">Flexible Payment Options</h2>
          <div className="text-white max-w-xs">
            <p className="mb-4">Forchains helps you guide your saving activity with secured and easily</p>
            <button className="bg-white text-blue-500 px-4 py-2 rounded-md flex items-center gap-2 hover:bg-gray-100 transition-colors">
              Order your POS
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Cards */}
          <div className="bg-white p-6 md:p-8 rounded-lg">
            <div className="flex justify-between mb-6">
              <h3 className="text-xl md:text-2xl font-bold">Cards</h3>
              <CreditCard size={48} className="text-blue-500" />
            </div>
            <p className="text-gray-700 mb-8 text-base md:text-lg">
              Facilitate secure credit and debit card transactions through all major electronic cards
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Image src="/images/logo-valu.png" width={60} height={30} alt="Valu" />
              <Image src="/images/logo-cib.png" width={60} height={30} alt="CIB" />
              <Image src="/images/logo-mashreq.png" width={60} height={30} alt="Mashreq" />
              <Image src="/images/logo-banque-du-caire.png" width={60} height={30} alt="Banque du Caire" />
              <Image src="/images/logo-emirates-nbd.png" width={60} height={30} alt="Emirates NBD" />
            </div>
          </div>

          {/* Installments */}
          <div className="bg-white p-6 md:p-8 rounded-lg">
            <div className="flex justify-between mb-6">
              <h3 className="text-xl md:text-2xl font-bold">Installments</h3>
              <DollarSign size={48} className="text-blue-500" />
            </div>
            <p className="text-gray-700 mb-8 text-base md:text-lg">
              Enable convenience and increase sales by providing your customers with flexible payment options.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Image src="/images/logo-valu.png" width={60} height={30} alt="Valu" />
              <Image src="/images/logo-cib.png" width={60} height={30} alt="CIB" />
              <Image src="/images/logo-mashreq.png" width={60} height={30} alt="Mashreq" />
              <Image src="/images/logo-banque-du-caire.png" width={60} height={30} alt="Banque du Caire" />
              <Image src="/images/logo-emirates-nbd.png" width={60} height={30} alt="Emirates NBD" />
            </div>
          </div>

          {/* Cash */}
          <div className="bg-white p-6 md:p-8 rounded-lg">
            <div className="flex justify-between mb-6">
              <h3 className="text-xl md:text-2xl font-bold">Cash</h3>
              <DollarSign size={48} className="text-blue-500" />
            </div>
            <p className="text-gray-700 mb-8 text-base md:text-lg">
              Log all cash transactions & track all orders through the POS device
            </p>
          </div>

          {/* Digital Wallets */}
          <div className="bg-white p-6 md:p-8 rounded-lg">
            <div className="flex justify-between mb-6">
              <h3 className="text-xl md:text-2xl font-bold">Digital Wallets</h3>
              <Wallet size={48} className="text-blue-500" />
            </div>
            <p className="text-gray-700 mb-8 text-base md:text-lg">
              Paymob enables your clients to pay seamlessly via all digital wallet providers.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Image src="/images/logo-valu.png" width={60} height={30} alt="Valu" />
              <Image src="/images/logo-cib.png" width={60} height={30} alt="CIB" />
              <Image src="/images/logo-mashreq.png" width={60} height={30} alt="Mashreq" />
              <Image src="/images/logo-banque-du-caire.png" width={60} height={30} alt="Banque du Caire" />
              <Image src="/images/logo-emirates-nbd.png" width={60} height={30} alt="Emirates NBD" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

