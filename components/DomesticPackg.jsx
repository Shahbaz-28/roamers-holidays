"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Calendar,
  Truck,
  ChevronUp,
  Star,
  Clock,
} from "lucide-react";

function DomesticPackg({ details }) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Debugging the details object
  console.log("details", details);
  console.log("Itinerary length:", Object.keys(details.itinerary).length);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div id="overview" className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[100vh] overflow-hidden">
        <Image
          src={details.images}
          alt={details.place}
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0c4a6e] flex flex-col justify-end p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-2 sm:mb-4">
            {details.place}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white mb-4 sm:mb-6 md:mb-8">
            Discover the beauty of {details.place}
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12 md:space-y-16 py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-0">
        {/* Quick Overview Section */}
        <section className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <Card className="bg-white">
            <CardContent className="p-4 sm:p-6 flex flex-col items-center text-center">
              <Clock className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#0c4a6e] mb-2 sm:mb-4" />
              <h3 className="text-lg text-[#0c4a6e] sm:text-xl font-semibold mb-1 sm:mb-2">Duration</h3>
              <p className="text-sm sm:text-base text-gray-600">
                {Object.keys(details.itinerary).length} Days
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white">
            <CardContent className="p-4 sm:p-6 flex flex-col items-center text-center">
              <MapPin className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#0c4a6e] mb-2 sm:mb-4" />
              <h3 className="text-lg text-[#0c4a6e] sm:text-xl font-semibold mb-1 sm:mb-2">Destinations</h3>
              <p className="text-sm sm:text-base text-gray-600">{details.place}</p>
            </CardContent>
          </Card>
          <Card className="sm:col-span-2 md:col-span-1 bg-white">
            <CardContent className="p-4 sm:p-6 flex flex-col items-center text-center">
              <Star className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#0c4a6e] mb-2 sm:mb-4" />
              <h3 className="text-lg text-[#0c4a6e] sm:text-xl font-semibold mb-1 sm:mb-2">Experience</h3>
              <p className="text-sm sm:text-base text-gray-600">Unforgettable</p>
            </CardContent>
          </Card>
        </section>

        {/* Price and Booking Section */}
        <Card className="border-2 border-[#0c4a6e] shadow-lg bg-white">
          <CardContent className="p-4 sm:p-6 md:p-8 flex flex-col sm:flex-row justify-between items-center">
            <div className="text-center sm:text-left mb-4 sm:mb-0">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0c4a6e]">
                ₹{details.price.toLocaleString()}
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-600">per person</p>
            </div>
            <div className="space-y-2 w-full sm:w-auto">
              <Button 
                size="lg" 
                className="text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto bg-[#0c4a6e] hover:bg-[#7dd3fc] text-white hover:text-[#0c4a6e] transition-colors duration-300"
              >
                Book Now
              </Button>
              <p className="text-xs sm:text-sm text-gray-500 text-center">
                Limited spots available
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Itinerary Section */}
        <section id="itinerary">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 flex items-center text-[#0c4a6e]">
            <Calendar className="mr-2 sm:mr-4 text-[#0c4a6e] w-6 h-6 sm:w-8 sm:h-8" />
            Your Adventure Awaits
          </h2>
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            {Object.entries(details.itinerary).map(([day, itinerary], index) => {
              console.log(`Rendering Day ${index + 1}:`, itinerary); // Debugging each day of the itinerary
              return (
                <div key={day} className="flex">
                  <div className="flex flex-col items-center mr-2 sm:mr-4">
                    <div className="rounded-full bg-[#0c4a6e] text-white w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center font-bold text-sm sm:text-base">
                      {index + 1}
                    </div>
                    {index < Object.entries(details.itinerary).length - 1 && (
                      <div className="h-full w-0.5 bg-[#0c4a6e] mt-2"></div>
                    )}
                  </div>
                  <Card className="flex-grow bg-white">
                    <CardHeader className="p-3 sm:p-4 md:p-6">
                      <CardTitle className="text-lg sm:text-xl md:text-2xl font-semibold text-[#0c4a6e]">
                        Day {index + 1}: {itinerary.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-3 sm:p-4 md:p-6">
                      <p className="text-sm sm:text-base text-gray-600">{itinerary.details}</p>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </section>

        {/* Inclusions Section */}
        <section id="inclusions">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-[#0c4a6e]">What&apos;s Included</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {Object.entries(details.inclusions).map(([key, value]) => (
              <Card key={key} className="overflow-hidden bg-white">
                <CardContent className="p-4 sm:p-6 flex items-center space-x-3 sm:space-x-6">
                  <div className="bg-[#0c4a6e] bg-opacity-10 p-3 rounded-full">
                    <Truck className="w-8 h-8 sm:w-10 sm:h-10 text-[#0c4a6e]" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-[#0c4a6e]">{value}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 w-12 h-12 bg-[#0c4a6e] rounded-full flex items-center justify-center text-white"
        >
          <ChevronUp />
        </Button>
      )}
    </div>
  );
}

export default DomesticPackg;
