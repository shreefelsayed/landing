"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import React from "react"
interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  items: FAQItem[]
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="border-b border-gray-200">
          <button
            className="w-full py-4 flex justify-between items-center text-left"
            onClick={() => toggleItem(index)}
            aria-expanded={openIndex === index}
          >
            <span className="text-lg">{item.question}</span>
            <ChevronDown
              className={`transition-transform duration-200 ${openIndex === index ? "transform rotate-180" : ""}`}
              size={24}
            />
          </button>
          {openIndex === index && (
            <div className="pb-4 text-gray-600">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

