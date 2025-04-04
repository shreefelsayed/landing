"use client"

import { FAQAccordion } from "./faq-accordion"
import React from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import { translations } from "@/lib/translations"
import { motion, useInView } from "framer-motion"

export function FAQSection() {
  const { language } = useLanguage()
  const t = translations[language]
  const ref = React.useRef(null)
  const inView = useInView(ref, {
    once: true,
    amount: 0.1
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="container py-12 bg-gray-50">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.h2 
          variants={itemVariants}
          className="text-2xl md:text-3xl font-bold text-center mb-8"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          {t.faq.title}
        </motion.h2>
        <motion.div 
          className="max-w-3xl mx-auto"
          variants={containerVariants}
        >
          <FAQAccordion items={t.faq.items} />
        </motion.div>
      </motion.div>
    </section>
  )
}

