'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const slides = [
  {
    image: '/images/AboutBanner.svg',
    title: 'Wanderlust Unleashed',
    subtitle: 'Where every step is a story, every view a masterpiece',
    buttonText: 'Embark on Your Odyssey'
  },
  {
    image: '/images/bali.svg',
    title: 'Bali: Paradise Redefined',
    subtitle: 'Dive into a world where spirituality meets serenity',
    buttonText: 'Discover Bali\'s Magic'
  },
  {
    image: '/images/bgimage.svg',
    title: 'Urban Symphony',
    subtitle: 'Orchestrate your adventure in the world\'s most vibrant metropolises',
    buttonText: 'Conduct Your City Tour'
  }
]

export default function TravelHero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 3000) // Change slide every 3 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Image Slides */}
      {slides.map((slide, index) => (
        <Image
          key={slide.image}
          src={slide.image}
          alt={`Travel destination ${index + 1}`}
          fill
          className={`object-cover transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          priority={index === 0}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50">
        <div className="flex h-full items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <motion.h1
                className="mb-4 text-4xl font-bold sm:text-5xl md:text-6xl"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                {slides[currentSlide].title}
              </motion.h1>
              <motion.p
                className="mb-8 text-xl sm:text-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                {slides[currentSlide].subtitle}
              </motion.p>
              <motion.button
                className="rounded bg-primary px-6 py-3 font-bold text-primary-foreground transition-transform hover:scale-105 hover:bg-primary/90"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {slides[currentSlide].buttonText}
              </motion.button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 w-3 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            whileHover={{ scale: 1.2 }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}