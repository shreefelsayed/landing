"use client"

import Image from "next/image"
import { ArrowRight, CreditCard, DollarSign, Wallet } from "lucide-react"
import React from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import { translations } from "@/lib/translations"
import { patternCells } from "@/lib/background-pattern"
import { motion, useInView } from "framer-motion"

export function PaymentOptionsSection() {
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

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="container py-12 md:py-16 bg-blue-500 rounded-lg relative overflow-hidden">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Background pattern */}
        <motion.div 
          className="absolute inset-0 opacity-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="grid grid-cols-20 grid-rows-20 h-full w-full">
            {patternCells.map((isWhite, i) => (
              <motion.div 
                key={i} 
                className={isWhite ? "bg-white" : ""}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: i * 0.001 }}
              />
            ))}
          </div>
        </motion.div>

        <div className="relative z-10 px-4 md:px-0">
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-12"
            variants={itemVariants}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-0"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.2 }}
            >
              {t.payment.title}
            </motion.h2>
            <motion.div 
              className="text-white max-w-xs"
              variants={itemVariants}
            >
              <motion.p 
                className="mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {t.payment.subtitle}
              </motion.p>
              <motion.button 
                className="bg-white text-blue-500 px-4 py-2 rounded-md flex items-center gap-2 hover:bg-gray-100 transition-colors group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t.payment.orderButton}
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight size={16} />
                </motion.span>
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
          >
            {[
              {
                title: t.payment.cards.title,
                description: t.payment.cards.description,
                icon: <CreditCard size={48} className="text-blue-500" />,
                logos: ["valu", "cib", "mashreq", "banque-du-caire", "emirates-nbd"]
              },
              {
                title: t.payment.installments.title,
                description: t.payment.installments.description,
                icon: <DollarSign size={48} className="text-blue-500" />,
                logos: ["valu", "cib", "mashreq", "banque-du-caire", "emirates-nbd"]
              },
              {
                title: t.payment.cash.title,
                description: t.payment.cash.description,
                icon: <DollarSign size={48} className="text-blue-500" />,
                logos: []
              },
              {
                title: t.payment.digitalWallets.title,
                description: t.payment.digitalWallets.description,
                icon: <Wallet size={48} className="text-blue-500" />,
                logos: ["valu", "cib", "mashreq", "banque-du-caire", "emirates-nbd"]
              }
            ].map((option, index) => (
              <motion.div 
                key={index}
                variants={cardVariants}
                className="bg-white p-6 md:p-8 rounded-lg group"
                whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="flex justify-between mb-6"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.h3 
                    className="text-xl md:text-2xl font-bold"
                    whileHover={{ color: "#3B82F6" }}
                    transition={{ duration: 0.2 }}
                  >
                    {option.title}
                  </motion.h3>
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {option.icon}
                  </motion.div>
                </motion.div>
                <motion.p 
                  className="text-gray-700 mb-8 text-base md:text-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {option.description}
                </motion.p>
                {option.logos.length > 0 && (
                  <motion.div 
                    className="flex flex-wrap items-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {option.logos.map((logo, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Image 
                          src={`/images/logo-${logo}.png`} 
                          width={60} 
                          height={30} 
                          alt={logo} 
                        />
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-blueGradient-start to-blueGradient-end rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
    </section>
  )
}

