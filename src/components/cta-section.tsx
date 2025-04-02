import Image from "next/image"
import { ArrowRight } from "lucide-react"
import React from "react"
export function CTASection() {
  return (
    <section className="container py-12 md:py-16 my-8 md:my-16 relative">
      <div className="bg-blue-500 rounded-lg overflow-hidden relative">
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

        <div className="relative z-10 p-6 md:p-12 lg:p-16 flex flex-col md:flex-row items-center">
          <div className="text-white md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Ready To Get Started?</h2>
            <p className="text-lg md:text-xl mb-8">Get in touch or create an account.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-blue-500 px-6 md:px-8 py-2 md:py-3 rounded-md flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors">
                start now
                <ArrowRight size={16} />
              </button>
              <button className="border border-white text-white px-6 md:px-8 py-2 md:py-3 rounded-md flex items-center justify-center hover:bg-blue-600 transition-colors">
                Contact sales
              </button>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative">
              {/* POS Device */}
              <div className="absolute -left-10 top-1/2 -translate-y-1/2 z-10">
                <Image
                  src="/images/pos-device.png"
                  width={200}
                  height={400}
                  alt="POS Device"
                  className="transform -rotate-6 w-32 md:w-auto"
                />
              </div>

              {/* Phone */}
              <div className="relative z-20 ml-16">
                <Image
                  src="/images/wallet-app.png"
                  width={250}
                  height={500}
                  alt="Wallet App"
                  className="rounded-3xl border-8 border-black w-48 md:w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

