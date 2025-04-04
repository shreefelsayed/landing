"use client"

import React from "react"
import Image from "next/image"
import { useLanguage } from "@/contexts/LanguageContext"
import { translations } from "@/lib/translations"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function FeaturesSection() {
  const { language } = useLanguage()
  const t = translations[language]
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
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

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="container py-12 overflow-hidden">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.h2 
          variants={itemVariants}
          className="text-2xl md:text-3xl font-bold text-center mb-8"
        >
          {t.features.title}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div variants={imageVariants}>
            <Image
              src="/images/wallet-app.png"
              width={400}
              height={800}
              alt="POS App Interface"
              className="w-full max-w-md mx-auto"
            />
          </motion.div>

          <motion.div 
            className="space-y-6"
            variants={containerVariants}
          >
            {[
              { title: t.features.feature1.title, description: t.features.feature1.description },
              { title: t.features.feature2.title, description: t.features.feature2.description },
              { title: t.features.feature3.title, description: t.features.feature3.description },
              { title: t.features.feature4.title, description: t.features.feature4.description }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="flex items-start gap-4 group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-blue-500 font-semibold">{index + 1}</span>
                </motion.div>
                <div>
                  <motion.h3 
                    className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors"
                  >
                    {feature.title}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {feature.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

