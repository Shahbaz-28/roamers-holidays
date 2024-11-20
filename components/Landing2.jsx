'use client'

import React, { useRef } from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'

const slides = [
  {
    image: '/images/tajmahal.jpg',
    title: 'The Taj Mahal',
    subtitle: 'A symbol of eternal love and architectural grandeur',
    buttonText: 'Explore the Majesty',
  },
  {
    image: '/images/france.jpg',
    title: 'Paris: City of Light',
    subtitle: 'Marvel at timeless beauty, romance, and culture',
    buttonText: 'Discover Paris',
  },
  {
    image: '/images/switcherland.jpg',
    title: 'Swiss Alps Adventure',
    subtitle: 'Experience breathtaking peaks and serene landscapes',
    buttonText: 'Embark on the Journey',
  },
]

export default function TravelHero() {
  const sliderRef = useRef(null)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    customPaging: () => (
      <div className="h-2 w-2 rounded-full bg-white opacity-50 hover:opacity-100 transition-opacity duration-300 ease-in-out" />
    ),
    appendDots: (dots) => (
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3">{dots}</div>
    ),
  }

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative h-screen w-full">
            <Image
              src={slide.image}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center text-white px-4 sm:px-6 md:px-8 max-w-4xl"
              >
                <h1 className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                  {slide.title}
                </h1>
                <p className="mb-6 sm:mb-8 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-light italic tracking-wide">
                  {slide.subtitle}
                </p>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-full bg-white text-black px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base md:text-lg font-bold uppercase tracking-wider transition-all duration-300 ease-in-out hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black shadow-lg"
                >
                  {slide.buttonText}
                </motion.button>
              </motion.div>
            </div>
          </div>
        ))}
      </Slider>
      <button
        onClick={() => sliderRef.current?.slickPrev()}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 text-white p-3 rounded-full hover:bg-white/40 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={() => sliderRef.current?.slickNext()}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 text-white p-3 rounded-full hover:bg-white/40 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  )
}
