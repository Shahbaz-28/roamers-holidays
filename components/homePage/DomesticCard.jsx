"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Plane, Calendar, ChevronRight, Utensils, BedDouble } from 'lucide-react';import Image from "next/image";
import Link from "next/link";
import domesticPackages from "../../domesticData";

export default function DomesticCard() {
  const cardDetails = Object.values(domesticPackages);

  const handleClick = (url) => {
    window.location.href = url; // Redirects to the URL
  };

  return (
    <section className="container mx-auto py-8 sm:py-12 mt-6">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-sky-900 leading-tight">
          Discover the Beauty of India
        </h2>
        <p className="text-lg sm:text-xl text-sky-700 max-w-2xl mx-auto">
          Embark on unforgettable domestic tours and create lasting memories
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mx-2 lg:mx-0">
        {cardDetails.slice(0, 6).map((destination, index) => (
          <Card
            key={index}
            className="group overflow-hidden rounded-lg shadow-md transition-transform duration-300 bg-white hover:shadow-lg"
          >
            <div className="relative overflow-hidden">
              <Image
                src={destination.images}
                alt={`Scenic view of ${destination.place}`}
                width={400}
                height={224}
                className="w-full h-48 sm:h-56 object-cover transform transition-transform duration-300 group-hover:scale-105"
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
                <h3 className="text-lg sm:text-[23px] font-semibold text-sky-700">
                  {destination.place}
                </h3>
                <div className="flex items-center bg-sky-100 rounded-full px-2 py-1">
                  <span className="text-xs sm:text-sm font-medium text-sky-900">
                    ₹{destination.price.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 line-clamp-2">
                {destination.description}
              </p>
            </CardContent>
            <CardFooter className="px-3 sm:px-4 py-2 sm:py-3 bg-sky-50 flex justify-between items-center">
              <div className="flex items-center">
                <div className="flex items-center space-x-2">
                  <Plane className="w-4 h-4 text-sky-600" />
                  <Utensils className="w-4 h-4 text-sky-600" />
                  <BedDouble className="w-4 h-4 text-sky-600" />
                </div>
              </div>
              <Button
                size="sm"
                className="bg-amber-500 hover:bg-amber-600 text-white transition-colors text-xs sm:text-sm"
                onClick={() => handleClick(destination.url)}
              >
                {destination.btn}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="text-center mt-8 sm:mt-10">
        <Link href="/domestic" passHref>
          <Button
            size="lg"
            className="bg-sky-600 hover:bg-sky-700 text-white transition-colors"
          >
            View All Domestic Tours
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
