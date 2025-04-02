import Image from "next/image"
import { CustomButton } from "@/components/ui/custom-button"
import React from "react"
export function HeroSection() {
  return (
    <section className="container py-12 md:py-24 relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-amber-400 font-medium mb-2">Stay saving your money</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Online payments <br />
            for <span className="text-blue-500">everyone</span>
          </h1>
          <p className="text-gray-600 mb-8 max-w-md">
            Make more sales by giving customers ability to pay the way they love
          </p>
          <CustomButton className="px-6 md:px-8 py-4 md:py-6 text-base" variant="primary">
            Start Now
          </CustomButton>
        </div>
        <div className="relative mt-8 md:mt-0">
          {/* Blue background */}
          <div className="absolute inset-0 bg-blue-500 rounded-lg -right-4 md:-right-16 -top-8 md:-top-16 -bottom-8 md:-bottom-16"></div>

          {/* Rating card */}
          <div className="absolute top-4 md:top-16 left-0 z-20">
            <Image
              src="/images/rating.png"
              width={170}
              height={80}
              alt="Rating 4 stars - 24,254 reviews"
              className="rounded-lg shadow-lg w-32 md:w-auto"
            />
          </div>

          {/* POS Device */}
          <div className="relative z-10 mt-4 md:mt-8">
            <Image src="/images/pos-device.png" width={600} height={500} alt="POS Device" className="relative z-10" />
          </div>

          {/* Payment terminal UI */}
          <div className="absolute bottom-4 md:bottom-16 right-0 z-20">
            <Image
              src="/images/payment-terminal.png"
              width={220}
              height={300}
              alt="Payment Terminal"
              className="rounded-lg shadow-lg w-32 md:w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

