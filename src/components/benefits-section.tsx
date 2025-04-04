"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import React from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import { translations } from "@/lib/translations"
import { motion, useInView } from "framer-motion"
import { benefitsPatternCells } from "@/lib/background-pattern"

export function BenefitsSection() {
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

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0, rotate: -20 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: -10,
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
          className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12"
        >
          {t.benefits.title}
        </motion.h2>

        {/* Benefit Cards */}
        <motion.div className="space-y-6" variants={containerVariants}>
          {[
            {
              title: t.benefits.card1.title,
              description: t.benefits.card1.description,
              cta: t.benefits.card1.cta,
              imageOrder: "order-1",
              contentOrder: "order-2",
              rotate: -10
            },
            {
              title: t.benefits.card2.title,
              description: t.benefits.card2.description,
              cta: t.benefits.card2.cta,
              imageOrder: "order-2",
              contentOrder: "order-1",
              rotate: 10
            },
            {
              title: t.benefits.card3.title,
              description: t.benefits.card3.description,
              cta: t.benefits.card3.cta,
              imageOrder: "order-1",
              contentOrder: "order-2",
              rotate: -10
            }
          ].map((card, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="rounded-lg overflow-hidden relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              {/* Background gradient with pixel pattern */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-blueGradient-start to-blueGradient-end"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                {/* Pixel pattern overlay */}
                <div className="absolute inset-0 opacity-10">
                  <div className="grid grid-cols-20 grid-rows-20 h-full w-full">
                    {benefitsPatternCells.map((isWhite, i) => (
                      <motion.div 
                        key={i} 
                        className={isWhite ? "bg-white" : ""}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: i * 0.001 }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>

              <div className="relative z-10 p-8 md:p-10 flex flex-col md:flex-row items-center">
                {/* Image */}
                <motion.div 
                  className={`md:w-1/2 mb-8 md:mb-0 flex justify-center ${card.imageOrder}`}
                  variants={imageVariants}
                  whileHover={{ rotate: card.rotate + 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/images/phone.png"
                    width={300}
                    height={600}
                    alt="POS Dashboard"
                    className="rounded-3xl"
                  />
                </motion.div>

                {/* Content */}
                <motion.div 
                  className={`md:w-1/2 text-white ${card.contentOrder}`}
                  variants={itemVariants}
                >
                  <motion.h3 
                    className="text-2xl md:text-3xl font-bold mb-4"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {card.title}
                  </motion.h3>
                  <motion.p 
                    className="mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {card.description}
                  </motion.p>
                  <motion.button 
                    className="bg-white text-blue-500 px-5 py-2 rounded-md flex items-center gap-2 hover:bg-gray-100 transition-colors group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {card.cta}
                    <motion.span
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight size={16} />
                    </motion.span>
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}


