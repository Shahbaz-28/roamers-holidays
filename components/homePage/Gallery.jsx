"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

const destinations = [
  { name: "Bali", image: "/images/bali.svg", description: "Experience the beauty of Balinese temples and lush landscapes." },
  { name: "Italy", image: "/images/italy.svg", description: "Discover the rich history and stunning architecture of Italy." },
  { name: "Paris", image: "/images/paris.svg", description: "Immerse yourself in the romantic atmosphere of the City of Light." },
]

export default function Gallery() {
  const [hoveredDestination, setHoveredDestination] = useState(null)

  return (
    <div className="container mx-auto px-2 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-900 mb-2">Unforgettable Moments</h1>
        <p className="text-lg text-blue-700">Explore our curated collection of breathtaking destinations</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {destinations.map((destination, index) => (
          <Card 
            key={destination.name} 
            className={`relative overflow-hidden ${index === 0 ? 'md:row-span-2' : ''} group`}
            onMouseEnter={() => setHoveredDestination(destination.name)}
            onMouseLeave={() => setHoveredDestination(null)}
          >
            <CardContent className="p-0 h-full">
              <div className={`relative h-full ${index === 0 ? 'aspect-[3/4] md:aspect-auto' : 'aspect-[16/9]'}`}>
                <Image
                  src={destination.image}
                  alt={`Scenic view of ${destination.name}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 group-hover:opacity-80" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 transition-transform duration-300 group-hover:translate-y-0">
                  <h2 className="text-white text-2xl font-bold mb-2">{destination.name}</h2>
                  <p className={`text-white text-sm opacity-0 transition-opacity duration-300 ${hoveredDestination === destination.name ? 'opacity-100' : ''}`}>
                    {destination.description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}