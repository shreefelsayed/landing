"use client"

import Image from "next/image"
import { CustomButton } from "./ui/custom-button"
import React from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import { translations } from "@/lib/translations"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { patternCells } from "@/lib/background-pattern"

export function HeroSection() {
  const { language } = useLanguage()
  const t = translations[language]
  const isRTL = language === 'ar'
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 100])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section className="relative w-full overflow-hidden">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24"
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div 
          className="flex flex-col md:flex-row relative"
          style={{ y, opacity }}
        >
          {/* Left content */}
          <motion.div 
            className={`w-full md:w-1/2 z-10 flex flex-col items-center md:items-start pb-12 md:pb-0 ${isRTL ? 'md:order-2 md:text-right' : 'md:text-left'}`}
            variants={itemVariants}
          >
            <AnimatePresence mode="wait">
              <motion.p 
                key={language}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className={`text-amber-400 font-medium mb-4 text-center ${isRTL ? 'md:text-right' : 'md:text-left'}`}
              >
                {t.hero.tagline}
              </motion.p>
            </AnimatePresence>
            
            <AnimatePresence mode="wait">
              <motion.h1 
                key={`${language}-title`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-center ${isRTL ? 'md:text-right' : 'md:text-left'}`}
              >
                {language === 'en' ? (
                  <>
                    Online payments for <span className="text-blue-500">everyone</span>
                  </>
                ) : (
                  <>
                    مدفوعات عبر الإنترنت <span className="text-blue-500">للجميع</span>
                  </>
                )}
              </motion.h1>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.p 
                key={`${language}-desc`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className={`text-gray-700 mb-8 max-w-md text-base sm:text-lg text-center ${isRTL ? 'md:text-right' : 'md:text-left'}`}
              >
                {t.hero.description}
              </motion.p>
            </AnimatePresence>

            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-md font-medium text-sm sm:text-base relative overflow-hidden group"
            >
              <motion.span
                className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"
                initial={false}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              />
              {t.hero.cta}
            </motion.button>
          </motion.div>

          {/* Right content with device */}
          <motion.div 
            className={`w-full min-h-[500px] md:min-h-0 md:w-1/2 relative ${isRTL ? 'md:left-0' : 'md:right-0'} md:absolute md:top-0 md:bottom-0`}
            variants={itemVariants}
          >
            {/* Blue background */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className={`absolute inset-0 bg-gradient-to-r ${isRTL ? 'from-blueGradient-end to-blueGradient-start' : 'from-blueGradient-start to-blueGradient-end'} rounded-3xl md:rounded-none ${isRTL ? 'md:rounded-r-3xl' : 'md:rounded-l-3xl'} z-0`}
            >
              <div className="absolute inset-0 opacity-10">
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
              </div>
            </motion.div>

            {/* Rating card */}
            <motion.div 
              className={`absolute top-4 sm:top-8 ${isRTL ? 'right-4' : 'left-4'} z-20`}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src="/images/rating.png"
                width={150}
                height={70}
                alt="Rating 4 stars - 24,254 reviews"
                className="rounded-lg shadow-lg w-[120px] sm:w-[170px]"
              />
            </motion.div>

            {/* POS Device */}
            <motion.div 
              className="relative z-10 flex justify-center items-center h-full pt-16 pb-20"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className={`transform ${isRTL ? '-rotate-12' : 'rotate-12'}`}>
                <Image
                  src="/images/pos-device.png"
                  width={400}
                  height={700}
                  alt="POS Device"
                  className="relative z-10 w-[280px] sm:w-[400px]"
                />
              </div>
            </motion.div>

            {/* Payment terminal UI */}
            <motion.div 
              className={`absolute bottom-4 sm:bottom-8 ${isRTL ? 'left-4' : 'right-4'} z-20`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src="/images/payment-terminal.png"
                width={220}
                height={300}
                alt="Payment Terminal"
                className="rounded-lg shadow-lg w-[180px] sm:w-[220px]"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
