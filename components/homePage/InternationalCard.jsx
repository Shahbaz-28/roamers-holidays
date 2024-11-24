'use client'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Star, Plane, Calendar } from 'lucide-react'
import Image from "next/image"
import travelPackages from "@/internationalData"


export default function InternationalCard() {

  const cardDetails = Object.values(travelPackages)


  const handleClick = (url) => {
    window.location.href = url; 
  }
  return (
    <div className="container mx-auto  py-8 sm:py-6 mt-6">
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-sky-900 mb-2 sm:mb-4 max-w-[700px] mx-auto !leading-[57px]">
        Journey to the World’s Most Iconic Destinations
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {cardDetails.map((destination, index) => (
          <Card
            key={index}
            className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white"
          >
            <div className="relative overflow-hidden">
              <Image
                src={destination.images}
                alt={`Scenic view of ${destination.country}`}
                width={400}
                height={224}
                className="w-full h-48 sm:h-56 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 p-3 sm:p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-xs sm:text-sm font-medium mb-1 flex items-center">
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                  Available all year
                </p>
                <p className="text-xs sm:text-sm font-medium flex items-center">
                  <Plane className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                  Flight included
                </p>
              </div>
            </div>
            <CardContent className="p-3 sm:p-4">
              <div className="flex justify-between items-center mb-2">
                <h2 className="f-Nohemi-Light-BF6438cc583f70b text-lg sm:text-[23px] font-semibold text-sky-700 transition-colors duration-300">
                  {destination.country}
                </h2>
                <div className="flex items-center bg-sky-100 rounded-full px-2 py-1">
                  <span className="text-xs sm:text-sm font-medium text-sky-900">₹{destination.price.toLocaleString('en-IN')}</span>
                </div>
              </div>
              <p className="f-Nohemi-Light-BF6438cc583f70b text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                {destination.description}
              </p>  
            </CardContent>
            <CardFooter className="px-3 sm:px-4 py-2 sm:py-3 bg-sky-50 flex justify-between items-center">
              <div className="flex items-center">
                <div className="flex mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 sm:w-4 sm:h-4 ${
                        i < Math.floor(destination.rating) ? "text-amber-400" : "text-gray-300"
                      }`}
                      fill="currentColor"
                    />
                  ))}
                </div>
                <span className="text-xs sm:text-sm font-medium text-sky-900">{destination.rating.toFixed(1)}</span>
              </div>
              <Button size="sm" className="f-Nohemi-Light-BF6438cc583f70b bg-amber-500 hover:bg-amber-600 text-white transition-colors text-xs sm:text-sm"
              onClick={() => handleClick(destination.url)}
              >
                {destination.btn}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}